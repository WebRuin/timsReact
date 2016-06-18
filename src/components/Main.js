require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Nav from './Nav/Nav';

class AppComponent extends React.Component {

  constructor() {
    super();
    this.state = {
      id: '',
      user: '',
      email: '',
      password: ''
    };
  }

  render() {
    return (
      <div className="index">
        <Nav />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
