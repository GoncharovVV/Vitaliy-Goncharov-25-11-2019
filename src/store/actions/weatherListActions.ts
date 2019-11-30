export const updateWeatherList = (weatherList:any):any => {
  return {
    type: 'WEATHER_LIST_UPDATED',
    payload: weatherList
  }
};
export const fetchWeatherList = ():any => {
  return {
    type: 'WEATHER_LIST_FETCH',
  }
};
export const onErrorWeatherList = ():any => {
  return {
    type: 'WEATHER_LIST_ERROR',
    payload: []
  }
};