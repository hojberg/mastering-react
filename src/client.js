require("babel/polyfill");

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { history } from 'react-router/lib/BrowserHistory';
import routes from './routes';

ReactDOM.render((
  <Router history={history}>
    {routes}
  </Router>
), document.querySelector("#anchor"));
