import React from 'react';
import ReactDOM from 'react-dom';
import MovieMain from './movie_main';
import { Router, Route, hashHistory } from 'react-router';

const App = () => (
  <Router history={hashHistory}>
    <Route path='/' component={MovieMain} />
  </Router>
)

export default App;
