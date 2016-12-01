'use strict';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectPhoto } from '../actions/index';
import CheckboxGlyph from '../constants/svg/CheckboxGlyph_SVG';


class PhotoCheckbox extends Component {
  constructor(props) {
    super(props);
    this.selectPhoto = this.selectPhoto.bind(this);
  }

  selectPhoto(evt) {
    console.log('PHOTO:', this.props.photo);
    evt.currentTarget.classList.toggle('checked');
    let $parEl = $(evt.currentTarget);
      console.log('Parent Element:', $(this), '\n', 'EVT:', $(evt.currentTarget));
    this.props.selectPhoto(this.props.photo);
  };

  render() {
    return (
      <div
        type="checkbox"
        className="checkbox"
        role="checkbox"
        onClick={ this.selectPhoto }>
        <CheckboxGlyph />
      </div>
    );
  }
};


// let mapStateToProps = (state) = ({

// });

let mapDispatchToProps = (dispatch) => bindActionCreators({
  selectPhoto
}, dispatch);

export default connect(null, mapDispatchToProps)(PhotoCheckbox);
