'use strict';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import OrderFormModal from '../containers/OrderFormModal';
import { toggleModal } from '../actions/index';
import Logo from '../../static/images/logo_lv7v7x.png';


// const Header = () => (
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
    return Object.keys(this.props.shoppingCart).length;
  }

  render() {
    return(
      <header>
        <img
          // src="http://res.cloudinary.com/clairephotography/image/upload/e_make_transparent:10,q_100/logo_lv7v7x.png"
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
  photoSelect: state.photoSelect,
  shoppingCart: state.shoppingCart
});

let mapDispatchToProps = (dispatch) => bindActionCreators({
  toggleModal
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);


// <img
//   src="https://cdn4.iconfinder.com/data/icons/greicons-2/1052/CARRITO-512.png"
//   alt="Shopping cart glyph icon (Gray)."
//   height="35px"
//   onClick={ this.addToShoppingCart } />
