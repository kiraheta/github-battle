var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

// App is set to component exported from path or App.js
var App = require('./components/App');

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

