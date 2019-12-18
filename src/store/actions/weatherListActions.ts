import { FETCH_WEATHER_LIST_FAILURE, FETCH_WEATHER_LIST_REQUEST, FETCH_WEATHER_LIST_SUCCESS, CANCEL_FETCH_WEATHER_LIST } from "../../utils/actionConstants";
import { IActionUpdateWeatherList, IActionFetchWeatherList, IActionOnErrorWeatherList } from "./types";

export const updateWeatherList:IActionUpdateWeatherList = (weatherList) => {
  return {
    type: FETCH_WEATHER_LIST_SUCCESS,
    payload: weatherList
  }
};
export const fetchWeatherList:IActionFetchWeatherList = (id) => {
  return {
    type: FETCH_WEATHER_LIST_REQUEST,
    payload: id
  }
};
export const onErrorWeatherList:IActionOnErrorWeatherList = () => {
  return {
    type: FETCH_WEATHER_LIST_FAILURE,
    payload: []
  }
};
export const onCancelFetchWeatherList = () => {
  return {
    type: CANCEL_FETCH_WEATHER_LIST,
    payload: []
  }
};