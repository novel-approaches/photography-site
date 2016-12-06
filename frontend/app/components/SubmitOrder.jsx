'use strict';
import React, { Component } from 'react';


export default class SubmitOrder extends Component {
  constructor(props) {
    super(props);
    this.onSub = this.onSub.bind(this);
    this.contactInfo = {
      email: '',
      phone: ''
    };
  }

  onSub(evt) {
    // evt.preventDefault();
    // console.log('\nORDER:', this.props.order);
    this.props.sub(this.props.order);
  }

  //TODO make this work - need to grab below form data, stick it in the order object, etc.
  changeContactInfo(evt) {
    switch (evt.target.id) {
      case 'phone':
        this.contactInfo.phone = evt.target.value;
        break;
      case 'email':
        this.contactInfo.email = evt.target.value;
        break;
      default:
      console.log('default');
    }
    console.log('###CONTACTINFO####')
    console.log(this.contactInfo);
  }

  render() {
    return (
      <div>
        <form className="quantity-form">
          <label>Enter Email</label>
            <input type="text" id='email' onChange={this.changeContactInfo}/>
          <label onChange={this.changeContactInfo}>Enter Phone</label>
            <input type="text" id='phone' onChange={this.changeContactInfo}/>
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
