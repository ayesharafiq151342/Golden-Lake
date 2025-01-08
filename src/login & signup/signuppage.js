import React, { useState } from 'react';
import { account } from '../config/appwrite'; // Ensure correct import
import lakeImage from '../images/BACK.jpg'; // Replace with the path to your lake image

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
    } else if (phone === '') {
      setMessage('Please enter a phone number.');
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

        // Create a document in your Appwrite database after successful signup
        
        onSignupSwitch(); // Switch to login page
      } catch (error) {
        console.error('Error signing up:', error);
        setMessage(error.message); // Show error message if signup fails
      }
    }
  };

  return (
    <div 
    className="flex items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8"
    style={{ backgroundImage: `url(${lakeImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
  >
    <div className="w-full max-w-md p-6 bg-white border border-gray-300 rounded-lg shadow-lg">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4 sm:mb-6">
        <span className="text-blue-500">Golden</span> <span className="text-black">Lake</span>
      </h1>

      <h2 className="text-lg sm:text-xl font-bold text-center mb-4 sm:mb-6">Create Account</h2>
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
          />
        </div>

        {message && <p className="text-red-500 text-xs sm:text-sm">{message}</p>}

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base transition duration-150 ease-in-out"
        >
          Sign Up
        </button>
      </form>
    </div>
  </div>
  );
}

export default Signuppage; 