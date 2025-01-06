import React, { useState } from 'react';
import { Account } from 'appwrite';
import { account } from './config/appwrite';
function Login({ onLoginSuccess, onSignupSwitch }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
try {
    account.createEmailPasswordSession(email ,password)
    onLoginSuccess();
} catch (error) {
    alert("error in login ")
}
   
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white border border-gray-300 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-center mb-6">
  <span className="text-green-500">Golden</span> <span className="text-black">Lake</span>
</h1>

      <h2 className="text-md font-bold text-center mb-6">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
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
          className="w-full py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
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
    </div>
  );
}

export default Login;  