'use strict';
import React, { Component } from 'react';


const API_BASE = 'https://res.cloudinary.com/clairephotography/image/upload/';
const constructURL = (imgPath) => `${API_BASE}${imgPath}`;
const thumbResize = (imgPath) => `${API_BASE}h_200/${imgPath}`;

const Thumbnail = ({ path, nativeDimensions, domain }) => (
  <div
    className="thumb"
    data-dims={ nativeDimensions }
    data-domain={ domain }>
    <img
      src={ thumbResize(path) }
        // src={ constructURL(path) }
      alt="Public ID" />
  </div>
);

export default Thumbnail;
