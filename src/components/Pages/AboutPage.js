'use strict';

import React from 'react';

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
            <h2>`I wish it were EASIER to find a bathroom!!!`</h2>
            <p>There is.... It is the long awaited... iPeeFreely app for Desktop, Mobile, and Smart Phone!!!</p>
          </div>

          <div className='quote-box'>
            <h2>`I wish it were EASIER to find a bathroom!!!`</h2>
            <p>There is.... It is the long awaited... iPeeFreely app for Desktop, Mobile, and Smart Phone!!!</p>
          </div>

          <div className='quote-box'>
            <h2>`I wish it were EASIER to find a bathroom!!!`</h2>
            <p>There is.... It is the long awaited... iPeeFreely app for Desktop, Mobile, and Smart Phone!!!</p>
          </div>
        </section>
      </div>

    );
  }
}
