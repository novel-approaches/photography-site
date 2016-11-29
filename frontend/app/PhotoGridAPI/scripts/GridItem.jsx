'use strict';
import React, { Component } from 'react';

import Thumbnail from '../../components/Thumbnail';


export default class GridItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
      console.log('item props:', this.props);
  }

  onClick(evt) {
    window.open(this.props.link);
  }

  // renderThumbs(pathsArr) {
  //   return pathsArr.map((path, index, list) =>
  //     <Thumbnail
  //       key={ `Thumb_${index}` }
  //       path={ path.secure_url.replace(/^(.+)(v\d+.+)$/, "$2") }
  //       nativeDimensions={ `${path.width} x ${path.height} px` }
  //       domain="cloudinary.com" />
  //   )
  // }
  

  render() {
    let { H, margins, over, media, ratio, type, element, link } = this.props;
    let src = media ? media.src : null;

    let height = H;
    let width = H * ratio;

    let style = {
      height: height + 'px',
      width: width + 'px',
      margin: margins / 2 + 'px'
    };

    if (type === 'image') {
      media = <img src={src} />
    } else if (type === 'video') {
      media = <video src={src} controls />
    } else if (type === 'element') {
      // element.style = style
      return (
        <div onClick={onClick} className="perfect-grid__item" style={style}>
          { element }
        </div>
      )
    }

    // let onClick = link ? ::this.onClick : null;
    let onClick = link ? this.onClick : null;

    // over = over ? <div className="perfect-grid__over" >{ over }</div> : null

    return (
      <div
        className={"perfect-grid__item" + (link ? ' perfect-grid__link' : '')}
        onClick={onClick}
        style={style}>
        { over }
        <div
          className="perfect-grid__media"
          data-dims={ this.props.nativeDimensions }
          data-domain={ this.props.domain }
          >
          { media }
        </div>
      </div>
    );
  }
};


// <Thumbnail
//   path={ this.props.secure_url.replace(/^(.+)(v\d+.+)$/, "$2") }
//   nativeDimensions={ `${this.props.width} x ${this.props.height} px` }
//   domain="cloudinary.com" />

// <div
//   className={"perfect-grid__item" + (link ? ' perfect-grid__link' : '')}
//   onClick={onClick}
//   style={style}>
//   { over }
//   <div className="thumb perfect-grid__media">
//     { media }
//   </div>
// </div>



// const API_BASE = 'https://res.cloudinary.com/clairephotography/image/upload/';
// const constructURL = (imgPath) => `${API_BASE}${imgPath}`;
// const thumbResize = (imgPath) => `${API_BASE}h_200/${imgPath}`;
//   // http://res.cloudinary.com/http-isenrich-io/image/upload/w_500/DPC_Splash_Page.png

// const Thumbnail = ({ path, nativeDimensions, domain }) => (
//   <div
//     className="thumb"
//     data-dims={ nativeDimensions }
//     data-domain={ domain }>
//     <img
//       src={ thumbResize(path) }
//         // src={ constructURL(path) }
//       alt="Public ID" />
//   </div>
// );
