'use strict';
import React from 'react';


const SubmitOrder = ({ order, clearOrder, sendOrder }) => (
  <div className="modal-actions">
    <button
      type="submit"
      name="submit-order-btn"
      onClick={ () => sendOrder(order) }>
      Checkout
    </button>
    <button
      type="button"
      name="clear-cart-btn"
      onClick={ () => clearOrder() }>
      Clear Cart
    </button>
  </div>
);

export default SubmitOrder;
