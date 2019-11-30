import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducer from './reducers';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['weatherList']
};
const persistedReducer = persistReducer(persistConfig, reducer);
const store = createStore(persistedReducer);
let persistor = persistStore(store);
// store.subscribe(()=> {
//   console.log(store.getState());
// });
export { store, persistor };
