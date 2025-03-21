import React from "react";
interface proptypes {
  mainTempDisplay: number | undefined;
  cityName: string;
  tempHighs: number | undefined;
  tempLows: number | undefined;
}
const CurrentTempDisplayComponent = (props: proptypes) => {
  const { mainTempDisplay, cityName, tempHighs, tempLows } = props;
  return (
    <div className="w-full h-auto">
      <div className="w-full h-20 flex justify-center items-center md:flex-none lg:flex lg:justify-start transform-all duration-300 ">
        <h1 className="text-[65px] md:text-[40px] lg:text-[65px] text-black">{`${mainTempDisplay}°F`}</h1>
      </div>
      <div className="w-full h-auto flex flex-col justify-center items-center lg:justify-start lg:items-start gap-2 text-black text-[20px] transform-all duration-300">
        <div className="lg:text-2xl">
          <h2>{cityName}</h2>
        </div>
        <div className="w-full flex justify-between lg:justify-center lg:items-center-20">
          <div className="w-40 h-15 lg:w-full flex items-center justify-center md:items-end lg:justify-start text-[20px] lg:text-2xl">
            <h2>{`High: ${tempHighs}°F`}</h2>
          </div>
          <div className="w-40 h-15 lg:w-full flex items-center justify-center md:items-end lg:justify-start text-[20px] lg:text-2xl">
            <h2>{`Low: ${tempLows}°F`}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentTempDisplayComponent;
