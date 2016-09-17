import dispatcher from '../dispatcher';

export function createBathroom(bathroom) {
  dispatcher.dispatch({
    type: 'CREATE_BATHROOM',
    bathroom
  });
}

export function setBathroomListMap(i) {
  dispatcher.dispatch({
    type: 'SET_BATHROOM_LIST_MAP',
    i
  });
}
