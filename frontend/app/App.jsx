'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

import '../static/styles/master.scss';
import Header from './components/Header';
import ThumbnailsMap from './components/ThumbnailsMap';

//TEST API
import { FetchImageData } from './api_calls';
let data = null
function getImages(res){
  data = res;
}
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
  FetchImageData(getImages);
  console.log(data);
  //END API TEST
  ReactDOM.render(<App />, document.getElementById('root'));
});
