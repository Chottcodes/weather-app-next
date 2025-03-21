"use client";
import React from "react";
interface InputComponentProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  onKeydown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  isValueEmpty: boolean;
}
const InputComponent = (props: InputComponentProps) => {
  const { onChange, value, onKeydown, isValueEmpty } = props;
  return (
    <div className="w-full h-full flex justify-start items-center ">
      <div
        className={`${
          isValueEmpty ? "border-red-700 border-1" : "border-black"
        } w-full h-full border-2  flex justify-start items-center relative`}
      >
        <p
          className={`${
            isValueEmpty ? "text-red-600 block" : " hidden "
          } w-full text-sm absolute bottom-full `}
        >
          Please Enter Location
        </p>
        <img
          className="pl-5 pr-5 h-5 absolute"
          src="/assets/images/search-icon.png"
          alt="Search Icon"
        />
        <input
          type="text"
          onChange={onChange}
          value={value}
          onKeyDown={onKeydown}
          className="h-full w-full focus:border-none border-none pl-15 "
        />
      </div>
    </div>
  );
};

export default InputComponent;
