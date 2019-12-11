import { ICity, IState, ICitiesList } from '../../utils/types';
import {
  FETCH_CITIES_LIST_SUCCESS,
  FETCH_CITIES_LIST_REQUEST,
  FETCH_CITIES_LIST_FAILURE
} from '../../utils/actionConstants';

export interface IAction {
  type: string,
  payload: Array<ICity>
};

const updateCitiesAutocomplete = (state: IState, action: IAction): ICitiesList => {
  if (!state) {
    return {
      items: [],
      isLoading: false,
      error: false
    }
  };
  switch (action.type) {
    case FETCH_CITIES_LIST_SUCCESS:
      return {
        ...state.citiesList,
        isLoading: false,
        items: action.payload,
      };
    case FETCH_CITIES_LIST_REQUEST:
      return {
        ...state.citiesList,
        isLoading: true,
        error: false
      };
    case FETCH_CITIES_LIST_FAILURE:
      return {
        ...state.citiesList,
        isLoading: false,
        error: true
      };
    default:
      return state.citiesList
  }
};

export default updateCitiesAutocomplete;
