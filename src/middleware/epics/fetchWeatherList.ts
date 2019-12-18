import { ofType } from 'redux-observable';
import { concat, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError, filter, map, mergeMap, switchMap, takeUntil } from 'rxjs/operators';
import { FETCH_WEATHER_LIST_REQUEST, CANCEL_FETCH_WEATHER_LIST } from '../../utils/actionConstants';
import { apiUrl } from '../../utils/constants';
import { transformWeatherFevDays } from '../../utils/helper';
import { IWeather } from '../../utils/types';
import { updateWeatherList, onErrorWeatherList } from '../../store/actions/weatherListActions';

const fetchUrl = `${apiUrl}forecasts/v1/daily/5day/`;
const fetchWeatherListEpic = (action$: any) => {
  return action$.pipe(
    ofType(FETCH_WEATHER_LIST_REQUEST),
    filter(({ payload }) => payload.trim() !== ''),
    switchMap(({ payload }) => {
      return concat(
        ajax.getJSON(`${fetchUrl}${payload}?apikey=${process.env['REACT_APP_API_KEY']}`).pipe(
          takeUntil(action$.pipe(ofType(CANCEL_FETCH_WEATHER_LIST))),
          mergeMap((val: any) => {
            const newArr = transformWeatherFevDays(val.DailyForecasts);
            return of(newArr);
          }),
          map((x: Array<IWeather>) => updateWeatherList(x)),
          catchError(() => {
            return of(onErrorWeatherList());
          })
        )
      );
    })
  );
};

export default fetchWeatherListEpic;
