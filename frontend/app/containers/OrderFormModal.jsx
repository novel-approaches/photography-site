'use strict';
import React, { Component } from 'react';
import Modal from 'react-modal';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import OrderTotal from '../components/OrderTotal';
import SubmitOrder from '../components/SubmitOrder';
import ProductOrderItem from '../components/ProductOrderItem';
import { addToShoppingCart, toggleModal, submitOrder } from '../actions/index';
import OrderFormModalStyles from '../constants/json/OrderFormModalStyles.json';
import ImagePlaceholderGlyph from '../constants/svg/ImagePlaceholderGlyph_SVG';


class OrderFormModal extends Component {
  constructor(props) {
    super(props);
    this.closeOrderFormModal = this.closeOrderFormModal.bind(this);
    this.removePhotoFromOrder = this.removePhotoFromOrder.bind(this);
    this.renderProducts = this.renderProducts.bind(this);
    this.orderFormContents = this.orderFormContents.bind(this);
    this.displayContents = this.displayContents.bind(this);
  }

  closeOrderFormModal(evt) {
    this.props.toggleModal();
  }

  removePhotoFromOrder(photo) {
    this.props.addToShoppingCart(photo);
  }

  renderProducts(cart) {
    return Object.keys(cart).length
      ? Object.values(cart).map((photo, index, list) =>
        <ProductOrderItem
          key={ `ProductOrder_${index}` }
          photo={ photo }
          itemNum={ index + 1 }
          trashItem={ this.removePhotoFromOrder } />
      ) : (
        <div className="empty-order">
          <ImagePlaceholderGlyph />
        </div>
      );
  }

  orderFormContents(cart) {
    return (
      <div>
        <h3>Your Order Summary</h3>
        <ul id="orders-list">
          { this.renderProducts(cart) }
          <OrderTotal />
          <SubmitOrder
            sub={ this.props.submitOrder }
            order={ this.props.orderQuantities } />
        </ul>
      </div>
    );
  }

  displayContents(cart) {
    return Object.keys(cart).length
      ? this.orderFormContents(cart)
      : (
        <div className="empty-order">
          <h3>Your shopping cart's empty :(</h3>
          <ImagePlaceholderGlyph />
        </div>
      );
  }

  render() {
    return (
      <Modal
        isOpen={ this.props.orderFormModal }
        style={ OrderFormModalStyles }>
        <i
          id="close-modal-btn"
          onClick={ this.closeOrderFormModal }>
          &times;
        </i>
        { this.displayContents(this.props.shoppingCart) }
      </Modal>
    );
  }
};

let mapStateToProps = (state) => ({
  orderFormModal: state.orderFormModal,
  orderQuantities: state.orderQuantity,
  shoppingCart: state.shoppingCart
});

let mapDispatchToProps = (dispatch) => bindActionCreators({
  addToShoppingCart,
  toggleModal,
  submitOrder
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(OrderFormModal);
