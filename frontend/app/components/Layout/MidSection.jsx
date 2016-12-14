'use strict';
import React from 'react';

import ThumbnailsMap from '../../containers/ThumbnailsMap';
import GridControlsSidebar from '../Grid/GridControlsSidebar';


const MidSection = ({
  gridMargins,
  gridSize,
  onSlideStart,
  onSlideEnd,
  onSlideMarginsRange,
  onSlideSizeRange,
  selectPhoto,
  sidebarToggleState,
  sidebarToolTip }) => (
  
  <div className="midsection">
    <GridControlsSidebar
      gridMargins={ gridMargins }
      gridSize={ gridSize }
      onSlideStart={ onSlideStart }
      onSlideEnd={ onSlideEnd }
      onSlideMarginsRange={ onSlideMarginsRange }
      onSlideSizeRange={ onSlideSizeRange }
      sidebarToggleState={ sidebarToggleState }
      sidebarToolTip={ sidebarToolTip } />
    <ThumbnailsMap
      selectPhoto={ selectPhoto } />
  </div>
);

export default MidSection;
