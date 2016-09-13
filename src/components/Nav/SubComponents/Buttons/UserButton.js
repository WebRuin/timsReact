'use strict';

import React from 'react'

import * as UserActions from '../../../../actions/UserActions'
import Store from '../../../../stores/UserStore'
const UserState = Store.state;

require('styles/Nav/AccountActions.scss')
require('styles/Nav/AccountButtons/UserButton.scss')

export default class UserButton extends React.Component {
  // SIGNUP DROPDOWN
  handleUserClick() {
    UserActions.toggleUserDropdown()
  }
  renderUserDropdown() {
    console.log('hi');
    if ( UserState.currentUser.userId === !null) {
      return (
        <div className='form--dropdown'>
          <ul>
            <li><span className='highlighed'>Your Account Info</span></li>
            <li><span className='list--lable'>Username:</span> { UserState.currentUser.user}</li>
            <li><span className='list--lable'>Email:</span> { UserState.currentUser.email}</li>
          </ul>
        </div>
      )
    }
  }

  render(){
    var userDropdown = UserState.ui.userDropdownIsOpen ? 'form--dropdown' : 'form--dropdown hidden';
    var userDropdownClass = UserState.ui.loggedOut ? 'user--btn--dropdown' : 'user--btn--dropdown hasDropdown'
    return (
      <div className='userLoggedOut-group'>
        <div className='account-dropdown'>
          <button className={userDropdownClass} onClick={this.handleUserClick.bind(this)}>
            {this.props.currentUser.user}
          </button>
          <div className={userDropdown}>
            <ul>
              <li><span className='highlighed'>Your Account Info</span></li>
              <li><span className='list--lable'>Username:</span> <span className='first-cap'>{ UserState.currentUser.user}</span></li>
              <li><span className='list--lable'>Email:</span> { UserState.currentUser.email}</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
