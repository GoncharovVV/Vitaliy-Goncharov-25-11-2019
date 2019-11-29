import { currentCityConstant } from '../../utils/constants';
import { ICity } from '../../utils/types';

const updateCurrentCity = (state: ICity = currentCityConstant, action: any) => {
  switch(action.type) {
    case 'CITY_UPDATED':
      return action.payload;
    default:
      return state
  }
};

export default updateCurrentCity;