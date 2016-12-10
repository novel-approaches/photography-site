'use strict';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectPhoto, toggleGalleryPhotoSelection } from '../actions/index';
import CheckboxGlyph from '../constants/svg/CheckboxGlyph_SVG';


export default class PhotoCheckbox extends Component {
  constructor(props) {
    super(props);
  }

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
