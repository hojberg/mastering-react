import alt from '../alt';
import OrdersFetcher from '../utils/orders_fetcher';

class OrdersActions {
  updateOrders(orders) {
    this.dispatch(orders);
  }

  fetchOrders() {
    this.dispatch([]);
    OrdersFetcher.fetch()
      .then(this.actions.updateOrders.bind(this));
  }
}

export default alt.createActions(OrdersActions);
