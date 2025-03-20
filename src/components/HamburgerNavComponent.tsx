"use client";
import React, { useState } from "react";

const HamburgerNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative lg:pr-10">
      <button
        className=" p-4 text-white focus:outline-none"
        onClick={toggleMenu}
      >
        <div className="w-6 h-0.5 bg-black mb-1"></div>
        <div className="w-6 h-0.5 bg-black mb-1"></div>
        <div className="w-6 h-0.5 bg-black"></div>
      </button>
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-[#D9D9D9] text-white transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button className="text-black" onClick={toggleMenu}>
            X
          </button> 
        </div>
        <div className="w-full h-10 flex justify-center items-center">
            <h1 className="lg:text-2xl text-black" >Favorites</h1>
        </div>
        <ul className="flex flex-col items-center space-y-6 mt-10 text-black">
          <li>
            <a href="#about" className="text-2xl hover:text-gray-900">
              About
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default HamburgerNav;
