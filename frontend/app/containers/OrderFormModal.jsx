'use strict';
import React, { Component } from 'react';
import Modal from 'react-modal';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { orderPhoto, toggleModal } from '../actions/index';
import OrderFormModalStyles from '../constants/json/OrderFormModalStyles.json';
import ProductOrderItem from '../components/ProductOrderItem';


class OrderFormModal extends Component {
  constructor(props) {
    super(props);
    this.closeOrderFormModal = this.closeOrderFormModal.bind(this);
    this.renderProducts = this.renderProducts.bind(this);
  }

  closeOrderFormModal(evt) {
    this.props.toggleModal();
  }

  renderProducts(cart) {
    return Object.values(cart).map((item, index, list) =>
      <ProductOrderItem
        key={ `ProductOrder_${index}` }
        item={ item } />
    );
  }

  render() {
    return (
      <Modal
        isOpen={ this.props.orderFormModal }
        style={ OrderFormModalStyles }>
        <h3>Your Order Summary</h3>
        <i
          id="close-modal-btn"
          onClick={ this.closeOrderFormModal }>
          &times;
        </i>
        <ul id="orders-list">
          { this.renderProducts(this.props.shoppingCart) }
        </ul>
      </Modal>
    );
  }
};

let mapStateToProps = (state) => ({
  photoOrder: state.photoOrder,
  orderFormModal: state.orderFormModal,
  shoppingCart: state.shoppingCart
});

let mapDispatchToProps = (dispatch) => bindActionCreators({
  orderPhoto,
  toggleModal
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(OrderFormModal);


// <div id="order-form"></div>

// style={ customStyles }
