import './App.css';

//DOM
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//components
import Home from './components/Home';
import React from 'react';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
