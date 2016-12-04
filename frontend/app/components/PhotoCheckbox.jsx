'use strict';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectPhoto, toggleGalleryPhotoSelection } from '../actions/index';
import CheckboxGlyph from '../constants/svg/CheckboxGlyph_SVG';


export default class PhotoCheckbox extends Component {
  constructor(props) {
    super(props);
    // this.selectPhoto = this.selectPhoto.bind(this);
  }

  // selectPhoto(evt) {
  //   evt.currentTarget.classList.toggle('checked');
  //   let $parEl = $(evt.currentTarget);
  //     // console.log('Parent Element:', $(this), '\n', 'EVT:', $(evt.currentTarget));
  //   this.props.selectPhoto(this.props.photo);
  //   this.props.toggleGalleryPhotoSelection(this.props.photo);
  // };

  render() {
    return (
      <div
        className="checkbox"
        role="checkbox"
        // onClick={ () => this.props.selectFunc(this.props.photo) }
        onClick={ () => this.props.selFote(this.props.photo) }>
        <CheckboxGlyph />
      </div>
    );
  }
};


// let mapDispatchToProps = (dispatch) => bindActionCreators({
//   selectPhoto,
//   toggleGalleryPhotoSelection
// }, dispatch);

// export default connect(null, mapDispatchToProps)(PhotoCheckbox);
