import { format } from 'date-fns';
import { temperatureTypeF, temperatureTypeС } from './constants';
import { ICity } from './types';

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

export const formatDate = (dateVal: string | undefined) => {
  if (dateVal) {
    return format(new Date(dateVal), 'EEEE');
  }
  return 'There is no date';
};

export const findCityInFav = (id: string, arr: Array<ICity>): number => {
  const idx = arr.findIndex((item: any) => item.id === id);
  return idx;
};
