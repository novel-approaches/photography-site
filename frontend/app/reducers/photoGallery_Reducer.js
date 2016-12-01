'use strict';

// let DATA = null;
// FetchImageData()
// // let get = true;
// // while(!DATA){
// //   if(get){
// //     FetchImageData();
// //     get = false;
// //   }
// // }
//
// function FetchImageData(){
//   console.log('Request');
//   $.ajax({
//     url: '/images',
//     type: 'get',
//     success(res) {
//       console.log(res);
//       DATA = res;
//     },
//     error(err) {
//       console.log(err);
//     }
//   });
// }

// setTimeout( function(){
//   DATA =  {
//       'public_id': 'kl3f711j7nx4uk1jtyhg',
//       'format': 'gif',
//       'version': 1480366606,
//       'resource_type': 'image',
//       'type': 'upload',
//       'created_at': '2016-11-28T20:56:46Z',
//       'bytes': 297077,
//       'width': 700,
//       'height': 900,
//       'selected': false,
//       'url': 'http://res.cloudinary.com/clairephotography/image/upload/v1480366606/kl3f711j7nx4uk1jtyhg.gif',
//       'secure_url': 'https://res.cloudinary.com/clairephotography/image/upload/v1480366606/kl3f711j7nx4uk1jtyhg.gif'
//     }
//     console.log('DONE');
//     console.log(DATA);
// }, 5000)
let DATA = null;

export default function photoGallery(state = DATA, action) {
  // console.log(`Action <${action.type}> registered with payload <photo: `, action.photo, '>');
  return state;
};
