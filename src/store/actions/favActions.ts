import { CITY_TOGGLE_TO_FAV } from "../../utils/actionConstants";
import { IFavActions } from "./types";
import { ICity } from '../../utils/types';

export const toggleCityToFav = (city:ICity):IFavActions => ({
  type: CITY_TOGGLE_TO_FAV,
  payload: city
});

