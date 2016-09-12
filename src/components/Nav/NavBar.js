'use strict';

import React from 'react';

import Nav from './SubComponents/Nav';
import MapStore from '../../stores/UserStore'

require('styles/Nav/Nav.scss');

export default class NavBar extends React.Component {
  render() {
    return (
      <Nav />
    )
  }
}
