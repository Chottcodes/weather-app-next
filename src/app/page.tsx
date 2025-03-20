"use client";

import HamburgerNav from "@/components/HamburgerNavComponent";
import InputComponent from "@/components/InputComponent";
import LikeButtonComponent from "@/components/LikeButtonComponent";

export default function Home() {
  return (
    <div
      className="w-full h-screen flex flex-col justify-center items-center"
      style={{
        backgroundImage: "url('/assets/images/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="lg:h-[90%] lg:w-[90%] lg:rounded-xl border-gray-300 border-4 drop-shadow-4xl bg-[#e5e5e5e4] flex flex-col justify-center">
        <div className="w-full h-16 flex justify-end items-center">
          <HamburgerNav />
        </div>
        <div className="w-full h-[95%] flex bg-amber-500 ">
          <div className="w-[50%] h-[80%] bg-green-600"></div>
          <div className="w-[50%] h-[80%] bg-red-500 flex flex-col justify-center items-center">
            <div className="w-full h-20">
              <h1 className="text-[55px] text-black">60°F</h1>
            </div>
            <div className="w-full h-20 flex flex-col text-black text-[20px]">
              <h2>Hayward,CA</h2>
              <div className="w-full h-20 flex">
                <div className="w-40 h-10 flex items-center text-[20px]">
                  <h2>High:62°F</h2>
                </div>
                <div className="w-40 h-10 flex items-center text-[20px]">
                  <h2>Low:48°F</h2>
                </div>
              </div>
            </div>
            <div className="w-full h-40 flex justify-start items-center">
              <img
                className="h-10 pr-5"
                src="/assets/images/location.png"
                alt="Navagation icon"
              />
              <div className="w-[60%]">
              <InputComponent />
              </div>
              <div className="h-20 w-20 flex justify-center items-center">
              <LikeButtonComponent isLiked={false} onClick={()=> console.log('works')}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
