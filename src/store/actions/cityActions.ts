import { ICity } from '../../utils/types';
import { CITY_FAVOURITES_UPDATED, CITY_UPDATED } from '../../utils/actionConstants';
export const updateCity = (city:ICity):any => ({
  type: CITY_UPDATED,
  payload: city
});
export const updateFavourites = (city:ICity):any => ({
  type: CITY_FAVOURITES_UPDATED,
  payload: city
});
