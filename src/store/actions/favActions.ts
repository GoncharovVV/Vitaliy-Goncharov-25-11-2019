import { CITY_TOGGLE_TO_FAV } from "../../utils/actionConstants";
import { IToggleFav } from "./types";

export const toggleCityToFav:IToggleFav = (city) => ({
  type: CITY_TOGGLE_TO_FAV,
  payload: city
});

