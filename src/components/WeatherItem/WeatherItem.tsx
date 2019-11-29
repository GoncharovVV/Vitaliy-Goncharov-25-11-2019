import React from 'react';
import WithWeatherService from '../HocHelpers';
import { IWeather } from '../../utils/types';
import { formatDate } from '../../utils/helper';
export interface WeatherItemProps extends IWeather{
  getWeatherIcon?: any
}

const WeatherItem: React.FC<WeatherItemProps> = ({getWeatherIcon, date, temperatureImp, temperatureMetr, type, icon }) => {
  return (
    <li className="card-item">
      <div className="card-item__content">
        <p className="card-item__date">{formatDate(date)}</p>
        <img src={getWeatherIcon(icon)} className="card-item__image" alt="type"/>
        <h3 className="card-item__title">{type}</h3>
        <div className="card-item__temp">{temperatureImp} / {temperatureMetr}</div>
      </div>
    </li>
  );
}
const mapMethodsToProps = (weatherService: any) => {
  return {
    getWeatherIcon: weatherService.getWeatherIcon
  };
};

export default WithWeatherService(WeatherItem, mapMethodsToProps);