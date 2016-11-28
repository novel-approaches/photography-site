// import { API } from './api.js';
const API = require('./api.js');

document.addEventListener('DOMContentLoaded', () => {
  let div = document.createElement('div');
  div.innerHTML = 'HELLO';
  console.log(API);
  document.body.appendChild(div);
});
