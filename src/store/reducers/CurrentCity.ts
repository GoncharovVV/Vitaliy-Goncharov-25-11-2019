import { currentCityConstant } from '../../utils/constants';
import { ICity } from '../../utils/types';
import { CITY_UPDATED, CITY_FAVOURITES_UPDATED } from '../../utils/actionConstants';

const updateCurrentCity = (state: any, action: any): ICity => {
  if (!state) {
    return {
      ...currentCityConstant
    };
  }
  switch (action.type) {
    case CITY_UPDATED:
      return action.payload;
    case CITY_FAVOURITES_UPDATED:
      return action.payload;
    default:
      return state.currentCity;
  }
};

export default updateCurrentCity;
