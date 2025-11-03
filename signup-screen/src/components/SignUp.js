import React from 'react';
import './SignUp.css';
import googleIcon from '../assets/google-icon.svg';
import appleIcon from '../assets/apple-icon.svg';

const SignUp = () => {
  return (
    <div className="signup-container">
      <div className="signup-form">
        <h1>Get Started Now</h1>
        <form>
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>
          <div className="form-group checkbox-group">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">I agree to the terms & policy</label>
          </div>
          <button type="submit" className="signup-btn">Signup</button>
        </form>
        <div className="divider">Or</div>
        <div className="social-signup">
          <button className="google-btn">
            <img src={googleIcon} alt="Google icon" />
            Sign in with Google
          </button>
          <button className="apple-btn">
            <img src={appleIcon} alt="Apple icon" />
            Sign in with Apple
          </button>
        </div>
        <p className="signin-link">Have an account? <a href="#">Sign In</a></p>
      </div>
      <div className="signup-image">
      </div>
    </div>
  );
};

export default SignUp;