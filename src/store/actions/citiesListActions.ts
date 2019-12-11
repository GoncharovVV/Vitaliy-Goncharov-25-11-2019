import { FETCH_CITIES_LIST_FAILURE, FETCH_CITIES_LIST_REQUEST, FETCH_CITIES_LIST_SUCCESS } from "../../utils/actionConstants";
import { IActionUpdateCitiesList, IActionFetchCitiesList, IActionOnErrorCitiesList } from "./types";

export const updateCitiesList:IActionUpdateCitiesList = (citiesList) => {
  return {
    type: FETCH_CITIES_LIST_SUCCESS,
    payload: citiesList
  }
};
export const fetchCitiesList:IActionFetchCitiesList = (input) => {
  return {
    type: FETCH_CITIES_LIST_REQUEST,
    payload: input
  }
};
export const onErrorCitiesList:IActionOnErrorCitiesList = () => {
  return {
    type: FETCH_CITIES_LIST_FAILURE,
    payload: []
  }
};