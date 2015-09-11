import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
  render() {
    return <h1 style={{color: 'red'}}>{this.props.children}</h1>
  }
}

class Greeter extends React.Component {
  render() {
    return <Header>Hello {this.props.name}</Header>
  }
}

const GreeterFactory = React.createFactory(Greeter);

class App extends React.Component {
  render() {
    return <Greeter name="Bruce Wayne" />;
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));
