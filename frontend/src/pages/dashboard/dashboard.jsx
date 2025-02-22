import React from 'react';
import { useNavigate } from 'react-router-dom';
import './dashboard.css'; // Optional: Add styles for the dashboard

import card1 from "../../assets/card.png";
import card2 from "../../assets/card.png";
import card3 from "../../assets/card.png";

function Dashboard({ onLogout }) {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    navigate('/dashboard'); //change /dashboard to the path of desired nav
  };

  return (
    <div className="dashboard">
      <h1>Welcome to Your Dashboard</h1>
      <p>You are logged in.</p>
      <div className="image-container">
        <img src={card1} className="dashboard-image" />
        <img src={card2} className="dashboard-image" />
        <img src={card3} className="dashboard-image" />
      </div>
      <button onClick={handleLogoutClick}>Logout</button>
    </div>
  );
}

export default Dashboard;