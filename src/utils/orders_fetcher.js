import Immutable from 'immutable';
import parseOrders from './parse_orders';

const OrdersFetcher = {
  fetch() {
    return fetch('/orders.json')
      .then((resp) => resp.json())
      .then(parseOrders)
      .then((orders) => Immutable.fromJS(orders));
  }
};

export default OrdersFetcher;
