import React from 'react';
import PageHeader from './page_header';
import OrdersTable from './orders/orders_table';
import { toTitleCase } from '../lib/formatters';
import OrdersStore from '../stores/orders_store';
import OrdersActions from '../actions/orders_actions';

const STATUSES = ['all', 'open', 'shipped'];

class Orders extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);

    this.state = OrdersStore.getState();
    this.state.selectedStatus = 'all';
  }

  componentDidMount() {
    OrdersStore.listen(this.onChange);
    OrdersActions.fetchOrders();
  }

  componentWillUnmount() {
    OrdersStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    const { selectedStatus } = this.state;

    const statuses = STATUSES.map((status, i) => {
      const className = status === selectedStatus ? 'selected status' : 'status';
      return (
        <a key={i} className={className} onClick={this.handleStatusClick.bind(this, status)}>
          {toTitleCase(status)}
        </a>
      );
    });

    let orders = this.state.orders;
    if (selectedStatus !== 'all') {
      orders = orders.filter((order) => {
        return order.orderStatus === selectedStatus;
      });
    }

    return (
      <div className='orders'>
        <PageHeader>
          <h1>Orders</h1>
          <nav className='status-nav'>{statuses}</nav>
        </PageHeader>
        <OrdersTable orders={orders} />
      </div>
    );
  }

  handleStatusClick(status) {
    this.setState({ selectedStatus: status });
  }
}

export default Orders;
