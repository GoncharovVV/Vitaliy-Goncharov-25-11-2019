import { ICity, IWeather } from '../../utils/types';

export interface ICityAction {
  type: string;
  payload: ICity;
}

export interface ITempAction {
  type: string;
  payload: string;
}

export interface IFavActions {
  type: string;
  payload: ICity;
}

export interface IUpdateWeatherList {
  type: string;
  payload: Array<IWeather>;
}

export interface IFetchWeatherList {
  type: string;
}

export interface IErrorWeatherList {
  type: string;
  payload: [];
}

export interface IUpdateCity {
  (city: ICity): ICityAction
}

export interface ISetTemperature {
  ():ITempAction
}

export interface IToggleFav {
  (city:ICity):IFavActions
}

export interface IActionUpdateWeatherList {
  (weatherList:Array<IWeather>):IUpdateWeatherList
}
export interface IActionFetchWeatherList {
  ():IFetchWeatherList
}
export interface IActionOnErrorWeatherList {
  ():IErrorWeatherList
}