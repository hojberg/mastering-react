import React from 'react';
import d3 from 'd3';
import { max } from 'underscore';
import Immutable from 'immutable';
import SalesChartXAxis from './sales_chart_x_axis';
import SalesChartYAxis from './sales_chart_y_axis';

const CHART_WIDTH = 1100;
const CHART_HEIGHT = 250;
const CHART_PADDING = 20;
const LEFT_MARGIN = 45;
const BOTTOM_MARGIN = 20;

class SalesChart extends React.Component {
  render() {
    const salesStats = this.props.salesStats.toJS();
    const numDataPoints = salesStats.length;

    if (!numDataPoints) return null;

    const maxSales = max(salesStats) * 1.10;

    const xScale = d3.scale.linear()
      .domain([0, numDataPoints])
      .range([0 + CHART_PADDING, CHART_WIDTH - CHART_PADDING]);

    const yScale = d3.scale.linear()
      .domain([0, maxSales])
      .range([CHART_HEIGHT - CHART_PADDING, 0 + CHART_PADDING]);

    const line = d3.svg.line()
      .x((d,i) => xScale(i) + LEFT_MARGIN + 10)
      .y((d) => yScale(d))
      .interpolate('linear');

    const boxStyles = { width: CHART_WIDTH, height: CHART_HEIGHT };

    return (
      <div className='sales-chart'>
        <div className='chart-wrapper' style={boxStyles}>
          <svg className='chart' style={boxStyles}>
            <path className='line' d={line(salesStats)}/>
            <SalesChartXAxis
              xScale={xScale}
              numDataPoints={numDataPoints}
              width={CHART_WIDTH}
              height={CHART_HEIGHT}
              leftMargin={LEFT_MARGIN}
              bottomMargin={BOTTOM_MARGIN} />
            <SalesChartYAxis
              yScale={yScale}
              maxSales={maxSales}
              height={CHART_HEIGHT}
              leftMargin={LEFT_MARGIN}
              bottomMargin={BOTTOM_MARGIN} />
          </svg>
        </div>
      </div>
    );
  }
}

export default SalesChart;
