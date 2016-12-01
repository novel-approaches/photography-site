'use strict';
import { combineReducers } from 'redux';

import gridMargins from './gridMargins_Reducer';
import gridSize from './gridSize_Reducer';


const rootReducer = combineReducers({
  gridMargins,
  gridSize
});

export default rootReducer;
