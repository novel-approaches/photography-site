'use strict';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import path from 'path';

import { addToShoppingCart, getPhotos, setAjaxSpinner } from '../actions/index';
import Grid from '../PhotoGridAPI/scripts/Grid';

//Whoever wrote all the ternaries in here,  I hate you. :( TODO refactor the ternaries. 
class ThumbnailsMap extends Component {
  constructor(props) {
    super(props);
    this.applyButtonStyle = this.applyButtonStyle.bind(this);
    this.setActive = this.setActive.bind(this);
    this.setToActive = this.setToActive.bind(this);
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
          selFote={ this.props.selFote }
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
    return 'perfect-grid__item ' + (photo['public_id'] in (this.props.shoppingCart)
      ? 'activateMe'
      : 'nah');
  } //FIXME WHAT THE FUCK, nah...

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
