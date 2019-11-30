import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { updateWeatherList } from '../../actions/actions';
import CardList from '../../components/CardList';
import Search from '../../components/Search';
import Spinner from '../../components/Spinner/indexs';
import WeatherItem from '../../components/WeatherItem';
import { WeatherServiceContex } from '../../components/WeatherServiceContext';
import { IWeather } from '../../utils/types';
import './Home.scss';

export interface HomeProps {
  currentCity?: any,
  isLoading: boolean,
  weatherItemsList: Array<IWeather>,
  updateWeatherList: any
}

const Home: React.FC<HomeProps> = ({ currentCity, isLoading, weatherItemsList, updateWeatherList }) => {
  const spinner = isLoading ? <Spinner /> : null;
  const { getWeatherFevDays } = useContext(WeatherServiceContex);
  const weatherItems = weatherItemsList.map((item) => {
    return <WeatherItem {...item} key={item.id} />;
  });

  React.useEffect(() => {
    if (currentCity.id) {
      getWeatherFevDays(currentCity.id).then((weatherList: Array<IWeather>) => {
        updateWeatherList(weatherList, 'home');
      });
    }
  }, [currentCity]);

  return (
    <section className="container">
      <Search />
      <div className="city-weather__container">
        {spinner}
        <CardList>{weatherItems}</CardList>
      </div>
    </section>
  );
};

const mapStateToProps = (state: any) => {
  return {
    currentCity: state.currentCity,
    isLoading: state.weatherList.isLoading,
    weatherItemsList: state.weatherList.items
  };
};

const mapDispatchToProps = {
  updateWeatherList
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
