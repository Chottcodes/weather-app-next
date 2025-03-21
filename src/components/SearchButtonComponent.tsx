import Image from "next/image";
import React, { useEffect, useState } from "react";
interface propTypes {
    isInputEmpty:boolean
    onclick:()=>void
}
const SearchButtonComponent = (props:propTypes) => {
    const {isInputEmpty,onclick} = props
    const [isBouncing, setBouncing] = useState(false)
    useEffect(()=>{
        if(!isInputEmpty)
        {
            setBouncing(true)
            setTimeout(()=> {
                setBouncing(false)
            },3500)
        }
    },[isInputEmpty])
  return (
    <div className="w-full h-full flex flex-col justify-center items-center relative transform-all duration-300 ">
      <button className="w-full h-full flex justify-center items-center cursor-pointer" onClick={onclick}>
        <Image
        width={100}
        height={100}
            className={`${isBouncing ? 'animate-bounce h-10':'h-10'} h-[30px] w-[30px] md:h-7 md:w-7 lg:h-10 lg:w-10`}
          src="/assets/images/location.png"
          alt="Navagation icon"
        />
      </button>
      <div className={`${isInputEmpty ? 'hidden':'block'} absolute lg:left-0 lg:w-30 lg:mt-2 left-3 mt-3 w-[100px] top-full rounded-xl border-1 bg-gray-600 ` }>
        <h1 className='md:text-lg text-center text-white'>Tap icon to search</h1>
      </div>
    </div>
  );
};

export default SearchButtonComponent;
