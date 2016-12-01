'use strict';
import React, { Component } from 'react';
import Modal from 'react-modal';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { orderPhoto, toggleModal } from '../actions/index';
import OrderFormModalStyles from '../constants/json/OrderFormModalStyles.json';


class OrderFormModal extends Component {
  constructor(props) {
    super(props);
    this.closeOrderFormModal = this.closeOrderFormModal.bind(this);
  }

  closeOrderFormModal(evt) {
    this.props.toggleModal();
  }

  render() {
    return (
      <Modal
        isOpen={ this.props.orderFormModal }
        style={ OrderFormModalStyles }>
        <h4>Your Order</h4>
        <i
          id="close-modal-btn"
          onClick={ this.closeOrderFormModal }>
          &times;
        </i>
      </Modal>
    );
  }
};

let mapStateToProps = (state) => ({
  photoOrder: state.photoOrder,
  orderFormModal: state.orderFormModal
});

let mapDispatchToProps = (dispatch) => bindActionCreators({
  orderPhoto,
  toggleModal
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(OrderFormModal);


// <div id="order-form"></div>

// style={ customStyles }
