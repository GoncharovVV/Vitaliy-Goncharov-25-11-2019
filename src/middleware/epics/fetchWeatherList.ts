import { ofType } from 'redux-observable';
import { concat, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError, debounceTime, filter, map, mergeMap, switchMap } from 'rxjs/operators';
import { FETCH_WEATHER_LIST_REQUEST } from '../../utils/actionConstants';
import { apiUrl } from '../../utils/constants';
import { transformWeatherFevDays } from '../../utils/helper';
import { IWeather } from '../../utils/types';
import { updateWeatherList, onErrorWeatherList } from '../../store/actions/weatherListActions';

const fetchUrl = `${apiUrl}forecasts/v1/daily/5day/`;
const fetchWeatherListEpic = (action$: any) => {
  return action$.pipe(
    ofType(FETCH_WEATHER_LIST_REQUEST),
    debounceTime(500),
    filter(({ payload }) => payload.trim() !== ''),
    switchMap(({ payload }) => {
      return concat(
        ajax.getJSON(`${fetchUrl}${payload}?apikey=${process.env['REACT_APP_API_KEY']}`).pipe(
          mergeMap((val: any) => {
            const newArr = transformWeatherFevDays(val.DailyForecasts);
            return of(newArr);
          }),
          map((x: Array<IWeather>) => updateWeatherList(x)),
          catchError((error) => {
            return of(onErrorWeatherList());
          })
        )
      );
    })
  );
};

export default fetchWeatherListEpic;
