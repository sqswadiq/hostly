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
        <a href="#hero" className="text-2xl font-bold text-hostly-accent">
          <img
            src="/hostlylogo.png"
            alt="logo"
            className="h-7 md:h-10 w-auto cursor-pointer"
          />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-hostly-accent items-center md:text-lg">
          <li>
            <a
              href="#hero"
              className="hover:text-hostly-secondary transition-colors cursor-pointer"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#space"
              className="hover:text-hostly-secondary transition-colors cursor-pointer"
            >
              Spaces
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="bg-hostly-secondary text-hostly-accent px-4 py-2 rounded-full text-left pulse-zoom inline-block"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-hostly-secondary transition-colors cursor-pointer"
            >
              About
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-hostly-accent transition-transform duration-300 ease-in-out"
        >
          <div className="relative w-6 h-6">
            {/* Close Icon */}
            <MdClose
              size={24}
              className={`absolute top-0 left-0 transition-all duration-300 ease-in-out ${
                isOpen ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            />

            {/* Menu Icon */}
            <CgMenuRight
              size={24}
              className={`absolute top-0 left-0 transition-all duration-300 ease-in-out ${
                !isOpen ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 bg-hostly-primary mt-2 px-4 py-4 text-hostly-accent font-medium">
          <li>
            <a
              href="#hero"
              className="hover:text-hostly-secondary transition-colors"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#space"
              className="hover:text-hostly-secondary transition-colors"
            >
              Spaces
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-hostly-secondary transition-colors"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="bg-hostly-secondary hover:bg-yellow-500 text-hostly-accent px-4 py-2 rounded-full transition-all inline-block text-left ms-[-8px]"
            >
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
