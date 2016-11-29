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
