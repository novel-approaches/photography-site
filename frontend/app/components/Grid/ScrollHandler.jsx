'use strict';
import React, { Component } from 'react';

import ScrollBarStyles from '../../constants/json/ScrollBarStyles.json';


// Detect when scrollbar appears:
export default class ScrollBarAdapter extends Component {
  constructor(props) {
    super(props);
    this.onResize = this.onResize.bind(this);
  }

  onResize() {
    if (this.props.onResize) {
      this.props.onResize();
      return;
    }
    try {
      let evt = new UIEvent('resize');
      window.dispatchEvent(evt);
    } catch(evt) {

    }
  }

  componentDidMount() {
    this.refs.frame.contentWindow.addEventListener('resize', this.onResize, false);
  }
  
  componentWillUnmount() {
    this.refs.frame.contentWindow.removeEventListener('resize', this.onResize);
  }
  
  render() {
    return (
      <iframe
        className="ScrollBarAdapter"
        ref="frame"
        style={ ScrollBarStyles } />
    );
  }
};
