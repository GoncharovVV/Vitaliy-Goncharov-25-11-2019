import React from 'react';
import Search from '../../components/Search';
import WeatherList from '../../components/WeatherList';
import './Home.scss';
import CurrentWeather from '../../components/CurrentWeather';
import AddFavourites from '../../components/AddFavourites';

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <section className="container">
      <Search />
      <div className="city-weather__container">
        <div className="city-weather__top">
          <CurrentWeather/>
          <AddFavourites/>
        </div>
        <WeatherList></WeatherList>
      </div>
    </section>
  );
};

export default Home;
