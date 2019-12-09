import { CITY_UPDATED } from '../../utils/actionConstants';
import { IUpdateCity } from './types';

export const updateCity: IUpdateCity = (city) => ({
  type: CITY_UPDATED,
  payload: city
});
