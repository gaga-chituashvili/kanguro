import React from "react";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="backdrop-blur-md bg-white/70 border-b border-gray-200 flex justify-between items-center px-8 py-4 shadow-sm sticky top-0 z-50">
      {/* Logo */}
      <span className="flex items-center gap-2 text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 flex items-center justify-center text-white font-bold">
          K
        </div>
        Kan-Guroo
      </span>

      {/* Navigation */}
      <Navigation />

      {/* Auth Buttons */}
      <article className="flex gap-x-3">
        <button className="px-4 py-1.5 border border-gray-300 rounded-full text-gray-700 font-medium hover:bg-gray-100 transition">
          Sign In
        </button>
        <button className="px-4 py-1.5 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 text-white font-medium shadow hover:opacity-90 transition">
          Sign Up
        </button>
      </article>
    </header>
  );
};

export default Header;
