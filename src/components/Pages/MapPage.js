'use strict';

import React from 'react'

import RenderMap from '../Map/RenderMap'

require('normalize.css/normalize.css')
require('styles/App.scss')

export default class AppComponent extends React.Component {
  render() {
    return (
      <div className="index map">
        <RenderMap />
      </div>
    );
  }
}
