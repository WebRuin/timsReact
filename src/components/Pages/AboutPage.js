'use strict';

import React from 'react';

require('normalize.css/normalize.css');
require('styles/App.scss');

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
        <h1>About</h1>
      </div>
    );
  }
}
