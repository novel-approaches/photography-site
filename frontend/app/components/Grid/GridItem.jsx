'use strict';
import React, { Component } from 'react';

import PhotoCheckbox from '../PhotoCheckbox';


class GridItem extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(evt) {
    window.open(this.props.link);
  }

  render() {
    let { itemHeight, margins, over, media, ratio, resource_type, type, element, link } = this.props;
    let src = ( media ? media.src : null ),
        [height, width, margin] = [itemHeight, itemHeight * ratio, margins / 2].map(val => `${val}px`);

    let style = {
      height,
      width,
      margin
    };

    switch (resource_type) {
      case 'image':
        media = ( <img src={ src } /> );
        break;
      case 'video':
        media = ( <video src={ src } controls /> );
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
        throw new Error(`Unrecognized media format: ${type}`);
        break;
    }

    let onClick = link ? ::this.onClick : null;

    return (
      <div
        className={ this.props.setClassName(this.props.photo) }
        onClick={ onClick }
        style={ style }>
        { over }
        <div
          className="grid-media"
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
