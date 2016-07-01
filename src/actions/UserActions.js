import dispatcher from '../dispatcher';

export function createUser(text) {
  dispatcher.dispatch({
    type: 'CREATE_USER',
    text
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

export function userDropdownClicked() {
  dispatcher.dispatch({
    type: 'USER-DROPDOWN-CLICKED'
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
