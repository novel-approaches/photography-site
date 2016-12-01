'use strict';

export default function photoOrder(state = [], action) {
  switch (action.type) {
    case 'ORDER_PHOTO':
      console.log(`Action <${action.type}> registered with payload <photo: ${action.photo}>`);
      return action.photo;
    default:
      return state;
  }
};
