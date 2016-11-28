/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

"use strict";
"use strict";

module.exports = {
  "development": {
    "cloud_name": "clairephotography",
    "api_key": "439198291915981",
    "api_secret": "Mkg4z0aSdewn1XlM79gNvxz1EwY",
    "enhance_image_tag": "true",
    "static_image_support": "false"
  },
  "production": {
    "cloud_name": "clairephotography",
    "api_key": "439198291915981",
    "api_secret": "Mkg4z0aSdewn1XlM79gNvxz1EwY",
    "enhance_image_tag": "true",
    "static_image_support": "false"
  },
  "test": {
    "cloud_name": "clairephotography",
    "api_key": "439198291915981",
    "api_secret": "Mkg4z0aSdewn1XlM79gNvxz1EwY",
    "enhance_image_tag": "true",
    "static_image_support": "false"
  },
  "env_var": "CLOUDINARY_URL=cloudinary://439198291915981:Mkg4z0aSdewn1XlM79gNvxz1EwY@clairephotography",
  "secure_delivery_url": "https://res.cloudinary.com/clairephotography/image/upload",
  "base_url": "https://api.cloudinary.com/v1_1/clairephotography/image/upload"
};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var API = __webpack_require__(0);

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


function res() {
  console.log(response);
}

function postImage(img) {
  debugger;
  var data = new FormData();
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
    sucess: function sucess(res) {
      console.log(res);
    },
    error: function error(err) {
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

function handleUpload(event) {
  // event.preventDefault();
  var files = event.target.files;
  for (var i = 0; i < files.length; i++) {
    postImage(files[i]);
    // postImage(files[i]);
  }
  // debugger;
}

document.addEventListener('DOMContentLoaded', function () {
  var div = document.createElement('div');
  div.innerHTML = 'HELLO';
  document.body.appendChild(div);
  var upload = document.createElement('input');
  upload.setAttribute('type', 'file');
  upload.setAttribute('multiple', true);
  document.body.appendChild(upload);
  upload.addEventListener('change', handleUpload);
});

/***/ }
/******/ ]);
//# sourceMappingURL=admin.js.map