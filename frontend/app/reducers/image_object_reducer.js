'use strict';
import { GET_IMAGE_OBJECT } from '../actions/index';

export default function imageObject(state = [], action) {
  switch (action.type) {
    case GET_IMAGE_OBJECT:
      // console.log(`Action <${action.type}> registered with payload <payload: ${action.payload.data}>`);
      return action.payload.data;
    default:
      return state;
  }
};
