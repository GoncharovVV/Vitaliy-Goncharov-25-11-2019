import {
  ICity,
  IWeather
} from '../utils/types';

import {
  ICitiesResponce,
  IWeatherFevDaysResponse
} from './types';

import { Cities } from '../dummyData';

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
    const res = await this.getResource(`forecasts/v1/daily/5day/${cityKey}?apikey=${this._apiKey}`);
    return res;
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

  _transformWeatherFevDays = (weatherArr: Array<IWeatherFevDaysResponse>): Array<IWeather> => {
    return weatherArr.map((item, idx: number) => ({
      id: `lw${idx}`,
      date: '2019-11-27T07:00:00+02:00',
      temperatureImp: '32.0 F',
      temperatureMetr: '0 C',
      type: 'Showers',
      icon: 12
    }));
  }
}
