const updateWetherList = (state: any, action: any) => {
  if (!state) {
    return {
      items: [],
      isLoading: true,
      error: false
    };
  }
  switch (action.type) {
    case 'FETCH_WEATHER_LIST_SUCCESS':
      return {
        isLoading: false,
        items: action.payload,
        error: false
      };
    case 'FETCH_WEATHER_LIST_REQUEST':
      return {
        isLoading: true,
        items: [],
        error: false
      };
    case 'FETCH_WEATHER_LIST_FAILURE':
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
