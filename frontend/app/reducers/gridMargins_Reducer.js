'use strict';
import { MODIFY_GRID_MARGINS } from '../actions/index';


export default function gridMargins(state = 10, action) {
  switch (action.type) {
    case MODIFY_GRID_MARGINS:
      // console.log(`Action <${action.type}> registered with payload <margins: ${action.margins}>`);
      return action.margins;
    default:
      // console.log(`Action <${action.type}> unrecognized! Reverting to default state.`);
      return state;
  }
};
