import moment from 'moment';

const ORDERS_DATA = [
  {
    reference: 'ASX13X',
    customer: 'Bruce Wayne',
    orderedAt: moment("2015-03-09T17:14:00.000Z"),
    products: [
      { name: 'Blue Wool Shirt', amount: 120.25 },
      { name: 'Pearl White Shirt', amount: 220.50 }
    ],
    amount: 340.75,
    paymentStatus: 'authorized',
    orderStatus: 'open'
  },
  {
    reference: 'KCA31F',
    customer: 'Selina Kyle',
    orderedAt: moment("2015-03-09T17:08:00.000Z"),
    products: [
      { name: 'Black Dress', amount: 29.75 }
    ],
    amount: 29.75,
    paymentStatus: 'authorized',
    orderStatus: 'open'
  },
  {
    reference: 'MCZ96G',
    customer: 'Bruce Banner',
    orderedAt: moment("2015-03-09T16:17:00.000Z"),
    products: [
      { name: 'Purple Shorts', amount: 5.50 }
    ],
    amount: 5.50,
    paymentStatus: 'settled',
    orderStatus: 'open'
  },
  {
    reference: 'LPX77Q',
    customer: 'Walter Kovacs',
    orderedAt: moment("2015-03-09T15:49:00.000Z"),
    products: [
      { name: 'Fedora', amount: 65.50 },
      { name: 'Brown Trenchcoat', amount: 250.50 }
    ],
    amount: 316.00,
    paymentStatus: 'settled',
    orderStatus: 'shipped'
  }
];

export default ORDERS_DATA;
