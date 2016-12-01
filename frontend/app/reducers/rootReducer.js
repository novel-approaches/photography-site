'use strict';
import { combineReducers } from 'redux';

import gridMargins from './gridMargins_Reducer';
import gridSize from './gridSize_Reducer';
import photoOrder from './photoOrder';
import orderFormModal from './orderFormModal_Reducer';


const rootReducer = combineReducers({
  gridMargins,
  gridSize,
  photoOrder,
  orderFormModal
});

export default rootReducer;
