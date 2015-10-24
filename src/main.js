require("babel/polyfill");

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { createHistory } from 'history';

import App from './components/app';
import Dashboard from './components/dashboard';
import Orders from './components/orders';

let history = createHistory();

ReactDOM.render((
  <Router history={history}>
    <Route path="/" component={App}>
      <Route path="dashboard" component={Dashboard}/>
      <Route path="orders" component={Orders}/>
    </Route>
  </Router>
), document.querySelector('#anchor'));
