/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/styles.css":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/styles.css ***!
  \********************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root{\\n    --board-width: 100%;\\n    --red0: hsl(356, 68%, 24%);\\n    --red1: hsl(356, 68%, 34%);\\n    --red2: hsl(357, 69%, 45%);\\n    --red3: hsl(357, 69%, 60%);\\n    --red4: hsl(357, 69%, 75%);\\n    --green0: hsl(95, 20%, 22%);\\n    --green1: hsl(95, 40%, 34%);\\n    --green2: hsl(95, 46%, 49%);\\n    --green3: hsl(95, 46%, 63%);\\n    --yellow0: hsl(50, 100%, 62%);\\n    --yellow1: hsl(50, 100%, 90%);\\n    --cell-bg-color: white;\\n}\\n*{\\n    margin: 0;\\n    padding: 0;\\n    box-sizing: border-box;\\n}\\nbody{\\n    min-height: 100vh;\\n    padding-top: 4vh;\\n    display: flex;\\n    flex-direction: column;\\n    gap: 1rem;\\n    background-color: #333;\\n    color: #ccc;\\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\\n}\\n.supreme-container{\\n    width: 100%;\\n    max-width: 700px;\\n    margin: 0 auto;\\n    padding: 0 1rem;\\n}\\n.title{\\n    margin-bottom: 1rem;\\n    text-align: center;\\n    color: #eee;\\n}\\n.grid{\\n    display: grid;\\n    grid-template-columns: 1fr;\\n    gap: 1rem;\\n}\\n\\n.board{\\n    min-width: 400px;\\n    width: var(--board-width);\\n    aspect-ratio: 1/1;\\n    background-color: #777;\\n    padding: 1rem;\\n    display: flex;\\n    flex-wrap: wrap;\\n    border-radius: 0.5rem;\\n}\\n.cell{\\n    height: calc(var(--board-width) / 15);\\n    background-color: var(--cell-bg-color);\\n}\\n.cell-15{\\n    width: calc(var(--board-width) / 15);\\n}\\n.cell-16{\\n    width: calc(var(--board-width) / 16);\\n}\\n.cell-17{\\n    width: calc(var(--board-width) / 17);\\n}\\n.cell-18{\\n    width: calc(var(--board-width) / 18);\\n}\\n.cell-19{\\n    width: calc(var(--board-width) / 19);\\n}\\n.cell-20{\\n    width: calc(var(--board-width) / 20);\\n}\\n.enemy, .hero{\\n    display: flex;\\n}\\n.enemy > svg{\\n    fill: var(--red3);\\n    max-width: 100%;\\n} \\n.hero > svg{\\n    fill: var(--green2);\\n    max-width: 100%;\\n}\\n.laser{\\n    background: linear-gradient(90deg, var(--cell-bg-color) 35%, var(--yellow0) 45% 46%, var(--yellow1) 47% 53%, var(--yellow0) 54% 55%, var(--cell-bg-color) 65% 100%);\\n}\\n/* ==================== grid right =================== */\\n.grid-left{\\n    display: flex;\\n    flex-direction: column;\\n    gap: 0.5rem;\\n    background-color: #222;\\n    padding: 1rem;\\n    border-radius: 0.5rem;\\n}\\n\\n.instructions-title{\\n    margin-bottom: 0.5rem;\\n    border-bottom: 1px solid #666;\\n}\\n.description{\\n    text-wrap: pretty;\\n}\\n.game-over-message{\\n    padding: 1rem;\\n    border-radius: 0.5rem;\\n    text-align: center;\\n    background-color: #ccc;\\n    color: #111;\\n    font-size: 1.2rem;\\n}\\n.hwrapper{\\n    display: flex;\\n    gap: 0.5rem;\\n    margin-top: auto;\\n}\\n.start-btn, .restart-btn, .reset-btn{\\n    padding: 0.5rem 1rem;\\n    font-family: inherit;\\n    font-size: 1.1rem;\\n    border: none;\\n    border-radius: 0.5rem;\\n    background-color: var(--green2);\\n    color: #111;\\n    transition: all 0.2s ease-in-out;\\n    cursor: pointer;\\n    flex-grow: 1;\\n    flex-basis: 0;\\n}\\n.reset-btn{\\n    background-color: var(--red3);\\n}\\n.reset-btn:hover{\\n    background-color: var(--red4);\\n}\\n.start-btn:hover, .restart-btn:hover{\\n    background-color: var(--green3);\\n}\\n.controls-container{\\n    padding: 0.8rem;\\n    border: 2px dashed #777;\\n    font-weight: bold;\\n    display: flex;\\n    flex-direction: column;\\n    gap: 0.3rem;\\n}\\n.settings-container{\\n    padding: 0.8rem;\\n    border: 2px dashed #777;\\n    font-weight: bold;\\n}\\n.settings-container > label{\\n    display: flex;\\n    flex-direction: column;\\n    gap: 0.2rem;\\n}\\n.faded-text{\\n    font-weight: normal;\\n    color: #999;\\n}\\nfooter{\\n    padding: 0.5rem 1rem;\\n    background-color: #111;\\n    margin-top: auto;\\n}\\nfooter > p{\\n    text-align: center;\\n}\\n.author{\\n    color: #ccc;\\n}\\n.author:hover{\\n    color: var(--red4);\\n}\\n.hidden{\\n    visibility: hidden;\\n}\\n.display-none{\\n    display: none;\\n}\\n\\n/* ======================= media queries ========================= */\\n@media screen and (min-width: 800px) {\\n    .instructions-title{\\n        font-size: 2rem;\\n    }\\n    .description{\\n        font-size: 1.1rem;\\n    }\\n    .controls-container, .settings-container{\\n        font-size: 1.1rem;\\n    }\\n}\\n\\n@media screen and (min-width: 900px) {\\n    .supreme-container{\\n        max-width: 1200px;\\n    }\\n    .grid{\\n        grid-template-columns: 1fr 1fr;\\n    }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://space-invaders/./src/styles.css?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://space-invaders/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://space-invaders/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://space-invaders/./src/styles.css?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ (function(module) {

"use strict";
eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://space-invaders/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ (function(module) {

"use strict";
eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://space-invaders/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ (function(module) {

"use strict";
eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://space-invaders/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://space-invaders/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";
eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://space-invaders/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ (function(module) {

"use strict";
eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://space-invaders/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("{function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _iterableToArray(r) { if (\"undefined\" != typeof Symbol && null != r[Symbol.iterator] || null != r[\"@@iterator\"]) return Array.from(r); }\nfunction _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\n__webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\nvar board = document.querySelector(\".board\");\nvar gameOverMsg = document.querySelector(\".game-over-message\");\nvar restartBtn = document.querySelector(\".restart-btn\");\nvar startBtn = document.querySelector(\".start-btn\");\nvar resetBtn = document.querySelector(\".reset-btn\");\nvar boardWidthInput = document.querySelector(\"#board-width-input\");\nvar boardWidthDisplay = document.querySelector(\".board-width-display\");\nvar DEFAULT_SETTINGS = {\n  boardWidth: 15,\n  boardHeight: 15,\n  enemySpeed: 200,\n  //ms\n  laserSpeed: 50 // ms\n};\n\n// game settings\nvar boardWidth = parseInt(boardWidthInput.value) || DEFAULT_SETTINGS.boardWidth;\nvar boardHeight = DEFAULT_SETTINGS.boardHeight;\nvar laserSpeed = DEFAULT_SETTINGS.laserSpeed;\nvar enemySpeed = DEFAULT_SETTINGS.enemySpeed;\nvar aliensFirstColumn, aliensLastColumn, domCellsArr, aliens, direction, gameOver, gameRunning, enemyRows;\nvar enemyInterval;\nfunction init() {\n  clearInterval(enemyInterval);\n  gameOver = false;\n  gameRunning = false;\n  board.innerHTML = \"\";\n  gameOverMsg.classList.add(\"hidden\");\n  domCellsArr = [];\n  direction = 1;\n  boardWidth = parseInt(boardWidthInput.value) || DEFAULT_SETTINGS.boardWidth;\n  boardWidthDisplay.textContent = boardWidthInput.value;\n  enemyRows = Math.round(boardWidth / 4);\n  var enemyRowMaxLen = Math.floor(boardWidth * 0.6);\n  var aliensSet = new Set(Array(enemyRows * Math.floor(boardWidth * 0.6)).fill(null).map(function (i) {\n    // generez inamicii in felul urmator\n    // enemyRows - nr de randuri de inamici. fiecare rand o sa aiba lungime de maxim 60% din latimea tablei\n    // e.g. pt o latime de 15 casute vor fi maxim 9 inamici intr-un rand\n    // restul de minim 40% spatiu liber se va imparti cat de egal se poate in stanga si in dreapta grupului de inamici\n\n    return Math.floor(Math.random() * enemyRows) * boardWidth + Math.floor(Math.random() * enemyRowMaxLen + Math.floor((boardWidth - enemyRowMaxLen) / 2));\n  }));\n  aliens = _toConsumableArray(aliensSet);\n  aliensFirstColumn = Array(enemyRows).fill(null).map(function (item, index) {\n    return index * boardWidth + Math.floor((boardWidth - enemyRowMaxLen) / 2);\n  });\n  aliensLastColumn = Array(enemyRows).fill(null).map(function (item, index) {\n    return index * boardWidth + Math.floor((boardWidth - enemyRowMaxLen) / 2) + enemyRowMaxLen - 1;\n  });\n  createBoard();\n}\nfunction createBoard() {\n  for (var i = 0; i < boardWidth * boardHeight; i++) {\n    var domCell = document.createElement(\"div\");\n    domCell.classList.add(\"cell\");\n    domCell.classList.add(\"cell-\".concat(boardWidth));\n    domCell.id = i;\n    domCellsArr.push(domCell);\n    board.appendChild(domCell);\n  }\n  paintBoard();\n  domCellsArr[Math.floor(domCellsArr.length - boardWidth / 2)].classList.add(\"hero\");\n  domCellsArr[Math.floor(domCellsArr.length - boardWidth / 2)].innerHTML = \"<svg\\n        viewBox=\\\"0 0 24 24\\\"\\n        role=\\\"presentation\\\"\\n        version=\\\"1.1\\\"\\n        id=\\\"svg8814\\\"\\n        xmlns=\\\"http://www.w3.org/2000/svg\\\"\\n        xmlns:svg=\\\"http://www.w3.org/2000/svg\\\">\\n        <defs\\n            id=\\\"defs8818\\\" />\\n        <path\\n            d=\\\"m 10.166666,11.25 c 0,-0.916667 0.916668,-1.8333334 1.833334,-1.8333334 0.916666,0 1.833334,0.9166664 1.833334,1.8333334 0,0.916666 -0.916668,1.833334 -1.833334,1.833334 -0.916666,0 -1.833334,-0.916668 -1.833334,-1.833334 z M 14.75,3.75 C 13.163818,1.5740473 12,1 12,1 12,1 10.836182,1.5740473 9.25,3.75 7.6638173,5.9259527 8.2591248,12.07356 6.5,14.75 4.7408752,17.42644 2.9773562,17.901788 1.9166666,19.333334 1.166646,20.345588 1,23 1,23 c 0,0 1.7962253,-0.761891 2.75,-0.916667 2.1112705,-0.342612 4.9042438,-1.512423 6.416666,0 0.21606,0.216061 0,0.916667 0,0.916667 h 3.666668 c 0,0 -0.21606,-0.700606 0,-0.916667 1.512422,-1.512423 4.305396,-0.342612 6.416666,0 C 21.203776,22.238109 23,23 23,23 23,23 22.833354,20.345588 22.083334,19.333334 21.022644,17.901788 19.259125,17.42644 17.5,14.75 15.740875,12.07356 16.336182,5.9259527 14.75,3.75 Z\\\"\\n            id=\\\"path8812\\\" />\\n        </svg>\";\n}\n\n// se ocupa doar de desenarea vrajmasilor\nfunction paintBoard() {\n  for (var i = 0; i < domCellsArr.length; i++) {\n    if (domCellsArr[i].classList.contains(\"enemy\")) {\n      domCellsArr[i].classList.remove(\"enemy\");\n      domCellsArr[i].innerHTML = \"\";\n    }\n  }\n  for (var _i = 0; _i < aliens.length; _i++) {\n    if (domCellsArr[aliens[_i]].classList.contains(\"hero\")) {\n      domCellsArr[aliens[_i]].classList.remove(\"hero\");\n    }\n    domCellsArr[aliens[_i]].classList.add(\"enemy\");\n    domCellsArr[aliens[_i]].innerHTML = \"\\n        <svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 24 24\\\"><path d=\\\"M17 10.54C16.78 7.44 14.63 5 12 5S7.22 7.44 7 10.54C4 11.23 2 12.5 2 14C2 16.21 6.5 18 12 18S22 16.21 22 14C22 12.5 20 11.23 17 10.54M14.93 11.84C13.03 12.05 10.97 12.05 9.07 11.84C9.03 11.56 9 11.28 9 11C9 8.8 10.35 7 12 7S15 8.8 15 11C15 11.28 15 11.56 14.93 11.84Z\\\" /></svg>\";\n  }\n}\n\n// se ocupa si de logica lui hero si de desenarea lui\nfunction moveHero(e) {\n  if (gameOver) return;\n  var hero = board.querySelector(\".hero\");\n  var leftEdge = domCellsArr.length - boardWidth;\n  var rightEdge = domCellsArr.length - 1;\n  if (e.code === \"ArrowLeft\" && parseInt(hero.id) > leftEdge) {\n    hero.classList.remove(\"hero\");\n    hero.innerHTML = \"\";\n    hero.previousElementSibling.classList.add(\"hero\");\n    hero.previousElementSibling.innerHTML = \"<svg\\n            viewBox=\\\"0 0 24 24\\\"\\n            role=\\\"presentation\\\"\\n            version=\\\"1.1\\\"\\n            id=\\\"svg8814\\\"\\n            xmlns=\\\"http://www.w3.org/2000/svg\\\"\\n            xmlns:svg=\\\"http://www.w3.org/2000/svg\\\">\\n            <defs\\n                id=\\\"defs8818\\\" />\\n            <path\\n                d=\\\"m 10.166666,11.25 c 0,-0.916667 0.916668,-1.8333334 1.833334,-1.8333334 0.916666,0 1.833334,0.9166664 1.833334,1.8333334 0,0.916666 -0.916668,1.833334 -1.833334,1.833334 -0.916666,0 -1.833334,-0.916668 -1.833334,-1.833334 z M 14.75,3.75 C 13.163818,1.5740473 12,1 12,1 12,1 10.836182,1.5740473 9.25,3.75 7.6638173,5.9259527 8.2591248,12.07356 6.5,14.75 4.7408752,17.42644 2.9773562,17.901788 1.9166666,19.333334 1.166646,20.345588 1,23 1,23 c 0,0 1.7962253,-0.761891 2.75,-0.916667 2.1112705,-0.342612 4.9042438,-1.512423 6.416666,0 0.21606,0.216061 0,0.916667 0,0.916667 h 3.666668 c 0,0 -0.21606,-0.700606 0,-0.916667 1.512422,-1.512423 4.305396,-0.342612 6.416666,0 C 21.203776,22.238109 23,23 23,23 23,23 22.833354,20.345588 22.083334,19.333334 21.022644,17.901788 19.259125,17.42644 17.5,14.75 15.740875,12.07356 16.336182,5.9259527 14.75,3.75 Z\\\"\\n                id=\\\"path8812\\\" />\\n            </svg>\";\n  }\n  if (e.code === \"ArrowRight\" && parseInt(hero.id) < rightEdge) {\n    hero.classList.remove(\"hero\");\n    hero.innerHTML = \"\";\n    hero.nextElementSibling.classList.add(\"hero\");\n    hero.nextElementSibling.innerHTML = \"<svg\\n            viewBox=\\\"0 0 24 24\\\"\\n            role=\\\"presentation\\\"\\n            version=\\\"1.1\\\"\\n            id=\\\"svg8814\\\"\\n            xmlns=\\\"http://www.w3.org/2000/svg\\\"\\n            xmlns:svg=\\\"http://www.w3.org/2000/svg\\\">\\n            <defs\\n                id=\\\"defs8818\\\" />\\n            <path\\n                d=\\\"m 10.166666,11.25 c 0,-0.916667 0.916668,-1.8333334 1.833334,-1.8333334 0.916666,0 1.833334,0.9166664 1.833334,1.8333334 0,0.916666 -0.916668,1.833334 -1.833334,1.833334 -0.916666,0 -1.833334,-0.916668 -1.833334,-1.833334 z M 14.75,3.75 C 13.163818,1.5740473 12,1 12,1 12,1 10.836182,1.5740473 9.25,3.75 7.6638173,5.9259527 8.2591248,12.07356 6.5,14.75 4.7408752,17.42644 2.9773562,17.901788 1.9166666,19.333334 1.166646,20.345588 1,23 1,23 c 0,0 1.7962253,-0.761891 2.75,-0.916667 2.1112705,-0.342612 4.9042438,-1.512423 6.416666,0 0.21606,0.216061 0,0.916667 0,0.916667 h 3.666668 c 0,0 -0.21606,-0.700606 0,-0.916667 1.512422,-1.512423 4.305396,-0.342612 6.416666,0 C 21.203776,22.238109 23,23 23,23 23,23 22.833354,20.345588 22.083334,19.333334 21.022644,17.901788 19.259125,17.42644 17.5,14.75 15.740875,12.07356 16.336182,5.9259527 14.75,3.75 Z\\\"\\n                id=\\\"path8812\\\" />\\n            </svg>\";\n  }\n}\n\n// defineste logica miscarii dusmanilor\nfunction moveEnemy() {\n  if (aliensLastColumn.some(function (item) {\n    return item % boardWidth === boardWidth - 1;\n  }) && direction === 1) {\n    direction = -1;\n    for (var i = 0; i < aliens.length; i++) {\n      aliens[i] += boardWidth;\n    }\n    paintBoard();\n    checkForLose();\n    return;\n  }\n  if (aliensFirstColumn.some(function (item) {\n    return item % boardWidth === 0;\n  }) && direction === -1) {\n    direction = 1;\n    for (var _i2 = 0; _i2 < aliens.length; _i2++) {\n      aliens[_i2] += boardWidth;\n    }\n    paintBoard();\n    checkForLose();\n    return;\n  }\n  for (var _i3 = 0; _i3 < aliens.length; _i3++) {\n    aliens[_i3] += direction;\n  }\n  aliensFirstColumn = aliensFirstColumn.map(function (item) {\n    return item += direction;\n  });\n  aliensLastColumn = aliensLastColumn.map(function (item) {\n    return item += direction;\n  });\n  paintBoard();\n}\n// verifica daca am iesit victoriosi\nfunction checkForWin() {\n  if (aliens.length === 0) {\n    clearInterval(enemyInterval);\n    gameRunning = false;\n    boardWidthInput.disabled = false;\n    gameOver = true;\n    gameOverMsg.classList.remove(\"hidden\");\n    gameOverMsg.innerText = \"What a glorious victory!\";\n  }\n}\n// verifica daca am fost infranti\nfunction checkForLose() {\n  // verific randul pe care se afla hero, primul de jos\n  for (var i = domCellsArr.length - 1; i >= domCellsArr.length - boardWidth; i--) {\n    if (domCellsArr[i].classList.contains(\"enemy\")) {\n      clearInterval(enemyInterval);\n      gameRunning = false;\n      boardWidthInput.disabled = false;\n      gameOver = true;\n      gameOverMsg.classList.remove(\"hidden\");\n      gameOverMsg.innerText = \"You have been defeated...\";\n      return;\n    }\n  }\n}\n// se ocupa de logica laserului si de desenarea lui\nfunction shootLaser(e) {\n  if (gameOver) return;\n  if (e.code === \"KeyZ\") {\n    var hero = document.querySelector(\".hero\");\n    var heroId = hero.id;\n    var laserId = heroId - boardWidth;\n    domCellsArr[laserId].classList.add(\"laser\");\n    var laserMove = setInterval(function () {\n      domCellsArr[laserId].classList.remove(\"laser\");\n      laserId -= boardWidth;\n      domCellsArr[laserId].classList.add(\"laser\");\n      if (domCellsArr[laserId].classList.contains(\"enemy\")) {\n        clearInterval(laserMove);\n        domCellsArr[laserId].classList.remove(\"enemy\", \"laser\");\n        domCellsArr[laserId].innerHTML = \"\";\n        aliens.splice(aliens.indexOf(laserId), 1);\n        checkForWin();\n      }\n      if (laserId < boardWidth) {\n        clearInterval(laserMove);\n        domCellsArr[laserId].classList.remove(\"laser\");\n      }\n    }, laserSpeed);\n  }\n}\n\n// ========================== event listeners ==============================\n\nboardWidthInput.addEventListener(\"input\", function (e) {\n  if (gameRunning) return;\n  boardWidthDisplay.textContent = e.target.value;\n});\nboardWidthInput.addEventListener(\"change\", function (e) {\n  if (gameRunning) return;\n  document.removeEventListener(\"keydown\", moveHero);\n  document.removeEventListener(\"keydown\", shootLaser);\n  boardWidth = parseInt(e.target.value);\n  startBtn.disabled = false;\n  startBtn.classList.remove(\"display-none\");\n  restartBtn.disabled = true;\n  restartBtn.classList.add(\"display-none\");\n  init();\n});\nrestartBtn.addEventListener(\"click\", function () {\n  init();\n  gameRunning = true;\n  boardWidthInput.disabled = true;\n  // de o bagat intr-un setTimeout ?\n  // sa avem 1-2 sec de get ready\n  enemyInterval = setInterval(moveEnemy, enemySpeed);\n});\nstartBtn.addEventListener(\"click\", function () {\n  document.addEventListener(\"keydown\", moveHero);\n  document.addEventListener(\"keydown\", shootLaser);\n  startBtn.disabled = true;\n  startBtn.classList.add(\"display-none\");\n  restartBtn.disabled = false;\n  restartBtn.classList.remove(\"display-none\");\n  gameRunning = true;\n  boardWidthInput.disabled = true;\n  enemyInterval = setInterval(moveEnemy, enemySpeed);\n});\nresetBtn.addEventListener(\"click\", function () {\n  gameRunning = false;\n  clearInterval(enemyInterval);\n  document.removeEventListener(\"keydown\", moveHero);\n  document.removeEventListener(\"keydown\", shootLaser);\n  boardWidthInput.disabled = false;\n  startBtn.disabled = false;\n  startBtn.classList.remove(\"display-none\");\n  restartBtn.disabled = true;\n  restartBtn.classList.add(\"display-none\");\n  init();\n});\ninit();\n\n//# sourceURL=webpack://space-invaders/./src/script.js?\n}");

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	!function() {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;