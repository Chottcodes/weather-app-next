'use client'
import React from "react";
interface InputComponentProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  onKeydown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}
const InputComponent = (props:InputComponentProps) => {
  const {onChange, value,onKeydown} = props;
  return (
    <div className="w-full h-full flex justify-start items-center">
      <div className="w-full h-15 border-2 border-black flex justify-start items-center relative">
        <img
          className="pl-5 pr-5 h-5 absolute"
          src="/assets/images/search-icon.png"
          alt="Search Icon"
        />
        <input type="text" onChange={onChange} value={value} onKeyDown={onKeydown}  className="h-full w-full focus:border-none pl-15" />
      </div>
    </div>
  );
};

export default InputComponent;
