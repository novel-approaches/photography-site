'use strict';
import React, { Component } from 'react';


export default class SubmitOrder extends Component {
  constructor(props) {
    super(props);
    this.onSub = this.onSub.bind(this);
  }

  onSub(evt) {
    // evt.preventDefault();
      console.log('\nORDER:', this.props.order);
    this.props.sub(this.props.order);
  }

  render() {
    return (
      <button
        type="submit"
        onClick={ () => this.onSub() }>
        Submit Order
      </button>
    );
  }
};
