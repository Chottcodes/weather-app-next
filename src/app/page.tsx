"use client";

import CurrentTempDisplayComponent from "@/components/CurrentTempDisplayComponent";
import FiveDayWeatherComponent from "@/components/FiveDayWeatherComponent";
import HamburgerNav from "@/components/HamburgerNavComponent";
import InputComponent from "@/components/InputComponent";
import LikeButtonComponent from "@/components/LikeButtonComponent";
import WeatherIcon from "@/components/WeatherIcon";

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
      <div className="lg:h-[90%] lg:w-[90%] lg:rounded-xl border-gray-300 border-4 drop-shadow-4xl bg-[#e5e5e5e4] flex flex-col justify-center text-black">
        <div className="w-full h-16 flex justify-end items-center">
          <HamburgerNav />
        </div>
        <div className="w-full h-[100%] flex flex-col">
          <div className="w-full h-full flex">
            <div className="w-[50%] h-full">
              <WeatherIcon />
            </div>
            <div className="w-[50%] h-full flex flex-col justify-center items-start">
              <div className="w-[40%]">
                <CurrentTempDisplayComponent />
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
                  <LikeButtonComponent
                    isLiked={false}
                    onClick={() => console.log("works")}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[40%]">
            <FiveDayWeatherComponent />
          </div>
        </div>
      </div>
    </div>
  );
}
