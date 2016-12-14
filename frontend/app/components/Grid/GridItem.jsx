'use strict';
import React from 'react';

import PhotoCheckbox from './PhotoCheckbox';


const GridItem = ({ ...props }) => {
  let { itemHeight, link, margins, media, ratio, resource_type } = props,
      [height, width, margin] = [itemHeight, itemHeight * ratio, margins].map((val, index) => index < 2 ? `${val}px` : val),
      [style, src, onClick] = [{ height, width, margin }, (media ? media.src : null), (link ? linkHandler : null)];

  switch (resource_type) {
    case 'image':
      media = (
        <img
          src={ src }
          alt="Grid image item." />
      );
      break;
    case 'video':
      media = (
        <video
          src={ src }
          controls />
        );
      break;
    case 'element':
      return (
        <div
          className="grid-item"
          style={ style }
          onClick={ onClick }>
          { element }
        </div>
      );
    default:
      throw new ReferenceError(`Unrecognized media format: ${type}`);
      break;
  }

  return (
    <div
      className={ props.setClassName(props.photo) }
      onClick={ onClick }
      style={ style }>
      <div
        className="grid-media"
        data-dims={ props.nativeDimensions }
        data-domain={ props.domain }>
        <PhotoCheckbox
          photo={ props.photo }
          selectPhoto={ props.selectPhoto } />
        { media }
      </div>
    </div>
  );
};

export default GridItem;


// Type Checking:
GridItem.propTypes = {
  domain: React.PropTypes.string,
  format: React.PropTypes.string,
  height: React.PropTypes.number,
  itemHeight: React.PropTypes.number,
  linkHandler: React.PropTypes.func,
  margins: React.PropTypes.string,
  media: React.PropTypes.object,
  nativeDimensions: React.PropTypes.string,
  path: React.PropTypes.string,
  photo: React.PropTypes.object,
  public_id: React.PropTypes.string,
  ratio: React.PropTypes.number,
  resource_type: React.PropTypes.string,
  secure_url: React.PropTypes.string,
  selected: React.PropTypes.bool,
  setClassName: React.PropTypes.func,
  type: React.PropTypes.string,
  url: React.PropTypes.string,
  version: React.PropTypes.number,
  width: React.PropTypes.number
};

// Fallback Provisions:
GridItem.defaultProps = {
  domain: 'Cloudinary.com',
  itemHeight: 300,
  linkHandler: (link) => { window.open(link); },
  margins: '0 5px 10px',
  resource_type: 'image',
  selected: false,
  type: 'image'
};
