'use strict';

import React from 'react';

require('styles/Nav/LoginBtn.scss');

export default class LoginBtn extends React.Component {

  render () {
    const loggedIn = this.props.loggedIn
    if (!loggedIn) {
      var lable = 'Sign In'
    } else {
      var lable = 'Sign Out'
    }
    return (
      <a href="#0" className="login--btn">{lable}</a>
    )
  }
}
