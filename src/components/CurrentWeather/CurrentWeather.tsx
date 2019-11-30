import React from 'react';
import './CurrentWeather.scss'
export interface CurrentWeatherProps {

}

const CurrentWeather: React.FC<CurrentWeatherProps> = () => {
  return (
    <div className="current-weather"></div>
  );
}

export default CurrentWeather;