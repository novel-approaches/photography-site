'use strict';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { addToShoppingCart } from '../../actions/index';
import Thumbnail from '../../components/Thumbnail';
import PhotoCheckbox from '../../components/PhotoCheckbox';


class GridItem extends Component {
  constructor(props) {
    super(props);
    // this.assignClass = this.assignClass.bind(this);
    // this.selPhoto = this.selPhoto.bind(this);
    this.aa = this.aa.bind(this);
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

    // let selectState = this.props.photoGallerySelect[this.props.photo.public_id].selected;
      // console.log('\n\nSELECT STATE:', selectState);

    return `perfect-grid__item ${selectState ? 'checked' : ''}`;
  }

  // selPhoto(photo) {
  //   // evt.currentTarget.classList.toggle('checked');
  //   // let $parEl = $(evt.currentTarget);
  //     // console.log('Parent Element:', $(this), '\n', 'EVT:', $(evt.currentTarget));
  //   this.props.addToShoppingCart(photo);
  //   // this.props.toggleGalleryPhotoSelection(this.props.photo);
  // };

  aa() {
    if (this.props.shoppingCart[this.props.photo.public_id]) {
      return `perfect-grid__item checked`;
    } else {
      return `perfect-grid__item`;
    }
  }

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
        className={ this.aa() }
        onClick={ onClick }
        style={ style }>
        { over }
        <div
          className="perfect-grid__media"
          data-dims={ this.props.nativeDimensions }
          data-domain={ this.props.domain }>
          <PhotoCheckbox
            photo={ this.props.photo }
            className="checkbox"
            // selectFunc={ this.props.selPhoto }
            selFote={ this.props.selFote } />
          { media }
        </div>
      </div>
    );
  }
};

let mapStateToProps = (state) => ({
  shoppingCart: state.shoppingCart
});

let mapDispatchToProps = (dispatch) => bindActionCreators({
  // selectPhoto
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GridItem);
// export default connect(mapStateToProps)(GridItem);


// <Thumbnail
//   path={ this.props.secure_url.replace(/^(.+)(v\d+.+)$/, "$2") }
//   nativeDimensions={ `${this.props.width} x ${this.props.height} px` }
//   domain="cloudinary.com" />
