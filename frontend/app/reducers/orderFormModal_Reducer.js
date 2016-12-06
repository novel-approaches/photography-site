'use strict';
import { TOGGLE_MODAL } from '../actions/index';


export default function orderFormModal(state = false, action) {
  switch (action.type) {
    case TOGGLE_MODAL:
      // console.log(`Action <${action.type}> registered with payload <(BOOL): ${!state}>`);
      state = !state;
    default:
      return state;
  }
};
