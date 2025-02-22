import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import "./chatBot.css";

const AIChat = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const apiKey = "AIzaSyA8Der41jMH6lABkcLV5FZV7OV0_Yl1KD0Y"

  // System context for Capybara persona
  const SYSTEM_CONTEXT = `You are Capy, a sassy capybara who helps individuals with life decisions like applying to university. 
  You are knowledgeable, witty, and slightly sarcastic. Always give helpful advice but keep it fun and sassy.`;

  // Initialize Gemini AI
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  console.log(model);

  // Typing effect for AI responses
  const typeResponse = (text) => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setMessages((prev) => {
        const updatedMessages = [...prev];
        const lastMessage = updatedMessages[updatedMessages.length - 1];

        if (currentIndex < text.length) {
          lastMessage.text += text[currentIndex];
          currentIndex++;
        } else {
          clearInterval(interval);
        }
        return updatedMessages;
      });
    }, 30); // Typing speed
  };

  // Handle sending messages
  const handleSendMessage = async (text) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage = { text: text, isUser: true };
    setMessages((prev) => [...prev, userMessage]);

    setIsLoading(true);

    try {
      // Generate response with system context
      const prompt = `${SYSTEM_CONTEXT}\n\nUser: ${text}\nCapy:`;
      const result = await model.generateContent(prompt);
      const aiText = result.response.text();

      // Add AI message placeholder
      const aiMessage = { text: "", isUser: false };
      setMessages((prev) => [...prev, aiMessage]);

      // Type out response
      typeResponse(aiText);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        { text: "Hmm, my siesta brain isn't working. Try again?", isUser: false },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSendMessage(inputMessage);
    setInputMessage("");
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.isUser ? "user" : "ai"}`}>
            {message.text}
          </div>
        ))}
        {isLoading && <div className="message ai">Munching on leaves... 🌿</div>}
      </div>

      <form onSubmit={handleSubmit} className="input-form">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Ask Capy for advice..."
          disabled={isLoading}
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default AIChat;
