import React from 'react';
import MainHeader from './main_header';
import Page from './page';
import Orders from './orders';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <MainHeader />
        <Page>
          <Orders />
        </Page>
      </div>
    );
  }
}

export default App;
