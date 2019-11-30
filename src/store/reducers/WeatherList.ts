import { weatherFewDays } from '../../dummyData';
const updateWetherList = (state: any , action: any) => {
  if (!state) {
    return {
      items: [...weatherFewDays],
      isLoading: true,
      error: false
    }
  };
  switch(action.type) {
    case 'WEATHER_LIST_UPDATED':
      return {
        isLoading: false,
        items: action.payload,
        error: false
      }
    case 'WEATHER_LIST_FETCH':
      return {
        isLoading: true,
        items: [],
        error: false
      }
    case 'WEATHER_LIST_ERROR':
      return {
        isLoading: false,
        items: action.payload,
        error: true
      };
    default:
      return state.weatherList;
  };
};
export default updateWetherList;