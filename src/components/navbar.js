import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-green-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <a href="#">Golden Lake</a>
        </div>

        {/* Desktop Navbar */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="text-white hover:text-gray-400">Home</a>
          <a href="#services" className="text-white hover:text-gray-400">Services</a>
          <a href="#about" className="text-white hover:text-gray-400">About</a>
          <a href="#contact" className="text-white hover:text-gray-400">Contact</a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={handleMenuToggle}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMobileMenuOpen ? 'block' : 'hidden'
        } md:hidden bg-gray-700 text-white p-4 space-y-4`}
      >
        <a href="#home" className="block">Home</a>
        <a href="#services" className="block">Services</a>
        <a href="#about" className="block">About</a>
        <a href="#contact" className="block">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
