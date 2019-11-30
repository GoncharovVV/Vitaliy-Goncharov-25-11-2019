import React from 'react';
import { ReactComponent as Heart } from '../../assets/icons/heart.svg';
import { updateFavourites } from '../../store/actions/cityActions';
import './AddFavourites.scss';
import { connect } from 'react-redux';
export interface AddFavouritesProps {
  currentCity: any,
  updateFavourites: any
};

const AddFavourites: React.FC<AddFavouritesProps> = ({ currentCity, updateFavourites }) => {
  const { isFavourite } = currentCity;
  console.log(isFavourite);
  const onClick = () => {
    updateFavourites({...currentCity, isFavourite: !currentCity.isFavourite })
  };
  return (
    <button className="fav-button" onClick={onClick}>
      <Heart className="svg-icon" />
      <span className="tooltip">
        {
          isFavourite ?
          'Remove from Favourites'
          :
          'Add to Favourites'
        }
      </span>
    </button>
  );
};
const mapStateToProps = (state: any) => {
  return {
    currentCity: state.currentCity,
  };
};

const mapDispatchToProps = {
  updateFavourites
};
export default connect(mapStateToProps, mapDispatchToProps)(AddFavourites);