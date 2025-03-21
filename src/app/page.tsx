"use client";

import CurrentTempDisplayComponent from "@/components/CurrentTempDisplayComponent";
import FiveDayWeatherComponent from "@/components/FiveDayWeatherComponent";
import HamburgerNav from "@/components/HamburgerNavComponent";
import InputComponent from "@/components/InputComponent";
import LikeButtonComponent from "@/components/LikeButtonComponent";
import SearchButtonComponent from "@/components/SearchButtonComponent";
import WeatherIcon from "@/components/WeatherIcon";
import {
  GetWeather,
  GetFiveDayForcast,
  GetWeatherByCoordinates,
} from "@/lib/server";
import { useState, useEffect } from "react";

export default function Home() {
  const [userSearchInput, setUserSearchInput] = useState<string>("");
  const [mainTempDisplay, setMainTempDisplay] = useState<number | undefined>();
  const [mainIcon, setMainIcon] = useState<string>("");
  const [cityName, setCityName] = useState<string>("");
  const [tempHighs, setTempHighs] = useState<number | undefined>();
  const [tempLows, setTempLows] = useState<number | undefined>();
  const [latitude, setLatiitude] = useState<number | null>();
  const [longitude, setLongitude] = useState<number | null>();
  const [forcast, setForcast] = useState<any[]>([]);
  const [isLiked, setIsLike] = useState(false);
  const [isInputEmpty, setIsInputEmpty] = useState<boolean>(true);
  const [isErrorOn, setIsErrorOn] = useState<boolean>(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserSearchInput(e.target.value);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const localStorageFavoritesList = getFromLocalStorage();
    const favoritesArray: string[] = localStorageFavoritesList
      ? JSON.parse(localStorageFavoritesList)
      : [];

    if (e.key === "Enter") {
      const userSearchInputValue = e.currentTarget.value;
      if (userSearchInputValue.trim() !== "") {
        setUserSearchInput(userSearchInputValue);
        setCityName(userSearchInputValue);
        setIsInputEmpty(true);
        setIsErrorOn(false);
      }else{
        setIsErrorOn(true)
      }
    }
    if (favoritesArray.includes(cityName)) {
      setIsLike(true);
    } else {
      setIsLike(false);
    }
  };
  const handleLikeButton = () => {
    const localStorageData = getFromLocalStorage();
    const favoritesArray: string[] = localStorageData
      ? JSON.parse(localStorageData)
      : [];
    if (!favoritesArray.includes(cityName) && cityName.trim() !== "") {
      favoritesArray.push(cityName);
      localStorage.setItem("favorites", JSON.stringify(favoritesArray));
    }
    setIsLike(true);
  };
  const getFromLocalStorage = () => {
    const localStorageData = localStorage.getItem("favorites");
    return localStorageData;
  };

  const handleRemoveLikeButton = () => {
    const localStorageData = getFromLocalStorage();
    if (localStorageData) {
      const favoritesArray: string[] = JSON.parse(localStorageData);
      const updatedFavoritesArray = favoritesArray.filter(
        (item) => item !== cityName
      );
      localStorage.setItem("favorites", JSON.stringify(updatedFavoritesArray));
    }
    setIsLike(false);
  };
  const handleSearchButton = () => {
    if(userSearchInput.trim()!== ""){
    setCityName(userSearchInput); 
    }else{
      setIsErrorOn(true)
    }
   
  };
  //GeoLocation Section
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
    const getCurrentWeatherByCoords = async () => {
      try {
        if (latitude && longitude) {
          const CurrentWeatherData = await GetWeatherByCoordinates(
            latitude,
            longitude
          );
          const { name } = CurrentWeatherData;
          setCityName(name);
        } else {
          setCityName("New York");
        }
      } catch (error) {
        console.log(error);
      }
    };
    // getCurrentWeatherByCoords()
  }, [latitude, longitude]);
  //GeoLocation section End
  useEffect(() => {
    const localStorageFavoritesList = getFromLocalStorage();
    const favoritesArray: string[] = localStorageFavoritesList
      ? JSON.parse(localStorageFavoritesList)
      : [];

    if (favoritesArray.includes(cityName)) {
      setIsLike(true);
    } else {
      setIsLike(false);
    }
  }, [cityName]);
  useEffect(() => {
    const fetchCurrentWeather = async () => {
      try {
        const weatherdata = await GetWeather(cityName);
        const { name, main, weather } = weatherdata;
        const { temp, temp_min, temp_max } = main;
        const { icon } = weather[0];
        setCityName(name);
        setMainTempDisplay(Math.trunc(temp));
        setTempHighs(Math.trunc(temp_max));
        setTempLows(Math.trunc(temp_min));
        setMainIcon(icon);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCurrentWeather();
  }, [cityName]);
  //Five Day fetch
  useEffect(() => {
    const getFiveDayData = async () => {
      try {
        const FiveDayData = await GetFiveDayForcast(cityName);
        const dailyForecast = [];
        for (let i = 0; i < FiveDayData.list.length; i += 8) {
          const item = FiveDayData.list[i];
          dailyForecast.push({
            date: item.dt_txt,
            temp: Math.trunc(item.main.temp),
            icon: item.weather[0].icon,
          });
        }
        setForcast(dailyForecast);
      } catch (error) {
        console.log(error);
      }
    };
    getFiveDayData();
  }, [cityName]);

  useEffect(() => {
    if (userSearchInput != "" && userSearchInput.length > 3) {
      setIsInputEmpty(false);
      setIsErrorOn(false)
    } else {
      setIsInputEmpty(true);
    }
  }, [userSearchInput]);

  return (
    <div
      className="w-full h-screen flex flex-col justify-end md:justify-center md:items-center font-sans"
      style={{
        backgroundImage: "url('/assets/images/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="md:h-[75%] md:w-[90%] h-[90%] w-full rounded-xl border-gray-300 border-4 drop-shadow-4xl bg-[#c3bfbfe2] flex flex-col justify-center text-black">
        <div className="w-full h-20 flex justify-end items-center">
          <HamburgerNav
            onFavoriteClick={(cityName) => {
              setCityName(cityName);
            }}
          />
        </div>
        <div className="w-full h-[100%] flex flex-col bg-green-500">
          <div className="w-full h-full flex flex-col md:flex-row md:justify-center md:items-center bg-red-500">
            <div className="w-[50%] h-full md:h-[80%] bg-green-500">
              <WeatherIcon Icon={mainIcon} />
            </div>
            <div className="w-[50%] md:h-[80%] h-full flex flex-col justify-center items-start">
              <div className="w-[50%] md:w-full">
                <CurrentTempDisplayComponent
                  mainTempDisplay={mainTempDisplay}
                  cityName={cityName}
                  tempHighs={tempHighs}
                  tempLows={tempLows}
                />
              </div>
              <div className="w-full h-40 flex justify-start items-center ">
                <div className="w-[10%] md:mr-2">
                  <SearchButtonComponent
                    isInputEmpty={isInputEmpty}
                    onclick={handleSearchButton}
                  />
                </div>
                <div className="w-[40%] h-[25%] md:w-[70%] ">
                  <InputComponent
                    isValueEmpty={isErrorOn}
                    value={userSearchInput}
                    onChange={handleSearch}
                    onKeydown={handleKeyDown}
                  />
                </div>
                <div className="h-20 w-20 flex justify-center items-center md:h-10 md:w-10 ">
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
            <div className="w-full h-[40%] flex justify-around">
              {forcast.map((day, index) => (
                <FiveDayWeatherComponent
                  key={index}
                  Name={new Date(day.date).toLocaleDateString("en-US", {
                    weekday: "short",
                  })}
                  Temp={day.temp}
                  Icon={day.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
