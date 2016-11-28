'use strict';

const React = require('react');
const ReactDOM = require('react-dom');

const App extends React.Component {

  _handleClick() {
    console.log('clicked');
  },

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
