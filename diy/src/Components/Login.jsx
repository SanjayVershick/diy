import React from 'react';
import './Login.css'; // Ensure this path is correct
import logo from '../assets/logo1.png';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <img src={logo} alt='Login Image' className='login-image' />
        <h3 className="login-title">Login Page</h3>
        <form>
          <div className="input-group">
            <label className="login-label">
              Username:
            </label>
            <input className="login-input" type="text" name="username" />
          </div>
          <div className="input-group">
            <label className="login-label">
              Password:
            </label>
            <input className="login-input" type="password" name="password" />
          </div>
          <div className="login-links">
            <a href="/ForgotPassword" className="login-link">Forgot Password?</a>
          </div>
          <button className="login-button" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;