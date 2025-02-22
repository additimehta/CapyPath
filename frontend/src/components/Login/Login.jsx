import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

import user_icon from "../../assets/person.png";
import email_icon from "../../assets/email.png";
import password_icon from "../../assets/password.png";


const Login = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/dashboard'); //change /dashboard to the path of desired nav
  };

  return (
    <div className="container">
      <div className="header">
        <h2>Login</h2>
        <div className="text"> Sign Up </div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="User Icon" />
          <input type="text" placeholder="Username" />
        </div>
        <div className="input">
          <img src={email_icon} alt="Email Icon" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <img src={password_icon} alt="Password Icon" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      <div className="forgot-password"><span>Forgot Password?</span><span>Click Here!</span></div>
        <div className="submit-container">
        <div className="submit">Sign Up</div>

        <div className="submit" onClick={handleLoginClick}>Login</div>
       </div>
    </div>
  );
};

export default Login;
