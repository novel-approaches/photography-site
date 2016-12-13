'use strict';
import React from 'react';


const ShoppingCartGlyph = ({ cartCount }) => (
  <svg
    className="shopping-cart-glyph"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 300.00003 260.39898">
    <g data-section="shopping-cart">
      <g>
        <g data-section="cart-body">
          <g data-section="cart-basket">
            <path
              d="m 79.929688,95.625 3.138671,9.34375 34.497341,0 c -1.44742,-3.00183 -2.62725,-6.128865 -3.52539,-9.34375 z" />
            <path
              d="m 70.464844,66.433594 2.912109,8.5625 39.111087,0 c 0.30878,-2.891558 0.83903,-5.754368 1.58594,-8.5625 z" />
            <path
              d="m 89.525391,125 3.470703,10.41992 56.807916,2.3e-4 C 141.72016,133.67489 137.42456,130.11404 130.87695,125 Z" />
          </g>
          <g data-section="cart-frame">
            <path
              d="m 198.29745,203.93369 -13.93039,18.81486 c -3.70355,8.49898 0.41146,14.31062 8.33548,15.99171 l 141.25712,0 M 103.04523,51.847108 c 15.64097,0 31.28196,0 46.92293,0 17.06783,50.398792 34.13567,100.797572 51.20349,151.196362 44.64031,0 89.28062,0 133.92092,0" />
            <g data-section="cart-wheels">
              <ellipse cx="178.38028" />
              <ellipse cx="262.34595" />
            </g>
          </g>
        </g>
        <g data-section="cart-count">
          <ellipse
            cx="323.97876"
            cy="106.26886"
            ry="71.893524"
            rx="71.893524" />
          <text
            x="290.69067"
            y="146.67743">
            <tspan
              x="290.69067"
              y="146.67743"
              role="line">
              { cartCount }
            </tspan>
          </text>
        </g>
      </g>
    </g>
  </svg>
);

export default ShoppingCartGlyph;
