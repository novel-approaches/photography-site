'use strict';
import React from 'react';


const ShoppingCartGlyph = ({ cartCount }) => (
  <svg
    className="shopping-cart-glyph"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 173.12031 148.47497">
    <g transform="translate(-98.387368,-135.90266)">
      <g>
        <g>
          <g data-section="cart-body">
            <path d="m 161.30976,222.46915 2.3831,7.21714 66.66547,0 2.37737,-7.21714 z" />
            <path
              transform="translate(98.387341,155.9648)"
              d="m 56.333984,46.162109 2.154297,6.470703 50.414059,0 a 37.499997,37.499996 0 0 1 -7.31836,-6.470703 l -45.249996,0 z" />
            <path
              transform="translate(98.387341,155.9648)"
              d="m 49.833984,25.945312 2,5.929688 41.914063,0 a 37.499997,37.499996 0 0 1 -1.169922,-5.929688 l -42.744141,0 z" />
          </g>
          <g
            data-section="cart-frame"
            transform="matrix(1.224659,0,0,1.224659,-22.103602,-63.88799)">
            <path d="m 102.19076,183.27201 20.3655,0 22.22335,66.67007 58.12438,0 m -58.88014,0.26518 -10.34031,15.25791 69.22045,0" />
            <g>
              <ellipse
                cx="141.94836"
                cy="277.80164"
                rx="6.5759974"
                ry="6.5759969" />
              <ellipse
                ry="6.5759969"
                rx="6.5759974"
                cy="277.80164"
                cx="194.02501" />
            </g>
          </g>
        </g>
        <g data-section="cart-count">
          <ellipse
            cx="234.00769"
            cy="173.40266"
            ry="37.5"
            rx="37.500004" />
          <text
            x="217.54285"
            y="194.59895">
            <tspan
              x="217.54285"
              y="194.59895">
              { cartCount }
            </tspan>
          </text>
        </g>
      </g>
    </g>
  </svg>
);

export default ShoppingCartGlyph;
