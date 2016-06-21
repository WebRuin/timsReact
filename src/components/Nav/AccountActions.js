'use strict';

import React from 'react';
import Login from './LoginBtn';
import * as LoginActions from '../../actions/LoginActions';
import LoginStore from '../../stores/LoginStore';

require('styles/Nav/AccountActions.scss');

class AccountActions extends React.Component {
  constructor() {
    super();
    this.user = this.getLogin.bind(this);
    this.state = {
      user: LoginStore.getAll()
    };
  }

  componentWillMount() {
    LoginStore.on('change', this.getLogin);
  }

  componentWillUnmount() {
    LoginStore.removeListener('change', this.getLogin);
  }

  getLogin() {
    this.setState({
      users: LoginStore.getAll()
    });
  }

  getFormData(e) {
    e.preventDefault();

    user: this.refs.userName.value
    email: this.refs.userEmail.value
    password: this.refs.userPass.value
    console.log('user: ' + this.user)

    LoginStore.createUser(this.user, this.email, this.password)
  }

  render () {
    // Replace with database connection
    function isLoggedin() {
      return (
        false
      )
    }

    return (
      <div className='account-actions'>
        <div className='account-dropdown'>
          <button className='user--btn--dropdown'>
            Hi
          </button>
          <ul className='form--dropdown'>
            <li>Your Account</li>
            <form onSubmit={this.getFormData.bind(this)}>
              <input ref='userName' placeholder='Your Name' />
              <input ref='userEmail' placeholder='Your Email' />
              <input ref='userPass' placeholder='Password' />
              <button type='submit'>Update</button>
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
