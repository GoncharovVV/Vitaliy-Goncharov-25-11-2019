import React, { useState } from 'react';
import FavouritesList from '../../components/FavouritesList';
import ToggleTemperature from '../../components/ToggleTemperature';
export interface FavoritesProps {}

const Favorites: React.FC<FavoritesProps> = () => {
  const title = useState<string>('Favourites');
  return (
    <section className="container">
      <ToggleTemperature />
      <div className="city-weather__container">
        <h1 className="title">{title[0]}</h1>
        <FavouritesList />
      </div>
    </section>
  );
};
 
export default Favorites;
