'use strict';
import React from 'react';

import GridControlsSizeGlyph from '../../constants/svg/GridControlsSizeGlyph_SVG';
import GridControlsMarginsGlyph from '../../constants/svg/GridControlsMarginsGlyph_SVG';


const GridControls = ({ gridMargins, gridSize, onSlideMarginsRange, onSlideSizeRange }) => (
  <form name="grid-form">
    <fieldset>
      <label
        htmlFor="size-input"
        title="Photo size">
        <GridControlsSizeGlyph />
        <span>Size</span>
      </label>
      <input
        id="size-input"
        className="vrange"
        type="range"
        min={ 100 }
        max={ Math.max(600, Math.floor(window.innerHeight / 2.5)) }
        step={ 5 }
        defaultValue={ 300 }
        onChange={ onSlideSizeRange } />
      <output
        htmlFor="size-input"
        name="size-output">
        { gridSize }
      </output>
    </fieldset>
    
    <fieldset>
      <label
        htmlFor="margin-input"
        title="Photo margins">
        <GridControlsMarginsGlyph />
        <span>Spacing</span>
      </label>
      <input
        id="margin-input"
        className="vrange"
        type="range"
        min={ 2 }
        max={ 75 }
        step={ 1 }
        defaultValue={ 10 }
        onChange={ onSlideMarginsRange } />
      <output
        htmlFor="margin-input"
        name="margin-output">
        { gridMargins }
      </output>
    </fieldset>
  </form>
);

export default GridControls;
