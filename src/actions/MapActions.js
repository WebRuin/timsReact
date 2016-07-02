import dispatcher from '../dispatcher';

export function createBathroom(text) {
  dispatcher.dispatch({
    type: 'CREATE_BATHROOM',
    text
  });
}
