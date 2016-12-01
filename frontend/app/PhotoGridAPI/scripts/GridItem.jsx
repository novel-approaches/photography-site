'use strict';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Thumbnail from '../../components/Thumbnail';
import PhotoCheckbox from '../../components/PhotoCheckbox';


class GridItem extends Component {
  constructor(props) {
    super(props);
    // this.assignClass = this.assignClass.bind(this);
    console.log('GRIDITEM:', this.props.photo);
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
  
  assignClass(link = null) {
    // const photoData = this.props.photoSelect;
      // console.log('Photo Data:', photoData);
    // return photoData['selected'] && photoData.selected ? 'checked' : '';
    
    // perfect-grid__item ${link ? 'perfect-grid__link' : ''} ${this.assignClass()}
    // return `perfect-grid__item ${link ? 'perfect-grid__link' : ''}`;

    let selectState = this.props.photoGallerySelect[this.props.photo.public_id].selected;
      console.log('\n\nSELECT STATE:', selectState);

    return `perfect-grid__item ${selectState ? 'checked' : ''}`;
  }

  render() {
    let { H, margins, over, media, ratio, type, element, link } = this.props;
    let src = media ? media.src : null;

    let height = H;
    let width = H * ratio;

    let style = {
      height: `${height}px`,
      width: `${width}px`,
      margin: `${margins / 2}px`
    };


    switch (type) {
      case 'image':
        media = <img src={ src } />
        break;
      case 'video':
        media = <video src={ src } controls />
        break;
      case 'element':
        return (
          <div
            className="perfect-grid__item"
            style={ style }
            onClick={ onClick }>
            { element }
          </div>
        );
      default:
        throw new Error(`Unrecognized media format: ${type}`);
        break;
    }

    // let onClick = link ? ::this.onClick : null;
    let onClick = link ? this.onClick : null;

    // over = over ? <div className="perfect-grid__over" >{ over }</div> : null

    console.log('12312313', this.props.photoGallerySelect)
    return (
      <div
        className={
          'perfect-grid__item' + '  ' + this.props.photoGallerySelect[this.props.photo.public_id]
        }
        data-pgs={ this.props.photoGallerySelect[this.props.photo.public_id].selected }
        onClick={ onClick }
        style={ style }>
        { over }
        <div
          className="perfect-grid__media"
          data-dims={ this.props.nativeDimensions }
          data-domain={ this.props.domain }>
          <PhotoCheckbox
            photo={ this.props.photo }
            className="checkbox" />
          { media }
        </div>
      </div>
    );
  }
};

let mapStateToProps = (state) => ({
  photoSelect: state.photoSelect,
  photoGallerySelect: state.photoGallerySelect
});

export default connect(mapStateToProps)(GridItem);

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
