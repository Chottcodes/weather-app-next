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
    <div className="w-full h-full flex flex-col justify-center items-center relative">
      <button className="w-full h-full flex justify-center items-center cursor-pointer" onClick={onclick}>
        <img
            className={`${isBouncing ? 'animate-bounce h-10':'h-10'} `}
          src="/assets/images/location.png"
          alt="Navagation icon"
        />
      </button>
      <div className={`${isInputEmpty ? 'hidden':'block'} absolute top-full rounded-2xl border-2 bg-gray-600 lg:w-30 lg:mt-2` }>
        <h1 className='text-lg text-center text-white'>Tap icon to search</h1>
      </div>
    </div>
  );
};

export default SearchButtonComponent;
