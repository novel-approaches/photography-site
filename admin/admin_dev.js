'use strict';
const API = require('./api');


// window.ajaxSuccess = function () {
// 	response = JSON.parse(this.responseText);
//   console.log("ajaxSuccess", typeof this.responseText);
//   document.getElementById('uploaded').setAttribute("src", response["secure_url"]);
//   document.getElementById('results').innerText = this.responseText;
// }
//
// window.AJAXSubmit = function (formElement) {
//   console.log("starting AJAXSubmit");
//   // if (!formElement.action) { return; }
//   data = new FormData(formElement);
//   debugger;
//   $.ajax({
//     url: API.base_url,
//     type: 'POST',
//     data: JSON.stringify(data),
//     sucess(res){
//       console.log(res);
//     }
//   });

  // var xhr = new XMLHttpRequest();
  // xhr.onload = ajaxSuccess;
  // xhr.open("post", "https://api.cloudinary.com/v1_1/clairephotography/image/upload");
  // xhr.send(new FormData(formElement));
// }


function res(){
  console.log(response);
}

function postImage(img){
  debugger;
  let data = new FormData()
  data.append('upload_preset', 'standard');
  data.append('file', img);
  data.append('api_key', API.development.api_key);
  // data = JSON.stringify(data);
  debugger;
  // for(x of data.entries()){console.log(x);}
  $.ajax({
    url: API.base_url,
    type: 'post',
    data: data,
    sucess(res){
      console.log(res);
    },
    error(err){
      console.log(err);
    }
  });
  // var xhr = new XMLHttpRequest();
  // xhr.onload = res;
  // xhr.open("post", "API.base_url");
  // xhr.send(new FormData(formElement));
}

// function read(file){
//   var reader = new FileReader()
//   reader.onload = function(){
//     console.log(event.target);
//     let binary = event.target.result
//     postImage(binary);
//   }
//   reader.readAsArrayBuffer(file);
// }

function handleUpload(event){
  // event.preventDefault();
  let files = event.target.files;
  for (var i = 0; i < files.length; i++) {
    postImage(files[i])
    // postImage(files[i]);
  }
  // debugger;

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
