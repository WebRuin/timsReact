'use strict';

import React from 'react';
import classNames from 'classnames';
import * as UserActions from '../../../../actions/UserActions'

require('styles/Nav/AccountActions.scss')
require('styles/Nav/AccountButtons/LoginButton.scss')
require('styles/Nav/AccountButtons/LogoutButton.scss')
require('styles/Nav/AccountButtons/SignupButton.scss')

export default class AccountButtons extends React.Component {

  handleSignup(e) {
    e.preventDefault()

    UserActions.createUser({
      email: this.refs.email.value,
      id: Math.floor(Math.random()*1000000),
      password: this.refs.password.value,
      user: this.refs.username.value
    })

    this.refs.signupForm.reset()
  }

  // USER STUFF
  handleUserChange(e) {
    let newUserName = e.target.value;
    UserActions.userNameChanged(newUserName)
  }

  handleLogin() {
    UserActions.login()
  }

  handleLogout() {
    UserActions.logout()
  }

  updateUserData(e){
    e.preventDefault()
    this.refs.changeUserName.reset()
  }

  changeUser(user) {
    this.props.currentUser.user = user;
  }

  render () {
    // Replace with database connection
    // SIGNIN/SIGNOUT
    var loggedOutClass = classNames({
      'logout-group hidden': this.props.ui.loggedOut,
      'logout-group shown': !this.props.ui.loggedOut
    });
    var loggedInClass = classNames({
      'login-group shown hasDropdown': this.props.ui.loggedOut,
      'login-group hidden': !this.props.ui.loggedOut
    });

    return (
      <div className='button-group'>
        <div className={loggedInClass}>
          <button className='login--btn' onClick={this.handleLogin.bind(this)}>Login</button>
          <button className='signup--btn'>Signup</button>
          <ul className='signup--dropdown'>
            <form ref='signupForm' onSubmit={this.handleSignup.bind(this)}>
              <input ref='username' placeholder='Your Name' onChange={this.handleUserChange.bind(this)} />
              <input ref='email' placeholder='Your Email' />
              <input ref='password' placeholder='Select Password' />
              <br />
              <button className='signup--btn' type='submit' onClick={this.handleSignup.bind(this)}>Save</button>
            </form>
          </ul>
        </div>
        <div className={loggedOutClass}>
          <button className='logout--btn' onClick={this.handleLogout.bind(this)}>Logout</button>
        </div>
      </div>
    )
  }
}
