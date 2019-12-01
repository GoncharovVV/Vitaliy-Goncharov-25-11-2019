import React, { useState } from 'react';
import './Favorites.scss';
import FavouritesList from '../../components/FavouritesList';
export interface FavoritesProps {

}

const Favorites: React.FC<FavoritesProps> = () => {
  const title = useState('Favourites')
  return (
    <section className="container">
      <div className="city-weather__container">
        <h1 className="title">{title[0]}</h1>
        <FavouritesList />
      </div>
    </section>
  );
}

export default Favorites;