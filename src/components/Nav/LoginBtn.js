'use strict';

import React from 'react';

require('styles/Nav/LoginBtn.scss');

var LoginBtn = React.createClass({

  render () {
    const loggedIn = this.props.loggedIn
    if (!loggedIn) {
      var btn = 'Sign In'
    } else {
      var btn = 'Sign Out'
    }
    return (
      <a href="#0" className="login--btn">{btn}</a>
    )
  }
})

LoginBtn.displayName = 'Login';

export default LoginBtn;
