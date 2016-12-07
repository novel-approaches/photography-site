'use strict';
import React from 'react';

import CheckboxGlyph from '../constants/svg/CheckboxGlyph_SVG';


const PhotoCheckbox = ({ photo, selectPhoto }) => (
  <div
    className="checkbox"
    role="checkbox"
    onClick={ () => selectPhoto(photo) }>
    <CheckboxGlyph />
  </div>
);

export default PhotoCheckbox;
