import React from 'react';
import Search from '../../components/Search';
import WeatherList from '../../components/WeatherList';
import './Home.scss';
 
export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <section className="container">
      <Search />
      <div className="city-weather__container">
        <WeatherList></WeatherList>
      </div>
    </section>
  );
};

export default Home;
