import React from 'react';
import { connect } from 'react-redux';
import { ICity, IFavList, IState } from '../../utils/types';
import FavouritesItem from '../FavouritesItemContainer';

export interface FavouritesListProps extends IFavList {}

const FavouritesList: React.SFC<FavouritesListProps> = ({ favouritesList }) => {
  return (
    <ul className="cards">
      {favouritesList.items.length > 0 ? (
        favouritesList.items.map((favItem: ICity) => {
          return <FavouritesItem city={favItem} key={favItem.id} />;
        })
      ) : (
        <p className="empty">There is nothing to show</p>
      )}
    </ul>
  );
};
const mapStateToProps = (state: IState) => {
  return {
    favouritesList: state.favouritesList
  };
};

export default connect(mapStateToProps)(FavouritesList);
