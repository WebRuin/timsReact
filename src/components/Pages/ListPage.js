'use strict';

import React from 'react';

require('normalize.css/normalize.css');
require('styles/App.scss');
import Nav from '../Nav/Nav';
import BathroomList from './atoms/BathroomList';

require('./ListPageStyle.scss');

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
      <div className="page">
        <Nav />
        <h1>Bathroom List</h1>
        <BathroomList />
      </div>
    );
  }
}
