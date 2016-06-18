'use strict';

import React from 'react';
import Login from './LoginBtn'

require('styles/Nav/AccountActions.scss');

class AccountActions extends React.Component {
  render () {

    // Replace with database connection
    function isLoggedin() {
      return (
        false
      )
    }
    return (
      <div className="account-actions">
        <div className="account-dropdown">
          <button className="user--btn--dropdown">
            <input type="checkbox" />
            {this.props.name}
          </button>
          <ul>
            <li>Your Account</li>
          </ul>
        </div>
        <Login loggedIn={isLoggedin()} />
      </div>
    )
  }
}

AccountActions.displayName = 'AccountActions';

// Uncomment properties you need
// NavComponent.propTypes = {};
// NavComponent.defaultProps = {};

export default AccountActions;
