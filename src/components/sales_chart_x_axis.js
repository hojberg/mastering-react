import React from 'react';
import moment from 'moment';
import { range } from 'underscore';

function getXTicks(num) {
  const today = moment();
  const earliest = today.clone().subtract(num, 'months');
  return range(num).map((n) => {
    return earliest.clone().add(n, 'months').format("MMM");
  });
}

class SalesChartXAxis extends React.Component {
  render() {
    const { xScale, numDataPoints, width, height, leftMargin, bottomMargin } = this.props;

    const xTicks = getXTicks(numDataPoints).map((tick, i) => {
      const x = xScale(i) + leftMargin;
      return <text className='tick' x={x} y={height} key={i}>{tick}</text>;
    });

    return (
      <g>
        <g className='ticks'>{xTicks}</g>
        <line
          className='x axis'
          x1={leftMargin - 1}
          x2={width - leftMargin / 2}
          y1={height - bottomMargin}
          y2={height - bottomMargin} />
      </g>
    );
  }
}

export default SalesChartXAxis;
