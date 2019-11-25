import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Favorites from '../../pages/Favorites';
import Home from '../../pages/Home';
import NotFound from '../../pages/NotFound';
import Header from '../Header';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <Router>
        <Header/>
        <main className="main">
          <Switch>
            <Route path="/" component={Home} exact={true}/>
            <Route path="/favorites" component={Favorites}/>
            <Route component={NotFound} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
