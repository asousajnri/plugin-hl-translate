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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/background/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/background/index.js":
/*!************************************!*\
  !*** ./src/js/background/index.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_startStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/startStorage */ \"./src/js/background/modules/startStorage.js\");\n/* harmony import */ var _modules_chrome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/chrome */ \"./src/js/background/modules/chrome.js\");\n\n\nvar browserActionIsActive = false;\nchrome.browserAction.onClicked.addListener(function (tab) {\n  var tabId = tab.id;\n\n  if (browserActionIsActive) {\n    _modules_chrome__WEBPACK_IMPORTED_MODULE_1__[\"default\"].browserActionSetIcon(false, tabId);\n    _modules_chrome__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sendMessageIsEnablePlugin(false);\n    browserActionIsActive = false;\n  } else {\n    _modules_chrome__WEBPACK_IMPORTED_MODULE_1__[\"default\"].browserActionSetIcon(true, tabId);\n    _modules_chrome__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sendMessageIsEnablePlugin(true);\n    browserActionIsActive = true;\n  }\n});\n\n//# sourceURL=webpack:///./src/js/background/index.js?");

/***/ }),

/***/ "./src/js/background/modules/chrome.js":
/*!*********************************************!*\
  !*** ./src/js/background/modules/chrome.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  browserActionSetIcon: function browserActionSetIcon(state, tabId) {\n    var path = chrome.extension.getURL(\"icons/16\".concat(state ? '-on' : '', \".png\"));\n    chrome.browserAction.setIcon({\n      path: path,\n      tabId: tabId\n    });\n  },\n  browserActionSetIconOnLoadPage: function browserActionSetIconOnLoadPage() {\n    var _this = this;\n\n    chrome.storage.sync.get(['plugin_hl-t'], function (response) {\n      var _response$plugin_hlT = response['plugin_hl-t'],\n          enable = _response$plugin_hlT.enable,\n          preffixCountry = _response$plugin_hlT.preffixCountry;\n\n      if (enable) {\n        chrome.tabs.query({\n          active: true,\n          currentWindow: true\n        }, function (tabs) {\n          return _this.browserActionSetIcon('on', tabs[0].id);\n        });\n      } else {\n        chrome.tabs.query({\n          active: true,\n          currentWindow: true\n        }, function (tabs) {\n          return _this.browserActionSetIcon('off', tabs[0].id);\n        });\n      }\n    });\n  },\n  sendMessageIsEnablePlugin: function sendMessageIsEnablePlugin(enable) {\n    chrome.tabs.query({\n      active: true,\n      currentWindow: true\n    }, function (tabs) {\n      chrome.tabs.sendMessage(tabs[0].id, {\n        enable: enable\n      });\n    });\n  }\n});\n\n//# sourceURL=webpack:///./src/js/background/modules/chrome.js?");

/***/ }),

/***/ "./src/js/background/modules/startStorage.js":
/*!***************************************************!*\
  !*** ./src/js/background/modules/startStorage.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((function () {\n  chrome.storage.sync.get(['plugin_hl-t'], function (response) {\n    if (!response['plugin_hl-t']) {\n      var initialStates = {\n        enable: false,\n        preffixCountry: 'pt'\n      };\n      chrome.storage.sync.set({\n        'plugin_hl-t': initialStates\n      });\n    }\n  });\n})());\n\n//# sourceURL=webpack:///./src/js/background/modules/startStorage.js?");

/***/ })

/******/ });