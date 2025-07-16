import { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { MdClose } from "react-icons/md";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className={`bg-hostly-primary shadow-lg px-4 py-3 fixed w-full z-50 top-0 ${
        isOpen ? "rounded-b-2xl" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Brand logo */}
        <div className="text-2xl font-bold text-hostly-accent">
          <img
            src="/hostlylogo.png"
            alt="logo"
            className="h-7 md:h-10 w-auto"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-hostly-accent items-center md:text-lg ">
          <li className="hover:text-hostly-secondary transition-colors cursor-pointer">
            Home
          </li>
          <li className="hover:text-hostly-secondary transition-colors cursor-pointer">
            Spaces
          </li>
          <li>
            <button className="pulse-zoom bg-hostly-secondary text-hostly-accent px-4 py-2 rounded-full w-full text-left">
              Contact
            </button>
          </li>
          <li className="hover:text-hostly-secondary transition-colors cursor-pointer">
            About
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-hostly-accent transition-transform duration-100 ease-in-out"
        >
          <div className="relative w-6 h-6">
            {/* Close Icon */}
            <MdClose
              size={24}
              className={`absolute top-0 left-0 transition-all duration-700 ease-in-out ${
                isOpen ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            />

            {/* Menu Icon */}
            <CgMenuRight
              size={24}
              className={`absolute top-0 left-0 transition-all duration-700 ease-in-out ${
                !isOpen ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 bg-hostly-primary mt-2 px-4 py-4 text-hostly-accent font-medium ">
          <li className="hover:text-hostly-secondary cursor-pointer">Home</li>
          <li className="hover:text-hostly-secondary cursor-pointer">Spaces</li>
          <li className="hover:text-hostly-secondary cursor-pointer">About</li>
          <li>
            <button className="bg-hostly-secondary hover:bg-yellow-500 text-hostly-accent  px-4 py-2 rounded-full transition-all text-left ms-[-8px]">
              Contact
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}
