import {
  ICity,
  IWeather
} from '../utils/types';

import {
  ICitiesResponce,
} from './types';

import { transformTemp } from '../utils/helper';

import { Cities, weatherFewDays } from '../dummyData';

export default class WeatherService {
  _urlApiBase = 'https://dataservice.accuweather.com/';
  _apiKey = 't2US9Eg1bQs0uJkVtLaIPA6uQCWjGGWM';

  getResource = async (url: string): Promise<any> => {
    const res = await fetch(`${this._urlApiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not get data, received ${res.status}`);
    }
    return await res.json();
  };

  getWeather = async (cityKey: number = 323903) => {
    const res = await this.getResource(`currentconditions/v1/${cityKey}?apikey=${this._apiKey}`);
    return res;
  };

  getCities = async (query: string): Promise<Array<ICity>> => {
    // const res = await this.getResource(`locations/v1/cities/autocomplete?apikey=${this._apiKey}&q=${query}`);
    // return this._transformCities(res);
    return Cities; // MOCKDATA -> remove
  };

  getWeatherFevDays = async (cityKey: number): Promise<Array<IWeather>> => {
    // const res = await this.getResource(`forecasts/v1/daily/5day/${cityKey}?apikey=${this._apiKey}`);
    // return this._transformWeatherFevDays(res.DailyForecasts);
    return weatherFewDays; // MOCKDATA -> remove
  };

  getWeatherIcon = (id: number) => {
    const imgId = this._transformImgId(id);

    return `https://developer.accuweather.com/sites/default/files/${imgId}-s.png`;
  };

  _transformImgId = (id: number): number | string => {
    return id.toString().length > 1 ? id : `0${id}`;
  }

  _transformCities = (citiesArr: Array<ICitiesResponce>): Array<ICity> => {
    return citiesArr.map(({ Key, LocalizedName, Country, AdministrativeArea }) => ({
      id: Key,
      localizedName: LocalizedName,
      country: Country.LocalizedName,
      administrative: AdministrativeArea.LocalizedName
    }));
  };

  _transformWeatherFevDays = (weatherArr: Array<any>): Array<IWeather> => {
    return weatherArr.map((item, idx: number) => ({
      id: `lw${idx}`,
      date: item.Date,
      temperatureImp: `${item.Temperature.Minimum.Value} ${item.Temperature.Minimum.Unit}` ,
      temperatureMetr: `${transformTemp(item.Temperature.Minimum.Value, item.Temperature.Minimum.Unit)} C`,
      type: item.Day.IconPhrase,
      icon: item.Day.Icon
    }));
  };
}
