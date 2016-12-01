'use strict';
import { TOGGLE_PHOTO_SELECTION_STATE } from '../actions/index';

import { DATA } from '../seed';

const DATA2 = DATA.reduce((memo, curr) => {
  memo[curr.public_id] = curr;
  return memo;
}, {});

const SELECTION_STATES = DATA.reduce( (obj, item) => {
  obj[item.public_id] = false;
  return obj;
}, {});

const togglePhotoSelectionState = (gallery, photo) => {
  let galleryPhoto = gallery[photo.public_id];
  console.log('\n\nGALLERY PHOTO:', galleryPhoto);
  galleryPhoto.selected = !galleryPhoto.selected;
};

export default function photoGallerySelect(state = SELECTION_STATES, action) {
  switch (action.type) {
    case TOGGLE_PHOTO_SELECTION_STATE:
      // console.log(`Action <${action.type}> registered with payload <photo: `, action.photo, '>');
      // let [photoID, photoObjEntry] = [action.photo.public_id, togglePhotoSelectionState(state, action.photo)];
      let photoID = action.photo.public_id;
      console.log('PGSSSS', Object.assign(state, { [photoID]: !state[photoID] }));
      return Object.assign(state, { [photoID]: !state[photoID] });
    default:
      return state;
  }
};
