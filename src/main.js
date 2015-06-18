import React from 'react';

class Header extends React.Component {
  render() {
    return <h1 style={{color: 'red'}}>{this.props.children}</h1>;
  }
}

class Greeter extends React.Component {
  render() {
    return <Header>Hello {this.props.name}</Header>;
  }
}

class App extends React.Component {
  render() {
    return <Greeter name='Bruce Wayne' />;
  }
}

React.render(<App />, document.querySelector('#app'));
