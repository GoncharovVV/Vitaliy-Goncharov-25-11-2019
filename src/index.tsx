import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import App from './components/App';
import ErrorBoundry from './components/ErrorBoundry';
import { WeatherServiceContex } from './components/WeatherServiceContext';
import './index.scss';
import WeatherService from './services/WeatherService';
import reducer from './store/reducers';

const store = createStore(reducer);
const weatherService = new WeatherService();
store.subscribe(()=> {
  console.log(store.getState());
});
ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <WeatherServiceContex.Provider value={weatherService}>
        <Router>
          <App />
        </Router>
      </WeatherServiceContex.Provider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);
