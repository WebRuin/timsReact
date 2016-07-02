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
    if (this.props.currentUser.userId === !null) {
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
