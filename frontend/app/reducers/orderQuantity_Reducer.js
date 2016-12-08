'use strict';
import { CHANGE_ITEM_QUANTITY } from '../actions/index';


export default function orderQuantity(state = {}, action) {
  switch (action.type) {
    case CHANGE_ITEM_QUANTITY:
      // console.log(`Action <${action.type}> registered with payload <payload: `, action.payload, '>');
      let { photoID, quantity, price } = action.payload,
          stateCopy;
      if (!state.hasOwnProperty(photoID)) {
        stateCopy = Object.assign({}, state, {
          [photoID]: {
            quantity,
            price
          }
        });
      } else {
        let stateQuantity = state[photoID].quantity,
            payloadQuantity = action.payload.quantity,
            newQ = Object.assign({}, state[photoID].quantity, action.payload.quantity);

        stateCopy = Object.assign({}, state, {
          [photoID]: {
            quantity: newQ,
            price
          }
        });
      }
      return stateCopy;
    default:
      return state;
  }
};
