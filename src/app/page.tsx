"use client";

import CurrentTempDisplayComponent from "@/components/CurrentTempDisplayComponent";
import FiveDayWeatherComponent from "@/components/FiveDayWeatherComponent";
import HamburgerNav from "@/components/HamburgerNavComponent";
import InputComponent from "@/components/InputComponent";
import LikeButtonComponent from "@/components/LikeButtonComponent";
import WeatherIcon from "@/components/WeatherIcon";
import { GetWeather } from "@/lib/server";
import { stringify } from "querystring";
import { useState, useEffect, use } from "react";

export default function Home() {
  const [userSearchInput, setUserSearchInput] = useState<string>("");
  const [mainTempDisplay, setMainTempDisplay] = useState<number | undefined>();
  const [cityName, setCityName] = useState<string>("");
  const [tempHighs, setTempHighs] = useState<number | undefined>();
  const [tempLows, setTempLows] = useState<number | undefined>();
  const [dayOneTemp, setDayOneTemp] = useState<number | undefined>();
  const [dayTwoTemp, setDayTwoTemp] = useState<number | undefined>();
  const [dayThreeTemp, setDayThreeTemp] = useState<number | undefined>();
  const [dayFourTemp, setDayFourTemp] = useState<number | undefined>();
  const [dayFiveTemp, setDayFiveTemp] = useState<number | undefined>();
  const [dayOneName, setDayOneName] = useState<string | undefined>();
  const [dayTwoName, setDayTwoName] = useState<string | undefined>();
  const [dayThreeName, setDayThreeName] = useState<string | undefined>();
  const [dayFourName, setDayFourName] = useState<string | undefined>();
  const [dayFiveName, setDayFiveName] = useState<string | undefined>();
  const [dayOneIcon, setDayOneIcon] = useState<string | undefined>();
  const [dayTwoIcon, setDayTwoIcon] = useState<string | undefined>();
  const [dayThreeIcon, setDayThreeIcon] = useState<string | undefined>();
  const [dayFourIcon, setDayFourIcon] = useState<string | undefined>();
  const [dayFiveIcon, setDayFiveIcon] = useState<string | undefined>();
  const [latitude, setLatiitude] = useState<number | null>();
  const [longitude, setLongitude] = useState<number | null>();
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isLiked, setIsLike] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserSearchInput(e.target.value);
    const localStorageFavoritesList = getFromLocalStorage()
    const favoritesArray: string[] = localStorageFavoritesList ? JSON.parse(localStorageFavoritesList) : [];
   
    if(favoritesArray.includes(cityName)){
      setIsLike(true);
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setUserSearchInput(e.currentTarget.value);
    }
    setCityName("hayward");
  };
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setLatiitude(latitude);
        setLongitude(longitude);
      });
    }
  }, []);
  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const weatherdata = await GetWeather("Hayward");
        const { name, main, weather, sys } = weatherdata;
        console.log(weatherdata);
      } catch (error) {
        console.log(error);
      }
    };
    // fetchWeather();
  }, [userSearchInput]);
  const handleLikeButton = () => {
    const localStorageData = getFromLocalStorage()
    const favoritesArray: string[] = localStorageData ? JSON.parse(localStorageData) : [];
    if(!favoritesArray.includes(cityName)){
    favoritesArray.push(cityName)
    localStorage.setItem("favorites", JSON.stringify(favoritesArray));
    }
    
    setIsLike(true);
  };
  const getFromLocalStorage =()=>{
    const localStorageData = localStorage.getItem("favorites");
    return localStorageData

  }
  const handleRemoveLikeButton = () => {
    const localStorageData = getFromLocalStorage()
    if (localStorageData) {
      const favoritesArray: string[] = JSON.parse(localStorageData);
      const updatedFavoritesArray = favoritesArray.filter(
        (item) => item !== cityName
      );

      if (favoritesArray.includes(cityName)) {
        localStorage.setItem(
          "favorites",
          JSON.stringify(updatedFavoritesArray)
        );
        setCityName('')
      }
    }
    setIsLike(false);
  };

  return (
    <div
      className="w-full h-screen flex flex-col justify-center items-center"
      style={{
        backgroundImage: "url('/assets/images/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="lg:h-[90%] lg:w-[90%] lg:rounded-xl border-gray-300 border-4 drop-shadow-4xl bg-[#c3bfbfe2] flex flex-col justify-center text-black">
        <div className="w-full h-16 flex justify-end items-center">
          <HamburgerNav />
        </div>
        <div className="w-full h-[100%] flex flex-col">
          <div className="w-full h-full flex">
            <div className="w-[50%] h-full">
              <WeatherIcon />
            </div>
            <div className="w-[50%] h-full flex flex-col justify-center items-start">
              <div className="w-[50%]">
                <CurrentTempDisplayComponent
                  mainTempDisplay={mainTempDisplay}
                  cityName={cityName}
                  tempHighs={tempHighs}
                  tempLows={tempLows}
                />
              </div>
              <div className="w-full h-40 flex justify-start items-center">
                <img
                  className="h-10 pr-5"
                  src="/assets/images/location.png"
                  alt="Navagation icon"
                />
                <div className="w-[60%]">
                  <InputComponent
                    value={userSearchInput}
                    onChange={handleSearch}
                    onKeydown={handleKeyDown}
                  />
                </div>
                <div className="h-20 w-20 flex justify-center items-center">
                  <LikeButtonComponent
                    isLiked={isLiked}
                    favoriteClick={handleLikeButton}
                    removeFavorite={handleRemoveLikeButton}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[40%]">
            <FiveDayWeatherComponent
              dayOneName={dayOneName}
              dayOneTemp={dayOneTemp}
              dayTwoName={dayTwoName}
              dayTwoTemp={dayTwoTemp}
              dayThreeName={dayThreeName}
              dayThreeTemp={dayThreeTemp}
              dayFourName={dayFourName}
              dayFourTemp={dayFourTemp}
              dayFiveTemp={dayFiveTemp}
              dayFivename={dayFiveName}
              dayOneIcon={dayOneIcon}
              dayTwoIcon={dayTwoIcon}
              dayThreeIcon={dayThreeIcon}
              dayFourIcon={dayFourIcon}
              dayFiveIcon={dayFiveIcon}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
