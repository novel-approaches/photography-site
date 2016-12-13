'use strict';
import React from 'react';


const OrderTotal = ({ calculateTotal, order }) => (
  <li
    className="product-item order-total">
    <h3>Order Total: </h3>
    <strong>&emsp;{ `$ ${calculateTotal(order)}` }</strong>
  </li>
);

export default OrderTotal;
