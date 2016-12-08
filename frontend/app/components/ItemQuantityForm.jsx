'use strict';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { changeItemQuantity } from '../actions/index';
import PhotoData from '../constants/json/PhotoData.json';


class ItemQuantityForm extends Component {
  constructor(props) {
    super(props);
    this.renderSizes = this.renderSizes.bind(this);
    this.changeQuantity = this.changeQuantity.bind(this);
    this.enableInput = this.enableInput.bind(this);
    this.disableInput = this.disableInput.bind(this);
  }

  changeQuantity(evt) {
    let [num, ID] = [evt.target.value, this.props.photoID],
        { size, price } = evt.target.dataset;

    this.props.changeItemQuantity({
      photoID: ID,
      quantity: {
        [size]: num
      },
      price: num * price
    });
  }

  enableInput(evt) {
    evt.target.removeAttribute('disabled');
  }

  disableInput(evt) {
    if (!(evt.target.value > 0)) {
      evt.target.setAttribute('disabled', true);
    }
  }

  renderSizes(sizesArr) {
    return sizesArr.map((obj, index, list) =>
      <li
        key={ `ItemSize_${index}` }
        className="size">
        <label
          htmlFor={ `size-${obj.size}` }>
          { obj.dimensions }
        </label>
        <input
          id={ `size-${obj.size}` }
          type="number"
          min={ 0 }
          max={ Number.MAX_SAFE_INTEGER }
          defaultValue={ 0 }
          data-size={ obj.dimensions.replace(/\s/g, '') }
          data-price={ obj.price }
          onChange={ this.changeQuantity }
          onMouseOver={ this.enableInput }
          onMouseLeave={ this.disableInput }
          disabled />
        <output
          htmlFor={ `size-${obj.size}` } >
          { `$${(index * 5) + 10}` }
        </output>
      </li>
    );
  }

  render() {
    return (
      <form className="quantity-form">
        <ul className="sizes-list">
          { this.renderSizes(PhotoData) }
        </ul>
      </form>
    );
  }
};


let mapDispatchToProps = (dispatch) => bindActionCreators({
  changeItemQuantity
}, dispatch);

export default connect(null, mapDispatchToProps)(ItemQuantityForm);
