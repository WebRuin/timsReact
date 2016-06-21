'use strict';

import React from 'react';

import Nav from './SubComponents/Nav';
import AccountActions from './SubComponents/AccountActions';

require('styles/Nav/Nav.scss');

export default class NavBar extends React.Component {
  render() {
    return (
      <header className="site-header">
        <Nav />
        <AccountActions />
      </header>
    )
  }
}
