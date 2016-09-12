'use strict';

import React from 'react';
import RenderMap from '../Map/RenderMap';
import Nav from '../Nav/SubComponents/Nav';

require('normalize.css/normalize.css')
require('styles/App.scss')

export default class AppComponent extends React.Component {
  render() {
    return (
      <div className="index map">
        <Nav />
        <RenderMap />
      </div>
    );
  }
}
