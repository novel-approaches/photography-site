'use strict';
import { SELECT_PHOTO } from '../actions/index';


const toggleSelectedState = (photo, id = null) => { photo.selected = !photo.selected; };

export default function photoSelect(state = {}, action) {
  switch (action.type) {
    case SELECT_PHOTO:
      console.log(`Action <${action.type}> registered with payload <photo: `, action.photo, '>');
      
      const StatePhotoKey = action.photo['public_id'];
      !state.hasOwnProperty(StatePhotoKey)
        ? ( toggleSelectedState(action.photo), state[StatePhotoKey] = action.photo ) : state.hasOwnProperty(StatePhotoKey)
        ? ( toggleSelectedState(action.photo), delete state[StatePhotoKey] )
        : null;
      console.log('PHOTO_SELECT_REDUCER:', state);
    default:
      return state;
  }
};
