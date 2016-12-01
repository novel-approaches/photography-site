'use strict';

export default function orderFormModal(state = false, action) {
  switch (action.type) {
    case 'TOGGLE_MODAL':
      state = !state;
    default:
      return state;
  }
};
