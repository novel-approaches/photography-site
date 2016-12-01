'use strict';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import path from 'path';

import Thumbnail from './Thumbnail';
import Grid from '../PhotoGridAPI/scripts/Grid';
// import { FetchImageURLs, FetchImageURLs1, FetchImageData } from '../API_Calls';

import { FetchImageData } from '../API_Calls';

import { DATA } from '../seed';

class ThumbnailsMap extends Component {
  constructor(props){
    super(props);
    this.state = { items: DATA };
  }

  render(){
    debugger;
    return (
      <main id='photo-gallery'>
        <Grid
          items={ this.state.items }
          maxHeight={ this.props.gridSize }
          margins={ this.props.gridMargins }
          order={ true } />
      </main>
    );
  }
}

let mapStateToProps = (state) => ({
  gridMargins: state.gridMargins,
  gridSize: state.gridSize,
});

export default connect(mapStateToProps)(ThumbnailsMap);


// DATA.map(obj => Object.assign(obj, { selected: false }))

// const renderThumbs = (pathsArr) =>
//   pathsArr.map((path, index, list) => (
//     <Thumbnail
//       key={ `Thumb_${index}` }
//       path={ path.secure_url.replace(/^(.+)(v\d+.+)$/, '$2') }
//       nativeDimensions={ `${path.width} x ${path.height} px` }
//       domain='cloudinary.com' />
//   )
// );

// return (<main id='photo-gallery'>{ renderThumbs(DATA) }</main>);

// <PerfectGrid
//   items={items}
//   maxHeight={300}  // maximum height of row
//   margins={20}     // margins in pixels
//   order={true}     // keep images order or not
// />
