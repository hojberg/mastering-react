import expect from 'expect.js';
import React from 'react';
import moment from 'moment';
import { renderShallow } from '../../test_helper';
import OrderRow from '../../../src/components/orders/order_row';

describe('components/orders/order_row', () => {
  let subject;
  let order;

  beforeEach(() => {
    order = {
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
    };
    subject = renderShallow(<OrderRow order={order} />);
  });

  it('renders the columns', () => {
    const tds = subject.props.children.filter((c) => c.type === 'td');
    const tdsContent = tds.map((td) => td.props.children);
    expect(tdsContent).to.eql([
      'ASX13X',
      'Bruce Wayne',
      'Mar 9, 6:14pm',
      'Blue Wool Shirt, Pearl White Shirt',
      '$340.75',
      'Authorized',
      'Open'
    ]);
  });
});
