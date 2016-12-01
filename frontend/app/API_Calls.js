'use strict';

export const FetchImageURLs = function(callback = function() {}) {
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

export const FetchImageURLs1 = function() {
  return $.ajax({
    url: '/images',
    type: 'get',
    async: false,
    success(res) {
      console.log(res);
      // callback(res);
    },
    error(err) {
      console.log(err);
    }
  });
};

export const FetchImageData = function(callback = function() {}) {
  return $.ajax({
    url: '/gallery-data',
    type: 'get',
    success(res) {
      console.log(res);
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
