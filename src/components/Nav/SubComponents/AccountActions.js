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

  handleSignup(e) {
    e.preventDefault()

    // var email = this.refs.email
    // var password = this.refs.password
    // var user = this.refs.username
    //
    // this.setState({email, password, user})

    this.setState({ loggedOut: false })

    this.refs.signupForm.reset()
  }

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
    // USER
    var userLoggedOutClass = classNames({
      'userLoggedOut-group hidden': this.state.loggedOut,
      'userLoggedOut-group shown hasDropdown': !this.state.loggedOut
    });
    var userLoggedInClass = classNames({
      'userLoggedIn-group shown': this.state.loggedOut,
      'userLoggedIn-group hidden': !this.state.loggedOut
    });
    return (
      <section className='account-actions'>
        <div>
          <section className={userLoggedInClass}>
            <div className='account-dropdown'>
              <button className='user--btn--dropdown'>
                {this.state.user}
              </button>
            </div>
          </section>
          <section className={userLoggedOutClass}>
            <div className='account-dropdown'>
              <button className='user--btn--dropdown'>
                {this.state.user}
              </button>
              <ul className='form--dropdown'>
                <li>Your Account</li>
                <li>{this.state.user}</li>
                <li>{this.state.email}</li>
                <li>{this.state.password}</li>
              </ul>
            </div>
          </section>
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
