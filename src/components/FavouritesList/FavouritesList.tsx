import React from 'react';
import './FavouritesList.scss';
import FavouritesItem from '../FavouritesItem';
import { connect } from 'react-redux';
export interface FavouritesListProps {
  favouritesList: any
}

const FavouritesList: React.SFC<FavouritesListProps> = ({ favouritesList }) => {
  return (
    <ul className="cards">
      {
        favouritesList.items.map((favItem:any) => {
          return <FavouritesItem {...favItem}/>
        })
      }
    </ul>
  );
}
const mapStateToProps = (state: any) => {
  return {
    favouritesList: state.favouritesList,
  };
};

export default connect(mapStateToProps)(FavouritesList);