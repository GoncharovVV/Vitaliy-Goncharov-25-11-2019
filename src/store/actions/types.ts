import { ICity, IWeather } from "../../utils/types";

export interface ICityAction {
  type: string,
  payload: ICity
}
export interface ITempAction {
  type: string,
  payload: string
}
export interface IFavActions {
  type: string,
  payload: ICity
};
export interface IUpdateWeatherList {
  type: string,
  payload: Array<IWeather>
}
export interface IFetchWeatherList {
  type: string,
}
export interface IErrorWeatherList {
  type: string,
  payload: []
}