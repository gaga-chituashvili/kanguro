import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { routes } from "../constant/route";

const Navigation = ({ mobile = false }) => {
  const navigate = useNavigate();

  const baseClasses =
    "cursor-pointer relative text-gray-600 font-medium hover:text-pink-500 transition-colors duration-200 after:absolute after:left-0 after:bottom-[-6px] after:h-[2px] after:w-0 after:bg-gradient-to-r from-pink-500 to-orange-400 after:transition-all hover:after:w-full";

  return (
    <nav>
      <ul
        className={`flex ${
          mobile ? "flex-col gap-6 items-center" : "gap-x-8 items-center"
        }`}
      >
        <li>
          <ScrollLink
            onClick={() => navigate(routes.home)}
            to="home"
            smooth={true}
            duration={500}
            offset={-80}
            className={baseClasses}
          >
            Home
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            offset={-80}
            className={baseClasses}
          >
            About
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            className={baseClasses}
          >
            Contact
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
