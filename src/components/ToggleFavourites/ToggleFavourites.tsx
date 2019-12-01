import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { ReactComponent as Heart } from '../../assets/icons/heart.svg';
import { findCityInFav } from '../../utils/helper';
import { toggleCityToFav } from '../../store/actions/favActions';
import './ToggleFavourites.scss';
import classnames from 'classnames';

export interface ToggleFavouritesProps {
  currentCity: any;
  favouritesList: any;
  toggleCityToFav: any;
}

const ToggleFavourites: React.FC<ToggleFavouritesProps> = ({ currentCity, favouritesList, toggleCityToFav }) => {
  const { id } = currentCity;
  const idx = findCityInFav(id, favouritesList.items);
  const [isFav, setIsFav] = useState(idx>-1);
  const hintClassName = classnames('fav-button', { 'fav-button__active': isFav});
  useEffect(() => {
    setIsFav(idx>-1);
  }, [idx]);

  const onClick = () => {
    toggleCityToFav(currentCity);
  };
  return (
    <button className={hintClassName} onClick={onClick}>
      <Heart className="svg-icon" />
      <span className="tooltip">{isFav ? 'Remove from Favourites' : 'Add to Favourites'}</span>
    </button>
  );
};
const mapStateToProps = (state: any) => {
  return {
    currentCity: state.currentCity,
    favouritesList: state.favouritesList
  };
};

const mapDispatchToProps = {
  toggleCityToFav
};
export default connect(mapStateToProps, mapDispatchToProps)(ToggleFavourites);
