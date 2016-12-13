'use strict';
import React from 'react';

import GridControls from './GridControls';




const GridControlsSidebar = ({ gridMargins, gridSize, onSlideMarginsRange, onSlideSizeRange, sidebarToggleState, sidebarToolTip }) => {  
  const toggleSidebar = function(evt) {
    sidebarToggleState();     // Trigger passed down props function
    evt = evt || window.evt;  // Fallback for legacy IE browsers
    const [$SIDEBAR, $TARG] = [$('#sidebar')[0], $(evt.currentTarget)],
          $GRID = $TARG.parent().next()[0],
          currWidth = parseFloat(window.getComputedStyle($SIDEBAR, null).getPropertyValue('width')),
          [width, marginLeft] = [( `${currWidth ? 0 : 10}vw` ), ( `${currWidth ? 0.5 : 10}vw` )];
    
    // Stagger transition-delay property values for emphasis:
    [currWidth ? $SIDEBAR : $GRID, currWidth ? $GRID : $SIDEBAR]
      .forEach((el, index) => {
        $(el).css({ transitionDelay: `${index * 0.175}s` });
      });

    // Employ new CSS property-value pairs:
    $($SIDEBAR).css({ width });
    $($GRID).css({ marginLeft });
    $TARG.toggleClass('fix-left');
  };
  
  return (
    <aside>
      <button
        className="slide-btn"
        type="button"
        title={ sidebarToolTip($('.slide-btn')) }
        onClick={ toggleSidebar }>
        <div>&#11013;</div>
      </button>
      <div id="sidebar">
        <GridControls
          gridMargins={ gridMargins }
          gridSize={ gridSize }
          onSlideMarginsRange={ onSlideMarginsRange }
          onSlideSizeRange={ onSlideSizeRange } />
      </div>
    </aside>
  );
};

export default GridControlsSidebar;
