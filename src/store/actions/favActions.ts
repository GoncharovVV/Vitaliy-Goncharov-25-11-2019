interface IFavActions {
  type: string,
  payload: string
};
export const toggleCityToFav = (city:any):IFavActions => ({
  type: 'CITY_TOGGLE_TO_FAV',
  payload: city
});

