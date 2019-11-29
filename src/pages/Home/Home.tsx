import React from 'react';
import { connect } from 'react-redux';
import Search from '../../components/Search';
import CardList from '../../components/CardList';
import WithWeatherService from '../../components/HocHelpers';
import { updateWeatherList } from '../../actions/actions';
import Spinner from '../../components/Spinner/indexs';
import { IWeather } from '../../utils/types';
import './Home.scss';
import WeatherItem from '../../components/WeatherItem';
export interface HomeProps {
  currentCity?:any,
  isLoading: boolean,
  weatherItemsList: Array<IWeather>,
}

const Home: React.FC<HomeProps> = ({ currentCity, isLoading, weatherItemsList }) => {
  const spinner = isLoading ? <Spinner /> : null;
  const weatherItems = weatherItemsList.map(item => {
    return (
      <WeatherItem {...item} key={item.id}/>
    )
  });
  React.useEffect(() => {
    console.log(currentCity.localizedName);
  }, [currentCity]);
  return (
    <section className="container">
      <Search />
      <div className="city-weather__container">
        {spinner}
        <CardList>
          {weatherItems}
        </CardList>
      </div>
    </section>
  );
};

const mapMethodsToProps = (weatherService: any) => {
  return {
    getWeatherFevDays: weatherService.getWeatherFevDays
  };
};
const mapStateToProps = (state: any) => {
  return {
    currentCity: state.currentCity,
    isLoading: state.weatherList.isLoading,
    weatherItemsList: state.weatherList.items
  }
};
const mapDispatchToProps = {
  updateWeatherList
};
export default WithWeatherService(connect(mapStateToProps, mapDispatchToProps)(Home), mapMethodsToProps);
