import React from 'react';
import './Favorites.scss';
import FavouritesList from '../../components/FavouritesList';
export interface FavoritesProps {

}

const Favorites: React.FC<FavoritesProps> = () => {
  return (
    <section className="container">
      <div className="city-weather__container">
        <FavouritesList />
      </div>
    </section>
  );
}

export default Favorites;