'use strict';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import path from 'path';

import { addToShoppingCart, getPhotos } from '../actions/index';
import Thumbnail from './Thumbnail';
import Grid from '../PhotoGridAPI/scripts/Grid';
import { FetchImageData } from '../API_Calls';


class ThumbnailsMap extends Component {
  constructor(props) {
    super(props);
    this.addToShoppingCart = this.addToShoppingCart.bind(this);
  }

  componentWillMount() {
    // var that = this;
    // setTimeout(function() {
    //   that.show();
    // }, 5000);   // that.props.wait
    this.props.getPhotos();
  }

  addToShoppingCart() {
    this.props.addToShoppingCart(this.props.photoSelect);
  }

  // show() {
  //   // this.setState({ hidden: '' });
  //   let ph = this.props.getPhotos();
  //   console.log('PH:', this.props.getPhotos, this.props.getPhotos());

  //   let PP = this.props.imgObj;
  //   console.log('PP:', this.props.imgObj);
  //   this.setState({ fotes: PP })
  // }

  // componentWillMount() {
  //   this.props.getPhotos();
  // }

  // componentDidMount() {
  //   console.log('COMPONENT DID MOUNT:\n', this.state.fotes);
  //   this.props.getPhotos();
  // }

  // componentDidMount() {
  //   this.props.getPhotos();
  // }

  // Lifecycle method:
  // componentDidUpdate(nextProps) {
  //   if (this.props.imgObj.length) {
  //     // this.initJob(this.props.jobs[0]);
  //   }
  // }

  render() {
    return (
      <main id="photo-gallery">
        <button
          id="add-to-cart-btn"
          onClick= { this.addToShoppingCart }>
          Add To Cart
        </button>
        <div className="grid-wrap">
          <Grid
            items={ this.props.imgObj }
            maxHeight={ this.props.gridSize }
            margins={ this.props.gridMargins }
            order={ true } />
        </div>
      </main>
    );
  }
}

let mapStateToProps = (state) => ({
  gridMargins: state.gridMargins,
  gridSize: state.gridSize,
  imgObj: state.imageObject,
  photoSelect: state.photoSelect
});

let mapDispatchToProps = (dispatch) => bindActionCreators({
  addToShoppingCart,
  getPhotos
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ThumbnailsMap);


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
