"use client";
import Image from "next/image";
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
    <div className="w-full h-full flex justify-start items-center transform-all duration-300 ">
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
        <Image
          className="md:h-7 md:w-7 lg:h-10  lg:w-10  pl-5 pr-5 absolute"
          src="/assets/images/search-icon.png"
          alt="Search Icon"
          width={100}
          height={100}
        />
        <input
          type="text"
          onChange={onChange}
          value={value}
          onKeyDown={onKeydown}
          className="h-full w-full focus:border-none border-none pl-12"
        />
      </div>
    </div>
  );
};

export default InputComponent;
