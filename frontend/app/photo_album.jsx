'use strict';
import  React, { Component } from 'react';
import ReactDOM from 'react-dom';


export default class App extends Component {

  handleClick() {
    console.log('clicked');
  }

  render() {
    return (
      <div>
        <header onClick={this.handleClick}>
          Welcome to Photo Album
        </header>
        {this.props.children}
      </div>
    );
  }
};


document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(<App />, document.getElementById('root'));
});
