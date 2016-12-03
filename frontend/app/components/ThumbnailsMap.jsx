'use strict';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import path from 'path';

import { addToShoppingCart, getPhotos } from '../actions/index';
import Grid from '../PhotoGridAPI/scripts/Grid';


class ThumbnailsMap extends Component {
  constructor(props) {
    super(props);
    this.addToShoppingCart = this.addToShoppingCart.bind(this);
  }

  componentWillMount() {
    this.props.getPhotos();
  }

  addToShoppingCart() {
    this.props.addToShoppingCart(this.props.photoSelect);
  }

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
};


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

// <PerfectGrid
//   items={items}
//   maxHeight={300}  // maximum height of row
//   margins={20}     // margins in pixels
//   order={true}     // keep images order or not
// />
