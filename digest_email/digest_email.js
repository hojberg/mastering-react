import React from 'react';
import SalesSparkline from './sales_sparkline';

class DigestEmail extends React.Component {
  render() {
    return (
      <html>
        <body>
          <h1>Storekeeper Digest Email</h1>
          <SalesSparkline salesStats={this.props.salesStats} />
        </body>
      </html>
    );
  }
}

export default DigestEmail;
