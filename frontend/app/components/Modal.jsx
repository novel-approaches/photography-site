'use strict';
import React, { Component } from 'react';
import Modal from 'react-modal';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

export default class ModalView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: this.props.modalState
    };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // References are now synchronized and can be accessed.
    this.refs.subtitle.style.color = '#F00';
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div>
        <button onClick={ this.openModal }>Open Modal</button>
        <Modal
          onAfterOpen={ this.afterOpenModal }
          onRequestClose={ this.closeModal }
          style={ customStyles}
          contentLabel="Example Modal">
          <button onClick={ this.closeModal }>Close</button>
          <img
            src={ this.props.img }
            alt="Image" />
        </Modal>
      </div>
    );
  }
};
