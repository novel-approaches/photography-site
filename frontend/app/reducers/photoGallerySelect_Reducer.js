'use strict';
import { TOGGLE_PHOTO_SELECTION_STATE } from '../actions/index';


const DATA = [
  {
    "public_id":"test_DSC6091_b9qrtx",
    "format":"jpg","version":1480453840,
    "resource_type":"image",
    "type":"upload",
    "created_at":"2016-11-29T21:10:40Z",
    "bytes":5812291,
    "width":4508,
    "height":3000,
    "selected": false,
    "url":"http://res.cloudinary.com/clairephotography/image/upload/v1480453840/test_DSC6091_b9qrtx.jpg",
    "secure_url":"https://res.cloudinary.com/clairephotography/image/upload/v1480453840/test_DSC6091_b9qrtx.jpg"
  },
  {
    'public_id': 'iq4sy5drl6viareno3hr',
    'format': 'jpg',
    'version': 1480368582,
    'resource_type': 'image',
    'type': 'upload',
    'created_at': '2016-11-28T21:29:42Z',
    'bytes': 1681090,
    'width': 4000,
    'height': 2857,
    'selected': false,
    'url': 'http://res.cloudinary.com/clairephotography/image/upload/v1480368582/iq4sy5drl6viareno3hr.jpg',
    'secure_url': 'https://res.cloudinary.com/clairephotography/image/upload/v1480368582/iq4sy5drl6viareno3hr.jpg'
  },
  {
    'public_id': 'mmhqphjs5fohx0vljsjd',
    'format': 'jpg',
    'version': 1480367907,
    'resource_type': 'image',
    'type': 'upload',
    'created_at': '2016-11-28T21:18:27Z',
    'bytes': 1681090,
    'width': 4000,
    'height': 2857,
    'selected': false,
    'url': 'http://res.cloudinary.com/clairephotography/image/upload/v1480367907/mmhqphjs5fohx0vljsjd.jpg',
    'secure_url': 'https://res.cloudinary.com/clairephotography/image/upload/v1480367907/mmhqphjs5fohx0vljsjd.jpg'
  },
  {
    'public_id': 'cvtavj9flxyvdadryjiq',
    'format': 'gif',
    'version': 1480367907,
    'resource_type': 'image',
    'type': 'upload',
    'created_at': '2016-11-28T21:18:27Z',
    'bytes': 297077,
    'width': 700,
    'height': 900,
    'selected': false,
    'url': 'http://res.cloudinary.com/clairephotography/image/upload/v1480367907/cvtavj9flxyvdadryjiq.gif',
    'secure_url': 'https://res.cloudinary.com/clairephotography/image/upload/v1480367907/cvtavj9flxyvdadryjiq.gif'
  },
  {
    'public_id': 'r3eqb3rulk5ksfkb2gmb',
    'format': 'jpg',
    'version': 1480367907,
    'resource_type': 'image',
    'type': 'upload',
    'created_at': '2016-11-28T21:18:27Z',
    'bytes': 47522,
    'width': 1024,
    'height': 768,
    'selected': false,
    'url': 'http://res.cloudinary.com/clairephotography/image/upload/v1480367907/r3eqb3rulk5ksfkb2gmb.jpg',
    'secure_url': 'https://res.cloudinary.com/clairephotography/image/upload/v1480367907/r3eqb3rulk5ksfkb2gmb.jpg'
  },
  {
    'public_id': 'm35pyne0tfcho33xqznj',
    'format': 'jpg',
    'version': 1480367906,
    'resource_type': 'image',
    'type': 'upload',
    'created_at': '2016-11-28T21:18:26Z',
    'bytes': 41392,
    'width': 715,
    'height': 430,
    'selected': false,
    'url': 'http://res.cloudinary.com/clairephotography/image/upload/v1480367906/m35pyne0tfcho33xqznj.jpg',
    'secure_url': 'https://res.cloudinary.com/clairephotography/image/upload/v1480367906/m35pyne0tfcho33xqznj.jpg'
  },
  {
    'public_id': 'qconp93imcktgsfnii80',
    'format': 'jpg',
    'version': 1480367754,
    'resource_type': 'image',
    'type': 'upload',
    'created_at': '2016-11-28T21:15:54Z',
    'bytes': 4391799,
    'width': 5208,
    'height': 2251,
    'selected': false,
    'url': 'http://res.cloudinary.com/clairephotography/image/upload/v1480367754/qconp93imcktgsfnii80.jpg',
    'secure_url': 'https://res.cloudinary.com/clairephotography/image/upload/v1480367754/qconp93imcktgsfnii80.jpg'
  },
  {
    'public_id': 'khjkrbqh8gpuyt3hdnzp',
    'format': 'jpg',
    'version': 1480367720,
    'resource_type': 'image',
    'type': 'upload',
    'created_at': '2016-11-28T21:15:20Z',
    'bytes': 4391799,
    'width': 5208,
    'height': 2251,
    'selected': false,
    'url': 'http://res.cloudinary.com/clairephotography/image/upload/v1480367720/khjkrbqh8gpuyt3hdnzp.jpg',
    'secure_url': 'https://res.cloudinary.com/clairephotography/image/upload/v1480367720/khjkrbqh8gpuyt3hdnzp.jpg'
  },
  {
    'public_id': 'uaejtj7reyqupsccth7o',
    'format': 'jpg',
    'version': 1480367446,
    'resource_type': 'image',
    'type': 'upload',
    'created_at': '2016-11-28T21:10:46Z',
    'bytes': 1681090,
    'width': 4000,
    'height': 2857,
    'selected': false,
    'url': 'http://res.cloudinary.com/clairephotography/image/upload/v1480367446/uaejtj7reyqupsccth7o.jpg',
    'secure_url': 'https://res.cloudinary.com/clairephotography/image/upload/v1480367446/uaejtj7reyqupsccth7o.jpg'
  },
  {
    'public_id': 'azkc56ixa5jmgmwie1gf',
    'format': 'jpg',
    'version': 1480367139,
    'resource_type': 'image',
    'type': 'upload',
    'created_at': '2016-11-28T21:05:39Z',
    'bytes': 47522,
    'width': 1024,
    'height': 768,
    'selected': false,
    'url': 'http://res.cloudinary.com/clairephotography/image/upload/v1480367139/azkc56ixa5jmgmwie1gf.jpg',
    'secure_url': 'https://res.cloudinary.com/clairephotography/image/upload/v1480367139/azkc56ixa5jmgmwie1gf.jpg'
  },
  {
    'public_id': 'kl3f711j7nx4uk1jtyhg',
    'format': 'gif',
    'version': 1480366606,
    'resource_type': 'image',
    'type': 'upload',
    'created_at': '2016-11-28T20:56:46Z',
    'bytes': 297077,
    'width': 700,
    'height': 900,
    'selected': false,
    'url': 'http://res.cloudinary.com/clairephotography/image/upload/v1480366606/kl3f711j7nx4uk1jtyhg.gif',
    'secure_url': 'https://res.cloudinary.com/clairephotography/image/upload/v1480366606/kl3f711j7nx4uk1jtyhg.gif'
  }
].reduce((memo, curr) => {
  memo[curr.public_id] = curr;
  return memo;
}, {});

const SELECTION_STATES = {
  iq4sy5drl6viareno3hr: false,
  mmhqphjs5fohx0vljsjd: false,
  cvtavj9flxyvdadryjiq: false,
  r3eqb3rulk5ksfkb2gmb: false,
  m35pyne0tfcho33xqznj: false,
  qconp93imcktgsfnii80: false,
  khjkrbqh8gpuyt3hdnzp: false,
  uaejtj7reyqupsccth7o: false,
  azkc56ixa5jmgmwie1gf: false,
  kl3f711j7nx4uk1jtyhg: false
};

const togglePhotoSelectionState = (gallery, photo) => {
  let galleryPhoto = gallery[photo.public_id];
  console.log('\n\nGALLERY PHOTO:', galleryPhoto);
  galleryPhoto.selected = !galleryPhoto.selected;
};

export default function photoGallerySelect(state = SELECTION_STATES, action) {
  switch (action.type) {
    case TOGGLE_PHOTO_SELECTION_STATE:
      // console.log(`Action <${action.type}> registered with payload <photo: `, action.photo, '>');
      // let [photoID, photoObjEntry] = [action.photo.public_id, togglePhotoSelectionState(state, action.photo)];
      let photoID = action.photo.public_id;
      console.log('PGSSSS', Object.assign(state, { [photoID]: !state[photoID] }));
      return Object.assign(state, { [photoID]: !state[photoID] });
    default:
      return state;
  }
};
