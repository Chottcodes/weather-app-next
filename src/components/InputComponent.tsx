'use client'
import React from "react";

const InputComponent = () => {
  return (
    <div className="w-full h-full flex justify-start items-center">
      <div className="w-full h-15 border-2 border-black flex justify-start items-center relative">
        <img
          className="pl-5 pr-5 h-5 absolute"
          src="/assets/images/search-icon.png"
          alt="Search Icon"
        />
        <input type="text" className="h-full w-full focus:border-none pl-15" />
      </div>
    </div>
  );
};

export default InputComponent;
