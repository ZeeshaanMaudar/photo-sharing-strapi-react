import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
