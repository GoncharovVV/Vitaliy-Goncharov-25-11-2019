import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './store/reducers'
import App from './components/App';
import { WeatherServiceProvider } from './components/WeatherServiceContext';
import ErrorBoundry from './components/ErrorBoundry';
import WeatherService from './services/WeatherService';
import './index.scss';

const store = createStore(reducer);
const weatherService = new WeatherService();
store.subscribe(()=> {
  console.log(store.getState());
});
ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <WeatherServiceProvider value={weatherService}>
        <Router>
          <App />
        </Router>
      </WeatherServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);
