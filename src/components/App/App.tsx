import React from 'react';
import { Route, Switch } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Favorites from '../../pages/Favorites';
import Home from '../../pages/Home';
import NotFound from '../../pages/NotFound';
import Header from '../Header';

export interface AppProps {}

export interface AppState {}

export default class App extends React.Component<AppProps, AppState> {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <main className="main">
          <Switch>
            <Route path="/" component={Home} exact={true} />
            <Route path="/favorites" component={Favorites} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
    );
  }
}
