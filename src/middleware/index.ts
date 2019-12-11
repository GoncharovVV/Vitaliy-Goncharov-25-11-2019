import { combineEpics, createEpicMiddleware } from 'redux-observable';
import fetchCitiesEpic from './epics/fetchCities';

export const rootEpic = combineEpics(fetchCitiesEpic);
const epicMiddleware = createEpicMiddleware();


export default epicMiddleware;