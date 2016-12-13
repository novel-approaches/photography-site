'use strict';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import path from 'path';

import { addToShoppingCart, getPhotos, setAjaxSpinner } from '../actions/index';
import Grid from '../components/Grid/Grid';


class ThumbnailsMap extends Component {
  constructor(props) {
    super(props);
    props.getPhotos();
    this.setClassName = this.setClassName.bind(this);
    this.init = 0;
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
          order={ true } />
      );
    } else {
      this.init
        ? PhotoGrid =
          <div className='noResultsShown'>
            <h4 className='noResultsShown'>No Results Now</h4>
          </div>
        : (this.init++, PhotoGrid =
          <div id='placesContainer'>
            {[
              <i 
                className='fa fa-refresh fa-spin fa-5x fa-fw spinner' 
                key='RefreshAnimation'>
              </i>,
              `\tLoading...`
            ]}
          </div>
        )
    }
    return PhotoGrid;
  }

  // Handles delegation of the appropriate `className` values of grid photo such that
  //  the currently active job (`activeJob`) has an additional class of `.active`:
  setClassName(photo) {
    return (photo.public_id in this.props.shoppingCart
      ? 'checked '
      : '') + 'grid-item';
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

// <PerfectGrid
//   items={items}
//   maxHeight={300}  // maximum height of row
//   margins={20}     // margins in pixels
//   order={true}     // keep images order or not
// />
