var React = require('react');
var NavLink = require('react-router-dom').NavLink;

/* Since it has no state or lifecycle methods
*  so it'll be a stateless function component
*/

function Nav () {
  return (
    <ul className='nav'>
    <li>
      <NavLink exact activeClassName='active' to='/'>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink activeClassName='active' to='/popular'>
        Popular
      </NavLink>
    </li>
    <li>
      <NavLink activeClassName='active' to='/battle'>
        Battle
      </NavLink>
    </li>
  </ul>
  )
}

module.exports = Nav;
