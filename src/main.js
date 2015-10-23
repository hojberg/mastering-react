import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
  render() {
    return <h1 style={{color: 'red'}}>{this.props.children}</h1>;
  }
}

class Greeter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Bruce Wayne' };
  }

  render() {
    return (
      <div>
        <Header>Hello {this.state.name}</Header>
        <input type='text' ref='name' />
        <button onClick={this.handleGreet.bind(this)}>Greet!</button>
      </div>
    );
  }

  handleGreet() {
    this.setState({ name: this.refs.name.value });
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    return nextState.name !== this.state.name;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate(nextProps, nextState) {
    console.log('componentDidUpdate', nextProps, nextState);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

}

class App extends React.Component {
  render() {
    return <Greeter name='Bruce Wayne' />;
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));
