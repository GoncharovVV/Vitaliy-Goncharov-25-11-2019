import React, { useContext } from 'react';
import { formatDate } from '../../utils/helper';
import { IWeather } from '../../utils/types';
import { WeatherServiceContex } from '../WeatherServiceContext';
import { temperatureTypeF } from '../../utils/constants';

export interface WeatherItemProps extends IWeather {
  temperatureType: string;
}

const WeatherItem: React.FC<WeatherItemProps> = ({
  date,
  temperatureImp,
  temperatureMetr,
  type,
  icon,
  temperatureType
}) => {
  const { getWeatherIcon } = useContext(WeatherServiceContex);
  return (
    <li className="card-item">
      <div className="card-item__content">
        <p className="card-item__date">{formatDate(date)}</p>
        <img src={getWeatherIcon(icon)} className="card-item__image" alt="type" />
        <h3 className="card-item__title">{type}</h3>
        <div className="card-item__temp">
          {temperatureType === temperatureTypeF ? <>{temperatureImp}</> : <>{temperatureMetr}</>}
        </div>
      </div>
    </li>
  );
};

export default WeatherItem;
