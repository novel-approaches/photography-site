'use strict';
import axios from 'axios';


export const MODIFY_GRID_MARGINS = 'MODIFY_GRID_MARGINS';
export const MODIFY_GRID_SIZE = 'MODIFY_GRID_SIZE';
export const ORDER_PHOTO = 'ORDER_PHOTO';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const ADD_TO_SHOPPING_CART = 'ADD_TO_SHOPPING_CART';
export const TOGGLE_PHOTO_SELECTION_STATE = 'TOGGLE_PHOTO_SELECTION_STATE';
export const GET_IMAGE_OBJECT = 'GET_IMAGE_OBJECT';
export const SET_AJAX_SPINNER = 'SET_AJAX_SPINNER';
export const SUBMIT_ORDER = 'SUBMIT_ORDER';
export const CHANGE_ITEM_QUANTITY = 'CHANGE_ITEM_QUANTITY';


// export const getPhotos = () => {
//   const FetchImageURLs = (
//     $.ajax({
//       url: '/images',
//       type: 'get',
//       success(res) {
//         console.log('RES:', res);
//         return res;
//       },
//       error(err) {
//         console.log(err);
//       }
//     })
//   );
//   console.log('GOT PHOTOS:', FetchImageURLs);
//   return {
//     type: GET_IMAGE_OBJECT,
//     payload: FetchImageURLs
//   };
// }
export const getPhotos = () => {
  const request = axios.get('/images');
  return {
    type: GET_IMAGE_OBJECT,
    payload: request
  };
};

// Action creator stages or unsets the AJAX loading spinner:
//  @param {booean} loading
export const setAjaxSpinner = (loading) => ({
  type: SET_AJAX_SPINNER,
  loading
});

export const submitOrder = (order) => {
  const request = axios.post('/order', {
      order
    })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
  return {
    type: SUBMIT_ORDER,
    payload: request
  };
};

export const changeItemQuantity = (item) => ({
  type: CHANGE_ITEM_QUANTITY,
  payload: item
});

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

export const addToShoppingCart = (photo) => ({
  type: ADD_TO_SHOPPING_CART,
  photo
});

export const toggleGalleryPhotoSelection = (photo) => ({
  type: TOGGLE_PHOTO_SELECTION_STATE,
  photo
});
