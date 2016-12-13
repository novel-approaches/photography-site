'use strict';
import { TOGGLE_PHOTO_SELECTION_STATE } from '../actions/index';
import { SEED_DATA } from '../constants/SeedData';


const DATA = SEED_DATA.reduce((memo, curr) => {
  memo[curr.public_id] = curr;
  return memo;
}, {});

const SELECTION_STATES = SEED_DATA.reduce( (obj, item) => {
  obj[item.public_id] = false;
  return obj;
}, {});

const togglePhotoSelectionState = (gallery, photo) => {
  let galleryPhoto = gallery[photo.public_id];
  galleryPhoto.selected = !galleryPhoto.selected;
};

export default function photoGallerySelect(state = SELECTION_STATES, action) {
  switch (action.type) {
    case TOGGLE_PHOTO_SELECTION_STATE:
      // console.log(`Action <${action.type}> registered with payload <photo: `, action.photo, '>');
      let photoID = action.photo.public_id;
      return Object.assign({}, state, { [photoID]: !state[photoID] });
    default:
      // console.log(`Action <${action.type}> unrecognized! Reverting to default state.`);
      return state;
  }
};
