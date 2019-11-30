export const updateWeatherList = (weatherList:any):any => {
  return {
    type: 'FETCH_WEATHER_LIST_SUCCESS',
    payload: weatherList
  }
};
export const fetchWeatherList = ():any => {
  return {
    type: 'FETCH_WEATHER_LIST_REQUEST',
  }
};
export const onErrorWeatherList = ():any => {
  return {
    type: 'FETCH_WEATHER_LIST_FAILURE',
    payload: []
  }
};