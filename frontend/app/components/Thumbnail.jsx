'use strict';
import React, { Component } from 'react';


import orderForm from './OrderForm';
import Modal, {closeStyle} from 'simple-react-modal'

const API_BASE = 'https://res.cloudinary.com/clairephotography/image/upload/';
const constructURL = (imgPath) => `${API_BASE}${imgPath}`;
const thumbResize = (imgPath) => `${API_BASE}h_200/${imgPath}`;
  // http://res.cloudinary.com/http-isenrich-io/image/upload/w_500/DPC_Splash_Page.png


const Thumbnail = ({ path, nativeDimensions, domain }) => (
  <div
    className="thumb"
    data-dims={ nativeDimensions }
    data-domain={ domain }>
    <img
      src={ thumbResize(path) }
        // src={ constructURL(path) }
      alt="Public ID"
      onClick={this.show.bind(this)}/>

    //TODO make the modal pop open with the order form inside of it.
    <Modal show={this.state.show} onClose={this.close} transitionSpeed={1000}>
        <orderForm/>
      </Modal>
  </div>
);

export default Thumbnail;
