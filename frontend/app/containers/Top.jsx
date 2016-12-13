'use strict';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from '../components/Layout/Header';
import ThumbnailsMap from '../containers/ThumbnailsMap';
import GridControls from '../components/Grid/GridControls';
import { toggleModal, addToShoppingCart } from '../actions/index';


class Top extends Component {
  constructor(props) {
    super(props);
    this.selectPhoto = this.selectPhoto.bind(this);
  }

  selectPhoto(photo) {
    this.props.addToShoppingCart(photo);
  }

  render() {
    return (
      <div>
        <Header
          cart={ this.props.shoppingCart } />
        <div className="midsection">
          <GridControls />
          <ThumbnailsMap
            selectPhoto={ this.selectPhoto } />
        </div>
      </div>
    );
  }
};

let mapStateToProps = (state) => ({
  orderFormModal: state.orderFormModal,
  shoppingCart: state.shoppingCart
});

let mapDispatchToProps = (dispatch) => bindActionCreators({
  toggleModal,
  addToShoppingCart
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Top);
