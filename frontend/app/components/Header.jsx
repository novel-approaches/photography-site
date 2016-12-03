'use strict';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import OrderFormModal from '../containers/OrderFormModal';
import { toggleModal } from '../actions/index';


// const Header = () => (
class Header extends Component {
  constructor(props) {
    super(props);
    this.renderModal = this.renderModal.bind(this);
  }

  renderModal(evt) {
    this.props.toggleModal();
  }

  render() {
    return(
      <header>
        <img
          src="http://res.cloudinary.com/clairephotography/image/upload/e_make_transparent:10,q_100/logo_lv7v7x.png"
          alt="Site logo home, Galleria Scola"
          role="logo" />
        <img
          src="https://cdn4.iconfinder.com/data/icons/greicons-2/1052/CARRITO-512.png"
          alt="Shopping cart glyph icon (Gray)."
          height="35px"
          id="shopping-cart-icon"
          onClick={ this.renderModal } />
        <OrderFormModal />
      </header>
    );
  }
};

let mapStateToProps = (state) => ({
  orderFormModal: state.orderFormModal,
  photoSelect: state.photoSelect
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
