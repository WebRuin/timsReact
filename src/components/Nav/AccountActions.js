'use strict';

import React from 'react';
import Login from './LoginBtn';

require('styles/Nav/AccountActions.scss');

class AccountActions extends React.Component {
  constructor() {
    super();
    this.state = {
        id: ''
      , user: 'Welcome!'
      , email: ''
      , password: ''
    };
  }

  handleUserChange(e) {
    const user = e.target.value;
    this.changeUser(user)
  }

  updateUserData(e){
    e.preventDefault();
    this.refs.changeUserName.reset();
  }

  changeUser(user) {
    this.setState({user})
  }
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
            {this.state.user}
          </button>
          <ul className="form--dropdown">
            <li>Your Account</li>
            <form ref='changeUserName' onSubmit={this.updateUserData.bind(this)}>
              <input onChange={this.handleUserChange.bind(this)} />
              <button type="submit">Update</button>
            </form>
            <pre>
              {JSON.stringify(this.state, null, 2)}
            </pre>
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
