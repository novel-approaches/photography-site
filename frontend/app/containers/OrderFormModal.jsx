'use strict';
import React, { Component } from 'react';
import Modal from 'react-modal';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import OrderTotal from '../components/Modal/OrderTotal';
import SubmitOrder from '../components/Modal/SubmitOrder';
import ProductOrderItem from '../components/Modal/ProductOrderItem';
import OrderFormModalStyles from '../constants/json/OrderFormModalStyles.json';
import ImagePlaceholderGlyph from '../constants/svg/ImagePlaceholderGlyph_SVG';
import InfoGlyph from '../constants/svg/InfoGlyph_SVG';
import {
  changeItemQuantity,
  clearItemFromOrder,
  emptyShoppingCart,
  refreshSubtotal,
  submitOrder,
  toggleModal } from '../actions/index';


class OrderFormModal extends Component {
  constructor(props) {
    super(props);
    this.calculateTotal = this.calculateTotal.bind(this);
    this.closeOrderFormModal = this.closeOrderFormModal.bind(this);
    this.removePhotoFromOrder = this.removePhotoFromOrder.bind(this);
    this.clearOrder = this.clearOrder.bind(this);
    this.sendOrder = this.sendOrder.bind(this);
    this.renderProducts = this.renderProducts.bind(this);
    this.orderFormContents = this.orderFormContents.bind(this);
    this.displayContents = this.displayContents.bind(this);
    this.changeItemQuantity = this.changeItemQuantity.bind(this);
    this.refreshSubtotal = this.refreshSubtotal.bind(this);
  }

  changeItemQuantity(data) { this.props.changeItemQuantity(data); }
  clearOrder() { this.props.emptyShoppingCart(); }
  closeOrderFormModal(evt) { this.props.toggleModal(); }
  disableInput(evt) { if (!(evt.target.value > 0)) evt.target.setAttribute('disabled', true); }
  enableInput(evt) { evt.target.removeAttribute('disabled'); }
  refreshSubtotal(data) { this.props.refreshSubtotal(data); }
  removePhotoFromOrder(photo) { this.props.clearItemFromOrder(photo); }
  sendOrder(order) { this.props.submitOrder(order); }

  calculateTotal(order) {
    const sumSubtotals = (obj) => Object.keys(obj).reduce((memo, curr) => memo += obj[curr], 0);
    let total = 0;

    for (let item in order) {
      total += sumSubtotals(order[item].price);
    }
    return total;
  }

  displayContents(cart) {
    return Object.keys(cart).length
      ? this.orderFormContents(cart)
      : (
        <div className="empty-order">
          <h2>Your shopping cart's empty :(</h2>
          <ImagePlaceholderGlyph />
        </div>
      );
  }

  orderFormContents(cart) {
    return (
      <div className="modal">
        <header>
          <h2>Your Order Summary</h2>
          <div>
            <InfoGlyph />
            <em>All photos are printed on high quality enhanced matte paper</em>
          </div>
        </header>
        <ul id="orders-list">
          { this.renderProducts(cart) }
          <OrderTotal
            calculateTotal={ this.calculateTotal }
            order={ this.props.orderQuantities } />
          <SubmitOrder
            clearOrder={ this.clearOrder }
            sendOrder={ this.sendOrder }
            order={ this.props.orderQuantities } />
        </ul>
      </div>
    );
  }

  renderProducts(cart) {
    return Object.values(cart).map((photo, index, list) =>
      <ProductOrderItem
        key={ `ProductOrder_${index}` }
        photo={ photo }
        itemNum={ index + 1 }
        removePhotoFromOrder={ this.removePhotoFromOrder }
        disableInput={ this.disableInput }
        enableInput={ this.enableInput }
        changeItemQuantity={ this.changeItemQuantity }
        refreshSubtotal={ this.refreshSubtotal } />
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
  changeItemQuantity,
  clearItemFromOrder,
  emptyShoppingCart,
  refreshSubtotal,
  submitOrder,
  toggleModal
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(OrderFormModal);
