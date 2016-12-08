'use strict';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promise from 'redux-promise';

import rootReducer from './reducers/rootReducer';
import '../static/styles/master.scss';
import Top from './containers/Top';


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={createStoreWithMiddleware(rootReducer)} >
        <Top />
      </Provider>
    );
  }
};

export default App;


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.getElementById('root'));
});


// { this.props }
