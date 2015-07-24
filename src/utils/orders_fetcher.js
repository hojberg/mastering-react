import moment from 'moment';
import Immutable from 'immutable';

function parseOrders(rawOrders) {
    const orders = rawOrders.map((order) => {
      return Object.assign(
        {},
        order,
        {
          orderedAt: moment(order.orderedAt),
          products: order.products.map((product) => {
            return Object.assign(
              {},
              product,
              {
                amount: parseFloat(product.amount)
              }
            );
          }),
          amount: parseFloat(order.amount)
        }
      );
    });

  return orders;
};

const OrdersFetcher = {
  fetch() {
    return fetch('/orders.json')
      .then((resp) => resp.json())
      .then(parseOrders)
      .then((orders) => Immutable.fromJS(orders));
  }
};

export default OrdersFetcher;
