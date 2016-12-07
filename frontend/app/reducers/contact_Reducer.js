'use strict';
import { SET_CONTACT_INFO } from '../actions/index';


export default function contactInfo(state = {}, action) {
  switch (action.type) {
    case SET_CONTACT_INFO:
      console.log(`Action <${action.type}> registered with payload <margins: ${action.margins}>`);
      console.log(action);
      return action.contactInfo;
    default:
      // console.log('DEFAULT STATE CONTACTINFO ACTION')
      return state;
  }
};
