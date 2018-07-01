var React = require('react');
var Link = require('react-router-dom').Link;

class Home extends React.Component {
  render() {
    return(
      <div className='home-container'>
        <h1 className='title'>Github Battle!</h1>
        <img className='home-image' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/100px-Octicons-mark-github.svg.png' alt='gb logo'/>
        <Link className='button' to='/battle'>
          Battle
        </Link>
      </div>
    )
  }
}

module.exports = Home;
