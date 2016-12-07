'use strict';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import path from 'path';

import { addToShoppingCart, getPhotos, setAjaxSpinner } from '../actions/index';
import Grid from '../PhotoGridAPI/scripts/Grid';


class ThumbnailsMap extends Component {
  constructor(props) {
    super(props);
    // this.addToShoppingCart = this.addToShoppingCart.bind(this);
    this.applyButtonStyle = this.applyButtonStyle.bind(this);
    this.setActive = this.setActive.bind(this);
    this.setToActive = this.setToActive.bind(this);
    this.aa = this.aa.bind(this);
    this.init = 0;
    props.getPhotos();
  }

  renderGrid() {
    let PhotoGrid;
    if (this.props.imgObj.length) {
      this.props.setAjaxSpinner(false);
      PhotoGrid =(
        <Grid
          items={ this.props.imgObj }
          setToActive={ this.setToActive }
          // selectFunc={ this.selectPhoto }
          selectPhoto={ this.props.selectPhoto }
          aa={ this.aa }
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

  // Handles delegation of the appropriate `className` values of jobs such that the currently
  //  active job (`activeJob`) has an additional class of `.active`:
  setActive() {
    // return job === this.props.activeJob ? 'active jobLI' : 'jobLI';
    return Object.keys(this.props.shoppingCart).length
      ? 'active'
      : 'inactive';
  } 

  applyButtonStyle() {
    return Object.keys(this.props.shoppingCart).length
      ? 'active'
      : '';
  }

  setToActive(photo) {
    // console.log('LOOOG:\n', photo.public_id, photo.public_id in this.props.photoSelect, this.props.photoSelect);
    return 'perfect-grid__item ' + (photo['public_id'] in (this.props.shoppingCart)
      ? 'activateMe'
      : 'nah');
  }

  aa(photo) {
    if (this.props.shoppingCart[photo.public_id]) {
      return `perfect-grid__item checked`;
    } else {
      return `perfect-grid__item`;
    }
  }

  render() {
    return (
      <main id="photo-gallery">
        <div className="grid-wrap">
          { this.renderGrid() }
        </div>
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
