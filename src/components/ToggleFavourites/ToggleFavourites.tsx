import classnames from 'classnames';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { ReactComponent as Heart } from '../../assets/icons/heart.svg';
import { toggleCityToFav } from '../../store/actions/favActions';
import { findCityInFav } from '../../utils/helper';
import './ToggleFavourites.scss';

export interface ToggleFavouritesProps {
  currentCity: any;
  favouritesList: any;
  toggleCityToFav: any;
}

const ToggleFavourites: React.FC<ToggleFavouritesProps> = ({
  currentCity,
  favouritesList,
  toggleCityToFav
}) => {
  const { id } = currentCity;
  const idx = findCityInFav(id, favouritesList.items);
  const [isFav, setIsFav] = useState(idx > -1);
  const hintClassName = classnames('fav-button', { 'fav-button__active': isFav });
  useEffect(() => {
    setIsFav((prevSt: boolean) => {
      return idx > -1;
    });
  }, [idx]);

  const onClick = () => {
    toggleCityToFav(currentCity);
    toast.success('Favourites updated!');
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
