'use strict';
import { CHANGE_ITEM_QUANTITY } from '../actions/index';


export default function orderQuantity(state = {}, action) {
  switch (action.type) {
    case CHANGE_ITEM_QUANTITY:
      // console.log(`Action <${action.type}> registered with payload <payload: `, action.payload, '>');
      let { photoID, quantity, price } = action.payload,
          stateCopy;

      if (!state.hasOwnProperty(photoID)) {
        stateCopy = Object.assign(state, {
          [photoID]: {
            quantity,
            price
          }
        });
      } else {
        let stateQuantity = state[photoID].quantity;
        let payloadQuantity = action.payload.quantity;
        let newQ = Object.assign(state[photoID].quantity, action.payload.quantity);
          console.log('\nNEWQ:', newQ);

        stateCopy = Object.assign(state, {
          [photoID]: {
            quantity: newQ,
            price
          }
        });
      }
        // console.log('STATECOPY:', stateCopy);
        // console.log('\n\nJSON', JSON.stringify(stateCopy));
      return stateCopy;
    default:
      return state;
  }
};
