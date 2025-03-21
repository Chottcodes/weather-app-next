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
      <div className="w-full h-20">
        <h1 className="text-[65px] md:text-[40px] text-black">{`${mainTempDisplay}°F`}</h1>
      </div>
      <div className="w-full h-auto flex flex-col gap-2 text-black text-[20px]">
        <div className="">
          <h2>{cityName}</h2>
        </div>
        <div className="w-full flex justify-between h-20">
          <div className="w-40 h-15 flex items-end text-[20px]">
            <h2>{`High: ${tempHighs}°F`}</h2>
          </div>
          <div className="w-40 h-15 flex items-end text-[20px]">
            <h2>{`Low: ${tempLows}°F`}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentTempDisplayComponent;
