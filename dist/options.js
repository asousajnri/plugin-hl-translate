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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/options/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/libs/index.js":
/*!******************************!*\
  !*** ./src/js/libs/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getSelected = __webpack_require__(/*! ./modules/getSelected */ \"./src/js/libs/modules/getSelected.js\");\n\nvar translate = __webpack_require__(/*! ./modules/translate */ \"./src/js/libs/modules/translate.js\");\n\nvar composition = __webpack_require__(/*! ./modules/composition */ \"./src/js/libs/modules/composition.js\");\n\nvar storage = __webpack_require__(/*! ./modules/storage */ \"./src/js/libs/modules/storage.js\");\n\nvar operators = __webpack_require__(/*! ./modules/operators */ \"./src/js/libs/modules/operators.js\");\n\nvar store = __webpack_require__(/*! ./modules/store */ \"./src/js/libs/modules/store.js\");\n\nmodule.exports = {\n  getSelected: getSelected,\n  translate: translate,\n  composition: composition,\n  storage: storage,\n  operators: operators,\n  store: store\n};\n\n//# sourceURL=webpack:///./src/js/libs/index.js?");

/***/ }),

/***/ "./src/js/libs/modules/composition.js":
/*!********************************************!*\
  !*** ./src/js/libs/modules/composition.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var composition = function composition() {\n  for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {\n    functions[_key] = arguments[_key];\n  }\n\n  return function (valor) {\n    return functions.reduce(function (acc, fn) {\n      return fn(acc);\n    }, valor);\n  };\n};\n\nmodule.exports = composition;\n\n//# sourceURL=webpack:///./src/js/libs/modules/composition.js?");

/***/ }),

/***/ "./src/js/libs/modules/getSelected.js":
/*!********************************************!*\
  !*** ./src/js/libs/modules/getSelected.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var getSelected = function getSelected() {\n  var get = function get() {\n    if (window.getSelection) {\n      return window.getSelection();\n    } else if (document.getSelection) {\n      return document.getSelection();\n    } else if (document.selection) {\n      return document.selection.createRange().text;\n    }\n  };\n\n  var objectSelection = get();\n  var selectedText = objectSelection.toString();\n  return {\n    objectSelection: objectSelection,\n    selectedText: selectedText\n  };\n};\n\nmodule.exports = getSelected;\n\n//# sourceURL=webpack:///./src/js/libs/modules/getSelected.js?");

/***/ }),

/***/ "./src/js/libs/modules/operators.js":
/*!******************************************!*\
  !*** ./src/js/libs/modules/operators.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  isApprovedTag: function isApprovedTag(tagTarget) {\n    return ['p', 'h1', 'h2', 'span', 'b', 'em', 'code', 'a'].filter(function (tag) {\n      return tagTarget.toUpperCase() === tag.toUpperCase();\n    });\n  },\n  find: function find(data, word) {\n    var query = data.filter(function (value) {\n      return value.word === word;\n    });\n\n    if (query.length !== 0) {\n      return query;\n    } else {\n      return null;\n    }\n  },\n  hasWord: function hasWord(query) {\n    if (query) {\n      return true;\n    } else {\n      return false;\n    }\n  },\n  filter: function filter(data, word) {\n    return data.filter(function (value) {\n      return value.word !== word;\n    });\n  }\n};\n\n//# sourceURL=webpack:///./src/js/libs/modules/operators.js?");

/***/ }),

/***/ "./src/js/libs/modules/storage.js":
/*!****************************************!*\
  !*** ./src/js/libs/modules/storage.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var storage = function storage() {\n  var set = function set(key, value) {\n    return localStorage.setItem(key, JSON.stringify(value));\n  };\n\n  var get = function get(key) {\n    return JSON.parse(localStorage.getItem(key)) || [];\n  };\n\n  return {\n    get: get,\n    set: set\n  };\n};\n\nmodule.exports = storage();\n\n//# sourceURL=webpack:///./src/js/libs/modules/storage.js?");

/***/ }),

/***/ "./src/js/libs/modules/store.js":
/*!**************************************!*\
  !*** ./src/js/libs/modules/store.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar operators = __webpack_require__(/*! ./operators */ \"./src/js/libs/modules/operators.js\");\n\nvar storage = __webpack_require__(/*! ./storage */ \"./src/js/libs/modules/storage.js\");\n\nvar store = function store() {\n  var filter = function filter(word) {\n    return operators.filter(get(), word);\n  };\n\n  var find = function find(word) {\n    return operators.find(get(), word);\n  };\n\n  var hasWord = function hasWord(word) {\n    return operators.hasWord(find(word));\n  };\n\n  var remove = function remove(word) {\n    return set(filter(word));\n  };\n\n  var get = function get() {\n    return storage.get('hl-translate');\n  };\n\n  var set = function set(value) {\n    return storage.set('hl-translate', value);\n  };\n\n  var add = function add(word, translate) {\n    var oldWords = get();\n    var newWords = {\n      word: word,\n      translate: translate\n    };\n    var updatedWords = oldWords ? [].concat(_toConsumableArray(oldWords), [newWords]) : [newWords];\n\n    if (!hasWord(word)) {\n      set(updatedWords);\n    }\n  };\n\n  return {\n    get: get,\n    remove: remove,\n    find: find,\n    hasWord: hasWord,\n    add: add\n  };\n};\n\nmodule.exports = store();\n\n//# sourceURL=webpack:///./src/js/libs/modules/store.js?");

/***/ }),

/***/ "./src/js/libs/modules/translate.js":
/*!******************************************!*\
  !*** ./src/js/libs/modules/translate.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar translate = function translate(target) {\n  return /*#__PURE__*/function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(word) {\n      var key, response, _yield$response$json, data;\n\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              key = 'AIzaSyDCBDC0XEnIJ4Pjf5tjp0J0MdweYzV8NgI';\n              _context.next = 3;\n              return fetch(\"https://translation.googleapis.com/language/translate/v2/?key=\".concat(key), {\n                method: 'POST',\n                mode: 'cors',\n                body: JSON.stringify({\n                  q: [word],\n                  target: target\n                })\n              });\n\n            case 3:\n              response = _context.sent;\n              _context.next = 6;\n              return response.json();\n\n            case 6:\n              _yield$response$json = _context.sent;\n              data = _yield$response$json.data;\n              return _context.abrupt(\"return\", {\n                sourceLanguage: data.translations[0].detectedSourceLanguage,\n                translatedText: data.translations[0].translatedText\n              });\n\n            case 9:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function (_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n};\n\nmodule.exports = translate;\n\n//# sourceURL=webpack:///./src/js/libs/modules/translate.js?");

/***/ }),

/***/ "./src/js/options/index.js":
/*!*********************************!*\
  !*** ./src/js/options/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _require = __webpack_require__(/*! ../libs/index */ \"./src/js/libs/index.js\"),\n    get = _require.store.get;\n\n(function () {\n  var allWords = get();\n  var tableWords = document.querySelector('.container__list-words');\n  var tableRow = document.createElement('LI');\n  tableRow.setAttribute('class', 'container__list-words__item word');\n  var tableRowContent = \"\\n  <div class=\\\"column\\\">\\n    <h3>Word</h3>\\n  </div>\\n  <div class=\\\"column\\\">\\n    <h3>Translate</h3>\\n  </div>\";\n  console.log(allWords);\n  tableRow.innerHTML = tableRowContent;\n  tableWords.appendChild(tableRow);\n})();\n\n//# sourceURL=webpack:///./src/js/options/index.js?");

/***/ })

/******/ });