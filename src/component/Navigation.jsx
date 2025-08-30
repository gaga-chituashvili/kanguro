import React from "react";
import { Link } from "react-scroll";

const Navigation = () => {
  return (
    <nav>
      <ul className="flex gap-x-8 items-center">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-80} // რომ header-ს ქვეშ არ დაიფაროს
            className="cursor-pointer relative text-gray-600 font-medium hover:text-pink-500 transition-colors duration-200 after:absolute after:left-0 after:bottom-[-6px] after:h-[2px] after:w-0 after:bg-gradient-to-r from-pink-500 to-orange-400 after:transition-all hover:after:w-full"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer relative text-gray-600 font-medium hover:text-pink-500 transition-colors duration-200 after:absolute after:left-0 after:bottom-[-6px] after:h-[2px] after:w-0 after:bg-gradient-to-r from-pink-500 to-orange-400 after:transition-all hover:after:w-full"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer relative text-gray-600 font-medium hover:text-pink-500 transition-colors duration-200 after:absolute after:left-0 after:bottom-[-6px] after:h-[2px] after:w-0 after:bg-gradient-to-r from-pink-500 to-orange-400 after:transition-all hover:after:w-full"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
