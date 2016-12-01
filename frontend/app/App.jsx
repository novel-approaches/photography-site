'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
import '../static/styles/master.scss';
import Header from './components/Header';
import ThumbnailsMap from './components/ThumbnailsMap';
import GridControls from './components/GridControls';

const store = createStore(rootReducer);


const App = ({ props }) => (
  <Provider store={ store }>
    <div>
      <Header />
      <div className="midsection">
        <GridControls />
        <ThumbnailsMap />
      </div>
      { props }
    </div>
  </Provider>
);

export default App;

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.getElementById('root'));
});
