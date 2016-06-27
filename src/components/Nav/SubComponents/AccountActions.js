'use strict';

import React from 'react';
import classNames from 'classnames';

require('styles/Nav/AccountActions.scss');
require('styles/Nav/AccountButtons/LoginButton.scss');
require('styles/Nav/AccountButtons/LogoutButton.scss');
require('styles/Nav/AccountButtons/SignupButton.scss');

export default class AccountActions extends React.Component {
  constructor() {
    super();
    this.state = {
        email: ''
      , id: ''
      , loggedOut: true
      , password: ''
      , user: 'Welcome!'
    };
  }

  login() {
    this.setState({ loggedOut: false })
  }

  logout() {
    this.setState({ loggedOut: true })
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
    var loggedOutClass = classNames({
      'logout-group hidden': this.state.loggedOut,
      'logout-group shown': !this.state.loggedOut
    });
    var loggedInClass = classNames({
      'login-group shown': this.state.loggedOut,
      'login-group hidden': !this.state.loggedOut
    });
    return (
      <section className="account-actions">
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
        <div className='button-group'>
          <div className={loggedInClass}>
            <button className='login--btn' onClick={this.login.bind(this)}>Login</button>
            <a href="#0" className='signup--btn'>Signup</a>
          </div>
          <div className={loggedOutClass}>
            <button className='logout--btn' onClick={this.logout.bind(this)}>Logout</button>
          </div>
        </div>
      </section>
    )
  }
}
