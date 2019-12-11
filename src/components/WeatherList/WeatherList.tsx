import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import {
  fetchWeatherList,
  onErrorWeatherList,
  updateWeatherList
} from '../../store/actions/weatherListActions';

import { IWeather, ICity, IState } from '../../utils/types';
import Spinner from '../Spinner/indexs';
import WeatherItem from '../WeatherItem';
import { WeatherServiceContex } from '../WeatherServiceContext';
toast.configure({
  autoClose: 2000,
  draggable: false
});
export interface WeatherListProps {}

const WeatherList: React.FC<WeatherListProps> = () => {
  const currentCity: ICity = useSelector((state: IState) => state.currentCity);
  const { isLoading } = useSelector((state: IState) => state.weatherList);
  const { items: weatherItemsList } = useSelector((state: IState) => state.weatherList);
  const { error: weatherItemsError } = useSelector((state: IState) => state.weatherList);
  const temperatureType: string = useSelector((state: IState) => state.temperatureType);

  const dispatch = useDispatch();

  const { getWeatherFevDays } = useContext(WeatherServiceContex);

  React.useEffect(() => {
    const { id } = currentCity;
    if (id) {
      dispatch(fetchWeatherList());
      getWeatherFevDays(id)
        .then((weatherList: Array<IWeather>) => {
          dispatch(updateWeatherList(weatherList));
        })
        .catch((err: any) => {
          toast.warn(`Something is wrong ${err}`);
          dispatch(onErrorWeatherList());
        });
    }
  }, [currentCity, getWeatherFevDays, dispatch]);

  if (isLoading) return <Spinner />;

  if (weatherItemsError) return <span>Error</span>;

  return (
    <ul className="cards">
      {weatherItemsList.map((item) => {
        const { id } = item;
        return <WeatherItem {...item} temperatureType={temperatureType} key={id} />;
      })}
    </ul>
  );
};

export default WeatherList;
