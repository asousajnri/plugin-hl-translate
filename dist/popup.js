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

/***/ "./src/js/popup/index.js":
/*!*******************************!*\
  !*** ./src/js/popup/index.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_renderFlags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/renderFlags */ \"./src/js/popup/modules/renderFlags.js\");\n/* harmony import */ var _modules_isSelectedFlag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/isSelectedFlag */ \"./src/js/popup/modules/isSelectedFlag.js\");\n\n\n\n(function () {\n  var flagsItemLanguage = Object(_modules_renderFlags__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  flagsItemLanguage.map(function (flag) {\n    return flag.flagItemHTML.addEventListener('click', function () {\n      Object(_modules_isSelectedFlag__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(flagsItemLanguage, this);\n    });\n  });\n  console.log(flagsItemLanguage);\n})();\n\n//# sourceURL=webpack:///./src/js/popup/index.js?");

/***/ }),

/***/ "./src/js/popup/modules/flags.js":
/*!***************************************!*\
  !*** ./src/js/popup/modules/flags.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar _italy$wales$japan$no;\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_italy$wales$japan$no = {\n  italy: {\n    preffix: 'it',\n    image: '011-italy'\n  },\n  wales: {\n    preffix: 'cy',\n    image: '017-wales'\n  },\n  japan: {\n    preffix: 'ja',\n    image: '033-japan'\n  },\n  north_korea: {\n    preffix: 'ko',\n    image: '037-north-korea'\n  },\n  france: {\n    preffix: 'fr',\n    image: '077-france'\n  },\n  usa: {\n    preffix: 'en',\n    image: '153-united-states-of-america'\n  },\n  germanny: {\n    preffix: 'de',\n    image: '066-germany'\n  },\n  portugal: {\n    preffix: 'pt',\n    image: '174-portugal'\n  },\n  south_korea: {\n    preffix: 'ko',\n    image: '055-south-korea'\n  },\n  sweden: {\n    preffix: 'sv',\n    image: '073-sweden'\n  },\n  poland: {\n    preffix: 'pl',\n    image: '108-poland'\n  },\n  russo: {\n    preffix: 'ru',\n    image: '228-russia'\n  },\n  servia: {\n    preffix: 'sr',\n    image: '035-serbia'\n  },\n  eslovenia: {\n    preffix: 'sl',\n    image: '004-slovenia'\n  },\n  eslovakia: {\n    preffix: 'sk',\n    image: '045-slovakia'\n  },\n  espanha: {\n    preffix: 'es',\n    image: '044-spain'\n  },\n  africa_do_sul: {\n    preffix: 'af',\n    image: '075-south-africa'\n  },\n  albania: {\n    preffix: 'sq',\n    image: '117-albania'\n  },\n  arabe: {\n    preffix: 'ar',\n    image: '068-united-arab-emirates'\n  },\n  bosnio: {\n    preffix: 'bs',\n    image: '113-bosnia-and-herzegovina'\n  },\n  bulgaria: {\n    preffix: 'bs',\n    image: '135-bulgaria'\n  },\n  filandia: {\n    preffix: 'fi',\n    image: '052-finland'\n  }\n}, _defineProperty(_italy$wales$japan$no, \"filandia\", {\n  preffix: 'fi',\n  image: '052-finland'\n}), _defineProperty(_italy$wales$japan$no, \"grecia\", {\n  preffix: 'el',\n  image: '071-greece'\n}), _italy$wales$japan$no);\n\n//# sourceURL=webpack:///./src/js/popup/modules/flags.js?");

/***/ }),

/***/ "./src/js/popup/modules/isSelectedFlag.js":
/*!************************************************!*\
  !*** ./src/js/popup/modules/isSelectedFlag.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (flags, flagToSelected) {\n  return flags.map(function (flag) {\n    if (flag.flagItemHTML === flagToSelected) {\n      flag.flagItemHTML.classList.add('is-selected');\n      return true;\n    } else {\n      flag.flagItemHTML.classList.remove('is-selected');\n    }\n  });\n});\n\n//# sourceURL=webpack:///./src/js/popup/modules/isSelectedFlag.js?");

/***/ }),

/***/ "./src/js/popup/modules/renderFlags.js":
/*!*********************************************!*\
  !*** ./src/js/popup/modules/renderFlags.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _flags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flags */ \"./src/js/popup/modules/flags.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var languages = document.querySelector('.languages__list');\n  var languagesItems = [];\n\n  for (var flag in _flags__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n    var itemList = document.createElement('LI');\n    var itemListImage = document.createElement('IMG');\n    itemListImage.setAttribute('src', chrome.extension.getURL(\"images/flags/\".concat(_flags__WEBPACK_IMPORTED_MODULE_0__[\"default\"][flag].image, \".png\")));\n    itemList.appendChild(itemListImage);\n    languages.appendChild(itemList);\n    languagesItems.push({\n      flagPreffix: _flags__WEBPACK_IMPORTED_MODULE_0__[\"default\"][flag].preffix,\n      flagItemHTML: itemList\n    });\n  }\n\n  return languagesItems;\n});\n\n//# sourceURL=webpack:///./src/js/popup/modules/renderFlags.js?");

/***/ })

/******/ });