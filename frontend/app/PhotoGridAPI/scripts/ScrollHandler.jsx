'use strict';
import React, { Component } from 'react';


// Detect when scrollbar appears:
var ScrollBarAdapter = React.createClass({
  onResize() {
    if (this.props.onResize) {
      this.props.onResize();
      return;
    }
    try {
      var evt = new UIEvent('resize');
      window.dispatchEvent(evt);
    } catch(e) {}
  },

  componentDidMount() {
    this.refs.frame.contentWindow.addEventListener('resize', this.onResize, false);
  },
  
  componentWillUnmount() {
    this.refs.frame.contentWindow.removeEventListener('resize', this.onResize);
  },
  
  render() {
    var styles = {
      position: "absolute",
      width: "100%",
      height: 0,
      left: 0,
      top: 0,
      margin: 0,
      padding: 0,
      borderWidth: 0,
      overflow: "hidden",
      backgroundColor: "transparent",
      visibility: "hidden"
    };

    return (
      <iframe className="ScrollBarAdapter" ref="frame" style={styles} />
    );
  }
});

export default ScrollBarAdapter
