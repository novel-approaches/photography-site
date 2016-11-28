'use strict';
const API = require('./api');

function ajaxSuccess(){
  let res = JSON.parse(this.response);
  console.log(res.secure_url);
}

function postImage(img){
  let data = new FormData();
  data.append('upload_preset', 'standard');
  data.append('file', img);
  data.append('api_key', API.development.api_key);
  let xhr = new XMLHttpRequest();
  xhr.onload = ajaxSuccess;
  xhr.open("post", API.base_url, true);
  xhr.send(data);
  console.log(xhr.responseText);
}

function handleUpload(event){
  let files = event.target.files;
  for (var i = 0; i < files.length; i++) {
    postImage(files[i]);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  let div = document.createElement('div');
  div.innerHTML = 'HELLO';
  document.body.appendChild(div);
  let upload = document.createElement('input');
  upload.setAttribute('type', 'file');
  upload.setAttribute('multiple', true);
  document.body.appendChild(upload);
  upload.addEventListener('change', handleUpload);
});
