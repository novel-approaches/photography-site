'use strict';
import React from 'react';

import ItemQuantityForm from './ItemQuantityForm';
import TrashCanGlyph from '../../constants/svg/TrashCanGlyph_SVG';


const ProductOrderItem = ({ itemNum, photo, removePhotoFromOrder, changeItemQuantity, disableInput, enableInput, refreshSubtotal }) => (
  <li
    className="product-item">
    <TrashCanGlyph
      photo={ photo }
      removePhotoFromOrder={ removePhotoFromOrder } />
    <h4>
      {[
        'Item N',
        <sup key={ `SuperElement_${itemNum}` }>o</sup>,
        ` ${itemNum}:  ${photo.public_id}`
      ]}
    </h4>
    <div>
      <img
        src={ photo.secure_url }
        alt={ `Photograph thumbnail ${photo.public_id}` } />
      <ItemQuantityForm
        photoID={ photo.public_id }
        disableInput={ disableInput }
        enableInput={ enableInput }
        changeItemQuantity={ changeItemQuantity }
        refreshSubtotal={ refreshSubtotal } />
    </div>
  </li>
);

export default ProductOrderItem;
