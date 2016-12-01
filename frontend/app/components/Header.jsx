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
        <p>Welcome to Photo Album</p>
        <strong
          onClick={ this.renderModal }>&plus;</strong>
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
