import React from 'react';
import { connect } from 'react-redux';
import CurrentWeather from '../../components/CurrentWeather';
import Search from '../../components/Search';
import ToggleFavourites from '../../components/ToggleFavourites';
import WeatherList from '../../components/WeatherList';
import './Home.scss';
export interface HomeProps {
  title: string;
}

const Home: React.FC<HomeProps> = ({ title }) => {
  return (
    <section className="container">
      <Search />
      <div className="city-weather__container">
        <h1 className="title">{title}</h1>
        <div className="city-weather__top">
          <CurrentWeather />
          <ToggleFavourites />
        </div>
        <WeatherList></WeatherList>
      </div>
    </section>
  );
};
const mapStateToProps = (state: any) => {
  return {
    title: state.currentCity.localizedName
  };
};

export default connect(mapStateToProps)(Home);
