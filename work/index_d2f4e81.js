define("mirror-san/app/car_brand_kg_ideal/index_d2f4e81", ["@baidu/ala-util/san-component","@baidu/www-api","san",searchComponentsIdMap["LinkNew_LinkNew"],"cosmic-card/title",searchComponentsIdMap["Paragraph_Paragraph"],"cosmic/image","cosmic/icon",searchComponentsIdMap["Grid_Row"],searchComponentsIdMap["Grid_Col"],"cosmic/tag","cosmic-card/card","cosmic/more-link",searchComponentsIdMap["TagNew_TagNew"],searchComponentsIdMap["Image_Image"],"cosmic/button",searchComponentsIdMap["Aladdin_Aladdin"],searchComponentsIdMap["Title_GroupTitle"],searchComponentsIdMap["Title_Title"],searchComponentsIdMap["Source_Source"],searchComponentsIdMap["Feedback_Feedback"],searchComponentsIdMap["Tabs_Tabs"],searchComponentsIdMap["Tabs_TabPane"],searchComponentsIdMap["More_More"],searchComponentsIdMap["Price_Price"],searchComponentsIdMap["ButtonNew_ButtonNew"],"@baidu/better-scroll",searchComponentsIdMap["Icon_Icon"],"cosmic-card/feedback","cosmic/tabs","cosmic/tab","cosmic/tab-pane"], function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__5__, __WEBPACK_EXTERNAL_MODULE__6__, __WEBPACK_EXTERNAL_MODULE__7__, __WEBPACK_EXTERNAL_MODULE__9__, __WEBPACK_EXTERNAL_MODULE__10__, __WEBPACK_EXTERNAL_MODULE__11__, __WEBPACK_EXTERNAL_MODULE__12__, __WEBPACK_EXTERNAL_MODULE__13__, __WEBPACK_EXTERNAL_MODULE__14__, __WEBPACK_EXTERNAL_MODULE__15__, __WEBPACK_EXTERNAL_MODULE__19__, __WEBPACK_EXTERNAL_MODULE__21__, __WEBPACK_EXTERNAL_MODULE__22__, __WEBPACK_EXTERNAL_MODULE__23__, __WEBPACK_EXTERNAL_MODULE__48__, __WEBPACK_EXTERNAL_MODULE__49__, __WEBPACK_EXTERNAL_MODULE__54__, __WEBPACK_EXTERNAL_MODULE__56__, __WEBPACK_EXTERNAL_MODULE__57__, __WEBPACK_EXTERNAL_MODULE__59__, __WEBPACK_EXTERNAL_MODULE__60__, __WEBPACK_EXTERNAL_MODULE__61__, __WEBPACK_EXTERNAL_MODULE__62__, __WEBPACK_EXTERNAL_MODULE__63__, __WEBPACK_EXTERNAL_MODULE__66__, __WEBPACK_EXTERNAL_MODULE__68__, __WEBPACK_EXTERNAL_MODULE__73__, __WEBPACK_EXTERNAL_MODULE__77__, __WEBPACK_EXTERNAL_MODULE__78__, __WEBPACK_EXTERNAL_MODULE__79__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "static/mirror-san/" + ({"1":"vendors~guarantee-popper-h5"}[chunkId]||chunkId) + "_" + {"1":"280c05b"}[chunkId] + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "/cache/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackjsonp_chunkname_2341281"] = window["webpackjsonp_chunkname_2341281"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 82);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesClient; });

// CONCATENATED MODULE: ./node_modules/@hoth/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/@hoth/vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _options.runAsProduction ? true : _isProduction

  options = _options || {}
  if (options.insert) {
    options.parentNode = document.querySelector(options.insert) || head;
  }

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles, options)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles, options)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement (parentNode) {
  var styleElement = document.createElement('style')
  var attributes = options.attributes || {}
  styleElement.type = 'text/css'
  for (var key in attributes) {
    if (attributes.hasOwnProperty(key)) {
      styleElement.setAttribute(key, attributes[key]);
    }
  }
  parentNode = parentNode || head;
  parentNode.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */, options) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement(options.parentNode))
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement(options.parentNode)
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) Baidu Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license.
 * See LICENSE file in the project root for license information.
 *
 * @file normalize.js
 * @author clark-t
 */

/* eslint-disable prefer-rest-params */

var defineComponent = __webpack_require__(5).defineComponent;

/**
 * 处理 .san 组件 script 与 template 等部分的组合方法
 *
 * @param {Object|Function} script 组件 script 部分
 * @param {string} template 组件 template 部分的文本
 * @param {string} injectStyles 组件需要注入的 style 列表
 * @return {Class} 组件类
 */
module.exports = function (script, template, injectStyles) {
    var dfns = componentDefinitions(script);
    for (var i = 0; i < dfns.length; i++) {
        if (template) {
            if (typeof template === 'string') {
                dfns[i].template = template;
            }
            else if (template instanceof Array) {
                dfns[i].aPack = template;
            }
            else {
                dfns[i].aNode = template;
            }
        }
        if (injectStyles.length) {
            injectStylesIntoInitData(dfns[i], injectStyles);
        }
    }

    return typeof script === 'object' ? defineComponent(script) : script;
};

function injectStylesIntoInitData(proto, injectStyles) {
    var style = {};
    var defaultStyle = {};
    for (var i = 0; i < injectStyles.length; i++) {
        if (injectStyles[i].exportAs) {
            style['$' + injectStyles[i].exportAs] = injectStyles[i].style;
        }
        else {
            objectAssign(defaultStyle, injectStyles[i].style);
        }
    }
    style.$style = defaultStyle;

    var original = proto.initData;
    proto.initData = original
        ? function () {
            return objectAssign({}, original.call(this), style);
        }
        : function () {
            return style;
        };
}

function componentDefinitions(cmpt) {
    // 当 script 为 Function 时，等价于 class A { static template = 'xxx' }
    // 可查看 static property 的 babel 编译产物
    var dfns = [cmpt];
    // 对于联合 san-store 的情况，需要同时将 template, inited 等挂到原型链上
    if (typeof cmpt === 'function') {
        dfns.push(cmpt.prototype);
        if (cmpt.prototype.constructor) {
            dfns.push(cmpt.prototype.constructor.prototype);
        }
    }
    return dfns;
}

// 参考：https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Polyfill
function objectAssign(target) {
    'use strict';
    if (target === null || target === undefined) {
        throw new TypeError('Cannot convert undefined or null to object');
    }

    var to = Object(target);

    for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource !== null && nextSource !== undefined) {
            for (var nextKey in nextSource) {
                if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                    to[nextKey] = nextSource[nextKey];
                }
            }
        }
    }
    return to;
}


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__5__;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__6__;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__7__;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(3);
        var style0 = __webpack_require__(95);
var injectStyles = [{exportAs: undefined, style: style0}];

        var template = __webpack_require__(97);
        
        var script = __webpack_require__(27).default;
        module.exports = __webpack_require__(27);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__9__;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__10__;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__11__;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__12__;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__13__;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__14__;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__15__;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(3);
        var style0 = __webpack_require__(89);
var injectStyles = [{exportAs: undefined, style: style0}];

        var template = __webpack_require__(91);
        
        var script = __webpack_require__(25).default;
        module.exports = __webpack_require__(25);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(3);
        var style0 = __webpack_require__(116);
var injectStyles = [{exportAs: undefined, style: style0}];

        var template = __webpack_require__(118);
        
        var script = __webpack_require__(32).default;
        module.exports = __webpack_require__(32);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(3);
        var style0 = __webpack_require__(119);
var injectStyles = [{exportAs: undefined, style: style0}];

        var template = __webpack_require__(121);
        
        var script = __webpack_require__(33).default;
        module.exports = __webpack_require__(33);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__19__;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(3);
        var seriesLevel = __webpack_require__(133);
var seriesLevelPc = __webpack_require__(135);
var style2 = __webpack_require__(137);
var injectStyles = [{exportAs: 'seriesLevel', style: seriesLevel}, {exportAs: 'seriesLevelPc', style: seriesLevelPc}, {exportAs: undefined, style: style2}];

        var template = __webpack_require__(139);
        
        var script = __webpack_require__(35).default;
        module.exports = __webpack_require__(35);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__21__;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__22__;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__23__;

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var san__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var san__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(san__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baidu_cosmic_card_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var _baidu_cosmic_card_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_baidu_cosmic_card_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _baidu_search_components_Aladdin_Aladdin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48);
/* harmony import */ var _baidu_search_components_Aladdin_Aladdin__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_baidu_search_components_Aladdin_Aladdin__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _baidu_search_components_Title_GroupTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49);
/* harmony import */ var _baidu_search_components_Title_GroupTitle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_baidu_search_components_Title_GroupTitle__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_component_car_component_car_header_cosmic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16);
/* harmony import */ var _app_component_car_component_car_header_cosmic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_app_component_car_component_car_header_cosmic__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_component_car_component_car_new_kg_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(53);
/* harmony import */ var _app_component_car_component_car_new_kg_header__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_app_component_car_component_car_new_kg_header__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_component_car_component_car_source_new__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55);
/* harmony import */ var _app_component_car_component_car_source_new__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_app_component_car_component_car_source_new__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_car_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(58);
/* harmony import */ var _components_car_tabs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_car_tabs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_car_baike__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(67);
/* harmony import */ var _components_car_baike__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_components_car_baike__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_live_info__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(69);
/* harmony import */ var _components_live_info__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_components_live_info__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_car_sup_brand__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(70);
/* harmony import */ var _components_car_sup_brand__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_components_car_sup_brand__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _default_card_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(71);
/* harmony import */ var _default_card_index__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_default_card_index__WEBPACK_IMPORTED_MODULE_11__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();












var EntryComponent = /** @class */ (function (_super) {
    __extends(EntryComponent, _super);
    function EntryComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EntryComponent.prototype.initData = function () {
        return {
            isHarmony: false,
            isPc: false,
            isFirst: false,
            isFirstAdv: false,
            isSup: false,
            whiteImgType: '',
            fieldsData: {},
            tplInfo: {},
            imgPublicData: {},
            cardUrl: '',
            bkUrl: '',
            sourceUrl: '',
            mainTitle: '',
            subTitle: '',
            baike: {},
            baikeShow: false,
            compInfo: {},
            recombSeriesList: [],
            sourceData: {},
            ubcData: {},
            supObj: {},
            pcFreshWrapper: false,
            pcFreshSmooth: undefined,
            pcFreshTitle: false,
            cardUrlCos: {},
            defaultData: {}
        };
    };
    EntryComponent.components = {
        'cos-card': _baidu_cosmic_card_card__WEBPACK_IMPORTED_MODULE_1___default.a,
        'sc-aladdin': _baidu_search_components_Aladdin_Aladdin__WEBPACK_IMPORTED_MODULE_2___default.a,
        'sc-grouptitle': _baidu_search_components_Title_GroupTitle__WEBPACK_IMPORTED_MODULE_3___default.a,
        'car-header-cosmic': _app_component_car_component_car_header_cosmic__WEBPACK_IMPORTED_MODULE_4___default.a,
        'car-new-kg-header': _app_component_car_component_car_new_kg_header__WEBPACK_IMPORTED_MODULE_5___default.a,
        'car-source-new': _app_component_car_component_car_source_new__WEBPACK_IMPORTED_MODULE_6___default.a,
        'car-tabs': _components_car_tabs__WEBPACK_IMPORTED_MODULE_7___default.a,
        'car-baike': _components_car_baike__WEBPACK_IMPORTED_MODULE_8___default.a,
        'live-info': _components_live_info__WEBPACK_IMPORTED_MODULE_9___default.a,
        'car-sup-brand': _components_car_sup_brand__WEBPACK_IMPORTED_MODULE_10___default.a,
        'default-card': _default_card_index__WEBPACK_IMPORTED_MODULE_11___default.a,
    };
    EntryComponent.messages = {
        tabsChange: function (arg) {
            var _a = arg.value, sourceUrl = _a.sourceUrl, cardUrl = _a.cardUrl, cardUrlCos = _a.cardUrlCos;
            this.data.set('sourceUrl', sourceUrl);
            this.data.set('cardUrl', cardUrl);
            this.data.set('cardUrlCos', cardUrlCos);
        }
    };
    EntryComponent.filters = {
        json: function (extObj) {
            return JSON.stringify(extObj);
        }
    };
    return EntryComponent;
}(san__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (EntryComponent);
/* san-hmr disable */ 


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _private_components_header_con_bigimg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50);
/* harmony import */ var _private_components_header_con_bigimg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_private_components_header_con_bigimg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _private_components_header_con__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51);
/* harmony import */ var _private_components_header_con__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_private_components_header_con__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _private_components_header_con_pc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52);
/* harmony import */ var _private_components_header_con_pc__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_private_components_header_con_pc__WEBPACK_IMPORTED_MODULE_3__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var CarHeaderCosmicComponent = /** @class */ (function (_super) {
    __extends(CarHeaderCosmicComponent, _super);
    function CarHeaderCosmicComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CarHeaderCosmicComponent.prototype.initData = function () {
        return {
            // ----------必传参数----------
            // 是否是pc环境【boolean类型】
            isPc: false,
            // 是否是首位或退位卡【boolean类型】 && 特殊场景 不展示首位样式传isFirstShow="{{ false }}"；不展示logo传isLogoShow = "{{ false }}"
            isFirst: false,
            isFirstShow: true,
            isLogoShow: true,
            isEntryHeight: false,
            // 是否是退位卡【boolean类型】
            isFirstAdv: false,
            tplInfo: {},
            // 跳链【headerUrl | string类型】
            headerUrl: '',
            // 主标题【string类型】
            mainTitle: '',
            // ubc打点的公共参数【object类型】
            ubcPublic: {},
            // ----------非必传参数----------
            // 是否将底部间距置空（为适配历史布局，打平了底部间距，但很多场景并不希望有底部间距）
            isSpaceBottomNone: false,
            // 是否为业务方自定义背景图
            isBgImage: false,
            // 卡片名称【string类型】（部分卡片彩头特殊，故有个标识进行判断）
            cardName: '',
            // 主标题上方的提示文案【string类型】
            recommendInfo: '',
            // 副标题/描述【string类型】
            subTitle: '',
            // 直播信息【object类型】
            liveInfo: {},
            // 数据字段（也可以看做为headerData，耦合有点多了）
            fieldsData: {},
            hasColor: false
        };
    };
    CarHeaderCosmicComponent.trimWhitespace = 'all';
    CarHeaderCosmicComponent.ssr = 'render-hydrate';
    CarHeaderCosmicComponent.components = {
        'header-con-bigimg': _private_components_header_con_bigimg__WEBPACK_IMPORTED_MODULE_1___default.a,
        'header-con': _private_components_header_con__WEBPACK_IMPORTED_MODULE_2___default.a,
        'header-con-pc': _private_components_header_con_pc__WEBPACK_IMPORTED_MODULE_3___default.a
    };
    CarHeaderCosmicComponent.filters = {
        json: function (extObj) {
            return JSON.stringify(extObj);
        }
    };
    return CarHeaderCosmicComponent;
}(_baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (CarHeaderCosmicComponent);
/* san-hmr disable */ 


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baidu_cosmic_card_title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _baidu_cosmic_card_title__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_baidu_cosmic_card_title__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_status_tag_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _components_status_tag_header__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_status_tag_header__WEBPACK_IMPORTED_MODULE_2__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var CarHeaderBigimgCosmicComponent = /** @class */ (function (_super) {
    __extends(CarHeaderBigimgCosmicComponent, _super);
    function CarHeaderBigimgCosmicComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CarHeaderBigimgCosmicComponent.prototype.initData = function () {
        return {
            isFirst: false,
            isFirstShow: true,
            isLogoShow: true,
            tplInfo: {},
            logoParams: '',
            recommendInfo: '',
            mainTitle: '',
            subTitle: '',
            liveInfo: {},
            fieldsData: {}
        };
    };
    CarHeaderBigimgCosmicComponent.trimWhitespace = 'all';
    CarHeaderBigimgCosmicComponent.ssr = 'render-hydrate';
    CarHeaderBigimgCosmicComponent.components = {
        'cosc-title': _baidu_cosmic_card_title__WEBPACK_IMPORTED_MODULE_1___default.a,
        'status-tag-header': _components_status_tag_header__WEBPACK_IMPORTED_MODULE_2___default.a
    };
    CarHeaderBigimgCosmicComponent.filters = {
        json: function (extObj) {
            return JSON.stringify(extObj);
        }
    };
    CarHeaderBigimgCosmicComponent.computed = {
        // 直播的实验组1 或 实验组3
        isStatusTag: function () {
            var _a = this.data.get('liveInfo').liveExperiment, liveExperiment = _a === void 0 ? '' : _a;
            return liveExperiment === '1' || liveExperiment === '2' || liveExperiment === '3';
        }
    };
    return CarHeaderBigimgCosmicComponent;
}(_baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (CarHeaderBigimgCosmicComponent);
/* san-hmr disable */ 


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baidu_cosmic_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _baidu_cosmic_icon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_baidu_cosmic_icon__WEBPACK_IMPORTED_MODULE_1__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var StatusTagComponent = /** @class */ (function (_super) {
    __extends(StatusTagComponent, _super);
    function StatusTagComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StatusTagComponent.prototype.initData = function () {
        return {
            isFirst: false,
            liveInfo: {},
            liveExperiment: '',
            recommendInfo: '',
            urlParams: {},
            cardName: '',
        };
    };
    StatusTagComponent.ssr = 'render-hydrate';
    StatusTagComponent.components = {
        'cos-icon': _baidu_cosmic_icon__WEBPACK_IMPORTED_MODULE_1___default.a
    };
    StatusTagComponent.computed = {
        imageUclk: function () {
            return this.data.get('liveExperiment') === '1'
                ? JSON.stringify({
                    module: 'living_btn',
                    roomId: this.data.get('liveInfo.roomId') || ''
                })
                : JSON.stringify({
                    module: 'image'
                });
        },
        isBigImgIcon: function () {
            var cardName = this.data.get('cardName');
            return cardName === 'car_kg2_san' || cardName === 'car_view_point_san';
        },
    };
    return StatusTagComponent;
}(_baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (StatusTagComponent);
/* san-hmr disable */ 


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baidu_cosmic_card_title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _baidu_cosmic_card_title__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_baidu_cosmic_card_title__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_status_tag_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _components_status_tag_header__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_status_tag_header__WEBPACK_IMPORTED_MODULE_2__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var CarHeaderCosmicComponent = /** @class */ (function (_super) {
    __extends(CarHeaderCosmicComponent, _super);
    function CarHeaderCosmicComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CarHeaderCosmicComponent.prototype.initData = function () {
        return {
            isFirst: false,
            isFirstShow: true,
            isLogoShow: true,
            isEntryHeight: false,
            tplInfo: {},
            logoParams: '',
            recommendInfo: '',
            mainTitle: '',
            subTitle: '',
            liveInfo: {},
            fieldsData: {},
            imgData: {
                logoImg: 'https://mbs1.bdstatic.com/searchbox/mappconsole/image/20240315/96b3300b-9de4-4731-aefb-b00096b29920.png'
            },
            hasColor: false
        };
    };
    CarHeaderCosmicComponent.trimWhitespace = 'all';
    CarHeaderCosmicComponent.ssr = 'render-hydrate';
    CarHeaderCosmicComponent.components = {
        'cosc-title': _baidu_cosmic_card_title__WEBPACK_IMPORTED_MODULE_1___default.a,
        'status-tag-header': _components_status_tag_header__WEBPACK_IMPORTED_MODULE_2___default.a
    };
    CarHeaderCosmicComponent.filters = {
        json: function (extObj) {
            return JSON.stringify(extObj);
        }
    };
    CarHeaderCosmicComponent.computed = {
        // 直播的实验组1 或 实验组3
        isStatusTag: function () {
            var _a = this.data.get('liveInfo').liveExperiment, liveExperiment = _a === void 0 ? '' : _a;
            return liveExperiment === '1' || liveExperiment === '2' || liveExperiment === '3';
        }
    };
    return CarHeaderCosmicComponent;
}(_baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (CarHeaderCosmicComponent);
/* san-hmr disable */ 


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baidu_cosmic_card_title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _baidu_cosmic_card_title__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_baidu_cosmic_card_title__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_status_tag_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _components_status_tag_header__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_status_tag_header__WEBPACK_IMPORTED_MODULE_2__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var CarHeaderCosmicPcComponent = /** @class */ (function (_super) {
    __extends(CarHeaderCosmicPcComponent, _super);
    function CarHeaderCosmicPcComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CarHeaderCosmicPcComponent.prototype.initData = function () {
        return {
            isFirst: false,
            isFirstShow: true,
            isLogoShow: true,
            tplInfo: {},
            recommendInfo: '',
            mainTitle: '',
            subTitle: '',
            fieldsData: {},
            imgData: {
                logoImg: 'https://mbs1.bdstatic.com/searchbox/mappconsole/image/20240315/96b3300b-9de4-4731-aefb-b00096b29920.png'
            }
        };
    };
    CarHeaderCosmicPcComponent.trimWhitespace = 'all';
    CarHeaderCosmicPcComponent.ssr = 'render-hydrate';
    CarHeaderCosmicPcComponent.components = {
        'cosc-title': _baidu_cosmic_card_title__WEBPACK_IMPORTED_MODULE_1___default.a,
        'status-tag-header': _components_status_tag_header__WEBPACK_IMPORTED_MODULE_2___default.a
    };
    CarHeaderCosmicPcComponent.filters = {
        json: function (extObj) {
            return JSON.stringify(extObj);
        }
    };
    return CarHeaderCosmicPcComponent;
}(_baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (CarHeaderCosmicPcComponent);
/* san-hmr disable */ 


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baidu_search_components_LinkNew_LinkNew__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _baidu_search_components_LinkNew_LinkNew__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_baidu_search_components_LinkNew_LinkNew__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _baidu_search_components_Title_Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54);
/* harmony import */ var _baidu_search_components_Title_Title__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_baidu_search_components_Title_Title__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _baidu_cosmic_card_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _baidu_cosmic_card_title__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_baidu_cosmic_card_title__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _baidu_search_components_Paragraph_Paragraph__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _baidu_search_components_Paragraph_Paragraph__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_baidu_search_components_Paragraph_Paragraph__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_status_tag_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
/* harmony import */ var _components_status_tag_header__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_status_tag_header__WEBPACK_IMPORTED_MODULE_5__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};






var myNewKgHeaderComponent = /** @class */ (function (_super) {
    __extends(myNewKgHeaderComponent, _super);
    function myNewKgHeaderComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    myNewKgHeaderComponent.prototype.initData = function () {
        return {
            /*
             * 背景：【Cosmic组件库】的Aladdin组件的头部，不能很好地满足头部的title打点、副标题飘红、接入的san反解机制等。
             * 解决：模仿Aladdin组件的title头部，制作出类似的组件~
             * 存在问题：【Cosmic组件库】的Aladdin组件的头部（背景图采用父相子绝，父指的是{content类名}），是位于{content类名}之上的；
             *          而我们开发的卡片内容，在content内容里面（背景图也是采用父相子绝，但父指的是我们自己写的{my-new-kg-header类名}）。
             *          如果我要给『头部下面的卡片内容要设置margin-top为负』，那内容就会被头部背景遮挡了？？？
             * 存在问题的解决方式：，给头部下面的卡片内容设置大盒子（相对定位，z-index为3及以上）即可解决。
             */
            // ----------必传参数----------
            // 是否是pc环境【boolean类型】
            isPc: false,
            // 是否是首位或退位卡【boolean类型】
            isFirst: false,
            // 是否是退位卡【boolean类型】
            isFirstAdv: false,
            // 跳链【UrlParams | string类型】
            headerUrl: '',
            // 背景图【string类型】
            bgImg: '',
            // 主标题【string类型】
            mainTitle: '',
            // ubc打点的公共参数【object类型】
            ubcPublic: {},
            // ----------非必传参数----------
            // 卡片名称【string类型】（部分卡片彩头特殊，故有个标识进行判断）
            cardName: '',
            // 背景图 - 暗黑模式【string类型】
            bgImgDark: '',
            // 右侧入口logo【string类型】
            iconImg: '',
            // 右侧入口logo - 暗黑模式【string类型】
            iconImgDark: '',
            // 主标题上方的提示文案【string类型】
            recommendInfo: '',
            // 副标题/描述【string类型】
            subTitle: '',
            // 是否展示logo【boolean类型】（pc为自定义logo时使用）
            isEntryLogoShow: false,
            // 是否展示浅彩头【boolean类型】（默认不展示）
            isBgGradientShow: false,
            // 主标题上间距【boolean类型】（默认为'0'）
            mainTitlePaddingTop: '0',
            // 直播信息【object类型】
            liveInfo: {},
            headerHotspotStyle: {
                backgroundColor: '#00000000'
            },
            pcFreshWrapper: false,
            pcFreshSmooth: undefined,
            pcFreshTitle: '',
            cardParamsCos: {}
        };
    };
    myNewKgHeaderComponent.trimWhitespace = 'all';
    myNewKgHeaderComponent.ssr = 'render-hydrate';
    myNewKgHeaderComponent.components = {
        'sc-link': _baidu_search_components_LinkNew_LinkNew__WEBPACK_IMPORTED_MODULE_1___default.a,
        'sc-title': _baidu_search_components_Title_Title__WEBPACK_IMPORTED_MODULE_2___default.a,
        'cosc-title': _baidu_cosmic_card_title__WEBPACK_IMPORTED_MODULE_3___default.a,
        'sc-paragraph': _baidu_search_components_Paragraph_Paragraph__WEBPACK_IMPORTED_MODULE_4___default.a,
        'status-tag-header': _components_status_tag_header__WEBPACK_IMPORTED_MODULE_5___default.a
    };
    myNewKgHeaderComponent.filters = {
        json: function (extObj) {
            var ubcPublic = this.data.get('ubcPublic');
            return JSON.stringify(__assign(__assign({}, ubcPublic), extObj));
        }
    };
    myNewKgHeaderComponent.computed = {
        isBigImgIcon: function () {
            var cardName = this.data.get('cardName');
            return cardName === 'car_kg2_san' || cardName === 'car_view_point_san';
        },
        // 直播的实验组1 或 实验组3
        isStatusTag: function () {
            var _a = this.data.get('liveInfo').liveExperiment, liveExperiment = _a === void 0 ? '' : _a;
            return liveExperiment === '1' || liveExperiment === '2' || liveExperiment === '3';
        }
    };
    return myNewKgHeaderComponent;
}(_baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (myNewKgHeaderComponent);
/* san-hmr disable */ 


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baidu_search_components_Source_Source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56);
/* harmony import */ var _baidu_search_components_Source_Source__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_baidu_search_components_Source_Source__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _baidu_search_components_LinkNew_LinkNew__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _baidu_search_components_LinkNew_LinkNew__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_baidu_search_components_LinkNew_LinkNew__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _baidu_search_components_Feedback_Feedback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57);
/* harmony import */ var _baidu_search_components_Feedback_Feedback__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_baidu_search_components_Feedback_Feedback__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_baozhang_pc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17);
/* harmony import */ var _components_baozhang_pc__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_baozhang_pc__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_baozhang_wise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18);
/* harmony import */ var _components_baozhang_wise__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_baozhang_wise__WEBPACK_IMPORTED_MODULE_5__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};






var CarSourceNewComponent = /** @class */ (function (_super) {
    __extends(CarSourceNewComponent, _super);
    function CarSourceNewComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CarSourceNewComponent.prototype.initData = function () {
        return {
            // ----------必传参数----------
            // 是否是pc环境【boolean类型】
            isPc: false,
            // 是否是首位或退位卡【boolean类型】
            isFirst: false,
            // 来源跳链【string类型】
            sourceUrl: '',
            // 来源跳链【string类型 | object类型】
            sourceParams: '',
            // 来源配置【object类型】
            sourceData: {},
            // 模板信息【object类型】
            tplInfo: {},
            // ubc打点的公共参数【object类型】
            ubcPublic: {},
            // ----------非必传参数----------
            // 是否展示保障标【boolean类型】
            isBaozhang: false,
            // wise端距离顶部的距离
            sourceWisePaddingTop: '',
            noHotspotStyle: {
                backgroundColor: '#00000000'
            },
            pcFreshWrapper: false
        };
    };
    CarSourceNewComponent.ssr = 'render-hydrate';
    CarSourceNewComponent.components = {
        'sc-source': _baidu_search_components_Source_Source__WEBPACK_IMPORTED_MODULE_1___default.a,
        'sc-link': _baidu_search_components_LinkNew_LinkNew__WEBPACK_IMPORTED_MODULE_2___default.a,
        'sc-feedback': _baidu_search_components_Feedback_Feedback__WEBPACK_IMPORTED_MODULE_3___default.a,
        'baozhang-pc': _components_baozhang_pc__WEBPACK_IMPORTED_MODULE_4___default.a,
        'baozhang-wise': _components_baozhang_wise__WEBPACK_IMPORTED_MODULE_5___default.a,
    };
    CarSourceNewComponent.filters = {
        json: function (extObj) {
            var ubcPublic = this.data.get('ubcPublic');
            return JSON.stringify(__assign(__assign({}, ubcPublic), extObj));
        }
    };
    CarSourceNewComponent.computed = {
        toolsProps: function () {
            return {
                title: this.data.get('sourceData.text'),
                url: this.data.get('sourceUrl')
            };
        },
    };
    return CarSourceNewComponent;
}(_baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (CarSourceNewComponent);
/* san-hmr disable */ 


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baidu_www_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _baidu_www_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_baidu_www_api__WEBPACK_IMPORTED_MODULE_1__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


var BaozhangPcComponent = /** @class */ (function (_super) {
    __extends(BaozhangPcComponent, _super);
    function BaozhangPcComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BaozhangPcComponent.prototype.injectService = function (inject) {
        this.alaLog = inject(_baidu_www_api__WEBPACK_IMPORTED_MODULE_1__["AlaLog"]);
        this.ubcLog = inject(_baidu_www_api__WEBPACK_IMPORTED_MODULE_1__["UbcLog"]);
        this.user = inject(_baidu_www_api__WEBPACK_IMPORTED_MODULE_1__["User"]);
    };
    BaozhangPcComponent.prototype.initData = function () {
        return {
            tplInfo: {},
            ubcPublic: {},
            BZPopper: null
        };
    };
    BaozhangPcComponent.prototype.attached = function () {
        var _this = this;
        window.require(['plugins/bzPopper'], function (BZPopper) {
            _this.BZPopper = BZPopper;
        });
    };
    BaozhangPcComponent.prototype.handleBaoEnter = function (e) {
        var _this = this;
        var _a, _b, _c, _d;
        e.stopPropagation();
        var tplInfo = this.data.get('tplInfo');
        // 打开保障标的ubc打点
        this.sendUbcLog('mouseenter', {
            module: 'baozhang',
            type: 'mouseenter',
            // eslint-disable-next-line camelcase
            clk_type: 'baozhang_mouseenter'
        });
        // 打开保障标的tc打点
        (_a = this.alaLog) === null || _a === void 0 ? void 0 : _a.send({
            type: 'mouseenter',
            cyc: 1,
            action: 'baozhang_mouseenter'
        }, tplInfo);
        // 接口入参
        var bzConfig = {
            target: e.target,
            placement: 'bottom',
            from: this.BZPopper.preset.PS,
            trigger: 'hover',
            contentData: JSON.stringify({}),
            isLogin: !!((_c = (_b = this.user) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.isLogin),
            baseZIndex: 9999,
            extra: {
                // 实验阶段：preset.EXP_STAGE_1或preset.EXP_STAGE_3
                expStage: this.BZPopper.preset.EXP_STAGE_1
            },
        };
        (_d = this.BZPopper) === null || _d === void 0 ? void 0 : _d.getBaoData({
            xhr: {
                layerParams: {
                    bzAppid: 30002,
                    bzSource: 3
                }
            },
            logConf: {
                from: 'YouJia'
            }
        }, __assign({}, bzConfig), function () {
            var _a;
            (_a = _this.BZPopper) === null || _a === void 0 ? void 0 : _a.showUp();
        });
    };
    // 封装的ubc打点
    BaozhangPcComponent.prototype.sendUbcLog = function (type, extra) {
        var _a;
        if (extra === void 0) { extra = {}; }
        (_a = this.ubcLog) === null || _a === void 0 ? void 0 : _a.sendLog({
            type: type,
            ext: __assign(__assign({}, this.data.get('ubcPublic')), extra)
        }, this.data.get('tplInfo'));
    };
    BaozhangPcComponent.ssr = 'render-hydrate';
    BaozhangPcComponent.components = {};
    return BaozhangPcComponent;
}(_baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (BaozhangPcComponent);
/* san-hmr disable */ 


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baidu_www_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _baidu_www_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_baidu_www_api__WEBPACK_IMPORTED_MODULE_1__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


var showUp = null;
var getBaoData = null;
var BaozhangWiseComponent = /** @class */ (function (_super) {
    __extends(BaozhangWiseComponent, _super);
    function BaozhangWiseComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BaozhangWiseComponent.prototype.injectService = function (inject) {
        this.alaLog = inject(_baidu_www_api__WEBPACK_IMPORTED_MODULE_1__["AlaLog"]);
        this.ubcLog = inject(_baidu_www_api__WEBPACK_IMPORTED_MODULE_1__["UbcLog"]);
    };
    BaozhangWiseComponent.prototype.initData = function () {
        return {
            tplInfo: {},
            ubcPublic: {},
            isHandleBaoAssurance: false,
            hasGetBaoData: false,
            noHotspotStyle: {
                backgroundColor: '#00000000'
            }
        };
    };
    BaozhangWiseComponent.prototype.attached = function () {
        // 获取弹窗和保障数据（函数形式）
        Promise.all([
            __webpack_require__.e(/* import() | guarantee-popper-h5 */ 1).then(__webpack_require__.bind(null, 178)),
            __webpack_require__.e(/* import() | guarantee-popper-h5 */ 1).then(__webpack_require__.bind(null, 179))
        ]).then(function (res) {
            showUp = res && res[0] && res[0].showUp;
            getBaoData = res && res[1] && res[1].getBaoData;
        });
    };
    BaozhangWiseComponent.prototype.onClickAssurance = function (e) {
        var _a;
        e.stopPropagation();
        // 打开保障标的ubc打点
        this.sendUbcLog('click', {
            module: 'baozhang',
            type: 'click',
            // eslint-disable-next-line camelcase
            clk_type: 'baozhang_click'
        });
        // 打开保障标的tc打点
        (_a = this.alaLog) === null || _a === void 0 ? void 0 : _a.send({
            type: 'click',
            cyc: 1,
            action: 'baozhang_click'
        }, this.data.get('tplInfo'));
        // 保障标识为false 或 弹窗没数据 或 保障没数据，就不往下走了
        if (this.data.get('isHandleBaoAssurance') || !showUp || !getBaoData) {
            return;
        }
        this.data.set('isHandleBaoAssurance', true);
        // 获取过保障的数据，就只展示弹窗即可；否则就获取保障数据并展示弹窗
        if (this.data.get('hasGetBaoData')) {
            this.showPopup();
        }
        else {
            this.loadBaoData();
        }
    };
    // 展示弹窗
    BaozhangWiseComponent.prototype.showPopup = function () {
        showUp({
            isMergeDefaultPromise: false,
            from: 'YouJia',
            isLogin: true
        });
        this.data.set('isHandleBaoAssurance', false);
    };
    // 获取保障数据，成功则展示弹窗
    BaozhangWiseComponent.prototype.loadBaoData = function () {
        var _this = this;
        getBaoData({
            xhr: {
                layerParams: {
                    bzAppid: 30002,
                    bzSource: 3
                }
            },
            logConf: {
                from: 'YouJia'
            }
        }).then(function () {
            _this.data.set('hasGetBaoData', true);
            _this.showPopup();
        })
            .catch(function () {
            _this.data.set('isHandleBaoAssurance', false);
        });
    };
    // 封装的ubc打点
    BaozhangWiseComponent.prototype.sendUbcLog = function (type, extra) {
        var _a;
        if (extra === void 0) { extra = {}; }
        (_a = this.ubcLog) === null || _a === void 0 ? void 0 : _a.sendLog({
            type: type,
            ext: __assign(__assign({}, this.data.get('ubcPublic')), extra)
        }, this.data.get('tplInfo'));
    };
    BaozhangWiseComponent.ssr = 'render-hydrate';
    BaozhangWiseComponent.components = {};
    BaozhangWiseComponent.filters = {
        json: function (extObj) {
            return JSON.stringify(__assign({}, extObj));
        }
    };
    return BaozhangWiseComponent;
}(_baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (BaozhangWiseComponent);
/* san-hmr disable */ 


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baidu_www_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _baidu_www_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_baidu_www_api__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _baidu_search_components_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59);
/* harmony import */ var _baidu_search_components_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_baidu_search_components_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _baidu_search_components_Tabs_TabPane__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60);
/* harmony import */ var _baidu_search_components_Tabs_TabPane__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_baidu_search_components_Tabs_TabPane__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _baidu_search_components_More_More__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61);
/* harmony import */ var _baidu_search_components_More_More__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_baidu_search_components_More_More__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _baidu_cosmic_more_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19);
/* harmony import */ var _baidu_cosmic_more_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_baidu_cosmic_more_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _car_series__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20);
/* harmony import */ var _car_series__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_car_series__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _car_swiper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(65);
/* harmony import */ var _car_swiper__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_car_swiper__WEBPACK_IMPORTED_MODULE_7__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};








var CarTabsComponent = /** @class */ (function (_super) {
    __extends(CarTabsComponent, _super);
    function CarTabsComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CarTabsComponent.prototype.injectService = function (inject) {
        this.alaLog = inject(_baidu_www_api__WEBPACK_IMPORTED_MODULE_1__["AlaLog"]);
        this.ubcLog = inject(_baidu_www_api__WEBPACK_IMPORTED_MODULE_1__["UbcLog"]);
    };
    CarTabsComponent.prototype.initData = function () {
        return {
            isPc: false,
            isFirst: false,
            isSup: false,
            whiteImgType: '',
            tplInfo: {},
            imgPublicData: {},
            cardParams: '',
            recombSeriesList: [],
            currentTabIndex: 0,
            ubcPublic: {},
            hotspotStyle: {
                top: '-.10rem',
                bottom: '-.05rem'
            },
            pcFreshWrapper: false
        };
    };
    CarTabsComponent.prototype.handleChange = function (params) {
        var _a;
        (_a = window.event) === null || _a === void 0 ? void 0 : _a.stopPropagation();
        this.data.set('currentTabIndex', params.index);
        var _b = this.data.get(), tplInfo = _b.tplInfo, recombSeriesList = _b.recombSeriesList;
        // paramsIndex：tab内容的下标。
        this.dispatch('tabsChange', recombSeriesList[params.index]);
        this.sendUbcLog({
            type: 'click',
            extra: {
                module: "tab_".concat(params.index),
                // eslint-disable-next-line camelcase
                clk_type: 'tab'
            }
        });
        this.alaLog.send({
            action: 'tabChange',
            extra: JSON.stringify({
                actType: 'action',
                label: 'tab',
                labid: params.index + 1,
                module: 'tab',
                pos: params.index + 1,
                text: params.label
            })
        }, tplInfo);
    };
    // UBC打点
    CarTabsComponent.prototype.sendUbcLog = function (_a) {
        var type = _a.type, _b = _a.extra, extra = _b === void 0 ? {} : _b;
        var _c = this.data.get(), ubcPublic = _c.ubcPublic, tplInfo = _c.tplInfo;
        this.ubcLog.sendLog({
            type: type,
            ext: __assign(__assign({}, ubcPublic), extra)
        }, tplInfo);
    };
    CarTabsComponent.trimWhitespace = 'all';
    CarTabsComponent.components = {
        'cos-more-link': _baidu_cosmic_more_link__WEBPACK_IMPORTED_MODULE_5___default.a,
        'sc-tabs': _baidu_search_components_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_2___default.a,
        'sc-tab-pane': _baidu_search_components_Tabs_TabPane__WEBPACK_IMPORTED_MODULE_3___default.a,
        'sc-more': _baidu_search_components_More_More__WEBPACK_IMPORTED_MODULE_4___default.a,
        'car-series': _car_series__WEBPACK_IMPORTED_MODULE_6___default.a,
        'car-swiper': _car_swiper__WEBPACK_IMPORTED_MODULE_7___default.a
    };
    CarTabsComponent.messages = {
        currentTabIndexChange: function (arg) {
            var _a = arg.value.currentTabIndex, currentTabIndex = _a === void 0 ? 0 : _a;
            this.data.set('currentTabIndex', currentTabIndex);
        }
    };
    CarTabsComponent.filters = {
        json: function (extObj) {
            var ubcPublic = this.data.get('ubcPublic');
            return JSON.stringify(__assign(__assign({}, ubcPublic), extObj));
        }
    };
    return CarTabsComponent;
}(_baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (CarTabsComponent);
/* san-hmr disable */ 


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var san__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var san__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(san__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baidu_search_components_LinkNew_LinkNew__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _baidu_search_components_LinkNew_LinkNew__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_baidu_search_components_LinkNew_LinkNew__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _baidu_search_components_Grid_Row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _baidu_search_components_Grid_Row__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_baidu_search_components_Grid_Row__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _baidu_search_components_Grid_Col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var _baidu_search_components_Grid_Col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_baidu_search_components_Grid_Col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _baidu_search_components_Price_Price__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62);
/* harmony import */ var _baidu_search_components_Price_Price__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_baidu_search_components_Price_Price__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _baidu_search_components_Paragraph_Paragraph__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
/* harmony import */ var _baidu_search_components_Paragraph_Paragraph__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_baidu_search_components_Paragraph_Paragraph__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _baidu_search_components_ButtonNew_ButtonNew__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63);
/* harmony import */ var _baidu_search_components_ButtonNew_ButtonNew__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_baidu_search_components_ButtonNew_ButtonNew__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _baidu_cosmic_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10);
/* harmony import */ var _baidu_cosmic_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_baidu_cosmic_image__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _app_component_car_component_car_tag_group__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(64);
/* harmony import */ var _app_component_car_component_car_tag_group__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_app_component_car_component_car_tag_group__WEBPACK_IMPORTED_MODULE_8__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};









var CarSeriesComponent = /** @class */ (function (_super) {
    __extends(CarSeriesComponent, _super);
    function CarSeriesComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CarSeriesComponent.prototype.initData = function () {
        return {
            isPc: false,
            isFirst: false,
            isSup: false,
            whiteImgType: '',
            imgPublicData: {},
            seriesItem: {},
            tabIndex: 0,
            seriesIndex: 0,
            hotspotStyle: {
                top: '-.10rem',
                bottom: '-.05rem'
            }
        };
    };
    CarSeriesComponent.trimWhitespace = 'all';
    CarSeriesComponent.components = {
        'sc-link': _baidu_search_components_LinkNew_LinkNew__WEBPACK_IMPORTED_MODULE_1___default.a,
        'sc-row': _baidu_search_components_Grid_Row__WEBPACK_IMPORTED_MODULE_2___default.a,
        'sc-col': _baidu_search_components_Grid_Col__WEBPACK_IMPORTED_MODULE_3___default.a,
        'sc-price': _baidu_search_components_Price_Price__WEBPACK_IMPORTED_MODULE_4___default.a,
        'sc-paragraph': _baidu_search_components_Paragraph_Paragraph__WEBPACK_IMPORTED_MODULE_5___default.a,
        'sc-button': _baidu_search_components_ButtonNew_ButtonNew__WEBPACK_IMPORTED_MODULE_6___default.a,
        'cos-image': _baidu_cosmic_image__WEBPACK_IMPORTED_MODULE_7___default.a,
        'car-tag-group': _app_component_car_component_car_tag_group__WEBPACK_IMPORTED_MODULE_8___default.a
    };
    CarSeriesComponent.filters = {
        json: function (extObj) {
            var ubcPublic = this.data.get('ubcPublic');
            return JSON.stringify(__assign(__assign({}, ubcPublic), extObj));
        }
    };
    return CarSeriesComponent;
}(san__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (CarSeriesComponent);
/* san-hmr disable */ 


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var san__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var san__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(san__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baidu_search_components_TagNew_TagNew__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);
/* harmony import */ var _baidu_search_components_TagNew_TagNew__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_baidu_search_components_TagNew_TagNew__WEBPACK_IMPORTED_MODULE_1__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var CarTagGroupComponent = /** @class */ (function (_super) {
    __extends(CarTagGroupComponent, _super);
    function CarTagGroupComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CarTagGroupComponent.prototype.initData = function () {
        return {
            // ----------必传参数----------
            /**
             * @text 标签文本
             * @type 标签类型，默认为'default'
             */
            tagList: [],
            // ----------非必传参数----------
            isFirst: false,
        };
    };
    CarTagGroupComponent.components = {
        'sc-tag': _baidu_search_components_TagNew_TagNew__WEBPACK_IMPORTED_MODULE_1___default.a,
    };
    return CarTagGroupComponent;
}(san__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (CarTagGroupComponent);
/* san-hmr disable */ 


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baidu_www_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _baidu_www_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_baidu_www_api__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _baidu_better_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66);
/* harmony import */ var _baidu_better_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_baidu_better_scroll__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _baidu_search_components_LinkNew_LinkNew__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _baidu_search_components_LinkNew_LinkNew__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_baidu_search_components_LinkNew_LinkNew__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _car_series__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20);
/* harmony import */ var _car_series__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_car_series__WEBPACK_IMPORTED_MODULE_4__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};





var CarSwiperComponent = /** @class */ (function (_super) {
    __extends(CarSwiperComponent, _super);
    function CarSwiperComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CarSwiperComponent.prototype.injectService = function (inject) {
        this.alaLog = inject(_baidu_www_api__WEBPACK_IMPORTED_MODULE_1__["AlaLog"]);
        this.ubcLog = inject(_baidu_www_api__WEBPACK_IMPORTED_MODULE_1__["UbcLog"]);
    };
    CarSwiperComponent.prototype.initData = function () {
        return {
            isPc: false,
            isFirst: false,
            isSup: false,
            imgPublicData: {},
            tplInfo: {},
            cardParams: '',
            tabIndex: 0,
            swiperList: [],
            ubcPublic: {},
            hotspotStyle: {
                backgroundColor: '#00000000'
            },
            overflow: 'hidden', // 是否隐藏非首页内容
            pageWidthPercent: 1,
            oldIndex: 0,
            pageIndex: 0,
            animation: '',
            forceAnimation: true,
            oScroll: null,
            timer: null,
        };
    };
    CarSwiperComponent.prototype.attached = function () {
        var _this = this;
        this.initScroll();
        this.watch('tabIndex', function (val) {
            _this.data.set('swiperIndex', val);
            // tab如果切换了，则内容滚动到指定页面
            _this.data.get('oScroll').currentPage.pageX = val;
            // 滚动后页面的高度计算
            var carSwiperBox = document.querySelector('[data-module=\'car-swiper-box\']');
            var carSwiperItem = document.querySelector("[data-module='car-swiper-item-".concat(val, "']"));
            if (carSwiperBox && carSwiperItem) {
                carSwiperBox.style.height = carSwiperItem.clientHeight + 'px';
            }
        });
    };
    CarSwiperComponent.prototype.initScroll = function () {
        var _this = this;
        var isSupportTouch = 'ontouchend' in document;
        var oScroll = new _baidu_better_scroll__WEBPACK_IMPORTED_MODULE_2___default.a(this.ref('c-scroll'), {
            bindToWrapper: true,
            disablePointer: true,
            disableMouse: !isSupportTouch, // 移动端禁止鼠标操作
            scrollX: true,
            scrollY: false,
            momentum: false, // 滑动势能动画开关,默认开
            eventPassthrough: 'vertical',
            scrollbars: false,
            snapThreshold: 0.1,
            snapSpeed: 400,
            snap: true,
            probeType: 0, // scroll 事件的开关
            observeDOM: true,
            stopPropagationWhenSideslip: true
        });
        oScroll.on('scroll', function () {
            // 监听页面索引值发生改变时，触发动画效果
            if (_this.data.get('forceAnimation') &&
                _this.data.get('oScroll').currentPage.pageX !== _this.data.get('pageIndex')) {
                _this.updatePosition();
            }
        });
        oScroll.on('scrollEnd', function () {
            var pageIndex = oScroll.currentPage.pageX;
            _this.data.set('pageIndex', pageIndex);
            _this.dispatch('currentTabIndexChange', {
                currentTabIndex: pageIndex
            });
            if (_this.data.get('animation')) {
                _this.data.set('animation', '');
            }
            // 滑动动作结束，重置动画
            var timer = setTimeout(function () {
                _this.data.set('isResetAnimation', true);
            }, 400);
            _this.data.set('timer', timer);
            var tplInfo = _this.data.get().tplInfo;
            // 滚动结束后的ubc打点
            _this.sendUbcLog('scroll', {
                type: 'scroll',
                srcid: tplInfo.srcid || '',
                // eslint-disable-next-line camelcase
                clk_type: 'tabItem',
                module: "tabItem_".concat(pageIndex)
            });
            // 滚动结束后的tc打点
            _this.alaLog.send({
                type: 't',
                cyc: 1,
                action: "tabItem_".concat(pageIndex),
                extra: JSON.stringify({
                    actType: 'action',
                    label: 'scroll',
                })
            }, tplInfo);
        });
        this.data.set('oScroll', oScroll);
    };
    CarSwiperComponent.prototype.setSlideAnimation = function (newVal, oldVal) {
        if (newVal === oldVal) {
            return;
        }
        if (newVal > oldVal) {
            this.data.set('animation', 'c-song-scroll-right');
        }
        else {
            this.data.set('animation', 'c-song-scroll-left');
        }
        this.updateIndicator(newVal, oldVal);
    };
    CarSwiperComponent.prototype.updatePosition = function () {
        // 记录滑动开始的页面索引, 以及横划动作的目标页面索引
        var oldIndex = this.data.get('pageIndex');
        var pageIndex = this.data.get('oScroll').currentPage.pageX;
        this.data.set('oldIndex', oldIndex);
        this.data.set('pageIndex', pageIndex);
        // 计算动画的名称
        this.setSlideAnimation(pageIndex, oldIndex);
        // 触发做动画的标识
        if (this.data.get('forceAnimation')) {
            var timer = this.data.get('timer');
            timer && clearTimeout(timer);
            this.data.set('forceAnimation', false);
        }
    };
    CarSwiperComponent.prototype.updateIndicator = function (newVal, oldVal) {
        var threshold = 5;
        var len = this.data.get('swiperList').length;
        var indicatorTransIndex = this.data.get('indicatorTransIndex');
        if (newVal > oldVal) {
            if (newVal >= threshold - 1 && newVal < len - 1) {
                indicatorTransIndex = newVal - (threshold - 2);
            }
            // 处理最左边临界的情况
            if (newVal >= threshold - 1 && indicatorTransIndex === 0) {
                indicatorTransIndex = len - threshold;
            }
        }
        else {
            if (newVal <= indicatorTransIndex && indicatorTransIndex > 0) {
                indicatorTransIndex = newVal - 1;
            }
            // 处理最右边临界的情况
            if (newVal === 0) {
                indicatorTransIndex = 0;
            }
        }
        this.data.set('indicatorTransIndex', indicatorTransIndex);
    };
    CarSwiperComponent.prototype.onSongItemClick = function (x, y) {
        var $item = this.ref("song".concat(x).concat(y)).el;
        $item.style.background = 'rgba(0, 0, 0, .05)';
        setTimeout(function () {
            $item.style.background = 'unset';
        }, 100);
    };
    // UBC打点
    CarSwiperComponent.prototype.sendUbcLog = function (type, extra) {
        if (extra === void 0) { extra = {}; }
        var _a = this.data.get(), ubcPublic = _a.ubcPublic, tplInfo = _a.tplInfo;
        this.ubcLog.sendLog({
            type: type,
            ext: __assign(__assign({}, ubcPublic), extra)
        }, tplInfo);
    };
    CarSwiperComponent.prototype.detached = function () {
        this.data.get('oScroll').destroy();
    };
    CarSwiperComponent.trimWhitespace = 'all';
    CarSwiperComponent.computed = {
        pageNum: function () {
            return this.data.get('swiperList').length;
        }
    };
    CarSwiperComponent.components = {
        'sc-link': _baidu_search_components_LinkNew_LinkNew__WEBPACK_IMPORTED_MODULE_3___default.a,
        'car-series': _car_series__WEBPACK_IMPORTED_MODULE_4___default.a,
    };
    CarSwiperComponent.filters = {
        json: function (extObj) {
            var ubcPublic = this.data.get('ubcPublic');
            return JSON.stringify(__assign(__assign({}, ubcPublic), extObj));
        }
    };
    return CarSwiperComponent;
}(_baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (CarSwiperComponent);
/* san-hmr disable */ 


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var san__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var san__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(san__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baidu_search_components_Grid_Row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _baidu_search_components_Grid_Row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_baidu_search_components_Grid_Row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _baidu_search_components_Grid_Col__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var _baidu_search_components_Grid_Col__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_baidu_search_components_Grid_Col__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _baidu_search_components_Image_Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22);
/* harmony import */ var _baidu_search_components_Image_Image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_baidu_search_components_Image_Image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _baidu_search_components_TagNew_TagNew__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21);
/* harmony import */ var _baidu_search_components_TagNew_TagNew__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_baidu_search_components_TagNew_TagNew__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _baidu_search_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(68);
/* harmony import */ var _baidu_search_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_baidu_search_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _baidu_search_components_Paragraph_Paragraph__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9);
/* harmony import */ var _baidu_search_components_Paragraph_Paragraph__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_baidu_search_components_Paragraph_Paragraph__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _baidu_search_components_LinkNew_LinkNew__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6);
/* harmony import */ var _baidu_search_components_LinkNew_LinkNew__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_baidu_search_components_LinkNew_LinkNew__WEBPACK_IMPORTED_MODULE_7__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};








var EntryComponent = /** @class */ (function (_super) {
    __extends(EntryComponent, _super);
    function EntryComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EntryComponent.prototype.initData = function () {
        return {
            isHarmony: false,
            isPc: false,
            isFirst: false,
            bkUrl: '',
            baike: {},
            brandHotspotStyle: {
                top: '-.06rem',
                bottom: '-.06rem',
                left: '-.06rem',
                right: '-.06rem',
                borderRadius: '.09rem'
            }
        };
    };
    EntryComponent.trimWhitespace = 'all';
    EntryComponent.components = {
        'sc-row': _baidu_search_components_Grid_Row__WEBPACK_IMPORTED_MODULE_1___default.a,
        'sc-col': _baidu_search_components_Grid_Col__WEBPACK_IMPORTED_MODULE_2___default.a,
        'sc-image': _baidu_search_components_Image_Image__WEBPACK_IMPORTED_MODULE_3___default.a,
        'sc-tag': _baidu_search_components_TagNew_TagNew__WEBPACK_IMPORTED_MODULE_4___default.a,
        'sc-paragraph': _baidu_search_components_Paragraph_Paragraph__WEBPACK_IMPORTED_MODULE_6___default.a,
        'sc-icon': _baidu_search_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_5___default.a,
        'sc-link': _baidu_search_components_LinkNew_LinkNew__WEBPACK_IMPORTED_MODULE_7___default.a,
    };
    EntryComponent.filters = {
        json: function (extObj) {
            var ubcPublic = this.data.get('ubcPublic');
            return JSON.stringify(__assign(__assign({}, ubcPublic), extObj));
        }
    };
    return EntryComponent;
}(san__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (EntryComponent);
/* san-hmr disable */ 


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var san__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var san__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(san__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baidu_cosmic_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _baidu_cosmic_icon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_baidu_cosmic_icon__WEBPACK_IMPORTED_MODULE_1__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var MyComponent = /** @class */ (function (_super) {
    __extends(MyComponent, _super);
    function MyComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyComponent.prototype.initData = function () {
        return {
            isFirst: false,
            tplInfo: {},
            liveInfo: {}
        };
    };
    MyComponent.trimWhitespace = 'all';
    MyComponent.components = {
        'cos-icon': _baidu_cosmic_icon__WEBPACK_IMPORTED_MODULE_1___default.a,
    };
    MyComponent.filters = {
        json: function (extObj) {
            return JSON.stringify(extObj);
        }
    };
    return MyComponent;
}(san__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (MyComponent);
/* san-hmr disable */ 


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var san__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var san__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(san__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baidu_search_components_LinkNew_LinkNew__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _baidu_search_components_LinkNew_LinkNew__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_baidu_search_components_LinkNew_LinkNew__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _baidu_search_components_Grid_Row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _baidu_search_components_Grid_Row__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_baidu_search_components_Grid_Row__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _baidu_search_components_Grid_Col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var _baidu_search_components_Grid_Col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_baidu_search_components_Grid_Col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _baidu_search_components_Image_Image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22);
/* harmony import */ var _baidu_search_components_Image_Image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_baidu_search_components_Image_Image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _baidu_search_components_Paragraph_Paragraph__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
/* harmony import */ var _baidu_search_components_Paragraph_Paragraph__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_baidu_search_components_Paragraph_Paragraph__WEBPACK_IMPORTED_MODULE_5__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var CarSupBrandComponent = /** @class */ (function (_super) {
    __extends(CarSupBrandComponent, _super);
    function CarSupBrandComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CarSupBrandComponent.prototype.initData = function () {
        return {
            brandInfo: {},
            brandHotspotStyle: {
                top: '-.06rem',
                bottom: '-.06rem',
                left: '-.06rem',
                right: '-.06rem',
                borderRadius: '.09rem'
            }
        };
    };
    CarSupBrandComponent.components = {
        'sc-link': _baidu_search_components_LinkNew_LinkNew__WEBPACK_IMPORTED_MODULE_1___default.a,
        'sc-row': _baidu_search_components_Grid_Row__WEBPACK_IMPORTED_MODULE_2___default.a,
        'sc-col': _baidu_search_components_Grid_Col__WEBPACK_IMPORTED_MODULE_3___default.a,
        'sc-image': _baidu_search_components_Image_Image__WEBPACK_IMPORTED_MODULE_4___default.a,
        'sc-paragraph': _baidu_search_components_Paragraph_Paragraph__WEBPACK_IMPORTED_MODULE_5___default.a,
    };
    return CarSupBrandComponent;
}(san__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (CarSupBrandComponent);
/* san-hmr disable */ 


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baidu_cosmic_card_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var _baidu_cosmic_card_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_baidu_cosmic_card_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_component_car_component_car_header_cosmic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var _app_component_car_component_car_header_cosmic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_component_car_component_car_header_cosmic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_component_car_component_car_source_cosmic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72);
/* harmony import */ var _app_component_car_component_car_source_cosmic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_app_component_car_component_car_source_cosmic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_baike_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74);
/* harmony import */ var _components_baike_info__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_baike_info__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_tab_info__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(75);
/* harmony import */ var _components_tab_info__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_tab_info__WEBPACK_IMPORTED_MODULE_5__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var DefaultCardComponent = /** @class */ (function (_super) {
    __extends(DefaultCardComponent, _super);
    function DefaultCardComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DefaultCardComponent.prototype.initData = function () {
        return {
            isCardType: '',
            imgPublicData: {},
            baseCnf: {},
            tplInfo: {},
            fieldsData: {},
            ubcData: {},
            commonInfo: {},
            componentInfo: {},
        };
    };
    DefaultCardComponent.prototype.created = function () {
        console.log('index.san', this.data.get());
    };
    DefaultCardComponent.ssr = 'render-hydrate';
    DefaultCardComponent.components = {
        'cosc-card': _baidu_cosmic_card_card__WEBPACK_IMPORTED_MODULE_1___default.a,
        'car-header-cosmic': _app_component_car_component_car_header_cosmic__WEBPACK_IMPORTED_MODULE_2___default.a,
        'car-source-cosmic': _app_component_car_component_car_source_cosmic__WEBPACK_IMPORTED_MODULE_3___default.a,
        'baike-info': _components_baike_info__WEBPACK_IMPORTED_MODULE_4___default.a,
        'tab-info': _components_tab_info__WEBPACK_IMPORTED_MODULE_5___default.a,
    };
    // 组件触发函数
    DefaultCardComponent.messages = {
        tabChange: function (arg) {
            var _a = arg.value, url = _a.url, urlParams = _a.urlParams;
            this.data.set('commonInfo.sourceUrl', url);
            this.data.set('commonInfo.cardParams', urlParams);
            // tab切换后，pc端的标题跳链也跟着变更
            this.data.set('fieldsData.headerParams', urlParams);
        }
    };
    DefaultCardComponent.filters = {
        json: function (extObj) {
            return JSON.stringify(extObj);
        }
    };
    return DefaultCardComponent;
}(_baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (DefaultCardComponent);
/* san-hmr disable */ 


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baidu_cosmic_card_feedback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73);
/* harmony import */ var _baidu_cosmic_card_feedback__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_baidu_cosmic_card_feedback__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_baozhang_pc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var _components_baozhang_pc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_baozhang_pc__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_baozhang_wise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);
/* harmony import */ var _components_baozhang_wise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_baozhang_wise__WEBPACK_IMPORTED_MODULE_3__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};




var CarSourceNewComponent = /** @class */ (function (_super) {
    __extends(CarSourceNewComponent, _super);
    function CarSourceNewComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CarSourceNewComponent.prototype.initData = function () {
        return {
            // ----------必传参数----------
            // 是否是pc环境【boolean类型】
            isPc: false,
            // 是否是首位或退位卡【boolean类型】
            isFirst: false,
            // 来源跳链【string类型】
            sourceUrl: '',
            // 来源跳链【string类型 | object类型】
            sourceParams: '',
            // 来源配置【object类型】
            sourceData: {},
            // 模板信息【object类型】
            tplInfo: {},
            // ubc打点的公共参数【object类型】
            ubcPublic: {},
            // ----------非必传参数----------
            // 是否展示保障标【boolean类型】
            isBaozhang: false,
            // wise端距离顶部的距离
            sourceWisePaddingTop: ''
        };
    };
    CarSourceNewComponent.ssr = 'render-hydrate';
    CarSourceNewComponent.components = {
        'cosc-feedback': _baidu_cosmic_card_feedback__WEBPACK_IMPORTED_MODULE_1___default.a,
        'baozhang-pc': _components_baozhang_pc__WEBPACK_IMPORTED_MODULE_2___default.a,
        'baozhang-wise': _components_baozhang_wise__WEBPACK_IMPORTED_MODULE_3___default.a,
    };
    CarSourceNewComponent.filters = {
        json: function (extObj) {
            var ubcPublic = this.data.get('ubcPublic');
            return JSON.stringify(__assign(__assign({}, ubcPublic), extObj));
        }
    };
    CarSourceNewComponent.computed = {
        toolsProps: function () {
            return {
                title: this.data.get('sourceData.text'),
                url: this.data.get('sourceUrl')
            };
        },
    };
    return CarSourceNewComponent;
}(_baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (CarSourceNewComponent);
/* san-hmr disable */ 


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baidu_cosmic_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _baidu_cosmic_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_baidu_cosmic_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _baidu_cosmic_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _baidu_cosmic_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_baidu_cosmic_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _baidu_cosmic_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var _baidu_cosmic_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_baidu_cosmic_icon__WEBPACK_IMPORTED_MODULE_3__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var BaikeComponent = /** @class */ (function (_super) {
    __extends(BaikeComponent, _super);
    function BaikeComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BaikeComponent.prototype.initData = function () {
        return {
            baseCnf: {},
            tplInfo: {},
            ubcPublic: {},
            commonInfo: {},
            dsInfo: {},
            baikeInfo: {},
        };
    };
    BaikeComponent.trimWhitespace = 'all';
    BaikeComponent.components = {
        'cos-image': _baidu_cosmic_image__WEBPACK_IMPORTED_MODULE_1___default.a,
        'cos-tag': _baidu_cosmic_tag__WEBPACK_IMPORTED_MODULE_2___default.a,
        'cos-icon': _baidu_cosmic_icon__WEBPACK_IMPORTED_MODULE_3___default.a
    };
    BaikeComponent.filters = {
        json: function (extObj) {
            return JSON.stringify(extObj);
        }
    };
    return BaikeComponent;
}(_baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (BaikeComponent);
/* san-hmr disable */ 


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baidu_www_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _baidu_www_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_baidu_www_api__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _baidu_cosmic_more_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var _baidu_cosmic_more_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_baidu_cosmic_more_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_component_car_component_car_tabs_cosmic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76);
/* harmony import */ var _app_component_car_component_car_tabs_cosmic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_app_component_car_component_car_tabs_cosmic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wise_series_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80);
/* harmony import */ var _wise_series_info__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wise_series_info__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _pc_series_info__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81);
/* harmony import */ var _pc_series_info__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_pc_series_info__WEBPACK_IMPORTED_MODULE_5__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};






var TabInfoComponent = /** @class */ (function (_super) {
    __extends(TabInfoComponent, _super);
    function TabInfoComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TabInfoComponent.prototype.injectService = function (inject) {
        this.alaLog = inject(_baidu_www_api__WEBPACK_IMPORTED_MODULE_1__["AlaLog"]);
        this.ubcLog = inject(_baidu_www_api__WEBPACK_IMPORTED_MODULE_1__["UbcLog"]);
    };
    TabInfoComponent.prototype.initData = function () {
        return {
            imgPublicData: {},
            baseCnf: {},
            tplInfo: {},
            ubcPublic: {},
            commonInfo: {},
            tabActiveIndex: 0,
            tabList: [],
        };
    };
    // UBC打点
    TabInfoComponent.prototype.sendUbcLog = function (type, extra) {
        var _a;
        if (extra === void 0) { extra = {}; }
        (_a = this.ubcLog) === null || _a === void 0 ? void 0 : _a.sendLog({
            type: type,
            ext: __assign(__assign({}, this.data.get('ubcPublic')), extra)
        }, this.data.get('tplInfo'));
    };
    TabInfoComponent.trimWhitespace = 'all';
    TabInfoComponent.ssr = 'render-hydrate';
    TabInfoComponent.components = {
        'cos-more-link': _baidu_cosmic_more_link__WEBPACK_IMPORTED_MODULE_2___default.a,
        'car-tabs-cosmic': _app_component_car_component_car_tabs_cosmic__WEBPACK_IMPORTED_MODULE_3___default.a,
        'series-info': _wise_series_info__WEBPACK_IMPORTED_MODULE_4___default.a,
        'series-info-pc': _pc_series_info__WEBPACK_IMPORTED_MODULE_5___default.a
    };
    TabInfoComponent.filters = {
        json: function (extObj) {
            return JSON.stringify(extObj);
        }
    };
    TabInfoComponent.messages = {
        tabChange: function (arg) {
            var _a;
            var params = arg.value.params;
            var index = params.index;
            this.data.set('currentTab', index);
            var tplInfo = this.data.get('tplInfo');
            var tabList = this.data.get('tabList');
            this.dispatch('tabChange', tabList[index]);
            this.sendUbcLog('click', {
                type: 'click',
                srcid: tplInfo.srcid || '',
                qid: tplInfo.lid,
                page: (tplInfo === null || tplInfo === void 0 ? void 0 : tplInfo.tplname) || '',
                // eslint-disable-next-line camelcase
                clk_type: 'tab',
                module: "tab_".concat(index)
            });
            (_a = this.alaLog) === null || _a === void 0 ? void 0 : _a.send({
                type: 't',
                cyc: 1,
                action: "tab_".concat(index),
                extra: JSON.stringify({
                    actType: 'tab',
                    label: 'tab',
                    labid: index
                }),
                // eslint-disable-next-line camelcase
                clk_extra: JSON.stringify({
                    srcid: tplInfo.srcid,
                    tplname: tplInfo.tplname
                })
            }, tplInfo);
        }
    };
    return TabInfoComponent;
}(_baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (TabInfoComponent);
/* san-hmr disable */ 


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baidu_www_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _baidu_www_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_baidu_www_api__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _baidu_cosmic_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77);
/* harmony import */ var _baidu_cosmic_tabs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_baidu_cosmic_tabs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _baidu_cosmic_tab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78);
/* harmony import */ var _baidu_cosmic_tab__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_baidu_cosmic_tab__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _baidu_cosmic_tab_pane__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79);
/* harmony import */ var _baidu_cosmic_tab_pane__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_baidu_cosmic_tab_pane__WEBPACK_IMPORTED_MODULE_4__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var CarTabsCosmicComponent = /** @class */ (function (_super) {
    __extends(CarTabsCosmicComponent, _super);
    function CarTabsCosmicComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CarTabsCosmicComponent.prototype.injectService = function (inject) {
        this.ubcLog = inject(_baidu_www_api__WEBPACK_IMPORTED_MODULE_1__["UbcLog"]);
    };
    CarTabsCosmicComponent.prototype.initData = function () {
        return {
            /**
             * 说明：用Cosmic组件库封装的【tabs选项卡】（实现5位后不显示Tab bar功能）
             * 背景：tabs选项卡在【Search-components】只存在一个TabPane时，不显示Tab Bar。在【Cosmic组件库】无此功能，但ue稿中5位后是不显示Tab Bar的，故简单封装一下。
             */
            // 模板信息【object类型】
            tplInfo: {},
            // 是否是首位或退位卡【boolean类型】
            isFirst: false,
            // 只有一项tab时是否要显示Tab bar【boolean类型】
            isTabNavShow: false,
            // tabs选项卡组件的数据【array类型】
            tabArray: [],
            activeIndex: 0
        };
    };
    CarTabsCosmicComponent.prototype.handleChange = function (params) {
        var _this = this;
        var _a;
        (_a = window.event) === null || _a === void 0 ? void 0 : _a.stopPropagation();
        this.dispatch('tabChange', { params: params });
        this.nextTick(function () {
            var _a;
            _this.ref('tabContent') && ((_a = _this.ubcLog) === null || _a === void 0 ? void 0 : _a.registerObserver(_this.ref('tabContent')));
        });
    };
    CarTabsCosmicComponent.trimWhitespace = 'all';
    CarTabsCosmicComponent.ssr = 'render-hydrate';
    CarTabsCosmicComponent.components = {
        'cos-tabs': _baidu_cosmic_tabs__WEBPACK_IMPORTED_MODULE_2___default.a,
        'cos-tab': _baidu_cosmic_tab__WEBPACK_IMPORTED_MODULE_3___default.a,
        'cos-tab-pane': _baidu_cosmic_tab_pane__WEBPACK_IMPORTED_MODULE_4___default.a
    };
    CarTabsCosmicComponent.computed = {
        // 公共tab组件 锚定tab兜底，若锚定的下标 > tab数量 则以tab数量为准，否则不出tab区域(除非你点tab，但5为后不显示tab切换区域，那不就空了吗？)
        activeIndexReal: function () {
            var activeIndex = this.data.get('activeIndex');
            var tabArray = this.data.get('tabArray');
            if (activeIndex > tabArray.length - 1) {
                activeIndex = tabArray.length - 1;
            }
            return activeIndex;
        }
    };
    return CarTabsCosmicComponent;
}(_baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (CarTabsCosmicComponent);
/* san-hmr disable */ 


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baidu_cosmic_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _baidu_cosmic_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_baidu_cosmic_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _baidu_cosmic_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);
/* harmony import */ var _baidu_cosmic_button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_baidu_cosmic_button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _baidu_cosmic_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);
/* harmony import */ var _baidu_cosmic_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_baidu_cosmic_tag__WEBPACK_IMPORTED_MODULE_3__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var MyComponent = /** @class */ (function (_super) {
    __extends(MyComponent, _super);
    function MyComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyComponent.prototype.initData = function () {
        return {
            imgPublicData: {},
            baseCnf: {},
            tabItem: {},
            tabIndex: 0
        };
    };
    MyComponent.trimWhitespace = 'all';
    MyComponent.components = {
        'cos-image': _baidu_cosmic_image__WEBPACK_IMPORTED_MODULE_1___default.a,
        'cos-button': _baidu_cosmic_button__WEBPACK_IMPORTED_MODULE_2___default.a,
        'cos-tag': _baidu_cosmic_tag__WEBPACK_IMPORTED_MODULE_3___default.a,
    };
    MyComponent.filters = {
        json: function (extObj) {
            return JSON.stringify(extObj);
        },
    };
    return MyComponent;
}(_baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (MyComponent);
/* san-hmr disable */ 


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baidu_cosmic_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _baidu_cosmic_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_baidu_cosmic_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _baidu_cosmic_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);
/* harmony import */ var _baidu_cosmic_button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_baidu_cosmic_button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _baidu_cosmic_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);
/* harmony import */ var _baidu_cosmic_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_baidu_cosmic_tag__WEBPACK_IMPORTED_MODULE_3__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var MyComponent = /** @class */ (function (_super) {
    __extends(MyComponent, _super);
    function MyComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyComponent.prototype.initData = function () {
        return {
            imgPublicData: {},
            baseCnf: {},
            tabItem: {},
            tabIndex: 0
        };
    };
    MyComponent.prototype.created = function () {
        console.log('chexi', this.data.get());
    };
    MyComponent.trimWhitespace = 'all';
    MyComponent.components = {
        'cos-image': _baidu_cosmic_image__WEBPACK_IMPORTED_MODULE_1___default.a,
        'cos-button': _baidu_cosmic_button__WEBPACK_IMPORTED_MODULE_2___default.a,
        'cos-tag': _baidu_cosmic_tag__WEBPACK_IMPORTED_MODULE_3___default.a,
    };
    MyComponent.filters = {
        json: function (extObj) {
            return JSON.stringify(extObj);
        },
    };
    return MyComponent;
}(_baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (MyComponent);
/* san-hmr disable */ 


/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__48__;

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__49__;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(3);
        var style0 = __webpack_require__(92);
var injectStyles = [{exportAs: undefined, style: style0}];

        var template = __webpack_require__(94);
        
        var script = __webpack_require__(26).default;
        module.exports = __webpack_require__(26);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(3);
        var style0 = __webpack_require__(98);
var injectStyles = [{exportAs: undefined, style: style0}];

        var template = __webpack_require__(100);
        
        var script = __webpack_require__(28).default;
        module.exports = __webpack_require__(28);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(3);
        var style0 = __webpack_require__(101);
var injectStyles = [{exportAs: undefined, style: style0}];

        var template = __webpack_require__(103);
        
        var script = __webpack_require__(29).default;
        module.exports = __webpack_require__(29);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(3);
        var promptWise = __webpack_require__(104);
var promptPc = __webpack_require__(106);
var myLabelTitlePc = __webpack_require__(108);
var style3 = __webpack_require__(110);
var injectStyles = [{exportAs: 'promptWise', style: promptWise}, {exportAs: 'promptPc', style: promptPc}, {exportAs: 'myLabelTitlePc', style: myLabelTitlePc}, {exportAs: undefined, style: style3}];

        var template = __webpack_require__(112);
        
        var script = __webpack_require__(30).default;
        module.exports = __webpack_require__(30);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__54__;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(3);
        var style0 = __webpack_require__(113);
var injectStyles = [{exportAs: undefined, style: style0}];

        var template = __webpack_require__(115);
        
        var script = __webpack_require__(31).default;
        module.exports = __webpack_require__(31);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__56__;

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__57__;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(3);
        var myTabs = __webpack_require__(122);
var myTabsOneAfter = __webpack_require__(124);
var morePc = __webpack_require__(126);
var moreWiseBigFont = __webpack_require__(128);
var style4 = __webpack_require__(130);
var injectStyles = [{exportAs: 'myTabs', style: myTabs}, {exportAs: 'myTabsOneAfter', style: myTabsOneAfter}, {exportAs: 'morePc', style: morePc}, {exportAs: 'moreWiseBigFont', style: moreWiseBigFont}, {exportAs: undefined, style: style4}];

        var template = __webpack_require__(132);
        
        var script = __webpack_require__(34).default;
        module.exports = __webpack_require__(34);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__59__;

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__60__;

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__61__;

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__62__;

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__63__;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(3);
        var style0 = __webpack_require__(140);
var injectStyles = [{exportAs: undefined, style: style0}];

        var template = __webpack_require__(142);
        
        var script = __webpack_require__(36).default;
        module.exports = __webpack_require__(36);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(3);
        var style0 = __webpack_require__(143);
var injectStyles = [{exportAs: undefined, style: style0}];

        var template = __webpack_require__(145);
        
        var script = __webpack_require__(37).default;
        module.exports = __webpack_require__(37);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__66__;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(3);
        var myParagraph = __webpack_require__(146);
var style1 = __webpack_require__(148);
var injectStyles = [{exportAs: 'myParagraph', style: myParagraph}, {exportAs: undefined, style: style1}];

        var template = __webpack_require__(150);
        
        var script = __webpack_require__(38).default;
        module.exports = __webpack_require__(38);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__68__;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(3);
        var style0 = __webpack_require__(151);
var injectStyles = [{exportAs: undefined, style: style0}];

        var template = __webpack_require__(153);
        
        var script = __webpack_require__(39).default;
        module.exports = __webpack_require__(39);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(3);
        var style0 = __webpack_require__(154);
var injectStyles = [{exportAs: undefined, style: style0}];

        var template = __webpack_require__(156);
        
        var script = __webpack_require__(40).default;
        module.exports = __webpack_require__(40);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(3);
        var style0 = __webpack_require__(157);
var injectStyles = [{exportAs: undefined, style: style0}];

        var template = __webpack_require__(159);
        
        var script = __webpack_require__(41).default;
        module.exports = __webpack_require__(41);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(3);
        var style0 = __webpack_require__(160);
var injectStyles = [{exportAs: undefined, style: style0}];

        var template = __webpack_require__(162);
        
        var script = __webpack_require__(42).default;
        module.exports = __webpack_require__(42);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__73__;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(3);
        var style0 = __webpack_require__(163);
var injectStyles = [{exportAs: undefined, style: style0}];

        var template = __webpack_require__(165);
        
        var script = __webpack_require__(43).default;
        module.exports = __webpack_require__(43);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(3);
        var style0 = __webpack_require__(166);
var injectStyles = [{exportAs: undefined, style: style0}];

        var template = __webpack_require__(168);
        
        var script = __webpack_require__(44).default;
        module.exports = __webpack_require__(44);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(3);
        var style0 = __webpack_require__(169);
var injectStyles = [{exportAs: undefined, style: style0}];

        var template = __webpack_require__(171);
        
        var script = __webpack_require__(45).default;
        module.exports = __webpack_require__(45);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__77__;

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__78__;

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__79__;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(3);
        var style0 = __webpack_require__(172);
var injectStyles = [{exportAs: undefined, style: style0}];

        var template = __webpack_require__(174);
        
        var script = __webpack_require__(46).default;
        module.exports = __webpack_require__(46);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(3);
        var style0 = __webpack_require__(175);
var injectStyles = [{exportAs: undefined, style: style0}];

        var template = __webpack_require__(177);
        
        var script = __webpack_require__(47).default;
        module.exports = __webpack_require__(47);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(83);


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(3);
        var cardSupStyle = __webpack_require__(84);
var style1 = __webpack_require__(86);
var injectStyles = [{exportAs: 'cardSupStyle', style: cardSupStyle}, {exportAs: undefined, style: style1}];

        var template = __webpack_require__(88);
        
        var script = __webpack_require__(24).default;
        module.exports = __webpack_require__(24);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(85);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(2)["default"]
var update = add("461002ec", content, true, {"manualInject":true});

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".aladdin_1IL5M{padding-left:0;padding-right:0}", ""]);
// Exports
exports.locals = {
	"aladdin": "aladdin_1IL5M"
};
module.exports = exports;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(87);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(2)["default"]
var update = add("461002ec", content, true, {"manualInject":true});

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".card-custom_2g0wP .cosc-card-shadow::after{border-color:rgba(0,200,200,.18)}.car-tabs-con_7kK4s{margin-top:var(--cos-space-md)}.cos-pc .car-tabs-con_7kK4s{margin-top:var(--cos-space-lg)}.cos-pc .car-tabs-con_7kK4s.pc-fresh-top_2gGIT{margin-top:var(--cos-space-md)}.cos-pc .car-tabs-con_7kK4s.car-tabs-con-nobaike_1ulOY{margin-top:var(--cos-space-none)}.car-tabs-con_7kK4s.car-tabs-con-living_2WAlQ{margin-top:var(--cos-space-sm)}.car-tabs-con_7kK4s.car-tabs-con-nobaike_1ulOY{margin-top:var(--cos-space-none)}.card-sup-box_igDEE{margin:0 .13rem;padding-bottom:.045rem}.car-tabs-con-sup_4tVx4{padding-top:.18rem}.car-tabs-con-sup-nobrand_3i4Vd{padding-top:0}", ""]);
// Exports
exports.locals = {
	"card-custom": "card-custom_2g0wP",
	"cardCustom": "card-custom_2g0wP",
	"car-tabs-con": "car-tabs-con_7kK4s",
	"carTabsCon": "car-tabs-con_7kK4s",
	"pc-fresh-top": "pc-fresh-top_2gGIT",
	"pcFreshTop": "pc-fresh-top_2gGIT",
	"car-tabs-con-nobaike": "car-tabs-con-nobaike_1ulOY",
	"carTabsConNobaike": "car-tabs-con-nobaike_1ulOY",
	"car-tabs-con-living": "car-tabs-con-living_2WAlQ",
	"carTabsConLiving": "car-tabs-con-living_2WAlQ",
	"card-sup-box": "card-sup-box_igDEE",
	"cardSupBox": "card-sup-box_igDEE",
	"car-tabs-con-sup": "car-tabs-con-sup_4tVx4",
	"carTabsConSup": "car-tabs-con-sup_4tVx4",
	"car-tabs-con-sup-nobrand": "car-tabs-con-sup-nobrand_3i4Vd",
	"carTabsConSupNobrand": "car-tabs-con-sup-nobrand_3i4Vd"
};
module.exports = exports;


/***/ }),
/* 88 */
/***/ (function(module, exports) {

// Module
var code = [1,"div",6,2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",null,3,"\n        ",1,"default-card",2,38,6,2,3,"defaultData",3,"isCardType",42,6,1,3,"defaultData",1,1,"div",9,2,"data-ucfg",6,2,3,"ubcData",3,"dataUcfg",2,"data-ushow",6,2,3,"ubcData",3,"dataUbcShow",2,"data-uclk",6,2,3,"ubcData",3,"dataUbcClk",33,"ubc-show",3,"",33,"ubc-clk",3,"",40,null,3,"\n            \n            ",1,"template",4,38,11,33,6,1,3,"isSup",null,3,"\n                ",1,"cos-card",19,2,"class",7,null,12,6,1,3,"pcFreshWrapper",6,2,3,"$style",3,"card-custom",3,"",1,8,6,1,3,"_class",null,2,"tpl-info",6,1,3,"tplInfo",2,"link-info",6,1,3,"cardUrlCos",33,"touchable",3,"",2,"shadow",10,76,6,1,3,"isPc",6,1,3,"isFirst",2,"light-bg",6,2,3,"fieldsData",3,"bgProps",null,3,"\n                    \n                    ",1,"car-header-cosmic",9,2,"is-pc",6,1,3,"isPc",2,"is-first",6,1,3,"isFirst",2,"is-first-adv",6,1,3,"isFirstAdv",2,"tpl-info",6,1,3,"tplInfo",2,"main-title",6,1,3,"mainTitle",2,"sub-title",6,1,3,"subTitle",2,"ubc-public",6,2,3,"ubcData",3,"ubcPublic",2,"fields-data",6,1,3,"fieldsData",38,11,33,6,1,3,"isPc",1,1,"car-new-kg-header",14,2,"is-pc",6,1,3,"isPc",2,"is-first",6,1,3,"isFirst",2,"is-first-adv",6,1,3,"isFirstAdv",2,"header-url",6,1,3,"cardUrl",2,"bg-img",6,2,3,"imgPublicData",3,"bgImg",2,"icon-img",6,2,3,"imgPublicData",3,"iconImg",2,"icon-img-dark",6,2,3,"imgPublicData",3,"iconImgDark",2,"main-title",6,1,3,"mainTitle",2,"sub-title",6,1,3,"subTitle",2,"ubc-public",6,2,3,"ubcData",3,"ubcPublic",2,"pc-fresh-wrapper",6,1,3,"pcFreshWrapper",2,"pc-fresh-smooth",6,1,3,"pcFreshSmooth",2,"pc-fresh-title",6,1,3,"pcFreshTitle",40,null,3,"\n                    \n                    ",1,"div",4,38,6,1,3,"baikeShow",null,3,"\n                        ",1,"car-baike",5,2,"is-harmony",6,1,3,"isHarmony",2,"is-pc",6,1,3,"isPc",2,"is-first",6,1,3,"isFirst",2,"bk-url",6,1,3,"bkUrl",2,"baike",6,1,3,"baike",null,3,"\n                    ",null,null,3,"\n\n                    \n                    ",1,"live-info",4,2,"is-first",6,1,3,"isFirst",2,"tpl-info",6,1,3,"tplInfo",2,"live-info",6,2,3,"compInfo",3,"liveInfo",38,6,2,3,"compInfo",3,"liveShow",null,null,3,"\n\n                    \n                    ",1,"div",5,2,"class",7,null,16,4,17,6,2,3,"$style",3,"car-tabs-con",17,12,6,1,3,"pcFreshWrapper",6,2,3,"$style",3,"pc-fresh-top",3,"",17,12,6,2,3,"compInfo",3,"liveShow",6,2,3,"$style",3,"car-tabs-con-living",3,"",17,12,10,248,6,1,3,"baikeShow",6,2,3,"compInfo",3,"liveShow",3,"",6,2,3,"$style",3,"car-tabs-con-nobaike",1,8,6,1,3,"_class",null,38,10,76,6,1,3,"recombSeriesList",6,2,3,"recombSeriesList",3,"length",null,3,"\n                        ",1,"car-tabs",8,2,"is-pc",6,1,3,"isPc",2,"is-first",6,1,3,"isFirst",2,"white-img-type",6,1,3,"whiteImgType",2,"tpl-info",6,1,3,"tplInfo",2,"img-public-data",6,1,3,"imgPublicData",2,"recomb-series-list",6,1,3,"recombSeriesList",2,"ubc-public",6,2,3,"ubcData",3,"ubcPublic",2,"pc-fresh-wrapper",6,1,3,"pcFreshWrapper",null,3,"\n                    ",null,null,3,"\n\n                    \n                    ",1,"footer",4,38,10,248,6,1,3,"pcFreshWrapper",11,33,6,1,3,"isPc",null,3,"\n                        ",1,"car-source-new",8,2,"is-pc",6,1,3,"isPc",2,"is-first",6,1,3,"isFirst",2,"tpl-info",6,1,3,"tplInfo",2,"source-data",6,1,3,"sourceData",2,"source-url",6,1,3,"sourceUrl",2,"source-params",6,1,3,"cardUrl",2,"ubc-public",6,2,3,"ubcData",3,"ubcPublic",2,"pc-fresh-wrapper",6,1,3,"pcFreshWrapper",null,3,"\n                    ",null,null,3,"\n                    ",1,"div",5,2,"slot",3,"footer",38,11,33,10,248,6,1,3,"pcFreshWrapper",11,33,6,1,3,"isPc",null,3,"\n                        ",1,"car-source-new",7,2,"is-pc",6,1,3,"isPc",2,"is-first",6,1,3,"isFirst",2,"tpl-info",6,1,3,"tplInfo",2,"source-data",6,1,3,"sourceData",2,"source-url",6,1,3,"sourceUrl",2,"source-params",6,1,3,"cardUrl",2,"ubc-public",6,2,3,"ubcData",3,"ubcPublic",null,3,"\n                    ",null,null,3,"\n                ",null,3,"\n            ",1,1,"template",4,40,null,3,"\n                ",1,"sc-aladdin",7,2,"tpl-info",6,1,3,"tplInfo",2,"url-params",6,2,3,"supObj",3,"cardParams",33,"touchable",3,"",2,"styles",6,1,3,"$cardSupStyle",null,3,"\n                    ",1,"div",10,2,"data-uclk",7,null,13,1,14,3,"module",3,"series_title",1,8,6,1,3,"json",null,33,"ubc-clk",3,"",2,"class",7,null,6,2,3,"$style",3,"card-sup-box",1,8,6,1,3,"_class",null,null,3,"\n                        \n                        ",1,"sc-grouptitle",3,2,"text",6,3,3,"supObj",3,"titleSup",3,"title",2,"url-params",6,3,3,"supObj",3,"titleSup",3,"titleParams",33,"arrow",3,"",null,3,"\n                        \n                        ",1,"car-sup-brand",2,2,"brand-info",6,2,3,"supObj",3,"brandSup",38,6,2,3,"supObj",3,"brandShow",null,null,3,"\n                        \n                        ",1,"div",5,2,"class",7,null,16,2,17,6,2,3,"$style",3,"car-tabs-con-sup",17,12,6,2,3,"supObj",3,"brandShow",3,"",6,2,3,"$style",3,"car-tabs-con-sup-nobrand",1,8,6,1,3,"_class",null,38,10,76,6,1,3,"recombSeriesList",6,2,3,"recombSeriesList",3,"length",null,3,"\n                            ",1,"car-tabs",8,2,"is-pc",6,1,3,"isPc",2,"is-first",6,1,3,"isFirst",2,"is-sup",6,1,3,"isSup",2,"tpl-info",6,1,3,"tplInfo",2,"img-public-data",6,1,3,"imgPublicData",2,"recomb-series-list",6,1,3,"recombSeriesList",2,"card-params",6,2,3,"supObj",3,"cardParams",2,"ubc-public",6,2,3,"ubcData",3,"ubcPublic",null,3,"\n                        ",null,null,3,"\n                    ",null,3,"\n                ",null,3,"\n            ",null,3,"\n        ",null,3,"\n    "];
// Exports
module.exports = code;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(90);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(2)["default"]
var update = add("09076a88", content, true, {"manualInject":true});

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".my-header-cos_7LS3b{--header-pb:var(--cos-space-md);position:relative;margin:-.21rem -12px var(--cos-space-none);padding:var(--cos-space-xl) var(--cos-space-sm) var(--header-pb)}.cos-fresh .my-header-cos_7LS3b{margin:-.18rem -17px var(--cos-space-none);padding:var(--cos-space-lg) 17px var(--header-pb)}.my-header-cos_7LS3b.my-header-cos-pb-none_6rT1g{padding-bottom:var(--cos-space-none)}.my-header-cos_7LS3b.my-header-cos-pb-none_6rT1g .header-bg_4GQRE{height:calc(100% + var(--header-pb))}.my-header-cos_7LS3b .header-content_1QXdc{position:relative;z-index:1}.my-header-cos_7LS3b .header-bg_4GQRE{position:absolute;top:1px;left:0;z-index:0;width:100%;height:100%;background-image:var(--bg-img);background-repeat:no-repeat;-webkit-background-size:100% auto;background-size:100% auto;border-radius:var(--cos-rounded-md) var(--cos-rounded-md) var(--cos-rounded-none) var(--cos-rounded-none)}.cos-fresh .my-header-cos_7LS3b .header-bg_4GQRE{top:0}.cos-wise .c-darkmode .my-header-cos_7LS3b .header-bg_4GQRE{background-image:var(--bg-img-dark)}@media (prefers-color-scheme:dark){.cos-wise .my-header-cos_7LS3b .header-bg_4GQRE{background-image:var(--bg-img-dark)}}.cos-fresh .my-header-cos_7LS3b .header-bg_4GQRE{top:0}.cos-fresh .my-header-cos_7LS3b .header-bg_4GQRE.header-bg-first-adv_48hO6{border-radius:var(--cos-rounded-none)}.my-header-cos_7LS3b .header-bg_4GQRE.header-bg-higher_6tM4j{height:120px;-webkit-background-size:100% 100%;background-size:100% 100%}", ""]);
// Exports
exports.locals = {
	"my-header-cos": "my-header-cos_7LS3b",
	"myHeaderCos": "my-header-cos_7LS3b",
	"my-header-cos-pb-none": "my-header-cos-pb-none_6rT1g",
	"myHeaderCosPbNone": "my-header-cos-pb-none_6rT1g",
	"header-bg": "header-bg_4GQRE",
	"headerBg": "header-bg_4GQRE",
	"header-content": "header-content_1QXdc",
	"headerContent": "header-content_1QXdc",
	"header-bg-first-adv": "header-bg-first-adv_48hO6",
	"headerBgFirstAdv": "header-bg-first-adv_48hO6",
	"header-bg-higher": "header-bg-higher_6tM4j",
	"headerBgHigher": "header-bg-higher_6tM4j"
};
module.exports = exports;


/***/ }),
/* 91 */
/***/ (function(module, exports) {

// Module
var code = [1,"div",6,2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",null,3,"\n        \n        ",1,"fragment",4,38,11,33,6,1,3,"isPc",null,3,"\n            \n            ",1,"div",9,2,"data-uclk",7,null,13,1,14,3,"module",3,"title",1,8,6,1,3,"json",null,33,"ubc-clk",3,"",2,"class",7,null,16,2,17,6,2,3,"$style",3,"my-header-cos",17,12,6,1,3,"isSpaceBottomNone",6,2,3,"$style",3,"my-header-cos-pb-none",3,"",1,8,6,1,3,"_class",null,38,10,76,6,1,3,"isFirst",6,1,3,"isFirstShow",null,3,"\n                ",1,"div",4,2,"class",7,null,6,2,3,"$style",3,"header-content",1,8,6,1,3,"_class",null,null,3,"\n                    \n                    ",1,"header-con-bigimg",10,2,"is-first",6,1,3,"isFirst",2,"is-logo-show",6,1,3,"isLogoShow",2,"tpl-info",6,1,3,"tplInfo",2,"logo-params",6,1,3,"headerUrl",2,"recommend-info",6,1,3,"recommendInfo",2,"main-title",6,1,3,"mainTitle",2,"sub-title",6,1,3,"subTitle",2,"live-info",6,1,3,"liveInfo",2,"fields-data",6,1,3,"fieldsData",38,6,2,3,"fieldsData",3,"bigImgType",1,1,"header-con",12,2,"is-first",6,1,3,"isFirst",2,"has-color",6,1,3,"hasColor",2,"is-logo-show",6,1,3,"isLogoShow",2,"is-entry-height",6,1,3,"isEntryHeight",2,"tpl-info",6,1,3,"tplInfo",2,"logo-params",6,1,3,"headerUrl",2,"recommend-info",6,1,3,"recommendInfo",2,"main-title",6,1,3,"mainTitle",2,"sub-title",6,1,3,"subTitle",2,"live-info",6,1,3,"liveInfo",2,"fields-data",6,1,3,"fieldsData",40,null,3,"\n                ",null,3,"\n                \n                ",1,"div",3,2,"style",9,null,5,3,"--bg-img: ",7,null,10,43,10,43,3,"url(",6,2,3,"fieldsData",3,"bgImg",3,")",1,8,6,1,3,"_style",null,3,";\n                            --bg-img-dark: ",7,null,12,6,2,3,"fieldsData",3,"bgImgDark",10,43,10,43,3,"url(",6,2,3,"fieldsData",3,"bgImgDark",3,")",10,43,10,43,3,"url(",6,2,3,"fieldsData",3,"bgImg",3,")",1,8,6,1,3,"_style",null,3,";",2,"class",7,null,16,3,17,6,2,3,"$style",3,"header-bg",17,12,6,1,3,"isFirstAdv",6,2,3,"$style",3,"header-bg-first-adv",3,"",17,12,10,183,6,2,3,"tplInfo",3,"tplname",3,"car_kg2_san",6,2,3,"$style",3,"header-bg-higher",3,"",1,8,6,1,3,"_class",null,38,6,1,3,"isBgImage",null,null,3,"\n            ",1,1,"div",7,2,"data-uclk",7,null,13,1,14,3,"module",3,"title",1,8,6,1,3,"json",null,33,"ubc-clk",3,"",2,"class",7,null,12,6,1,3,"isSpaceBottomNone",3,"",3,"cos-space-mb-md",1,8,6,1,3,"_class",null,40,null,3,"\n                ",1,"header-con",10,2,"is-first",6,1,3,"isFirst",2,"is-first-show",6,1,3,"isFirstShow",2,"is-logo-show",6,1,3,"isLogoShow",2,"tpl-info",6,1,3,"tplInfo",2,"logo-params",6,1,3,"headerUrl",2,"recommend-info",6,1,3,"recommendInfo",2,"main-title",6,1,3,"mainTitle",2,"sub-title",6,1,3,"subTitle",2,"live-info",6,1,3,"liveInfo",2,"fields-data",6,1,3,"fieldsData",null,3,"\n            ",null,3,"\n        ",1,1,"fragment",4,40,null,3,"\n            \n            ",1,"div",6,2,"data-uclk",7,null,13,1,14,3,"module",3,"title",1,8,6,1,3,"json",null,33,"ubc-clk",3,"",38,10,76,6,1,3,"isFirst",6,1,3,"isFirstShow",null,3,"\n                ",1,"div",4,2,"class",7,null,6,2,3,"$style",3,"header-content",1,8,6,1,3,"_class",null,null,3,"\n                    ",1,"header-con-pc",9,2,"is-first",6,1,3,"isFirst",2,"is-logo-show",6,1,3,"isLogoShow",2,"tpl-info",6,1,3,"tplInfo",2,"logo-params",6,1,3,"headerUrl",2,"recommend-info",6,1,3,"recommendInfo",2,"main-title",6,1,3,"mainTitle",2,"sub-title",6,1,3,"subTitle",2,"live-info",6,1,3,"liveInfo",2,"fields-data",6,1,3,"fieldsData",null,3,"\n                ",null,3,"\n            ",1,1,"div",7,2,"data-uclk",7,null,13,1,14,3,"module",3,"title",1,8,6,1,3,"json",null,33,"ubc-clk",3,"",2,"class",7,null,12,6,1,3,"isSpaceBottomNone",3,"",3,"cos-space-mb-md",1,8,6,1,3,"_class",null,40,null,3,"\n                ",1,"header-con-pc",9,2,"is-first",6,1,3,"isFirst",2,"is-first-show",6,1,3,"isFirstShow",2,"is-logo-show",6,1,3,"isLogoShow",2,"tpl-info",6,1,3,"tplInfo",2,"recommend-info",6,1,3,"recommendInfo",2,"main-title",6,1,3,"mainTitle",2,"sub-title",6,1,3,"subTitle",2,"live-info",6,1,3,"liveInfo",2,"fields-data",6,1,3,"fieldsData",null,3,"\n            ",null,3,"\n        ",null,3,"\n    "];
// Exports
module.exports = code;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(93);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(2)["default"]
var update = add("826ad4a4", content, true, {"manualInject":true});

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".header-prompt_wRocj{margin-top:var(--cos-space-md);font-weight:var(--cos-font-regular);-webkit-text-stroke:0;font-family:PingFang SC,Arial,sans-serif;font-size:var(--cos-text-subtitle-sm);line-height:var(--cos-leading-subtitle-sm);color:var(--cos-color-text-minor)}.header-prompt_wRocj>p{margin:-4px var(--cos-space-none)}.my-new-kg-title_5ZOwQ{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin-top:var(--cos-space-none);padding-top:var(--cos-space-xl);-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end;width:100%}.my-new-kg-title_5ZOwQ.my-new-kg-title-living_4yuxN{-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-top:var(--cos-space-3xl)}.my-new-kg-title_5ZOwQ .my-head-props_3dHPe{-webkit-box-flex:1;-webkit-flex:1 1 auto;flex:1 1 auto;overflow:hidden}.my-new-kg-title_5ZOwQ .my-head-props_3dHPe .header-title_3R2TX{display:-webkit-box;display:-webkit-flex;display:flex;margin:var(--cos-space-none)}.my-new-kg-title_5ZOwQ .my-head-props_3dHPe .header-title_3R2TX>span{display:block;-webkit-box-orient:inline-axis;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin:-2px var(--cos-space-none) -3px}.my-new-kg-title_5ZOwQ .my-head-props_3dHPe .header-abstract_2u0Os{margin-top:var(--cos-space-xs);font-weight:var(--cos-font-regular);-webkit-text-stroke:0;font-family:PingFang SC,Arial,sans-serif;font-size:var(--cos-text-subtitle-sm);line-height:var(--cos-leading-subtitle-sm);color:var(--cos-color-text-minor)}.my-new-kg-title_5ZOwQ .my-head-props_3dHPe .header-abstract_2u0Os>p{margin:-3px var(--cos-space-none)}.my-new-kg-title_5ZOwQ .my-entry-wrapper_5MoKj{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-left:var(--cos-space-3xs);-webkit-box-flex:0;-webkit-flex:0 0 auto;flex:0 0 auto;height:50px}.my-new-kg-title_5ZOwQ .my-entry-wrapper_5MoKj.my-entry-wrapper-living_4Xmcr{height:0}.my-new-kg-title_5ZOwQ .my-entry-wrapper_5MoKj .my-entry-con_5MBQf .my-head-logo_7q55r .logo-img_7BvrZ{margin-bottom:-9px;height:80px}", ""]);
// Exports
exports.locals = {
	"header-prompt": "header-prompt_wRocj",
	"headerPrompt": "header-prompt_wRocj",
	"my-new-kg-title": "my-new-kg-title_5ZOwQ",
	"myNewKgTitle": "my-new-kg-title_5ZOwQ",
	"my-new-kg-title-living": "my-new-kg-title-living_4yuxN",
	"myNewKgTitleLiving": "my-new-kg-title-living_4yuxN",
	"my-head-props": "my-head-props_3dHPe",
	"myHeadProps": "my-head-props_3dHPe",
	"header-title": "header-title_3R2TX",
	"headerTitle": "header-title_3R2TX",
	"header-abstract": "header-abstract_2u0Os",
	"headerAbstract": "header-abstract_2u0Os",
	"my-entry-wrapper": "my-entry-wrapper_5MoKj",
	"myEntryWrapper": "my-entry-wrapper_5MoKj",
	"my-entry-wrapper-living": "my-entry-wrapper-living_4Xmcr",
	"myEntryWrapperLiving": "my-entry-wrapper-living_4Xmcr",
	"my-entry-con": "my-entry-con_5MBQf",
	"myEntryCon": "my-entry-con_5MBQf",
	"my-head-logo": "my-head-logo_7q55r",
	"myHeadLogo": "my-head-logo_7q55r",
	"logo-img": "logo-img_7BvrZ",
	"logoImg": "logo-img_7BvrZ"
};
module.exports = exports;


/***/ }),
/* 94 */
/***/ (function(module, exports) {

// Module
var code = [1,"div",8,2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_xclass",1,7,null,6,2,3,"$style",3,"header-con",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",null,3,"\n        \n        ",1,"div",6,2,"class",7,null,16,2,17,6,2,3,"$style",3,"my-new-kg-title",17,12,6,1,3,"isStatusTag",6,2,3,"$style",3,"my-new-kg-title-living",3,"",1,8,6,1,3,"_class",null,null,3,"\n            \n            ",1,"div",6,2,"class",7,null,6,2,3,"$style",3,"my-head-props",1,8,6,1,3,"_class",null,null,3,"\n                ",1,"cosc-title",6,2,"class",7,null,6,2,3,"$style",3,"header-title",1,8,6,1,3,"_class",null,2,"link-info",6,1,3,"logoParams",38,6,1,3,"mainTitle",null,3,"\n                    \n                    ",1,"span",2,2,"class",3,"cos-color-text",null,7,1,6,1,3,"mainTitle",null,null,3,"\n                ",null,null,3,"\n                ",1,"div",5,2,"class",7,null,6,2,3,"$style",3,"header-abstract",1,8,6,1,3,"_class",null,38,6,1,3,"subTitle",null,3,"\n                    ",1,"p",2,2,"class",3,"cos-line-clamp-1",null,9,1,3,3,"\n                        \n                        ",7,1,6,1,3,"subTitle",null,3,"\n                    ",null,3,"\n                ",null,null,3,"\n            ",null,3,"\n            \n            ",1,"div",5,2,"class",7,null,16,2,17,6,2,3,"$style",3,"my-entry-wrapper",17,12,6,1,3,"isStatusTag",6,2,3,"$style",3,"my-entry-wrapper-living",3,"",1,8,6,1,3,"_class",null,38,10,60,6,2,3,"tplInfo",3,"order",4,6,null,3,"\n                ",1,"div",4,2,"class",7,null,6,2,3,"$style",3,"my-entry-con",1,8,6,1,3,"_class",null,null,3,"\n                    ",1,"fragment",4,38,6,1,3,"isStatusTag",null,3,"\n                        ",1,"status-tag-header",4,2,"is-first",6,1,3,"isFirst",2,"live-info",6,1,3,"liveInfo",2,"live-experiment",6,2,3,"liveInfo",3,"liveExperiment",2,"url-params",12,10,183,6,2,3,"liveInfo",3,"liveExperiment",3,"1",6,2,3,"liveInfo",3,"liveParams",12,10,248,10,183,6,2,3,"liveInfo",3,"liveExperiment",3,"2",10,183,6,2,3,"liveInfo",3,"liveExperiment",3,"3",6,2,3,"liveInfo",3,"imageParams",3,"",null,3,"\n                    ",1,1,"fragment",4,40,null,3,"\n                        ",1,"div",7,2,"data-uclk",7,null,13,1,14,3,"module",3,"title_logo",1,8,6,1,3,"json",null,33,"ubc-clk",3,"",2,"class",7,null,6,2,3,"$style",3,"my-head-logo",1,8,6,1,3,"_class",null,38,6,1,3,"isLogoShow",null,3,"\n                            ",1,"img",2,2,"src",6,2,3,"fieldsData",3,"whiteImg",2,"class",7,null,6,2,3,"$style",3,"logo-img",1,8,6,1,3,"_class",null,null,3,"\n                        ",null,null,3,"\n                    ",null,3,"\n                ",null,3,"\n            ",null,null,3,"\n        ",null,3,"\n        \n        ",1,"div",5,2,"class",7,null,6,2,3,"$style",3,"header-prompt",1,8,6,1,3,"_class",null,38,6,1,3,"recommendInfo",null,3,"\n            ",1,"p",2,2,"class",3,"cos-line-clamp-1",null,9,null,3,3,"\n                ",7,null,6,1,3,"recommendInfo",null,3,"\n            ",null,3,"\n        ",null,null,3,"\n    "];
// Exports
module.exports = code;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(96);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(2)["default"]
var update = add("25afb151", content, true, {"manualInject":true});

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".living-area_1WBS2{color:var(--cos-color-text);position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:.08rem .12rem;min-width:.99rem;height:.3rem;background-color:#fff;border-radius:.3rem;font-family:PingFang SC;-webkit-box-sizing:border-box;box-sizing:border-box}.living-area_1WBS2.living-area-frist_IeFKU{-webkit-box-shadow:0 .02rem .08rem rgba(0,0,0,.02);box-shadow:0 .02rem .08rem rgba(0,0,0,.02)}.living-area_1WBS2.living-area-frist_IeFKU.living-area-big-img_6Q3XJ{bottom:-.015rem}.living-area_1WBS2.living-area-frist_IeFKU.living-area-big-img_6Q3XJ.living-area-prompt_44B6B{bottom:0}.living-area_1WBS2.living-area-frist-after_3GncQ{background-color:#f5f6fa}.living-area_1WBS2 .living-icon_d5Er9{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin-right:.06rem}@-webkit-keyframes lineChange_2GbEc{0%{-webkit-transform:scaleY(.3);transform:scaleY(.3)}25%{-webkit-transform:scaleY(.7);transform:scaleY(.7)}50%{-webkit-transform:scaleY(1);transform:scaleY(1)}to{-webkit-transform:scaleY(.3);transform:scaleY(.3)}}@keyframes lineChange_2GbEc{0%{-webkit-transform:scaleY(.3);transform:scaleY(.3)}25%{-webkit-transform:scaleY(.7);transform:scaleY(.7)}50%{-webkit-transform:scaleY(1);transform:scaleY(1)}to{-webkit-transform:scaleY(.3);transform:scaleY(.3)}}.living-area_1WBS2 .living-icon_d5Er9 .live-line_6At8Z{width:.02rem;height:.1rem;margin-left:.02rem;background-color:#ee0444;-webkit-animation:lineChange_2GbEc 680ms linear infinite;animation:lineChange_2GbEc 680ms linear infinite}.living-area_1WBS2 .living-icon_d5Er9 .live-line_6At8Z:first-of-type{margin-left:0;-webkit-transform:scaleY(.8);transform:scaleY(.8);-webkit-animation-delay:-340ms;animation-delay:-340ms}.living-area_1WBS2 .living-icon_d5Er9 .live-line_6At8Z:nth-child(2){-webkit-animation-delay:-170ms;animation-delay:-170ms;-webkit-transform:scaleY(.4);transform:scaleY(.4)}.living-area_1WBS2 .living-icon_d5Er9 .live-line_6At8Z:last-of-type{-webkit-transform:scaleY(.6);transform:scaleY(.6)}.living-area_1WBS2 .living-text_20Ob2{font-weight:500}.living-area_1WBS2 .model-icon_6IMeZ{margin-right:.06rem}", ""]);
// Exports
exports.locals = {
	"living-area": "living-area_1WBS2",
	"livingArea": "living-area_1WBS2",
	"living-area-frist": "living-area-frist_IeFKU",
	"livingAreaFrist": "living-area-frist_IeFKU",
	"living-area-big-img": "living-area-big-img_6Q3XJ",
	"livingAreaBigImg": "living-area-big-img_6Q3XJ",
	"living-area-prompt": "living-area-prompt_44B6B",
	"livingAreaPrompt": "living-area-prompt_44B6B",
	"living-area-frist-after": "living-area-frist-after_3GncQ",
	"livingAreaFristAfter": "living-area-frist-after_3GncQ",
	"living-icon": "living-icon_d5Er9",
	"livingIcon": "living-icon_d5Er9",
	"live-line": "live-line_6At8Z",
	"liveLine": "live-line_6At8Z",
	"lineChange": "lineChange_2GbEc",
	"living-text": "living-text_20Ob2",
	"livingText": "living-text_20Ob2",
	"model-icon": "model-icon_6IMeZ",
	"modelIcon": "model-icon_6IMeZ"
};
module.exports = exports;


/***/ }),
/* 97 */
/***/ (function(module, exports) {

// Module
var code = [1,"div",11,2,"rl-type",3,"stop",2,"data-ushow",6,1,3,"imageUclk",2,"data-uclk",6,1,3,"imageUclk",33,"ubc-show",3,"",33,"ubc-clk",3,"",2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",null,3,"\n        ",1,"div",8,2,"class",7,null,16,6,17,3,"cos-link",17,3,"cos-color-text",17,6,2,3,"$style",3,"living-area",17,12,6,1,3,"isFirst",6,2,3,"$style",3,"living-area-frist",6,2,3,"$style",3,"living-area-frist-after",17,12,6,1,3,"isBigImgIcon",6,2,3,"$style",3,"living-area-big-img",3,"",17,12,6,1,3,"recommendInfo",6,2,3,"$style",3,"living-area-prompt",3,"",1,8,6,1,3,"_class",null,45,12,6,2,3,"urlParams",3,"href",3,"a",3,"div",42,6,1,3,"urlParams",null,3,"\n            ",1,"fragment",6,38,10,183,6,1,3,"liveExperiment",3,"1",null,3,"\n                ",1,"div",8,2,"class",7,null,6,2,3,"$style",3,"living-icon",1,8,6,1,3,"_class",null,null,3,"\n                    ",1,"div",1,2,"class",7,null,6,2,3,"$style",3,"live-line",1,8,6,1,3,"_class",null,null,3,"\n                    ",1,"div",1,2,"class",7,null,6,2,3,"$style",3,"live-line",1,8,6,1,3,"_class",null,null,3,"\n                    ",1,"div",1,2,"class",7,null,6,2,3,"$style",3,"live-line",1,8,6,1,3,"_class",null,null,3,"\n                ",null,3,"\n                ",1,"div",2,2,"class",9,null,2,3,"cos-line-clamp-1 ",7,null,6,2,3,"$style",3,"living-text",1,8,6,1,3,"_class",null,null,3,"\n                    直播讲解\n                ",null,3,"\n            ",null,null,3,"\n            ",1,"fragment",6,38,10,248,10,183,6,1,3,"liveExperiment",3,"2",10,183,6,1,3,"liveExperiment",3,"3",null,3,"\n                ",1,"cos-icon",2,2,"name",3,"image-fill",2,"class",7,null,6,2,3,"$style",3,"model-icon",1,8,6,1,3,"_class",null,null,3,"\n                ",1,"div",2,2,"class",3,"cos-line-clamp-1",null,3,"\n                    车型图片\n                ",null,3,"\n            ",null,null,3,"\n        ",null,3,"\n    "];
// Exports
module.exports = code;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(99);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(2)["default"]
var update = add("5aa3a6e6", content, true, {"manualInject":true});

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".header-prompt_5Ky7w{margin-top:var(--cos-space-md);font-weight:var(--cos-font-regular);-webkit-text-stroke:0;font-family:PingFang SC,Arial,sans-serif;font-size:var(--cos-text-subtitle-sm);line-height:var(--cos-leading-subtitle-sm);color:var(--cos-color-text-minor)}.header-prompt_5Ky7w>p{margin:-4px var(--cos-space-none)}.my-new-kg-title_6JOIv{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.my-new-kg-title_6JOIv .my-head-props_4GKmf{-webkit-box-flex:1;-webkit-flex:1 1 auto;flex:1 1 auto;overflow:hidden}.my-new-kg-title_6JOIv .my-head-props_4GKmf .header-title_1uvgr{display:-webkit-box;display:-webkit-flex;display:flex;margin:var(--cos-space-none)}.my-new-kg-title_6JOIv .my-head-props_4GKmf .header-title_1uvgr>span{display:block;-webkit-box-orient:inline-axis;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin:-2px var(--cos-space-none) -3px}.my-new-kg-title_6JOIv .my-head-props_4GKmf .header-abstract_5ltzq{margin-top:var(--cos-space-xs);font-weight:var(--cos-font-regular);-webkit-text-stroke:0;font-family:PingFang SC,Arial,sans-serif;font-size:var(--cos-text-subtitle-sm);line-height:var(--cos-leading-subtitle-sm);color:var(--cos-color-text-minor)}.my-new-kg-title_6JOIv .my-head-props_4GKmf .header-abstract_5ltzq>p{margin:-3px var(--cos-space-none)}.my-new-kg-title_6JOIv .my-entry-wrapper_1cIyd{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-left:var(--cos-space-xxs);-webkit-box-flex:0;-webkit-flex:0 0 auto;flex:0 0 auto;height:0}.my-new-kg-title_6JOIv .my-entry-wrapper_1cIyd.my-entry-wrapper-height_4MRTr{height:auto}.my-new-kg-title_6JOIv .my-entry-wrapper_1cIyd .my-entry-con_5jZ5Z .white-logo_6FnB3>img{padding-top:var(--cos-space-xxs);height:80px}.my-new-kg-title_6JOIv .my-entry-wrapper_1cIyd .my-entry-con_5jZ5Z .my-head-logo_5ijZ5{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-radius:var(--cos-rounded-full);padding:var(--cos-space-3xs) var(--cos-space-sm);min-height:30px;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#e1f6f6;-webkit-box-shadow:0 2px 8px rgba(0,0,0,.02);box-shadow:0 2px 8px rgba(0,0,0,.02)}.cos-wise .c-darkmode .my-new-kg-title_6JOIv .my-entry-wrapper_1cIyd .my-entry-con_5jZ5Z .my-head-logo_5ijZ5.my-head-logo-first_1QXsS{background-color:rgba(0,200,201,.1)}@media (prefers-color-scheme:dark){.cos-wise .my-new-kg-title_6JOIv .my-entry-wrapper_1cIyd .my-entry-con_5jZ5Z .my-head-logo_5ijZ5.my-head-logo-first_1QXsS{background-color:rgba(0,200,201,.1)}}.my-new-kg-title_6JOIv .my-entry-wrapper_1cIyd .my-entry-con_5jZ5Z .my-head-logo_5ijZ5.my-head-logo-first-after_123dR{background-color:var(--cos-color-bg-primary-light)}.my-new-kg-title_6JOIv .my-entry-wrapper_1cIyd .my-entry-con_5jZ5Z .my-head-logo_5ijZ5:active{opacity:var(--cos-opacity-20)}.my-new-kg-title_6JOIv .my-entry-wrapper_1cIyd .my-entry-con_5jZ5Z .my-head-logo_5ijZ5 .logo-img_1ijy7{width:calc(var(--font-size-scale, 1)*17px);height:calc(var(--font-size-scale, 1)*17px)}.my-new-kg-title_6JOIv .my-entry-wrapper_1cIyd .my-entry-con_5jZ5Z .my-head-logo_5ijZ5 .logo-text_27gNZ{margin-left:var(--cos-space-3xs);font-weight:var(--cos-font-medium);-webkit-text-stroke:var(--cos-font-medium-stroke);font-family:PingFang SC,Arial,sans-serif;margin-top:.5px}.my-new-kg-title_6JOIv .my-entry-wrapper_1cIyd .my-entry-con_5jZ5Z .my-head-logo_5ijZ5 .logo-text_27gNZ.logo-text-kg-parameter_3Wa0Y{color:var(--cos-cyan-0)}.my-new-kg-title_6JOIv .my-entry-wrapper_1cIyd .my-entry-con_5jZ5Z .my-head-logo-color_7hQEZ{color:var(--cos-cyan-0)}", ""]);
// Exports
exports.locals = {
	"header-prompt": "header-prompt_5Ky7w",
	"headerPrompt": "header-prompt_5Ky7w",
	"my-new-kg-title": "my-new-kg-title_6JOIv",
	"myNewKgTitle": "my-new-kg-title_6JOIv",
	"my-head-props": "my-head-props_4GKmf",
	"myHeadProps": "my-head-props_4GKmf",
	"header-title": "header-title_1uvgr",
	"headerTitle": "header-title_1uvgr",
	"header-abstract": "header-abstract_5ltzq",
	"headerAbstract": "header-abstract_5ltzq",
	"my-entry-wrapper": "my-entry-wrapper_1cIyd",
	"myEntryWrapper": "my-entry-wrapper_1cIyd",
	"my-entry-wrapper-height": "my-entry-wrapper-height_4MRTr",
	"myEntryWrapperHeight": "my-entry-wrapper-height_4MRTr",
	"my-entry-con": "my-entry-con_5jZ5Z",
	"myEntryCon": "my-entry-con_5jZ5Z",
	"white-logo": "white-logo_6FnB3",
	"whiteLogo": "white-logo_6FnB3",
	"my-head-logo": "my-head-logo_5ijZ5",
	"myHeadLogo": "my-head-logo_5ijZ5",
	"my-head-logo-first": "my-head-logo-first_1QXsS",
	"myHeadLogoFirst": "my-head-logo-first_1QXsS",
	"my-head-logo-first-after": "my-head-logo-first-after_123dR",
	"myHeadLogoFirstAfter": "my-head-logo-first-after_123dR",
	"logo-img": "logo-img_1ijy7",
	"logoImg": "logo-img_1ijy7",
	"logo-text": "logo-text_27gNZ",
	"logoText": "logo-text_27gNZ",
	"logo-text-kg-parameter": "logo-text-kg-parameter_3Wa0Y",
	"logoTextKgParameter": "logo-text-kg-parameter_3Wa0Y",
	"my-head-logo-color": "my-head-logo-color_7hQEZ",
	"myHeadLogoColor": "my-head-logo-color_7hQEZ"
};
module.exports = exports;


/***/ }),
/* 100 */
/***/ (function(module, exports) {

// Module
var code = [1,"div",8,2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",null,3,"\n        ",1,"div",6,2,"class",7,null,6,2,3,"$style",3,"my-new-kg-title",1,8,6,1,3,"_class",null,null,3,"\n            \n            ",1,"div",6,2,"class",7,null,6,2,3,"$style",3,"my-head-props",1,8,6,1,3,"_class",null,null,3,"\n                ",1,"cosc-title",6,2,"class",7,null,6,2,3,"$style",3,"header-title",1,8,6,1,3,"_class",null,2,"link-info",6,1,3,"logoParams",38,6,1,3,"mainTitle",null,3,"\n                    \n                    ",1,"span",2,2,"class",3,"cos-color-text",null,7,1,6,1,3,"mainTitle",null,null,3,"\n                ",null,null,3,"\n                ",1,"div",5,2,"class",7,null,6,2,3,"$style",3,"header-abstract",1,8,6,1,3,"_class",null,38,6,1,3,"subTitle",null,3,"\n                    ",1,"p",2,2,"class",3,"cos-line-clamp-1",null,9,1,3,3,"\n                        \n                        ",7,1,6,1,3,"subTitle",null,3,"\n                    ",null,3,"\n                ",null,null,3,"\n            ",null,3,"\n            \n            ",1,"div",5,2,"class",7,null,16,2,17,6,2,3,"$style",3,"my-entry-wrapper",17,12,6,1,3,"isEntryHeight",6,2,3,"$style",3,"my-entry-wrapper-height",3,"",1,8,6,1,3,"_class",null,38,10,60,6,2,3,"tplInfo",3,"order",4,6,null,3,"\n                ",1,"div",4,2,"class",7,null,6,2,3,"$style",3,"my-entry-con",1,8,6,1,3,"_class",null,null,3,"\n                    ",1,"fragment",4,38,6,1,3,"isStatusTag",null,3,"\n                        ",1,"status-tag-header",4,2,"is-first",6,1,3,"isFirst",2,"live-info",6,1,3,"liveInfo",2,"live-experiment",6,2,3,"liveInfo",3,"liveExperiment",2,"url-params",12,10,183,6,2,3,"liveInfo",3,"liveExperiment",3,"1",6,2,3,"liveInfo",3,"liveParams",12,10,248,10,183,6,2,3,"liveInfo",3,"liveExperiment",3,"2",10,183,6,2,3,"liveInfo",3,"liveExperiment",3,"3",6,2,3,"liveInfo",3,"imageParams",3,"",null,3,"\n                    ",3,1,"fragment",4,39,10,76,6,2,3,"fieldsData",3,"logoImg",10,76,6,2,3,"fieldsData",3,"logoParams",6,2,3,"fieldsData",3,"logoText",null,3,"\n                        ",1,"div",5,2,"rl-type",3,"stop",38,6,1,3,"isLogoShow",null,3,"\n                            ",1,"div",7,2,"data-uclk",7,null,13,2,14,3,"module",3,"title_logo",14,3,"logoText",6,2,3,"fieldsData",3,"logoText",1,8,6,1,3,"json",null,33,"ubc-clk",3,"",45,12,10,76,6,2,3,"fieldsData",3,"logoParams",6,3,3,"fieldsData",3,"logoParams",3,"href",3,"a",3,"div",42,6,2,3,"fieldsData",3,"logoParams",null,3,"\n                                ",1,"div",6,2,"class",7,null,16,3,17,3,"cos-color-text",17,6,2,3,"$style",3,"my-head-logo",17,12,10,76,6,1,3,"isFirst",6,1,3,"isFirstShow",6,2,3,"$style",3,"my-head-logo-first",6,2,3,"$style",3,"my-head-logo-first-after",1,8,6,1,3,"_class",null,null,3,"\n                                    ",1,"img",2,2,"src",6,2,3,"fieldsData",3,"logoImg",2,"class",7,null,6,2,3,"$style",3,"logo-img",1,8,6,1,3,"_class",null,null,3,"\n                                    ",1,"span",2,2,"class",7,null,16,2,17,6,2,3,"$style",3,"logo-text",17,6,2,3,"$style",3,"logo-text-kg-parameter",1,8,6,1,3,"_class",null,null,9,null,3,3,"\n                                        ",7,null,6,2,3,"fieldsData",3,"logoText",null,3,"\n                                    ",null,3,"\n                                ",null,3,"\n                            ",null,3,"\n                        ",null,null,3,"\n                    ",1,"fragment",4,39,10,76,6,2,3,"fieldsData",3,"logoParams",6,2,3,"fieldsData",3,"logoText",null,3,"\n                        ",1,"div",5,2,"rl-type",3,"stop",38,6,1,3,"isLogoShow",null,3,"\n                            ",1,"div",7,2,"data-uclk",7,null,13,2,14,3,"module",3,"title_logo",14,3,"logoText",6,2,3,"fieldsData",3,"logoText",1,8,6,1,3,"json",null,33,"ubc-clk",3,"",45,12,10,76,6,2,3,"fieldsData",3,"logoParams",6,3,3,"fieldsData",3,"logoParams",3,"href",3,"a",3,"div",42,6,2,3,"fieldsData",3,"logoParams",null,3,"\n                                ",1,"div",6,2,"class",7,null,16,4,17,3,"cos-color-text",17,6,2,3,"$style",3,"my-head-logo",17,12,6,1,3,"hasColor",6,2,3,"$style",3,"my-head-logo-color",3,"",17,12,10,76,6,1,3,"isFirst",6,1,3,"isFirstShow",6,2,3,"$style",3,"my-head-logo-first",6,2,3,"$style",3,"my-head-logo-first-after",1,8,6,1,3,"_class",null,null,3,"\n                                    ",1,"img",2,2,"src",6,2,3,"imgData",3,"logoImg",2,"class",7,null,6,2,3,"$style",3,"logo-img",1,8,6,1,3,"_class",null,null,3,"\n                                    ",1,"span",2,2,"class",7,null,6,2,3,"$style",3,"logo-text",1,8,6,1,3,"_class",null,null,6,2,3,"fieldsData",3,"logoText",null,3,"\n                                ",null,3,"\n                            ",null,3,"\n                        ",null,null,3,"\n                    ",1,"fragment",4,40,null,3,"\n                        ",1,"div",6,2,"data-uclk",7,null,13,2,14,3,"module",3,"title_logo",14,3,"logoText",3,"有驾",1,8,6,1,3,"json",null,33,"ubc-clk",3,"",38,6,1,3,"isLogoShow",null,3,"\n                            ",1,"div",5,2,"class",7,null,6,2,3,"$style",3,"white-logo",1,8,6,1,3,"_class",null,38,6,2,3,"fieldsData",3,"whiteImg",null,3,"\n                                ",1,"img",1,2,"src",6,2,3,"fieldsData",3,"whiteImg",null,3,"\n                            ",1,1,"div",7,2,"class",7,null,16,3,17,3,"cos-color-text",17,6,2,3,"$style",3,"my-head-logo",17,12,10,76,6,1,3,"isFirst",6,1,3,"isFirstShow",6,2,3,"$style",3,"my-head-logo-first",6,2,3,"$style",3,"my-head-logo-first-after",1,8,6,1,3,"_class",null,40,null,3,"\n                                ",1,"img",2,2,"src",6,2,3,"imgData",3,"logoImg",2,"class",7,null,6,2,3,"$style",3,"logo-img",1,8,6,1,3,"_class",null,null,3,"\n                                ",1,"span",2,2,"class",7,null,6,2,3,"$style",3,"logo-text",1,8,6,1,3,"_class",null,null,3,"有驾",null,3,"\n                            ",null,3,"\n                        ",null,null,3,"\n                    ",null,3,"\n                ",null,3,"\n            ",null,null,3,"\n        ",null,3,"\n        \n        ",1,"div",5,2,"class",7,null,6,2,3,"$style",3,"header-prompt",1,8,6,1,3,"_class",null,38,6,1,3,"recommendInfo",null,3,"\n            ",1,"p",2,2,"class",3,"cos-line-clamp-1",null,9,null,3,3,"\n                ",7,null,6,1,3,"recommendInfo",null,3,"\n            ",null,3,"\n        ",null,null,3,"\n    "];
// Exports
module.exports = code;

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(102);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(2)["default"]
var update = add("df519544", content, true, {"manualInject":true});

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".link-no-underline_3GLS3:hover{-webkit-text-decoration-line:none;text-decoration-line:none}.header-prompt_3Ktq5{margin-top:var(--cos-space-md);font-weight:var(--cos-font-regular);-webkit-text-stroke:0;font-family:PingFang SC,Arial,sans-serif;font-size:var(--cos-text-subtitle-sm);line-height:var(--cos-leading-subtitle-sm);color:var(--cos-color-text-minor)}.header-prompt_3Ktq5>p{margin:-4px var(--cos-space-none)}.top-left-type_LVHSx .title-top-logo_HTH5J{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:absolute;top:-18px;left:-15px;padding:var(--cos-space-sm) 16px;height:16px;background-image:-webkit-linear-gradient(311deg,rgba(192,244,240,.81) 5.26%,rgba(192,244,240,.47) 87.68%);background-image:linear-gradient(139deg,rgba(192,244,240,.81) 5.26%,rgba(192,244,240,.47) 87.68%);border-radius:16px var(--cos-rounded-none) var(--cos-rounded-xxl)}.top-left-type_LVHSx .title-top-logo_HTH5J>img{height:100%}.top-left-type_LVHSx .title-top-logo_HTH5J .title-top-spot_6A9hs{border-radius:var(--cos-rounded-full);margin:var(--cos-space-none) 4px;width:4px;height:4px;background-color:#1a1a1a}.top-left-type_LVHSx .title-top-gap_6yOe1{padding-top:39px}.my-new-kg-title_1OHOa{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.my-new-kg-title_1OHOa .my-head-props_2P6hX{-webkit-box-flex:1;-webkit-flex:1 1 auto;flex:1 1 auto;overflow:hidden}.my-new-kg-title_1OHOa .my-head-props_2P6hX .header-title_1tCxw{display:-webkit-box;display:-webkit-flex;display:flex;margin:var(--cos-space-none)}.my-new-kg-title_1OHOa .my-head-props_2P6hX .header-title_1tCxw a{display:block;-webkit-box-orient:inline-axis;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.my-new-kg-title_1OHOa .my-head-props_2P6hX .header-title_1tCxw.header-title-first_4IEhf a{margin:-2px var(--cos-space-none) -3px}.my-new-kg-title_1OHOa .my-head-props_2P6hX .header-title_1tCxw.header-title-first_4IEhf a .cosc-title-slot{-webkit-text-decoration-line:none;text-decoration-line:none}.my-new-kg-title_1OHOa .my-head-props_2P6hX .header-title_1tCxw.header-title-first_4IEhf em{-webkit-text-decoration-line:none;text-decoration-line:none}.my-new-kg-title_1OHOa .my-head-props_2P6hX .header-title_1tCxw.header-title-first_4IEhf:hover a .cosc-title-slot{-webkit-text-decoration-line:underline;text-decoration-line:underline}.my-new-kg-title_1OHOa .my-head-props_2P6hX .header-title_1tCxw.header-title-first_4IEhf:hover em{-webkit-text-decoration-line:underline;text-decoration-line:underline}.my-new-kg-title_1OHOa .my-head-props_2P6hX .header-abstract_7n7GA{margin-top:var(--cos-space-xs);font-weight:var(--cos-font-regular);-webkit-text-stroke:0;font-family:PingFang SC,Arial,sans-serif;font-size:var(--cos-text-subtitle-sm);line-height:var(--cos-leading-subtitle-sm);color:var(--cos-color-text-minor)}.my-new-kg-title_1OHOa .my-head-props_2P6hX .header-abstract_7n7GA.header-abstract-img-san-one-after_3uaiD.header-abstract-img-san-one-after_3uaiD{margin-top:var(--cos-space-xxs)}.my-new-kg-title_1OHOa .my-head-props_2P6hX .header-abstract_7n7GA>p{margin:-3px var(--cos-space-none)}.my-new-kg-title_1OHOa .my-head-props_2P6hX .header-abstract_7n7GA em{-webkit-text-decoration-line:none;text-decoration-line:none}.my-new-kg-title_1OHOa .my-entry-wrapper_hwM16{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-left:var(--cos-space-xxs);-webkit-box-flex:0;-webkit-flex:0 0 auto;flex:0 0 auto;height:0}.my-new-kg-title_1OHOa .my-entry-wrapper_hwM16 .my-entry-con_161lN .white-logo_6dDqC>img{padding-bottom:var(--cos-space-xxs);height:90px}.my-new-kg-title_1OHOa .my-entry-wrapper_hwM16 .my-entry-con_161lN .my-head-logo_4f8Fw{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-radius:var(--cos-rounded-full);-webkit-text-decoration-line:none;text-decoration-line:none;color:var(--cos-color-text);padding:var(--cos-space-3xs) var(--cos-space-sm);background-color:#e1f6f6;-webkit-box-shadow:0 2px 8px rgba(0,0,0,.02);box-shadow:0 2px 8px rgba(0,0,0,.02)}.my-new-kg-title_1OHOa .my-entry-wrapper_hwM16 .my-entry-con_161lN .my-head-logo_4f8Fw:hover{opacity:var(--cos-opacity-85)}.my-new-kg-title_1OHOa .my-entry-wrapper_hwM16 .my-entry-con_161lN .my-head-logo_4f8Fw.my-head-logo-first-after_4CN9K{background-color:var(--cos-color-bg-primary-light)}.my-new-kg-title_1OHOa .my-entry-wrapper_hwM16 .my-entry-con_161lN .my-head-logo_4f8Fw:active{opacity:var(--cos-opacity-20)}.my-new-kg-title_1OHOa .my-entry-wrapper_hwM16 .my-entry-con_161lN .my-head-logo_4f8Fw .logo-img_7x33f{width:17px;height:17px}.my-new-kg-title_1OHOa .my-entry-wrapper_hwM16 .my-entry-con_161lN .my-head-logo_4f8Fw .logo-text_2yzs5{margin-left:var(--cos-space-3xs);font-weight:var(--cos-font-medium);-webkit-text-stroke:var(--cos-font-medium-stroke);font-family:PingFang SC,Arial,sans-serif}", ""]);
// Exports
exports.locals = {
	"link-no-underline": "link-no-underline_3GLS3",
	"linkNoUnderline": "link-no-underline_3GLS3",
	"header-prompt": "header-prompt_3Ktq5",
	"headerPrompt": "header-prompt_3Ktq5",
	"top-left-type": "top-left-type_LVHSx",
	"topLeftType": "top-left-type_LVHSx",
	"title-top-logo": "title-top-logo_HTH5J",
	"titleTopLogo": "title-top-logo_HTH5J",
	"title-top-spot": "title-top-spot_6A9hs",
	"titleTopSpot": "title-top-spot_6A9hs",
	"title-top-gap": "title-top-gap_6yOe1",
	"titleTopGap": "title-top-gap_6yOe1",
	"my-new-kg-title": "my-new-kg-title_1OHOa",
	"myNewKgTitle": "my-new-kg-title_1OHOa",
	"my-head-props": "my-head-props_2P6hX",
	"myHeadProps": "my-head-props_2P6hX",
	"header-title": "header-title_1tCxw",
	"headerTitle": "header-title_1tCxw",
	"header-title-first": "header-title-first_4IEhf",
	"headerTitleFirst": "header-title-first_4IEhf",
	"header-abstract": "header-abstract_7n7GA",
	"headerAbstract": "header-abstract_7n7GA",
	"header-abstract-img-san-one-after": "header-abstract-img-san-one-after_3uaiD",
	"headerAbstractImgSanOneAfter": "header-abstract-img-san-one-after_3uaiD",
	"my-entry-wrapper": "my-entry-wrapper_hwM16",
	"myEntryWrapper": "my-entry-wrapper_hwM16",
	"my-entry-con": "my-entry-con_161lN",
	"myEntryCon": "my-entry-con_161lN",
	"white-logo": "white-logo_6dDqC",
	"whiteLogo": "white-logo_6dDqC",
	"my-head-logo": "my-head-logo_4f8Fw",
	"myHeadLogo": "my-head-logo_4f8Fw",
	"my-head-logo-first-after": "my-head-logo-first-after_4CN9K",
	"myHeadLogoFirstAfter": "my-head-logo-first-after_4CN9K",
	"logo-img": "logo-img_7x33f",
	"logoImg": "logo-img_7x33f",
	"logo-text": "logo-text_2yzs5",
	"logoText": "logo-text_2yzs5"
};
module.exports = exports;


/***/ }),
/* 103 */
/***/ (function(module, exports) {

// Module
var code = [1,"div",6,2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",null,3,"\n        ",1,"div",10,2,"class",7,null,6,2,3,"$style",3,"link-no-underline",1,8,6,1,3,"_class",null,45,12,10,76,6,1,3,"isFirst",10,76,6,2,3,"fieldsData",3,"headerParams",6,3,3,"fieldsData",3,"headerParams",3,"href",3,"a",3,"div",42,6,2,3,"fieldsData",3,"headerParams",null,3,"\n            \n            ",1,"div",7,2,"class",7,null,6,2,3,"$style",3,"top-left-type",1,8,6,1,3,"_class",null,38,10,76,6,1,3,"isFirst",6,2,3,"fieldsData",3,"bigImgType",null,3,"\n                ",1,"div",8,2,"class",7,null,6,2,3,"$style",3,"title-top-logo",1,8,6,1,3,"_class",null,null,3,"\n                    ",1,"img",1,2,"src",6,2,3,"fieldsData",3,"youjiaIcon",null,3,"\n                    ",1,"div",2,2,"class",7,null,6,2,3,"$style",3,"title-top-spot",1,8,6,1,3,"_class",null,38,6,2,3,"fieldsData",3,"energyIcon",null,null,3,"\n                    ",1,"img",2,2,"src",6,2,3,"fieldsData",3,"energyIcon",38,6,2,3,"fieldsData",3,"energyIcon",null,null,3,"\n                ",null,3,"\n                ",1,"div",1,2,"class",7,null,6,2,3,"$style",3,"title-top-gap",1,8,6,1,3,"_class",null,null,3,"\n            ",null,null,3,"\n            \n            ",1,"div",6,2,"class",7,null,6,2,3,"$style",3,"my-new-kg-title",1,8,6,1,3,"_class",null,null,3,"\n                \n                ",1,"div",6,2,"class",7,null,6,2,3,"$style",3,"my-head-props",1,8,6,1,3,"_class",null,null,3,"\n                    ",1,"object",3,null,3,"\n                        ",1,"cosc-title",4,2,"class",7,null,16,2,17,6,2,3,"$style",3,"header-title",17,12,6,1,3,"isFirst",6,2,3,"$style",3,"header-title-first",3,"",1,8,6,1,3,"_class",null,2,"link-info",6,2,3,"fieldsData",3,"headerParams",38,6,1,3,"mainTitle",null,9,1,3,3,"\n                            \n                            ",7,1,6,1,3,"mainTitle",null,3,"\n                        ",null,null,3,"\n                    ",null,3,"\n                    ",1,"fragment",4,38,10,183,6,2,3,"tplInfo",3,"tplname",3,"car_full_view_img_san",null,3,"\n                        ",1,"div",5,2,"class",7,null,16,3,17,6,2,3,"$style",3,"header-abstract",17,6,2,3,"$style",3,"header-abstract-img-san",17,12,6,1,3,"isFirst",3,"",6,2,3,"$style",3,"header-abstract-img-san-one-after",1,8,6,1,3,"_class",null,38,10,248,6,1,3,"subTitle",6,2,3,"fieldsData",3,"modelName",null,3,"\n                            ",1,"p",6,2,"class",3,"cos-line-clamp-1",null,3,"\n                                ",1,"span",2,38,6,2,3,"fieldsData",3,"modelName",null,6,2,3,"fieldsData",3,"modelName",null,null,3,"\n                                ",1,"span",3,2,"class",7,null,16,2,17,3,"cos-space-ml-lg",17,6,2,3,"$style",3,"link-no-underline",1,8,6,1,3,"_class",null,38,10,76,6,1,3,"isFirst",6,1,3,"subTitle",null,9,1,3,3,"\n                                    \n                                    ",7,1,6,1,3,"subTitle",null,3,"\n                                ",null,null,3,"\n                            ",null,3,"\n                        ",null,null,3,"\n                    ",1,1,"fragment",4,40,null,3,"\n                        ",1,"div",5,2,"class",7,null,6,2,3,"$style",3,"header-abstract",1,8,6,1,3,"_class",null,38,10,76,6,1,3,"subTitle",10,248,6,1,3,"isFirst",6,2,3,"fieldsData",3,"hasSubTitlePc",null,3,"\n                            ",1,"p",2,2,"class",3,"cos-line-clamp-1",null,9,1,3,3,"\n                                \n                                ",7,1,6,1,3,"subTitle",null,3,"\n                            ",null,3,"\n                        ",null,null,3,"\n                    ",null,3,"\n                ",null,3,"\n                \n                ",1,"div",5,2,"class",7,null,6,2,3,"$style",3,"my-entry-wrapper",1,8,6,1,3,"_class",null,38,10,60,6,2,3,"tplInfo",3,"order",4,6,null,3,"\n                    ",1,"object",4,2,"class",7,null,6,2,3,"$style",3,"my-entry-con",1,8,6,1,3,"_class",null,null,3,"\n                        ",1,"div",6,2,"data-uclk",7,null,13,2,14,3,"module",3,"title_logo",14,3,"logoText",3,"有驾",1,8,6,1,3,"json",null,33,"ubc-clk",3,"",38,6,1,3,"isLogoShow",null,3,"\n                            ",1,"div",5,2,"class",7,null,6,2,3,"$style",3,"white-logo",1,8,6,1,3,"_class",null,38,6,2,3,"fieldsData",3,"whiteImg",null,3,"\n                                ",1,"img",1,2,"src",6,2,3,"fieldsData",3,"whiteImg",null,3,"\n                            ",1,1,"div",9,2,"class",7,null,16,2,17,6,2,3,"$style",3,"my-head-logo",17,12,10,76,6,1,3,"isFirst",6,1,3,"isFirstShow",6,2,3,"$style",3,"my-head-logo-first",6,2,3,"$style",3,"my-head-logo-first-after",1,8,6,1,3,"_class",null,45,12,10,76,6,2,3,"fieldsData",3,"logoParamsPc",6,3,3,"fieldsData",3,"logoParamsPc",3,"href",3,"a",3,"div",40,42,6,2,3,"fieldsData",3,"logoParamsPc",null,3,"\n                                ",1,"img",2,2,"src",6,2,3,"imgData",3,"logoImg",2,"class",7,null,6,2,3,"$style",3,"logo-img",1,8,6,1,3,"_class",null,null,3,"\n                                ",1,"span",2,2,"class",7,null,6,2,3,"$style",3,"logo-text",1,8,6,1,3,"_class",null,null,3,"有驾",null,3,"\n                            ",null,3,"\n                        ",null,null,3,"\n                    ",null,3,"\n                ",null,null,3,"\n            ",null,3,"\n            \n            ",1,"div",5,2,"class",7,null,6,2,3,"$style",3,"header-prompt",1,8,6,1,3,"_class",null,38,6,1,3,"recommendInfo",null,3,"\n                ",1,"p",2,2,"class",3,"cos-line-clamp-1",null,9,null,3,3,"\n                    ",7,null,6,1,3,"recommendInfo",null,3,"\n                ",null,3,"\n            ",null,null,3,"\n        ",null,3,"\n    "];
// Exports
module.exports = code;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(105);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(2)["default"]
var update = add("1ef1fbcd", content, true, {"manualInject":true});

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".paragraph_5jWz9{color:#848691}", ""]);
// Exports
exports.locals = {
	"paragraph": "paragraph_5jWz9"
};
module.exports = exports;


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(107);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(2)["default"]
var update = add("1ef1fbcd", content, true, {"manualInject":true});

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".paragraph_6zXZ2{font-size:.14rem;color:#848691}", ""]);
// Exports
exports.locals = {
	"paragraph": "paragraph_6zXZ2"
};
module.exports = exports;


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(109);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(2)["default"]
var update = add("1ef1fbcd", content, true, {"manualInject":true});

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".link_4DWji{cursor:pointer!important}.no-spacing_1lXAC{cursor:pointer}.paragraph_2A3ac{font-size:.2rem!important;font-weight:500}", ""]);
// Exports
exports.locals = {
	"link": "link_4DWji",
	"no-spacing": "no-spacing_1lXAC",
	"noSpacing": "no-spacing_1lXAC",
	"paragraph": "paragraph_2A3ac"
};
module.exports = exports;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(111);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(2)["default"]
var update = add("1ef1fbcd", content, true, {"manualInject":true});

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".pc-fresh-bottom_6GXpG{padding-bottom:var(--cos-space-md)!important}.pc-fresh-color-header_2uegd{top:-18px!important;left:-15px!important;right:-15px!important}.link-no-underline_6f4gH:hover{text-decoration:none}.my-new-kg-header_4eh6w{position:relative;margin:-.21rem -.12rem 0;padding:.21rem .12rem .15rem;-webkit-box-sizing:border-box;box-sizing:border-box}.cos-fresh .my-new-kg-header_4eh6w{margin:-.19rem -.17rem 0;padding:.18rem .17rem .15rem}.my-new-kg-header_4eh6w.my-new-kg-header-no-subtitle_71Fm7{padding-bottom:.05rem}.my-new-kg-header_4eh6w.my-new-kg-header-prompt_7zwIb{padding-top:.13rem}.my-new-kg-header_4eh6w.my-new-kg-header-pc_7tEMD{margin:0;padding:.03rem 0 .125rem 0}.my-new-kg-header_4eh6w.my-new-kg-header-pc_7tEMD.my-new-kg-header-no-subtitle-pc_3UtmJ{padding-top:.11rem}.my-new-kg-header_4eh6w .my-new-kg-nousetitle_3Ntu6{position:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;z-index:2}.my-new-kg-header_4eh6w .my-new-kg-nousetitle_3Ntu6 .my-head-props_4Y5Fh{max-width:calc(100% - .5rem)}.my-new-kg-header_4eh6w .my-new-kg-nousetitle_3Ntu6 .my-head-props_4Y5Fh.my-head-props-kg_6kqq5{max-width:calc(100% - 120px)}.cos-pc .my-new-kg-header_4eh6w .my-new-kg-nousetitle_3Ntu6 .my-head-props_4Y5Fh.my-head-props-kg_6kqq5{max-width:calc(100% - 146px)}.my-new-kg-header_4eh6w .my-new-kg-nousetitle_3Ntu6 .my-head-props_4Y5Fh.my-head-props-view-point_6kJRw{max-width:calc(100% - 1.43rem)}.cos-pc .my-new-kg-header_4eh6w .my-new-kg-nousetitle_3Ntu6 .my-head-props_4Y5Fh.my-head-props-view-point_6kJRw{max-width:calc(100% - 1.65rem)}.my-new-kg-header_4eh6w .my-new-kg-nousetitle_3Ntu6 .my-head-props_4Y5Fh .my-new-kg-prompt_4cbHL{position:relative;z-index:2;padding-bottom:.12rem}.cos-pc .my-new-kg-header_4eh6w .my-new-kg-nousetitle_3Ntu6 .my-head-props_4Y5Fh .my-new-kg-prompt_4cbHL{padding-bottom:.15rem}.my-new-kg-header_4eh6w .my-new-kg-nousetitle_3Ntu6 .my-head-props_4Y5Fh .my-new-kg-prompt_4cbHL.my-new-kg-prompt-big-img_5vKq2{position:absolute;top:0;right:0}.my-new-kg-header_4eh6w .my-new-kg-nousetitle_3Ntu6 .my-head-props_4Y5Fh .my-head-props-con_2Aajz{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.my-new-kg-header_4eh6w .my-new-kg-nousetitle_3Ntu6 .my-head-props_4Y5Fh .my-head-props-con_2Aajz .my-head-article_3kdMI{display:block;-webkit-box-orient:inline-axis;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;-webkit-box-flex:1;-webkit-flex:1;flex:1}.my-new-kg-header_4eh6w .my-new-kg-nousetitle_3Ntu6 .my-head-props_4Y5Fh .my-head-props-con_2Aajz .my-head-article_3kdMI .my-label-title_5Hnmn{padding:0 0 .09rem 0;text-decoration:none!important;color:#333}.my-new-kg-header_4eh6w .my-new-kg-nousetitle_3Ntu6 .my-head-props_4Y5Fh .my-head-props-con_2Aajz .my-head-article_3kdMI .my-label-title_5Hnmn.my-label-title-no-subtitle_1wmOG{padding-bottom:.03rem}.my-new-kg-header_4eh6w .my-new-kg-nousetitle_3Ntu6 .my-head-props_4Y5Fh .my-head-props-con_2Aajz .my-head-article_3kdMI .my-label-title_5Hnmn.my-label-title-pc_6Y4Pf{margin:0!important;padding-bottom:.03rem}.my-new-kg-header_4eh6w .my-new-kg-nousetitle_3Ntu6 .my-head-props_4Y5Fh .my-head-props-con_2Aajz .my-head-article_3kdMI .my-label-title_5Hnmn.my-label-title-pc_6Y4Pf em{text-decoration:none!important}.my-new-kg-header_4eh6w .my-new-kg-nousetitle_3Ntu6 .my-head-props_4Y5Fh .my-head-props-con_2Aajz .my-head-article_3kdMI .my-label-title_5Hnmn.my-label-title-pc_6Y4Pf:hover{text-decoration:underline!important}.my-new-kg-header_4eh6w .my-new-kg-nousetitle_3Ntu6 .my-head-props_4Y5Fh .my-head-props-con_2Aajz .my-head-article_3kdMI .my-label-title_5Hnmn.my-label-title-pc_6Y4Pf:hover em{text-decoration:underline!important;-webkit-text-decoration-color:#f73131!important;text-decoration-color:#f73131!important}.my-new-kg-header_4eh6w .my-new-kg-nousetitle_3Ntu6 .my-head-props_4Y5Fh .my-head-props-con_2Aajz .my-head-article_3kdMI .my-head-abstract_VJeYW{font-size:.14rem;color:#848691}.cos-pc .my-new-kg-header_4eh6w .my-new-kg-nousetitle_3Ntu6 .my-head-props_4Y5Fh .my-head-props-con_2Aajz .my-head-article_3kdMI .my-head-abstract_VJeYW{padding-bottom:.045rem}.my-new-kg-header_4eh6w .my-new-kg-nousetitle_3Ntu6 .my-entry-wrapper_56Mhm{position:relative;z-index:2;display:-webkit-box;display:-webkit-flex;display:flex}.cos-pc .my-new-kg-header_4eh6w .my-new-kg-nousetitle_3Ntu6 .my-entry-wrapper_56Mhm{right:.12rem}.my-new-kg-header_4eh6w .my-new-kg-nousetitle_3Ntu6 .my-entry-wrapper_56Mhm.my-entry-wrapper-kg-three_34HSK{-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:.1rem 0 0 .08rem;min-height:.8rem}.my-new-kg-header_4eh6w .my-new-kg-nousetitle_3Ntu6 .my-entry-wrapper_56Mhm .my-head-logo_6Omr1{position:relative;bottom:.03rem;display:inline-block;width:.55rem;height:.4rem;margin-left:.08rem;background-image:var(--icon-img);-webkit-background-size:contain;background-size:contain;background-repeat:no-repeat}.cos-fresh .my-new-kg-header_4eh6w .my-new-kg-nousetitle_3Ntu6 .my-entry-wrapper_56Mhm .my-head-logo_6Omr1{margin:-.02rem -.034rem 0 .08rem}.cos-fresh .my-new-kg-header_4eh6w .my-new-kg-nousetitle_3Ntu6 .my-entry-wrapper_56Mhm .my-head-logo_6Omr1.my-head-logo-big-img_1TdrA{margin-right:0}.my-new-kg-header_4eh6w .my-new-kg-nousetitle_3Ntu6 .my-entry-wrapper_56Mhm .my-head-logo_6Omr1.my-head-logo-prompt_5dTsv{bottom:0}.c-darkmode .my-new-kg-header_4eh6w .my-new-kg-nousetitle_3Ntu6 .my-entry-wrapper_56Mhm .my-head-logo_6Omr1{background-image:var(--icon-img-dark)}@media (prefers-color-scheme:dark){.my-new-kg-header_4eh6w .my-new-kg-nousetitle_3Ntu6 .my-entry-wrapper_56Mhm .my-head-logo_6Omr1{background-image:var(--icon-img-dark)}}.my-new-kg-header_4eh6w .my-bg-header_4Io0U{position:absolute;top:0;left:0;width:100%;height:100%;z-index:0;overflow:hidden}.c-darkmode .my-new-kg-header_4eh6w .my-bg-header_4Io0U{overflow:unset}@media (prefers-color-scheme:dark){.cos-wise .my-new-kg-header_4eh6w .my-bg-header_4Io0U{overflow:unset}}.my-new-kg-header_4eh6w .my-bg-header_4Io0U.my-bg-header-pc_5K8Mz{overflow:unset;z-index:-1}.my-new-kg-header_4eh6w .my-bg-header_4Io0U .my-horizontal-gradient_3fOzS{position:absolute;top:.01rem;left:0;z-index:1;width:100%;height:100%;background-image:var(--bg-img);background-repeat:no-repeat;-webkit-background-size:100% auto;background-size:100% auto;border-radius:.12rem .12rem 0 0}.cos-fresh .my-new-kg-header_4eh6w .my-bg-header_4Io0U .my-horizontal-gradient_3fOzS{height:calc(100% + .03rem)}.cos-fresh .my-new-kg-header_4eh6w .my-bg-header_4Io0U .my-horizontal-gradient_3fOzS.my-horizontal-gradient-first-adv_47xM7{border-radius:0}.my-new-kg-header_4eh6w .my-bg-header_4Io0U .my-horizontal-gradient_3fOzS.my-horizontal-gradient-big-img_5tybB{max-height:1.2rem;-webkit-background-size:100% 100%;background-size:100% 100%}.cos-wise .c-darkmode .my-new-kg-header_4eh6w .my-bg-header_4Io0U .my-horizontal-gradient_3fOzS{height:120%;background-image:var(--bg-img-dark)}@media (prefers-color-scheme:dark){.cos-wise .my-new-kg-header_4eh6w .my-bg-header_4Io0U .my-horizontal-gradient_3fOzS{height:120%;background-image:var(--bg-img-dark)}}.my-new-kg-header_4eh6w .my-bg-header_4Io0U .my-horizontal-gradient_3fOzS.my-horizontal-gradient-pc_5a9Bz{top:-.16rem;left:-.16rem;right:-.16rem;width:auto;height:1.145rem;z-index:-1;border-radius:.15rem .15rem 0 0}.my-new-kg-header_4eh6w .my-bg-header_4Io0U .my-horizontal-gradient_3fOzS.my-horizontal-gradient-pc-prompt_33elP{top:-.16rem;left:-.16rem;right:-.16rem;width:auto;height:1.4rem;z-index:-1;border-radius:.15rem .15rem 0 0}.my-new-kg-header_4eh6w .my-bg-header_4Io0U .my-vertical-gradient_5mcYl{position:absolute;left:0;bottom:0;z-index:1;width:100%;height:65%;background-image:-webkit-gradient(linear,left bottom,left top,color-stop(0,#fff),color-stop(.04rem,#fff),to(rgba(255,255,255,0)));background-image:-webkit-linear-gradient(bottom,#fff 0,#fff .04rem,rgba(255,255,255,0));background-image:linear-gradient(to top,#fff 0,#fff .04rem,rgba(255,255,255,0))}.my-new-kg-header_4eh6w .my-bg-header_4Io0U .my-vertical-gradient_5mcYl.my-vertical-gradient-experiment_3pu8C{height:5%}.c-darkmode .my-new-kg-header_4eh6w .my-bg-header_4Io0U .my-vertical-gradient_5mcYl{background-image:none}@media (prefers-color-scheme:dark){.my-new-kg-header_4eh6w .my-bg-header_4Io0U .my-vertical-gradient_5mcYl{background-image:none}}.header-first-after_6QS9R.header-first-after-living-two_Rtf1x{margin-bottom:.08rem}.header-first-after_6QS9R .my-no-first-prompt_1DN4R{padding-bottom:.12rem}.header-first-after_6QS9R .my-no-first-prompt_1DN4R.my-no-first-prompt-pc_7ENvA{padding-bottom:.15rem}.header-first-after_6QS9R .my-no-first-prompt_1DN4R.my-no-first-prompt-one-after_3PMOX{margin-top:-.03rem}.header-first-after_6QS9R .first-after-con_3vunc{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.header-first-after_6QS9R .first-after-con_3vunc.first-after-con-logo_4k9jN{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.header-first-after_6QS9R .first-after-con_3vunc .first-after-article_5aPHW{display:block;-webkit-box-orient:inline-axis;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;-webkit-box-flex:1;-webkit-flex:1;flex:1}.header-first-after_6QS9R .first-after-con_3vunc .first-after-article_5aPHW .main-title_4JgVk{margin-bottom:0!important;padding-bottom:.09rem}.header-first-after_6QS9R .first-after-con_3vunc .first-after-article_5aPHW .sub-title_2mTCl{padding-bottom:.15rem;font-size:.14rem;color:#848691}.header-first-after_6QS9R .first-after-con_3vunc .logo-slot_3dQ9G{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-bottom:.15rem}", ""]);
// Exports
exports.locals = {
	"pc-fresh-bottom": "pc-fresh-bottom_6GXpG",
	"pcFreshBottom": "pc-fresh-bottom_6GXpG",
	"pc-fresh-color-header": "pc-fresh-color-header_2uegd",
	"pcFreshColorHeader": "pc-fresh-color-header_2uegd",
	"link-no-underline": "link-no-underline_6f4gH",
	"linkNoUnderline": "link-no-underline_6f4gH",
	"my-new-kg-header": "my-new-kg-header_4eh6w",
	"myNewKgHeader": "my-new-kg-header_4eh6w",
	"my-new-kg-header-no-subtitle": "my-new-kg-header-no-subtitle_71Fm7",
	"myNewKgHeaderNoSubtitle": "my-new-kg-header-no-subtitle_71Fm7",
	"my-new-kg-header-prompt": "my-new-kg-header-prompt_7zwIb",
	"myNewKgHeaderPrompt": "my-new-kg-header-prompt_7zwIb",
	"my-new-kg-header-pc": "my-new-kg-header-pc_7tEMD",
	"myNewKgHeaderPc": "my-new-kg-header-pc_7tEMD",
	"my-new-kg-header-no-subtitle-pc": "my-new-kg-header-no-subtitle-pc_3UtmJ",
	"myNewKgHeaderNoSubtitlePc": "my-new-kg-header-no-subtitle-pc_3UtmJ",
	"my-new-kg-nousetitle": "my-new-kg-nousetitle_3Ntu6",
	"myNewKgNousetitle": "my-new-kg-nousetitle_3Ntu6",
	"my-head-props": "my-head-props_4Y5Fh",
	"myHeadProps": "my-head-props_4Y5Fh",
	"my-head-props-kg": "my-head-props-kg_6kqq5",
	"myHeadPropsKg": "my-head-props-kg_6kqq5",
	"my-head-props-view-point": "my-head-props-view-point_6kJRw",
	"myHeadPropsViewPoint": "my-head-props-view-point_6kJRw",
	"my-new-kg-prompt": "my-new-kg-prompt_4cbHL",
	"myNewKgPrompt": "my-new-kg-prompt_4cbHL",
	"my-new-kg-prompt-big-img": "my-new-kg-prompt-big-img_5vKq2",
	"myNewKgPromptBigImg": "my-new-kg-prompt-big-img_5vKq2",
	"my-head-props-con": "my-head-props-con_2Aajz",
	"myHeadPropsCon": "my-head-props-con_2Aajz",
	"my-head-article": "my-head-article_3kdMI",
	"myHeadArticle": "my-head-article_3kdMI",
	"my-label-title": "my-label-title_5Hnmn",
	"myLabelTitle": "my-label-title_5Hnmn",
	"my-label-title-no-subtitle": "my-label-title-no-subtitle_1wmOG",
	"myLabelTitleNoSubtitle": "my-label-title-no-subtitle_1wmOG",
	"my-label-title-pc": "my-label-title-pc_6Y4Pf",
	"myLabelTitlePc": "my-label-title-pc_6Y4Pf",
	"my-head-abstract": "my-head-abstract_VJeYW",
	"myHeadAbstract": "my-head-abstract_VJeYW",
	"my-entry-wrapper": "my-entry-wrapper_56Mhm",
	"myEntryWrapper": "my-entry-wrapper_56Mhm",
	"my-entry-wrapper-kg-three": "my-entry-wrapper-kg-three_34HSK",
	"myEntryWrapperKgThree": "my-entry-wrapper-kg-three_34HSK",
	"my-head-logo": "my-head-logo_6Omr1",
	"myHeadLogo": "my-head-logo_6Omr1",
	"my-head-logo-big-img": "my-head-logo-big-img_1TdrA",
	"myHeadLogoBigImg": "my-head-logo-big-img_1TdrA",
	"my-head-logo-prompt": "my-head-logo-prompt_5dTsv",
	"myHeadLogoPrompt": "my-head-logo-prompt_5dTsv",
	"my-bg-header": "my-bg-header_4Io0U",
	"myBgHeader": "my-bg-header_4Io0U",
	"my-bg-header-pc": "my-bg-header-pc_5K8Mz",
	"myBgHeaderPc": "my-bg-header-pc_5K8Mz",
	"my-horizontal-gradient": "my-horizontal-gradient_3fOzS",
	"myHorizontalGradient": "my-horizontal-gradient_3fOzS",
	"my-horizontal-gradient-first-adv": "my-horizontal-gradient-first-adv_47xM7",
	"myHorizontalGradientFirstAdv": "my-horizontal-gradient-first-adv_47xM7",
	"my-horizontal-gradient-big-img": "my-horizontal-gradient-big-img_5tybB",
	"myHorizontalGradientBigImg": "my-horizontal-gradient-big-img_5tybB",
	"my-horizontal-gradient-pc": "my-horizontal-gradient-pc_5a9Bz",
	"myHorizontalGradientPc": "my-horizontal-gradient-pc_5a9Bz",
	"my-horizontal-gradient-pc-prompt": "my-horizontal-gradient-pc-prompt_33elP",
	"myHorizontalGradientPcPrompt": "my-horizontal-gradient-pc-prompt_33elP",
	"my-vertical-gradient": "my-vertical-gradient_5mcYl",
	"myVerticalGradient": "my-vertical-gradient_5mcYl",
	"my-vertical-gradient-experiment": "my-vertical-gradient-experiment_3pu8C",
	"myVerticalGradientExperiment": "my-vertical-gradient-experiment_3pu8C",
	"header-first-after": "header-first-after_6QS9R",
	"headerFirstAfter": "header-first-after_6QS9R",
	"header-first-after-living-two": "header-first-after-living-two_Rtf1x",
	"headerFirstAfterLivingTwo": "header-first-after-living-two_Rtf1x",
	"my-no-first-prompt": "my-no-first-prompt_1DN4R",
	"myNoFirstPrompt": "my-no-first-prompt_1DN4R",
	"my-no-first-prompt-pc": "my-no-first-prompt-pc_7ENvA",
	"myNoFirstPromptPc": "my-no-first-prompt-pc_7ENvA",
	"my-no-first-prompt-one-after": "my-no-first-prompt-one-after_3PMOX",
	"myNoFirstPromptOneAfter": "my-no-first-prompt-one-after_3PMOX",
	"first-after-con": "first-after-con_3vunc",
	"firstAfterCon": "first-after-con_3vunc",
	"first-after-con-logo": "first-after-con-logo_4k9jN",
	"firstAfterConLogo": "first-after-con-logo_4k9jN",
	"first-after-article": "first-after-article_5aPHW",
	"firstAfterArticle": "first-after-article_5aPHW",
	"main-title": "main-title_4JgVk",
	"mainTitle": "main-title_4JgVk",
	"sub-title": "sub-title_2mTCl",
	"subTitle": "sub-title_2mTCl",
	"logo-slot": "logo-slot_3dQ9G",
	"logoSlot": "logo-slot_3dQ9G"
};
module.exports = exports;


/***/ }),
/* 112 */
/***/ (function(module, exports) {

// Module
var code = [1,"div",6,2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",null,3,"\n        \n        ",1,"sc-link",8,2,"url",6,1,3,"headerUrl",2,"hotspot-style",6,1,3,"headerHotspotStyle",33,"enable-hotspot",3,"",2,"class",7,null,6,2,3,"$style",3,"link-no-underline",1,8,6,1,3,"_class",null,38,6,1,3,"isFirst",null,3,"\n            ",1,"div",8,2,"data-uclk",7,null,13,1,14,3,"module",3,"title",1,8,6,1,3,"json",null,33,"ubc-clk",3,"",2,"class",7,null,16,3,17,6,2,3,"$style",3,"my-new-kg-header",17,12,11,33,6,1,3,"subTitle",12,6,1,3,"isPc",6,2,3,"$style",3,"my-new-kg-header-no-subtitle-pc",6,2,3,"$style",3,"my-new-kg-header-no-subtitle",3,"",17,12,6,1,3,"isPc",6,2,3,"$style",3,"my-new-kg-header-pc",12,6,1,3,"recommendInfo",6,2,3,"$style",3,"my-new-kg-header-prompt",3,"",1,8,6,1,3,"_class",null,null,3,"\n                ",1,"div",6,2,"class",7,null,6,2,3,"$style",3,"my-new-kg-nousetitle",1,8,6,1,3,"_class",null,null,3,"\n                    ",1,"div",6,2,"class",7,null,16,3,17,6,2,3,"$style",3,"my-head-props",17,12,10,183,6,1,3,"cardName",3,"car_kg2_san",6,2,3,"$style",3,"my-head-props-kg",3,"",17,12,10,183,6,1,3,"cardName",3,"car_view_point_san",6,2,3,"$style",3,"my-head-props-view-point",3,"",1,8,6,1,3,"_class",null,null,3,"\n                        \n                        ",1,"sc-paragraph",5,2,"clamp",3,"1",2,"styles",12,6,1,3,"isPc",6,1,3,"$promptPc",6,1,3,"$promptWise",2,"class",7,null,16,2,17,6,2,3,"$style",3,"my-new-kg-prompt",17,12,6,1,3,"isBigImgIcon",6,2,3,"$style",3,"my-new-kg-prompt-big-img",3,"",1,8,6,1,3,"_class",null,38,6,1,3,"recommendInfo",null,9,null,3,3,"\n                            ",7,null,6,1,3,"recommendInfo",null,3,"\n                        ",null,null,3,"\n                        ",1,"div",4,2,"class",7,null,6,2,3,"$style",3,"my-head-props-con",1,8,6,1,3,"_class",null,null,3,"\n                            ",1,"div",6,2,"class",7,null,6,2,3,"$style",3,"my-head-article",1,8,6,1,3,"_class",null,null,3,"\n                                ",1,"object",4,38,10,76,6,1,3,"pcFreshWrapper",6,1,3,"pcFreshTitle",null,3,"\n                                    ",1,"cosc-title",6,2,"style",7,null,13,1,14,3,"padding-top",6,1,3,"mainTitlePaddingTop",1,8,6,1,3,"_style",null,2,"styles",6,1,3,"$myLabelTitlePc",2,"class",7,null,16,3,17,3,"c-line-clamp1",17,6,2,3,"$style",3,"my-label-title",17,12,11,33,6,1,3,"subTitle",6,2,3,"$style",3,"my-label-title-no-subtitle",3,"",1,8,6,1,3,"_class",null,2,"url",6,2,3,"headerUrl",3,"tcUrl",2,"link-info",13,1,14,3,"target",3,"_blank",null,9,1,3,3,"\n                                        \n                                        ",7,1,6,1,3,"mainTitle",null,3,"\n                                    ",null,3,"\n                                ",1,1,"sc-title",6,2,"clamp",3,"1",2,"style",7,null,13,1,14,3,"padding-top",6,1,3,"mainTitlePaddingTop",1,8,6,1,3,"_style",null,2,"styles",12,6,1,3,"isPc",6,1,3,"$myLabelTitlePc",3,"",2,"class",7,null,16,3,17,6,2,3,"$style",3,"my-label-title",17,12,11,33,6,1,3,"subTitle",6,2,3,"$style",3,"my-label-title-no-subtitle",3,"",17,12,6,1,3,"isPc",6,2,3,"$style",3,"my-label-title-pc",3,"",1,8,6,1,3,"_class",null,40,null,9,1,3,3,"\n                                    \n                                    ",7,1,6,1,3,"mainTitle",null,3,"\n                                ",null,3,"\n                                ",1,"sc-paragraph",4,2,"clamp",3,"1",2,"class",7,null,6,2,3,"$style",3,"my-head-abstract",1,8,6,1,3,"_class",null,38,6,1,3,"subTitle",null,9,1,3,3,"\n                                    \n                                    ",7,1,6,1,3,"subTitle",null,3,"\n                                ",null,null,3,"\n                            ",null,3,"\n                        ",null,3,"\n                    ",null,3,"\n                    \n                    ",1,"div",5,2,"class",7,null,16,2,17,6,2,3,"$style",3,"my-entry-wrapper",17,12,10,76,10,183,6,1,3,"cardName",3,"car_kg2_san",6,1,3,"isStatusTag",6,2,3,"$style",3,"my-entry-wrapper-kg-three",3,"",1,8,6,1,3,"_class",null,38,10,248,11,33,6,1,3,"isPc",6,1,3,"isEntryLogoShow",null,3,"\n                        ",1,"div",4,38,6,1,3,"isStatusTag",null,3,"\n                            ",1,"status-tag-header",6,2,"is-first",6,1,3,"isFirst",2,"live-info",6,1,3,"liveInfo",2,"live-experiment",6,2,3,"liveInfo",3,"liveExperiment",2,"recommend-info",6,1,3,"recommendInfo",2,"url-params",12,10,183,6,2,3,"liveInfo",3,"liveExperiment",3,"1",6,2,3,"liveInfo",3,"liveParams",12,10,248,10,183,6,2,3,"liveInfo",3,"liveExperiment",3,"2",10,183,6,2,3,"liveInfo",3,"liveExperiment",3,"3",6,2,3,"liveInfo",3,"imageParams",3,"",2,"card-name",6,1,3,"cardName",null,3,"\n                        ",2,1,"div",6,2,"style",9,null,4,3,"--icon-img: ",7,null,10,43,10,43,3,"url(",6,1,3,"iconImg",3,")",1,8,6,1,3,"_style",null,3,";\n                                --icon-img-dark: ",7,null,10,43,10,43,3,"url(",6,1,3,"iconImgDark",3,")",1,8,6,1,3,"_style",null,2,"data-uclk",7,null,13,1,14,3,"module",3,"title_logo",1,8,6,1,3,"json",null,33,"ubc-clk",3,"",2,"class",7,null,16,3,17,6,2,3,"$style",3,"my-head-logo",17,12,10,248,6,2,3,"liveInfo",3,"liveExperiment",6,1,3,"isBigImgIcon",6,2,3,"$style",3,"my-head-logo-big-img",3,"",17,12,6,1,3,"recommendInfo",6,2,3,"$style",3,"my-head-logo-prompt",3,"",1,8,6,1,3,"_class",null,39,6,1,3,"iconImg",null,3,"\n                        ",1,"template",4,40,null,3,"\n                            ",1,"slot",1,2,"name",3,"my-entry",null,3,"\n                        ",null,3,"\n                    ",null,null,3,"\n                ",null,3,"\n                \n                ",1,"div",6,2,"class",9,null,3,7,null,6,2,3,"$style",3,"my-bg-header",1,8,6,1,3,"_class",null,3," ",7,null,12,6,1,3,"isPc",6,2,3,"$style",3,"my-bg-header-pc",3,"",1,8,6,1,3,"_class",null,null,3,"\n                    ",1,"div",2,2,"style",9,null,5,3,"--bg-img: ",7,null,10,43,10,43,3,"url(",6,1,3,"bgImg",3,")",1,8,6,1,3,"_style",null,3,";\n                                --bg-img-dark: ",7,null,12,6,1,3,"bgImgDark",10,43,10,43,3,"url(",6,1,3,"bgImgDark",3,")",10,43,10,43,3,"url(",6,1,3,"bgImg",3,")",1,8,6,1,3,"_style",null,3,";",2,"class",7,null,16,5,17,6,2,3,"$style",3,"my-horizontal-gradient",17,12,6,1,3,"isPc",12,6,1,3,"recommendInfo",6,2,3,"$style",3,"my-horizontal-gradient-pc-prompt",6,2,3,"$style",3,"my-horizontal-gradient-pc",3,"",17,12,10,76,6,1,3,"isPc",6,1,3,"pcFreshSmooth",6,2,3,"$style",3,"pc-fresh-color-header",3,"",17,12,6,1,3,"isBigImgIcon",6,2,3,"$style",3,"my-horizontal-gradient-big-img",3,"",17,12,6,1,3,"isFirstAdv",6,2,3,"$style",3,"my-horizontal-gradient-first-adv",3,"",1,8,6,1,3,"_class",null,null,3,"\n                    \n                    ",1,"div",2,2,"class",7,null,16,2,17,6,2,3,"$style",3,"my-vertical-gradient",17,12,6,1,3,"isStatusTag",6,2,3,"$style",3,"my-vertical-gradient-experiment",3,"",1,8,6,1,3,"_class",null,38,10,248,11,33,6,1,3,"isPc",6,1,3,"isBgGradientShow",null,null,3,"\n                ",null,3,"\n            ",null,3,"\n        ",1,1,"div",9,2,"data-uclk",7,null,13,1,14,3,"module",3,"title",1,8,6,1,3,"json",null,33,"ubc-clk",3,"",2,"class",7,null,16,2,17,6,2,3,"$style",3,"header-first-after",17,12,10,183,6,2,3,"liveInfo",3,"liveExperiment",3,"2",6,2,3,"$style",3,"header-first-after-living-two",3,"",1,8,6,1,3,"_class",null,40,null,3,"\n            \n            ",1,"sc-paragraph",5,2,"clamp",3,"1",2,"styles",12,6,1,3,"isPc",6,1,3,"$promptPc",6,1,3,"$promptWise",2,"class",7,null,16,2,17,6,2,3,"$style",3,"my-no-first-prompt",17,12,6,1,3,"isPc",6,2,3,"$style",3,"my-no-first-prompt-pc",12,11,33,6,1,3,"isFirst",6,2,3,"$style",3,"my-no-first-prompt-one-after",3,"",1,8,6,1,3,"_class",null,38,6,1,3,"recommendInfo",null,9,null,3,3,"\n                ",7,null,6,1,3,"recommendInfo",null,3,"\n            ",null,null,3,"\n            ",1,"div",6,2,"class",7,null,16,2,17,6,2,3,"$style",3,"first-after-con",17,12,6,1,3,"isStatusTag",6,2,3,"$style",3,"first-after-con-logo",3,"",1,8,6,1,3,"_class",null,null,3,"\n                ",1,"div",4,2,"class",7,null,6,2,3,"$style",3,"first-after-article",1,8,6,1,3,"_class",null,null,3,"\n                    ",1,"slot",8,2,"name",3,"my-no-first-title",null,3,"\n                        ",1,"cosc-title",5,2,"url",12,6,1,3,"isPc",6,2,3,"headerUrl",3,"tcUrl",6,1,3,"undefined",2,"link-info",12,6,1,3,"isPc",13,1,14,3,"target",3,"_blank",6,1,3,"undefined",2,"class",9,null,5,3,"\n                                ",7,null,6,2,3,"$style",3,"main-title",1,8,6,1,3,"_class",null,3,"\n                                ",7,null,12,6,1,3,"isPc",6,2,3,"$style",3,"pc-fresh-bottom",3,"",1,8,6,1,3,"_class",null,3,"\n                            ",38,10,76,6,1,3,"pcFreshWrapper",6,1,3,"mainTitle",null,9,1,3,3,"\n                            \n                            ",7,1,6,1,3,"mainTitle",null,3,"\n                        ",null,null,3,"\n                        ",1,"sc-title",4,2,"url-params",6,1,3,"headerUrl",2,"class",7,null,6,2,3,"$style",3,"main-title",1,8,6,1,3,"_class",null,38,10,76,11,33,6,1,3,"pcFreshWrapper",6,1,3,"mainTitle",null,9,1,3,3,"\n                            \n                            ",7,1,6,1,3,"mainTitle",null,3,"\n                        ",null,null,3,"\n                        ",1,"sc-paragraph",4,2,"clamp",3,"1",2,"class",7,null,6,2,3,"$style",3,"sub-title",1,8,6,1,3,"_class",null,38,10,76,11,33,6,1,3,"isPc",6,1,3,"subTitle",null,9,1,3,3,"\n                            \n                            ",7,1,6,1,3,"subTitle",null,3,"\n                        ",null,null,3,"\n                    ",null,3,"\n                ",null,3,"\n                ",1,"div",5,2,"class",7,null,6,2,3,"$style",3,"logo-slot",1,8,6,1,3,"_class",null,38,6,1,3,"isStatusTag",null,3,"\n                    ",1,"status-tag-header",6,2,"is-first",6,1,3,"isFirst",2,"live-info",6,1,3,"liveInfo",2,"live-experiment",6,2,3,"liveInfo",3,"liveExperiment",2,"recommend-info",6,1,3,"recommendInfo",2,"url-params",12,10,183,6,2,3,"liveInfo",3,"liveExperiment",3,"1",6,2,3,"liveInfo",3,"liveParams",12,10,248,10,183,6,2,3,"liveInfo",3,"liveExperiment",3,"2",10,183,6,2,3,"liveInfo",3,"liveExperiment",3,"3",6,2,3,"liveInfo",3,"imageParams",3,"",2,"card-name",6,1,3,"cardName",null,3,"\n                ",null,null,3,"\n            ",null,3,"\n        ",null,3,"\n    "];
// Exports
module.exports = code;

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(114);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(2)["default"]
var update = add("1ce96814", content, true, {"manualInject":true});

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".link-no-underline_7yZ9p:hover{text-decoration:none}.car-source_4sVJf{position:relative}.car-source_4sVJf.pc-fresh-no-bottom_5QzLz{margin-bottom:-4px}.car-source_4sVJf .car-source-left_13Nli{display:-webkit-box;display:-webkit-flex;display:flex;width:100%;padding-right:.12rem;-webkit-box-sizing:border-box;box-sizing:border-box}.car-source_4sVJf .car-source-left_13Nli .car-source-left-link_JufE6{display:block;width:100%;overflow:hidden}.car-source_4sVJf .car-source-left_13Nli .car-source-left-link_JufE6 .source-flex_6o97q{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:100%}.car-source_4sVJf .car-source-left_13Nli .car-source-left-link_JufE6 .source-flex_6o97q .source-icon_52FAA{margin-right:.06rem;width:calc(var(--font-size-scale, 1)*.16rem);height:calc(var(--font-size-scale, 1)*.16rem);border-radius:50%;-webkit-background-size:cover;background-size:cover;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:inset 0 0 0 1px #0000001a;box-shadow:inset 0 0 0 1px #0000001a}.car-source_4sVJf .car-source-left_13Nli .car-source-left-link_JufE6 .source-flex_6o97q .source-text_2tf3T{-webkit-box-flex:1;-webkit-flex:1;flex:1}.cos-wise .car-source_4sVJf .car-source-left_13Nli .car-source-left-link_JufE6 .source-flex_6o97q .source-text_2tf3T{color:#b7b9c1}.car-source_4sVJf .car-source-left_13Nli .baozhang-con_5FALD{display:-webkit-box;display:-webkit-flex;display:flex}", ""]);
// Exports
exports.locals = {
	"link-no-underline": "link-no-underline_7yZ9p",
	"linkNoUnderline": "link-no-underline_7yZ9p",
	"car-source": "car-source_4sVJf",
	"carSource": "car-source_4sVJf",
	"pc-fresh-no-bottom": "pc-fresh-no-bottom_5QzLz",
	"pcFreshNoBottom": "pc-fresh-no-bottom_5QzLz",
	"car-source-left": "car-source-left_13Nli",
	"carSourceLeft": "car-source-left_13Nli",
	"car-source-left-link": "car-source-left-link_JufE6",
	"carSourceLeftLink": "car-source-left-link_JufE6",
	"source-flex": "source-flex_6o97q",
	"sourceFlex": "source-flex_6o97q",
	"source-icon": "source-icon_52FAA",
	"sourceIcon": "source-icon_52FAA",
	"source-text": "source-text_2tf3T",
	"sourceText": "source-text_2tf3T",
	"baozhang-con": "baozhang-con_5FALD",
	"baozhangCon": "baozhang-con_5FALD"
};
module.exports = exports;


/***/ }),
/* 115 */
/***/ (function(module, exports) {

// Module
var code = [1,"div",10,2,"data-ushow",7,null,13,1,14,3,"module",3,"footer",1,8,6,1,3,"json",null,2,"data-uclk",7,null,13,1,14,3,"module",3,"footer",1,8,6,1,3,"json",null,33,"ubc-show",3,"",33,"ubc-clk",3,"",2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_xstyle",1,7,null,13,1,14,3,"padding-top",12,6,1,3,"isPc",3,".05rem",12,6,1,3,"sourceWisePaddingTop",6,1,3,"sourceWisePaddingTop",3,".11rem",1,8,6,1,3,"_style",null,2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_xclass",1,9,null,3,7,null,6,2,3,"$style",3,"car-source",1,8,6,1,3,"_class",null,3," ",7,null,12,6,1,3,"pcFreshWrapper",6,2,3,"$style",3,"pc-fresh-no-bottom",3,"",1,8,6,1,3,"_class",null,2,"id",6,1,3,"id",null,3,"\n        ",1,"sc-source",6,2,"url",12,10,76,6,1,3,"isPc",6,1,3,"isFirst",3,"",6,1,3,"sourceUrl",null,3,"\n            ",1,"object",9,2,"slot",3,"left",2,"class",7,null,6,2,3,"$style",3,"car-source-left",1,8,6,1,3,"_class",null,null,3,"\n                \n                ",1,"sc-link",7,2,"url",6,1,3,"sourceParams",33,"enable-hotspot",3,"",2,"hotspot-style",6,1,3,"noHotspotStyle",2,"class",7,null,16,2,17,6,2,3,"$style",3,"link-no-underline",17,6,2,3,"$style",3,"car-source-left-link",1,8,6,1,3,"_class",null,null,3,"\n                    ",1,"div",6,2,"class",7,null,6,2,3,"$style",3,"source-flex",1,8,6,1,3,"_class",null,null,3,"\n                        ",1,"div",2,2,"class",7,null,6,2,3,"$style",3,"source-icon",1,8,6,1,3,"_class",null,2,"style",9,null,3,3,"background-image: url(",7,null,6,2,3,"sourceData",3,"icon",1,8,6,1,3,"_style",null,3,")",null,3,"\n                        ",1,"span",2,2,"class",7,null,16,3,17,3,"cu-line-clamp-1",17,3,"cu-color-source",17,6,2,3,"$style",3,"source-text",1,8,6,1,3,"_class",null,null,9,null,3,3,"\n                            ",7,null,6,2,3,"sourceData",3,"text",null,3,"\n                        ",null,3,"\n                    ",null,3,"\n                ",null,3,"\n                \n                ",1,"div",4,38,6,1,3,"isPc",null,3,"\n                    ",1,"sc-feedback",1,2,"tools",6,1,3,"toolsProps",null,3,"\n                ",null,null,3,"\n                \n                ",1,"div",7,2,"class",7,null,6,2,3,"$style",3,"baozhang-con",1,8,6,1,3,"_class",null,2,"data-ushow",7,null,13,1,14,3,"module",3,"baozhang",1,8,6,1,3,"json",null,33,"ubc-show",3,"",38,6,1,3,"isBaozhang",null,3,"\n                    ",1,"baozhang-pc",3,2,"tpl-info",6,1,3,"tplInfo",2,"ubc-public",6,1,3,"ubcPublic",38,6,1,3,"isPc",1,1,"baozhang-wise",3,2,"tpl-info",6,1,3,"tplInfo",2,"ubc-public",6,1,3,"ubcPublic",40,null,3,"\n                ",null,null,3,"\n            ",null,3,"\n            \n            ",1,"div",6,2,"slot",3,"right",2,"rl-type",3,"stop",38,11,33,6,1,3,"isPc",null,3,"\n                ",1,"sc-feedback",1,2,"feedback",6,2,3,"sourceData",3,"feedback",null,3,"\n            ",null,null,3,"\n        ",null,3,"\n    "];
// Exports
module.exports = code;

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(117);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(2)["default"]
var update = add("66dca27a", content, true, {"manualInject":true});

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".baozhang-link_3k2oq{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-left:.08rem;cursor:pointer}.baozhang-link_3k2oq .baozhang-icon_hiYRH{display:inline-block;width:.45rem;height:.16rem;background:url(https://guarantee.cdn.bcebos.com/static%2Fm-vue%2Fstaic%2Fbule_bao.png);-webkit-background-size:100% 100%;background-size:100% 100%;-webkit-box-sizing:border-box;box-sizing:border-box}", ""]);
// Exports
exports.locals = {
	"baozhang-link": "baozhang-link_3k2oq",
	"baozhangLink": "baozhang-link_3k2oq",
	"baozhang-icon": "baozhang-icon_hiYRH",
	"baozhangIcon": "baozhang-icon_hiYRH"
};
module.exports = exports;


/***/ }),
/* 118 */
/***/ (function(module, exports) {

// Module
var code = [1,"div",7,2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_xclass",1,7,null,6,2,3,"$style",3,"baozhang-link",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",35,"mouseenter",8,6,1,3,"handleBaoEnter",1,6,1,3,"$event",null,null,3,"\n        ",1,"span",1,2,"class",7,null,6,2,3,"$style",3,"baozhang-icon",1,8,6,1,3,"_class",null,null,3,"\n    "];
// Exports
module.exports = code;

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(120);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(2)["default"]
var update = add("a8a4d92a", content, true, {"manualInject":true});

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".link-no-underline_2OKcX:hover{text-decoration:none}.baozhang-link_6xjvR{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-left:.08rem;min-width:.45rem;cursor:pointer}.baozhang-link_6xjvR .baozhang-icon_2RGYz{display:inline-block;width:.45rem;height:.16rem;background:url(https://guarantee.cdn.bcebos.com/static%2Fm-vue%2Fstaic%2Fbule_bao.png);-webkit-background-size:100% 100%;background-size:100% 100%;-webkit-box-sizing:border-box;box-sizing:border-box}.c-darkmode .baozhang-link_6xjvR .baozhang-icon_2RGYz{background:url(https://guarantee.cdn.bcebos.com/static%2Fm-vue%2Fstaic%2Fwhite_bao.png);-webkit-background-size:100% 100%;background-size:100% 100%}@media (prefers-color-scheme:dark){.baozhang-link_6xjvR .baozhang-icon_2RGYz{background:url(https://guarantee.cdn.bcebos.com/static%2Fm-vue%2Fstaic%2Fwhite_bao.png);-webkit-background-size:100% 100%;background-size:100% 100%}}.cos-fresh .baozhang-link_6xjvR .baozhang-icon_2RGYz{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:calc(var(--font-size-scale, 1)*14px);height:calc(var(--font-size-scale, 1)*16px);background:url(https://gips2.baidu.com/it/u=4947924,3161063690&fm=3028&app=3028&f=PNG&fmt=auto&q=100&size=f42_48);-webkit-background-size:100% 100%;background-size:100% 100%;-webkit-box-sizing:border-box;box-sizing:border-box}.cos-fresh .baozhang-link_6xjvR .baozhang-icon_2RGYz::before{content:'';position:absolute;width:30px;height:30px;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.c-darkmode .cos-fresh .baozhang-link_6xjvR .baozhang-icon_2RGYz{opacity:.5}@media (prefers-color-scheme:dark){.cos-fresh .baozhang-link_6xjvR .baozhang-icon_2RGYz{opacity:.5}}", ""]);
// Exports
exports.locals = {
	"link-no-underline": "link-no-underline_2OKcX",
	"linkNoUnderline": "link-no-underline_2OKcX",
	"baozhang-link": "baozhang-link_6xjvR",
	"baozhangLink": "baozhang-link_6xjvR",
	"baozhang-icon": "baozhang-icon_2RGYz",
	"baozhangIcon": "baozhang-icon_2RGYz"
};
module.exports = exports;


/***/ }),
/* 121 */
/***/ (function(module, exports) {

// Module
var code = [1,"div",6,2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_xclass",1,7,null,6,2,3,"$style",3,"baozhang-link",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",null,3,"\n        ",1,"span",3,2,"rl-type",3,"stop",2,"class",7,null,6,2,3,"$style",3,"baozhang-icon",1,8,6,1,3,"_class",null,35,"click",8,6,1,3,"onClickAssurance",1,6,1,3,"$event",null,null,3,"\n    "];
// Exports
module.exports = code;

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(123);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(2)["default"]
var update = add("7e4a65ca", content, true, {"manualInject":true});

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".tabs-nav-item_1yVob{padding:var(--cos-space-none) 4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.cos-pc .tabs-nav-item_1yVob:hover{color:#00c4c5}.tabs-nav-selected_2Lt30{color:#00c4c5}@media (prefers-color-scheme:dark){.cos-wise .tabs-nav-selected_2Lt30{color:rgba(0,214,214,.7)}}", ""]);
// Exports
exports.locals = {
	"tabs-nav-item": "tabs-nav-item_1yVob",
	"tabsNavItem": "tabs-nav-item_1yVob",
	"tabs-nav-selected": "tabs-nav-selected_2Lt30",
	"tabsNavSelected": "tabs-nav-selected_2Lt30"
};
module.exports = exports;


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(125);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(2)["default"]
var update = add("7e4a65ca", content, true, {"manualInject":true});

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".tabs-nav-item_49kqr{padding:var(--cos-space-none) 4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.cos-pc .tabs-nav-item_49kqr:hover{color:var(--cos-color-text-primary)}.tabs-nav-selected_1K623{color:var(--cos-color-text-primary)}", ""]);
// Exports
exports.locals = {
	"tabs-nav-item": "tabs-nav-item_49kqr",
	"tabsNavItem": "tabs-nav-item_49kqr",
	"tabs-nav-selected": "tabs-nav-selected_1K623",
	"tabsNavSelected": "tabs-nav-selected_1K623"
};
module.exports = exports;


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(127);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(2)["default"]
var update = add("7e4a65ca", content, true, {"manualInject":true});

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".more_7Agsx{margin:var(--cos-space-none) var(--cos-space-none) -4px;padding:11px var(--cos-space-none) var(--cos-space-none)}.more_7Agsx:hover{background-color:#00000000;color:#00c4c5!important}.more_7Agsx:hover .icon_6Ot9r{color:#00c4c5!important}.more_7Agsx .line_4rc47{display:none}.more_7Agsx .text_4mPjy{position:relative}.more_7Agsx .text_4mPjy .icon_6Ot9r{display:inline-block;text-align:center;position:absolute;top:0;bottom:0;width:16px;height:16px;margin:auto var(--cos-space-none) auto var(--cos-space-xxs);border-radius:8px;background-color:#f5f6f9;font-size:var(--cos-text-caption);line-height:16px}", ""]);
// Exports
exports.locals = {
	"more": "more_7Agsx",
	"icon": "icon_6Ot9r",
	"line": "line_4rc47",
	"text": "text_4mPjy"
};
module.exports = exports;


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(129);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(2)["default"]
var update = add("7e4a65ca", content, true, {"manualInject":true});

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".more_fh1PH{padding-top:8.5px;height:28px}.cos-fresh .more_fh1PH{padding-top:10.5px}.more_fh1PH .icon_wQSVv i{padding-left:1px;width:auto}", ""]);
// Exports
exports.locals = {
	"more": "more_fh1PH",
	"icon": "icon_wQSVv"
};
module.exports = exports;


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(131);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(2)["default"]
var update = add("7e4a65ca", content, true, {"manualInject":true});

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".pc-fresh-top-padding_4b6wM{padding-top:var(--cos-space-md)!important}.link-no-underline_700iz:hover{text-decoration:none}.series-item_2XBah{padding:var(--cos-space-md) var(--cos-space-none) var(--cos-space-3xs);position:relative}.series-item_2XBah:first-of-type{padding-top:17px}.series-item_2XBah:last-of-type{padding-bottom:var(--cos-space-none)}.series-item_2XBah.series-item-pc_3iONo{padding-top:var(--cos-space-lg);font-size:var(--cos-text-subtitle-sm)}.card-more_1AgRK{margin:11.5px var(--cos-space-none) -4.5px}.card-more_1AgRK .cos-more-link-icon{font-size:var(--cos-text-subtitle)}.cos-pc .card-more_1AgRK{margin-top:var(--cos-space-md)}.cos-pc .card-more_1AgRK:hover{opacity:var(--cos-opacity-100)}.cos-pc .card-more_1AgRK:hover .cos-more-link-icon,.cos-pc .card-more_1AgRK:hover .cos-more-link-text{color:#00c4c5}", ""]);
// Exports
exports.locals = {
	"pc-fresh-top-padding": "pc-fresh-top-padding_4b6wM",
	"pcFreshTopPadding": "pc-fresh-top-padding_4b6wM",
	"link-no-underline": "link-no-underline_700iz",
	"linkNoUnderline": "link-no-underline_700iz",
	"series-item": "series-item_2XBah",
	"seriesItem": "series-item_2XBah",
	"series-item-pc": "series-item-pc_3iONo",
	"seriesItemPc": "series-item-pc_3iONo",
	"card-more": "card-more_1AgRK",
	"cardMore": "card-more_1AgRK"
};
module.exports = exports;


/***/ }),
/* 132 */
/***/ (function(module, exports) {

// Module
var code = [1,"div",8,2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",null,3,"\n        \n        ",1,"sc-tabs",7,2,"index",6,1,3,"currentTabIndex",2,"label-list",6,1,3,"recombSeriesList",2,"styles",12,6,1,3,"isSup",6,1,3,"$myTabsOneAfter",12,6,1,3,"isFirst",6,1,3,"$myTabs",6,1,3,"$myTabsOneAfter",35,"change",8,6,1,3,"handleChange",1,6,1,3,"$event",null,null,3,"\n            ",1,"sc-tab-pane",5,2,"label",6,2,3,"tabItem",3,"text",37,"tabItem","tabIndex",null,6,1,3,"recombSeriesList",null,3,"\n                \n                ",1,"template",6,38,11,33,6,1,3,"isSup",null,3,"\n                    \n                    ",1,"div",9,2,"data-ushow",7,null,13,3,14,3,"tab",6,2,3,"tabItem",3,"text",14,3,"seriesId",6,2,3,"seriesItem",3,"seriesId",14,3,"module",10,43,10,43,10,43,3,"series_",6,1,3,"tabIndex",3,"_",6,1,3,"seriesIndex",1,8,6,1,3,"json",null,2,"data-uclk",7,null,13,3,14,3,"tab",6,2,3,"tabItem",3,"text",14,3,"seriesId",6,2,3,"seriesItem",3,"seriesId",14,3,"module",10,43,10,43,10,43,3,"series_",6,1,3,"tabIndex",3,"_",6,1,3,"seriesIndex",1,8,6,1,3,"json",null,33,"ubc-show",3,"",33,"ubc-clk",3,"",2,"class",7,null,16,3,17,6,2,3,"$style",3,"series-item",17,12,6,1,3,"isPc",6,2,3,"$style",3,"series-item-pc",3,"",17,12,6,1,3,"pcFreshWrapper",6,2,3,"$style",3,"pc-fresh-top-padding",3,"",1,8,6,1,3,"_class",null,37,"seriesItem","seriesIndex",null,6,2,3,"tabItem",3,"list",null,3,"\n                        ",1,"car-series",7,2,"is-pc",6,1,3,"isPc",2,"is-first",6,1,3,"isFirst",2,"white-img-type",6,1,3,"whiteImgType",2,"img-public-data",6,1,3,"imgPublicData",2,"series-item",6,1,3,"seriesItem",2,"tab-index",6,1,3,"tabIndex",2,"series-index",6,1,3,"seriesIndex",null,3,"\n                    ",null,3,"\n                    \n                    ",1,"object",3,null,3,"\n                        ",1,"div",7,2,"rl-type",3,"stop",2,"data-uclk",7,null,13,1,14,3,"module",10,43,3,"more_",6,1,3,"tabIndex",1,8,6,1,3,"json",null,33,"ubc-clk",3,"",38,6,2,3,"tabItem",3,"isShowViewMore",null,3,"\n                            ",1,"sc-more",3,2,"link-props",13,1,14,3,"urlParams",6,2,3,"tabItem",3,"cardUrl",2,"styles",12,6,1,3,"isPc",6,1,3,"$morePc",6,1,3,"$moreWiseBigFont",38,10,76,6,1,3,"isPc",11,33,6,1,3,"pcFreshWrapper",1,1,"div",5,2,"class",7,null,6,2,3,"$style",3,"card-more",1,8,6,1,3,"_class",null,40,null,3,"\n                                ",1,"cos-more-link",1,2,"link-info",6,2,3,"tabItem",3,"cardUrlCos",null,3,"\n                            ",null,3,"\n                        ",null,null,3,"\n                    ",null,3,"\n                ",null,null,3,"\n            ",null,3,"\n        ",null,3,"\n        \n        ",1,"div",4,38,6,1,3,"isSup",null,3,"\n            ",1,"car-swiper",10,2,"is-pc",6,1,3,"isPc",2,"is-first",6,1,3,"isFirst",2,"is-sup",6,1,3,"isSup",2,"img-public-data",6,1,3,"imgPublicData",2,"tpl-info",6,1,3,"tplInfo",2,"card-params",6,1,3,"cardParams",2,"tab-index",6,1,3,"currentTabIndex",2,"swiper-list",6,1,3,"recombSeriesList",2,"ubc-public",6,1,3,"ubcPublic",2,"overflow",3,"unset",null,3,"\n        ",null,null,3,"\n    "];
// Exports
module.exports = code;

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(134);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(2)["default"]
var update = add("3ce85dc3", content, true, {"manualInject":true});

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".paragraph_45rAs{color:#848691}", ""]);
// Exports
exports.locals = {
	"paragraph": "paragraph_45rAs"
};
module.exports = exports;


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(136);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(2)["default"]
var update = add("3ce85dc3", content, true, {"manualInject":true});

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".paragraph_7cND4{color:#9195a3}", ""]);
// Exports
exports.locals = {
	"paragraph": "paragraph_7cND4"
};
module.exports = exports;


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(138);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(2)["default"]
var update = add("3ce85dc3", content, true, {"manualInject":true});

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".link-no-underline_5HGnZ:hover{text-decoration:none}.series-item-link_3y5du .series-item-row-pc_1xo8b{-webkit-box-align:center!important;-webkit-align-items:center!important;align-items:center!important}.series-item-link_3y5du .series-image_5cDeS .cos-image{background-color:#f7f7f7}.series-item-link_3y5du .series-image_5cDeS .white-img_lkYpx img{left:0;right:0;margin:var(--cos-space-none) auto;width:calc(100% - 12px)}.series-item-link_3y5du .series-image_5cDeS .image-info-mask_1EjTT{border-radius:var(--cos-rounded-sm);content:'';position:absolute;top:0;bottom:0;left:0;right:0;background-image:-webkit-gradient(linear,left top,left bottom,color-stop(0,transparent),color-stop(68%,rgba(0,0,0,.1)),to(rgba(0,0,0,.3)));background-image:-webkit-linear-gradient(transparent 0,rgba(0,0,0,.1) 68%,rgba(0,0,0,.3) 100%);background-image:linear-gradient(transparent 0,rgba(0,0,0,.1) 68%,rgba(0,0,0,.3) 100%)}.series-item-link_3y5du .series-image_5cDeS .energy-flag_1aKru{position:absolute;right:5px;bottom:5px;width:28px;height:14px;text-shadow:0 2px 4px rgba(0,0,0,.3)}.series-item-link_3y5du .series-info_2f1lg{position:relative}.series-item-link_3y5du .series-info_2f1lg.series-info-pc_7uN7T{color:#333}.series-item-link_3y5du .series-info_2f1lg .series-title-text_68ygN{display:-webkit-box;display:-webkit-flex;display:flex;padding-bottom:.045rem}.series-item-link_3y5du .series-info_2f1lg .series-title-text_68ygN.series-title-text-pc_DE2F8{padding-top:.045rem}.series-item-link_3y5du .series-info_2f1lg .series-title-text_68ygN .series-name_5tU2n{width:auto;max-width:100%;font-size:.16rem}.series-item-link_3y5du .series-info_2f1lg .series-title-text_68ygN .series-level_7l2uc{padding-left:.08rem;width:auto;max-width:.8rem;overflow:hidden}.series-item-link_3y5du .series-info_2f1lg .series-title-text_68ygN .series-level_7l2uc.series-level-pc_6sJ0t{overflow:unset;overflow-x:clip}.series-item-link_3y5du .series-info_2f1lg .price-box_1OjCr{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:.14rem}.series-item-link_3y5du .series-info_2f1lg .price-box_1OjCr .price-num_2EAKg{font-family:Arial,sans-serif}.series-item-link_3y5du .series-info_2f1lg .series-price-value_6Zoqz{height:0}.series-item-link_3y5du .series-info_2f1lg .series-paragraph_u4ZQc{padding:.045rem 0}.series-item-link_3y5du .series-info_2f1lg .ask-price-col_6ThHm{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.series-item-link_3y5du .series-info_2f1lg .ask-price-col_6ThHm .ask-price-btn-wrapper_1tBGk{height:.28rem;margin-top:.04rem}.series-item-link_3y5du .series-info_2f1lg .ask-price-col_6ThHm .ask-price-btn-wrapper_1tBGk.ask-price-btn-wrapper-pc_uCfoL{position:absolute;right:.08rem;top:0;bottom:0;margin-top:auto;margin-bottom:auto;width:.8rem;height:.3rem}.series-item-link_3y5du .series-info_2f1lg .ask-price-col_6ThHm .ask-price-btn-wrapper_1tBGk.ask-price-btn-wrapper-sup_1X8pS{margin-top:0}.series-item-link_3y5du .series-info_2f1lg .ask-price-col_6ThHm .ask-price-btn-wrapper_1tBGk .ask-price-btn_5vnof{height:100%;line-height:normal;padding:0 .09rem;background:rgba(0,200,201,.1);border-radius:.15rem;font-size:.13rem;font-weight:500;color:#00c4c5}@media (prefers-color-scheme:dark){.cos-wise .series-item-link_3y5du .series-info_2f1lg .ask-price-col_6ThHm .ask-price-btn-wrapper_1tBGk .ask-price-btn_5vnof{background:rgba(0,214,214,.1);color:rgba(0,214,214,.7)}}.cos-pc .series-item-link_3y5du .series-info_2f1lg .ask-price-col_6ThHm .ask-price-btn-wrapper_1tBGk .ask-price-btn_5vnof:hover{background:rgba(0,200,201,.2)!important;color:#00a8a9!important}.series-item-link_3y5du .series-info_2f1lg .ask-price-col_6ThHm .ask-price-btn-wrapper_1tBGk .ask-price-btn_5vnof.ask-price-btn-one-after_3OvJF{background:rgba(78,110,242,.1);color:#4e6ef2}.cos-pc .series-item-link_3y5du .series-info_2f1lg .ask-price-col_6ThHm .ask-price-btn-wrapper_1tBGk .ask-price-btn_5vnof.ask-price-btn-one-after_3OvJF:hover{background:rgba(78,110,242,.2)!important;color:#4e6ef2!important}.series-item-link_3y5du .series-info_2f1lg .series-desc-info_6NXbB .desc-tag_2mktE{padding-left:.08rem}.series-item-link_3y5du .series-info_2f1lg .series-desc-info_6NXbB .desc-tag_2mktE:first-of-type{padding-left:0}.series-item-link_3y5du .series-info_2f1lg .car-tag-group-sup_7tk2o{padding-top:.03rem}", ""]);
// Exports
exports.locals = {
	"link-no-underline": "link-no-underline_5HGnZ",
	"linkNoUnderline": "link-no-underline_5HGnZ",
	"series-item-link": "series-item-link_3y5du",
	"seriesItemLink": "series-item-link_3y5du",
	"series-item-row-pc": "series-item-row-pc_1xo8b",
	"seriesItemRowPc": "series-item-row-pc_1xo8b",
	"series-image": "series-image_5cDeS",
	"seriesImage": "series-image_5cDeS",
	"white-img": "white-img_lkYpx",
	"whiteImg": "white-img_lkYpx",
	"image-info-mask": "image-info-mask_1EjTT",
	"imageInfoMask": "image-info-mask_1EjTT",
	"energy-flag": "energy-flag_1aKru",
	"energyFlag": "energy-flag_1aKru",
	"series-info": "series-info_2f1lg",
	"seriesInfo": "series-info_2f1lg",
	"series-info-pc": "series-info-pc_7uN7T",
	"seriesInfoPc": "series-info-pc_7uN7T",
	"series-title-text": "series-title-text_68ygN",
	"seriesTitleText": "series-title-text_68ygN",
	"series-title-text-pc": "series-title-text-pc_DE2F8",
	"seriesTitleTextPc": "series-title-text-pc_DE2F8",
	"series-name": "series-name_5tU2n",
	"seriesName": "series-name_5tU2n",
	"series-level": "series-level_7l2uc",
	"seriesLevel": "series-level_7l2uc",
	"series-level-pc": "series-level-pc_6sJ0t",
	"seriesLevelPc": "series-level-pc_6sJ0t",
	"price-box": "price-box_1OjCr",
	"priceBox": "price-box_1OjCr",
	"price-num": "price-num_2EAKg",
	"priceNum": "price-num_2EAKg",
	"series-price-value": "series-price-value_6Zoqz",
	"seriesPriceValue": "series-price-value_6Zoqz",
	"series-paragraph": "series-paragraph_u4ZQc",
	"seriesParagraph": "series-paragraph_u4ZQc",
	"ask-price-col": "ask-price-col_6ThHm",
	"askPriceCol": "ask-price-col_6ThHm",
	"ask-price-btn-wrapper": "ask-price-btn-wrapper_1tBGk",
	"askPriceBtnWrapper": "ask-price-btn-wrapper_1tBGk",
	"ask-price-btn-wrapper-pc": "ask-price-btn-wrapper-pc_uCfoL",
	"askPriceBtnWrapperPc": "ask-price-btn-wrapper-pc_uCfoL",
	"ask-price-btn-wrapper-sup": "ask-price-btn-wrapper-sup_1X8pS",
	"askPriceBtnWrapperSup": "ask-price-btn-wrapper-sup_1X8pS",
	"ask-price-btn": "ask-price-btn_5vnof",
	"askPriceBtn": "ask-price-btn_5vnof",
	"ask-price-btn-one-after": "ask-price-btn-one-after_3OvJF",
	"askPriceBtnOneAfter": "ask-price-btn-one-after_3OvJF",
	"series-desc-info": "series-desc-info_6NXbB",
	"seriesDescInfo": "series-desc-info_6NXbB",
	"desc-tag": "desc-tag_2mktE",
	"descTag": "desc-tag_2mktE",
	"car-tag-group-sup": "car-tag-group-sup_7tk2o",
	"carTagGroupSup": "car-tag-group-sup_7tk2o"
};
module.exports = exports;


/***/ }),
/* 139 */
/***/ (function(module, exports) {

// Module
var code = [1,"sc-link",10,2,"url",6,2,3,"seriesItem",3,"urlParams",33,"enable-hotspot",3,"",2,"hotspot-style",6,1,3,"hotspotStyle",2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_xclass",1,7,null,16,2,17,6,2,3,"$style",3,"link-no-underline",17,6,2,3,"$style",3,"series-item-link",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",38,6,1,3,"seriesItem",null,3,"\n        ",1,"sc-row",10,2,"columns",3,"12",2,"align",3,"start",2,"justify",3,"start",2,"gutter",12,6,1,3,"isPc",3,"16",3,"12",2,"class",7,null,12,6,1,3,"isPc",6,2,3,"$style",3,"series-item-row-pc",3,"",1,8,6,1,3,"_class",null,null,3,"\n            ",1,"sc-col",4,2,"span",12,6,1,3,"isPc",4,3,4,4,null,3,"\n                ",1,"div",6,2,"data-uclk",7,null,13,1,14,3,"module",10,43,10,43,10,43,3,"series_image_",6,1,3,"tabIndex",3,"_",6,1,3,"seriesIndex",1,8,6,1,3,"json",null,33,"ubc-clk",3,"",2,"class",7,null,6,2,3,"$style",3,"series-image",1,8,6,1,3,"_class",null,null,3,"\n                    ",1,"cos-image",7,2,"src",6,2,3,"seriesItem",3,"imgSrc",2,"class",7,null,16,3,17,3,"cos-image-hover",17,12,6,1,3,"whiteImgType",3,"cos-image-4-3 cos-image-fit-contain",3,"cos-image-3-2 cos-image-fit-cover",17,12,6,1,3,"whiteImgType",6,2,3,"$style",3,"white-img",3,"",1,8,6,1,3,"_class",null,null,3,"\n                        ",1,"div",2,2,"class",7,null,6,2,3,"$style",3,"image-info-mask",1,8,6,1,3,"_class",null,38,11,33,6,1,3,"whiteImgType",null,null,3,"\n                        ",1,"div",4,2,"style",7,null,13,2,14,3,"background-image",10,43,10,43,3,"url(",6,2,3,"imgPublicData",3,"newEnergyIcon",3,");",14,3,"background-size",3,"100% 100%;",1,8,6,1,3,"_style",null,2,"class",7,null,6,2,3,"$style",3,"energy-flag",1,8,6,1,3,"_class",null,38,10,183,6,2,3,"seriesItem",3,"newEnergyLevel",3,"新能源",null,3,"\n                        ",null,null,3,"\n                    ",null,3,"\n                ",null,3,"\n            ",null,3,"\n            ",1,"sc-col",9,2,"span",12,6,1,3,"isPc",4,9,4,8,2,"class",7,null,16,2,17,6,2,3,"$style",3,"series-info",17,12,6,1,3,"isPc",6,2,3,"$style",3,"series-info-pc",3,"",1,8,6,1,3,"_class",null,null,3,"\n                ",1,"sc-row",8,2,"columns",3,"12",2,"gutter",3,"16",2,"justify",3,"space-between",null,3,"\n                    ",1,"sc-col",7,2,"span",12,6,2,3,"seriesItem",3,"inquiryURLParams",4,8,4,12,2,"style",3,"padding-right: 0;",null,3,"\n                        ",1,"div",6,2,"class",7,null,16,2,17,6,2,3,"$style",3,"series-title-text",17,12,6,1,3,"isPc",6,2,3,"$style",3,"series-title-text-pc",3,"",1,8,6,1,3,"_class",null,null,3,"\n                            ",1,"sc-paragraph",4,2,"clamp",3,"1",2,"class",9,null,2,3,"cu-color-text ",7,null,6,2,3,"$style",3,"series-name",1,8,6,1,3,"_class",null,38,6,2,3,"seriesItem",3,"name",null,9,null,3,3,"\n                                ",7,null,6,2,3,"seriesItem",3,"name",null,3,"\n                            ",null,null,3,"\n                            ",1,"sc-paragraph",5,2,"clamp",3,"1",2,"styles",12,6,1,3,"isPc",6,1,3,"$seriesLevelPc",6,1,3,"$seriesLevel",2,"class",7,null,16,2,17,6,2,3,"$style",3,"series-level",17,12,6,1,3,"isPc",6,2,3,"$style",3,"series-level-pc",3,"",1,8,6,1,3,"_class",null,38,6,2,3,"seriesItem",3,"second_level",null,9,null,3,3,"\n                                ",7,null,6,2,3,"seriesItem",3,"second_level",null,3,"\n                            ",null,null,3,"\n                        ",null,3,"\n                        ",1,"div",6,2,"class",9,null,2,7,null,6,2,3,"$style",3,"price-box",1,8,6,1,3,"_class",null,3," cu-line-clamp-1 cu-color-text",null,3,"\n                            ",1,"span",2,38,6,2,3,"seriesItem",3,"priceTip",null,9,null,2,7,null,6,2,3,"seriesItem",3,"priceTip",null,3,":",null,null,3,"\n                            ",1,"span",3,2,"class",3,"cu-color-orange-100 cu-mr-xs",38,10,183,6,2,3,"seriesItem",3,"price",3,"暂无",null,9,null,3,3,"\n                                ",7,null,6,2,3,"seriesItem",3,"saleStatus",null,3,"\n                            ",1,1,"sc-price",4,2,"class",7,null,16,2,17,3,"cu-line-clamp-1",17,6,2,3,"$style",3,"price-num",1,8,6,1,3,"_class",null,2,"value",6,2,3,"seriesItem",3,"price",2,"format",5,null,40,null,3,"\n                        ",null,3,"\n                    ",null,3,"\n                    ",1,"sc-col",6,2,"class",7,null,6,2,3,"$style",3,"ask-price-col",1,8,6,1,3,"_class",null,2,"style",3,"padding-left: 0;",38,6,2,3,"seriesItem",3,"inquiryURLParams",null,3,"\n                        ",1,"object",3,null,3,"\n                            ",1,"sc-link",4,2,"url",6,2,3,"seriesItem",3,"inquiryURLParams",null,3,"\n                                ",1,"div",8,2,"class",7,null,16,2,17,6,2,3,"$style",3,"ask-price-btn-wrapper",17,12,6,1,3,"isSup",6,2,3,"$style",3,"ask-price-btn-wrapper-sup",12,6,1,3,"isPc",6,2,3,"$style",3,"ask-price-btn-wrapper-pc",3,"",1,8,6,1,3,"_class",null,2,"data-ushow",7,null,13,1,14,3,"module",10,43,10,43,10,43,3,"ask_price_",6,1,3,"tabIndex",3,"_",6,1,3,"seriesIndex",1,8,6,1,3,"json",null,2,"data-uclk",7,null,13,1,14,3,"module",10,43,10,43,10,43,3,"ask_price_",6,1,3,"tabIndex",3,"_",6,1,3,"seriesIndex",1,8,6,1,3,"json",null,33,"ubc-show",3,"",33,"ubc-clk",3,"",null,3,"\n                                    ",1,"sc-button",3,2,"size",3,"sm",2,"class",7,null,16,2,17,6,2,3,"$style",3,"ask-price-btn",17,12,6,1,3,"isSup",6,2,3,"$style",3,"ask-price-btn-one-after",12,11,33,6,1,3,"isFirst",6,2,3,"$style",3,"ask-price-btn-one-after",3,"",1,8,6,1,3,"_class",null,null,3,"看报价",null,3,"\n                                ",null,3,"\n                            ",null,3,"\n                        ",null,3,"\n                    ",null,null,3,"\n                ",null,3,"\n                ",1,"div",4,2,"class",7,null,16,3,17,3,"cu-line-clamp-1",17,3,"cu-color-text",17,6,2,3,"$style",3,"series-desc-info",1,8,6,1,3,"_class",null,null,3,"\n                    ",1,"template",4,37,"statisticsItem",null,null,6,2,3,"seriesItem",3,"statistics",null,3,"\n                        ",1,"span",3,2,"class",7,null,6,2,3,"$style",3,"desc-tag",1,8,6,1,3,"_class",null,38,10,76,6,1,3,"statisticsItem",10,155,6,1,3,"statisticsItem",3,"",null,9,null,3,3,"\n                            ",7,null,6,1,3,"statisticsItem",null,3,"\n                        ",null,null,3,"\n                    ",null,3,"\n                ",null,3,"\n                ",1,"div",4,2,"class",7,null,12,6,1,3,"isSup",6,2,3,"$style",3,"car-tag-group-sup",3,"",1,8,6,1,3,"_class",null,null,3,"\n                    ",1,"car-tag-group",3,2,"is-sup",6,1,3,"isSup",2,"is-first",6,1,3,"isFirst",2,"tag-list",6,2,3,"seriesItem",3,"advantageTags",null,3,"\n                ",null,3,"\n            ",null,3,"\n        ",null,3,"\n    ",null];
// Exports
module.exports = code;

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(141);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(2)["default"]
var update = add("0f60e5a8", content, true, {"manualInject":true});

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".series-tag-info_1YoYa{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:.22rem;-webkit-flex-wrap:wrap;flex-wrap:wrap;overflow:hidden}.cos-pc .series-tag-info_1YoYa{height:.24rem}.series-tag-info_1YoYa .owner-tag_7E5z8{margin:.03rem 0 .03rem .06rem;padding:0 .04rem;border:.01rem solid rgba(115,125,153,.4);color:#737d99;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.series-tag-info_1YoYa .owner-tag_7E5z8:first-of-type{margin-left:0}.cos-fresh .series-tag-info_1YoYa .owner-tag_7E5z8{background-color:var(--cos-color-bg-dent);color:var(--cos-color-text-tiny);border-width:0}.cos-pc .series-tag-info_1YoYa .owner-tag_7E5z8{padding:.02rem .04rem;font-size:.12rem}.series-tag-info_1YoYa .owner-tag_7E5z8.owner-tag-newcar_oOFmW{border:.01rem solid rgba(4,212,212,.5);color:#00c4c5}.cos-fresh .series-tag-info_1YoYa .owner-tag_7E5z8.owner-tag-newcar_oOFmW{background:rgba(0,212,212,.1);border:0}.series-tag-info_1YoYa .owner-tag_7E5z8.owner-tag-newcar-one-after_69SQz{border:.01rem solid rgba(78,110,242,.4);color:#4e6ef2}.cos-fresh .series-tag-info_1YoYa .owner-tag_7E5z8.owner-tag-newcar-one-after_69SQz{background:rgba(78,110,242,.1);border:0}.cos-wise .series-tag-info_1YoYa .owner-tag_7E5z8{line-height:normal}", ""]);
// Exports
exports.locals = {
	"series-tag-info": "series-tag-info_1YoYa",
	"seriesTagInfo": "series-tag-info_1YoYa",
	"owner-tag": "owner-tag_7E5z8",
	"ownerTag": "owner-tag_7E5z8",
	"owner-tag-newcar": "owner-tag-newcar_oOFmW",
	"ownerTagNewcar": "owner-tag-newcar_oOFmW",
	"owner-tag-newcar-one-after": "owner-tag-newcar-one-after_69SQz",
	"ownerTagNewcarOneAfter": "owner-tag-newcar-one-after_69SQz"
};
module.exports = exports;


/***/ }),
/* 142 */
/***/ (function(module, exports) {

// Module
var code = [1,"div",7,2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_xclass",1,7,null,6,2,3,"$style",3,"series-tag-info",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",38,10,76,6,1,3,"tagList",6,2,3,"tagList",3,"length",null,3,"\n        ",1,"template",4,37,"tagItem",null,null,6,1,3,"tagList",null,3,"\n            ",1,"sc-tag",3,2,"class",7,null,16,3,17,3,"sc-caption",17,6,2,3,"$style",3,"owner-tag",17,12,10,183,6,2,3,"tagItem",3,"type",3,"newcar",12,6,1,3,"isSup",6,2,3,"$style",3,"owner-tag-newcar-one-after",12,6,1,3,"isFirst",6,2,3,"$style",3,"owner-tag-newcar",6,2,3,"$style",3,"owner-tag-newcar-one-after",3,"",1,8,6,1,3,"_class",null,2,"text",6,2,3,"tagItem",3,"text",38,6,2,3,"tagItem",3,"text",null,null,3,"\n        ",null,3,"\n    ",null];
// Exports
module.exports = code;

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(144);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(2)["default"]
var update = add("750b1f44", content, true, {"manualInject":true});

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".series-item_24KwO{padding:.15rem .18rem .03rem 0;position:relative}.series-item_24KwO:first-of-type{padding-top:.17rem}.series-item_24KwO:last-of-type{padding-bottom:0}.series-item_24KwO.series-item-pc_3ZiBd{padding-top:.18rem;font-size:.14rem}.songs-content_5QgKn{-webkit-transform:translate3d(0,0,0);position:relative;margin:0 -.13rem;padding:0 .1rem 0 .13rem;overflow:hidden}.c-song-scroll_5wO2s{position:relative}.c-song-scroller_3x3Pu{position:relative}.c-song-scroll-content_5dOU7{position:relative;display:inline-block;vertical-align:top;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.c-song-scroll-indicator_1eX65{padding-top:.105rem;padding-bottom:.045rem;text-align:center;font-size:.03rem;line-height:0}.c-song-scroll-right-enter-active_WD4Hb,.c-song-scroll-right-leave-active_6dG8C{-webkit-transition:opacity .5s cubic-bezier(.18,0,.26,1),-webkit-transform .24s cubic-bezier(.18,.74,.78,.96);transition:opacity .5s cubic-bezier(.18,0,.26,1),-webkit-transform .24s cubic-bezier(.18,.74,.78,.96);transition:transform .24s cubic-bezier(.18,.74,.78,.96),opacity .5s cubic-bezier(.18,0,.26,1);transition:transform .24s cubic-bezier(.18,.74,.78,.96),opacity .5s cubic-bezier(.18,0,.26,1),-webkit-transform .24s cubic-bezier(.18,.74,.78,.96)}.c-song-scroll-left-enter-active_6WaYy,.c-song-scroll-left-leave-active_6HGS9{-webkit-transition:opacity .5s cubic-bezier(.18,0,.26,1),-webkit-transform .24s cubic-bezier(.18,.74,.78,.96);transition:opacity .5s cubic-bezier(.18,0,.26,1),-webkit-transform .24s cubic-bezier(.18,.74,.78,.96);transition:transform .24s cubic-bezier(.18,.74,.78,.96),opacity .5s cubic-bezier(.18,0,.26,1);transition:transform .24s cubic-bezier(.18,.74,.78,.96),opacity .5s cubic-bezier(.18,0,.26,1),-webkit-transform .24s cubic-bezier(.18,.74,.78,.96)}", ""]);
// Exports
exports.locals = {
	"series-item": "series-item_24KwO",
	"seriesItem": "series-item_24KwO",
	"series-item-pc": "series-item-pc_3ZiBd",
	"seriesItemPc": "series-item-pc_3ZiBd",
	"songs-content": "songs-content_5QgKn",
	"songsContent": "songs-content_5QgKn",
	"c-song-scroll": "c-song-scroll_5wO2s",
	"cSongScroll": "c-song-scroll_5wO2s",
	"c-song-scroller": "c-song-scroller_3x3Pu",
	"cSongScroller": "c-song-scroller_3x3Pu",
	"c-song-scroll-content": "c-song-scroll-content_5dOU7",
	"cSongScrollContent": "c-song-scroll-content_5dOU7",
	"c-song-scroll-indicator": "c-song-scroll-indicator_1eX65",
	"cSongScrollIndicator": "c-song-scroll-indicator_1eX65",
	"c-song-scroll-right-enter-active": "c-song-scroll-right-enter-active_WD4Hb",
	"cSongScrollRightEnterActive": "c-song-scroll-right-enter-active_WD4Hb",
	"c-song-scroll-right-leave-active": "c-song-scroll-right-leave-active_6dG8C",
	"cSongScrollRightLeaveActive": "c-song-scroll-right-leave-active_6dG8C",
	"c-song-scroll-left-enter-active": "c-song-scroll-left-enter-active_6WaYy",
	"cSongScrollLeftEnterActive": "c-song-scroll-left-enter-active_6WaYy",
	"c-song-scroll-left-leave-active": "c-song-scroll-left-leave-active_6HGS9",
	"cSongScrollLeftLeaveActive": "c-song-scroll-left-leave-active_6HGS9"
};
module.exports = exports;


/***/ }),
/* 145 */
/***/ (function(module, exports) {

// Module
var code = [1,"sc-link",9,2,"url",6,1,3,"cardParams",33,"enable-hotspot",3,"",2,"hotspot-style",6,1,3,"hotspotStyle",2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_xclass",1,7,null,6,2,3,"$style",3,"songs-content",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",null,3,"\n        \n        ",1,"div",6,2,"class",7,null,6,2,3,"$style",3,"c-song-scroll",1,8,6,1,3,"_class",null,2,"style",7,null,13,2,14,3,"width",10,43,10,42,6,1,3,"pageWidthPercent",4,100,3,"%",14,3,"overflow",6,1,3,"overflow",1,8,6,1,3,"_style",null,41,3,"c-scroll",null,3,"\n            ",1,"div",6,2,"class",7,null,6,2,3,"$style",3,"c-song-scroller",1,8,6,1,3,"_class",null,2,"style",7,null,13,1,14,3,"width",10,43,10,42,6,1,3,"pageNum",4,100,3,"%",1,8,6,1,3,"_style",null,2,"data-module",3,"car-swiper-box",null,3,"\n                ",1,"div",7,2,"style",7,null,13,1,14,3,"width",10,43,10,47,4,100,6,1,3,"pageNum",3,"%",1,8,6,1,3,"_style",null,2,"class",9,null,7,3,"\n                        ",7,null,6,2,3,"$style",3,"c-song-scroll-content",1,8,6,1,3,"_class",null,3,"\n                        ",7,null,12,10,76,11,33,6,1,3,"isResetAnimation",10,76,6,1,3,"animation",10,183,6,1,3,"oldIndex",6,1,3,"swiperIndex",6,2,3,"$style",10,43,6,1,3,"animation",3,"-leave-active",3,"",1,8,6,1,3,"_class",null,3,"\n                        ",7,null,12,10,76,11,33,6,1,3,"isResetAnimation",10,76,6,1,3,"animation",10,183,6,1,3,"pageIndex",6,1,3,"swiperIndex",6,2,3,"$style",10,43,6,1,3,"animation",3,"-enter-active",3,"",1,8,6,1,3,"_class",null,3,"\n                    ",2,"data-module",9,null,2,3,"car-swiper-item-",7,null,6,1,3,"swiperIndex",null,37,"swiperItem","swiperIndex",null,6,1,3,"swiperList",null,3,"\n                    \n                    ",1,"div",7,2,"data-uclk",7,null,13,3,14,3,"tab",6,2,3,"swiperItem",3,"text",14,3,"seriesId",6,2,3,"seriesItem",3,"seriesId",14,3,"module",10,43,10,43,10,43,3,"series_",6,1,3,"swiperIndex",3,"_",6,1,3,"seriesIndex",1,8,6,1,3,"json",null,33,"ubc-clk",3,"",2,"class",7,null,16,2,17,6,2,3,"$style",3,"series-item",17,12,6,1,3,"isPc",6,2,3,"$style",3,"series-item-pc",3,"",1,8,6,1,3,"_class",null,37,"seriesItem","seriesIndex",null,6,2,3,"swiperItem",3,"list",null,3,"\n                        ",1,"car-series",7,2,"is-pc",6,1,3,"isPc",2,"is-first",6,1,3,"isFirst",2,"is-sup",6,1,3,"isSup",2,"img-public-data",6,1,3,"imgPublicData",2,"series-item",6,1,3,"seriesItem",2,"tab-index",6,1,3,"swiperIndex",2,"series-index",6,1,3,"seriesIndex",null,3,"\n                    ",null,3,"\n                ",null,3,"\n            ",null,3,"\n        ",null,3,"\n    "];
// Exports
module.exports = code;

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(147);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(2)["default"]
var update = add("45bf50bc", content, true, {"manualInject":true});

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".paragraph_6wkoF>span:nth-child(2){display:-webkit-box;display:-webkit-flex;display:flex}", ""]);
// Exports
exports.locals = {
	"paragraph": "paragraph_6wkoF"
};
module.exports = exports;


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(149);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(2)["default"]
var update = add("45bf50bc", content, true, {"manualInject":true});

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".link-no-underline_516PL:hover{text-decoration:none}.brand-link_2COqH:hover em{text-decoration:none!important}.brand-link_2COqH .brand-row_2SuRq{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.brand-link_2COqH .brand-row_2SuRq .brand-logo_3kbqQ{width:77px;height:77px}.brand-link_2COqH .brand-row_2SuRq .brand-logo_3kbqQ.brand-logo-pc_3sVeb{width:82px;height:82px}.brand-link_2COqH .brand-row_2SuRq .brand-logo_3kbqQ .brand-logo-image_1StpW{border:1px solid rgba(132,134,145,.25)}@media (prefers-color-scheme:dark){.brand-link_2COqH .brand-row_2SuRq .brand-logo_3kbqQ .brand-logo-image_1StpW.brand-logo-image-harmony_2hfOj img{background-color:#ededf0}}.brand-link_2COqH .brand-row_2SuRq .brand-logo_3kbqQ .brand-logo-image_1StpW img{background-color:var(--cos-color-bg-raised)}.brand-link_2COqH .brand-row_2SuRq .brand-text_2PP00{margin-left:var(--cos-space-sm);width:calc(100% - 93px)}.brand-link_2COqH .brand-row_2SuRq .brand-text_2PP00 .cos-pc{margin-left:var(--cos-space-md);width:calc(100% - 95px);font-size:var(--cos-text-subtitle-sm);line-height:var(--cos-leading-subtitle)}.brand-link_2COqH .brand-row_2SuRq .brand-text_2PP00.brand-text-no-logo_7xnEy{padding:var(--cos-space-none);width:100%}.brand-link_2COqH .brand-row_2SuRq .brand-text_2PP00 .text-pa_4nZM1{display:inline-block;text-align:justify;position:relative;line-height:1.5;max-height:4.6em;overflow:hidden;text-overflow:ellipsis}.brand-link_2COqH .brand-row_2SuRq .brand-text_2PP00 .text-pa_4nZM1::before{content:'';float:right;width:0;height:100%;max-height:calc(4.5em - 1em)}.brand-link_2COqH .brand-row_2SuRq .brand-text_2PP00 .text-pa_4nZM1::after{background-color:var(--cos-color-bg-raised);content:'';position:absolute;width:100%;height:100%}.brand-link_2COqH .brand-row_2SuRq .brand-text_2PP00 .text-pa_4nZM1 .show-more_1V6Ju{line-height:1;color:var(--cos-color-text-primary);float:right;clear:both;position:relative;z-index:1}.brand-link_2COqH .brand-row_2SuRq .brand-text_2PP00 .text-pa_4nZM1 .show-more_1V6Ju::before{content:'...';color:#333;-webkit-transform:translateX(-100%);transform:translateX(-100%)}.brand-link_2COqH .brand-row_2SuRq .brand-text_2PP00 .text-pa_4nZM1 .show-more_1V6Ju:hover{text-decoration:none}.brand-link_2COqH .brand-row_2SuRq .brand-text_2PP00 .text-pa_4nZM1 .show-more_1V6Ju.show-more-first_1U0tK{color:#00c4c5}.brand-link_2COqH .brand-row_2SuRq .brand-text_2PP00 .text-pa_4nZM1 .show-more_1V6Ju .show-more-before_4nbgN{padding-right:4px}.brand-link_2COqH .brand-row_2SuRq .brand-text_2PP00 .owner-tag-con_7qgrW{padding-right:var(--cos-space-xxs)}.brand-link_2COqH .brand-row_2SuRq .brand-text_2PP00 .owner-tag-con_7qgrW.owner-tag-con-pc_6Yw5p{padding-right:var(--cos-space-xs)}.brand-link_2COqH .brand-row_2SuRq .brand-text_2PP00 .owner-tag-con_7qgrW .owner-tag_3kKf2{color:var(--cos-color-text-primary);margin:var(--cos-space-3xs) var(--cos-space-none) var(--cos-space-3xs) var(--cos-space-xxs);padding:.5px 4px;border:1px solid #b8c5fa;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.cos-fresh .brand-link_2COqH .brand-row_2SuRq .brand-text_2PP00 .owner-tag-con_7qgrW .owner-tag_3kKf2{display:inline;background-color:var(--cos-color-bg-primary-light);border:0}.brand-link_2COqH .brand-row_2SuRq .brand-text_2PP00 .owner-tag-con_7qgrW .owner-tag_3kKf2:first-of-type{margin-left:var(--cos-space-none)}.cos-pc .brand-link_2COqH .brand-row_2SuRq .brand-text_2PP00 .owner-tag-con_7qgrW .owner-tag_3kKf2{font-size:var(--cos-text-caption)}", ""]);
// Exports
exports.locals = {
	"link-no-underline": "link-no-underline_516PL",
	"linkNoUnderline": "link-no-underline_516PL",
	"brand-link": "brand-link_2COqH",
	"brandLink": "brand-link_2COqH",
	"brand-row": "brand-row_2SuRq",
	"brandRow": "brand-row_2SuRq",
	"brand-logo": "brand-logo_3kbqQ",
	"brandLogo": "brand-logo_3kbqQ",
	"brand-logo-pc": "brand-logo-pc_3sVeb",
	"brandLogoPc": "brand-logo-pc_3sVeb",
	"brand-logo-image": "brand-logo-image_1StpW",
	"brandLogoImage": "brand-logo-image_1StpW",
	"brand-logo-image-harmony": "brand-logo-image-harmony_2hfOj",
	"brandLogoImageHarmony": "brand-logo-image-harmony_2hfOj",
	"brand-text": "brand-text_2PP00",
	"brandText": "brand-text_2PP00",
	"brand-text-no-logo": "brand-text-no-logo_7xnEy",
	"brandTextNoLogo": "brand-text-no-logo_7xnEy",
	"text-pa": "text-pa_4nZM1",
	"textPa": "text-pa_4nZM1",
	"show-more": "show-more_1V6Ju",
	"showMore": "show-more_1V6Ju",
	"show-more-first": "show-more-first_1U0tK",
	"showMoreFirst": "show-more-first_1U0tK",
	"show-more-before": "show-more-before_4nbgN",
	"showMoreBefore": "show-more-before_4nbgN",
	"owner-tag-con": "owner-tag-con_7qgrW",
	"ownerTagCon": "owner-tag-con_7qgrW",
	"owner-tag-con-pc": "owner-tag-con-pc_6Yw5p",
	"ownerTagConPc": "owner-tag-con-pc_6Yw5p",
	"owner-tag": "owner-tag_3kKf2",
	"ownerTag": "owner-tag_3kKf2"
};
module.exports = exports;


/***/ }),
/* 150 */
/***/ (function(module, exports) {

// Module
var code = [1,"div",10,2,"data-ushow",7,null,13,1,14,3,"module",3,"brand_content",1,8,6,1,3,"json",null,2,"data-uclk",7,null,13,1,14,3,"module",3,"brand_content",1,8,6,1,3,"json",null,33,"ubc-show",3,"",33,"ubc-clk",3,"",2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",null,3,"\n        ",1,"sc-link",7,2,"url",6,1,3,"bkUrl",33,"enable-hotspot",3,"",2,"hotspot-style",6,1,3,"brandHotspotStyle",2,"class",7,null,16,2,17,6,2,3,"$style",3,"link-no-underline",17,6,2,3,"$style",3,"brand-link",1,8,6,1,3,"_class",null,null,3,"\n            ",1,"div",6,2,"class",7,null,6,2,3,"$style",3,"brand-row",1,8,6,1,3,"_class",null,null,3,"\n                \n                ",1,"div",9,2,"data-ushow",7,null,13,1,14,3,"module",3,"brand_logo",1,8,6,1,3,"json",null,2,"data-uclk",7,null,13,1,14,3,"module",3,"brand_logo",1,8,6,1,3,"json",null,33,"ubc-show",3,"",33,"ubc-clk",3,"",2,"class",7,null,16,2,17,6,2,3,"$style",3,"brand-logo",17,12,6,1,3,"isPc",6,2,3,"$style",3,"brand-logo-pc",3,"",1,8,6,1,3,"_class",null,38,6,2,3,"baike",3,"brandLogo",null,3,"\n                    ",1,"sc-image",4,2,"src",6,2,3,"baike",3,"brandLogo",2,"bordered",5,null,2,"show-placeholder",5,null,2,"class",7,null,16,3,17,3,"sc-image-1/1",17,6,2,3,"$style",3,"brand-logo-image",17,12,6,1,3,"isHarmony",6,2,3,"$style",3,"brand-logo-image-harmony",3,"",1,8,6,1,3,"_class",null,null,3,"\n                ",null,null,3,"\n                \n                ",1,"div",4,2,"class",7,null,16,2,17,6,2,3,"$style",3,"brand-text",17,12,6,2,3,"baike",3,"brandLogo",3,"",6,2,3,"$style",3,"brand-text-no-logo",1,8,6,1,3,"_class",null,null,3,"\n                    \n                    ",1,"div",4,38,6,1,3,"isPc",null,3,"\n                        ",1,"object",3,null,3,"\n                            ",1,"sc-paragraph",4,2,"styles",6,1,3,"$myParagraph",null,3,"\n                                ",1,"span",6,2,"class",7,null,6,2,3,"$style",3,"text-pa",1,8,6,1,3,"_class",null,null,3,"\n                                    \n                                    ",1,"span",4,2,"class",7,null,16,2,17,6,2,3,"$style",3,"owner-tag-con",17,12,6,1,3,"isPc",6,2,3,"$style",3,"owner-tag-con-pc",3,"",1,8,6,1,3,"_class",null,null,3,"\n                                        ",1,"sc-tag",2,2,"class",7,null,16,2,17,3,"sc-caption",17,6,2,3,"$style",3,"owner-tag",1,8,6,1,3,"_class",null,2,"text",3,"品牌介绍",null,3,"\n                                    ",null,3,"\n                                    \n                                    ",1,"a",6,2,"class",7,null,16,2,17,6,2,3,"$style",3,"show-more",17,12,6,1,3,"isFirst",6,2,3,"$style",3,"show-more-first",3,"",1,8,6,1,3,"_class",null,null,3,"\n                                        ",1,"span",1,2,"class",7,null,6,2,3,"$style",3,"show-more-before",1,8,6,1,3,"_class",null,null,3,"\n                                        详情\n                                        ",1,"sc-icon",1,2,"name",3,"right",null,3,"\n                                    ",null,9,1,3,3,"\n                                    \n                                    ",7,1,6,2,3,"baike",3,"description",null,3,"\n                                ",null,3,"\n                            ",null,3,"\n                        ",null,3,"\n                    ",1,1,"div",4,40,null,3,"\n                        ",1,"sc-paragraph",4,2,"clamp",4,3,null,3,"\n                            \n                            ",1,"span",4,2,"class",7,null,16,2,17,6,2,3,"$style",3,"owner-tag-con",17,12,6,1,3,"isPc",6,2,3,"$style",3,"owner-tag-con-pc",3,"",1,8,6,1,3,"_class",null,null,3,"\n                                ",1,"sc-tag",2,2,"class",7,null,16,2,17,3,"sc-caption",17,6,2,3,"$style",3,"owner-tag",1,8,6,1,3,"_class",null,2,"text",3,"品牌介绍",null,3,"\n                            ",null,9,1,3,3,"\n                            \n                            ",7,1,6,2,3,"baike",3,"description",null,3,"\n                        ",null,3,"\n                    ",null,3,"\n                ",null,3,"\n            ",null,3,"\n        ",null,3,"\n    "];
// Exports
module.exports = code;

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(152);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(2)["default"]
var update = add("36ed8400", content, true, {"manualInject":true});

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".living-row_prGId{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:var(--cos-color-bg-dent);border-radius:var(--cos-rounded-sm);line-height:1;padding:var(--cos-space-sm) var(--cos-space-xs);min-height:40px;-webkit-box-sizing:border-box;box-sizing:border-box}.living-row_prGId .living-col-left_3jBH1{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;overflow:hidden}.living-row_prGId .living-col-left_3jBH1 .living-title_5sFCm{margin-right:var(--cos-space-3xs);display:block;-webkit-box-orient:inline-axis;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.living-row_prGId .living-col-left_3jBH1 .living-title_5sFCm .living-title-false_3tGCX{color:transparent}.living-row_prGId .living-col-left_3jBH1 .living-status_6ksH7{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-flex:0;-webkit-flex:0 0 auto;flex:0 0 auto}.living-row_prGId .living-col-left_3jBH1 .living-status_6ksH7 .living-icon_2csdK{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin-right:var(--cos-space-3xs);padding:var(--cos-space-none) 1px}@-webkit-keyframes lineChange_2Vwgi{0%{-webkit-transform:scaleY(.3);transform:scaleY(.3)}25%{-webkit-transform:scaleY(.7);transform:scaleY(.7)}50%{-webkit-transform:scaleY(1);transform:scaleY(1)}to{-webkit-transform:scaleY(.3);transform:scaleY(.3)}}@keyframes lineChange_2Vwgi{0%{-webkit-transform:scaleY(.3);transform:scaleY(.3)}25%{-webkit-transform:scaleY(.7);transform:scaleY(.7)}50%{-webkit-transform:scaleY(1);transform:scaleY(1)}to{-webkit-transform:scaleY(.3);transform:scaleY(.3)}}.living-row_prGId .living-col-left_3jBH1 .living-status_6ksH7 .living-icon_2csdK .live-line_38fg4{border-radius:var(--cos-rounded-xxs);background-color:var(--cos-color-bg-error);width:2px;height:10px;margin-left:2px;-webkit-animation:lineChange_2Vwgi 680ms linear infinite;animation:lineChange_2Vwgi 680ms linear infinite}.living-row_prGId .living-col-left_3jBH1 .living-status_6ksH7 .living-icon_2csdK .live-line_38fg4:first-of-type{margin-left:var(--cos-space-none);-webkit-transform:scaleY(.8);transform:scaleY(.8);-webkit-animation-delay:-340ms;animation-delay:-340ms}.living-row_prGId .living-col-left_3jBH1 .living-status_6ksH7 .living-icon_2csdK .live-line_38fg4:nth-child(2){-webkit-transform:scaleY(.4);transform:scaleY(.4);-webkit-animation-delay:-170ms;animation-delay:-170ms}.living-row_prGId .living-col-left_3jBH1 .living-status_6ksH7 .living-icon_2csdK .live-line_38fg4:last-of-type{-webkit-transform:scaleY(.6);transform:scaleY(.6)}.living-row_prGId .living-col-left_3jBH1 .living-status_6ksH7 .living-text_3dKg0{font-weight:var(--cos-font-medium);-webkit-text-stroke:var(--cos-font-medium-stroke);font-family:PingFang SC,Arial,sans-serif;color:var(--cos-color-text-on-error-light);font-size:var(--cos-text-caption)}.living-row_prGId .living-col-right_77hZg{margin-left:var(--cos-space-3xs);-webkit-box-flex:0;-webkit-flex:0 0 auto;flex:0 0 auto}.living-row_prGId .living-col-right_77hZg .params-icon_7nY65{font-size:var(--cos-text-body-lg)}", ""]);
// Exports
exports.locals = {
	"living-row": "living-row_prGId",
	"livingRow": "living-row_prGId",
	"living-col-left": "living-col-left_3jBH1",
	"livingColLeft": "living-col-left_3jBH1",
	"living-title": "living-title_5sFCm",
	"livingTitle": "living-title_5sFCm",
	"living-title-false": "living-title-false_3tGCX",
	"livingTitleFalse": "living-title-false_3tGCX",
	"living-status": "living-status_6ksH7",
	"livingStatus": "living-status_6ksH7",
	"living-icon": "living-icon_2csdK",
	"livingIcon": "living-icon_2csdK",
	"live-line": "live-line_38fg4",
	"liveLine": "live-line_38fg4",
	"lineChange": "lineChange_2Vwgi",
	"living-text": "living-text_3dKg0",
	"livingText": "living-text_3dKg0",
	"living-col-right": "living-col-right_77hZg",
	"livingColRight": "living-col-right_77hZg",
	"params-icon": "params-icon_7nY65",
	"paramsIcon": "params-icon_7nY65"
};
module.exports = exports;


/***/ }),
/* 153 */
/***/ (function(module, exports) {

// Module
var code = [1,"div",7,2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_xclass",1,3,"cos-space-mt-md",2,"rl-type",3,"stop",2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",null,3,"\n        ",1,"div",12,2,"data-ushow",7,null,13,1,14,3,"module",3,"living_btn",1,8,6,1,3,"json",null,2,"data-uclk",7,null,13,1,14,3,"module",3,"living_btn",1,8,6,1,3,"json",null,33,"ubc-show",3,"",33,"ubc-clk",3,"",2,"class",7,null,16,2,17,3,"cos-block",17,6,2,3,"$style",3,"living-row",1,8,6,1,3,"_class",null,45,12,10,76,6,2,3,"liveInfo",3,"urlParams",6,3,3,"liveInfo",3,"urlParams",3,"href",3,"a",3,"div",42,6,2,3,"liveInfo",3,"urlParams",null,3,"\n            ",1,"div",6,2,"class",7,null,6,2,3,"$style",3,"living-col-left",1,8,6,1,3,"_class",null,null,3,"\n                ",1,"span",4,2,"class",7,null,6,2,3,"$style",3,"living-title",1,8,6,1,3,"_class",null,null,9,null,3,3,"\n                    ",7,null,6,2,3,"liveInfo",3,"title",null,3,"\n                    \n                    ",1,"span",2,2,"class",7,null,6,2,3,"$style",3,"living-title-false",1,8,6,1,3,"_class",null,null,3,".",null,3,"\n                ",null,3,"\n                ",1,"div",6,2,"class",7,null,6,2,3,"$style",3,"living-status",1,8,6,1,3,"_class",null,null,3,"\n                    ",1,"div",8,2,"class",7,null,6,2,3,"$style",3,"living-icon",1,8,6,1,3,"_class",null,null,3,"\n                        ",1,"div",1,2,"class",7,null,6,2,3,"$style",3,"live-line",1,8,6,1,3,"_class",null,null,3,"\n                        ",1,"div",1,2,"class",7,null,6,2,3,"$style",3,"live-line",1,8,6,1,3,"_class",null,null,3,"\n                        ",1,"div",1,2,"class",7,null,6,2,3,"$style",3,"live-line",1,8,6,1,3,"_class",null,null,3,"\n                    ",null,3,"\n                    ",1,"span",2,2,"class",7,null,6,2,3,"$style",3,"living-text",1,8,6,1,3,"_class",null,null,6,2,3,"liveInfo",3,"statusText",null,3,"\n                ",null,3,"\n            ",null,3,"\n            ",1,"div",4,2,"class",7,null,6,2,3,"$style",3,"living-col-right",1,8,6,1,3,"_class",null,null,3,"\n                ",1,"cos-icon",2,2,"name",3,"right",2,"class",7,null,6,2,3,"$style",3,"params-icon",1,8,6,1,3,"_class",null,null,3,"\n            ",null,3,"\n        ",null,3,"\n    "];
// Exports
module.exports = code;

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(155);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(2)["default"]
var update = add("51879820", content, true, {"manualInject":true});

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".link-no-underline_6UNbo:hover{text-decoration:none}.brand-link_2FqYP .brand-text_4FXBH{padding:.045rem 0}.brand-link_2FqYP .brand-text-title_5hPTB{font-weight:500}.cos-ios .brand-link_2FqYP .brand-text-title_5hPTB{font-weight:600}", ""]);
// Exports
exports.locals = {
	"link-no-underline": "link-no-underline_6UNbo",
	"linkNoUnderline": "link-no-underline_6UNbo",
	"brand-link": "brand-link_2FqYP",
	"brandLink": "brand-link_2FqYP",
	"brand-text": "brand-text_4FXBH",
	"brandText": "brand-text_4FXBH",
	"brand-text-title": "brand-text-title_5hPTB",
	"brandTextTitle": "brand-text-title_5hPTB"
};
module.exports = exports;


/***/ }),
/* 156 */
/***/ (function(module, exports) {

// Module
var code = [1,"sc-link",9,2,"url",6,2,3,"brandInfo",3,"brandParams",33,"enable-hotspot",3,"",2,"hotspot-style",6,1,3,"brandHotspotStyle",2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_xclass",1,7,null,16,2,17,6,2,3,"$style",3,"link-no-underline",17,6,2,3,"$style",3,"brand-link",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",null,3,"\n        \n        ",1,"sc-row",6,2,"columns",3,"12",null,3,"\n            ",1,"sc-col",4,2,"span",3,"2",null,3,"\n                ",1,"sc-image",4,2,"src",6,2,3,"brandInfo",3,"brandImage",2,"mask-type",3,"around",33,"is-vertical-center",3,"",2,"class",3,"sc-image-1/1",null,3,"\n            ",null,3,"\n            ",1,"sc-col",6,2,"span",3,"10",null,3,"\n                ",1,"sc-paragraph",4,2,"clamp",3,"1",2,"class",7,null,16,2,17,6,2,3,"$style",3,"brand-text",17,6,2,3,"$style",3,"brand-text-title",1,8,6,1,3,"_class",null,38,6,2,3,"brandInfo",3,"headerTitle",null,9,null,3,3,"\n                    ",7,null,6,2,3,"brandInfo",3,"headerTitle",null,3,"\n                ",null,null,3,"\n                ",1,"sc-paragraph",4,2,"clamp",3,"1",2,"class",7,null,6,2,3,"$style",3,"brand-text",1,8,6,1,3,"_class",null,38,6,2,3,"brandInfo",3,"abstract",null,9,null,3,3,"\n                    ",7,null,6,2,3,"brandInfo",3,"abstract",null,3,"\n                ",null,null,3,"\n            ",null,3,"\n        ",null,3,"\n    "];
// Exports
module.exports = code;

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(158);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(2)["default"]
var update = add("55dc8069", content, true, {"manualInject":true});

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".card-custom_7zbqd{--module-gap:var(--cos-space-md)}.cos-pc .card-custom_7zbqd.card-custom-first-after_36Vua{--module-gap:var(--cos-space-xs)}.cos-pc .card-custom_7zbqd.card-custom-first_4C3ri{margin-bottom:41px}.cos-pc .card-custom_7zbqd.card-custom-first_4C3ri .cosc-card-shadow::after{border-color:rgba(0,200,200,.18)}", ""]);
// Exports
exports.locals = {
	"card-custom": "card-custom_7zbqd",
	"cardCustom": "card-custom_7zbqd",
	"card-custom-first-after": "card-custom-first-after_36Vua",
	"cardCustomFirstAfter": "card-custom-first-after_36Vua",
	"card-custom-first": "card-custom-first_4C3ri",
	"cardCustomFirst": "card-custom-first_4C3ri"
};
module.exports = exports;


/***/ }),
/* 159 */
/***/ (function(module, exports) {

// Module
var code = [1,"div",11,2,"data-ucfg",6,2,3,"ubcData",3,"dataUcfg",2,"data-ushow",6,2,3,"ubcData",3,"dataUbcShow",2,"data-uclk",6,2,3,"ubcData",3,"dataUbcClk",33,"ubc-show",3,"",33,"ubc-clk",3,"",2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",null,3,"\n        ",1,"cosc-card",14,2,"link-info",6,2,3,"commonInfo",3,"cardParams",2,"tpl-info",6,1,3,"tplInfo",2,"light-bg",6,2,3,"fieldsData",3,"bgProps",2,"shadow",10,76,6,2,3,"baseCnf",3,"isPc",6,2,3,"baseCnf",3,"isFirst",2,"class",7,null,16,2,17,6,2,3,"$style",3,"card-custom",17,12,6,2,3,"baseCnf",3,"isFirst",6,2,3,"$style",3,"card-custom-first",6,2,3,"$style",3,"card-custom-first-after",1,8,6,1,3,"_class",null,null,3,"\n            \n            ",1,"car-header-cosmic",10,2,"is-pc",6,2,3,"baseCnf",3,"isPc",2,"is-first",6,2,3,"baseCnf",3,"isFirst",2,"is-first-adv",6,2,3,"baseCnf",3,"isFirstAdv",33,"is-space-bottom-none",3,"",2,"is-logo-show",5,null,2,"tpl-info",6,1,3,"tplInfo",2,"main-title",6,2,3,"commonInfo",3,"mainTitle",2,"sub-title",6,2,3,"commonInfo",3,"subTitle",2,"ubc-public",6,2,3,"ubcData",3,"ubcPublic",2,"fields-data",6,1,3,"fieldsData",null,3,"\n\n            ",1,"baike-info",7,2,"is-card-type",6,1,3,"isCardType",2,"base-cnf",6,1,3,"baseCnf",2,"tpl-info",6,1,3,"tplInfo",2,"ubc-public",6,2,3,"ubcData",3,"ubcPublic",2,"common-info",6,1,3,"commonInfo",2,"ds-info",6,2,3,"componentInfo",3,"dsInfo",2,"baike-info",6,2,3,"componentInfo",3,"baikeInfo",null,3,"\n\n            \n            ",1,"tab-info",8,2,"img-public-data",6,1,3,"imgPublicData",2,"base-cnf",6,1,3,"baseCnf",2,"tpl-info",6,1,3,"tplInfo",2,"ubc-public",6,2,3,"ubcData",3,"ubcPublic",2,"common-info",6,1,3,"commonInfo",2,"tab-active-index",6,2,3,"componentInfo",3,"tabActiveIndex",2,"tab-list",6,2,3,"componentInfo",3,"tabList",38,6,2,3,"componentInfo",3,"tabShow",null,null,3,"\n\n            \n            ",1,"footer",4,38,11,33,10,76,6,2,3,"baseCnf",3,"isPc",6,2,3,"baseCnf",3,"isFirst",null,3,"\n                ",1,"div",4,2,"style",7,null,13,1,14,3,"margin-top",12,6,2,3,"baseCnf",3,"isPc",3,"-6px",3,"0",1,8,6,1,3,"_style",null,null,3,"\n                    ",1,"car-source-cosmic",6,2,"is-pc",6,2,3,"baseCnf",3,"isPc",2,"is-first",6,2,3,"baseCnf",3,"isFirst",2,"source-data",6,2,3,"commonInfo",3,"sourceData",2,"source-url",6,2,3,"commonInfo",3,"sourceUrl",2,"source-params",6,2,3,"commonInfo",3,"cardParams",2,"source-wise-padding-top",3,"9px",null,3,"\n                ",null,3,"\n            ",null,null,3,"\n        ",null,3,"\n    "];
// Exports
module.exports = code;

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(161);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(2)["default"]
var update = add("60b5606e", content, true, {"manualInject":true});

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".link-no-underline_56NxS:hover{text-decoration:none}.car-source_Hyaas{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.cos-wise .car-source_Hyaas{margin-bottom:-4.5px}.cos-pc .car-source_Hyaas{margin-top:.08rem}.car-source_Hyaas .car-source-left_4KuEJ{display:-webkit-box;display:-webkit-flex;display:flex;max-width:calc(100% - .16rem);padding-right:.12rem;-webkit-box-sizing:border-box;box-sizing:border-box}.car-source_Hyaas .car-source-left_4KuEJ .car-source-left-link_3aTtY{display:block;max-width:100%;overflow:hidden}.car-source_Hyaas .car-source-left_4KuEJ .car-source-left-link_3aTtY .source-flex_2CVnq{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:100%}.car-source_Hyaas .car-source-left_4KuEJ .car-source-left-link_3aTtY .source-flex_2CVnq .source-icon_wef4s{margin-right:.06rem;width:calc(var(--font-size-scale, 1)*.16rem);height:calc(var(--font-size-scale, 1)*.16rem);border-radius:50%;-webkit-background-size:cover;background-size:cover;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:inset 0 0 0 1px #0000001a;box-shadow:inset 0 0 0 1px #0000001a}.cos-pc .car-source_Hyaas .car-source-left_4KuEJ .car-source-left-link_3aTtY .source-flex_2CVnq .source-icon_wef4s{margin-right:var(--cos-space-3xs)}.car-source_Hyaas .car-source-left_4KuEJ .car-source-left-link_3aTtY .source-flex_2CVnq .source-text_2A6za{-webkit-box-flex:1;-webkit-flex:1;flex:1}.cos-wise .car-source_Hyaas .car-source-left_4KuEJ .car-source-left-link_3aTtY .source-flex_2CVnq .source-text_2A6za{color:#b7b9c1}.car-source_Hyaas .car-source-left_4KuEJ .baozhang-con_23oPN{display:-webkit-box;display:-webkit-flex;display:flex}.car-source_Hyaas .car-source-right_2ridI{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}", ""]);
// Exports
exports.locals = {
	"link-no-underline": "link-no-underline_56NxS",
	"linkNoUnderline": "link-no-underline_56NxS",
	"car-source": "car-source_Hyaas",
	"carSource": "car-source_Hyaas",
	"car-source-left": "car-source-left_4KuEJ",
	"carSourceLeft": "car-source-left_4KuEJ",
	"car-source-left-link": "car-source-left-link_3aTtY",
	"carSourceLeftLink": "car-source-left-link_3aTtY",
	"source-flex": "source-flex_2CVnq",
	"sourceFlex": "source-flex_2CVnq",
	"source-icon": "source-icon_wef4s",
	"sourceIcon": "source-icon_wef4s",
	"source-text": "source-text_2A6za",
	"sourceText": "source-text_2A6za",
	"baozhang-con": "baozhang-con_23oPN",
	"baozhangCon": "baozhang-con_23oPN",
	"car-source-right": "car-source-right_2ridI",
	"carSourceRight": "car-source-right_2ridI"
};
module.exports = exports;


/***/ }),
/* 162 */
/***/ (function(module, exports) {

// Module
var code = [1,"div",12,2,"data-ushow",7,null,13,1,14,3,"module",3,"footer",1,8,6,1,3,"json",null,2,"data-uclk",7,null,13,1,14,3,"module",3,"footer",1,8,6,1,3,"json",null,33,"ubc-show",3,"",33,"ubc-clk",3,"",2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_xstyle",1,7,null,13,1,14,3,"padding-top",12,6,1,3,"isPc",3,".05rem",12,6,1,3,"sourceWisePaddingTop",6,1,3,"sourceWisePaddingTop",3,"9px",1,8,6,1,3,"_style",null,2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_xclass",1,7,null,6,2,3,"$style",3,"car-source",1,8,6,1,3,"_class",null,2,"id",6,1,3,"id",null,3,"\n        ",1,"object",10,2,"slot",3,"left",2,"rl-type",3,"stop",2,"class",7,null,6,2,3,"$style",3,"car-source-left",1,8,6,1,3,"_class",null,null,3,"\n            \n            ",1,"div",7,2,"class",7,null,16,4,17,3,"cos-block",17,3,"cos-color-text",17,6,2,3,"$style",3,"link-no-underline",17,6,2,3,"$style",3,"car-source-left-link",1,8,6,1,3,"_class",null,33,"ubc-clk",3,"",45,12,6,2,3,"sourceParams",3,"href",3,"a",3,"div",42,6,1,3,"sourceParams",null,3,"\n                ",1,"div",6,2,"class",7,null,6,2,3,"$style",3,"source-flex",1,8,6,1,3,"_class",null,null,3,"\n                    ",1,"div",2,2,"class",7,null,6,2,3,"$style",3,"source-icon",1,8,6,1,3,"_class",null,2,"style",9,null,3,3,"background-image: url(",7,null,6,2,3,"sourceData",3,"icon",1,8,6,1,3,"_style",null,3,")",null,3,"\n                    ",1,"span",2,2,"class",7,null,16,3,17,3,"cu-line-clamp-1",17,3,"cu-color-source",17,6,2,3,"$style",3,"source-text",1,8,6,1,3,"_class",null,null,9,null,3,3,"\n                        ",7,null,6,2,3,"sourceData",3,"text",null,3,"\n                    ",null,3,"\n                ",null,3,"\n            ",null,3,"\n            \n            ",1,"div",5,2,"class",3,"cos-space-ml-xxs",38,6,1,3,"isPc",null,3,"\n                ",1,"cosc-feedback",1,2,"options",6,1,3,"toolsProps",null,3,"\n            ",null,null,3,"\n            \n            ",1,"div",7,2,"class",7,null,6,2,3,"$style",3,"baozhang-con",1,8,6,1,3,"_class",null,2,"data-ushow",7,null,13,1,14,3,"module",3,"baozhang",1,8,6,1,3,"json",null,33,"ubc-show",3,"",38,6,1,3,"isBaozhang",null,3,"\n                ",1,"baozhang-pc",3,2,"tpl-info",6,1,3,"tplInfo",2,"ubc-public",6,1,3,"ubcPublic",38,6,1,3,"isPc",1,1,"baozhang-wise",3,2,"tpl-info",6,1,3,"tplInfo",2,"ubc-public",6,1,3,"ubcPublic",40,null,3,"\n            ",null,null,3,"\n        ",null,3,"\n        \n        ",1,"div",7,2,"slot",3,"right",2,"rl-type",3,"stop",2,"class",7,null,6,2,3,"$style",3,"car-source-right",1,8,6,1,3,"_class",null,38,11,33,6,1,3,"isPc",null,3,"\n            ",1,"cosc-feedback",1,2,"options",6,2,3,"sourceData",3,"feedback",null,3,"\n        ",null,null,3,"\n    "];
// Exports
module.exports = code;

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(164);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(2)["default"]
var update = add("09678927", content, true, {"manualInject":true});

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".link-no-underline_p9tE9:hover{text-decoration:none}.ds-row_27HPH{margin-top:var(--module-gap)}.ds-row_27HPH .ds-col_6xNs9{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin:-4.5px var(--cos-space-none)}.ds-row_27HPH .ds-col_6xNs9 .ds-art_426uH{display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;white-space:normal;-webkit-line-clamp:3;color:var(--cos-color-text-tiny)}.cos-pc .ds-row_27HPH .ds-col_6xNs9 .ds-art_426uH{display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;white-space:normal;-webkit-line-clamp:2}.ds-row_27HPH .ds-col_6xNs9 .ds-text_7ydcP{display:inline}.ds-row_27HPH .ds-col_6xNs9 .ds-text_7ydcP .text-high_yTmZf{font-weight:var(--cos-font-medium);-webkit-text-stroke:var(--cos-font-medium-stroke);font-family:PingFang SC,Arial,sans-serif;background:-webkit-gradient(linear,left top,right top,from(rgba(0,200,200,.12))) no-repeat bottom;background:-webkit-linear-gradient(left,rgba(0,200,200,.12)) no-repeat bottom;background:linear-gradient(90deg,rgba(0,200,200,.12)) no-repeat bottom;-webkit-background-size:100% 12px;background-size:100% 12px}.baike-row_3Few8{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-top:var(--module-gap)}.baike-row_3Few8 .baike-col-left_5eFDy{margin-right:var(--cos-space-sm);-webkit-box-flex:0;-webkit-flex:0 0 auto;flex:0 0 auto;width:57px}.baike-row_3Few8 .desc-row_20LbK{color:var(--cos-color-text)}.baike-row_3Few8 .desc-row_20LbK .desc-tag_7iWG3{display:inline;margin-right:var(--cos-space-xxs);background-color:var(--cos-color-bg-primary-light);color:var(--cos-color-text-on-primary-light);padding:var(--cos-space-none) var(--cos-space-3xs)}.baike-row_3Few8 .desc-row_20LbK .desc-text_7mous{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin:-4.5px var(--cos-space-none)}.baike-row_3Few8 .desc-row_20LbK .desc-text_7mous em{-webkit-text-decoration-line:none;text-decoration-line:none}", ""]);
// Exports
exports.locals = {
	"link-no-underline": "link-no-underline_p9tE9",
	"linkNoUnderline": "link-no-underline_p9tE9",
	"ds-row": "ds-row_27HPH",
	"dsRow": "ds-row_27HPH",
	"ds-col": "ds-col_6xNs9",
	"dsCol": "ds-col_6xNs9",
	"ds-art": "ds-art_426uH",
	"dsArt": "ds-art_426uH",
	"ds-text": "ds-text_7ydcP",
	"dsText": "ds-text_7ydcP",
	"text-high": "text-high_yTmZf",
	"textHigh": "text-high_yTmZf",
	"baike-row": "baike-row_3Few8",
	"baikeRow": "baike-row_3Few8",
	"baike-col-left": "baike-col-left_5eFDy",
	"baikeColLeft": "baike-col-left_5eFDy",
	"desc-row": "desc-row_20LbK",
	"descRow": "desc-row_20LbK",
	"desc-tag": "desc-tag_7iWG3",
	"descTag": "desc-tag_7iWG3",
	"desc-text": "desc-text_7mous",
	"descText": "desc-text_7mous"
};
module.exports = exports;


/***/ }),
/* 165 */
/***/ (function(module, exports) {

// Module
var code = [1,"div",6,2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",null,3,"\n        \n        ",1,"div",6,2,"rl-type",3,"stop",2,"class",7,null,16,2,17,3,"cos-link",17,6,2,3,"$style",3,"ds-row",1,8,6,1,3,"_class",null,38,10,76,6,2,3,"dsInfo",3,"content",6,3,3,"dsInfo",3,"content",3,"length",null,3,"\n            ",1,"div",10,2,"data-ushow",7,null,6,2,3,"dsInfo",3,"moduleName",1,8,6,1,3,"json",null,2,"data-uclk",7,null,6,2,3,"dsInfo",3,"moduleName",1,8,6,1,3,"json",null,33,"ubc-show",3,"",33,"ubc-clk",3,"",2,"class",7,null,16,2,17,6,2,3,"$style",3,"link-no-underline",17,6,2,3,"$style",3,"ds-col",1,8,6,1,3,"_class",null,45,12,10,76,6,2,3,"dsInfo",3,"urlParams",6,3,3,"dsInfo",3,"urlParams",3,"href",3,"a",3,"div",42,6,2,3,"dsInfo",3,"urlParams",null,3,"\n                ",1,"p",4,2,"class",7,null,6,2,3,"$style",3,"ds-art",1,8,6,1,3,"_class",null,null,3,"\n                    ",1,"span",4,2,"class",7,null,6,2,3,"$style",3,"ds-text",1,8,6,1,3,"_class",null,null,3,"\n                        ",1,"span",3,2,"class",7,null,12,10,76,6,2,3,"baseCnf",3,"isFirst",10,183,6,2,3,"item",3,"type",3,"high",6,2,3,"$style",3,"text-high",3,"",1,8,6,1,3,"_class",null,37,"item",null,null,6,2,3,"dsInfo",3,"content",null,9,null,3,3,"\n                            ",7,null,6,2,3,"item",3,"text",null,3,"\n                        ",null,3,"\n                    ",null,3,"\n                ",null,3,"\n            ",null,3,"\n        ",1,1,"div",5,2,"rl-type",3,"stop",40,null,3,"\n            ",1,"div",12,2,"data-ushow",7,null,13,1,14,3,"module",3,"brand_content",1,8,6,1,3,"json",null,2,"data-uclk",7,null,13,1,14,3,"module",3,"brand_content",1,8,6,1,3,"json",null,33,"ubc-show",3,"",33,"ubc-clk",3,"",2,"class",7,null,16,2,17,6,2,3,"$style",3,"link-no-underline",17,6,2,3,"$style",3,"baike-row",1,8,6,1,3,"_class",null,45,12,10,76,6,2,3,"baikeInfo",3,"urlParams",6,3,3,"baikeInfo",3,"urlParams",3,"href",3,"a",3,"div",42,6,2,3,"baikeInfo",3,"urlParams",null,3,"\n                ",1,"div",9,2,"data-ushow",7,null,13,1,14,3,"module",3,"brand_logo",1,8,6,1,3,"json",null,2,"data-uclk",7,null,13,1,14,3,"module",3,"brand_logo",1,8,6,1,3,"json",null,33,"ubc-show",3,"",33,"ubc-clk",3,"",2,"class",7,null,6,2,3,"$style",3,"baike-col-left",1,8,6,1,3,"_class",null,38,6,2,3,"baikeInfo",3,"brandLogo",null,3,"\n                    ",1,"cos-image",2,2,"src",6,2,3,"baikeInfo",3,"brandLogo",2,"class",7,null,16,3,17,3,"cos-image-1-1",17,3,"cos-image-fit-cover",17,6,2,3,"$style",3,"baike-image",1,8,6,1,3,"_class",null,null,3,"\n                ",null,null,3,"\n                ",1,"div",9,2,"data-ushow",7,null,6,2,3,"baikeInfo",3,"moduleName",1,8,6,1,3,"json",null,2,"data-uclk",7,null,6,2,3,"baikeInfo",3,"moduleName",1,8,6,1,3,"json",null,33,"ubc-show",3,"",33,"ubc-clk",3,"",2,"class",7,null,16,2,17,3,"cos-link",17,6,2,3,"$style",3,"desc-row",1,8,6,1,3,"_class",null,38,6,2,3,"baikeInfo",3,"description",null,3,"\n                    ",1,"div",4,2,"class",7,null,6,2,3,"$style",3,"desc-text",1,8,6,1,3,"_class",null,null,3,"\n                        ",1,"span",6,2,"class",3,"cos-line-clamp-2",null,3,"\n                            ",1,"cos-tag",4,2,"appearance",3,"filled",2,"class",7,null,6,2,3,"$style",3,"desc-tag",1,8,6,1,3,"_class",null,38,6,2,3,"baikeInfo",3,"tagText",null,9,null,3,3,"\n                                ",7,null,6,2,3,"baikeInfo",3,"tagText",null,3,"\n                            ",null,null,3,"\n                            ",1,"span",1,null,9,1,3,3,"\n                                \n                                ",7,1,6,2,3,"baikeInfo",3,"description",null,3,"\n                            ",null,3,"\n                        ",null,3,"\n                    ",null,3,"\n                ",null,null,3,"\n            ",null,3,"\n        ",null,3,"\n    "];
// Exports
module.exports = code;

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(167);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(2)["default"]
var update = add("79ef0716", content, true, {"manualInject":true});

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".car-tabs_2Ik3K{margin-top:var(--module-gap)}.car-tabs_2Ik3K.car-tabs-no-tabs_29uwR{margin-top:var(--cos-space-3xs)}.car-tabs_2Ik3K .card-more_3gcdC{margin:11.5px var(--cos-space-none) -4.5px}.car-tabs_2Ik3K .card-more_3gcdC.card-more-first-after_4L0yc{margin-top:5.5px}.car-tabs_2Ik3K .card-more_3gcdC .cos-more-link-icon{font-size:var(--cos-text-subtitle)}.cos-pc .car-tabs_2Ik3K .card-more_3gcdC .more-link-first_F4Xs1{margin-bottom:-30px}.cos-pc .car-tabs_2Ik3K .card-more_3gcdC .more-link-first_F4Xs1 .cos-more-link-container{position:relative;z-index:1;background-color:var(--cos-gray--5)}.cos-pc .car-tabs_2Ik3K .card-more_3gcdC .more-link-first_F4Xs1 .cos-more-link-container:hover{background-color:var(--cos-gray--4)}.cos-pc .car-tabs_2Ik3K .card-more_3gcdC .more-link-first-after_6V899 .cos-more-link-container{padding:var(--cos-space-none);border:0}.cos-pc .car-tabs_2Ik3K .card-more_3gcdC .more-link-first-after_6V899 .cos-more-link-container:hover{background:0 0}", ""]);
// Exports
exports.locals = {
	"car-tabs": "car-tabs_2Ik3K",
	"carTabs": "car-tabs_2Ik3K",
	"car-tabs-no-tabs": "car-tabs-no-tabs_29uwR",
	"carTabsNoTabs": "car-tabs-no-tabs_29uwR",
	"card-more": "card-more_3gcdC",
	"cardMore": "card-more_3gcdC",
	"card-more-first-after": "card-more-first-after_4L0yc",
	"cardMoreFirstAfter": "card-more-first-after_4L0yc",
	"more-link-first": "more-link-first_F4Xs1",
	"moreLinkFirst": "more-link-first_F4Xs1",
	"more-link-first-after": "more-link-first-after_6V899",
	"moreLinkFirstAfter": "more-link-first-after_6V899"
};
module.exports = exports;


/***/ }),
/* 168 */
/***/ (function(module, exports) {

// Module
var code = [1,"div",6,2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",null,3,"\n        ",1,"car-tabs-cosmic",8,2,"is-first",6,2,3,"baseCnf",3,"isFirst",2,"tpl-info",6,1,3,"tplInfo",2,"active-index",6,1,3,"tabActiveIndex",2,"tab-array",6,1,3,"tabList",2,"class",7,null,16,2,17,6,2,3,"$style",3,"car-tabs",17,12,10,62,6,2,3,"tabList",3,"length",4,1,3,"",6,2,3,"$style",3,"car-tabs-no-tabs",1,8,6,1,3,"_class",null,null,3,"\n            ",1,"object",7,2,"slot",3,"tab-item",38,10,76,6,2,3,"tabItem",3,"list",6,3,3,"tabItem",3,"list",3,"length",null,3,"\n                \n                ",1,"series-info",5,2,"img-public-data",6,1,3,"imgPublicData",2,"base-cnf",6,1,3,"baseCnf",2,"tab-item",6,1,3,"tabItem",2,"tab-index",6,1,3,"tabIndex",38,11,33,6,2,3,"baseCnf",3,"isPc",1,1,"series-info-pc",5,2,"img-public-data",6,1,3,"imgPublicData",2,"base-cnf",6,1,3,"baseCnf",2,"tab-item",6,1,3,"tabItem",2,"tab-index",6,1,3,"tabIndex",40,null,3,"\n                \n                ",1,"div",10,2,"rl-type",3,"stop",2,"data-ushow",7,null,13,2,14,3,"module",10,43,3,"more_",6,1,3,"tabIndex",14,3,"modules",3,"more",1,8,6,1,3,"json",null,2,"data-uclk",7,null,13,2,14,3,"module",10,43,3,"more_",6,1,3,"tabIndex",14,3,"modules",3,"more",1,8,6,1,3,"json",null,33,"ubc-show",3,"",33,"ubc-clk",3,"",2,"class",7,null,16,2,17,6,2,3,"$style",3,"card-more",17,12,6,2,3,"baseCnf",3,"isFirst",3,"",6,2,3,"$style",3,"card-more-first-after",1,8,6,1,3,"_class",null,38,6,2,3,"tabItem",3,"isShowViewMore",null,3,"\n                    ",1,"cos-more-link",2,2,"link-info",6,2,3,"commonInfo",3,"cardParams",2,"class",7,null,16,1,17,12,6,2,3,"baseCnf",3,"isFirst",6,2,3,"$style",3,"more-link-first",6,2,3,"$style",3,"more-link-first-after",1,8,6,1,3,"_class",null,null,3,"\n                ",null,null,3,"\n            ",null,null,3,"\n        ",null,3,"\n    "];
// Exports
module.exports = code;

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(170);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(2)["default"]
var update = add("15e46bab", content, true, {"manualInject":true});

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".tabs-cosmic_4gUgr.tabs-cosmic-first_78Oxy .cos-tab-active{color:var(--cos-cyan-0)}@media (prefers-color-scheme:dark){.cos-wise .tabs-cosmic_4gUgr.tabs-cosmic-first_78Oxy .cos-tab-active{color:rgba(0,214,214,.7)}}.tabs-cosmic_4gUgr.tabs-hide_4aWsY .cos-tabs-header-container{display:none}.tabs-cosmic_4gUgr .cos-tab-pane{width:100%}", ""]);
// Exports
exports.locals = {
	"tabs-cosmic": "tabs-cosmic_4gUgr",
	"tabsCosmic": "tabs-cosmic_4gUgr",
	"tabs-cosmic-first": "tabs-cosmic-first_78Oxy",
	"tabsCosmicFirst": "tabs-cosmic-first_78Oxy",
	"tabs-hide": "tabs-hide_4aWsY",
	"tabsHide": "tabs-hide_4aWsY"
};
module.exports = exports;


/***/ }),
/* 171 */
/***/ (function(module, exports) {

// Module
var code = [1,"div",9,2,"rl-type",3,"stop",2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",38,10,76,6,1,3,"tabArray",6,2,3,"tabArray",3,"length",41,3,"tabContent",null,3,"\n        \n        ",1,"cos-tabs",8,2,"class",7,null,16,3,17,6,2,3,"$style",3,"tabs-cosmic",17,12,6,1,3,"isFirst",6,2,3,"$style",3,"tabs-cosmic-first",3,"",17,12,10,248,10,62,6,2,3,"tabArray",3,"length",4,1,6,1,3,"isTabNavShow",3,"",6,2,3,"$style",3,"tabs-hide",1,8,6,1,3,"_class",null,2,"active-index",6,1,3,"activeIndexReal",35,"change",8,6,1,3,"handleChange",1,6,1,3,"$event",null,null,3,"\n            ",1,"cos-tab",3,2,"slot",3,"tab",37,"tabItem",null,null,6,1,3,"tabArray",null,9,null,3,3,"\n                ",7,null,6,2,3,"tabItem",3,"text",null,3,"\n            ",null,3,"\n            ",1,"cos-tab-pane",4,37,"tabItem","tabIndex",null,6,1,3,"tabArray",null,3,"\n                \n                ",1,"slot",2,2,"name",3,"tab-item",42,13,2,14,3,"tabItem",6,1,3,"tabItem",14,3,"tabIndex",6,1,3,"tabIndex",null,3,"\n            ",null,3,"\n        ",null,3,"\n    ",null];
// Exports
module.exports = code;

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(173);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(2)["default"]
var update = add("5295ed09", content, true, {"manualInject":true});

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".link-no-underline_5MBls:hover{-webkit-text-decoration-line:none;text-decoration-line:none}.series-item_vy4rm{display:-webkit-box;display:-webkit-flex;display:flex;margin-top:var(--cos-space-md)}.series-item_vy4rm.cos-gutter_6YEy2{margin-right:-8px;margin-right:calc(-.5*var(--cos-grid-gutter));margin-left:-8px;margin-left:calc(-.5*var(--cos-grid-gutter))}.series-item_vy4rm .series-image_2VHtG{-webkit-box-flex:0;-webkit-flex:0 0 auto;flex:0 0 auto}.series-item_vy4rm .series-image_2VHtG .cos-image{background-color:var(--cos-color-bg-dent)}.series-item_vy4rm .series-image_2VHtG .white-img_1hRRY img{left:0;right:0;margin:var(--cos-space-none) auto;width:calc(100% - 12px)}.series-item_vy4rm .series-image_2VHtG .energy-flag_571mh{position:absolute;right:5px;bottom:5px;width:28px;height:14px;text-shadow:0 2px 4px rgba(0,0,0,.3)}.series-item_vy4rm .series-info_4orQP{-webkit-box-flex:1;-webkit-flex:1 1 auto;flex:1 1 auto;margin-left:var(--cos-space-sm);overflow:hidden}.series-item_vy4rm .series-info_4orQP .series-col-text_6il3e{overflow:hidden}.series-item_vy4rm .series-info_4orQP .series-col-text_6il3e .series-title-text_1m0dE{display:block;-webkit-box-orient:inline-axis;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--cos-color-text);margin-top:-3px}.series-item_vy4rm .series-info_4orQP .series-col-text_6il3e .series-title-text_1m0dE>span:first-of-type{font-weight:var(--cos-font-medium);-webkit-text-stroke:var(--cos-font-medium-stroke);font-family:PingFang SC,Arial,sans-serif;font-size:var(--cos-text-body-lg)}.series-item_vy4rm .series-info_4orQP .series-col-text_6il3e .series-title-text_1m0dE>span:nth-child(2){margin-left:var(--cos-space-xs);color:var(--cos-color-text-minor)}.series-item_vy4rm .series-info_4orQP .series—sales_7Ho8v{display:block;-webkit-box-orient:inline-axis;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--cos-color-text-minor)}.series-item_vy4rm .series-info_4orQP .series—sales_7Ho8v .sales-li_tmIaJ .sales-divider_5pOSZ{height:12px;margin:var(--cos-space-none) var(--cos-space-xxs)}.series-item_vy4rm .series-info_4orQP .series-base-info_7kwep{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.series-item_vy4rm .series-info_4orQP .series-base-info_7kwep .series-base-left_19fYq{overflow:hidden}.series-item_vy4rm .series-info_4orQP .series-base-info_7kwep .series-base-left_19fYq .series-price-all_2quLy{font-weight:var(--cos-font-medium);-webkit-text-stroke:var(--cos-font-medium-stroke);font-family:PingFang SC,Arial,sans-serif;display:block;-webkit-box-orient:inline-axis;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-family:BaiduNumberPlus}.series-item_vy4rm .series-info_4orQP .series-base-info_7kwep .series-base-left_19fYq .series-price-all_2quLy .series-price_2gkrM{color:var(--cos-color-text-alive);font-size:var(--cos-text-subtitle)}.series-item_vy4rm .series-info_4orQP .series-base-info_7kwep .series-base-left_19fYq .series-price-all_2quLy .series-price_2gkrM.series-price-small_4pqny{font-size:var(--cos-text-caption)}.series-item_vy4rm .series-info_4orQP .series-base-info_7kwep .ask-price-btn-wrapper_184IT{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:end;-webkit-align-items:end;align-items:end;-webkit-box-flex:0;-webkit-flex:0 0 auto;flex:0 0 auto}.series-item_vy4rm .series-info_4orQP .series-base-info_7kwep .ask-price-btn-wrapper_184IT .ask-price-btn_2XdbN{padding:var(--cos-space-none) 7.5px;height:30px;background:rgba(0,200,201,.1);color:#00c4c5}.series-item_vy4rm .series-info_4orQP .series-base-info_7kwep .ask-price-btn-wrapper_184IT .ask-price-btn_2XdbN.ask-price-btn-first-after_3P92N{background-color:var(--cos-color-bg-primary-light);color:var(--cos-color-text-on-primary-light)}.series-item_vy4rm .series-info_4orQP .car-tag-group_3FNaU{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;overflow:hidden;height:calc(var(--font-size-scale, 1)*20.5px)}.series-item_vy4rm .series-info_4orQP .car-tag-group_3FNaU .car-tag_71XAm{margin-right:var(--cos-space-xxs);background-color:var(--cos-tag-color-bg);color:var(--cos-color-text-tiny-active);margin:4.5px var(--cos-space-none) var(--cos-space-none) var(--cos-space-xxs);max-width:100%}.series-item_vy4rm .series-info_4orQP .car-tag-group_3FNaU .car-tag_71XAm:first-of-type{margin-left:var(--cos-space-none)}.series-item_vy4rm .series-info_4orQP .series-desc_2AFNp{color:var(--cos-color-text-tiny);font-weight:var(--cos-font-regular);-webkit-text-stroke:0;font-family:PingFang SC,Arial,sans-serif;font-size:var(--cos-text-body);line-height:var(--cos-leading-body)}.series-item_vy4rm .series-info_4orQP .series-desc_2AFNp.series-desc-five-after_7mlF4{color:var(--cos-color-text-minor)}.series-item_vy4rm .series-info_4orQP .series-desc_2AFNp>p{margin-bottom:-3px;line-height:var(--cos-leading-caption-sm)}", ""]);
// Exports
exports.locals = {
	"link-no-underline": "link-no-underline_5MBls",
	"linkNoUnderline": "link-no-underline_5MBls",
	"series-item": "series-item_vy4rm",
	"seriesItem": "series-item_vy4rm",
	"cos-gutter": "cos-gutter_6YEy2",
	"cosGutter": "cos-gutter_6YEy2",
	"series-image": "series-image_2VHtG",
	"seriesImage": "series-image_2VHtG",
	"white-img": "white-img_1hRRY",
	"whiteImg": "white-img_1hRRY",
	"energy-flag": "energy-flag_571mh",
	"energyFlag": "energy-flag_571mh",
	"series-info": "series-info_4orQP",
	"seriesInfo": "series-info_4orQP",
	"series-col-text": "series-col-text_6il3e",
	"seriesColText": "series-col-text_6il3e",
	"series-title-text": "series-title-text_1m0dE",
	"seriesTitleText": "series-title-text_1m0dE",
	"series—sales": "series—sales_7Ho8v",
	"sales-li": "sales-li_tmIaJ",
	"salesLi": "sales-li_tmIaJ",
	"sales-divider": "sales-divider_5pOSZ",
	"salesDivider": "sales-divider_5pOSZ",
	"series-base-info": "series-base-info_7kwep",
	"seriesBaseInfo": "series-base-info_7kwep",
	"series-base-left": "series-base-left_19fYq",
	"seriesBaseLeft": "series-base-left_19fYq",
	"series-price-all": "series-price-all_2quLy",
	"seriesPriceAll": "series-price-all_2quLy",
	"series-price": "series-price_2gkrM",
	"seriesPrice": "series-price_2gkrM",
	"series-price-small": "series-price-small_4pqny",
	"seriesPriceSmall": "series-price-small_4pqny",
	"ask-price-btn-wrapper": "ask-price-btn-wrapper_184IT",
	"askPriceBtnWrapper": "ask-price-btn-wrapper_184IT",
	"ask-price-btn": "ask-price-btn_2XdbN",
	"askPriceBtn": "ask-price-btn_2XdbN",
	"ask-price-btn-first-after": "ask-price-btn-first-after_3P92N",
	"askPriceBtnFirstAfter": "ask-price-btn-first-after_3P92N",
	"car-tag-group": "car-tag-group_3FNaU",
	"carTagGroup": "car-tag-group_3FNaU",
	"car-tag": "car-tag_71XAm",
	"carTag": "car-tag_71XAm",
	"series-desc": "series-desc_2AFNp",
	"seriesDesc": "series-desc_2AFNp",
	"series-desc-five-after": "series-desc-five-after_7mlF4",
	"seriesDescFiveAfter": "series-desc-five-after_7mlF4"
};
module.exports = exports;


/***/ }),
/* 174 */
/***/ (function(module, exports) {

// Module
var code = [1,"div",6,2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",null,3,"\n        \n        ",1,"div",14,2,"data-ushow",6,2,3,"seriesItem",3,"seriesUbc",2,"data-uclk",6,2,3,"seriesItem",3,"seriesUbc",33,"ubc-show",3,"",33,"ubc-clk",3,"",2,"style",3,"--cos-grid-gutter: 12px;",2,"class",7,null,16,2,17,3,"cos-gutter",17,6,2,3,"$style",3,"series-item",1,8,6,1,3,"_class",null,45,12,6,3,3,"seriesItem",3,"urlParams",3,"href",3,"a",3,"div",37,"seriesItem","seriesIndex",null,6,2,3,"tabItem",3,"list",42,6,2,3,"seriesItem",3,"urlParams",null,3,"\n            ",1,"div",6,2,"data-uclk",7,null,13,1,14,3,"module",10,43,10,43,10,43,3,"series_image_",6,1,3,"tabIndex",3,"_",6,1,3,"seriesIndex",1,8,6,1,3,"json",null,33,"ubc-clk",3,"",2,"class",7,null,16,2,17,3,"cos-col-4",17,6,2,3,"$style",3,"series-image",1,8,6,1,3,"_class",null,null,3,"\n                ",1,"cos-image",5,2,"src",6,2,3,"seriesItem",3,"imgSrc",2,"class",7,null,16,3,17,3,"cos-image-4-3",17,3,"cos-image-fit-contain",17,6,2,3,"$style",3,"white-img",1,8,6,1,3,"_class",null,null,3,"\n                    ",1,"div",4,2,"style",7,null,13,2,14,3,"background-image",10,43,10,43,3,"url(",6,2,3,"imgPublicData",3,"newEnergyIcon",3,");",14,3,"background-size",3,"100% 100%;",1,8,6,1,3,"_style",null,2,"class",7,null,6,2,3,"$style",3,"energy-flag",1,8,6,1,3,"_class",null,38,10,183,11,43,6,2,3,"seriesItem",3,"isNewEnergy",4,1,null,3,"\n                    ",null,null,3,"\n                ",null,3,"\n            ",null,3,"\n            ",1,"div",8,2,"class",7,null,16,2,17,3,"cos-col-8",17,6,2,3,"$style",3,"series-info",1,8,6,1,3,"_class",null,null,3,"\n                ",1,"div",4,2,"class",7,null,6,2,3,"$style",3,"series-col-text",1,8,6,1,3,"_class",null,null,3,"\n                    ",1,"p",5,2,"class",7,null,6,2,3,"$style",3,"series-title-text",1,8,6,1,3,"_class",null,null,3,"\n                        ",1,"span",1,null,6,2,3,"seriesItem",3,"name",1,"span",1,null,6,2,3,"seriesItem",3,"second_level",null,3,"\n                    ",null,3,"\n                ",null,3,"\n                ",1,"div",5,2,"class",7,null,6,2,3,"$style",3,"series—sales",1,8,6,1,3,"_class",null,38,10,76,6,2,3,"seriesItem",3,"statistics",6,3,3,"seriesItem",3,"statistics",3,"length",null,3,"\n                    ",1,"span",6,2,"class",7,null,6,2,3,"$style",3,"sales-li",1,8,6,1,3,"_class",null,37,"tagItem","tagIndex",null,6,2,3,"seriesItem",3,"statistics",null,3,"\n                        ",1,"span",1,null,6,1,3,"tagItem",1,"span",3,2,"class",7,null,16,2,17,3,"cos-divider-vertical-inverse",17,6,2,3,"$style",3,"sales-divider",1,8,6,1,3,"_class",null,38,10,155,6,1,3,"tagIndex",10,45,6,3,3,"seriesItem",3,"statistics",3,"length",4,1,null,3,"\n                        ",null,null,3,"\n                    ",null,3,"\n                ",null,null,3,"\n                ",1,"div",6,2,"class",7,null,6,2,3,"$style",3,"series-base-info",1,8,6,1,3,"_class",null,null,3,"\n                    ",1,"div",6,2,"class",7,null,6,2,3,"$style",3,"series-base-left",1,8,6,1,3,"_class",null,null,3,"\n                        ",1,"div",4,2,"class",7,null,6,2,3,"$style",3,"series-price-all",1,8,6,1,3,"_class",null,null,3,"\n                            ",1,"span",3,2,"class",7,null,16,2,17,6,2,3,"$style",3,"series-price",17,12,10,183,6,2,3,"priceItem",3,"type",3,"small",6,2,3,"$style",3,"series-price-small",3,"",1,8,6,1,3,"_class",null,37,"priceItem",null,null,6,2,3,"seriesItem",3,"priceArr",null,6,2,3,"priceItem",3,"text",null,3,"\n                        ",null,3,"\n                        ",1,"div",5,2,"class",7,null,6,2,3,"$style",3,"car-tag-group",1,8,6,1,3,"_class",null,38,10,76,6,2,3,"seriesItem",3,"advantageTags",6,3,3,"seriesItem",3,"advantageTags",3,"length",null,3,"\n                            ",1,"cos-tag",6,2,"appearance",3,"filled",2,"class",7,null,6,2,3,"$style",3,"car-tag",1,8,6,1,3,"_class",null,37,"tagItem",null,null,6,2,3,"seriesItem",3,"advantageTags",null,3,"\n                                ",1,"span",2,2,"class",3,"cos-line-clamp-1",null,6,2,3,"tagItem",3,"text",null,3,"\n                            ",null,3,"\n                        ",null,null,3,"\n                    ",null,3,"\n                    ",1,"object",5,2,"class",7,null,6,2,3,"$style",3,"ask-price-btn-wrapper",1,8,6,1,3,"_class",null,38,6,2,3,"seriesItem",3,"inquiryURLParams",null,3,"\n                        ",1,"div",10,2,"data-ushow",6,2,3,"seriesItem",3,"askPriceUbc",2,"data-uclk",6,2,3,"seriesItem",3,"askPriceUbc",33,"ubc-show",3,"",33,"ubc-clk",3,"",2,"class",7,null,16,2,17,3,"cos-block",17,3,"cos-color-text",1,8,6,1,3,"_class",null,45,12,6,3,3,"seriesItem",3,"inquiryURLParams",3,"href",3,"a",3,"div",42,6,2,3,"seriesItem",3,"inquiryURLParams",null,3,"\n                            ",1,"cos-button",2,2,"class",7,null,16,2,17,6,2,3,"$style",3,"ask-price-btn",17,12,11,33,6,2,3,"baseCnf",3,"isFirst",6,2,3,"$style",3,"ask-price-btn-first-after",3,"",1,8,6,1,3,"_class",null,null,3,"看报价",null,3,"\n                        ",null,3,"\n                    ",null,null,3,"\n                ",null,3,"\n            ",null,3,"\n        ",null,3,"\n    "];
// Exports
module.exports = code;

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(176);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(2)["default"]
var update = add("67a4f850", content, true, {"manualInject":true});

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".link-no-underline_4EJcy:hover{-webkit-text-decoration-line:none;text-decoration-line:none}.series-item_353jk{-webkit-flex-wrap:wrap;flex-wrap:wrap;margin-top:var(--module-gap)}.series-item_353jk .series-col_40ssu:nth-child(n+5){margin-top:var(--module-gap)}.series-item_353jk .series-image_7eVfX{-webkit-box-flex:0;-webkit-flex:0 0 auto;flex:0 0 auto}.series-item_353jk .series-image_7eVfX .cos-image{background-color:var(--cos-color-bg-dent)}.series-item_353jk .series-image_7eVfX .white-img_51Gec .cos-image-background{-webkit-background-size:calc(100% - 10px) auto;background-size:calc(100% - 10px) auto}.series-item_353jk .series-image_7eVfX .white-img_51Gec img{left:0;right:0;margin:var(--cos-space-none) auto;width:calc(100% - 12px)}.series-item_353jk .series-image_7eVfX .energy-flag_4Pbq2{position:absolute;right:5px;bottom:5px;width:28px;height:14px;text-shadow:0 2px 4px rgba(0,0,0,.3)}.series-item_353jk .series-info_25ebD{-webkit-box-flex:1;-webkit-flex:1 1 auto;flex:1 1 auto;margin-top:var(--cos-space-xs);overflow:hidden}.series-item_353jk .series-info_25ebD .series-col-text_6ibUj{overflow:hidden}.series-item_353jk .series-info_25ebD .series-col-text_6ibUj .series-title-text_7jvRc{display:block;-webkit-box-orient:inline-axis;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-top:-2px}.series-item_353jk .series-info_25ebD .series-col-text_6ibUj .series-title-text_7jvRc>span:first-of-type{font-weight:var(--cos-font-medium);-webkit-text-stroke:var(--cos-font-medium-stroke);font-family:PingFang SC,Arial,sans-serif;font-size:var(--cos-text-body-lg)}.series-item_353jk .series-info_25ebD .series-col-text_6ibUj .series-title-text_7jvRc>span:nth-child(2){margin-left:var(--cos-space-xs);color:var(--cos-color-text-minor)}.series-item_353jk .series-info_25ebD .series—sales_3jotA{display:block;-webkit-box-orient:inline-axis;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--cos-color-text-minor);font-family:BaiduNumberPlus;font-size:var(--cos-text-caption)}.series-item_353jk .series-info_25ebD .series—sales_3jotA .sales-li_1radW .sales-divider_5A9FM{height:12px;margin:var(--cos-space-none) var(--cos-space-xxs)}.series-item_353jk .series-info_25ebD .series-base-info_7iNeX{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.series-item_353jk .series-info_25ebD .series-base-info_7iNeX .series-base-left_2TNMy{overflow:hidden}.series-item_353jk .series-info_25ebD .series-base-info_7iNeX .series-base-left_2TNMy .series-price-all_5VxWb{font-weight:var(--cos-font-medium);-webkit-text-stroke:var(--cos-font-medium-stroke);font-family:PingFang SC,Arial,sans-serif;display:block;-webkit-box-orient:inline-axis;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-family:BaiduNumberPlus}.series-item_353jk .series-info_25ebD .series-base-info_7iNeX .series-base-left_2TNMy .series-price-all_5VxWb .series-price_xgqOS{color:var(--cos-color-text-alive);font-size:var(--cos-text-subtitle)}.series-item_353jk .series-info_25ebD .series-base-info_7iNeX .series-base-left_2TNMy .series-price-all_5VxWb .series-price_xgqOS.series-price-small_2A5oo{font-size:var(--cos-text-caption)}.series-item_353jk .series-info_25ebD .series-base-info_7iNeX .ask-price-btn-wrapper_32C2A{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:end;-webkit-align-items:end;align-items:end;-webkit-box-flex:0;-webkit-flex:0 0 auto;flex:0 0 auto}.series-item_353jk .series-info_25ebD .series-base-info_7iNeX .ask-price-btn-wrapper_32C2A .ask-price-btn_4cBXD{padding:var(--cos-space-none) 7.5px;height:30px;background:rgba(0,200,201,.1);color:#00c4c5}.series-item_353jk .series-info_25ebD .series-base-info_7iNeX .ask-price-btn-wrapper_32C2A .ask-price-btn_4cBXD.ask-price-btn-first-after_5gGQE{background-color:var(--cos-color-bg-primary-light);color:var(--cos-color-text-on-primary-light)}.series-item_353jk .series-info_25ebD .car-tag-group_7fvfm{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;overflow:hidden;height:calc(var(--font-size-scale, 1)*20.5px)}.series-item_353jk .series-info_25ebD .car-tag-group_7fvfm .car-tag_7squD{margin-right:var(--cos-space-xxs);background-color:var(--cos-tag-color-bg);color:var(--cos-color-text-tiny-active);margin:4.5px var(--cos-space-none) var(--cos-space-none) var(--cos-space-xxs);max-width:100%}.series-item_353jk .series-info_25ebD .car-tag-group_7fvfm .car-tag_7squD:first-of-type{margin-left:var(--cos-space-none)}.series-item_353jk .series-info_25ebD .series-desc_58bxU{color:var(--cos-color-text-tiny);font-weight:var(--cos-font-regular);-webkit-text-stroke:0;font-family:PingFang SC,Arial,sans-serif;font-size:var(--cos-text-body);line-height:var(--cos-leading-body)}.series-item_353jk .series-info_25ebD .series-desc_58bxU.series-desc-five-after_7Hh0C{color:var(--cos-color-text-minor)}.series-item_353jk .series-info_25ebD .series-desc_58bxU>p{margin-bottom:-3px;line-height:var(--cos-leading-caption-sm)}", ""]);
// Exports
exports.locals = {
	"link-no-underline": "link-no-underline_4EJcy",
	"linkNoUnderline": "link-no-underline_4EJcy",
	"series-item": "series-item_353jk",
	"seriesItem": "series-item_353jk",
	"series-col": "series-col_40ssu",
	"seriesCol": "series-col_40ssu",
	"series-image": "series-image_7eVfX",
	"seriesImage": "series-image_7eVfX",
	"white-img": "white-img_51Gec",
	"whiteImg": "white-img_51Gec",
	"energy-flag": "energy-flag_4Pbq2",
	"energyFlag": "energy-flag_4Pbq2",
	"series-info": "series-info_25ebD",
	"seriesInfo": "series-info_25ebD",
	"series-col-text": "series-col-text_6ibUj",
	"seriesColText": "series-col-text_6ibUj",
	"series-title-text": "series-title-text_7jvRc",
	"seriesTitleText": "series-title-text_7jvRc",
	"series—sales": "series—sales_3jotA",
	"sales-li": "sales-li_1radW",
	"salesLi": "sales-li_1radW",
	"sales-divider": "sales-divider_5A9FM",
	"salesDivider": "sales-divider_5A9FM",
	"series-base-info": "series-base-info_7iNeX",
	"seriesBaseInfo": "series-base-info_7iNeX",
	"series-base-left": "series-base-left_2TNMy",
	"seriesBaseLeft": "series-base-left_2TNMy",
	"series-price-all": "series-price-all_5VxWb",
	"seriesPriceAll": "series-price-all_5VxWb",
	"series-price": "series-price_xgqOS",
	"seriesPrice": "series-price_xgqOS",
	"series-price-small": "series-price-small_2A5oo",
	"seriesPriceSmall": "series-price-small_2A5oo",
	"ask-price-btn-wrapper": "ask-price-btn-wrapper_32C2A",
	"askPriceBtnWrapper": "ask-price-btn-wrapper_32C2A",
	"ask-price-btn": "ask-price-btn_4cBXD",
	"askPriceBtn": "ask-price-btn_4cBXD",
	"ask-price-btn-first-after": "ask-price-btn-first-after_5gGQE",
	"askPriceBtnFirstAfter": "ask-price-btn-first-after_5gGQE",
	"car-tag-group": "car-tag-group_7fvfm",
	"carTagGroup": "car-tag-group_7fvfm",
	"car-tag": "car-tag_7squD",
	"carTag": "car-tag_7squD",
	"series-desc": "series-desc_58bxU",
	"seriesDesc": "series-desc_58bxU",
	"series-desc-five-after": "series-desc-five-after_7Hh0C",
	"seriesDescFiveAfter": "series-desc-five-after_7Hh0C"
};
module.exports = exports;


/***/ }),
/* 177 */
/***/ (function(module, exports) {

// Module
var code = [1,"div",6,2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",null,3,"\n        \n        ",1,"div",5,2,"style",3,"--cos-grid-gutter: 16px;",2,"class",7,null,16,3,17,3,"cos-gutter",17,3,"cos-row",17,6,2,3,"$style",3,"series-item",1,8,6,1,3,"_class",null,null,3,"\n        ",1,"div",13,2,"data-ushow",6,2,3,"seriesItem",3,"seriesUbc",2,"data-uclk",6,2,3,"seriesItem",3,"seriesUbc",33,"ubc-show",3,"",33,"ubc-clk",3,"",2,"class",7,null,16,3,17,3,"cos-col-3",17,6,2,3,"$style",3,"link-no-underline",17,6,2,3,"$style",3,"series-col",1,8,6,1,3,"_class",null,45,12,6,3,3,"seriesItem",3,"urlParams",3,"href",3,"a",3,"div",37,"seriesItem","seriesIndex",null,6,2,3,"tabItem",3,"list",42,6,2,3,"seriesItem",3,"urlParams",null,3,"\n            ",1,"div",6,2,"data-uclk",7,null,13,1,14,3,"module",10,43,10,43,10,43,3,"series_image_",6,1,3,"tabIndex",3,"_",6,1,3,"seriesIndex",1,8,6,1,3,"json",null,33,"ubc-clk",3,"",2,"class",7,null,16,1,17,6,2,3,"$style",3,"series-image",1,8,6,1,3,"_class",null,null,3,"\n                ",1,"cos-image",5,2,"src",6,2,3,"seriesItem",3,"imgSrc",2,"class",7,null,16,4,17,3,"cos-image-3-2",17,3,"cos-image-fit-contain",17,3,"cos-image-hover",17,6,2,3,"$style",3,"white-img",1,8,6,1,3,"_class",null,null,3,"\n                    ",1,"div",4,2,"style",7,null,13,2,14,3,"background-image",10,43,10,43,3,"url(",6,2,3,"imgPublicData",3,"newEnergyIcon",3,");",14,3,"background-size",3,"100% 100%;",1,8,6,1,3,"_style",null,2,"class",7,null,6,2,3,"$style",3,"energy-flag",1,8,6,1,3,"_class",null,38,10,183,11,43,6,2,3,"seriesItem",3,"isNewEnergy",4,1,null,3,"\n                    ",null,null,3,"\n                ",null,3,"\n            ",null,3,"\n            ",1,"div",8,2,"class",7,null,16,1,17,6,2,3,"$style",3,"series-info",1,8,6,1,3,"_class",null,null,3,"\n                ",1,"div",4,2,"class",7,null,6,2,3,"$style",3,"series-col-text",1,8,6,1,3,"_class",null,null,3,"\n                    ",1,"object",3,null,3,"\n                        ",1,"p",6,2,"class",7,null,6,2,3,"$style",3,"series-title-text",1,8,6,1,3,"_class",null,45,12,6,3,3,"seriesItem",3,"urlParams",3,"href",3,"a",3,"div",42,6,2,3,"seriesItem",3,"urlParams",null,3,"\n                            ",1,"span",1,null,6,2,3,"seriesItem",3,"name",null,3,"\n                        ",null,3,"\n                    ",null,3,"\n                ",null,3,"\n                ",1,"div",5,2,"class",7,null,6,2,3,"$style",3,"series—sales",1,8,6,1,3,"_class",null,38,10,76,6,2,3,"seriesItem",3,"statistics",6,3,3,"seriesItem",3,"statistics",3,"length",null,3,"\n                    ",1,"span",6,2,"class",7,null,6,2,3,"$style",3,"sales-li",1,8,6,1,3,"_class",null,37,"tagItem","tagIndex",null,6,2,3,"seriesItem",3,"statistics",null,3,"\n                        ",1,"span",1,null,6,1,3,"tagItem",1,"span",3,2,"class",7,null,16,2,17,3,"cos-divider-vertical-inverse",17,6,2,3,"$style",3,"sales-divider",1,8,6,1,3,"_class",null,38,10,155,6,1,3,"tagIndex",10,45,6,3,3,"seriesItem",3,"statistics",3,"length",4,1,null,3,"\n                        ",null,null,3,"\n                    ",null,3,"\n                ",null,null,3,"\n                ",1,"div",4,2,"class",7,null,6,2,3,"$style",3,"series-base-info",1,8,6,1,3,"_class",null,null,3,"\n                    ",1,"div",6,2,"class",7,null,6,2,3,"$style",3,"series-base-left",1,8,6,1,3,"_class",null,null,3,"\n                        ",1,"div",4,2,"class",7,null,6,2,3,"$style",3,"series-price-all",1,8,6,1,3,"_class",null,null,3,"\n                            ",1,"span",3,2,"class",7,null,16,2,17,6,2,3,"$style",3,"series-price",17,12,10,183,6,2,3,"priceItem",3,"type",3,"small",6,2,3,"$style",3,"series-price-small",3,"",1,8,6,1,3,"_class",null,37,"priceItem",null,null,6,2,3,"seriesItem",3,"priceArr",null,6,2,3,"priceItem",3,"text",null,3,"\n                        ",null,3,"\n                        ",1,"div",5,2,"class",7,null,6,2,3,"$style",3,"car-tag-group",1,8,6,1,3,"_class",null,38,10,76,6,2,3,"seriesItem",3,"advantageTags",6,3,3,"seriesItem",3,"advantageTags",3,"length",null,3,"\n                            ",1,"cos-tag",6,2,"appearance",3,"filled",2,"class",7,null,6,2,3,"$style",3,"car-tag",1,8,6,1,3,"_class",null,37,"tagItem",null,null,6,2,3,"seriesItem",3,"advantageTags",null,3,"\n                                ",1,"span",2,2,"class",3,"cos-line-clamp-1",null,6,2,3,"tagItem",3,"text",null,3,"\n                            ",null,3,"\n                        ",null,null,3,"\n                    ",null,3,"\n                    \n                ",null,3,"\n            ",null,3,"\n        ",null,3,"\n        ",null,3,"\n    "];
// Exports
module.exports = code;

/***/ })
/******/ ])});;