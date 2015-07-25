require("babel/polyfill");

import React from 'react/addons';
import ReactDOM from 'react-dom';
import App from './components/app';

window.React = React;

ReactDOM.render(<App />, document.querySelector('#anchor'));
