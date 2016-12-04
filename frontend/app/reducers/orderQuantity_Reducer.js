'use strict';
import { CHANGE_ITEM_QUANTITY } from '../actions/index';


export default function orderQuantity(state = {}, action) {
  switch (action.type) {
    case CHANGE_ITEM_QUANTITY:
      console.log(`Action <${action.type}> registered with payload <payload: `, action.payload, '>');
      
      // let photoID = action.payload.photoID,
      //     quantity = action
      let { photoID, quantity } = action.payload;
        console.log('PAYLOAD:', photoID, quantity);

      // !state.hasOwnProperty(photoID)
      //   ? Object.assign(state, { [photoID]:  })
      //   :

      let stateCopy;
      if (!state.hasOwnProperty(photoID)) {
        stateCopy = Object.assign(state, {
          [photoID]: {
            quantity: action.payload.quantity
          }
        });
      } else {
        
        let stateQuantity = state[photoID].quantity;
          console.log('\nSTATE QUANTITY:\t', stateQuantity);
        let payloadQuantity = action.payload.quantity;
          console.log('\nPAYLOAD QUANTITY:\t', payloadQuantity);
        let newQuantityObj = {};

        // for (let key in stateQuantity) {
        //   if (payloadQuantity.hasOwnProperty(key)) {
        //     newQuantityObj[key] = payloadQuantity[key];
        //   } else {
        //     newQuantityObj[key] = stateQuantity[key];
        //   }
        // }

        let newQ = Object.assign(state[photoID].quantity, action.payload.quantity);
          console.log('\nNEWQ:', newQ);

        // stateCopy = Object.assign(state, {
        //   [photoID]: {
        //     quantity: newQuantityObj
        //   }
        // });

        stateCopy = Object.assign(state, {
          [photoID]: {
            quantity: newQ
          }
        });
      }
        console.log('STATECOPY:', stateCopy);
        console.log('\n\nJSON', JSON.stringify(stateCopy));
      return stateCopy;
    default:
      return state;
  }
};
