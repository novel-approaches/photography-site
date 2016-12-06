'use strict';
import React, { Component } from 'react';


export default class OrderTotal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form className="quantity-form">
          <label>Enter Email</label>
            <input type="text" />
          <label>Enter Phone</label>
            <input type="text" />

        </form>

        <li
          className="product-item">
          <h5>Order Total: </h5>
          <output>

          </output>
        </li>

      </div>
    );
  }
};
