import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsList } from 'react-icons/bs'; // Import menu icon from react-icons/bs
import { FaUser, FaSignInAlt } from 'react-icons/fa'; // Import user and sign-in icons from react-icons/fa

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Company Name */}
        <div className="flex items-center">
          <img src="/company-logo.png" alt="Company Logo" className="h-10 mr-4" />
          <h1 className="text-white text-lg font-semibold">Company Name</h1>
        </div>

        {/* Menu Icon (visible on mobile) */}
        <div className="block md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-gray-300 focus:outline-none"
          >
            <BsList className="w-6 h-6" /> {/* Menu Icon from react-icons/bs */}
          </button>
        </div>

        {/* Navigation Links (visible on tablet/desktop) */}
        <ul className="md:flex md:flex-wrap justify-center items-center hidden md:block w-full md:w-auto">
          <li className="my-2 md:my-0">
            <Link to="/" className="text-white hover:text-gray-300 px-4 py-2 block">
              Home
            </Link>
          </li>
          <li className="my-2 md:my-0">
            <Link to="/services" className="text-white hover:text-gray-300 px-4 py-2 block">
              Services
            </Link>
          </li>
          <li className="my-2 md:my-0">
            <Link to="/about-us" className="text-white hover:text-gray-300 px-4 py-2 block">
              About Us
            </Link>
          </li>
          <li className="my-2 md:my-0">
            <Link to="/notice" className="text-white hover:text-gray-300 px-4 py-2 block">
              Notice
            </Link>
          </li>
          <li className="my-2 md:my-0">
            <Link to="/news-update" className="text-white hover:text-gray-300 px-4 py-2 block">
              News & Updates
            </Link>
          </li>
        </ul>

        {/* Login & Signup (visible on tablet/desktop) */}
        <div className="hidden md:flex items-center">
          <Link to="/login" className="text-white hover:text-gray-300 px-4 py-2">
            <FaUser className="w-6 h-6 mr-1" /> {/* User Icon from react-icons/fa */}
            Login
          </Link>
          <Link to="/signup" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg ml-4">
            <FaSignInAlt className="w-6 h-6 mr-1" /> {/* Sign In Icon from react-icons/fa */}
            Sign Up
          </Link>
        </div>

        {/* Overlay Menu (visible on mobile) */}
        {isMenuOpen && (
          <div className="md:hidden w-full bg-gray-800 py-2">
            <ul className="text-white text-center">
              <li>
                <Link to="/" className="block py-2">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="block py-2">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="block py-2">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/notice" className="block py-2">
                  Notice
                </Link>
              </li>
              <li>
                <Link to="/news-update" className="block py-2">
                  News & Updates
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

