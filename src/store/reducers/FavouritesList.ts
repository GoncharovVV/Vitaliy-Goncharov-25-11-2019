import { findCityInFav } from '../../utils/helper';
const toggleFavList = (items: any, city: any): any => {
  const idx = findCityInFav(city.id, items);
  if (idx > -1) {
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
  } else {
    return [...items, city];
  }
};

const updateFavouritesList = (state: any, action: any) => {
  if (!state) {
    return {
      items: []
    };
  }
  switch (action.type) {
    case 'CITY_TOGGLE_TO_FAV':
      return {
        items: toggleFavList(state.favouritesList.items, action.payload)
      };
    default:
      return state.favouritesList;
  }
};
export default updateFavouritesList;
