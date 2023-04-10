import React, { useState } from 'react';
import './LoginRegisterPage.css';
import LoginForm from '../LoginForm/LoginForm';
import RegisterForm from '../RegisterForm/RegisterForm';

const LoginRegisterPage = ({ setAccessToken }) => {
  const [showLogin, setShowLogin] = useState(true);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleRegisterClick = () => {
    setShowLogin(false);
  };

  return (
    <div className="login-register-page">
      <div className="form-container">
        <div className="form-switcher">
          <span
            className={showLogin ? 'active' : ''}
            onClick={handleLoginClick}
          >
            Login
          </span>
          <span
            className={!showLogin ? 'active' : ''}
            onClick={handleRegisterClick}
          >
            Register
          </span>
        </div>
        {showLogin ? (
          <LoginForm setAccessToken={setAccessToken} />
        ) : (
          <RegisterForm setAccessToken={setAccessToken} />
        )}
        <div className="switch-form">
          {showLogin ? (
            <div>
              Don't have an account?{' '}
              <span onClick={handleRegisterClick}>Register</span>
            </div>
          ) : (
            <div>
              Already have an account?{' '}
              <span onClick={handleLoginClick}>Login</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginRegisterPage;
