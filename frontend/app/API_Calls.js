'use strict';


export const FetchImageURLs = function(callback = function() {}) {
  $.ajax({
    url: '/images',
    type: 'get',
    success(res) {
      callback('Image URLs succesfully fetched:', res);
    },
    error(err) {
      console.log('Error encountered in fetching image URLs:', err);
    }
  });
};

export function FetchImageData(callback) {
  return $.ajax({
    url: '/images',
    type: 'get',
    success(res) {
      console.log('Image data successfully fetched:', res);
      callback(res);
    },
    error(err) {
      console.log('Error encountered in fetching image data:', err);
    }
  });
};
