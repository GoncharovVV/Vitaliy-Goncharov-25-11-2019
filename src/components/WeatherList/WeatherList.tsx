import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { fetchWeatherList, onErrorWeatherList, updateWeatherList } from '../../store/actions/weatherListActions';

import { IWeather, ICity } from '../../utils/types';
import Spinner from '../Spinner/indexs';
import WeatherItem from '../WeatherItem';
import { WeatherServiceContex } from '../WeatherServiceContext';
toast.configure({
  autoClose: 2000,
  draggable: false
});
export interface WeatherListProps {
  currentCity: ICity;
  isLoading: boolean;
  weatherItemsList: Array<IWeather>;
  updateWeatherList: any;
  fetchWeatherList: any;
  onErrorWeatherList: any;
  weatherItemsError: boolean;
  temperatureType: string;
}
const WeatherList: React.FC<WeatherListProps> = ({
  currentCity,
  isLoading,
  temperatureType,
  weatherItemsList,
  updateWeatherList,
  onErrorWeatherList,
  fetchWeatherList,
  weatherItemsError,
}) => {
  const { getWeatherFevDays } = useContext(WeatherServiceContex);
  React.useEffect(() => {
    const { id } = currentCity;
    if (id) {
      fetchWeatherList();
      getWeatherFevDays(id)
        .then((weatherList: Array<IWeather>) => {
          updateWeatherList(weatherList);
        })
        .catch((err: any) => {
          toast.warn(`Something is wrong ${err}`);
        });
    }
  }, [currentCity, getWeatherFevDays, updateWeatherList, onErrorWeatherList, fetchWeatherList]);

  if (isLoading) return <Spinner />;

  if (weatherItemsError) return <span>Error</span>;

  return (
    <ul className="cards">
      {weatherItemsList.map((item) => {
        return <WeatherItem {...item} temperatureType={temperatureType} key={item.id} />;
      })}
    </ul>
  );
};
const mapStateToProps = (state: any) => {
  return {
    currentCity: state.currentCity,
    isLoading: state.weatherList.isLoading,
    weatherItemsList: state.weatherList.items,
    weatherItemsError: state.weatherList.error,
    temperatureType: state.temperatureType,
    st: state
  };
};

const mapDispatchToProps = {
  updateWeatherList,
  onErrorWeatherList,
  fetchWeatherList
};
export default connect(mapStateToProps, mapDispatchToProps)(WeatherList);
