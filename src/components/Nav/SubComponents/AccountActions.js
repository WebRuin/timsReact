'use strict';

import React from 'react';
import classNames from 'classnames';
import LocalStorageMixin from 'react-localstorage';

require('styles/Nav/AccountActions.scss');
require('styles/Nav/AccountButtons/LoginButton.scss');
require('styles/Nav/AccountButtons/LogoutButton.scss');
require('styles/Nav/AccountButtons/SignupButton.scss');

export default class AccountActions extends React.Component {
  mixins: [LocalStorageMixin]

  constructor() {
    super();
    this.state = {
        email: ''
      , signupDropDownIsOpen : false
      , userDropDownIsOpen : false
      , id: ''
      , loggedOut: true
      , password: ''
      , user: 'Welcome!'
    };
  }

  // SIGNUP DROPDOWN
  handleUserClick() {
    this.setState({
      userDropDownIsOpen : !this.state.userDropDownIsOpen
    });
  }
  renderUserDropdown() {
    return (
      <div className='form--dropdown'>
        <ul>
          <li><span className='highlighed'>Your Account Info</span></li>
          <li><span className='list--lable'>Username:</span> {this.state.user}</li>
          <li><span className='list--lable'>Email:</span> {this.state.email}</li>
        </ul>
      </div>
    );
  }

  login() {
    this.setState({ loggedOut: false })
  }

  logout() {
    this.setState({
        email: ''
      , signupDropDownIsOpen : false
      , userDropDownIsOpen : false
      , id: ''
      , loggedOut: true
      , password: ''
      , user: 'Welcome!'
    })
  }

  handleSignup(e) {
    e.preventDefault()

    this.setState({
      email: this.refs.email.value,
      password: this.refs.password.value,
      user: this.refs.username.value,
      loggedOut: false
    })

    this.refs.signupForm.reset()
  }

  // USER STUFF
  handleUserChange(e) {
    const user = e.target.value;
    this.changeUser(user)
  }

  updateUserData(e){
    e.preventDefault()
    this.refs.changeUserName.reset()
  }

  changeUser(user) {
    this.setState({user})
  }
  render () {
    var userDropdown = this.state.userDropDownIsOpen ? this.renderUserDropdown() : null;
    var userDropdownClass = this.state.loggedOut ? 'user--btn--dropdown' : 'user--btn--dropdown hasDropdown'
    // Replace with database connection
    // SIGNIN/SIGNOUT
    var loggedOutClass = classNames({
      'logout-group hidden': this.state.loggedOut,
      'logout-group shown': !this.state.loggedOut
    });
    var loggedInClass = classNames({
      'login-group shown hasDropdown': this.state.loggedOut,
      'login-group hidden': !this.state.loggedOut
    });
    return (
      <section className='account-actions'>
        <div className='userLoggedOut-group'>
          <div className='account-dropdown'>
            <button className={userDropdownClass} onClick={this.handleUserClick.bind(this)}>
              {this.state.user}
            </button>
            {userDropdown}
          </div>
        </div>
        <div className='button-group'>
          <div className={loggedInClass}>
            <button className='login--btn' onClick={this.login.bind(this)}>Login</button>
            <button className='signup--btn'>Signup</button>
            <ul className='signup--dropdown'>
              <form ref='signupForm' onSubmit={this.handleSignup.bind(this)}>
                <input ref='username' placeholder='Your Name' onChange={this.handleUserChange.bind(this)} />
                <input ref='email' placeholder='Your Email' />
                <input ref='password' placeholder='Select Password' />
                <br />
                <button className='signup--btn' type='submit'>Update</button>
              </form>
            </ul>
          </div>
          <div className={loggedOutClass}>
            <button className='logout--btn' onClick={this.logout.bind(this)}>Logout</button>
          </div>
        </div>
      </section>
    )
  }
}
