import React from 'react';
import { connect } from 'react-redux';
import FavouritesItem from '../FavouritesItem';
export interface FavouritesListProps {
  favouritesList: any;
}

const FavouritesList: React.SFC<FavouritesListProps> = ({ favouritesList }) => {
  const FavList = () => {
    return favouritesList.items.map((favItem: any) => {
      return <FavouritesItem {...favItem} key={favItem.id} />;
    });
  };
  return (
    <ul className="cards">
      {favouritesList.items.length > 0 ? (
        <FavList />
      ) : (
        <p className="empty">There is nothing to show</p>
      )}
    </ul>
  );
};
const mapStateToProps = (state: any) => {
  return {
    favouritesList: state.favouritesList
  };
};

export default connect(mapStateToProps)(FavouritesList);
