import React, { useState } from 'react';

import { account, createEmailSessionToken } from '../config/appwrite';

function Login({ onLoginSuccess, onSignupSwitch }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Create a session with email and password
      await account.createEmailPasswordSession(email, password);

      // Generate an email session token after login
      const userId = await createEmailSessionToken(email);

      // Call onLoginSuccess callback
      onLoginSuccess();

      setMessage(`Login successful! Session created successfully for user ID: ${userId}`);
      alert('Login successful!');
    } catch (error) {
      console.error('Error during login:', error);
      setMessage('Error in login. Please check your credentials.');
      alert('Error in login. Please check your credentials.');
    }
  };

  return (
  <>
  <div className="flex items-center justify-center min-h-screen  bg-gray-100">
    <div className="lg:w-1/4 mx-auto p-6 bg-white border border-blue-300 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-center mb-6">
        <span className="text-blue-500">Golden</span> <span className="text-black">Lake</span>
      </h1>
  
      <h2 className="text-md font-bold text-center mb-6">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-blue-700">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
  
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
  
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Log In
        </button>
  
        <p className="text-center mt-4">
          Don't have an account?{' '}
          <button
            type="button"
            onClick={onSignupSwitch}
            className="text-blue-500"
          >
            Sign Up
          </button>
        </p>
      </form>
  
      {message && (
        <div className="mt-4 text-center text-sm text-red-500">
          {message}
        </div>
      )}
    </div>
  </div>
  </>
  );
}

export default Login;
