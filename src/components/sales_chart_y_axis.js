import React from 'react';
import numeral from 'numeral';

function formatYTick(tick) {
  return numeral(tick).format('$0a');
}

class SalesChartYAxis extends React.Component {
  render() {
    const { yScale, maxSales, height, leftMargin, bottomMargin } = this.props;

    const yTicks = [maxSales, maxSales/2, 0].map((tick, i) => {
      const y = yScale(tick);
      return <text className='tick' key={i} y={y} x={leftMargin - 5}>{formatYTick(tick)}</text>;
    });
    return (
      <g>
        <g className='y ticks'>{yTicks}</g>
        <line
          className='y axis'
          x1={leftMargin}
          x2={leftMargin}
          y1={10}
          y2={height - (bottomMargin - 1)} />
      </g>
    );
  }
}

export default SalesChartYAxis;
