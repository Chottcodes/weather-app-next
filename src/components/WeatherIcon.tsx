import React from 'react'
interface propsType{
  Icon:string
}
const WeatherIcon = (props:propsType) => {
  const {Icon}=props
  const iconUrl = `https://openweathermap.org/img/wn/${Icon}.png`;
  return (
    <div className='w-full h-full flex items-center justify-center'>
        <img className='h-50' src={iconUrl} alt="cloud icon" />
    </div>
  )
}

export default WeatherIcon