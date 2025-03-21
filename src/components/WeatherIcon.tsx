import Image from 'next/image';
import React from 'react'
interface propsType{
  Icon:string
}
const WeatherIcon = (props:propsType) => {
  const {Icon}=props
  const iconUrl = `https://openweathermap.org/img/wn/${Icon}.png`;
  return (
    <div className='w-full h-full flex items-center justify-center'>
        <Image className='lg:h-50 lg:w-50 md:h-28 md:w-28 h-40 w-40' width={100} height={100} src={iconUrl} alt="cloud icon" />
    </div>
  )
}

export default WeatherIcon