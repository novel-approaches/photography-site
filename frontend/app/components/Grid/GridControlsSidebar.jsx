'use strict';
import React from 'react';

import GridControls from './GridControls';




const GridControlsSidebar = ({ gridMargins, gridSize, onSlideMarginsRange, onSlideSizeRange, sidebarToggleState, sidebarToolTip }) => {  
  
  const toggleSidebar = function(evt) {
    sidebarToggleState();

    evt = evt || window.evt;
    const [$SIDEBAR, $TARG] = [$('#sidebar')[0], $(evt.currentTarget)],
          $GRID = $TARG.parent().next()[0],
          currWidth = parseFloat(window.getComputedStyle($SIDEBAR, null).getPropertyValue('width')),
          [width, marginLeft] = [( `${currWidth ? 0 : 10}vw` ), ( `${currWidth ? 0.5 : 10}vw` )];
    
    [currWidth ? $SIDEBAR : $GRID, currWidth ? $GRID : $SIDEBAR]
      .forEach((el, index) => {
        $(el).css({ transitionDelay: `${index * 0.175}s` });
      });

    $($SIDEBAR).css({ width });
    $($GRID).css({ marginLeft });
    $TARG.toggleClass('affixed');
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
