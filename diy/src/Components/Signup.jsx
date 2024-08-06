import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css'; // Ensure this path is correct

const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSignupSuccessful, setIsSignupSuccessful] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [userName, setUserName] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    if (!fullName || !email || !password || !confirmPassword) {
      setErrorMessage('Please fill all fields');
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }
    setIsSignupSuccessful(true);
    setUserName(fullName); 
  };

  return (
    <div className="signup-container">
      <div className='card'>
        <h1 className="signup-title">
          {isSignupSuccessful ? <i>Thank You, {userName}!</i> : <i>Signup</i>}
        </h1>
        {isSignupSuccessful ? (
          <div className="signup-success">
            <p>Your signup was successful.</p>
            <Link to="/login" className="signup-link">Click here to login</Link>
          </div>
        ) : (
          <form onSubmit={handleSignup} className="signup-form">
            <div className="form-group">
              <label className="form-label">Full Name:</label>
              <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} className="form-input" />
            </div>
            <div className="form-group">
              <label className="form-label">E-mail:</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-input" />
            </div>
            <div className="form-group">
              <label className="form-label">Password:</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-input" />
            </div>
            <div className="form-group">
              <label className="form-label">Confirm Password:</label>
              <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="form-input" />
            </div>
            <button type="submit" className="signup-button">
              Sign Up
            </button>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </form>
        )}
        {!isSignupSuccessful && (
          <div className="signup-login-link">
            <p>Already have an account? <Link to="/login" className="signup-link">Login</Link></p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Signup;