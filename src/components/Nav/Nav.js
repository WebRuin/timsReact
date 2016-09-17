'use strict';

import React from 'react';
import { Link } from 'react-router';
import AccountActions from './AccountActions';

require('styles/Nav/Nav.scss');

export default class Nav extends React.Component {
  render() {
    return (
      <div className="site-header">
        <a href="#0" className="logo">iPeeFreely!</a>
        <nav className="site-nav">
          <ul>
            <li><Link to="map" activeClassName="active">Map</Link></li>
            <li><Link to="list" activeClassName="active">List</Link></li>
            <li><Link to="about" activeClassName="active">About</Link></li>
          </ul>
        </nav>
        <AccountActions />
      </div>
    );
  }
}
