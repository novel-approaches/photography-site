'use strict';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import OrderFormModal from '../containers/OrderFormModal';
import { addToShoppingCart, toggleModal } from '../actions/index';


// const Header = () => (
class Header extends Component {
  constructor(props) {
    super(props);
    this.addToShoppingCart = this.addToShoppingCart.bind(this);
    this.renderModal = this.renderModal.bind(this);
  }

  renderModal(evt) {
    this.props.toggleModal();
  }

  addToShoppingCart() {
    this.props.addToShoppingCart(this.props.photoSelect);
  }

  render() {
    return(
      <header>
        <p>Welcome to Photo Album</p>
        <strong
          onClick={ this.renderModal }>&plus;</strong>
        <img
          src="https://cdn4.iconfinder.com/data/icons/greicons-2/1052/CARRITO-512.png"
          alt="Shopping cart glyph icon (Gray)."
          height="35px"
          onClick={ this.addToShoppingCart } />
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
  addToShoppingCart,
  toggleModal
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
