import { currentCityConstant } from '../../utils/constants';
import { ICity, IState } from '../../utils/types';
import { CITY_UPDATED } from '../../utils/actionConstants';

export interface IAction {
  type: string,
  payload: ICity
};

const updateCurrentCity = (state: IState, action: IAction): ICity => {
  if (!state) {
    return {
      ...currentCityConstant
    };
  }
  switch (action.type) {
    case CITY_UPDATED:
      return action.payload;
    default:
      return state.currentCity;
  }
};

export default updateCurrentCity;
