'use strict';
import React, { Component } from 'react';

import Thumbnail from '../../components/Thumbnail';
import PhotoCheckbox from '../../components/PhotoCheckbox';


class GridItem extends Component {
  constructor(props) {
    super(props);
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
    let { H, margins, over, media, ratio, resource_type, type, element, link } = this.props;
    let src = media ? media.src : null,
        [height, width] = [H, H * ratio];

    let style = {
      height: `${height}px`,
      width: `${width}px`,
      margin: `${margins / 2}px`
    };

    switch (resource_type) {
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

    let onClick = link ? ::this.onClick : null;
    // over = over ? <div className="perfect-grid__over" >{ over }</div> : null

    return (
      <div
        className={ this.props.setClassName(this.props.photo) }
        onClick={ onClick }
        style={ style }>
        { over }
        <div
          className="perfect-grid__media"
          data-dims={ this.props.nativeDimensions }
          data-domain={ this.props.domain }>
          <PhotoCheckbox
            photo={ this.props.photo }
            selectPhoto={ this.props.selectPhoto } />
          { media }
        </div>
      </div>
    );
  }
};

export default GridItem;


// <Thumbnail
//   path={ this.props.secure_url.replace(/^(.+)(v\d+.+)$/, "$2") }
//   nativeDimensions={ `${this.props.width} x ${this.props.height} px` }
//   domain="cloudinary.com" />
