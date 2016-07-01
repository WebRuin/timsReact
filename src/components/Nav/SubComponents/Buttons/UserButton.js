'use strict';

import React from 'react'

import * as UserActions from '../../../../actions/UserActions'

require('styles/Nav/AccountActions.scss')
require('styles/Nav/AccountButtons/UserButton.scss')

export default class UserButton extends React.Component {
  // SIGNUP DROPDOWN
  handleUserClick() {
    UserActions.userDropdownClicked()
  }
  renderUserDropdown() {
    if (this.props.users.userId === '') {
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
            <li><span className='list--lable'>Username:</span> {this.props.currentUser.user}</li>
            <li><span className='list--lable'>Email:</span> {this.props.currentUser.email}</li>
          </ul>
        </div>
      )
    }
  }

  render(){
    var userDropdown = this.props.ui.userDropdownIsOpen ? this.renderUserDropdown() : null;
    var userDropdownClass = this.props.ui.loggedOut ? 'user--btn--dropdown' : 'user--btn--dropdown hasDropdown'
    return (
      <div className='userLoggedOut-group'>
        <div className='account-dropdown'>
          <button className={userDropdownClass} onClick={this.handleUserClick.bind(this)}>
            {this.props.currentUser.user}
          </button>
          {userDropdown}
        </div>
      </div>
    )
  }
}
