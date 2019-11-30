import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import App from './components/App';
import ErrorBoundry from './components/ErrorBoundry';
import { WeatherServiceContex } from './components/WeatherServiceContext';
import './index.scss';
import WeatherService from './services/WeatherService';
import { persistor, store } from './store/store';
const weatherService = new WeatherService();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ErrorBoundry>
        <WeatherServiceContex.Provider value={weatherService}>
          <Router>
            <App />
          </Router>
        </WeatherServiceContex.Provider>
      </ErrorBoundry>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
