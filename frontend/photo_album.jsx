'use strict';
import  React, { Component } from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {

  _handleClick() {
    console.log('clicked');
  }

  render() {
    return (
      <div>
        <header onClick={this._handleClick}>
          Welcome to Photo Album
        </header>
        {this.props.children}
      </div>
    );
  }
};

document.addEventListener('DOMContentLoaded', function() {
  const root = document.getElementById('content');
  console.log(root);
  ReactDOM.render(App, root);
});
