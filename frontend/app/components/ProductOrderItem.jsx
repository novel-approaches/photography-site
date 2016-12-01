'use strict';
import React, { Component } from 'react';


const ProductOrderItem = ({ item }) => (
  <li
    className="product-item">
    <h5>{ item.public_id }</h5>
    <img
      src={ item.secure_url }
      alt={ `Photograph thumbnail ${item.public_id}` }
      height="75px" />
  </li>
);

export default ProductOrderItem;
