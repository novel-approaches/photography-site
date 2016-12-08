'use strict';
import { combineReducers } from 'redux';

import gridMargins from './gridMargins_Reducer';
import gridSize from './gridSize_Reducer';
import orderFormModal from './orderFormModal_Reducer';
import shoppingCart from './shoppingCart_Reducer';
import photoGallerySelect from './photoGallerySelect_Reducer';
import imageObject from './image_object_reducer';
import ajaxSpinner from './ajaxSpinner_Reducer';
import orderSubmission from './orderSubmission_Reducer';
import orderQuantity from './orderQuantity_Reducer';
import contactInfo from './contact_Reducer';


const rootReducer = combineReducers({
  gridMargins,
  gridSize,
  orderFormModal,
  shoppingCart,
  photoGallerySelect,
  imageObject,
  ajaxSpinner,
  orderSubmission,
  orderQuantity,
  contactInfo
});

export default rootReducer;
