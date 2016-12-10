'use strict';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from '../components/Header';
import ThumbnailsMap from '../components/ThumbnailsMap';

import { toggleModal, addToShoppingCart } from '../actions/index';


class Top extends Component {
  constructor(props) {
    super(props);
    this.selFote = this.selFote.bind(this);
  }

  selFote(photo) {
    this.props.addToShoppingCart(photo);
  }

  render() {
    return (
      <div>
        <Header
          cart={ this.props.shoppingCart } />
        <div className="midsection">
          <ThumbnailsMap
            selFote={ this.selFote } />
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
