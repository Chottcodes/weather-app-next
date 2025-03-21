"use client";
import React, { useState, useEffect } from "react";
interface HamburgerNavProps {
  onFavoriteClick?: (cityName: string) => void;
}

const HamburgerNav = (props:HamburgerNavProps) => {
  const {onFavoriteClick} = props
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    if (isOpen) {
      const loadFavorites = () => {
        const favoritesData = localStorage.getItem("favorites");
        if (favoritesData) {
          setFavorites(JSON.parse(favoritesData));
        }
      };

      loadFavorites();
    }
  }, [isOpen]);
  const handleFavoriteClick = (cityName:string) => {
    if (onFavoriteClick) {
      onFavoriteClick(cityName);
    }
    toggleMenu()
  };

  return (
    <div className="relative lg:pr-10">
      <button
        className=" p-4 text-white focus:outline-none"
        onClick={toggleMenu}
      >
        <div className="w-6 h-1 bg-black mb-1"></div>
        <div className="w-6 h-1 bg-black mb-1"></div>
        <div className="w-6 h-1 bg-black"></div>
      </button>
      <div
        className={`fixed top-0 right-0 w-64 h-full z-10 bg-[#D9D9D9] text-white transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button className="text-black" onClick={toggleMenu}>
            X
          </button>
        </div>
        <div className="w-full h-10 flex justify-center items-center">
          <h1 className="lg:text-2xl text-black">Favorites</h1>
        </div>
        <ul className="flex flex-col items-center space-y-6 mt-10 text-black">
          {favorites.map((favorite, index) => (
            <li key={index} className="w-full text-center">
              <button
                onClick={() => handleFavoriteClick(favorite)}
                className="text-lg hover:text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 w-full"
              >
                {favorite}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default HamburgerNav;
