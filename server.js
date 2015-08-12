import express from 'express';
import fs from 'fs';
import { Router } from 'react-router';
import Location from 'react-router/lib/location';
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
  Router.run(routes, new Location(req.url), (error, props) => {
    const content = ReactDOMServer.renderToString(<Router {...props} />);
    res.render('index.ejs', { html: content });
  });
});

const server = app.listen(8000, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log('Storekeeper app listening at http://%s:%s', host, port);
});

