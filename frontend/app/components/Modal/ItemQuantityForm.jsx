'use strict';
import React from 'react';

import PhotoData from '../../constants/json/PhotoData.json';


const ItemQuantityForm = ({
  changeItemQuantity,
  disableInput,
  enableInput,
  photoID,
  refreshSubtotal,
  orderQuantities }) => {

  const changeQuantity = (evt) => {
    let $TARG = $(evt.target)[0],
        [{ value: num }, { size, price }] = [$TARG, $TARG.dataset];
    changeItemQuantity({
      photoID,
      quantity: { [size]: num }
    });
    refreshSubtotal({
      photoID,
      price: { [size]: num * price }
    });
  };

  const getInputValue = (dimensions) => {
    const SIZE = dimensions.replace(/\s/g, '');
    return (orderQuantities[photoID] && orderQuantities[photoID].quantity && orderQuantities[photoID].quantity[SIZE]
      ? orderQuantities[photoID].quantity[SIZE] : 0);
  };

  const renderSizes = (sizesArr) => sizesArr.map((obj, index, list) =>
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
        value={ getInputValue(obj.dimensions) }
        data-size={ obj.dimensions.replace(/\s/g, '') }
        data-price={ obj.price }
        onChange={ changeQuantity }
        onMouseOver={ enableInput }
        onMouseLeave={ disableInput }
        disabled />
      <output
        htmlFor={ `size-${obj.size}` } >
        { `$${(index * 5) + 10}` }
      </output>
    </li>
  );

  return (
    <form className="quantity-form">
      <ul className="sizes-list">
        { renderSizes(PhotoData) }
      </ul>
    </form>
  );
};

export default ItemQuantityForm;
