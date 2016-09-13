import dispatcher from '../dispatcher';

export function createUser(user) {
  dispatcher.dispatch({
    type: 'CREATE_USER',
    user
  });
}

export function login() {
  dispatcher.dispatch({
    type: 'LOGIN'
  })
}

export function logout() {
  dispatcher.dispatch({
    type: 'LOGOUT'
  })
}

export function toggleUserDropdown() {
  dispatcher.dispatch({
    type: 'TOGGLE_USER_DROPDOWN'
  })
}

export function toggleSignupDropdown() {
  dispatcher.dispatch({
    type: 'TOGGLE_SIGNUP_DROPDOWN'
  })
}

export function userNameChanged(text){
  dispatcher.dispatch({
    type: 'CREATE_USERNAME_CHANGED',
    text
  })
}

// export function fetchLogin() {
//   // axios('http://someurl.com/somedataendpoint').then((data) => {
//   //   console.log('got the data!', data);
//   // })
//   dispatcher.dispatch({type: 'FETCH_LOGIN'});
//   setTimeout(() => {
//     dispatcher.dispatch({type: 'RECEIVE_TODOS', todos: [
//       {
//         id: 8484848484,
//         text: 'Go Shopping Again',
//         complete: false
//       },
//       {
//         id: 6262627272,
//         text: 'Hug Wife',
//         complete: true
//       }
//     ]});
//   }, 1000);
// }
