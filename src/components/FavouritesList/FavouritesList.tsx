import React from 'react';
import './FavouritesList.scss';
import FavouritesItem from '../FavouritesItem';
export interface FavouritesListProps {}

const FavouritesList: React.SFC<FavouritesListProps> = () => {
  return (
    <ul className="cards">
      <FavouritesItem />
    </ul>
  );
}

export default FavouritesList;