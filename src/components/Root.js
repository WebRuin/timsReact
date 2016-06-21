require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

import NavBar from './Nav/NavBar';

class AppComponent extends React.Component {
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
      <div className="index">
        <NavBar />
        {this.props.children}
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
