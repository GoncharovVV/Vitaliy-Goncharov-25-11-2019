import { weatherFewDays } from '../../dummyData';
const updateWetherList = (state: any , action: any) => {
  if (!state) {
    return {
      items: [ ...weatherFewDays ],
      isLoading: false
    }
  }
  switch(action.type) {
    case 'WEATHER_LIST_UPDATED':
      return {
        isLoading: false,
        items: action.payload
      }
    default:
      return state.weatherList
  }
};
export default updateWetherList;