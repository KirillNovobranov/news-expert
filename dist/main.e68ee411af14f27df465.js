/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/data.csv":
/*!*************************!*\
  !*** ./assets/data.csv ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = [[\"policyID\",\"statecode\",\"county\",\"eq_site_limit\",\"hu_site_limit\",\"fl_site_limit\",\"fr_site_limit\",\"tiv_2011\",\"tiv_2012\",\"eq_site_deductible\",\"hu_site_deductible\",\"fl_site_deductible\",\"fr_site_deductible\",\"point_latitude\",\"point_longitude\",\"line\",\"construction\",\"point_granularity\"],[\"119736\",\"FL\",\"CLAY COUNTY\",\"498960\",\"498960\",\"498960\",\"498960\",\"498960\",\"792148.9\",\"0\",\"9979.2\",\"0\",\"0\",\"30.102261\",\"-81.711777\",\"Residential\",\"Masonry\",\"1\"],[\"448094\",\"FL\",\"CLAY COUNTY\",\"1322376.3\",\"1322376.3\",\"1322376.3\",\"1322376.3\",\"1322376.3\",\"1438163.57\",\"0\",\"0\",\"0\",\"0\",\"30.063936\",\"-81.707664\",\"Residential\",\"Masonry\",\"3\"],[\"206893\",\"FL\",\"CLAY COUNTY\",\"190724.4\",\"190724.4\",\"190724.4\",\"190724.4\",\"190724.4\",\"192476.78\",\"0\",\"0\",\"0\",\"0\",\"30.089579\",\"-81.700455\",\"Residential\",\"Wood\",\"1\"],[\"333743\",\"FL\",\"CLAY COUNTY\",\"0\",\"79520.76\",\"0\",\"0\",\"79520.76\",\"86854.48\",\"0\",\"0\",\"0\",\"0\",\"30.063236\",\"-81.707703\",\"Residential\",\"Wood\",\"3\"],[\"172534\",\"FL\",\"CLAY COUNTY\",\"0\",\"254281.5\",\"0\",\"254281.5\",\"254281.5\",\"246144.49\",\"0\",\"0\",\"0\",\"0\",\"30.060614\",\"-81.702675\",\"Residential\",\"Wood\",\"1\"],[\"785275\",\"FL\",\"CLAY COUNTY\",\"0\",\"515035.62\",\"0\",\"0\",\"515035.62\",\"884419.17\",\"0\",\"0\",\"0\",\"0\",\"30.063236\",\"-81.707703\",\"Residential\",\"Masonry\",\"3\"],[\"995932\",\"FL\",\"CLAY COUNTY\",\"0\",\"19260000\",\"0\",\"0\",\"19260000\",\"20610000\",\"0\",\"0\",\"0\",\"0\",\"30.102226\",\"-81.713882\",\"Commercial\",\"Reinforced Concrete\",\"1\"],[\"223488\",\"FL\",\"CLAY COUNTY\",\"328500\",\"328500\",\"328500\",\"328500\",\"328500\",\"348374.25\",\"0\",\"16425\",\"0\",\"0\",\"30.102217\",\"-81.707146\",\"Residential\",\"Wood\",\"1\"],[\"433512\",\"FL\",\"CLAY COUNTY\",\"315000\",\"315000\",\"315000\",\"315000\",\"315000\",\"265821.57\",\"0\",\"15750\",\"0\",\"0\",\"30.118774\",\"-81.704613\",\"Residential\",\"Wood\",\"1\"],[\"142071\",\"FL\",\"CLAY COUNTY\",\"705600\",\"705600\",\"705600\",\"705600\",\"705600\",\"1010842.56\",\"14112\",\"35280\",\"0\",\"0\",\"30.100628\",\"-81.703751\",\"Residential\",\"Masonry\",\"1\"],[\"253816\",\"FL\",\"CLAY COUNTY\",\"831498.3\",\"831498.3\",\"831498.3\",\"831498.3\",\"831498.3\",\"1117791.48\",\"0\",\"0\",\"0\",\"0\",\"30.10216\",\"-81.719444\",\"Residential\",\"Masonry\",\"1\"],[\"894922\",\"FL\",\"CLAY COUNTY\",\"0\",\"24059.09\",\"0\",\"0\",\"24059.09\",\"33952.19\",\"0\",\"0\",\"0\",\"0\",\"30.095957\",\"-81.695099\",\"Residential\",\"Wood\",\"1\"],[\"422834\",\"FL\",\"CLAY COUNTY\",\"0\",\"48115.94\",\"0\",\"0\",\"48115.94\",\"66755.39\",\"0\",\"0\",\"0\",\"0\",\"30.100073\",\"-81.739822\",\"Residential\",\"Wood\",\"1\"],[\"582721\",\"FL\",\"CLAY COUNTY\",\"0\",\"28869.12\",\"0\",\"0\",\"28869.12\",\"42826.99\",\"0\",\"0\",\"0\",\"0\",\"30.09248\",\"-81.725167\",\"Residential\",\"Wood\",\"1\"],[\"842700\",\"FL\",\"CLAY COUNTY\",\"0\",\"56135.64\",\"0\",\"0\",\"56135.64\",\"50656.8\",\"0\",\"0\",\"0\",\"0\",\"30.101356\",\"-81.726248\",\"Residential\",\"Wood\",\"1\"],[\"874333\",\"FL\",\"CLAY COUNTY\",\"0\",\"48115.94\",\"0\",\"0\",\"48115.94\",\"67905.07\",\"0\",\"0\",\"0\",\"0\",\"30.113743\",\"-81.727463\",\"Residential\",\"Wood\",\"1\"],[\"580146\",\"FL\",\"CLAY COUNTY\",\"0\",\"48115.94\",\"0\",\"0\",\"48115.94\",\"66938.9\",\"0\",\"0\",\"0\",\"0\",\"30.121655\",\"-81.732391\",\"Residential\",\"Wood\",\"3\"],[\"456149\",\"FL\",\"CLAY COUNTY\",\"0\",\"80192.49\",\"0\",\"0\",\"80192.49\",\"86421.04\",\"0\",\"0\",\"0\",\"0\",\"30.109537\",\"-81.741661\",\"Residential\",\"Wood\",\"1\"],[\"767862\",\"FL\",\"CLAY COUNTY\",\"0\",\"48115.94\",\"0\",\"0\",\"48115.94\",\"73798.5\",\"0\",\"0\",\"0\",\"0\",\"30.11824\",\"-81.745335\",\"Residential\",\"Wood\",\"3\"],[\"353022\",\"FL\",\"CLAY COUNTY\",\"0\",\"60946.79\",\"0\",\"0\",\"60946.79\",\"62467.29\",\"0\",\"0\",\"0\",\"0\",\"30.065799\",\"-81.717416\",\"Residential\",\"Wood\",\"1\"],[\"367814\",\"FL\",\"CLAY COUNTY\",\"0\",\"28869.12\",\"0\",\"0\",\"28869.12\",\"42727.74\",\"0\",\"0\",\"0\",\"0\",\"30.082993\",\"-81.710581\",\"Residential\",\"Wood\",\"1\"],[\"671392\",\"FL\",\"CLAY COUNTY\",\"0\",\"13410000\",\"0\",\"0\",\"13410000\",\"11700000\",\"0\",\"0\",\"0\",\"0\",\"30.091921\",\"-81.711929\",\"Commercial\",\"Reinforced Concrete\",\"3\"],[\"772887\",\"FL\",\"CLAY COUNTY\",\"0\",\"1669113.93\",\"0\",\"0\",\"1669113.93\",\"2099127.76\",\"0\",\"0\",\"0\",\"0\",\"30.117352\",\"-81.711884\",\"Residential\",\"Masonry\",\"1\"],[\"983122\",\"FL\",\"CLAY COUNTY\",\"0\",\"179562.23\",\"0\",\"0\",\"179562.23\",\"211372.57\",\"0\",\"0\",\"0\",\"0\",\"30.095783\",\"-81.713181\",\"Residential\",\"Wood\",\"3\"],[\"934215\",\"FL\",\"CLAY COUNTY\",\"0\",\"177744.16\",\"0\",\"0\",\"177744.16\",\"157171.16\",\"0\",\"0\",\"0\",\"0\",\"30.110518\",\"-81.727478\",\"Residential\",\"Wood\",\"1\"],[\"385951\",\"FL\",\"CLAY COUNTY\",\"0\",\"17757.58\",\"0\",\"0\",\"17757.58\",\"16948.72\",\"0\",\"0\",\"0\",\"0\",\"30.10288\",\"-81.705719\",\"Residential\",\"Wood\",\"1\"],[\"716332\",\"FL\",\"CLAY COUNTY\",\"0\",\"130129.87\",\"0\",\"0\",\"130129.87\",\"101758.43\",\"0\",\"0\",\"0\",\"0\",\"30.068468\",\"-81.71624\",\"Residential\",\"Wood\",\"1\"],[\"751262\",\"FL\",\"CLAY COUNTY\",\"0\",\"42854.77\",\"0\",\"0\",\"42854.77\",\"63592.88\",\"0\",\"0\",\"0\",\"0\",\"30.068468\",\"-81.71624\",\"Residential\",\"Wood\",\"1\"],[\"633663\",\"FL\",\"CLAY COUNTY\",\"0\",\"785.58\",\"0\",\"0\",\"785.58\",\"662.18\",\"0\",\"0\",\"0\",\"0\",\"30.068468\",\"-81.71624\",\"Residential\",\"Wood\",\"1\"],[\"105851\",\"FL\",\"CLAY COUNTY\",\"0\",\"170361.91\",\"0\",\"0\",\"170361.91\",\"177176.38\",\"0\",\"0\",\"0\",\"0\",\"30.068468\",\"-81.71624\",\"Residential\",\"Wood\",\"1\"],[\"710400\",\"FL\",\"CLAY COUNTY\",\"0\",\"1430.89\",\"0\",\"0\",\"1430.89\",\"1861.41\",\"0\",\"0\",\"0\",\"0\",\"30.068468\",\"-81.71624\",\"Residential\",\"Wood\",\"1\"]]\n\n//# sourceURL=webpack:///./assets/data.csv?");

/***/ }),

/***/ "./assets/webpack-logo.png":
/*!*********************************!*\
  !*** ./assets/webpack-logo.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"acb271fa8d88e8bae5f5921eb4b544a8.png\");\n\n//# sourceURL=webpack:///./assets/webpack-logo.png?");

/***/ }),

/***/ "./babel.js":
/*!******************!*\
  !*** ./babel.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// async function start() {\n//     return await Promise.resolve('async is working')\n//   }\n//   start().then(console.log)\n//   const unused = 42\n//   class Util {\n//     static id = Date.now()\n//   }\n//   console.log('Util Id:', Util.id)\n//   console.log(unused)\n//   import('lodash').then(_ => {\n//     console.log('Lodash', _.random(0, 42, true))\n//   })\n\n//# sourceURL=webpack:///./babel.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_Post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models/Post */ \"./models/Post.js\");\n/* harmony import */ var _assets_data_csv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/data.csv */ \"./assets/data.csv\");\n/* harmony import */ var _assets_data_csv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_data_csv__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_webpack_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/webpack-logo.png */ \"./assets/webpack-logo.png\");\n/* harmony import */ var _babel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./babel */ \"./babel.js\");\n/* harmony import */ var _babel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/styles.css */ \"./styles/styles.css\");\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/styles.scss */ \"./styles/styles.scss\");\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_5__);\n // import json from './assets/json.json'\n\n\n\n\n\n\nconst post = new _models_Post__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('WebPack Post title', _assets_webpack_logo_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"]); // console.log('Post to String:', post.toString())\n// console.log('JSON: ', json)\n// console.log('CSV: ', csv)\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./models/Post.js":
/*!************************!*\
  !*** ./models/Post.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Post; });\nclass Post {\n  constructor(title, img) {\n    this.title = title;\n    this.img = img;\n    this.date = new Date();\n  }\n\n  toString() {\n    return JSON.stringify({\n      title: this.title,\n      date: this.date.toJSON(),\n      img: this.img\n    });\n  }\n\n  get uppercaseTitle() {\n    return this.title.toUpperCase();\n  }\n\n}\n\n//# sourceURL=webpack:///./models/Post.js?");

/***/ }),

/***/ "./styles/styles.css":
/*!***************************!*\
  !*** ./styles/styles.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./styles/styles.css?");

/***/ }),

/***/ "./styles/styles.scss":
/*!****************************!*\
  !*** ./styles/styles.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./styles/styles.scss?");

/***/ })

/******/ });