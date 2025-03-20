import React from "react";

const CurrentTempDisplayComponent = () => {
  return (
    <div className="w-full h-auto p-4">
      <div className="w-full h-20">
        <h1 className="text-[55px] text-black">60°F</h1>
      </div>
      <div className="w-full h-auto flex flex-col text-black text-[20px]">
        <h2>Hayward, CA</h2>
        <div className="w-full flex justify-between h-20">
          <div className="w-40 h-10 flex items-center text-[20px]">
            <h2>High: 62°F</h2>
          </div>
          <div className="w-40 h-10 flex items-center text-[20px]">
            <h2>Low: 48°F</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentTempDisplayComponent;
