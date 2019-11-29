import * as React from 'react';
import WithWeatherService from '../HocHelpers';
import { IWeather } from '../../utils/types';
export interface WeatherItemProps extends IWeather{
  getWeatherIcon?: any
}

const WeatherItem: React.SFC<WeatherItemProps> = ({getWeatherIcon, date, temperature, type, icon }) => {
  return (
    <li className="item">
      <img src={getWeatherIcon(icon)} alt="type"/>
      <div>{type}</div>
      <div>{date}</div>
      {/* <div>{temperature.imperial.value}</div>
      <div>{temperature.imperial.unit}</div> */}
    </li>
  );
}
const mapMethodsToProps = (weatherService: any) => {
  return {
    getWeatherIcon: weatherService.getWeatherIcon
  };
};

export default WithWeatherService(WeatherItem, mapMethodsToProps);