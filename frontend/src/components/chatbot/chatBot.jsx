import React, { useState, useRef, useEffect} from "react";
import "./chatBot.css";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: window.innerWidth - 380, y: window.innerHeight - 450 });
  const dragRef = useRef(null);
  const offset = useRef({ x: 0, y: 0 });
  const isDragging = useRef(false);

  useEffect (() => {
    const script= document.createElement("script");
    script.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
    script.type="text/javascript";
    script.onload= () => {
      window.voiceflow.chat.load({
        verify: { projectID: '67b9593c0c1f7b1c4e81e332'},
        versionID: 'production',
        voice: {
          url: "https://runtime-api.voiceflow.com"
        }
      });
    };
    document.body.appendChild(script);
  }, []);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseDown = (e) => {
    isDragging.current = true;
    offset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div
      className="chatbot-container"
      style={{left: position.x, top: position.y}}
      ref={dragRef}
      onMouseDown={handleMouseDown}
    >
      <button onClick={toggleChat}>Chat</button>
      {isOpen && (
        <div className="chatbot">
        </div>
      )}
    </div>
  );
};

export default Chatbot;
