'use strict';
import { ADD_TO_SHOPPING_CART, EMPTY_SHOPPING_CART } from '../actions/index';


const toggleSelectedState = (photo) => Object.assign({}, photo, { selected: !photo.selected });

export default function photoSelect(state = {}, action) {
  switch (action.type) {
    case EMPTY_SHOPPING_CART:
      // console.log(`Action <${action.type}> registered with empty payload`);
      return {};
    case ADD_TO_SHOPPING_CART:
      // console.log(`Action <${action.type}> registered with payload <photo: `, action.photo, '>');
      const statePhotoKey = action.photo['public_id'],
            toggledPhoto = toggleSelectedState(action.photo);
      if (!state.hasOwnProperty(statePhotoKey)) {
        return Object.assign({}, state, { [statePhotoKey]: toggledPhoto });
      } else if (state.hasOwnProperty(statePhotoKey)) {
        let newState = Object.assign({}, state);
        delete newState[statePhotoKey];
        return newState;
      } else {
        return null;
      }
    default:
      return state;
  }
};
