import express from 'express';
import fs from 'fs';
import { Router } from 'react-router';
import Location from 'react-router/lib/location';
import routes from './src/routes';
import ReactDOMServer from 'react-dom/server';
import React from 'react';
import Iso from 'iso';
import alt from './src/alt';

let app = express();
app.use(express.static('public'));

// Data endpoints
app.get('/orders.json', (req, res) => {
  res.sendFile(__dirname + '/data/orders.json');
});

app.get('/sales_stats.json', (req, res) => {
  res.sendFile(__dirname + '/data/sales_stats.json');
});

app.get('/orders', (req, res, next) => {
  const orders = JSON.parse(fs.readFileSync(__dirname + '/data/orders.json'));

  res.locals.data = {
    OrdersStore: {
      orders: orders,
      selectedStatus: 'all',
      amountFilter: null
    }
  };

  next();
});

// Render UI
app.use((req, res, next) => {
  alt.bootstrap(JSON.stringify(res.locals.data || {}));
  let iso = new Iso();

  Router.run(routes, new Location(req.url), (error, props) => {
    const content = ReactDOMServer.renderToString(<Router {...props} />);
    iso.add(content, alt.flush());
    res.render('index.ejs', { html: iso.render() });
  });
});

const server = app.listen(8000, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log('Storekeeper app listening at http://%s:%s', host, port);
});

