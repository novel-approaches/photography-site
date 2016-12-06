'use strict';
import React, { Component } from 'react';


export default class OrderTotal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
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
