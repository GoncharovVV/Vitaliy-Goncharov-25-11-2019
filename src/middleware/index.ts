import { combineEpics, createEpicMiddleware } from 'redux-observable';
import fetchCitiesEpic from './epics/fetchCities';
import fetchWeatherListEpic from './epics/fetchWeatherList';

export const rootEpic = combineEpics(fetchCitiesEpic, fetchWeatherListEpic);
const epicMiddleware = createEpicMiddleware();


export default epicMiddleware;