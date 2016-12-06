'use strict';
import React, { Component } from 'react';


export default class SubmitOrder extends Component {
  constructor(props) {
    super(props);
    this.onSub = this.onSub.bind(this);
    this.changeContactInfo = this.changeContactInfo.bind(this);
  }

  onSub(evt) {
    // evt.preventDefault();
    // console.log('\nORDER:', this.props.order);
    this.props.sub(this.props.order);
  }

  //TODO make this work - need to grab below form data, stick it in the order object, etc.
  changeContactInfo(evt) {
    console.log(evt);
    let num = evt.target.value
    this.state.contact = {
      email: '',
      phone: ''
      }
  }

  render() {
    return (
      <div>
        <form className="quantity-form">
          <label>Enter Email</label>
            <input type="text" onChange={this.changeContactInfo}/>
          <label onChange={this.changeContactInfo}>Enter Phone</label>
            <input type="text" />
        </form>

        <button
          type="submit"
          onClick={ () => this.onSub() }>
          Submit Order
        </button>
      </div>
    );
  }
};
