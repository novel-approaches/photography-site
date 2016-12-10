'use strict';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import OrderFormModal from '../containers/OrderFormModal';
import { toggleModal } from '../actions/index';
import Logo from '../../static/images/logo_lv7v7x.png';


class Header extends Component {
  constructor(props) {
    super(props);
    this.renderModal = this.renderModal.bind(this);
    this.displayCartCount = this.displayCartCount.bind(this);
  }

  renderModal(evt) {
    this.props.toggleModal();
  }

  displayCartCount() {
    return Object.keys(this.props.cart).length;
  }

  render() {
    return(
      <header>
        <img
          src={ Logo }
          alt="Site logo home, Galleria Scola"
          role="logo" />
        <div className="shopping-cart">
          <img
            src="https://cdn4.iconfinder.com/data/icons/greicons-2/1052/CARRITO-512.png"
            alt="Shopping cart glyph icon (Gray)."
            id="shopping-cart-icon"
            onClick={ this.renderModal } />
          <i>{ this.displayCartCount() }</i>
        </div>
        <OrderFormModal />
      </header>
    );
  }
};

let mapStateToProps = (state) => ({
  orderFormModal: state.orderFormModal,
  shoppingCart: state.shoppingCart
});

let mapDispatchToProps = (dispatch) => bindActionCreators({
  toggleModal
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
