var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

class App extends React.Component {
  render() {
    return(
      <div>
        Green ideas sleep furiously!
      </div>
    )
  }
}
  
ReactDom.render(
  <App />,
  document.getElementById('app')
);

