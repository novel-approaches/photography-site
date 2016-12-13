'use strict';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from '../components/Layout/Header';
import MidSection from '../components/Layout/MidSection';
import { addToShoppingCart, modifyGridMargins, modifyGridSize, toggleModal } from '../actions/index';


class Top extends Component {
  constructor(props) {
    super(props);
    this.onSlideMarginsRange = this.onSlideMarginsRange.bind(this);
    this.onSlideSizeRange = this.onSlideSizeRange.bind(this);
    this.selectPhoto = this.selectPhoto.bind(this);
    this.sidebarToggleState = this.sidebarToggleState.bind(this);
    this.sidebarToolTip = this.sidebarToolTip.bind(this);
    
    this.state = {
      sidebarActive: true
    };
  }

  onSlideMarginsRange(evt, outputTarg) {
    this.props.modifyGridMargins(evt.target.value);
  }

  onSlideSizeRange(evt, outputTarg) {
    this.props.modifyGridSize(evt.target.value);
  }

  selectPhoto(photo) {
    this.props.addToShoppingCart(photo);
  }

  sidebarToggleState() {
    this.setState({ sidebarActive: !this.state.sidebarActive });
  }

  sidebarToolTip() {
    return `${!this.state.sidebarActive ? 'Expand' : 'Collapse'} grid controls menu`;
  }

  render() {
    return (
      <div>
        <Header
          cart={ this.props.shoppingCart } />
        <MidSection
          gridMargins={ this.props.gridMargins }
          gridSize={ this.props.gridSize }
          onSlideMarginsRange={ this.onSlideMarginsRange }
          onSlideSizeRange={ this.onSlideSizeRange }
          selectPhoto={ this.selectPhoto }
          sidebarToggleState={ this.sidebarToggleState }
          sidebarToolTip={ this.sidebarToolTip } />
      </div>
    );
  }
};

let mapStateToProps = (state) => ({
  gridMargins: state.gridMargins,
  gridSize: state.gridSize,
  orderFormModal: state.orderFormModal,
  shoppingCart: state.shoppingCart
});

let mapDispatchToProps = (dispatch) => bindActionCreators({
  addToShoppingCart,
  modifyGridMargins,
  modifyGridSize,
  toggleModal
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Top);
