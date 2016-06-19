require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

import RenderMap from '../Map/RenderMap';

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
        <RenderMap lat='37.7749295' lng='-122.41941550000001' />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
