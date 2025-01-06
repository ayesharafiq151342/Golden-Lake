import React, { useState } from 'react';
import { account } from './config/appwrite';

function Signuppage({ onSignupSwitch }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(''); // Message state for email error

  // Email validation regex
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage(''); // Reset message before validation

    // Validate email
    if (email === '') {
      setMessage('Please enter an email address.');
    } else if (!emailRegex.test(email)) {
      setMessage('Email address is not valid.');
    } else {
      console.log('Form submitted', { name, phone, email, password });

      // Reset form fields if needed
      setName('');
      setPhone('');
      setEmail('');
      setPassword('');

      try {
        // Create the user in Appwrite
        const signUpResponse = await account.create('unique()', email, password, name);
        console.log('User created successfully:', signUpResponse);
        onSignupSwitch(); // Switch to login page
      } catch (error) {
        console.error('Error signing up:', error);
        setMessage(error.message); // Show error message if signup fails
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white border border-gray-300 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-center mb-6">
  <span className="text-green-500">Golden</span> <span className="text-black">Lake</span>
</h1>

        <h2 className="text-md font-bold text-center mb-6">Create Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="text" // Changed to text to handle phone numbers that start with 0
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {message && <p className="text-red-500 text-sm">{message}</p>} {/* Display error message */}

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
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
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signuppage;