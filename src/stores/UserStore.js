'use strict';

import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

class UserStore extends EventEmitter {
  constructor() {
    super()
    this.state = {
      users: {
        email: ''
        , userId: ''
        , password: ''
        , user: 'Welcome!'
      },
      ui: {
          signupDropdownIsOpen : false
        , userDropDownIsOpen : false
        , loggedOut: true
      }
    }
  }

  getAllUsers() {
    return this.state.users;
  }
  getAllUI() {
    return this.state.ui;
  }

  login() {
    const loggedChanged = !this.state.ui.loggedOut
    this.state.ui.loggedOut = loggedChanged

    this.emit('change');
  }

  logout() {
    const loggedOutChanged = !this.state.ui.loggedOut
    this.state.users.email = ''
    this.state.users.userId = ''
    this.state.users.password = ''
    this.state.users.user = 'Welcome!'
    this.state.ui.loggedOut = loggedOutChanged


    this.emit('change');
  }

  dropdownClicked() {
    const dropdownChanged = !this.state.ui.signupDropdownIsOpen
    this.state.ui.signupDropdownIsOpen = dropdownChanged
    console.log(dropdownChanged)
    this.emit('change');
  }

  createUser(user, email, password) {
    const id = Date.now();

    this.state.users.push({
      id,
      user,
      email,
      password,
      loggedIn: false
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
        break;
      }
      case 'LOGOUT': {
        this.logout();
        break;
      }
      case 'DROPDOWN-CLICKED':
      this.dropdownClicked();
      break;
    }
  }

}

const userStore = new UserStore;
export default userStore;
dispatcher.register(userStore.handleActions.bind(userStore));
