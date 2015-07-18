import express from 'express';
import fs from 'fs';

let app = express();
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/orders.json', (req, res) => {
  res.sendFile(__dirname + '/data/orders.json');
});

const server = app.listen(8000, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log('Storekeeper app listening at http://%s:%s', host, port);
});

