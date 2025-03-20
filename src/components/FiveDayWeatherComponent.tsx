import React from "react";

const FiveDayWeatherComponent = () => {
  return (
    <div className="w-full h-full flex justify-evenly items-center">
      <div className="">
        <img
          className="h-15"
          src="/assets/images/cloud.png"
          alt="Weather icon"
        />
        <h1>60°F</h1>
        <h1>Monday</h1>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img
          className="h-15"
          src="/assets/images/cloud.png"
          alt="Weather icon"
        />
        <h1>60°F</h1>
        <h1>Monday</h1>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img
          className="h-15"
          src="/assets/images/cloud.png"
          alt="Weather icon"
        />
        <h1>60°F</h1>
        <h1>Monday</h1>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img
          className="h-15"
          src="/assets/images/cloud.png"
          alt="Weather icon"
        />
        <h1>60°F</h1>
        <h1>Monday</h1>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img
          className="h-15"
          src="/assets/images/cloud.png"
          alt="Weather icon"
        />
        <h1>60°F</h1>
        <h1>Monday</h1>
      </div>
    </div>
  );
};

export default FiveDayWeatherComponent;
