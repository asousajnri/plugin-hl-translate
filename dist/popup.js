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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/popup/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/libs/index.js":
/*!******************************!*\
  !*** ./src/js/libs/index.js ***!
  \******************************/
/*! exports provided: getSelected, translate, composition, operators, flags */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_getSelected__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/getSelected */ \"./src/js/libs/modules/getSelected.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getSelected\", function() { return _modules_getSelected__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _modules_translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/translate */ \"./src/js/libs/modules/translate.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"translate\", function() { return _modules_translate__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _modules_composition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/composition */ \"./src/js/libs/modules/composition.js\");\n/* harmony import */ var _modules_composition__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_composition__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, \"composition\", function() { return _modules_composition__WEBPACK_IMPORTED_MODULE_2___default.a; });\n/* harmony import */ var _modules_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/operators */ \"./src/js/libs/modules/operators.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"operators\", function() { return _modules_operators__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _modules_flags__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/flags */ \"./src/js/libs/modules/flags.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"flags\", function() { return _modules_flags__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/js/libs/index.js?");

/***/ }),

/***/ "./src/js/libs/modules/composition.js":
/*!********************************************!*\
  !*** ./src/js/libs/modules/composition.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var composition = function composition() {\n  for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {\n    functions[_key] = arguments[_key];\n  }\n\n  return function (valor) {\n    return functions.reduce(function (accumulatorValue, fn) {\n      return fn(accumulatorValue);\n    }, valor);\n  };\n};\n\n//# sourceURL=webpack:///./src/js/libs/modules/composition.js?");

/***/ }),

/***/ "./src/js/libs/modules/flags.js":
/*!**************************************!*\
  !*** ./src/js/libs/modules/flags.js ***!
  \**************************************/
/*! exports provided: countriesFlag, getOneImageFlagUrl, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"countriesFlag\", function() { return countriesFlag; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getOneImageFlagUrl\", function() { return getOneImageFlagUrl; });\nvar _countriesFlag;\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar countriesFlag = (_countriesFlag = {\n  italy: {\n    preffix: 'it',\n    image: '011-italy'\n  },\n  wales: {\n    preffix: 'cy',\n    image: '017-wales'\n  },\n  japan: {\n    preffix: 'ja',\n    image: '033-japan'\n  },\n  north_korea: {\n    preffix: 'ko',\n    image: '037-north-korea'\n  },\n  france: {\n    preffix: 'fr',\n    image: '077-france'\n  },\n  usa: {\n    preffix: 'en',\n    image: '153-united-states-of-america'\n  },\n  germanny: {\n    preffix: 'de',\n    image: '066-germany'\n  },\n  south_korea: {\n    preffix: 'ko',\n    image: '055-south-korea'\n  },\n  sweden: {\n    preffix: 'sv',\n    image: '073-sweden'\n  },\n  poland: {\n    preffix: 'pl',\n    image: '108-poland'\n  },\n  russo: {\n    preffix: 'ru',\n    image: '228-russia'\n  },\n  brazil: {\n    preffix: 'pt',\n    image: '250-brazil'\n  },\n  servia: {\n    preffix: 'sr',\n    image: '035-serbia'\n  },\n  eslovenia: {\n    preffix: 'sl',\n    image: '004-slovenia'\n  },\n  eslovakia: {\n    preffix: 'sk',\n    image: '045-slovakia'\n  },\n  espanha: {\n    preffix: 'es',\n    image: '044-spain'\n  },\n  africa_do_sul: {\n    preffix: 'af',\n    image: '075-south-africa'\n  },\n  albania: {\n    preffix: 'sq',\n    image: '117-albania'\n  },\n  arabe: {\n    preffix: 'ar',\n    image: '068-united-arab-emirates'\n  },\n  bosnio: {\n    preffix: 'bs',\n    image: '113-bosnia-and-herzegovina'\n  },\n  bulgaria: {\n    preffix: 'bs',\n    image: '135-bulgaria'\n  },\n  filandia: {\n    preffix: 'fi',\n    image: '052-finland'\n  }\n}, _defineProperty(_countriesFlag, \"filandia\", {\n  preffix: 'fi',\n  image: '052-finland'\n}), _defineProperty(_countriesFlag, \"grecia\", {\n  preffix: 'el',\n  image: '071-greece'\n}), _countriesFlag);\nvar getOneImageFlagUrl = function getOneImageFlagUrl(flagSelected) {\n  for (var flag in countriesFlag) {\n    if (countriesFlag[flag].preffix === flagSelected) {\n      return chrome.extension.getURL(\"images/flags/\".concat(countriesFlag[flag].image, \".png\"));\n    }\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  getOneImageFlagUrl: getOneImageFlagUrl,\n  countriesFlag: countriesFlag\n});\n\n//# sourceURL=webpack:///./src/js/libs/modules/flags.js?");

/***/ }),

/***/ "./src/js/libs/modules/getSelected.js":
/*!********************************************!*\
  !*** ./src/js/libs/modules/getSelected.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar getSelected = function getSelected() {\n  var get = function get() {\n    if (window.getSelection) {\n      return window.getSelection();\n    } else if (document.getSelection) {\n      return document.getSelection();\n    } else if (document.selection) {\n      return document.selection.createRange().text;\n    }\n  };\n\n  var objectSelection = get();\n  var selectedText = objectSelection.toString();\n  return {\n    objectSelection: objectSelection,\n    selectedText: selectedText\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getSelected);\n\n//# sourceURL=webpack:///./src/js/libs/modules/getSelected.js?");

/***/ }),

/***/ "./src/js/libs/modules/operators.js":
/*!******************************************!*\
  !*** ./src/js/libs/modules/operators.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  isApprovedTag: function isApprovedTag(tagTarget) {\n    return ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'span', 'b', 'em', 'code', 'a', 'li', 'small', 'div'].filter(function (tag) {\n      return tagTarget.toUpperCase() === tag.toUpperCase();\n    });\n  },\n  find: function find(data, word) {\n    if (data.length === 0 || data === undefined) return null;\n    var query = data.filter(function (value) {\n      return value.word === word;\n    });\n\n    if (query.length !== 0) {\n      return query;\n    } else {\n      return null;\n    }\n  },\n  hasWord: function hasWord(query) {\n    if (query) {\n      return true;\n    } else {\n      return false;\n    }\n  },\n  filter: function filter(data, word) {\n    return data.filter(function (value) {\n      return value.word !== word;\n    });\n  },\n  isElementValid: function isElementValid(elementTarget, elements) {\n    return elements.filter(function (element) {\n      return element === elementTarget;\n    }).length > 0 ? true : false;\n  },\n  isSelectedFlag: function isSelectedFlag(flags, flagToSelected) {\n    flags.map(function (flag) {\n      if (flag.flagItemHTML === flagToSelected) {\n        flag.flagItemHTML.classList.add('is-selected');\n        return true;\n      } else {\n        flag.flagItemHTML.classList.remove('is-selected');\n      }\n    });\n  }\n});\n\n//# sourceURL=webpack:///./src/js/libs/modules/operators.js?");

/***/ }),

/***/ "./src/js/libs/modules/translate.js":
/*!******************************************!*\
  !*** ./src/js/libs/modules/translate.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar translate = function translate(target) {\n  return /*#__PURE__*/function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(word) {\n      var key, response, _yield$response$json, data;\n\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              key = 'AIzaSyDCBDC0XEnIJ4Pjf5tjp0J0MdweYzV8NgI';\n              _context.next = 3;\n              return fetch(\"https://translation.googleapis.com/language/translate/v2/?key=\".concat(key), {\n                method: 'POST',\n                mode: 'cors',\n                body: JSON.stringify({\n                  q: [word],\n                  target: target\n                })\n              });\n\n            case 3:\n              response = _context.sent;\n              _context.next = 6;\n              return response.json();\n\n            case 6:\n              _yield$response$json = _context.sent;\n              data = _yield$response$json.data;\n              return _context.abrupt(\"return\", {\n                sourceLanguage: data.translations[0].detectedSourceLanguage,\n                translatedText: data.translations[0].translatedText\n              });\n\n            case 9:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function (_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (translate);\n\n//# sourceURL=webpack:///./src/js/libs/modules/translate.js?");

/***/ }),

/***/ "./src/js/popup/index.js":
/*!*******************************!*\
  !*** ./src/js/popup/index.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _libs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../libs */ \"./src/js/libs/index.js\");\n/* harmony import */ var _modules_renderFlags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/renderFlags */ \"./src/js/popup/modules/renderFlags.js\");\n/* harmony import */ var _modules_persist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/persist */ \"./src/js/popup/modules/persist.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n(function () {\n  var states = _modules_persist__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get();\n  var flagsItemLanguage = Object(_modules_renderFlags__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  var enableSwitcher = document.querySelector('.enable__switch input');\n  enableSwitcher.checked = states.enable;\n  enableSwitcher.addEventListener('click', function () {\n    _modules_persist__WEBPACK_IMPORTED_MODULE_2__[\"default\"].set(_objectSpread(_objectSpread({}, states), {}, {\n      enable: enableSwitcher.checked\n    }));\n  });\n  flagsItemLanguage.map(function (flag) {\n    var flagPreffix = flag.flagPreffix;\n    var flagItemHTML = flag.flagItemHTML;\n\n    if (flagPreffix === states.isSelectedFlag) {\n      flagItemHTML.classList.add('is-selected');\n    }\n\n    flagItemHTML.addEventListener('click', function () {\n      _libs__WEBPACK_IMPORTED_MODULE_0__[\"operators\"].isSelectedFlag(flagsItemLanguage, flagItemHTML);\n      _modules_persist__WEBPACK_IMPORTED_MODULE_2__[\"default\"].set(_objectSpread(_objectSpread({}, states), {}, {\n        isSelectedFlag: flagPreffix\n      }));\n    });\n  });\n})();\n\n//# sourceURL=webpack:///./src/js/popup/index.js?");

/***/ }),

/***/ "./src/js/popup/modules/persist.js":
/*!*****************************************!*\
  !*** ./src/js/popup/modules/persist.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar persist = function persist() {\n  var get = function get() {\n    return JSON.parse(localStorage.getItem('hl_translate_popup')) || null;\n  };\n\n  var set = function set(value) {\n    localStorage.setItem('hl_translate_popup', JSON.stringify(value)) || null;\n  };\n\n  var initialState = {\n    enable: false,\n    isSelectedFlag: 'en'\n  };\n\n  if (!get()) {\n    set(initialState);\n  }\n\n  return {\n    get: get,\n    set: set\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (persist());\n\n//# sourceURL=webpack:///./src/js/popup/modules/persist.js?");

/***/ }),

/***/ "./src/js/popup/modules/renderFlags.js":
/*!*********************************************!*\
  !*** ./src/js/popup/modules/renderFlags.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _libs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../libs */ \"./src/js/libs/index.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var languages = document.querySelector('.languages__list');\n  var languagesItems = [];\n\n  for (var flag in _libs__WEBPACK_IMPORTED_MODULE_0__[\"flags\"]) {\n    var itemList = document.createElement('LI');\n    var itemListImage = document.createElement('IMG');\n    itemListImage.setAttribute('src', chrome.extension.getURL(\"images/flags/\".concat(_libs__WEBPACK_IMPORTED_MODULE_0__[\"flags\"][flag].image, \".png\")));\n    itemList.appendChild(itemListImage);\n    languages.appendChild(itemList);\n    languagesItems.push({\n      flagPreffix: _libs__WEBPACK_IMPORTED_MODULE_0__[\"flags\"][flag].preffix,\n      flagItemHTML: itemList\n    });\n  }\n\n  return languagesItems;\n});\n\n//# sourceURL=webpack:///./src/js/popup/modules/renderFlags.js?");

/***/ })

/******/ });