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
    navigate('/homepage'); //change /dashboard to the path of desired nav
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

  const handleForm = () => {
    navigate('/form');
  };

  const handleCardClick = () => {
    navigate('/form');
  };

  return (
    <div className="dashboard">
      <h1>Welcome to Your Dashboard</h1>
      <p>You are logged in.</p>
      <div className="image-container">
        <img src={card1} className="dashboard-image" />
        <img src={card2} className="dashboard-image" />
        <img src={card3} className="dashboard-image" />
        <img src={card4} className="dashboard-image" />
        <img src={card5} className="dashboard-image" />
      </div>
      <button onClick={handleLogoutClick}>Logout</button>
    </div>
  );
}

export default Dashboard;
