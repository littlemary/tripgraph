/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/functions/slider.js":
/*!************************************!*\
  !*** ./src/js/functions/slider.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"main\": function() { return /* binding */ main; }\n/* harmony export */ });\nfunction main(){\r\n  const gallery = document.querySelector(\".gallery\");\r\n  const sliders = gallery.querySelectorAll(\".item\");\r\n  const sliderWrapper = gallery.querySelector(\".gallery-wrap\");\r\n  const sliderFields = gallery.querySelector(\".gallery-inner\");\r\n  let offset = 280;\r\n\r\n  // let width = sliders.length * 176 + (sliders.length - 1) * 58;\r\n  let width = sliders.length * 176;\r\n  sliderFields.style.width = `${width}px`;\r\n  let timerID = null;\r\n  const stop = () => {\r\n    if (timerID!=undefined){\r\n      clearInterval(timerID);\r\n      timerID = null;\r\n    }\r\n  }\r\n  const moveRight = () => {\r\n    if (!timerID){\r\n      timerID = setInterval(()=>{\r\n        offset+=10;\r\n        sliderFields.style.transform = `translateX(-${offset}px)`;\r\n        if (offset >= width){\r\n         stop();\r\n       }\r\n      }, 100);\r\n    }\r\n\r\n  }\r\n  const moveLeft = () => {\r\n    if (!timerID){\r\n      timerID = setInterval(()=>{\r\n        offset-=10;\r\n        sliderFields.style.transform = `translateX(-${offset}px)`;\r\n        if (offset == 0){\r\n         stop();\r\n       }\r\n      \r\n      }, 100);\r\n    }\r\n\r\n  }\r\n  \r\n\r\n  document.querySelector(\".gradright\").addEventListener(\"mouseover\", moveRight);\r\n  document.querySelector(\".gradright\").addEventListener(\"mouseout\", stop);\r\n\r\n  document.querySelector(\".gradright\").addEventListener(\"touchstart\", moveRight);\r\n  document.querySelector(\".gradright\").addEventListener(\"touchend\", stop);\r\n\r\n  document.querySelector(\".gradleft\").addEventListener(\"mouseover\", moveLeft);\r\n  document.querySelector(\".gradleft\").addEventListener(\"mouseout\", stop);\r\n\r\n  document.querySelector(\".gradleft\").addEventListener(\"touchstart\", moveLeft);\r\n  document.querySelector(\".gradleft\").addEventListener(\"touchend\", stop);\r\n}\n\n//# sourceURL=webpack://Food/./src/js/functions/slider.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _functions_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/slider */ \"./src/js/functions/slider.js\");\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", ()=>{\r\n\r\n  _functions_slider__WEBPACK_IMPORTED_MODULE_0__.main();\r\n\r\n});\n\n//# sourceURL=webpack://Food/./src/js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/script.js");
/******/ 	
/******/ })()
;