'use strict';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import OrderFormModal from '../containers/OrderFormModal';
import { toggleModal } from '../actions/index';
import Logo from '../../static/images/logo_lv7v7x.png';
import ShoppingCartGlyph from '../constants/svg/ShoppingCartGlyph_SVG';


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
        <a
          href="./"
          target="_self">
          <img
            src={ Logo }
            alt="Site logo home, Galleria Scola"
            role="logo" />
        </a>
        <div
          className="shopping-cart"
          title={ `You currently have ${ this.displayCartCount() } items in your shopping cart. Click to view your cart.` }
          onClick={ this.renderModal }>
          <ShoppingCartGlyph />
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
