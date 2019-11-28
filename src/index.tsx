import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import { WeatherServiceProvider } from './components/WeatherServiceContext'; 
import ErrorBoundry from './components/ErrorBoundry';
import WeatherService from './services/WeatherService';
import './index.scss';

const weatherService = new WeatherService();

ReactDOM.render(
  <ErrorBoundry>
    <WeatherServiceProvider value={weatherService}>
      <Router>
        <App />
      </Router>
    </WeatherServiceProvider>
  </ErrorBoundry>,
  document.getElementById('root')
);
