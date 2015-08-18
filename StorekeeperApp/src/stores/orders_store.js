var alt = require('../alt');
var Immutable = require('immutable');
var OrdersActions = require('../actions/orders_actions');

class OrdersStore {
  constructor() {
    this.state = {
      orders: Immutable.List(),
      selectedStatus: 'all',
      amountFilter: null
    }

    this.bindListeners({
      handleUpdateOrders: OrdersActions.UPDATE_ORDERS
    });
  }

  handleUpdateOrders(orders) {
    this.setState({ orders: orders });
  }
}

module.exports = alt.createStore(OrdersStore, 'OrdersStore');
