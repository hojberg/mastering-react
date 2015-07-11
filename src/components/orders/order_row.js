import React from 'react';
import { toMoney, toDateTime, toTitleCase } from '../../lib/formatters';

class OrderRow extends React.Component {
  render() {
    const { order } = this.props;
    const products = order.products.map((p) => p.name).join(', ');

    return (
      <tr className='order'>
        <td>{order.reference}</td>
        <td>{order.customer}</td>
        <td className='sorted-by'>{toDateTime(order.orderedAt)}</td>
        <td>{products}</td>
        <td className='amount'>{toMoney(order.amount)}</td>
        <td className='status'>{toTitleCase(order.paymentStatus)}</td>
        <td className='status'>{toTitleCase(order.orderStatus)}</td>
      </tr>
    );
  }
}

export default OrderRow;
