'use strict';
import { ADD_TO_SHOPPING_CART } from '../actions/index';


export default function shoppingCart(state = {}, action) {
  switch (action.type) {
    case ADD_TO_SHOPPING_CART:
      // console.log(`Action <${action.type}> registered with payload <item: `, action.payload, '>');
      return action.payload;
    default:
      return state;
  }
};
