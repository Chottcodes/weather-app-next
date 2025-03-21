const GetWeather = async (city:string) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_WEATHER_API_URL}?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=imperial`);
    const data = await response.json();
    return data;
}
const GetFiveDayForcast = async (cityName:string) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_WEATHER_FIVE_DAY_API_URL}?q=${cityName}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=imperial`);
    const data = await response.json();
    return data;
}
const GetWeatherByCoordinates = async (lat: number, lon: number) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_WEATHER_API_URL}?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=imperial`
    );
    const data = await response.json();
    return data;
  };
  
export {GetWeather, GetFiveDayForcast,GetWeatherByCoordinates};