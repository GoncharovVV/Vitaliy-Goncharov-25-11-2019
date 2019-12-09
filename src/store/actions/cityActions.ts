import { ICity } from '../../utils/types';
import { CITY_FAVOURITES_UPDATED, CITY_UPDATED } from '../../utils/actionConstants';
import { ICityAction } from './types';
export const updateCity = (city:ICity):ICityAction => ({
  type: CITY_UPDATED,
  payload: city
});
export const updateFavourites = (city:ICity):ICityAction => ({
  type: CITY_FAVOURITES_UPDATED,
  payload: city
});
