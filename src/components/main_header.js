import React from 'react';
import MainNav from './main_nav';

class MainHeader extends React.Component {
  render() {
    return (
      <div className='main-header'>
        <div className='logo'>Storekeeper</div>
        <MainNav />
      </div>
    );
  }
}

export default MainHeader;
