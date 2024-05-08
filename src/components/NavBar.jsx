import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Company Logo and Name */}
        <div className="flex items-center">
          <img src="/path-to-your-logo.png" alt="logo" className="h-10 mr-4" />
          <h1 className="text-blue-600 text-lg font-bold">Towhid Foundation</h1>
        </div>

        {/* Hamburger Menu Icon for Small Screens */}
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-blue-600 hover:text-blue-800 focus:outline-none"
          >
            <TiThMenu className="w-8 h-8" />
          </button>
        </div>

        {/* Navigation Links (responsive) */}
        <ul
          className={`lg:flex lg:items-center lg:space-x-4 ${
            isOpen ? "block" : "hidden"
          } mt-4 lg:mt-0`}
        >
          <li>
            <Link to="/" className="text-blue-600 hover:text-blue-800">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about-us" className="text-blue-600 hover:text-blue-800">
              About Us
            </Link>
          </li>
          {/* Services Link with Dropdown */}
          <li className="relative group">
            <span className="text-blue-600 cursor-pointer hover:text-blue-800">
              Services
            </span>
            {/* Nested Services Menu */}
            <ul className="absolute bg-white text-gray-800 py-1 rounded-md shadow-md left-0 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <li>
                <Link
                  to="/services/education"
                  className="block px-4 py-2 hover:bg-blue-200 hover:text-blue-900"
                >
                  Education
                </Link>
              </li>
              <li>
                <Link
                  to="/services/medical"
                  className="block px-4 py-2 hover:bg-green-200 hover:text-green-900"
                >
                  Medical Service
                </Link>
              </li>
              <li>
                <Link
                  to="/services/ambulance"
                  className="block px-4 py-2 hover:bg-blue-200 hover:text-blue-900"
                >
                  Ambulance Service
                </Link>
              </li>
              <li>
                <Link
                  to="/services/others"
                  className="block px-4 py-2 hover:bg-green-200 hover:text-green-900"
                >
                  Other Services
                </Link>
              </li>
            </ul>
          </li>
          {/* Other Navigation Links */}
          <li>
            <Link to="/stuff" className="text-blue-600 hover:text-blue-800">
              Stuff
            </Link>
          </li>
          <li>
            <Link to="/login" className="text-blue-600 hover:text-blue-800">
              Login
            </Link>
          </li>
          <li>
            <Link to="/register" className="text-blue-600 hover:text-blue-800">
              Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

