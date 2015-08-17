import moment from 'moment';

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

export default parseOrders;
