import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './dashboard.css'; // Optional: Add styles for the dashboard

import card1 from "../../assets/cardDone.png";
import card2 from "../../assets/card.png";
import card3 from "../../assets/card.png";
import card4 from "../../assets/card.png";
import card5 from "../../assets/card.png";

function Dashboard({ onLogout }) {
  const navigate = useNavigate();
  const cardRefs = useRef([]);

  const handleLogoutClick = () => {
    navigate('/dashboard'); //change /dashboard to the path of desired nav
  };

  const scrollToCard = (index) => {
    cardRefs.current[index].scrollIntoView({ behavior: "smooth" });
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
      <div className="button-container">
        <button onClick={() => scrollToCard(0)}>Card 1</button>
        <button onClick={() => scrollToCard(1)}>Card 2</button>
        <button onClick={() => scrollToCard(2)}>Card 3</button>
        <button onClick={() => scrollToCard(3)}>Card 4</button>
        <button onClick={() => scrollToCard(4)}>Card 5</button>
    </div>
    <button onClick={handleLogoutClick}>Logout</button>
  </div> 
  );
}

export default Dashboard;