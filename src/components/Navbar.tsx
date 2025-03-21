


import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white text-white fixed w-full z-10 border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-3xl font-bold text-black">
          Portfolio
        </div>

       
        <ul className="hidden md:flex gap-8 text-lg font-medium  text-black">
          <li className="hover:text-purple-900 transition-colors duration-200">
            <a href="#hero">Home</a>
          </li>
          <li className="hover:text-purple-900 transition-colors duration-200">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-purple-900 transition-colors duration-200">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:text-purple-900  transition-colors duration-200">
            <a href="#skills">Skills</a>
          </li>
          <li className="hover:text-purple-900 transition-colors duration-200">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="md:hidden cursor-pointer text-black" onClick={toggleMenu}>
          {isMenuOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
      </div>

     
      {isMenuOpen && (
        <ul className="md:hidden flex flex-col items-center gap-6 py-8 text-gray-800 text-lg font-medium">
          <li>
            <a href="#hero" onClick={toggleMenu} className="hover:text-purple-900 transition-colors duration-200">Home</a>
          </li>
          <li>
            <a href="#about" onClick={toggleMenu} className="hover:text-purple-900 transition-colors duration-200">About</a>
          </li>
          <li>
            <a href="#products" onClick={toggleMenu} className="hover:text-purple-900 transition-colors duration-200">Projects</a>
          </li>
          <li>
            <a href="#skills" onClick={toggleMenu} className="hover:text-purple-900 transition-colors duration-200">Skills</a>
          </li>
          <li>
            <a href="#contact" onClick={toggleMenu} className="hover:text-purple-900 transition-colors duration-200">Contact</a>
          </li>
        </ul>
      )}
    </nav>
  );
}
