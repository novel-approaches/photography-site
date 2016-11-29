'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

import '../static/styles/master.scss';
import Header from './components/Header';
import ThumbnailsMap from './components/ThumbnailsMap';

//TEST API
import { FetchImageData } from './api_calls';
//END TEST API`
const App = ({ props }) => (
  <div>
    <Header />
    <ThumbnailsMap />
    { props }
  </div>
);

export default App;

document.addEventListener('DOMContentLoaded', () => {
  //TEST API
  FetchImageData(function(res){console.log(res)});
  //END API TEST
  ReactDOM.render(<App />, document.getElementById('root'));
});
