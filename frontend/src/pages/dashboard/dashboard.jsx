import React from 'react';
import './dashboard.css'; // Optional: Add styles for the dashboard

function Dashboard({ onLogout }) {
  return (
    <div className="dashboard">
      <h1>Welcome to Your Dashboard</h1>
      <p>You are logged in.</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;