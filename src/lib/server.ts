const GetWeather = async (city:string) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=imperial`);
    const data = await response.json();
    return data;
}
const GetFiveDayForcast = async (cityName:string) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=imperial`);
    const data = await response.json();
    return data;
}
const GetWeatherByCoordinates = async (lat: number, lon: number) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=imperial`
    );
    const data = await response.json();
    return data;
  };
  
export {GetWeather, GetFiveDayForcast,GetWeatherByCoordinates};