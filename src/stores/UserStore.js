'use strict';

import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

export default class UserStore extends EventEmitter {
  constructor() {
    super()
    this.users = [
      {
          email: ''
        , signupDropDownIsOpen : false
        , userDropDownIsOpen : false
        , id: ''
        , loggedOut: true
        , password: ''
        , user: 'Welcome!'
      }
    ];
  }

  getAll() {
    return this.users;
  }

  createUser(user, email, password) {
    const id = Date.now();

    this.users.push({
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
    }
  }

}

const userStore = new UserStore;
dispatcher.register(userStore.handleActions.bind(userStore));
