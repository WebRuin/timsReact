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
        , userDropdownIsOpen : false
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

  userDropdownClicked() {
    if (this.state.ui.signupDropdownIsOpen === true){
      this.state.ui.signupDropdownIsOpen = false
    }
    const dropdownChanged = !this.state.ui.userDropdownIsOpen
    this.state.ui.userDropdownIsOpen = dropdownChanged
    this.emit('change');
  }

  signupDropdownClicked() {
    if (this.state.ui.signupDropdownIsOpen === true){
      this.state.ui.signupDropdownIsOpen = false
    }
    const dropdownChanged = !this.state.ui.userDropdownIsOpen
    this.state.ui.userDropdownIsOpen = dropdownChanged
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
      case 'USER-DROPDOWN-CLICKED':
      this.userDropdownClicked();
      break;
    }
  }

}

const userStore = new UserStore;
export default userStore;
dispatcher.register(userStore.handleActions.bind(userStore));
