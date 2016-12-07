'use strict';
import React from 'react';


const TrashCanGlyph = ({ photo, trashItem }) => (
  <svg
    className="trashcan-glyph"
    width="24px"
    height="24px"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    onClick={ () => trashItem(photo) }>
    <path
      d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-12h-12v12zm13-15h-3.5l-1-1h-5l-1 1h-3.5v2h14v-2z" />
  </svg>
);

export default TrashCanGlyph;
