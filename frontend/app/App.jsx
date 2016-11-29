'use strict';
import  React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../static/styles/master.scss';
import Header from './components/Header';
import ThumbnailsMap from './components/ThumbnailsMap';
import { getURLs } from './api_calls';


const API_BASE = 'https://res.cloudinary.com/clairephotography/image/upload/',
      IMAGE_URLS = [
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


export default class App extends Component {

  handleClick() {
    console.log('clicked');
  }

  render() {
    return (
      <div>
        <Header />
        <ThumbnailsMap />
        { this.props.children }
      </div>
    );
  }
};

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.getElementById('root'));
});
