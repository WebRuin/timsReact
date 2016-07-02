import dispatcher from '../dispatcher';

export function createBathroom(bathroom) {
  dispatcher.dispatch({
    type: 'CREATE_BATHROOM',
    bathroom
  });
}
