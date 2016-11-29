'use strict';
import React, { Component } from 'react';


const API_BASE = 'https://res.cloudinary.com/clairephotography/image/upload/';
const constructURL = (imgPath) => `${API_BASE}${imgPath}`;
const thumbResize = (imgPath) => `${API_BASE}h_200/${imgPath}`;
  // http://res.cloudinary.com/http-isenrich-io/image/upload/w_500/DPC_Splash_Page.png

const Thumbnail = ({ path }) => (
  <div className="thumb">
    <img
      src={ thumbResize(path) }
        // src={ constructURL(path) }
      alt="Public ID" />
  </div>
);

export default Thumbnail;
