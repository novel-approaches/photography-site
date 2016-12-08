'use strict';
import { CHANGE_ITEM_QUANTITY } from '../actions/index';


export default function orderQuantity(state = {}, action) {
  switch (action.type) {
    case CHANGE_ITEM_QUANTITY:
      // console.log(`Action <${action.type}> registered with payload <payload: `, action.payload, '>');
// <<<<<<< HEAD
//
//       // let photoID = action.payload.photoID,
//       //     quantity = action
//       let { photoID, quantity } = action.payload;
//         // console.log('PAYLOAD:', photoID, quantity);
//
//       // !state.hasOwnProperty(photoID)
//       //   ? Object.assign(state, { [photoID]:  })
//       //   :
//
//       let stateCopy;
// =======

      let { photoID, quantity, price } = action.payload,
          stateCopy;
// >>>>>>> dev
      if (!state.hasOwnProperty(photoID)) {
        stateCopy = Object.assign({}, state, {
          [photoID]: {
            quantity,
            price
          }
        });
      } else {
// <<<<<<< HEAD

        let stateQuantity = state[photoID].quantity;
          // console.log('\nSTATE QUANTITY:\t', stateQuantity);
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
          // console.log('\nNEWQ:', newQ);

        // stateCopy = Object.assign(state, {
        //   [photoID]: {
        //     quantity: newQuantityObj
        //   }
        // });
=======
        let stateQuantity = state[photoID].quantity,
            payloadQuantity = action.payload.quantity,
            newQ = Object.assign({}, state[photoID].quantity, action.payload.quantity);
>>>>>>> dev

        stateCopy = Object.assign({}, state, {
          [photoID]: {
            quantity: newQ,
            price
          }
        });
      }
<<<<<<< HEAD
        // console.log('STATECOPY:', stateCopy);
        // console.log('\n\nJSON', JSON.stringify(stateCopy));
=======
>>>>>>> dev
      return stateCopy;
    default:
      return state;
  }
};
