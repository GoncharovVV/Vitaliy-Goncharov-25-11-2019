import { ICity, IWeather } from '../utils/types';

import { ICitiesResponce } from './types';

import { transformTemp } from '../utils/helper';

export default class WeatherService {
  _urlApiBase = 'https://dataservice.accuweather.com/';
  _apiKey = '3LFn48ZIsvE35fIxdeNHAYHzkfEwDu00';

  getResource = async (url: string): Promise<any> => {
    const res = await fetch(`${this._urlApiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not get data, received ${res.status}`);
    }
    return await res.json();
  };

  getWeather = async (cityKey: number): Promise<IWeather> => {
    const res = await this.getResource(`currentconditions/v1/${cityKey}?apikey=${this._apiKey}`);
    return this._transformWeatherSingle(res);
  };

  getCities = async (query: string): Promise<Array<ICity>> => {
    const res = await this.getResource(
      `locations/v1/cities/autocomplete?apikey=${this._apiKey}&q=${query}`
    );
    return this._transformCities(res);
  };

  getWeatherFevDays = async (cityKey: number): Promise<Array<IWeather>> => {
    const res = await this.getResource(`forecasts/v1/daily/5day/${cityKey}?apikey=${this._apiKey}`);
    return this._transformWeatherFevDays(res.DailyForecasts);
  };

  getWeatherIcon = (id: number): string => {
    const imgId = this._transformImgId(id);
    return `https://developer.accuweather.com/sites/default/files/${imgId}-s.png`;
  };

  _transformImgId = (id: number): number | string => {
    return id.toString().length > 1 ? id : `0${id}`;
  };

  _transformCities = (citiesArr: Array<ICitiesResponce>): Array<ICity> => {
    return citiesArr.map(({ Key, LocalizedName, Country, AdministrativeArea }) => ({
      id: Key,
      localizedName: LocalizedName,
      country: Country.LocalizedName,
      administrative: AdministrativeArea.LocalizedName
    }));
  };

  _transformWeatherSingle = (weatherArr: Array<any>): IWeather => {
    const { WeatherIcon, WeatherText, Temperature } = weatherArr[0];
    const { Metric, Imperial } = Temperature;
    return {
      type: WeatherText,
      icon: WeatherIcon,
      temperatureMetr: `${Metric.Value} ${Metric.Unit}`,
      temperatureImp: `${Imperial.Value} ${Imperial.Unit}`
    };
  };

  _transformWeatherFevDays = (weatherArr: Array<any>): Array<IWeather> => {
    return weatherArr.map((item, idx: number) => ({
      id: `lw${idx}`,
      date: item.Date,
      temperatureImp: `${item.Temperature.Minimum.Value} ${item.Temperature.Minimum.Unit}`,
      temperatureMetr: `${transformTemp(
        item.Temperature.Minimum.Value,
        item.Temperature.Minimum.Unit
      )} C`,
      type: item.Day.IconPhrase,
      icon: item.Day.Icon
    }));
  };
}
