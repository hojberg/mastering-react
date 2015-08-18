import React from 'react';
import d3 from 'd3';
import { max } from 'underscore';
import Immutable from 'immutable';

const CHART_WIDTH = 300;
const CHART_HEIGHT = 150;

class SalesSparkline extends React.Component {
  render() {
    const salesStats = this.props.salesStats.toJS();
    const numDataPoints = salesStats.length;

    const maxSales = max(salesStats);

    const xScale = d3.scale.linear()
      .domain([0, numDataPoints])
      .range([0, CHART_WIDTH]);

    const yScale = d3.scale.linear()
      .domain([0, maxSales])
      .range([CHART_HEIGHT, 0]);

    const line = d3.svg.line()
      .x((d,i) => xScale(i))
      .y((d) => yScale(d))
      .interpolate('linear');

    const chartStyles = {
      width: CHART_WIDTH,
      height: CHART_HEIGHT,
      fill: '#ffffff',
    };

    const lineStyles = {
      stroke: '#FF5722',
      fill: 'none',
    };

    return (
      <div className='sales-sparkline'>
        <svg className='chart' style={chartStyles}>
          <path style={lineStyles} className='line' d={line(salesStats)} />
        </svg>
      </div>
    );
  }
}

export default SalesSparkline;
