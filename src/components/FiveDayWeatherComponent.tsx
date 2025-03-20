import React from "react";
interface proptypes {
  dayOneTemp: number | undefined
  dayOneName:string | undefined
  dayTwoTemp:number | undefined
  dayTwoName:string | undefined
  dayThreeTemp:number | undefined
  dayThreeName:string | undefined
  dayFourTemp: number | undefined
  dayFourName:string | undefined
  dayFiveTemp:number | undefined
  dayFivename:string | undefined
  dayOneIcon:string | undefined
  dayTwoIcon:string | undefined
  dayThreeIcon:string | undefined
  dayFourIcon:string | undefined
  dayFiveIcon:string | undefined
}
const FiveDayWeatherComponent = (props: proptypes) => {
  const { dayOneTemp, dayOneName, dayTwoTemp,dayTwoName,dayThreeTemp,dayThreeName,dayFourName,dayFourTemp,dayFiveTemp,dayFivename,dayOneIcon,dayTwoIcon,dayThreeIcon,dayFourIcon,dayFiveIcon } = props;
  return (
    <div className="w-full h-full flex justify-evenly items-center">
      <div className="">
        <img
          className="h-15"
          src={dayOneIcon}
          alt="Weather icon"
        />
        <h1>{`${dayOneTemp}°F`}</h1>
        <h1>{dayOneName}</h1>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img
          className="h-15"
          src={dayTwoIcon}
          alt="Weather icon"
        />
        <h1>{`${dayTwoTemp}°F`}</h1>
        <h1>{dayTwoName}</h1>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img
          className="h-15"
          src={dayThreeIcon}
          alt="Weather icon"
        />
        <h1>{`${dayThreeTemp}°F`}</h1>
        <h1>{dayThreeName}</h1>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img
          className="h-15"
          src={dayFourIcon}
          alt="Weather icon"
        />
        <h1>{`${dayFourTemp}°F`}</h1>
        <h1>{dayFourName}</h1>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img
          className="h-15"
          src={dayFiveIcon}
          alt="Weather icon"
        />
        <h1>{`${dayFiveTemp}°F`}</h1>
        <h1>{dayFivename}</h1>
      </div>
    </div>
  );
};

export default FiveDayWeatherComponent;
