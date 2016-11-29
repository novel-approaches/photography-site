'use strict';
import React, { Component } from 'react';

import Thumbnail from './Thumbnail';



const IMAGE_URLS = [
  'v1480368582/iq4sy5drl6viareno3hr.jpg',
  'v1480367907/mmhqphjs5fohx0vljsjd.jpg',
  'v1480367907/cvtavj9flxyvdadryjiq.gif',
  'v1480367907/r3eqb3rulk5ksfkb2gmb.jpg',
  'v1480367906/m35pyne0tfcho33xqznj.jpg',
  'v1480367754/qconp93imcktgsfnii80.jpg',
  'v1480367720/khjkrbqh8gpuyt3hdnzp.jpg',
  'v1480367446/uaejtj7reyqupsccth7o.jpg',
  'v1480367139/azkc56ixa5jmgmwie1gf.jpg',
  'v1480366606/kl3f711j7nx4uk1jtyhg.gif'
];

const renderThumbs = (pathsArr) => 
  pathsArr.map((path, index, list) => (
    <Thumbnail
      key={ `Thumb_${index}` }
      path={ path } />
  )
);

const ThumbnailsMap = () => (
  <main>{ renderThumbs(IMAGE_URLS) }</main>
);

export default ThumbnailsMap;
