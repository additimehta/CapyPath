import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './dashboard.css'; // Ensure this file includes the horizontal scroll styles

import addcard from "../../assets/cardDone.png";
import card1 from "../../assets/card.png";
import card2 from "../../assets/card.png";
import card3 from "../../assets/card.png";
import card4 from "../../assets/card.png";

function Dashboard({ onLogout }) {
  const navigate = useNavigate();
  const cardRefs = useRef([]);
  const [flippedCards, setFlippedCards] = useState([]); // Track flipped cards

  const handleLogoutClick = () => {
    navigate('/login'); // Change to your desired navigation path
  };

  const scrollToCard = (index) => {
    cardRefs.current[index].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center", // Center the card horizontally
    });
  };

  const handleCardFlip = (index) => {
    setFlippedCards((prev) => {
      const newFlipped = [...prev];
      newFlipped[index] = !newFlipped[index]; // Toggle flip state for the card
      return newFlipped;
    });
  };

  return (
    <div className="dashboard">
      <h1>Welcome to Your Dashboard</h1>
      <p>Let's gaze into your future!</p>
      
      <div className="cards-container">
        {[card1, card2, card3, card4].map((card, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className={`flip-card ${flippedCards[index] ? 'flipped' : ''}`}
            onClick={() => handleCardFlip(index)}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={card} className="dashboard-image" alt={`Card ${index + 1}`} />
              </div>
              <div className="flip-card-back">
                <h3>Card {index + 1} Details</h3>
                <p>This is the back of card {index + 1}.</p>
                <button onClick={(e) => { e.stopPropagation(); console.log(`Card ${index + 1} action`); }}>
                  Action
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button onClick={handleLogoutClick}>Logout</button>
    </div>
  );
}

export default Dashboard;
