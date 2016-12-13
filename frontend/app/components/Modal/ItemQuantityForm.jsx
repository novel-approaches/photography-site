'use strict';
import React from 'react';

import PhotoData from '../../constants/json/PhotoData.json';


const ItemQuantityForm = ({ changeItemQuantity, disableInput, enableInput, photoID, refreshSubtotal }) => {
  const changeQuantity = (evt) => {
    let [num, { size, price }] = [evt.target.value, evt.target.dataset]
    changeItemQuantity({
      photoID,
      quantity: { [size]: num }
    });
    refreshSubtotal({
      photoID,
      price: { [size]: num * price }
    });
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
        defaultValue={ 0 }
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
