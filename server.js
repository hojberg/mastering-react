import express from 'express';
import fs from 'fs';
import { match, RoutingContext } from 'react-router'
import routes from './src/routes';
import ReactDOMServer from 'react-dom/server';
import React from 'react';

let app = express();
app.use(express.static('public'));

// Data endpoints
app.get('/orders.json', (req, res) => {
  res.sendFile(__dirname + '/data/orders.json');
});

app.get('/sales_stats.json', (req, res) => {
  res.sendFile(__dirname + '/data/sales_stats.json');
});

// Render UI
app.use((req, res, next) => {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    const content = ReactDOMServer.renderToString(<RoutingContext {...renderProps} />);
    res.render('index.ejs', { html: content });
  });
});

const server = app.listen(8000, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log('Storekeeper app listening at http://%s:%s', host, port);
});

