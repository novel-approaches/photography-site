'use strict';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import path from 'path';

import { addToShoppingCart, getPhotos, setAjaxSpinner } from '../actions/index';
import LoadingSpinnerGlyph from '../constants/svg/LoadingSpinnerGlyph_SVG';
import { SEED_DATA as SeedData } from '../constants/SeedData';
import Grid from '../components/Grid/Grid';


class ThumbnailsMap extends Component {
  constructor(props) {
    super(props);
    props.getPhotos();
    this.setClassName = this.setClassName.bind(this);
    this.init = 0;
    console.log('seeddata:', SeedData);
  }

  renderGrid() {
    let PhotoGrid;
    if (this.props.imgObj.length) {
      this.props.setAjaxSpinner(false);
      PhotoGrid =(
        <Grid
          items={ this.props.imgObj }
          selectPhoto={ this.props.selectPhoto }
          setClassName={ this.setClassName }
          maxHeight={ this.props.gridSize }
          margins={ this.props.gridMargins }
          order />
      );
    } else {
      this.init ? PhotoGrid = (
        <div className='null-container'>
          <h4>No Results Now</h4>
        </div>
      ) : (
        this.init++,
        PhotoGrid =(
          <LoadingSpinnerGlyph />
        )
      )
    }
    return PhotoGrid;
  }

  // Handles delegation of the appropriate `className` values of grid photo such that
  //  the currently active job (`activeJob`) has an additional class of `.active`:
  setClassName(photo) {
    return (photo.public_id in this.props.shoppingCart
      ? 'checked ' : Object.keys(this.props.shoppingCart).length
      ? 'unchecked ' : '') + 'grid-item';
  }

  render() {
    return (
      <main id="photo-gallery">
        { this.renderGrid() }
      </main>
    );
  }
};


let mapStateToProps = (state) => ({
  gridMargins: state.gridMargins,
  gridSize: state.gridSize,
  imgObj: state.imageObject,
  shoppingCart: state.shoppingCart,
  ajaxSpinner: state.ajaxSpinner
});

let mapDispatchToProps = (dispatch) => bindActionCreators({
  addToShoppingCart,
  getPhotos,
  setAjaxSpinner
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ThumbnailsMap);


// Type Checking:
ThumbnailsMap.propTypes = {
  addToShoppingCart: React.PropTypes.func,
  ajaxSpinner: React.PropTypes.bool,
  getPhotos: React.PropTypes.func,
  gridMargins: React.PropTypes.number,
  gridSize: React.PropTypes.number,
  imgObj: React.PropTypes.array,
  setAjaxSpinner: React.PropTypes.func,
  setClassName: React.PropTypes.func,
  shoppingCart: React.PropTypes.object
};

// Fallback Provisions:
ThumbnailsMap.defaultProps = {
  gridMargins: 10,
  gridSize: 300,
  imgObj: SeedData,
  shoppingCart: {},
  ajaxSpinner: false
};
