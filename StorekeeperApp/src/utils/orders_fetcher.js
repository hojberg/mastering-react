var Immutable = require('immutable');
var parseOrders = require('./parse_orders');

var OrdersFetcher = {
  fetch() {
    return fetch('http://localhost:8000/orders.json')
      .then((resp) => resp.json())
      .then(parseOrders)
      .then((orders) => Immutable.fromJS(orders));
  }
};

module.exports = OrdersFetcher;
