import React from 'react';
import './CurrentWeather.scss';

export interface CurrentWeatherProps {
  imgUrl: string;
  type: string;
  temperature: string;
}

const CurrentWeather: React.SFC<CurrentWeatherProps> = ({ imgUrl, type, temperature }) => {
  return (
    <>
      <img className="card-item__image" src={imgUrl} alt={type} />
      <p className="main__type">{type}</p>
      <p className="main__temp">{temperature}</p>
    </>
  );
};

export default CurrentWeather;
