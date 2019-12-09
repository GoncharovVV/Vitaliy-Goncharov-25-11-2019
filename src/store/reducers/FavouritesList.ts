import { findCityInFav } from '../../utils/helper';
import { CITY_TOGGLE_TO_FAV } from '../../utils/actionConstants';
import { IState } from '../../utils/types';

const toggleFavList = (items: any, city: any): any => {
  const idx = findCityInFav(city.id, items);
  if (idx > -1) {
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
  } else {
    return [...items, city];
  }
};

const updateFavouritesList = (state: IState, action: any) => {
  if (!state) {
    return {
      items: []
    };
  }
  switch (action.type) {
    case CITY_TOGGLE_TO_FAV:
      return {
        items: toggleFavList(state.favouritesList.items, action.payload)
      };
    default:
      return state.favouritesList;
  }
};
export default updateFavouritesList;
