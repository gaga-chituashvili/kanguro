// Navigation.jsx
import React from "react";

const Navigation = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600 cursor-pointer">
          MyLogo
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-8">
          <li>
            <a
              href="#home"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Optional button */}
        <div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
