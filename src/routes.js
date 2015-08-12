import React from 'react';
import { Route } from 'react-router';

import App from './components/app';
import Dashboard from './components/dashboard';
import Orders from './components/orders';
import NotFound from './components/not_found';

const routes = (
  <Route path="/" component={App}>
    <Route path="dashboard" component={Dashboard}/>
    <Route path="orders" component={Orders}/>
    <Route path="*" component={NotFound} />
  </Route>
);

export default routes;
