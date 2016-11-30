'use strict';

export function FetchImageData(callback) {
  $.ajax({
    url: '/images',
    type: 'get',
    success(res) {
      callback(res);
    },
    error(err) {
      console.log(err);
    }
  });
};

export function PlaceImageOrder(data) {
  $.ajax({
    url: '/orders',
    type: 'post',
    success(res) {
      console.log('Order Placed!')
    },
    error(err) {
      console.log(err);
    }
  });
};
