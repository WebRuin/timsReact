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
      },
      currentUser: {
          email: ''
        , userid: ''
        , password: ''
        , user: 'Welcome!'
      }
    }
  }

  getAllUsers() {
    return this.state.users
  }
  getAllUI() {
    return this.state.ui
  }
  getCurrentUser() {
    return this.state.currentUser
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

  createUser(user) {
    // const id = Date.now();

    this.state.currentUser.email = user.email;
    this.state.currentUser.userid = user.userid;
    this.state.currentUser.password = user.password;
    this.state.currentUser.user = user.user;

    // this.state.users.push({
    //   id: this.currentUser.id,
    //   user: this.currentUser.user,
    //   email: this.currentUser.email,
    //   password: this.currentUser.password,
    //   loggedIn: false
    // });

    this.emit('change');
  }

  handleUsernameChanged(text) {
    this.state.currentUser.user = text;
    this.emit('change');
  }

  toggleUserDropDown() {
    if (this.state.ui.userDropdownIsOpen === true) {
      this.state.ui.userDropdownIsOpen = false
    } else {
      this.state.ui.userDropdownIsOpen = true
    }

    // console.log('clicked')
    this.emit('change');
  }

  toggleSignupDropDown() {
    if (this.state.ui.signupDropdownIsOpen === true) {
      this.state.ui.signupDropdownIsOpen = false
    } else {
      this.state.ui.signupDropdownIsOpen = true
    }

    // console.log('clicked')
    this.emit('change');
  }

  handleActions(action) {
    switch(action.type) {
      case 'CREATE_USER': {
        this.createUser(action.user);
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
      case 'TOGGLE_USER_DROPDOWN': {
        this.toggleUserDropDown();
        break;
      }
      case 'TOGGLE_SIGNUP_DROPDOWN': {
        this.toggleSignupDropDown();
        break;
      }
      case 'CREATE_USERNAME_CHANGED':
        this.handleUsernameChanged(action.text);
        break;
    }
  }
}

const userStore = new UserStore;
export default userStore;
dispatcher.register(userStore.handleActions.bind(userStore));
