'use strict';
import { GET_IMAGE_OBJECT } from '../actions/index';

import { DATA } from '../seed';

export default function imageObject(state = DATA, action) {
  switch (action.type) {
    case GET_IMAGE_OBJECT:
      // console.log(`Action <${action.type}> registered with payload <size: ${action.size}>`);
      console.log(action.payload);
      // debugger;
      return { state: action.payload };
    default:
      return state;
  }
};
