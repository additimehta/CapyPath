import React, { useState } from 'react';
import Dashboard from '../dashboard/dashboard'; // Import the Dashboard component
import './accountpage.css';

function LoginAndSignup({ onLogin }) {
  return (
    <div className="login-signup">
      <h1>Login or Sign Up</h1>
      <button onClick={onLogin}>Login</button>
      <button onClick={onLogin}>Sign Up</button>
    </div>
  );
}

function AccountPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="account-page">
      {isLoggedIn ? (
        <Dashboard onLogout={handleLogout} />
      ) : (
        <LoginAndSignup onLogin={handleLogin} />
      )}
    </div>
  );
}

export default AccountPage;
