import { ICity } from '../../utils/types';
export const updateCity = (city:ICity):any => ({
  type: 'CITY_UPDATED',
  payload: city
});
