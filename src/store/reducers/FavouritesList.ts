import { findCityInFav } from '../../utils/helper';
import { CITY_TOGGLE_TO_FAV } from '../../utils/actionConstants';
import { IState, ICity } from '../../utils/types';

interface IAction {
  type: string,
  payload: ICity
};


const toggleFavList = (items: Array<ICity>, city: ICity): Array<ICity> => {
  if (city) {
    const idx = findCityInFav(city.id, items);
    if (idx > -1) {
      return items.filter(item => item.id !== city.id);
    } else {
      return [...items, city];
    };
  }
  else {
    return items
  }
};

const updateFavouritesList = (state: IState, action: IAction) => {
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
