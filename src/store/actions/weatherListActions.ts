import { FETCH_WEATHER_LIST_FAILURE, FETCH_WEATHER_LIST_REQUEST, FETCH_WEATHER_LIST_SUCCESS } from "../../utils/actionConstants";
import { IWeather } from "../../utils/types";
import { IErrorWeatherList, IFetchWeatherList, IUpdateWeatherList } from "./types";

export const updateWeatherList = (weatherList:Array<IWeather>):IUpdateWeatherList => {
  return {
    type: FETCH_WEATHER_LIST_SUCCESS,
    payload: weatherList
  }
};
export const fetchWeatherList = ():IFetchWeatherList => {
  return {
    type: FETCH_WEATHER_LIST_REQUEST,
  }
};
export const onErrorWeatherList = ():IErrorWeatherList => {
  return {
    type: FETCH_WEATHER_LIST_FAILURE,
    payload: []
  }
};