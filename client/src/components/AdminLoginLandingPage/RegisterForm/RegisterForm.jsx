import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = ({ setAccessToken }) => {

  const [username, setUsername] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('/api/register', { email, password });

      setAccessToken(response.data.accessToken);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <form className="flex flex-col px-5 gap-5 w-11/12 place-items-center" onSubmit={handleSubmit}>
      {error && <div className="error-message">{error}</div>}
      <div className="flex justify-start place-items-center px-5 w-11/12 h-10 bg-[#f0f0f0] rounded-full">
        {/* <label htmlFor="username">Username:</label> */}
        <input
          type="username"
          id="username"
          name="usenname"
          value={username}
          onChange={handleUsernameChange}
          placeholder="New Username"
          className="w-full bg-transparent border-none"
          required
          
        />
      </div>
      <div className="flex justify-start place-items-center px-5 w-11/12 h-10 bg-[#f0f0f0] rounded-full">
        {/* <label htmlFor="email">E-mail:</label> */}
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter Your E-mail"
          className="w-full bg-transparent border-none"
          required
        />
      </div>
      <div className="flex justify-start place-items-center px-5 w-11/12 h-10 bg-[#f0f0f0] rounded-full">
        {/* <label htmlFor="password">Password:</label> */}
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter Your Password"
          className="w-full bg-transparent border-none"
          required
        />
      </div>
      <div className="flex justify-start place-items-center px-5 w-11/12 h-10 bg-[#f0f0f0] rounded-full">
        {/* <label htmlFor="confirmPassword">Confirm Password:</label> */}
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          placeholder="Confirm Password"
          className="w-full bg-transparent border-none"
          required
        />
      </div>
      <button className="
          flex
          w-full h-10
          place-content-center place-items-center place-self-center 
          font-semibold text-blue-500
          bg-white rounded-full
          hover:text-lg hover:font-semibold hover:text-white hover:bg-gradient-to-r from-[#72afd3] to-[#37ecba]
          focus:opacity-75 focus:text-sm focus:font-bold"
      type="submit">REGISTER</button>
    </form>
  );
};

export default RegisterForm;