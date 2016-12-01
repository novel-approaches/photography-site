'use strict';
import { SELECT_PHOTO } from '../actions/index';


export default function photoSelect(state = {}, action) {
  switch (action.type) {
    case SELECT_PHOTO:
      console.log(`Action <${action.type}> registered with payload <size: `, action.photo, '>');
      // return action.photo;
      !state.hasOwnProperty(action.photo['public_id'])
        ? state[action.photo['public_id']] = action.photo
        : null;
      console.log('PHOTO_SELECT_REDUCER:', state);
    default:
      return state;
  }
};
