import React, { useContext, useState } from 'react';
import { ICity } from '../../utils/types';
import { WeatherServiceContex } from '../WeatherServiceContext';
import { formatDate } from '../../utils/helper';
export interface FavouritesItemProps extends ICity {}

const FavouritesItem: React.FC<FavouritesItemProps> = ({
  id,
  localizedName,
  country,
  administrative
}) => {

  const { getWeatherIcon } = useContext(WeatherServiceContex);
  const [icon, setIcon] = useState('');
  const [type, setType] = useState('-');
  const [temperatureImp, setTemperatureImp] = useState('-');
  const [temperatureMetr, setTemperatureMetr] = useState('-');

  React.useEffect(() => {
    if (id) {
      console.log(id);
    }
  }, [id]);
  return (
    <li className="card-item">
      <button className="card-item__content">
        <p className="card-item__date">{localizedName}</p>
        <img src={getWeatherIcon(icon)} className="card-item__image" alt="type" />
        <h3 className="card-item__title">{type}</h3>
        <div className="card-item__temp">
          {temperatureImp} / {temperatureMetr}
        </div>
      </button>
    </li>
  );
}

export default FavouritesItem;