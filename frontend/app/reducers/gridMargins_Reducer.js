'use strict';

export default function gridMargins(state = 15, action) {
  switch (action.type) {
    case 'MODIFY_GRID_MARGINS':
      // console.log(`Action <${action.type}> registered with payload <margins: ${action.margins}>`);
      return action.margins;
    default:
      return state;
  }
};
