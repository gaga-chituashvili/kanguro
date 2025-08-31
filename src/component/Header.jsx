import React, { useState } from "react";
import Navigation from "./Navigation";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "../constant/route";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="backdrop-blur-md bg-white/70 border-b border-gray-200 flex justify-between items-center px-8 py-4 shadow-sm sticky top-0 z-50 cursor-pointer">
      <span
        onClick={() => {
          scrollUp();
          navigate(routes.home);
        }}
        className="flex items-center gap-2 text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent"
      >
        <span className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 flex items-center justify-center text-white font-bold">
          K
        </span>
        Kan-Guroo
      </span>

      <div className="hidden md:flex">
        <Navigation />
      </div>

      <article className="hidden md:flex gap-x-3">
        <Link
          to={routes.signin}
          className="px-4 py-1.5 border border-gray-300 rounded-full text-gray-700 font-medium hover:bg-gray-100 transition"
        >
          Sign In
        </Link>
        <Link
          to={routes.signup}
          className="px-4 py-1.5 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 text-white font-medium shadow hover:opacity-90 transition"
        >
          Sign Up
        </Link>
      </article>

      <button
        className="md:hidden text-gray-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white/95 shadow-md rounded-b-2xl md:hidden flex flex-col items-center py-6 space-y-6">
          <Navigation mobile />
          <div className="flex flex-col gap-3 w-4/5">
            <Link
              to={routes.signin}
              className="px-4 py-2 border border-gray-300 rounded-full text-gray-700 font-medium hover:bg-gray-100 text-center transition"
              onClick={() => setIsOpen(false)}
            >
              Sign In
            </Link>
            <Link
              to={routes.signup}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 text-white font-medium shadow text-center hover:opacity-90 transition"
              onClick={() => setIsOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
