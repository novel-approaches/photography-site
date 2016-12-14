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


// Type Checking:
MidSection.propTypes = {
  gridMargins: React.PropTypes.number,
  gridSize: React.PropTypes.number,
  onSlideStart: React.PropTypes.func,
  onSlideEnd: React.PropTypes.func,
  onSlideMarginsRange: React.PropTypes.func,
  onSlideSizeRange: React.PropTypes.func,
  selectPhoto: React.PropTypes.func,
  sidebarToggleState: React.PropTypes.func,
  sidebarToolTip: React.PropTypes.func
};

// Fallback Provisions:
MidSection.defaultProps = {
  gridMargins: 10,
  gridSize: 300
};
