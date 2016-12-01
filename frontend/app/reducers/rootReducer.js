'use strict';
import { combineReducers } from 'redux';

import gridMargins from './gridMargins_Reducer';
import gridSize from './gridSize_Reducer';
import photoOrder from './photoOrder';


const rootReducer = combineReducers({
  gridMargins,
  gridSize,
  photoOrder
});

export default rootReducer;
