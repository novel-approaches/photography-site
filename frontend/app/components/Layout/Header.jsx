'use strict';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import OrderFormModal from '../../containers/OrderFormModal';
import { toggleModal } from '../../actions/index';
import Logo from '../../../static/images/store_logo.svg';
import ShoppingCartGlyph from '../../constants/svg/ShoppingCartGlyph_SVG';


class Header extends Component {
  constructor(props) {
    super(props);
    this.renderModal = this.renderModal.bind(this);
    this.displayCartCount = this.displayCartCount.bind(this);
    this.shoppingCartToolTip = this.shoppingCartToolTip.bind(this);
  }

  renderModal(evt) {
    this.props.toggleModal();
  }

  displayCartCount() {
    return Object.keys(this.props.cart).length;
  }

  shoppingCartToolTip() {
    let cartSize = Object.keys(this.props.cart).length;
    return cartSize
      ? `You currently have ${cartSize} item${cartSize > 1 ? 's' : ''} in your cart. Click to view your cart.`
      : 'Your shopping cart\'s empty!';
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
          title={ this.shoppingCartToolTip() }
          onClick={ this.renderModal }>
          <ShoppingCartGlyph
            cartCount={ this.displayCartCount() } />
        </div>
        <OrderFormModal />
      </header>
    );
  }
};

let mapStateToProps = (state) => ({
  orderFormModal: state.orderFormModal
});

let mapDispatchToProps = (dispatch) => bindActionCreators({
  toggleModal
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);


// <i>{ this.displayCartCount() }</i>
