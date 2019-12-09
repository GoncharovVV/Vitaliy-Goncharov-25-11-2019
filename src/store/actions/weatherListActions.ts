import { FETCH_WEATHER_LIST_FAILURE, FETCH_WEATHER_LIST_REQUEST, FETCH_WEATHER_LIST_SUCCESS } from "../../utils/actionConstants";
import { IActionUpdateWeatherList, IActionFetchWeatherList, IActionOnErrorWeatherList } from "./types";

export const updateWeatherList:IActionUpdateWeatherList = (weatherList) => {
  return {
    type: FETCH_WEATHER_LIST_SUCCESS,
    payload: weatherList
  }
};
export const fetchWeatherList:IActionFetchWeatherList = () => {
  return {
    type: FETCH_WEATHER_LIST_REQUEST,
  }
};
export const onErrorWeatherList:IActionOnErrorWeatherList = () => {
  return {
    type: FETCH_WEATHER_LIST_FAILURE,
    payload: []
  }
};