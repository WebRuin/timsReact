'use strict';

import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

class UserStore extends EventEmitter {
  constructor() {
    super()
    this.state = [
      {
        users: {
            email: ''
          , id: ''
          , password: ''
          , user: 'Welcome!'
        },
        ui: {
            signupDropdownIsOpen : false
          , userDropdownIsOpen : false
          , loggedOut: true
        }
      }
    ];
  }

  getAllUsers() {
    return this.state.users
  }

  getUI() {
    return this.state.ui
  }

  login() {
    this.setState( {loggedOut: !this.state.ui.loggedOut} )
  }

  logout() {
    this.state.users = {
        email: ''
      , id: ''
      , password: ''
      , user: 'Welcome!'
    }
  }

  dropdownClicked() {
    this.setState( {signupDropDownIsOpen: !this.state.ui.signupDropDownIsOpen} )
  }

  createUser(user, email, password) {
    const id = Date.now();

    this.state.users.push({
      id,
      user,
      email,
      password
    });

    this.emit('change');
  }

  handleActions(action) {
    switch(action.type) {
      case 'CREATE_USER': {
        this.createUser(action.text);
        break;
      }
      case 'LOGIN': {
        this.login();
        this.emit('change');
        break;
      }
      case 'LOGOUT': {
        this.logout();
        this.emit('change');
        break;
      }
      case 'DROPDOWN-CLICKED': {
        this.dropdownClicked();
        this.emit('change');
        break;
      }
    }
  }

}

const userStore = new UserStore;
export default userStore;
dispatcher.register(userStore.handleActions.bind(userStore));
