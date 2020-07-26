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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_startStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/startStorage */ \"./src/js/background/modules/startStorage.js\");\n/* harmony import */ var _modules_chrome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/chrome */ \"./src/js/background/modules/chrome.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar hasTabSaved = function hasTabSaved() {\n  var colleTabs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  var tabId = arguments.length > 1 ? arguments[1] : undefined;\n  var colleTabsFiltered = colleTabs.filter(function (tab) {\n    return tab.tabId === tabId;\n  });\n\n  if (colleTabsFiltered.length > 0) {\n    return true;\n  } else {\n    return false;\n  }\n};\n\nvar addTabPluginIsActive = function addTabPluginIsActive(states, tabId) {\n  var newState = _objectSpread(_objectSpread({}, states), {}, {\n    tabsPluginIsActive: [].concat(_toConsumableArray(states.tabsPluginIsActive), [{\n      tabId: tabId,\n      pluginIsActive: true\n    }])\n  });\n\n  chrome.storage.sync.set({\n    'plugin_hl-t': newState\n  });\n};\n\nvar removeTabPluginIsActive = function removeTabPluginIsActive(states, tabId) {\n  var newState = _objectSpread(_objectSpread({}, states), {}, {\n    tabsPluginIsActive: _toConsumableArray(states.tabsPluginIsActive.filter(function (tab) {\n      return tab.tabId !== tabId;\n    }))\n  });\n\n  chrome.storage.sync.set({\n    'plugin_hl-t': newState\n  });\n};\n\nvar updateTabPluginIsActive = function updateTabPluginIsActive(states, tabId, newStateIsActive) {\n  var newState = _objectSpread(_objectSpread({}, states), {}, {\n    tabsPluginIsActive: [].concat(_toConsumableArray(states.tabsPluginIsActive.filter(function (tab) {\n      return tab.tabId !== tabId;\n    })), [{\n      tabId: tabId,\n      pluginIsActive: newStateIsActive\n    }])\n  });\n\n  chrome.storage.sync.set({\n    'plugin_hl-t': newState\n  });\n};\n\nvar pluginIsActiveOnStartPage = function pluginIsActiveOnStartPage(tabId) {\n  chrome.storage.sync.get(['plugin_hl-t'], function (response) {\n    var tabsPluginIsActive = response['plugin_hl-t'].tabsPluginIsActive;\n    tabsPluginIsActive.map(function (tabStorage) {\n      if (tabId === tabStorage.tabId) {\n        _modules_chrome__WEBPACK_IMPORTED_MODULE_1__[\"default\"].pluginIsActive(tabStorage.pluginIsActive, tabStorage.tabId);\n      }\n    });\n  });\n};\n\nchrome.tabs.onUpdated.addListener(function (tabIdOnUpdated, info) {\n  if (info.status === 'complete') {\n    pluginIsActiveOnStartPage(tabIdOnUpdated);\n  }\n});\nchrome.tabs.onCreated.addListener(function (_ref) {\n  var id = _ref.id;\n  pluginIsActiveOnStartPage(id);\n});\nchrome.tabs.onRemoved.addListener(function (tabId) {\n  chrome.storage.sync.get(['plugin_hl-t'], function (response) {\n    var states = response['plugin_hl-t'];\n    removeTabPluginIsActive(states, tabId);\n  });\n});\nchrome.browserAction.onClicked.addListener(function (_ref2) {\n  var id = _ref2.id;\n  chrome.storage.sync.get(['plugin_hl-t'], function (response) {\n    var states = response['plugin_hl-t'];\n    var tabsPluginIsActive = states.tabsPluginIsActive;\n\n    if (!hasTabSaved(tabsPluginIsActive, id)) {\n      addTabPluginIsActive(states, id);\n      _modules_chrome__WEBPACK_IMPORTED_MODULE_1__[\"default\"].pluginIsActive(true, id);\n    }\n\n    tabsPluginIsActive.map(function (tab) {\n      if (tab.tabId === id) {\n        if (tab.pluginIsActive) {\n          console.log('Plugin is False!');\n          _modules_chrome__WEBPACK_IMPORTED_MODULE_1__[\"default\"].pluginIsActive(false, tab.tabId);\n          updateTabPluginIsActive(states, tab.tabId, false);\n        } else {\n          console.log('Plugin is true!');\n          _modules_chrome__WEBPACK_IMPORTED_MODULE_1__[\"default\"].pluginIsActive(true, tab.tabId);\n          updateTabPluginIsActive(states, tab.tabId, true);\n        }\n      }\n    });\n  });\n});\n\n//# sourceURL=webpack:///./src/js/background/index.js?");

/***/ }),

/***/ "./src/js/background/modules/chrome.js":
/*!*********************************************!*\
  !*** ./src/js/background/modules/chrome.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  browserActionSetIcon: function browserActionSetIcon(statePlugin, tabId) {\n    var path = chrome.extension.getURL(\"icons/16\".concat(statePlugin ? '-on' : '', \".png\"));\n    chrome.browserAction.setIcon({\n      path: path,\n      tabId: tabId\n    });\n  },\n  sendMessageIsEnablePlugin: function sendMessageIsEnablePlugin(tabId, isEnablePlugin) {\n    chrome.tabs.sendMessage(tabId, {\n      isEnablePlugin: isEnablePlugin\n    });\n  },\n  pluginIsActive: function pluginIsActive(statePlugin, tabId) {\n    this.browserActionSetIcon(statePlugin, tabId);\n    this.sendMessageIsEnablePlugin(tabId, statePlugin);\n  }\n});\n\n//# sourceURL=webpack:///./src/js/background/modules/chrome.js?");

/***/ }),

/***/ "./src/js/background/modules/startStorage.js":
/*!***************************************************!*\
  !*** ./src/js/background/modules/startStorage.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((function () {\n  chrome.storage.sync.get(['plugin_hl-t'], function (response) {\n    var states = response['plugin_hl-t'];\n\n    if (!states) {\n      var initialStates = {\n        preffixCountry: 'pt',\n        tabsPluginIsActive: []\n      };\n      chrome.storage.sync.set({\n        'plugin_hl-t': initialStates\n      });\n    }\n  });\n})());\n\n//# sourceURL=webpack:///./src/js/background/modules/startStorage.js?");

/***/ })

/******/ });