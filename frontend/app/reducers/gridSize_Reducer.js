'use strict';

export default function gridSize(state = 300, action) {
  switch (action.type) {
    case 'MODIFY_GRID_SIZE':
      // console.log(`Action <${action.type}> registered with payload <size: ${action.size}>`);
      return action.size;
    default:
      return state;
  }
};
