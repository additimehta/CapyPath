import React from 'react';
import { useNavigate } from 'react-router-dom';
import './dashboard.css'; // Optional: Add styles for the dashboard

function Dashboard({ onLogout }) {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    navigate('/dashboard'); //change /dashboard to the path of desired nav
  };

  return (
    <div className="dashboard">
      <h1>Welcome to Your Dashboard</h1>
      <p>You are logged in.</p>
      <button onClick={handleLogoutClick}>Logout</button>
    </div>
  );
}

export default Dashboard;