'use strict';
import React from 'react';

import GridControlsSizeGlyph from '../../constants/svg/GridControlsSizeGlyph_SVG';
import GridControlsMarginsGlyph from '../../constants/svg/GridControlsMarginsGlyph_SVG';


const GridControls = ({ gridMargins, gridSize, onSlideStart, onSlideEnd, onSlideMarginsRange, onSlideSizeRange }) => (
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
        onChange={ onSlideSizeRange }
        onInput={ onSlideStart }
        onMouseDown={ onSlideStart }
        onMouseUp={ onSlideEnd } />
      <output
        htmlFor="size-input"
        name="size-output">
        { `${gridSize} px` }
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
        onChange={ onSlideMarginsRange }
        onMouseDown={ onSlideStart }
        onMouseUp={ onSlideEnd } />
      <output
        htmlFor="margin-input"
        name="margin-output">
        { `${gridMargins} px` }
      </output>
    </fieldset>
  </form>
);

export default GridControls;


// Type Checking:
GridControls.propTypes = {
  gridMargins: React.PropTypes.number,
  gridSize: React.PropTypes.number,
  onSlideStart: React.PropTypes.func,
  onSlideEnd: React.PropTypes.func,
  onSlideMarginsRange: React.PropTypes.func,
  onSlideSizeRange: React.PropTypes.func
};

// Fallback Provisions:
GridControls.defaultProps = {
  gridMargins: 10,
  gridSize: 300
};
