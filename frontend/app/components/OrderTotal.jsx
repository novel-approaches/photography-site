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
        <h3>Order Total: </h3>
        <output>

          </output>
        </li>

      </div>
    );
  }
};
