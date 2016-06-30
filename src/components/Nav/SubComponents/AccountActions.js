'use strict';

import React from 'react';

import classNames from 'classnames'
import LocalStorageMixin from 'react-localstorage'
import UserStore from '../../../stores/UserStore'
import * as UserActions from '../../../actions/UserActions'


require('styles/Nav/AccountActions.scss')
require('styles/Nav/AccountButtons/LoginButton.scss')
require('styles/Nav/AccountButtons/LogoutButton.scss')
require('styles/Nav/AccountButtons/SignupButton.scss')

export default class AccountActions extends React.Component {
  mixins: [LocalStorageMixin]

  constructor() {
    super();
    this.state = {
      ui: UserStore.getUI(),
      users: UserStore.getAllUsers()
    }

    this.currentUser = {
        email: ''
      , id: ''
      , password: ''
      , user: 'Welcome!'
    }
  }

  componentWillMount() {
    UserStore.on('change', this.getUsers)
    UserStore.on('change', this.getUI)
  }

  componentWillUnmount() {
    UserStore.removeListener('change', this.getUsers)
    UserStore.removeListener('change', this.getUI)
  }

  getUsers() {
    this.setState({
      users: UserStore.getAllUsers()
    });
  }

  getUI() {
    this.setState({
      ui: UserStore.getUI()
    });
  }

  // SIGNUP DROPDOWN
  handleUserClick() {
    UserActions.dropdownClicked()
  }
  renderUserDropdown() {
    if (this.state.users.id === '') {
      return (
        <div className='form--dropdown'>
          <h1 className='highlighed'>Welcome!</h1>
          <p>Please please login</p>
          <pre>{JSON.stringify(this.state, null, 2)}</pre>
        </div>
      )
    } else {
      return (
        <div className='form--dropdown'>
          <ul>
            <li><span className='highlighed'>Your Account Info</span></li>
            <li><span className='list--lable'>Username:</span> {this.currentUser.user}</li>
            <li><span className='list--lable'>Email:</span> {this.currentUser.email}</li>
          </ul>
        </div>
      )
    }
  }

  handleSignup(e) {
    e.preventDefault()

    this.currentUser = {
      email: this.refs.email.value,
      id: Math.floor(Math.random()*1000000),
      password: this.refs.password.value,
      user: this.refs.username.value
    }

    this.refs.signupForm.reset()
  }

  // USER STUFF
  handleUserChange(e) {
    const user = e.target.value
    this.changeUser(user)
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
    this.setState({user})
  }
  render () {
    var userDropdown = this.state.ui.userDropdownIsOpen ? this.renderUserDropdown() : null
    var userDropdownClass = this.state.ui.loggedOut ? 'user--btn--dropdown' : 'user--btn--dropdown hasDropdown'
    // Replace with database connection
    // SIGNIN/SIGNOUT
    var loggedOutClass = classNames({
      'logout-group hidden': this.state.ui.loggedOut,
      'logout-group shown': !this.state.ui.loggedOut
    });
    var loggedInClass = classNames({
      'login-group shown hasDropdown': this.state.ui.loggedOut,
      'login-group hidden': !this.state.ui.loggedOut
    });
    return (
      <section className='account-actions'>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
        <div className='userLoggedOut-group'>
          <div className='account-dropdown'>
            <button className={userDropdownClass} onClick={this.handleUserClick.bind(this)}>
              {this.state.users.user}
            </button>
            {userDropdown}
          </div>
        </div>
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
                <button className='signup--btn' type='submit'>Update</button>
              </form>
            </ul>
          </div>
          <div className={loggedOutClass}>
            <button className='logout--btn' onClick={this.handleLogout.bind(this)}>Logout</button>
          </div>
        </div>
      </section>
    )
  }
}
