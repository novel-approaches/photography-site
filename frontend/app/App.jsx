'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

import '../static/styles/master.scss';
import Header from './components/Header';
import ThumbnailsMap from './components/ThumbnailsMap';


const App = ({ props }) => (
  <div>
    <Header />
    <ThumbnailsMap />
    { props }
  </div>
);

export default App;

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.getElementById('root'));
});
