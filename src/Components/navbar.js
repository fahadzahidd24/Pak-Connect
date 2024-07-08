import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../Assets/logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="z-10 font-[Barlow] w-full">
      <nav className="bg-white md:bg-transparent flex items-center justify-between px-8 md:px-16 py-4 relative">
        <img
          src={logo}
          alt="Logo"
          className="h-12 md:h-14 hover:cursor-pointer bg-[#4F7942] p-1 md:bg-transparent"
          onClick={() => (window.location.href = "/")}
        />
        <div
          className="md:hidden bg-[#4F7942] p-2 hover:cursor-pointer"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <AiOutlineClose className="text-white h-6 w-6" />
          ) : (
            <AiOutlineMenu className="text-white h-6 w-6" />
          )}
        </div>
        <ul className="hidden md:flex md:items-center md:space-x-10 text-lg">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-white font-bold" : "text-[#e3e8e6] hover:text-white"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-white font-bold" : "text-[#e3e8e6] hover:text-white"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "text-white font-bold" : "text-[#e3e8e6] hover:text-white"
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                isActive ? "text-white font-bold" : "text-[#e3e8e6] hover:text-white"
              }
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/faqs"
              className={({ isActive }) =>
                isActive ? "text-white font-bold" : "text-[#e3e8e6] hover:text-white"
              }
            >
              FAQ's
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-white font-bold" : "text-[#e3e8e6] hover:text-white"
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className="bg-[#4F7942] text-white px-6 py-3 rounded-full hover:bg-[#3c5c32] ease-in transition hover:cursor-pointer"
            >
              Appointment
            </NavLink>
          </li>
        </ul>
        {isMenuOpen && (
          <ul className="bg-white flex flex-col items-start space-y-4 py-4 px-4 md:hidden absolute top-full left-0 w-full text-lg z-20">
            <li>
              <NavLink
                to="/"
                className="text-[#4F7942] hover:text-[#3c5c32]"
                onClick={toggleMenu}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="text-[#4F7942] hover:text-[#3c5c32]"
                onClick={toggleMenu}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className="text-[#4F7942] hover:text-[#3c5c32]"
                onClick={toggleMenu}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                className="text-[#4F7942] hover:text-[#3c5c32]"
                onClick={toggleMenu}
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/faqs"
                className="text-[#4F7942] hover:text-[#3c5c32]"
                onClick={toggleMenu}
              >
                FAQ's
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="text-[#4F7942] hover:text-[#3c5c32]"
                onClick={toggleMenu}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
