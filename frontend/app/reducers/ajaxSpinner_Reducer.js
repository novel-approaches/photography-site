'use strict';
import { SET_AJAX_SPINNER } from '../actions/index';


export default function ajaxSpinner(state = false, action) {
  switch (action.type) {
    case SET_AJAX_SPINNER:
      // console.log(`Action <${action.type}> registered with payload <loading: ${action.loading}>`);
      return action.loading;
    default:
      return state;
  }
};
