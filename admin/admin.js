/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	// import { API } from './api.js';
	const API = __webpack_require__(1);

	document.addEventListener('DOMContentLoaded', () => {
	  let div = document.createElement('div');
	  div.innerHTML = 'HELLO';
	  console.log(API);
	  document.body.appendChild(div);
	});


/***/ },
/* 1 */
/***/ function(module, exports) {

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
	  "secure_delivery_url": "https://res.cloudinary.com/clairephotography/image/upload/",
	  "API_base_url":  "https://api.cloudinary.com/v1_1/clairephotography/image/upload/"
	}


/***/ }
/******/ ]);