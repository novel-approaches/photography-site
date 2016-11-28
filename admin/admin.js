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

function ajaxSuccess() {
  var res = JSON.parse(this.response);
  console.log(res.secure_url);
}

function postImage(img) {
  var data = new FormData();
  data.append('upload_preset', 'standard');
  data.append('file', img);
  data.append('api_key', API.development.api_key);
  var xhr = new XMLHttpRequest();
  xhr.onload = ajaxSuccess;
  xhr.open("post", API.base_url, true);
  xhr.send(data);
  console.log(xhr.responseText);
}

function handleUpload(event) {
  var files = event.target.files;
  for (var i = 0; i < files.length; i++) {
    postImage(files[i]);
  }
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