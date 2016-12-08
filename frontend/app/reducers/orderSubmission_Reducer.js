'use strict';
import { SUBMIT_ORDER } from '../actions/index';


export default function orderSubmission(state = {}, action) {
  switch (action.type) {
    case SUBMIT_ORDER:
      // console.log(`Action <${action.type}> registered with payload <payload: ${action.payload}` + '>');
      return action.payload;
    default:
      return state;
  }
};
