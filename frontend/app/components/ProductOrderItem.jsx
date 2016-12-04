'use strict';
import React from 'react';

import ItemQuantityForm from './ItemQuantityForm';
import TrashCanGlyph from '../constants/svg/TrashCanGlyph_SVG';


const ProductOrderItem = ({ item }) => (
  <li
    className="product-item">
    <h5>{ item.public_id }</h5>
    <div>
      <img
        src={ item.secure_url }
        alt={ `Photograph thumbnail ${item.public_id}` }
        height="75px" />
      <ItemQuantityForm
        photoID={ item.public_id } />
      <TrashCanGlyph />
    </div>
  </li>
);

export default ProductOrderItem;
