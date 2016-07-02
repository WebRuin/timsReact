require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

import NavBar from './Nav/NavBar';

class AppComponent extends React.Component {
  render() {
    return (
      <div className='root'>
        <NavBar />
        {this.props.children}
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
