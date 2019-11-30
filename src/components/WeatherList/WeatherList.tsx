import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { WeatherServiceContex } from '../../components/WeatherServiceContext';
import { fetchWeatherList, onErrorWeatherList, updateWeatherList } from '../../store/actions/weatherListActions';
import { IWeather } from '../../utils/types';
import Spinner from '../Spinner/indexs';
import WeatherItem from '../WeatherItem';

export interface WeatherListProps {
  currentCity: any;
  isLoading: boolean;
  weatherItemsList: Array<IWeather>;
  updateWeatherList: any;
  fetchWeatherList: any;
  onErrorWeatherList: any;
  weatherItemsError: boolean;
}
const WeatherList: React.FC<WeatherListProps> = ({
  currentCity,
  isLoading,
  weatherItemsList,
  updateWeatherList,
  onErrorWeatherList,
  fetchWeatherList,
  weatherItemsError
}) => {
  const { getWeatherFevDays } = useContext(WeatherServiceContex);
  React.useEffect(() => {
    if (currentCity.id) {
      fetchWeatherList();
      getWeatherFevDays(currentCity.id)
        .then((weatherList: Array<IWeather>) => {
          updateWeatherList(weatherList);
        })
        .catch(onErrorWeatherList());
    }
  }, [currentCity, getWeatherFevDays, updateWeatherList, onErrorWeatherList, fetchWeatherList]);

  const spinner = isLoading ? <Spinner /> : null;
  const weatherItems = weatherItemsList.map((item) => {
    return <WeatherItem {...item} key={item.id} />;
  });
  const weatherList = weatherItemsError ? (
    <span>Error</span>
  ) : (
    <ul className="cards">{weatherItems}</ul>
  );

  return (
    <>
      {spinner}
      {weatherList}
    </>
  );
};
const mapStateToProps = (state: any) => {
  return {
    currentCity: state.currentCity,
    isLoading: state.weatherList.isLoading,
    weatherItemsList: state.weatherList.items,
    weatherItemsError: state.weatherList.error
  };
};

const mapDispatchToProps = {
  updateWeatherList,
  onErrorWeatherList,
  fetchWeatherList
};
export default connect(mapStateToProps, mapDispatchToProps)(WeatherList);
