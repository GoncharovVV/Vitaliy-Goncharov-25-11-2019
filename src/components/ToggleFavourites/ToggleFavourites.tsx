import classnames from 'classnames';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { ReactComponent as Heart } from '../../assets/icons/heart.svg';
import { toggleCityToFav } from '../../store/actions/favActions';
import { findCityInFav } from '../../utils/helper';
import { ICity, ICityItems, IState } from '../../utils/types';
import './ToggleFavourites.scss';

export interface ToggleFavouritesProps {}

const ToggleFavourites: React.FC<ToggleFavouritesProps> = () => {
  const currentCity: ICity = useSelector((state: IState) => state.currentCity);
  const favouritesList: ICityItems = useSelector((state: IState) => state.favouritesList);
  const dispatch = useDispatch();

  const { id } = currentCity;
  const idx = findCityInFav(id, favouritesList.items);
  const [isFav, setIsFav] = useState(idx > -1);
  const hintClassName = classnames('fav-button', { 'fav-button__active': isFav });
  useEffect(() => {
    setIsFav(() => {
      return idx > -1;
    });
  }, [idx]);

  const onClick = () => {
    dispatch(toggleCityToFav(currentCity));
    toast.success('Favourites updated!');
  };
  return (
    <button className={hintClassName} onClick={onClick}>
      <Heart className="svg-icon" />
      <span className="tooltip">{isFav ? 'Remove from Favourites' : 'Add to Favourites'}</span>
    </button>
  );
};
export default ToggleFavourites;
