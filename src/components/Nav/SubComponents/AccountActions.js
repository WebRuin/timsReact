'use strict';

import React from 'react';

import UserStore from '../../../stores/UserStore'

import UserButton from './Buttons/UserButton'
import AccountButtons from './Buttons/AccountButtons'

require('styles/Nav/AccountActions.scss')
require('styles/Nav/AccountButtons/LoginButton.scss')
require('styles/Nav/AccountButtons/LogoutButton.scss')
require('styles/Nav/AccountButtons/SignupButton.scss')

export default class AccountActions extends React.Component {

  constructor() {
    super();
    this.getStates = this.getStates.bind(this)
    this.state = {
      currentUser: UserStore.getCurrentUser(),
      users: UserStore.getAllUsers(),
      ui: UserStore.getAllUI()
    }
  }

  componentWillMount() {
    UserStore.on('change', this.getStates);
  }

  componentWillUnmount() {
    UserStore.removeListener('change', this.getStates);
  }

  getStates() {
    this.setState({
      users: UserStore.getAllUsers(),
      ui: UserStore.getAllUI()
    })
  }

  render () {
    return (
      <section className='account-actions'>
        <pre className="pre"><h3>this.state.currentUser</h3> {JSON.stringify(this.state.currentUser, null, 2)}</pre>
        <UserButton
          currentUser={this.state.currentUser}
          users={this.state.users}
          ui={this.state.ui}
        />
        <AccountButtons
          currentUser={this.state.currentUser}
          users={this.state.users}
          ui={this.state.ui}
        />
      </section>
    )
  }
}
