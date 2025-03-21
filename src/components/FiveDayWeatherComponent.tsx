import React from "react";
interface proptypes {
  Temp: number | undefined;
  Name: string | undefined;
  Icon: string | undefined;
}
const FiveDayWeatherComponent = (props: proptypes) => {
  const { Temp, Name, Icon } = props;
  return (
    <div className="w-full h-full flex justify-evenly items-center transform-all duration-300">
      <div className="flex flex-col justify-center items-center lg:text-2xl">
        <img
          className="h-20"
          src={`https://openweathermap.org/img/wn/${Icon}.png`}
          alt="Weather icon"
        />
        <h1>{`${Temp}°F`}</h1>
        <h1>{Name}</h1>
      </div>
    </div>
  );
};

export default FiveDayWeatherComponent;
