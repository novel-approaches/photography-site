'use strict';
import { TOGGLE_PHOTO_SELECTION_STATE } from '../actions/index';

const togglePhotoSelectionState = (gallery, photo) => {
  let galleryPhoto = gallery[photo.public_id];
  galleryPhoto.selected = !galleryPhoto.selected;
};

export default function photoGallerySelect(state = {}, action) {
  switch (action.type) {
    case TOGGLE_PHOTO_SELECTION_STATE:
      let photoID = action.photo.public_id;
      return Object.assign({}, state, { [photoID]: !state[photoID] });
    default:
      return state;
  }
};
