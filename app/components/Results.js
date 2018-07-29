var React = require('react');
var queryString = require('query-string');
var api = require('../utils/api');
var Link = require('react-router-dom').Link;

class Results extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        Results
      </div>
    )
  }
}

module.exports = Results;

