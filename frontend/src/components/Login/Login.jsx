import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

import user_icon from "../../assets/person.png";
import password_icon from "../../assets/password.png";


const Login = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/dashboard'); //change /dashboard to the path of desired nav
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text"> Login </div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="User Icon" />
          <input type="text" placeholder="Username/Email" />
        </div>
        <div className="input">
          <img src={password_icon} alt="Password Icon" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      <div className="forgot-password"><span>Forgot Password?</span></div>
        <div className="submit-container">

        <div className="submit" onClick={handleLoginClick}>Submit</div>
       </div>
    </div>
  );
};

export default Login;
