'use strict';

import React from 'react';
import AccountActions from './AccountActions';

require('styles/Nav/Nav.scss');

class Nav extends React.Component {
  render() {

    var user = 'Tim Smith';

    return (
        <header className="site-header">
          <a href="#0" className="logo">Tinge</a>
          <nav className="site-nav">
            <ul>
              <li className="active"><a href="#0">Revenue</a></li>
              <li><a href="#0">Churn</a></li>
              <li><a href="#0">Customer</a></li>
            </ul>
          </nav>
          <AccountActions name={user} />
        </header>
    );
  }
}

Nav.displayName = 'Nav';

// Uncomment properties you need
// NavComponent.propTypes = {};
// NavComponent.defaultProps = {};

export default Nav;
