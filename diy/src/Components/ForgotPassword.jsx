import React from 'react';
import './ForgotPassword.css'; // Ensure this path is correct

const ForgotPassword = () => {
  return (
    <div className="forgot-password-container">
      <div className="forgot-password-form">
        <h3 className="forgot-password-title">Forgot Password</h3>
        <form>
          <label className="forgot-password-label">
            Email:
            <input className="forgot-password-input" type="email" name="email" required />
          </label>
          <label className="forgot-password-label">
            Password:
            <input className="forgot-password-input" type="password" name="password" required />
          </label>
          <label className="forgot-password-label">
            Confirm Password:
            <input className="forgot-password-input" type="password" name="confirm-password" required />
          </label>
          <button className="forgot-password-button" type="submit">Reset Password</button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;