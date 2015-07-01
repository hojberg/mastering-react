import React from 'react';

class MainNav extends React.Component {
  render() {
    return (
      <nav className='main-nav'>
        <a>Dashboard</a>
        <a className='current'>Orders</a>
        <a>Catalog</a>
      </nav>
    );
  }
}

export default MainNav;
