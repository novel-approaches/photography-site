'use strict';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setContactInfo } from '../actions/index';

class SubmitOrder extends Component {
  constructor(props) {
    super(props);
    this.onSub = this.onSub.bind(this);
    this.changeContactInfo = this.changeContactInfo.bind(this);
    this.state = {
      email: '',
      phone: '',
      info: {}
    }
  }

  onSub(evt) {
    // evt.preventDefault();
    // console.log('\nORDER:', this.props.order);
    this.setState({
      info: {
        email: this.state.email,
        phone: this.state.phone
      }
    });
    this.props.sub(this.props.order);
  }

  changeContactInfo(evt) {
    switch (evt.target.id) {
      case 'phone':
        this.setState({phone: evt.target.value});
        break;
      case 'email':
        this.setState({email: evt.target.value});
        break;
      default:
    }
  }

  render() {
    console.log('##RENDER PROPS###')
    console.log(this.props);
    return (
      <div>
        <form className="quantity-form">
          <label>Enter Email</label>
            <input type="text"
                   id='email'
                   onChange={this.changeContactInfo}
                   value={this.state.email}/>
          <label onChange={this.changeContactInfo}>Enter Phone</label>
            <input type="text"
                   id='phone'
                   onChange={this.changeContactInfo}
                   value={this.state.phone}/>
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

let mapStateToProps = (state) => ({
  info: state.info
});

let mapDispatchToProps = (dispatch) => bindActionCreators({
  setContactInfo
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SubmitOrder);
