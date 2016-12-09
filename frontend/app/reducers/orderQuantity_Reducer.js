'use strict';
import {
  CHANGE_ITEM_QUANTITY,
  CLEAR_ITEM_FROM_ORDER,
  EMPTY_SHOPPING_CART,
  REFRESH_SUBTOTAL } from '../actions/index';


export default function orderQuantity(state = {}, action) {
  let photoID, quantity, price, stateCopy;
  switch (action.type) {
    case EMPTY_SHOPPING_CART:
      // console.log(`Action <${action.type}> registered with empty payload`);
      return {};
    case CLEAR_ITEM_FROM_ORDER:
      // console.log(`Action <${action.type}> registered with payload <photo: `, action.photo, '>');
      [photoID, stateCopy] = [action.photo['public_id'], Object.assign({}, state)];
      delete stateCopy[photoID];
      return stateCopy;
    case CHANGE_ITEM_QUANTITY:
      // console.log(`Action <${action.type}> registered with payload <payload: `, action.payload, '>');
      [{ photoID, quantity }] = [action.payload];
      if (!state.hasOwnProperty(photoID)) {
        stateCopy = Object.assign({}, state, { [photoID]: { quantity, price: {} } });
      } else {
        let [stateQuantity, payloadQuantity] = [state[photoID].quantity, action.payload.quantity],
            newQ = Object.assign({}, state[photoID].quantity, action.payload.quantity),
            photoItem = Object.assign({}, state[photoID], { quantity: newQ });
        stateCopy = Object.assign({}, state, { [photoID]: photoItem });
      }
      return stateCopy;
    case REFRESH_SUBTOTAL:
      // console.log(`Action <${action.type}> registered with payload <payload: `, action.payload, '>');
      [{ photoID, price }] = [action.payload];
      let priceCopy = Object.assign({}, state[photoID].price, action.payload.price);
      stateCopy = Object.assign({}, state[photoID], { price: priceCopy });
      let newState = Object.assign({}, state, { [photoID]: stateCopy });
      return newState;
    default:
      return state;
  }
};
