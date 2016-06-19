require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

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
      <div className="page">
        <h1>About</h1>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
