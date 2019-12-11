import { ajax } from 'rxjs/ajax';
import { switchMap, map, catchError, debounceTime, filter, mergeMap } from 'rxjs/operators';
import { apiUrl } from '../../utils/constants';
import { ofType } from 'redux-observable';
import { FETCH_CITIES_LIST_REQUEST } from '../../utils/actionConstants';
import { concat, of } from 'rxjs';
import { updateCitiesList, onErrorCitiesList } from '../../store/actions/citiesListActions';
import { transformCities } from '../../utils/helper';
import { ICity } from '../../utils/types';

const fetchUrl = `${apiUrl}locations/v1/cities/autocomplete?apikey=${process.env['REACT_APP_API_KEY']}&q=`;
const fetchCitiesEpic = (action$:any) => {
  return action$.pipe(
    ofType(FETCH_CITIES_LIST_REQUEST),
    debounceTime(500),
    filter(({payload}) => payload.trim() !== ''),
    switchMap(({payload}):any => {
      return concat(
        ajax.getJSON(`${fetchUrl}${payload}`)
          .pipe(
            mergeMap(val => {
              const newArr = transformCities(val)
              return of(newArr);
            }),
            map((x: Array<ICity>) => updateCitiesList(x)),
            catchError(error => {
              return of(onErrorCitiesList())
            })
          )
      )
    })
  )
};

export default fetchCitiesEpic;