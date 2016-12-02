'use strict';

export const MODIFY_GRID_MARGINS = 'MODIFY_GRID_MARGINS';
export const MODIFY_GRID_SIZE = 'MODIFY_GRID_SIZE';
export const ORDER_PHOTO = 'ORDER_PHOTO';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const ADD_TO_SHOPPING_CART = 'ADD_TO_SHOPPING_CART';
export const SELECT_PHOTO = 'SELECT_PHOTO';
export const TOGGLE_PHOTO_SELECTION_STATE = 'TOGGLE_PHOTO_SELECTION_STATE';
export const GET_IMAGE_OBJECT = 'GET_IMAGE_OBJECT';

export function imageObject() {
  const FetchImageURLs = (
    $.ajax({
      url: '/images',
      type: 'get',
      success(res) {
        return res;
      },
      error(err) {
        console.log(err);
      }
    })
  );
  return {
    type: GET_IMAGE_OBJECT,
    payload: FetchImageURLs
  };
}

export const modifyGridMargins = (margins) => ({
  type: MODIFY_GRID_MARGINS,
  margins
});

export const modifyGridSize = (size) => ({
  type: MODIFY_GRID_SIZE,
  size
});

export const orderPhoto = (photo) => ({
  type: ORDER_PHOTO,
  photo
});

// Action used to handle display toggle of OrderFormModal React container:
export const toggleModal = () => ({
  type: TOGGLE_MODAL
});

export const addToShoppingCart = (payload) => ({
  type: ADD_TO_SHOPPING_CART,
  payload
});

export const selectPhoto = (photo) => ({
  type: SELECT_PHOTO,
  photo
});

export const toggleGalleryPhotoSelection = (photo) => ({
  type: TOGGLE_PHOTO_SELECTION_STATE,
  photo
});
