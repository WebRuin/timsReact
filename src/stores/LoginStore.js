import { EventEmitter } from 'events';

import dispatcher from '../dispatcher';

class LoginStore extends EventEmitter {
  constructor() {
    super()
    this.users = [
      {
          id: '1'
        , user: 'Welcome!'
        , email: ''
        , password: ''
      },
      {
          id: '1466448693560'
        , user: 'Tim Smith'
        , email: 'tim.smith.hdg@gmail.com'
        , password: 'WSX23xc9'
      }
    ];
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

  getAll() {
    return this.users;
  }

  handleActions(action) {
    switch(action.type) {
      case 'CREATE_USER': {
        this.createUser(action.text);
        break;
      }
      case 'FIND_USER': {
        // graphQL Stuff
        break;
      }
    }
  }

}

const loginStore = new LoginStore;
dispatcher.register(loginStore.handleActions.bind(loginStore));

export default loginStore;
