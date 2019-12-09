import { FETCH_WEATHER_LIST_SUCCESS, FETCH_WEATHER_LIST_REQUEST, FETCH_WEATHER_LIST_FAILURE } from "../../utils/actionConstants";
import { IState, IWeatherList } from "../../utils/types";

const updateWetherList = (state: IState, action: any): IWeatherList => {
  if (!state) {
    return {
      items: [],
      isLoading: true,
      error: false
    };
  }
  switch (action.type) {
    case FETCH_WEATHER_LIST_SUCCESS:
      return {
        items: action.payload,
        isLoading: false,
        error: false
      };
    case FETCH_WEATHER_LIST_REQUEST:
      return {
        isLoading: true,
        items: [],
        error: false
      };
    case FETCH_WEATHER_LIST_FAILURE:
      return {
        isLoading: false,
        items: action.payload,
        error: true
      };
    default:
      return state.weatherList;
  }
};
export default updateWetherList;
