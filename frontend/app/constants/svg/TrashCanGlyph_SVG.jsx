'use strict';
import React from 'react';


const TrashCanGlyph = ({ photo, removePhotoFromOrder }) => (
  <svg
    className="trashcan-glyph"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 64.285713"
    onClick={ () => removePhotoFromOrder(photo) }>
    <g>
      <path
        d="m 3.5714286,57.142857 c 0,3.928571 3.2142854,7.142857 7.1428574,7.142857 l 28.571428,0 c 3.928572,0 7.142857,-3.214286 7.142857,-7.142857 l 0,-42.857143 -42.8571424,0 0,42.857143 z" />
      <path
        className="trashcan-glyph-lid"
        d="m 50,3.571428 -12.5,0 L 33.928571,0 16.071429,0 12.5,3.571428 l -12.5,0 0,7.142857 50,0 0,-7.142857 z" />
    </g>
  </svg>
);

export default TrashCanGlyph;
