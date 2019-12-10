import React, { useContext } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { fetchWeatherList, onErrorWeatherList, updateWeatherList } from '../../store/actions/weatherListActions';

import { IWeather, ICity, IState } from '../../utils/types';
import Spinner from '../Spinner/indexs';
import WeatherItem from '../WeatherItem';
import { WeatherServiceContex } from '../WeatherServiceContext';
import { IActionUpdateWeatherList, IActionFetchWeatherList, IActionOnErrorWeatherList } from '../../store/actions/types';
toast.configure({
  autoClose: 2000,
  draggable: false
});
export interface WeatherListProps {
  weatherItemsList: Array<IWeather>;
  updateWeatherList: IActionUpdateWeatherList;
  fetchWeatherList: IActionFetchWeatherList;
  onErrorWeatherList: IActionOnErrorWeatherList;
  weatherItemsError: boolean;
  temperatureType: string;
}
const WeatherList: React.FC<WeatherListProps> = ({
  temperatureType,
  weatherItemsList,
  updateWeatherList,
  onErrorWeatherList,
  fetchWeatherList,
  weatherItemsError,
}) => {

  const currentCity: ICity = useSelector((state: IState) => state.currentCity);
  const { isLoading } = useSelector((state: IState) => state.weatherList);

  const dispatch = useDispatch();

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
    weatherItemsList: state.weatherList.items,
    weatherItemsError: state.weatherList.error,
    temperatureType: state.temperatureType,
  };
};

const mapDispatchToProps = {
  updateWeatherList,
  onErrorWeatherList,
  fetchWeatherList
};
export default connect(mapStateToProps, mapDispatchToProps)(WeatherList);
