'use strict';

export function FetchImageData(callback) {
  $.ajax({
    url: '/images',
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
