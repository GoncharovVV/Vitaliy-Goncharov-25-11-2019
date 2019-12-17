import { format } from 'date-fns';
import { temperatureTypeF, temperatureTypeС } from './constants';
import { ICity, IWeather } from './types';

export const transformTemp = (tempVal: number, tempUtil: string): string => {
  switch (tempUtil) {
    case temperatureTypeF:
      return (((tempVal - 32) * 5) / 9).toFixed().toString();
    case temperatureTypeС:
      return ((tempVal * 9) / 5 + 32).toFixed().toString();
    default:
      return `${tempVal} ${tempUtil}`;
  }
};

export const formatDate = (dateVal: string): string => {
  if (dateVal) {
    return format(new Date(dateVal), 'EEEE');
  }
  return 'There is no date';
};

export const findCityInFav = (id: string, arr: Array<ICity>): number => {
  const idx = arr.findIndex((item: any) => item.id === id);
  return idx;
};

export const transformCities = (citiesArr: Array<Object>): Array<ICity> => {
  return citiesArr.map(({ Key, LocalizedName, Country, AdministrativeArea }:any) => ({
    id: Key,
    localizedName: LocalizedName,
    country: Country.LocalizedName,
    administrative: AdministrativeArea.LocalizedName
  }));
};

export const transformWeatherFevDays = (weatherArr: Array<any>): Array<IWeather> => {
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

export const getWeatherIcon = (id: number): string => {
  const imgId = transformImgId(id);
  return `https://developer.accuweather.com/sites/default/files/${imgId}-s.png`;
};

export const transformImgId = (id: number): number | string => {
  return id.toString().length > 1 ? id : `0${id}`;
};