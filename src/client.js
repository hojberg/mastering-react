require("babel/polyfill");

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { createHistory } from 'history';
import routes from './routes';

let history = createHistory();

ReactDOM.render((
  <Router history={history}>
    {routes}
  </Router>
), document.querySelector("#anchor"));
