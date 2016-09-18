'use strict';

import React from 'react';
import { Link } from 'react-router';

require('normalize.css/normalize.css');
require('styles/App.scss');
require('./AboutPageStyle.scss');
import Nav from '../Nav/Nav';

export default class AppComponent extends React.Component {
  constructor() {
    super();
    this.state = {
        id: ''
      , user: ''
      , email: ''
      , password: ''
    };
  }

  render() {

    return (
      <div className='page'>
        <Nav />
        <img className='about-page-logo' src='../static/ipfLogo.png' alt='iPeeFreely!' />
        <section className='about-container'>
          <div className='quote-box'>
            <h2>I wish it were EASIER to find a bathroom!!!</h2>
            <p>There is.... It is the long awaited... iPeeFreely app for Desktop, Mobile, and Smart Phone!!!</p>
          </div>

          <div className='quote-box'>
            <h2>I wish it were EASIER to find a bathroom!!!</h2>
            <p>There is.... It is the long awaited... iPeeFreely app for Desktop, Mobile, and Smart Phone!!!</p>
          </div>

          <div className='quote-box'>
            <h2>I wish it were EASIER to find a bathroom!!!</h2>
            <p>There is.... It is the long awaited... iPeeFreely app for Desktop, Mobile, and Smart Phone!!!</p>
          </div>
        </section>
        <nav className=''>
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
