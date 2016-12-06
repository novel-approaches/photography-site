'use strict';
import { SELECT_PHOTO } from '../actions/index';


const toggleSelectedState = (photo) => Object.assign(photo, { selected: !photo.selected });

export default function photoSelect(state = {}, action) {
  switch (action.type) {
    case SELECT_PHOTO:
      // console.log(`Action <${action.type}> registered with payload <photo: `, action.photo, '>');

      const statePhotoKey = action.photo['public_id'],
            toggledPhoto = toggleSelectedState(action.photo);
      if (!state.hasOwnProperty(statePhotoKey)) {
        return Object.assign(state, { [statePhotoKey]: toggledPhoto });
      } else if (state.hasOwnProperty(statePhotoKey)) {
        let newState = Object.assign(state);
        delete newState[statePhotoKey];
        return newState;
      } else {
        return null;
      }
    default:
      return state;
  }
};
