'use strict';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import path from 'path';

import { addToShoppingCart, getPhotos, selectPhoto,setAjaxSpinner } from '../actions/index';
import Grid from '../PhotoGridAPI/scripts/Grid';


class ThumbnailsMap extends Component {
  constructor(props) {
    super(props);
    this.addToShoppingCart = this.addToShoppingCart.bind(this);
    this.applyButtonStyle = this.applyButtonStyle.bind(this);
    this.setActive = this.setActive.bind(this);
    this.setToActive = this.setToActive.bind(this);
    // this.selectPhoto = this.selectPhoto.bind(this);
    this.selFote = this.selFote.bind(this);
    this.init = 0;
    props.getPhotos();
  }

  // componentWillMount() {
  //   this.props.setAjaxSpinner(true);
  //   this.props.getPhotos();
  // }
  // componentWillMount() {

  //   var self = this;
  //   setTimeout(function() {
  //     self.props.setAjaxSpinner(false);
  //     self.loadItems();
  //   }, 3000);
  // }

  renderGrid() {
    let PhotoGrid;
    if (this.props.imgObj.length) {
      this.props.setAjaxSpinner(false);
      PhotoGrid =(
        <Grid
          items={ this.props.imgObj }
          setToActive={ this.setToActive }
          // selectFunc={ this.selectPhoto }
          selFote={ this.selFote }
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
                className='fa fa-refresh fa-spin fa-5x fa-fw loadingSpinner' 
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
    return Object.keys(this.props.photoSelect).length
      ? 'active'
      : 'inactive';
  } 

  applyButtonStyle() {
    return Object.keys(this.props.photoSelect).length
      ? 'active'
      : '';
  }

  addToShoppingCart() {
    this.props.addToShoppingCart(this.props.photoSelect);
  }

  selFote(photo) {
    // evt.currentTarget.classList.toggle('checked');
    // let $parEl = $(evt.currentTarget);
      // console.log('Parent Element:', $(this), '\n', 'EVT:', $(evt.currentTarget));
      console.log('PHOTOS SELECTED:\n', this.props.photoSelect);
    this.props.selectPhoto(photo);
    // this.props.toggleGalleryPhotoSelection(this.props.photo);
  };

  setToActive(photo) {
    console.log('LOOOG:\n', photo.public_id, photo.public_id in this.props.photoSelect, this.props.photoSelect);
    return 'perfect-grid__item ' + (photo['public_id'] in (this.props.photoSelect)
      ? 'activateMe'
      : 'nah');
  }

  render() {
    return (
      <main id="photo-gallery">
        <button
          id="add-to-cart-btn"
          className={ this.setActive() }
          type="button"
          onClick= { this.addToShoppingCart }>
          Add To Cart
        </button>
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
  photoSelect: state.photoSelect,
  ajaxSpinner: state.ajaxSpinner
});

let mapDispatchToProps = (dispatch) => bindActionCreators({
  addToShoppingCart,
  getPhotos,
  selectPhoto,
  setAjaxSpinner
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ThumbnailsMap);

// <PerfectGrid
//   items={items}
//   maxHeight={300}  // maximum height of row
//   margins={20}     // margins in pixels
//   order={true}     // keep images order or not
// />
