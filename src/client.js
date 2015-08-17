require("babel/polyfill");

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { history } from 'react-router/lib/BrowserHistory';
import routes from './routes';
import Iso from 'iso';
import alt from './alt';

Iso.bootstrap((state, _, container) => {
  alt.bootstrap(state);

  ReactDOM.render((
    <Router history={history}>
      {routes}
    </Router>
  ), container);
});
