'use strict';

import React from 'react';
import { Link } from 'react-router';

require('styles/Nav/Nav.scss');

export default class Nav extends React.Component {
  render() {
    return (
      <div className="site-header">
        <a href="/" className="logo">
          <span className='logo--h1'>iPFreely!</span> <br />
          <span className='logo--h2'>Bathroom Locator</span>
        </a>
        <nav className="site-nav">
          <ul>
            <li><Link to="map" activeClassName="active">Map</Link></li>
            <li><Link to="list" activeClassName="active">List</Link></li>
            <li><Link to="about" activeClassName="active">About</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}
