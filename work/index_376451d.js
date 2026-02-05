define("mirror-san/app/car_full_view_img_san/index_376451d", ["@baidu/ala-util/san-component","@baidu/www-api","cosmic/icon","cosmic/image","cosmic-card/title","cosmic/more-link","cosmic-card/card",searchComponentsIdMap["LinkNew_LinkNew"],"cosmic-card/card-loading",searchComponentsIdMap["Icon_Icon"],"@baidu/ala-util/lodash","cosmic/swiper","cosmic/swiper-item","san","@searchfe/inject-js",searchComponentsIdMap["Title_Title"],searchComponentsIdMap["Paragraph_Paragraph"],"cosmic-card/feedback",searchComponentsIdMap["Grid_Row"],searchComponentsIdMap["Grid_Col"],"cosmic/tabs","cosmic/tab","cosmic/tab-pane",searchComponentsIdMap["Loading_Loading"]], function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__5__, __WEBPACK_EXTERNAL_MODULE__6__, __WEBPACK_EXTERNAL_MODULE__7__, __WEBPACK_EXTERNAL_MODULE__9__, __WEBPACK_EXTERNAL_MODULE__11__, __WEBPACK_EXTERNAL_MODULE__13__, __WEBPACK_EXTERNAL_MODULE__17__, __WEBPACK_EXTERNAL_MODULE__18__, __WEBPACK_EXTERNAL_MODULE__20__, __WEBPACK_EXTERNAL_MODULE__21__, __WEBPACK_EXTERNAL_MODULE__22__, __WEBPACK_EXTERNAL_MODULE__23__, __WEBPACK_EXTERNAL_MODULE__48__, __WEBPACK_EXTERNAL_MODULE__53__, __WEBPACK_EXTERNAL_MODULE__54__, __WEBPACK_EXTERNAL_MODULE__55__, __WEBPACK_EXTERNAL_MODULE__59__, __WEBPACK_EXTERNAL_MODULE__60__, __WEBPACK_EXTERNAL_MODULE__61__, __WEBPACK_EXTERNAL_MODULE__62__, __WEBPACK_EXTERNAL_MODULE__63__, __WEBPACK_EXTERNAL_MODULE__65__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 		return __webpack_require__.p + "static/mirror-san/" + ({"1":"vendors~guarantee-popper-h5"}[chunkId]||chunkId) + "_" + {"1":"5176d68"}[chunkId] + ".js"
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
/******/ 	var jsonpArray = window["webpackjsonp_chunkname_1175298"] = window["webpackjsonp_chunkname_1175298"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 74);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
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
/* 3 */
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
/* 4 */
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

var defineComponent = __webpack_require__(23).defineComponent;

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


        var normalize = __webpack_require__(4);
        var style0 = __webpack_require__(85);
var injectStyles = [{exportAs: undefined, style: style0}];

        var template = __webpack_require__(87);
        
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
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(4);
        var style0 = __webpack_require__(121);
var injectStyles = [{exportAs: undefined, style: style0}];

        var template = __webpack_require__(123);
        
        var script = __webpack_require__(37).default;
        module.exports = __webpack_require__(37);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__11__;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(4);
        var style0 = __webpack_require__(79);
var injectStyles = [{exportAs: undefined, style: style0}];

        var template = __webpack_require__(81);
        
        var script = __webpack_require__(25).default;
        module.exports = __webpack_require__(25);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__13__;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(4);
        var style0 = __webpack_require__(103);
var injectStyles = [{exportAs: undefined, style: style0}];

        var template = __webpack_require__(105);
        
        var script = __webpack_require__(31).default;
        module.exports = __webpack_require__(31);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(4);
        var style0 = __webpack_require__(112);
var injectStyles = [{exportAs: undefined, style: style0}];

        var template = __webpack_require__(114);
        
        var script = __webpack_require__(34).default;
        module.exports = __webpack_require__(34);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(4);
        var style0 = __webpack_require__(115);
var injectStyles = [{exportAs: undefined, style: style0}];

        var template = __webpack_require__(117);
        
        var script = __webpack_require__(35).default;
        module.exports = __webpack_require__(35);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__17__;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__18__;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(4);
        var style0 = __webpack_require__(127);
var injectStyles = [{exportAs: undefined, style: style0}];

        var template = __webpack_require__(129);
        
        var script = __webpack_require__(39).default;
        module.exports = __webpack_require__(39);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__20__;

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
/* harmony import */ var san__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var san__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(san__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baidu_www_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _baidu_www_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_baidu_www_api__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _searchfe_inject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48);
/* harmony import */ var _searchfe_inject_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_searchfe_inject_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _baidu_cosmic_card_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var _baidu_cosmic_card_card__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_baidu_cosmic_card_card__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _baidu_cosmic_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _baidu_cosmic_icon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_baidu_cosmic_icon__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_component_car_component_car_header_cosmic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12);
/* harmony import */ var _app_component_car_component_car_header_cosmic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_app_component_car_component_car_header_cosmic__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_component_car_component_car_new_kg_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52);
/* harmony import */ var _app_component_car_component_car_new_kg_header__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_app_component_car_component_car_new_kg_header__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_component_car_component_car_source_cosmic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14);
/* harmony import */ var _app_component_car_component_car_source_cosmic__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_app_component_car_component_car_source_cosmic__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_vrimg_two__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15);
/* harmony import */ var _components_vrimg_two__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_components_vrimg_two__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_image_tab__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(58);
/* harmony import */ var _components_image_tab__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_components_image_tab__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_image_vr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(19);
/* harmony import */ var _components_image_vr__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_components_image_vr__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _default_card_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(66);
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var EntryComponent = /** @class */ (function (_super) {
    __extends(EntryComponent, _super);
    function EntryComponent(sanOption, alaLog, ubcLog) {
        var _this = _super.call(this, sanOption) || this;
        _this.alaLog = alaLog;
        _this.ubcLog = ubcLog;
        return _this;
    }
    EntryComponent.prototype.initData = function () {
        return {
            isPc: false,
            isFirst: false,
            isFirstAdv: false,
            isBaozhang: false,
            fieldsData: {},
            tplInfo: {},
            baseInfo: {},
            compInfo: {},
            currentModelName: '',
            currentModelParams: '',
            tabList: '',
            vrInfo: {},
            queryChooseTabIdx: 0,
            queryChoose: '',
            ubcData: {},
            pcFreshWrapper: false,
            pcFreshSmooth: undefined,
            pcFreshTitle: false,
            defaultData: {}
        };
    };
    EntryComponent.prototype.created = function () { console.log(this.data.get()); };
    var _a, _b, _c;
    EntryComponent.trimWhitespace = 'all';
    EntryComponent.components = {
        'cos-card': _baidu_cosmic_card_card__WEBPACK_IMPORTED_MODULE_3___default.a,
        'cos-icon': _baidu_cosmic_icon__WEBPACK_IMPORTED_MODULE_4___default.a,
        'vrimg-two': _components_vrimg_two__WEBPACK_IMPORTED_MODULE_8___default.a,
        'image-vr': _components_image_vr__WEBPACK_IMPORTED_MODULE_10___default.a,
        'image-tab': _components_image_tab__WEBPACK_IMPORTED_MODULE_9___default.a,
        'car-header-cosmic': _app_component_car_component_car_header_cosmic__WEBPACK_IMPORTED_MODULE_5___default.a,
        'car-new-kg-header': _app_component_car_component_car_new_kg_header__WEBPACK_IMPORTED_MODULE_6___default.a,
        'car-source-cosmic': _app_component_car_component_car_source_cosmic__WEBPACK_IMPORTED_MODULE_7___default.a,
        'default-card': _default_card_index__WEBPACK_IMPORTED_MODULE_11___default.a,
    };
    EntryComponent.filters = {
        json: function (extObj) {
            return JSON.stringify(extObj);
        }
    };
    // 组件触发函数
    EntryComponent.messages = {
        tabsChange: function (arg) {
            var _a = arg.value, url = _a.url, paramsCos = _a.paramsCos;
            this.data.set('baseInfo.sourceUrl', url);
            this.data.set('baseInfo.cardParamsCos', paramsCos);
            // tab切换后，pc端的标题跳链也跟着变更
            this.data.set('fieldsData.headerParams', paramsCos);
        }
    };
    EntryComponent = __decorate([
        _searchfe_inject_js__WEBPACK_IMPORTED_MODULE_2__["injectable"],
        __metadata("design:paramtypes", [typeof (_a = typeof _baidu_www_api__WEBPACK_IMPORTED_MODULE_1__["SanOption"] !== "undefined" && _baidu_www_api__WEBPACK_IMPORTED_MODULE_1__["SanOption"]) === "function" ? _a : Object, typeof (_b = typeof _baidu_www_api__WEBPACK_IMPORTED_MODULE_1__["AlaLog"] !== "undefined" && _baidu_www_api__WEBPACK_IMPORTED_MODULE_1__["AlaLog"]) === "function" ? _b : Object, typeof (_c = typeof _baidu_www_api__WEBPACK_IMPORTED_MODULE_1__["UbcLog"] !== "undefined" && _baidu_www_api__WEBPACK_IMPORTED_MODULE_1__["UbcLog"]) === "function" ? _c : Object])
    ], EntryComponent);
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
/* harmony import */ var _private_components_header_con_bigimg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);
/* harmony import */ var _private_components_header_con_bigimg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_private_components_header_con_bigimg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _private_components_header_con__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50);
/* harmony import */ var _private_components_header_con__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_private_components_header_con__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _private_components_header_con_pc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51);
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
/* harmony import */ var _baidu_cosmic_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
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
        },
        logoData: function () {
            var fieldsData = this.data.get('fieldsData');
            return __assign(__assign({}, fieldsData), { logoIcon: fieldsData.logoIcon || 'https://mbs1.bdstatic.com/searchbox/mappconsole/image/20240315/96b3300b-9de4-4731-aefb-b00096b29920.png', logoText: fieldsData.logoText || '有驾', logoParams: fieldsData.logoParams || '', hasColor: fieldsData.hasColor || this.data.get('hasColor') });
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
            fieldsData: {}
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
    CarHeaderCosmicPcComponent.computed = {
        logoData: function () {
            var fieldsData = this.data.get('fieldsData');
            return __assign(__assign({}, fieldsData), { logoIcon: fieldsData.logoIcon || 'https://mbs1.bdstatic.com/searchbox/mappconsole/image/20240315/96b3300b-9de4-4731-aefb-b00096b29920.png', logoText: fieldsData.logoText || '有驾', logoParamsPc: fieldsData.logoParamsPc || '', hasColorPc: fieldsData.hasColorPc || false });
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
/* harmony import */ var _baidu_search_components_LinkNew_LinkNew__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _baidu_search_components_LinkNew_LinkNew__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_baidu_search_components_LinkNew_LinkNew__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _baidu_search_components_Title_Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53);
/* harmony import */ var _baidu_search_components_Title_Title__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_baidu_search_components_Title_Title__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _baidu_cosmic_card_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _baidu_cosmic_card_title__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_baidu_cosmic_card_title__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _baidu_search_components_Paragraph_Paragraph__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54);
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
/* harmony import */ var _baidu_cosmic_card_feedback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55);
/* harmony import */ var _baidu_cosmic_card_feedback__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_baidu_cosmic_card_feedback__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_baozhang_pc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56);
/* harmony import */ var _components_baozhang_pc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_baozhang_pc__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_baozhang_wise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57);
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
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baidu_www_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
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
/* harmony import */ var _baidu_www_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
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
            __webpack_require__.e(/* import() | guarantee-popper-h5 */ 1).then(__webpack_require__.bind(null, 154)),
            __webpack_require__.e(/* import() | guarantee-popper-h5 */ 1).then(__webpack_require__.bind(null, 155))
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
/* harmony import */ var _baidu_cosmic_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _baidu_cosmic_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_baidu_cosmic_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _baidu_cosmic_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _baidu_cosmic_icon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_baidu_cosmic_icon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _image_vr_pc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var _image_vr_pc__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_image_vr_pc__WEBPACK_IMPORTED_MODULE_3__);
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




var VrimgTwoComponent = /** @class */ (function (_super) {
    __extends(VrimgTwoComponent, _super);
    function VrimgTwoComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VrimgTwoComponent.prototype.initData = function () {
        return {
            isFirst: false,
            tplInfo: {},
            currentTab: '',
            queryChoose: '',
            outerVrInfo: {},
            vrInfo: {},
            tabItem: {},
            ubcPublic: {},
            ubcMoudle: ''
        };
    };
    VrimgTwoComponent.components = {
        'cos-image': _baidu_cosmic_image__WEBPACK_IMPORTED_MODULE_1___default.a,
        'cos-icon': _baidu_cosmic_icon__WEBPACK_IMPORTED_MODULE_2___default.a,
        'image-vr-pc': _image_vr_pc__WEBPACK_IMPORTED_MODULE_3___default.a,
    };
    VrimgTwoComponent.filters = {
        json: function (extObj) {
            return JSON.stringify(extObj);
        }
    };
    return VrimgTwoComponent;
}(_baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (VrimgTwoComponent);
/* san-hmr disable */ 


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baidu_www_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _baidu_www_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_baidu_www_api__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _baidu_cosmic_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _baidu_cosmic_icon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_baidu_cosmic_icon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _baidu_cosmic_card_card_loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17);
/* harmony import */ var _baidu_cosmic_card_card_loading__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_baidu_cosmic_card_card_loading__WEBPACK_IMPORTED_MODULE_3__);
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
    EntryComponent.prototype.injectService = function (inject) {
        this.alaLog = inject(_baidu_www_api__WEBPACK_IMPORTED_MODULE_1__["AlaLog"]);
        this.ubcLog = inject(_baidu_www_api__WEBPACK_IMPORTED_MODULE_1__["UbcLog"]);
    };
    EntryComponent.prototype.initData = function () {
        return {
            isNoEvents: false,
            outerVrInfo: {},
            ubcMoudle: '',
            ubcPublic: '',
            tplInfo: {},
            currentTab: '',
            queryChoose: '',
            from: '',
            active: 0,
            vrViewer: null,
            showLoading: false,
            vrConfig: null,
            isPc: false,
            startX: '',
            startY: '',
            isMoved: false
        };
    };
    EntryComponent.prototype.attached = function () {
        var outerVrInfo = this.data.get('outerVrInfo');
        this.renderVr(outerVrInfo.scene[outerVrInfo.active]);
        this.data.set('active', outerVrInfo.active);
        this.colorScroll();
    };
    // 渲染信息
    EntryComponent.prototype.renderVr = function (info) {
        var _this = this;
        var _a = this.data.get(), tplInfo = _a.tplInfo, ubcMoudle = _a.ubcMoudle;
        if (!info) {
            this.data.set('showLoading', true);
        }
        var el = document.getElementById('vr-box');
        // 渲染物料
        this.data.set('vrConfig', info);
        this.data.set('vrViewer', null);
        window.require(['https://youjia.cdn.bcebos.com/js/hydreigon.spintileviewer.min'], function (Hydreigon) {
            _this.data.set('vrViewer', new Hydreigon.SpinTileViewer(el, _this.data.get('vrConfig'), {
                disableHB: true,
                disableReport: true
            }));
            _this.data.get('vrViewer').on('loaded', function () {
                _this.data.set('showLoading', false);
                var isNoEvents = _this.data.get('isNoEvents');
                var outerVrInfo = _this.data.get('outerVrInfo');
                _this.sendUbcLog('show', {
                    type: 'pv',
                    srcid: tplInfo.srcid || '',
                    qid: tplInfo.lid,
                    page: (tplInfo === null || tplInfo === void 0 ? void 0 : tplInfo.tplname) || '',
                    // eslint-disable-next-line camelcase
                    clk_type: isNoEvents ? outerVrInfo.type : "outer_vr_".concat(ubcMoudle),
                    module: isNoEvents ? outerVrInfo.type : "outer_vr_".concat(ubcMoudle)
                });
            });
            _this.data.get('vrViewer').init();
            // 设置旋转速度 float 类型 默认。1.0
            // 如果传2，就是原来2倍；如果是0.5，就是原来0.5倍
            _this.data.get('vrViewer').setSpeedFactor(0.2);
            _this.data.get('vrViewer').switchZoom(false);
        });
    };
    EntryComponent.prototype.mouseEvent = function (e) {
        if (e.type === 'mousedown') {
            e.stopPropagation();
            e.preventDefault();
            // 记录初始点击鼠标位置
            this.data.set('startX', e.clientX);
            this.data.set('startY', e.clientY);
            this.ref('vrBox').style.cssText = 'cursor: all-scroll;';
        }
        if (e.type === 'mousemove') {
            this.data.set('isMoved', true);
        }
        if (e.type === 'mouseup') {
            this.ref('vrBox').style.cssText = 'cursor: pointer;';
        }
        if (e.type === 'click') {
            var _a = this.data.get(), startX = _a.startX, startY = _a.startY, isMoved = _a.isMoved;
            var offsetX = Math.abs(e.clientX - startX);
            var offsetY = Math.abs(e.clientY - startY);
            if (isMoved && (offsetX > 5 || offsetY > 5)) {
                // 鼠标有移动且x，y任一偏移量大于5，则认为是拖拽事件，click事件不冒泡
                e.stopPropagation();
                e.preventDefault();
            }
            this.data.set('isMoved', false);
        }
    };
    // 切换主题
    EntryComponent.prototype.chooseHandler = function (e, index, info) {
        e.stopPropagation();
        e.preventDefault();
        this.colorScroll();
        var _a = this.data.get(), tplInfo = _a.tplInfo, ubcMoudle = _a.ubcMoudle;
        this.sendUbcLog('click', {
            type: 'click',
            srcid: tplInfo.srcid || '',
            qid: tplInfo.lid,
            page: (tplInfo === null || tplInfo === void 0 ? void 0 : tplInfo.tplname) || '',
            // eslint-disable-next-line camelcase
            clk_type: "vr_change_color_".concat(ubcMoudle),
            module: "vr_change_color_".concat(ubcMoudle)
        });
        this.alaLog.send({
            extra: JSON.stringify({
                actType: 'action',
                label: "vr_change_color_".concat(ubcMoudle)
            })
        }, tplInfo);
        this.data.set('active', index);
        this.data.set('themeName', info.name);
        this.data.set('outerVrInfo.scene[index].initRowCol', this.data.get('vrViewer').getRowCol());
        this.data.get('vrViewer').switchToScene(this.data.get('outerVrInfo').scene[index]);
        this.data.get('vrViewer').setSpeedFactor(0.2);
    };
    // 颜色锚定滚动函数
    EntryComponent.prototype.colorScroll = function () {
        var _this = this;
        this.nextTick(function () {
            var tabsSub = _this.ref('tabsSub');
            if (tabsSub) {
                // 页面渲染完成且该一级tab下有二级tab，我们开始滚动逻辑：向左滚动 元素中间距离左边的距离(元素距离左边的间距 + 元素宽度/2) - 我要滚动到大盒子的中间(大盒子宽度/2)
                var activeIdx = _this.data.get('active');
                var scrollObj = {
                    boxWidth: tabsSub.clientHeight,
                    subWidth: tabsSub.children[activeIdx].offsetHeight,
                    subLeft: tabsSub.children[activeIdx].offsetTop
                };
                tabsSub.scrollTo({
                    top: scrollObj.subLeft + (scrollObj.subWidth / 2) - (scrollObj.boxWidth / 2),
                    behavior: 'smooth'
                });
            }
        });
    };
    EntryComponent.prototype.touchColorList = function (e) {
        e.stopPropagation();
        e.preventDefault();
    };
    // UBC打点
    EntryComponent.prototype.sendUbcLog = function (type, extra) {
        if (extra === void 0) { extra = {}; }
        var _a = this.data.get(), ubcPublic = _a.ubcPublic, tplInfo = _a.tplInfo;
        this.ubcLog.sendLog({
            type: type,
            ext: __assign(__assign({}, ubcPublic), extra)
        }, tplInfo);
    };
    EntryComponent.trimWhitespace = 'all';
    EntryComponent.components = {
        'cos-icon': _baidu_cosmic_icon__WEBPACK_IMPORTED_MODULE_2___default.a,
        'cosc-card-loading': _baidu_cosmic_card_card_loading__WEBPACK_IMPORTED_MODULE_3___default.a
    };
    EntryComponent.computed = {};
    EntryComponent.filters = {
        json: function (extObj) {
            return JSON.stringify(extObj);
        }
    };
    return EntryComponent;
}(_baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (EntryComponent);
/* san-hmr disable */ 


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baidu_www_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _baidu_www_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_baidu_www_api__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _baidu_search_components_Grid_Row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59);
/* harmony import */ var _baidu_search_components_Grid_Row__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_baidu_search_components_Grid_Row__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _baidu_search_components_Grid_Col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60);
/* harmony import */ var _baidu_search_components_Grid_Col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_baidu_search_components_Grid_Col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _baidu_search_components_LinkNew_LinkNew__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);
/* harmony import */ var _baidu_search_components_LinkNew_LinkNew__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_baidu_search_components_LinkNew_LinkNew__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _baidu_cosmic_more_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
/* harmony import */ var _baidu_cosmic_more_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_baidu_cosmic_more_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _baidu_search_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18);
/* harmony import */ var _baidu_search_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_baidu_search_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_component_car_component_car_tabs_cosmic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10);
/* harmony import */ var _app_component_car_component_car_tabs_cosmic__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_app_component_car_component_car_tabs_cosmic__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _app_component_car_card_common_model_card_model_vr_img_components_pc_multimg_four__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(64);
/* harmony import */ var _app_component_car_card_common_model_card_model_vr_img_components_pc_multimg_four__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_app_component_car_card_common_model_card_model_vr_img_components_pc_multimg_four__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _vrimg_two__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(15);
/* harmony import */ var _vrimg_two__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_vrimg_two__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _image_vr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(19);
/* harmony import */ var _image_vr__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_image_vr__WEBPACK_IMPORTED_MODULE_10__);
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
    EntryComponent.prototype.injectService = function (inject) {
        this.alaLog = inject(_baidu_www_api__WEBPACK_IMPORTED_MODULE_1__["AlaLog"]);
        this.ubcLog = inject(_baidu_www_api__WEBPACK_IMPORTED_MODULE_1__["UbcLog"]);
    };
    EntryComponent.prototype.initData = function () {
        return {
            isPc: false,
            isFirst: false,
            tplInfo: {},
            tabList: [],
            compInfo: {},
            vrInfo: {},
            queryChooseTabIdx: 0,
            queryChoose: '',
            ubcPublic: '',
            currentTab: '',
        };
    };
    EntryComponent.prototype.attached = function () {
        var queryChoose = this.data.get().queryChoose;
        this.data.set('currentTab', queryChoose);
    };
    EntryComponent.prototype.sendUbcLog = function (type, extra) {
        if (extra === void 0) { extra = {}; }
        var _a = this.data.get(), ubcPublic = _a.ubcPublic, tplInfo = _a.tplInfo;
        this.ubcLog.sendLog({
            type: type,
            ext: __assign(__assign({}, ubcPublic), extra)
        }, tplInfo);
    };
    EntryComponent.trimWhitespace = 'all';
    EntryComponent.components = {
        'sc-link': _baidu_search_components_LinkNew_LinkNew__WEBPACK_IMPORTED_MODULE_4___default.a,
        'sc-row': _baidu_search_components_Grid_Row__WEBPACK_IMPORTED_MODULE_2___default.a,
        'sc-col': _baidu_search_components_Grid_Col__WEBPACK_IMPORTED_MODULE_3___default.a,
        'sc-icon': _baidu_search_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_6___default.a,
        'multimg-four': _app_component_car_card_common_model_card_model_vr_img_components_pc_multimg_four__WEBPACK_IMPORTED_MODULE_8___default.a,
        'car-tabs-cosmic': _app_component_car_component_car_tabs_cosmic__WEBPACK_IMPORTED_MODULE_7___default.a,
        'vrimg-two': _vrimg_two__WEBPACK_IMPORTED_MODULE_9___default.a,
        'image-vr': _image_vr__WEBPACK_IMPORTED_MODULE_10___default.a,
        'cos-more-link': _baidu_cosmic_more_link__WEBPACK_IMPORTED_MODULE_5___default.a
    };
    EntryComponent.computed = {};
    EntryComponent.filters = {
        json: function (extObj) {
            return JSON.stringify(extObj);
        }
    };
    EntryComponent.messages = {
        tabChange: function (arg) {
            var params = arg.value.params;
            var index = params.index;
            var _a = this.data.get(), tplInfo = _a.tplInfo, tabList = _a.tabList;
            if (tabList && Array.isArray(tabList)) {
                this.data.set('currentTab', tabList[index].text);
            }
            this.dispatch('tabsChange', tabList[index]);
            this.sendUbcLog('click', {
                type: 'click',
                srcid: tplInfo.srcid || '',
                qid: tplInfo.lid,
                page: (tplInfo === null || tplInfo === void 0 ? void 0 : tplInfo.tplname) || '',
                // eslint-disable-next-line camelcase
                clk_type: 'tab',
                module: "tab_".concat(index)
            });
            this.alaLog.send({
                extra: JSON.stringify({
                    actType: 'tab',
                    label: 'tab',
                    labid: index
                })
            }, tplInfo);
        }
    };
    return EntryComponent;
}(_baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (EntryComponent);
/* san-hmr disable */ 


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baidu_www_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _baidu_www_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_baidu_www_api__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _baidu_cosmic_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61);
/* harmony import */ var _baidu_cosmic_tabs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_baidu_cosmic_tabs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _baidu_cosmic_tab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62);
/* harmony import */ var _baidu_cosmic_tab__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_baidu_cosmic_tab__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _baidu_cosmic_tab_pane__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63);
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
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baidu_cosmic_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _baidu_cosmic_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_baidu_cosmic_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _baidu_cosmic_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _baidu_cosmic_icon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_baidu_cosmic_icon__WEBPACK_IMPORTED_MODULE_2__);
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



var MultimgFourComponent = /** @class */ (function (_super) {
    __extends(MultimgFourComponent, _super);
    function MultimgFourComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MultimgFourComponent.prototype.initData = function () {
        return {
            urlParams: {},
            imgCount: '',
            imgList: []
        };
    };
    MultimgFourComponent.trimWhitespace = 'all';
    MultimgFourComponent.components = {
        'cos-image': _baidu_cosmic_image__WEBPACK_IMPORTED_MODULE_1___default.a,
        'cos-icon': _baidu_cosmic_icon__WEBPACK_IMPORTED_MODULE_2___default.a
    };
    MultimgFourComponent.filters = {
        json: function (extObj) {
            return JSON.stringify(extObj);
        }
    };
    return MultimgFourComponent;
}(_baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (MultimgFourComponent);
/* san-hmr disable */ 


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baidu_www_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _baidu_www_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_baidu_www_api__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _baidu_search_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var _baidu_search_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_baidu_search_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _baidu_search_components_Loading_Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65);
/* harmony import */ var _baidu_search_components_Loading_Loading__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_baidu_search_components_Loading_Loading__WEBPACK_IMPORTED_MODULE_3__);
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
    EntryComponent.prototype.injectService = function (inject) {
        this.alaLog = inject(_baidu_www_api__WEBPACK_IMPORTED_MODULE_1__["AlaLog"]);
        this.ubcLog = inject(_baidu_www_api__WEBPACK_IMPORTED_MODULE_1__["UbcLog"]);
    };
    EntryComponent.prototype.initData = function () {
        return {
            outerVrInfo: {},
            ubcMoudle: '',
            ubcPublic: '',
            tplInfo: {},
            currentTab: '',
            queryChoose: '',
            from: '',
            active: 0,
            vrViewer: null,
            showLoading: false,
            vrConfig: null,
            isPc: false
        };
    };
    EntryComponent.prototype.attached = function () {
        var _this = this;
        var _a = this.data.get(), 
        // from,
        // currentTab,
        outerVrInfo = _a.outerVrInfo, isPc = _a.isPc;
        if (!isPc) {
            // 初始化意图为外观 再加载sdk 否则切换tab时watch加载
            // if ((from === 'tab_small' && currentTab === '外观')
            //     || from !== 'tab_small') {
            this.renderVr(outerVrInfo.scene[outerVrInfo.active]);
            this.data.set('active', outerVrInfo.active);
            // }
            document.querySelector('#vr-box').addEventListener('touchmove', function (event) {
                event.preventDefault();
                // san的阻止默认事件
                // window.event?.stopPropagation();
            });
            this.watch('currentTab', function (changeTab) {
                if (changeTab === '外观' && _this.from === 'tab_small' && _this.queryChoose !== '外观') {
                    _this.nextTick(function () {
                        _this.renderVr(_this.outerVrInfo.scene[outerVrInfo.active]);
                    });
                }
            });
        }
    };
    // 渲染信息
    EntryComponent.prototype.renderVr = function (info) {
        var _this = this;
        var _a = this.data.get(), tplInfo = _a.tplInfo, ubcMoudle = _a.ubcMoudle;
        if (!info) {
            this.data.set('showLoading', true);
        }
        var el = document.getElementById('vr-box');
        // 渲染物料
        this.data.set('vrConfig', info);
        this.data.set('vrViewer', null);
        window.require(['https://youjia.cdn.bcebos.com/js/hydreigon.spintileviewer.min'], function (Hydreigon) {
            _this.data.set('vrViewer', new Hydreigon.SpinTileViewer(el, _this.data.get('vrConfig'), {
                disableHB: true,
                disableReport: true
            }));
            _this.data.get('vrViewer').on('loaded', function () {
                _this.data.set('showLoading', false);
                _this.sendUbcLog('show', {
                    type: 'pv',
                    srcid: tplInfo.srcid || '',
                    qid: tplInfo.lid,
                    page: (tplInfo === null || tplInfo === void 0 ? void 0 : tplInfo.tplname) || '',
                    // eslint-disable-next-line camelcase
                    clk_type: "outer_vr_".concat(ubcMoudle),
                    module: "outer_vr_".concat(ubcMoudle)
                });
            });
            _this.data.get('vrViewer').init();
            // 设置旋转速度 float 类型 默认。1.0
            // 如果传2，就是原来2倍；如果是0.5，就是原来0.5倍
            _this.data.get('vrViewer').setSpeedFactor(1.0);
            _this.data.get('vrViewer').switchZoom(false);
        });
    };
    // 切换主题
    EntryComponent.prototype.chooseHandler = function (e, index, info) {
        e.stopPropagation();
        e.preventDefault();
        var _a = this.data.get(), tplInfo = _a.tplInfo, ubcMoudle = _a.ubcMoudle;
        this.sendUbcLog('click', {
            type: 'click',
            srcid: tplInfo.srcid || '',
            qid: tplInfo.lid,
            page: (tplInfo === null || tplInfo === void 0 ? void 0 : tplInfo.tplname) || '',
            // eslint-disable-next-line camelcase
            clk_type: "vr_change_color_".concat(ubcMoudle),
            module: "vr_change_color_".concat(ubcMoudle)
        });
        this.alaLog.send({
            extra: JSON.stringify({
                actType: 'action',
                label: "vr_change_color_".concat(ubcMoudle)
            })
        }, tplInfo);
        this.data.set('active', index);
        this.data.set('themeName', info.name);
        this.data.set('outerVrInfo.scene[index].initRowCol', this.data.get('vrViewer').getRowCol());
        this.data.get('vrViewer').switchToScene(this.data.get('outerVrInfo').scene[index]);
    };
    EntryComponent.prototype.touchColorList = function () {
        var _a;
        (_a = window.event) === null || _a === void 0 ? void 0 : _a.stopPropagation();
    };
    // UBC打点
    EntryComponent.prototype.sendUbcLog = function (type, extra) {
        if (extra === void 0) { extra = {}; }
        var _a = this.data.get(), ubcPublic = _a.ubcPublic, tplInfo = _a.tplInfo;
        this.ubcLog.sendLog({
            type: type,
            ext: __assign(__assign({}, ubcPublic), extra)
        }, tplInfo);
    };
    EntryComponent.trimWhitespace = 'all';
    EntryComponent.components = {
        'sc-icon': _baidu_search_components_Icon_Icon__WEBPACK_IMPORTED_MODULE_2___default.a,
        'sc-loading': _baidu_search_components_Loading_Loading__WEBPACK_IMPORTED_MODULE_3___default.a
    };
    EntryComponent.computed = {};
    EntryComponent.filters = {
        json: function (extObj) {
            var ubcPublic = this.data.get('ubcPublic');
            return JSON.stringify(__assign(__assign({}, ubcPublic), extObj));
        }
    };
    return EntryComponent;
}(_baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (EntryComponent);
/* san-hmr disable */ 


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baidu_cosmic_card_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _baidu_cosmic_card_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_baidu_cosmic_card_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_component_car_component_car_header_cosmic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _app_component_car_component_car_header_cosmic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_component_car_component_car_header_cosmic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_component_car_component_car_source_cosmic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);
/* harmony import */ var _app_component_car_component_car_source_cosmic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_app_component_car_component_car_source_cosmic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_swiper_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67);
/* harmony import */ var _components_swiper_info__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_swiper_info__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_tab_info__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69);
/* harmony import */ var _components_tab_info__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_tab_info__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_pc_swiper_info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71);
/* harmony import */ var _components_pc_swiper_info__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_pc_swiper_info__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_pc_tab_info__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(72);
/* harmony import */ var _components_pc_tab_info__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_pc_tab_info__WEBPACK_IMPORTED_MODULE_7__);
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
            baseCnf: {},
            tplInfo: {},
            fieldsData: {},
            ubcData: {},
            commonInfo: {},
            componentInfo: {},
        };
    };
    DefaultCardComponent.ssr = 'render-hydrate';
    DefaultCardComponent.components = {
        'cosc-card': _baidu_cosmic_card_card__WEBPACK_IMPORTED_MODULE_1___default.a,
        'car-header-cosmic': _app_component_car_component_car_header_cosmic__WEBPACK_IMPORTED_MODULE_2___default.a,
        'car-source-cosmic': _app_component_car_component_car_source_cosmic__WEBPACK_IMPORTED_MODULE_3___default.a,
        'swiper-info': _components_swiper_info__WEBPACK_IMPORTED_MODULE_4___default.a,
        'tab-info': _components_tab_info__WEBPACK_IMPORTED_MODULE_5___default.a,
        'swiper-info-pc': _components_pc_swiper_info__WEBPACK_IMPORTED_MODULE_6___default.a,
        'tab-info-pc': _components_pc_tab_info__WEBPACK_IMPORTED_MODULE_7___default.a
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
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baidu_www_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _baidu_www_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_baidu_www_api__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _baidu_ala_util_lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
/* harmony import */ var _baidu_ala_util_lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_baidu_ala_util_lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _baidu_cosmic_swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21);
/* harmony import */ var _baidu_cosmic_swiper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_baidu_cosmic_swiper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _baidu_cosmic_swiper_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22);
/* harmony import */ var _baidu_cosmic_swiper_item__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_baidu_cosmic_swiper_item__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _baidu_cosmic_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _baidu_cosmic_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_baidu_cosmic_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _baidu_cosmic_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5);
/* harmony import */ var _baidu_cosmic_icon__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_baidu_cosmic_icon__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _image_vr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(68);
/* harmony import */ var _image_vr__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_image_vr__WEBPACK_IMPORTED_MODULE_7__);
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








var SwiperInfoComponent = /** @class */ (function (_super) {
    __extends(SwiperInfoComponent, _super);
    function SwiperInfoComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SwiperInfoComponent.prototype.injectService = function (inject) {
        this.alaLog = inject(_baidu_www_api__WEBPACK_IMPORTED_MODULE_1__["AlaLog"]);
        this.ubcLog = inject(_baidu_www_api__WEBPACK_IMPORTED_MODULE_1__["UbcLog"]);
    };
    SwiperInfoComponent.prototype.initData = function () {
        return {
            baseCnf: {},
            tplInfo: {},
            ubcPublic: {},
            swiperActiveIndex: 0,
            swiperList: [],
            touchCount: 0,
        };
    };
    SwiperInfoComponent.prototype.attached = function () {
        this.handleScroll = Object(_baidu_ala_util_lodash__WEBPACK_IMPORTED_MODULE_2__["debounce"])(this.handleScroll, 300);
    };
    // scroll滚动事件
    SwiperInfoComponent.prototype.handleScroll = function () {
        var _a;
        var tplInfo = this.data.get('tplInfo');
        var touchCount = this.data.get('touchCount');
        touchCount += 1;
        this.data.set('touchCount', touchCount);
        // 滚动结束后的ubc打点
        this.sendUbcLog('scroll', {
            type: 'scroll',
            srcid: tplInfo.srcid || '',
            // eslint-disable-next-line camelcase
            clk_type: 'swiper',
            module: "swiper_".concat(touchCount)
        });
        // 滚动结束后的tc打点
        (_a = this.alaLog) === null || _a === void 0 ? void 0 : _a.send({
            type: 't',
            cyc: 1,
            action: "swiper_".concat(touchCount)
        }, tplInfo);
    };
    SwiperInfoComponent.prototype.handleChange = function () {
        var _this = this;
        this.nextTick(function () {
            var _a;
            _this.ref('tabContent') && ((_a = _this.ubcLog) === null || _a === void 0 ? void 0 : _a.registerObserver(_this.ref('tabContent')));
        });
    };
    // UBC打点
    SwiperInfoComponent.prototype.sendUbcLog = function (type, extra) {
        var _a;
        if (type === void 0) { type = 'click'; }
        if (extra === void 0) { extra = {}; }
        var ubcPublic = this.data.get('ubcPublic');
        (_a = this.ubcLog) === null || _a === void 0 ? void 0 : _a.sendLog({
            type: type,
            ext: __assign(__assign({}, ubcPublic), extra)
        }, this.data.get('tplInfo'));
    };
    SwiperInfoComponent.trimWhitespace = 'all';
    SwiperInfoComponent.components = {
        'cos-swiper': _baidu_cosmic_swiper__WEBPACK_IMPORTED_MODULE_3___default.a,
        'cos-swiper-item': _baidu_cosmic_swiper_item__WEBPACK_IMPORTED_MODULE_4___default.a,
        'cos-image': _baidu_cosmic_image__WEBPACK_IMPORTED_MODULE_5___default.a,
        'cos-icon': _baidu_cosmic_icon__WEBPACK_IMPORTED_MODULE_6___default.a,
        'image-vr': _image_vr__WEBPACK_IMPORTED_MODULE_7___default.a
    };
    SwiperInfoComponent.filters = {
        json: function (extObj) {
            return JSON.stringify(extObj);
        },
    };
    return SwiperInfoComponent;
}(_baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (SwiperInfoComponent);
/* san-hmr disable */ 


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baidu_www_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _baidu_www_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_baidu_www_api__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _baidu_cosmic_card_card_loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var _baidu_cosmic_card_card_loading__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_baidu_cosmic_card_card_loading__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _baidu_cosmic_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
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
    EntryComponent.prototype.injectService = function (inject) {
        this.alaLog = inject(_baidu_www_api__WEBPACK_IMPORTED_MODULE_1__["AlaLog"]);
        this.ubcLog = inject(_baidu_www_api__WEBPACK_IMPORTED_MODULE_1__["UbcLog"]);
    };
    EntryComponent.prototype.initData = function () {
        return {
            isNoEvents: false,
            outerVrInfo: {},
            ubcPublic: '',
            tplInfo: {},
            currentTab: '',
            queryChoose: '',
            from: '',
            active: 0,
            vrViewer: null,
            showLoading: false,
            vrConfig: null,
            isPc: false
        };
    };
    EntryComponent.prototype.attached = function () {
        var _this = this;
        var outerVrInfo = this.data.get().outerVrInfo;
        // 初始化意图为外观 再加载sdk 否则切换tab时watch加载
        this.renderVr(outerVrInfo.scene[outerVrInfo.active]);
        this.data.set('active', outerVrInfo.active);
        document.querySelector('#vr-box').addEventListener('touchmove', this.handleTouchMove);
        this.watch('currentTab', function (changeTab) {
            if (changeTab === '外观' && _this.from === 'tab_small' && _this.queryChoose !== '外观') {
                _this.nextTick(function () {
                    _this.renderVr(_this.outerVrInfo.scene[outerVrInfo.active]);
                });
            }
        });
    };
    EntryComponent.prototype.detached = function () {
        document.querySelector('#vr-box').removeEventListener('touchmove', this.handleTouchMove);
    };
    EntryComponent.prototype.handleTouchMove = function (event) {
        event.preventDefault();
    };
    // 渲染信息
    EntryComponent.prototype.renderVr = function (info) {
        var _this = this;
        var _a = this.data.get(), tplInfo = _a.tplInfo, outerVrInfo = _a.outerVrInfo;
        if (!info) {
            this.data.set('showLoading', true);
        }
        var el = document.getElementById('vr-box');
        // 渲染物料
        this.data.set('vrConfig', info);
        this.data.set('vrViewer', null);
        window.require(['https://youjia.cdn.bcebos.com/js/hydreigon.spintileviewer.min'], function (Hydreigon) {
            _this.data.set('vrViewer', new Hydreigon.SpinTileViewer(el, _this.data.get('vrConfig'), {
                disableHB: true,
                disableReport: true
            }));
            _this.data.get('vrViewer').on('loaded', function () {
                _this.data.set('showLoading', false);
                _this.sendUbcLog('show', {
                    type: 'pv',
                    srcid: tplInfo.srcid || '',
                    qid: tplInfo.lid,
                    page: (tplInfo === null || tplInfo === void 0 ? void 0 : tplInfo.tplname) || '',
                    // eslint-disable-next-line camelcase
                    clk_type: outerVrInfo.type,
                    module: outerVrInfo.type
                });
            });
            _this.data.get('vrViewer').init();
            // 设置旋转速度 float 类型 默认。1.0
            // 如果传2，就是原来2倍；如果是0.5，就是原来0.5倍
            _this.data.get('vrViewer').setSpeedFactor(1.0);
            _this.data.get('vrViewer').switchZoom(false);
        });
    };
    // 切换主题
    EntryComponent.prototype.chooseHandler = function (e, index, info) {
        e.stopPropagation();
        e.preventDefault();
        var tplInfo = this.data.get().tplInfo;
        this.sendUbcLog('click', {
            type: 'click',
            srcid: tplInfo.srcid || '',
            qid: tplInfo.lid,
            page: (tplInfo === null || tplInfo === void 0 ? void 0 : tplInfo.tplname) || '',
            // eslint-disable-next-line camelcase
            clk_type: 'vr_change_color',
            module: 'vr_change_color'
        });
        this.alaLog.send({
            extra: JSON.stringify({
                actType: 'action',
                label: 'vr_change_color'
            })
        }, tplInfo);
        this.data.set('active', index);
        this.data.set('themeName', info.name);
        this.data.set('outerVrInfo.scene[index].initRowCol', this.data.get('vrViewer').getRowCol());
        this.data.get('vrViewer').switchToScene(this.data.get('outerVrInfo').scene[index]);
    };
    EntryComponent.prototype.touchColorList = function () {
        var _a;
        (_a = window.event) === null || _a === void 0 ? void 0 : _a.stopPropagation();
    };
    // UBC打点
    EntryComponent.prototype.sendUbcLog = function (type, extra) {
        if (extra === void 0) { extra = {}; }
        var _a = this.data.get(), ubcPublic = _a.ubcPublic, tplInfo = _a.tplInfo;
        this.ubcLog.sendLog({
            type: type,
            ext: __assign(__assign({}, ubcPublic), extra)
        }, tplInfo);
    };
    EntryComponent.trimWhitespace = 'all';
    EntryComponent.components = {
        'cosc-card-loading': _baidu_cosmic_card_card_loading__WEBPACK_IMPORTED_MODULE_2___default.a,
        'cos-icon': _baidu_cosmic_icon__WEBPACK_IMPORTED_MODULE_3___default.a,
    };
    EntryComponent.computed = {};
    EntryComponent.filters = {
        json: function (extObj) {
            return JSON.stringify(extObj);
        }
    };
    return EntryComponent;
}(_baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (EntryComponent);
/* san-hmr disable */ 


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baidu_www_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _baidu_www_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_baidu_www_api__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _baidu_cosmic_more_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _baidu_cosmic_more_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_baidu_cosmic_more_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_component_car_component_car_tabs_cosmic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _app_component_car_component_car_tabs_cosmic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_app_component_car_component_car_tabs_cosmic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _img_three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70);
/* harmony import */ var _img_three__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_three__WEBPACK_IMPORTED_MODULE_4__);
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
        'img-three': _img_three__WEBPACK_IMPORTED_MODULE_4___default.a,
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
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baidu_cosmic_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _baidu_cosmic_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_baidu_cosmic_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _baidu_cosmic_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _baidu_cosmic_icon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_baidu_cosmic_icon__WEBPACK_IMPORTED_MODULE_2__);
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



var ImgThreeComponent = /** @class */ (function (_super) {
    __extends(ImgThreeComponent, _super);
    function ImgThreeComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImgThreeComponent.prototype.initData = function () {
        return {
            commonInfo: {},
            imgCount: '',
            tabItem: {},
            tabIndex: 0,
        };
    };
    ImgThreeComponent.trimWhitespace = 'all';
    ImgThreeComponent.components = {
        'cos-image': _baidu_cosmic_image__WEBPACK_IMPORTED_MODULE_1___default.a,
        'cos-icon': _baidu_cosmic_icon__WEBPACK_IMPORTED_MODULE_2___default.a
    };
    ImgThreeComponent.filters = {
        json: function (extObj) {
            return JSON.stringify(extObj);
        }
    };
    ImgThreeComponent.computed = {
        imgL: function () {
            return this.data.get('tabItem.imgList').slice(0, 6);
        }
    };
    return ImgThreeComponent;
}(_baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (ImgThreeComponent);
/* san-hmr disable */ 


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baidu_www_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _baidu_www_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_baidu_www_api__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _baidu_ala_util_lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
/* harmony import */ var _baidu_ala_util_lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_baidu_ala_util_lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _baidu_cosmic_swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21);
/* harmony import */ var _baidu_cosmic_swiper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_baidu_cosmic_swiper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _baidu_cosmic_swiper_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22);
/* harmony import */ var _baidu_cosmic_swiper_item__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_baidu_cosmic_swiper_item__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _baidu_cosmic_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _baidu_cosmic_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_baidu_cosmic_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _baidu_cosmic_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5);
/* harmony import */ var _baidu_cosmic_icon__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_baidu_cosmic_icon__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_image_vr_pc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16);
/* harmony import */ var _components_image_vr_pc__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_image_vr_pc__WEBPACK_IMPORTED_MODULE_7__);
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








var SwiperInfoComponent = /** @class */ (function (_super) {
    __extends(SwiperInfoComponent, _super);
    function SwiperInfoComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SwiperInfoComponent.prototype.injectService = function (inject) {
        this.alaLog = inject(_baidu_www_api__WEBPACK_IMPORTED_MODULE_1__["AlaLog"]);
        this.ubcLog = inject(_baidu_www_api__WEBPACK_IMPORTED_MODULE_1__["UbcLog"]);
    };
    SwiperInfoComponent.prototype.initData = function () {
        return {
            isGroupBegin: false,
            tplInfo: {},
            ubcPublic: {},
            baseCnf: {},
            swiperActiveIndex: 0,
            swiperList: [],
            touchCount: 0,
        };
    };
    SwiperInfoComponent.prototype.attached = function () {
        this.handleScroll = Object(_baidu_ala_util_lodash__WEBPACK_IMPORTED_MODULE_2__["debounce"])(this.handleScroll, 300);
    };
    // scroll滚动事件
    SwiperInfoComponent.prototype.handleScroll = function () {
        var _a;
        var tplInfo = this.data.get('tplInfo');
        var touchCount = this.data.get('touchCount');
        touchCount += 1;
        this.data.set('touchCount', touchCount);
        // 滚动结束后的ubc打点
        this.sendUbcLog('scroll', {
            type: 'scroll',
            srcid: tplInfo.srcid || '',
            // eslint-disable-next-line camelcase
            clk_type: 'swiper',
            module: "swiper_".concat(touchCount)
        });
        // 滚动结束后的tc打点
        (_a = this.alaLog) === null || _a === void 0 ? void 0 : _a.send({
            type: 't',
            cyc: 1,
            action: "swiper_".concat(touchCount)
        }, tplInfo);
    };
    // UBC打点
    SwiperInfoComponent.prototype.sendUbcLog = function (type, extra) {
        var _a;
        if (type === void 0) { type = 'click'; }
        if (extra === void 0) { extra = {}; }
        var ubcPublic = this.data.get('ubcPublic');
        (_a = this.ubcLog) === null || _a === void 0 ? void 0 : _a.sendLog({
            type: type,
            ext: __assign(__assign({}, ubcPublic), extra)
        }, this.data.get('tplInfo'));
    };
    SwiperInfoComponent.trimWhitespace = 'all';
    SwiperInfoComponent.components = {
        'cos-swiper': _baidu_cosmic_swiper__WEBPACK_IMPORTED_MODULE_3___default.a,
        'cos-swiper-item': _baidu_cosmic_swiper_item__WEBPACK_IMPORTED_MODULE_4___default.a,
        'cos-image': _baidu_cosmic_image__WEBPACK_IMPORTED_MODULE_5___default.a,
        'cos-icon': _baidu_cosmic_icon__WEBPACK_IMPORTED_MODULE_6___default.a,
        'image-vr': _components_image_vr_pc__WEBPACK_IMPORTED_MODULE_7___default.a
    };
    SwiperInfoComponent.filters = {
        json: function (extObj) {
            return JSON.stringify(extObj);
        },
    };
    return SwiperInfoComponent;
}(_baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (SwiperInfoComponent);
/* san-hmr disable */ 


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baidu_www_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _baidu_www_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_baidu_www_api__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _baidu_cosmic_more_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _baidu_cosmic_more_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_baidu_cosmic_more_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_component_car_component_car_tabs_cosmic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _app_component_car_component_car_tabs_cosmic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_app_component_car_component_car_tabs_cosmic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _img_five__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73);
/* harmony import */ var _img_five__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_five__WEBPACK_IMPORTED_MODULE_4__);
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
        'img-five': _img_five__WEBPACK_IMPORTED_MODULE_4___default.a,
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
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baidu_cosmic_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _baidu_cosmic_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_baidu_cosmic_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _baidu_cosmic_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _baidu_cosmic_icon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_baidu_cosmic_icon__WEBPACK_IMPORTED_MODULE_2__);
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



var ImgThreeComponent = /** @class */ (function (_super) {
    __extends(ImgThreeComponent, _super);
    function ImgThreeComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImgThreeComponent.prototype.initData = function () {
        return {
            commonInfo: {},
            imgCount: '',
            tabItem: {},
            tabIndex: 0,
        };
    };
    ImgThreeComponent.trimWhitespace = 'all';
    ImgThreeComponent.components = {
        'cos-image': _baidu_cosmic_image__WEBPACK_IMPORTED_MODULE_1___default.a,
        'cos-icon': _baidu_cosmic_icon__WEBPACK_IMPORTED_MODULE_2___default.a
    };
    ImgThreeComponent.filters = {
        json: function (extObj) {
            return JSON.stringify(extObj);
        }
    };
    ImgThreeComponent.computed = {
        imgL: function () {
            return this.data.get('tabItem.imgList').slice(0, 10);
        }
    };
    return ImgThreeComponent;
}(_baidu_ala_util_san_component__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (ImgThreeComponent);
/* san-hmr disable */ 


/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__48__;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(4);
        var style0 = __webpack_require__(82);
var injectStyles = [{exportAs: undefined, style: style0}];

        var template = __webpack_require__(84);
        
        var script = __webpack_require__(26).default;
        module.exports = __webpack_require__(26);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(4);
        var style0 = __webpack_require__(88);
var injectStyles = [{exportAs: undefined, style: style0}];

        var template = __webpack_require__(90);
        
        var script = __webpack_require__(28).default;
        module.exports = __webpack_require__(28);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(4);
        var style0 = __webpack_require__(91);
var injectStyles = [{exportAs: undefined, style: style0}];

        var template = __webpack_require__(93);
        
        var script = __webpack_require__(29).default;
        module.exports = __webpack_require__(29);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(4);
        var promptWise = __webpack_require__(94);
var promptPc = __webpack_require__(96);
var myLabelTitlePc = __webpack_require__(98);
var style3 = __webpack_require__(100);
var injectStyles = [{exportAs: 'promptWise', style: promptWise}, {exportAs: 'promptPc', style: promptPc}, {exportAs: 'myLabelTitlePc', style: myLabelTitlePc}, {exportAs: undefined, style: style3}];

        var template = __webpack_require__(102);
        
        var script = __webpack_require__(30).default;
        module.exports = __webpack_require__(30);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__53__;

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__54__;

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__55__;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(4);
        var style0 = __webpack_require__(106);
var injectStyles = [{exportAs: undefined, style: style0}];

        var template = __webpack_require__(108);
        
        var script = __webpack_require__(32).default;
        module.exports = __webpack_require__(32);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(4);
        var style0 = __webpack_require__(109);
var injectStyles = [{exportAs: undefined, style: style0}];

        var template = __webpack_require__(111);
        
        var script = __webpack_require__(33).default;
        module.exports = __webpack_require__(33);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(4);
        var style0 = __webpack_require__(118);
var injectStyles = [{exportAs: undefined, style: style0}];

        var template = __webpack_require__(120);
        
        var script = __webpack_require__(36).default;
        module.exports = __webpack_require__(36);
    
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


        var normalize = __webpack_require__(4);
        var style0 = __webpack_require__(124);
var injectStyles = [{exportAs: undefined, style: style0}];

        var template = __webpack_require__(126);
        
        var script = __webpack_require__(38).default;
        module.exports = __webpack_require__(38);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__65__;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(4);
        var style0 = __webpack_require__(130);
var injectStyles = [{exportAs: undefined, style: style0}];

        var template = __webpack_require__(132);
        
        var script = __webpack_require__(40).default;
        module.exports = __webpack_require__(40);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(4);
        var style0 = __webpack_require__(133);
var injectStyles = [{exportAs: undefined, style: style0}];

        var template = __webpack_require__(135);
        
        var script = __webpack_require__(41).default;
        module.exports = __webpack_require__(41);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(4);
        var style0 = __webpack_require__(136);
var injectStyles = [{exportAs: undefined, style: style0}];

        var template = __webpack_require__(138);
        
        var script = __webpack_require__(42).default;
        module.exports = __webpack_require__(42);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(4);
        var style0 = __webpack_require__(139);
var injectStyles = [{exportAs: undefined, style: style0}];

        var template = __webpack_require__(141);
        
        var script = __webpack_require__(43).default;
        module.exports = __webpack_require__(43);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(4);
        var style0 = __webpack_require__(142);
var injectStyles = [{exportAs: undefined, style: style0}];

        var template = __webpack_require__(144);
        
        var script = __webpack_require__(44).default;
        module.exports = __webpack_require__(44);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(4);
        var style0 = __webpack_require__(145);
var injectStyles = [{exportAs: undefined, style: style0}];

        var template = __webpack_require__(147);
        
        var script = __webpack_require__(45).default;
        module.exports = __webpack_require__(45);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(4);
        var style0 = __webpack_require__(148);
var injectStyles = [{exportAs: undefined, style: style0}];

        var template = __webpack_require__(150);
        
        var script = __webpack_require__(46).default;
        module.exports = __webpack_require__(46);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(4);
        var style0 = __webpack_require__(151);
var injectStyles = [{exportAs: undefined, style: style0}];

        var template = __webpack_require__(153);
        
        var script = __webpack_require__(47).default;
        module.exports = __webpack_require__(47);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(75);


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {


        var normalize = __webpack_require__(4);
        var style0 = __webpack_require__(76);
var injectStyles = [{exportAs: undefined, style: style0}];

        var template = __webpack_require__(78);
        
        var script = __webpack_require__(24).default;
        module.exports = __webpack_require__(24);
    
        module.exports.default = normalize(script, template, injectStyles);
        /* san-hmr component */
    

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(77);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(3)["default"]
var update = add("57ea02c2", content, true, {"manualInject":true});

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".card-custom_RDatC .cosc-card-shadow::after{border-color:rgba(0,200,200,.18)}.link-no-underline_3k3Pl:hover{text-decoration:none!important}.recommend-info_4FUVS{padding-bottom:.135rem}.main-title_5LLQv{margin-bottom:0!important;padding-bottom:.15rem}.cos-pc .main-title_5LLQv{padding-bottom:0}.default-dark-btn-wrapper_1MZfB{color:#d2d2d2!important}.image-vr-wrapper_6lz1M{width:100%;height:2.09rem}.inner-vr-wrapper_2dOJA{position:relative;display:block;width:100%;height:2.09rem;border-radius:.09rem;-webkit-background-size:100% 100%;background-size:100% 100%;background-repeat:no-repeat}.inner-vr-wrapper_2dOJA .vr-icon-tip_yax6X{width:.78rem;height:.28rem;background:rgba(0,0,0,.2);border-radius:.14rem;position:absolute;top:calc(50% - .14rem);left:calc(50% - .39rem);-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-flex-wrap:nowrap;flex-wrap:nowrap}.inner-vr-wrapper_2dOJA .vr-icon-tip_yax6X .icon_erWeS{width:.17rem;height:.17rem;background-image:url(https://youjia.cdn.bcebos.com/carFullViewVrIcon.png);background-repeat:no-repeat;-webkit-background-size:100% 100%;background-size:100% 100%;margin-right:.05rem}.inner-vr-wrapper_2dOJA .vr-icon-tip_yax6X .text_GmYYT{font-family:PingFangSC-Regular;font-size:.12rem;color:#fff;letter-spacing:0;line-height:.28rem;font-weight:400}.model-info_5rqCV{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-top:var(--cos-space-md);line-height:1}.model-info_5rqCV .model-name_5VJML{display:block;-webkit-box-orient:inline-axis;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:var(--cos-font-medium);-webkit-text-stroke:var(--cos-font-medium-stroke);font-family:PingFang SC,Arial,sans-serif;font-size:var(--cos-text-subtitle)}.model-info_5rqCV .model-more_1zR1Z{margin-left:var(--cos-space-xxs);-webkit-box-flex:0;-webkit-flex:0 0 auto;flex:0 0 auto}.model-info_5rqCV .model-more_1zR1Z .model-more-a_7iFGX{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#858585}.model-info_5rqCV .model-more_1zR1Z .model-more-a_7iFGX .model-more-icon_5BSv2{font-size:var(--cos-text-subtitle)}", ""]);
// Exports
exports.locals = {
	"card-custom": "card-custom_RDatC",
	"cardCustom": "card-custom_RDatC",
	"link-no-underline": "link-no-underline_3k3Pl",
	"linkNoUnderline": "link-no-underline_3k3Pl",
	"recommend-info": "recommend-info_4FUVS",
	"recommendInfo": "recommend-info_4FUVS",
	"main-title": "main-title_5LLQv",
	"mainTitle": "main-title_5LLQv",
	"default-dark-btn-wrapper": "default-dark-btn-wrapper_1MZfB",
	"defaultDarkBtnWrapper": "default-dark-btn-wrapper_1MZfB",
	"image-vr-wrapper": "image-vr-wrapper_6lz1M",
	"imageVrWrapper": "image-vr-wrapper_6lz1M",
	"inner-vr-wrapper": "inner-vr-wrapper_2dOJA",
	"innerVrWrapper": "inner-vr-wrapper_2dOJA",
	"vr-icon-tip": "vr-icon-tip_yax6X",
	"vrIconTip": "vr-icon-tip_yax6X",
	"icon": "icon_erWeS",
	"text": "text_GmYYT",
	"model-info": "model-info_5rqCV",
	"modelInfo": "model-info_5rqCV",
	"model-name": "model-name_5VJML",
	"modelName": "model-name_5VJML",
	"model-more": "model-more_1zR1Z",
	"modelMore": "model-more_1zR1Z",
	"model-more-a": "model-more-a_7iFGX",
	"modelMoreA": "model-more-a_7iFGX",
	"model-more-icon": "model-more-icon_5BSv2",
	"modelMoreIcon": "model-more-icon_5BSv2"
};
module.exports = exports;


/***/ }),
/* 78 */
/***/ (function(module, exports) {

// Module
var code = [1,"div",6,2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",null,3,"\n        ",1,"default-card",2,38,6,2,3,"defaultData",3,"isCardType",42,6,1,3,"defaultData",1,1,"div",9,2,"data-ucfg",6,2,3,"ubcData",3,"dataUcfg",2,"data-ushow",6,2,3,"ubcData",3,"dataUbcShow",2,"data-uclk",6,2,3,"ubcData",3,"dataUbcClk",33,"ubc-show",3,"",33,"ubc-clk",3,"",40,null,3,"\n            ",1,"cos-card",15,2,"class",7,null,12,6,1,3,"pcFreshWrapper",6,2,3,"$style",3,"card-custom",3,"",1,8,6,1,3,"_class",null,2,"link-info",6,2,3,"baseInfo",3,"cardParamsCos",2,"tpl-info",6,1,3,"tplInfo",2,"shadow",10,76,6,1,3,"isPc",10,76,6,1,3,"tplInfo",6,1,3,"isFirst",33,"touchable",3,"",2,"light-bg",6,2,3,"fieldsData",3,"bgProps",null,3,"\n                \n                ",1,"car-header-cosmic",10,2,"is-pc",6,1,3,"isPc",2,"is-first",6,1,3,"isFirst",2,"is-first-adv",6,1,3,"isFirstAdv",33,"is-space-bottom-none",3,"",2,"tpl-info",6,1,3,"tplInfo",2,"main-title",6,2,3,"baseInfo",3,"mainTitle",2,"sub-title",6,2,3,"baseInfo",3,"subTitle",2,"recommend-info",6,2,3,"baseInfo",3,"recommendInfo",2,"ubc-public",6,2,3,"ubcData",3,"ubcPublic",2,"fields-data",6,1,3,"fieldsData",null,3,"\n\n                ",1,"fragment",8,38,11,33,6,1,3,"isPc",null,3,"\n                    \n                    ",1,"div",5,2,"class",3,"cos-space-mt-md",38,10,76,6,1,3,"isFirst",10,76,10,183,6,1,3,"queryChoose",3,"外观",6,2,3,"compInfo",3,"outerVrShow",null,3,"\n                        ",1,"image-vr",6,2,"outer-vr-info",6,2,3,"compInfo",3,"outerVrInfo",2,"ubc-public",6,2,3,"ubcData",3,"ubcPublic",2,"tpl-info",6,1,3,"tplInfo",2,"ubc-moudle",3,"big",2,"is-pc",6,1,3,"isPc",2,"class",7,null,6,2,3,"$style",3,"image-vr-wrapper",1,8,6,1,3,"_class",null,null,3,"\n                    ",null,null,3,"\n                    ",1,"div",5,2,"class",3,"cos-space-mt-md",38,10,76,6,1,3,"isFirst",10,76,10,155,6,1,3,"queryChoose",3,"外观",6,2,3,"vrInfo",3,"isShow",null,3,"\n                        ",1,"div",8,2,"rl-type",3,"stop",2,"data-ushow",7,null,13,1,14,3,"module",3,"inner_vr_big",1,8,6,1,3,"json",null,2,"data-uclk",7,null,13,1,14,3,"module",3,"inner_vr_big",1,8,6,1,3,"json",null,33,"ubc-show",3,"",33,"ubc-clk",3,"",null,3,"\n                            ",1,"div",7,2,"style",7,null,13,1,14,3,"background-image",10,43,10,43,3,"url(",6,2,3,"vrInfo",3,"imgSrc",3,")",1,8,6,1,3,"_style",null,2,"class",7,null,6,2,3,"$style",3,"inner-vr-wrapper",1,8,6,1,3,"_class",null,45,12,10,76,6,2,3,"vrInfo",3,"urlParams",6,3,3,"vrInfo",3,"urlParams",3,"href",3,"a",3,"div",42,6,2,3,"vrInfo",3,"urlParams",null,3,"\n                                \n                                ",1,"span",6,2,"class",7,null,6,2,3,"$style",3,"vr-icon-tip",1,8,6,1,3,"_class",null,null,3,"\n                                    ",1,"span",1,2,"class",7,null,6,2,3,"$style",3,"icon",1,8,6,1,3,"_class",null,null,3,"\n                                    ",1,"span",2,2,"class",7,null,6,2,3,"$style",3,"text",1,8,6,1,3,"_class",null,null,3,"VR内饰",null,3,"\n                                ",null,3,"\n                            ",null,3,"\n                        ",null,3,"\n                    ",null,null,3,"\n                    \n                    ",1,"div",7,2,"class",7,null,6,2,3,"$style",3,"model-info",1,8,6,1,3,"_class",null,38,10,76,6,1,3,"currentModelName",10,60,6,2,3,"tplInfo",3,"order",4,6,null,3,"\n                        ",1,"p",2,2,"class",7,null,6,2,3,"$style",3,"model-name",1,8,6,1,3,"_class",null,null,9,null,3,3,"\n                            ",7,null,6,1,3,"currentModelName",null,3,"\n                        ",null,3,"\n                        ",1,"div",5,2,"rl-type",3,"stop",2,"class",7,null,6,2,3,"$style",3,"model-more",1,8,6,1,3,"_class",null,null,3,"\n                            ",1,"div",12,2,"data-ushow",7,null,13,1,14,3,"module",3,"more_model",1,8,6,1,3,"json",null,2,"data-uclk",7,null,13,1,14,3,"module",3,"more_model",1,8,6,1,3,"json",null,33,"ubc-show",3,"",33,"ubc-clk",3,"",2,"class",7,null,6,2,3,"$style",3,"model-more-a",1,8,6,1,3,"_class",null,45,12,10,76,6,1,3,"currentModelParams",6,2,3,"currentModelParams",3,"href",3,"a",3,"div",42,6,1,3,"currentModelParams",null,3,"\n                                ",1,"span",1,null,3,"更多车型",null,3,"\n                                ",1,"cos-icon",2,2,"name",3,"right",2,"class",7,null,6,2,3,"$style",3,"model-more-icon",1,8,6,1,3,"_class",null,null,3,"\n                            ",null,3,"\n                        ",null,3,"\n                    ",null,null,3,"\n                ",1,1,"fragment",4,40,null,3,"\n                    ",1,"div",5,2,"class",3,"cos-space-mt-md",38,10,76,6,1,3,"isFirst",10,248,6,2,3,"compInfo",3,"outerVrShow",6,2,3,"vrInfo",3,"isShow",null,3,"\n                        ",1,"vrimg-two",8,2,"is-first",6,1,3,"isFirst",2,"tpl-info",6,1,3,"tplInfo",2,"query-choose",6,1,3,"queryChoose",2,"outer-vr-info",6,2,3,"compInfo",3,"outerVrInfo",2,"vr-info",6,1,3,"vrInfo",2,"tab-item",6,2,3,"tabList",6,1,3,"queryChooseTabIdx",2,"ubc-public",6,2,3,"ubcData",3,"ubcPublic",2,"ubc-moudle",3,"big",null,3,"\n                    ",null,null,3,"\n                ",null,3,"\n\n                ",1,"div",5,2,"class",7,null,12,10,62,6,2,3,"tabList",3,"length",4,1,3,"cos-space-mt-md",3,"cos-space-mt-3xs",1,8,6,1,3,"_class",null,38,6,2,3,"tabList",3,"length",null,3,"\n                    ",1,"image-tab",9,2,"is-pc",6,1,3,"isPc",2,"is-first",6,1,3,"isFirst",2,"tpl-info",6,1,3,"tplInfo",2,"tab-list",6,1,3,"tabList",2,"comp-info",6,1,3,"compInfo",2,"vr-info",6,1,3,"vrInfo",2,"query-choose-tab-idx",6,1,3,"queryChooseTabIdx",2,"query-choose",6,1,3,"queryChoose",2,"ubc-public",6,2,3,"ubcData",3,"ubcPublic",null,3,"\n                ",null,null,3,"\n\n                \n                ",1,"footer",3,null,3,"\n                    ",1,"car-source-cosmic",8,2,"is-pc",6,1,3,"isPc",2,"is-first",6,1,3,"isFirst",2,"is-baozhang",6,1,3,"isBaozhang",2,"tpl-info",6,1,3,"tplInfo",2,"source-data",6,2,3,"baseInfo",3,"sourceData",2,"source-url",6,2,3,"baseInfo",3,"sourceUrl",2,"source-params",6,2,3,"baseInfo",3,"cardParamsCos",2,"ubc-public",6,2,3,"ubcData",3,"ubcPublic",null,3,"\n                ",null,3,"\n            ",null,3,"\n        ",null,3,"\n    "];
// Exports
module.exports = code;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(80);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(3)["default"]
var update = add("2dd66ce4", content, true, {"manualInject":true});

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".my-header-cos_2WJ8s{--header-pb:var(--cos-space-md);position:relative;margin:-.21rem -12px var(--cos-space-none);padding:var(--cos-space-xl) var(--cos-space-sm) var(--header-pb)}.cos-fresh .my-header-cos_2WJ8s{margin:-.18rem -17px var(--cos-space-none);padding:var(--cos-space-lg) 17px var(--header-pb)}.my-header-cos_2WJ8s.my-header-cos-pb-none_5L2gs{padding-bottom:var(--cos-space-none)}.my-header-cos_2WJ8s.my-header-cos-pb-none_5L2gs .header-bg_1t0Gv{height:calc(100% + var(--header-pb))}.my-header-cos_2WJ8s .header-content_2Wusq{position:relative;z-index:1}.my-header-cos_2WJ8s .header-bg_1t0Gv{position:absolute;top:1px;left:0;z-index:0;width:100%;height:100%;background-image:var(--bg-img);background-repeat:no-repeat;-webkit-background-size:100% auto;background-size:100% auto;border-radius:var(--cos-rounded-md) var(--cos-rounded-md) var(--cos-rounded-none) var(--cos-rounded-none)}.cos-fresh .my-header-cos_2WJ8s .header-bg_1t0Gv{top:0}.cos-wise .c-darkmode .my-header-cos_2WJ8s .header-bg_1t0Gv{background-image:var(--bg-img-dark)}@media (prefers-color-scheme:dark){.cos-wise .my-header-cos_2WJ8s .header-bg_1t0Gv{background-image:var(--bg-img-dark)}}.cos-fresh .my-header-cos_2WJ8s .header-bg_1t0Gv{top:0}.cos-fresh .my-header-cos_2WJ8s .header-bg_1t0Gv.header-bg-first-adv_7KabH{border-radius:var(--cos-rounded-none)}.my-header-cos_2WJ8s .header-bg_1t0Gv.header-bg-higher_KNzd9{height:120px;-webkit-background-size:100% 100%;background-size:100% 100%}", ""]);
// Exports
exports.locals = {
	"my-header-cos": "my-header-cos_2WJ8s",
	"myHeaderCos": "my-header-cos_2WJ8s",
	"my-header-cos-pb-none": "my-header-cos-pb-none_5L2gs",
	"myHeaderCosPbNone": "my-header-cos-pb-none_5L2gs",
	"header-bg": "header-bg_1t0Gv",
	"headerBg": "header-bg_1t0Gv",
	"header-content": "header-content_2Wusq",
	"headerContent": "header-content_2Wusq",
	"header-bg-first-adv": "header-bg-first-adv_7KabH",
	"headerBgFirstAdv": "header-bg-first-adv_7KabH",
	"header-bg-higher": "header-bg-higher_KNzd9",
	"headerBgHigher": "header-bg-higher_KNzd9"
};
module.exports = exports;


/***/ }),
/* 81 */
/***/ (function(module, exports) {

// Module
var code = [1,"div",6,2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",null,3,"\n        \n        ",1,"fragment",4,38,11,33,6,1,3,"isPc",null,3,"\n            \n            ",1,"div",9,2,"data-uclk",7,null,13,1,14,3,"module",3,"title",1,8,6,1,3,"json",null,33,"ubc-clk",3,"",2,"class",7,null,16,2,17,6,2,3,"$style",3,"my-header-cos",17,12,6,1,3,"isSpaceBottomNone",6,2,3,"$style",3,"my-header-cos-pb-none",3,"",1,8,6,1,3,"_class",null,38,10,76,6,1,3,"isFirst",6,1,3,"isFirstShow",null,3,"\n                ",1,"div",4,2,"class",7,null,6,2,3,"$style",3,"header-content",1,8,6,1,3,"_class",null,null,3,"\n                    \n                    ",1,"header-con-bigimg",10,2,"is-first",6,1,3,"isFirst",2,"is-logo-show",6,1,3,"isLogoShow",2,"tpl-info",6,1,3,"tplInfo",2,"logo-params",6,1,3,"headerUrl",2,"recommend-info",6,1,3,"recommendInfo",2,"main-title",6,1,3,"mainTitle",2,"sub-title",6,1,3,"subTitle",2,"live-info",6,1,3,"liveInfo",2,"fields-data",6,1,3,"fieldsData",38,6,2,3,"fieldsData",3,"bigImgType",1,1,"header-con",12,2,"is-first",6,1,3,"isFirst",2,"has-color",6,1,3,"hasColor",2,"is-logo-show",6,1,3,"isLogoShow",2,"is-entry-height",6,1,3,"isEntryHeight",2,"tpl-info",6,1,3,"tplInfo",2,"logo-params",6,1,3,"headerUrl",2,"recommend-info",6,1,3,"recommendInfo",2,"main-title",6,1,3,"mainTitle",2,"sub-title",6,1,3,"subTitle",2,"live-info",6,1,3,"liveInfo",2,"fields-data",6,1,3,"fieldsData",40,null,3,"\n                ",null,3,"\n                \n                ",1,"div",3,2,"style",9,null,5,3,"--bg-img: ",7,null,10,43,10,43,3,"url(",6,2,3,"fieldsData",3,"bgImg",3,")",1,8,6,1,3,"_style",null,3,";\n                            --bg-img-dark: ",7,null,12,6,2,3,"fieldsData",3,"bgImgDark",10,43,10,43,3,"url(",6,2,3,"fieldsData",3,"bgImgDark",3,")",10,43,10,43,3,"url(",6,2,3,"fieldsData",3,"bgImg",3,")",1,8,6,1,3,"_style",null,3,";",2,"class",7,null,16,3,17,6,2,3,"$style",3,"header-bg",17,12,6,1,3,"isFirstAdv",6,2,3,"$style",3,"header-bg-first-adv",3,"",17,12,10,183,6,2,3,"tplInfo",3,"tplname",3,"car_kg2_san",6,2,3,"$style",3,"header-bg-higher",3,"",1,8,6,1,3,"_class",null,38,6,1,3,"isBgImage",null,null,3,"\n            ",1,1,"div",7,2,"data-uclk",7,null,13,1,14,3,"module",3,"title",1,8,6,1,3,"json",null,33,"ubc-clk",3,"",2,"class",7,null,12,6,1,3,"isSpaceBottomNone",3,"",3,"cos-space-mb-md",1,8,6,1,3,"_class",null,40,null,3,"\n                ",1,"header-con",10,2,"is-first",6,1,3,"isFirst",2,"is-first-show",6,1,3,"isFirstShow",2,"is-logo-show",6,1,3,"isLogoShow",2,"tpl-info",6,1,3,"tplInfo",2,"logo-params",6,1,3,"headerUrl",2,"recommend-info",6,1,3,"recommendInfo",2,"main-title",6,1,3,"mainTitle",2,"sub-title",6,1,3,"subTitle",2,"live-info",6,1,3,"liveInfo",2,"fields-data",6,1,3,"fieldsData",null,3,"\n            ",null,3,"\n        ",1,1,"fragment",4,40,null,3,"\n            \n            ",1,"div",6,2,"data-uclk",7,null,13,1,14,3,"module",3,"title",1,8,6,1,3,"json",null,33,"ubc-clk",3,"",38,10,76,6,1,3,"isFirst",6,1,3,"isFirstShow",null,3,"\n                ",1,"div",4,2,"class",7,null,6,2,3,"$style",3,"header-content",1,8,6,1,3,"_class",null,null,3,"\n                    ",1,"header-con-pc",9,2,"is-first",6,1,3,"isFirst",2,"is-logo-show",6,1,3,"isLogoShow",2,"tpl-info",6,1,3,"tplInfo",2,"logo-params",6,1,3,"headerUrl",2,"recommend-info",6,1,3,"recommendInfo",2,"main-title",6,1,3,"mainTitle",2,"sub-title",6,1,3,"subTitle",2,"live-info",6,1,3,"liveInfo",2,"fields-data",6,1,3,"fieldsData",null,3,"\n                ",null,3,"\n            ",1,1,"div",7,2,"data-uclk",7,null,13,1,14,3,"module",3,"title",1,8,6,1,3,"json",null,33,"ubc-clk",3,"",2,"class",7,null,12,6,1,3,"isSpaceBottomNone",3,"",3,"cos-space-mb-md",1,8,6,1,3,"_class",null,40,null,3,"\n                ",1,"header-con-pc",9,2,"is-first",6,1,3,"isFirst",2,"is-first-show",6,1,3,"isFirstShow",2,"is-logo-show",6,1,3,"isLogoShow",2,"tpl-info",6,1,3,"tplInfo",2,"recommend-info",6,1,3,"recommendInfo",2,"main-title",6,1,3,"mainTitle",2,"sub-title",6,1,3,"subTitle",2,"live-info",6,1,3,"liveInfo",2,"fields-data",6,1,3,"fieldsData",null,3,"\n            ",null,3,"\n        ",null,3,"\n    "];
// Exports
module.exports = code;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(83);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(3)["default"]
var update = add("b7119cc8", content, true, {"manualInject":true});

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".header-prompt_a1apb{margin-top:var(--cos-space-md);font-weight:var(--cos-font-regular);-webkit-text-stroke:0;font-family:PingFang SC,Arial,sans-serif;font-size:var(--cos-text-subtitle-sm);line-height:var(--cos-leading-subtitle-sm);color:var(--cos-color-text-minor)}.header-prompt_a1apb>p{margin:-4px var(--cos-space-none)}.my-new-kg-title_6eXRi{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin-top:var(--cos-space-none);padding-top:var(--cos-space-xl);-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end;width:100%}.my-new-kg-title_6eXRi.my-new-kg-title-living_7GTJH{-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-top:var(--cos-space-3xl)}.my-new-kg-title_6eXRi .my-head-props_41dQD{-webkit-box-flex:1;-webkit-flex:1 1 auto;flex:1 1 auto;overflow:hidden}.my-new-kg-title_6eXRi .my-head-props_41dQD .header-title_7MiEn{display:-webkit-box;display:-webkit-flex;display:flex;margin:var(--cos-space-none)}.my-new-kg-title_6eXRi .my-head-props_41dQD .header-title_7MiEn>span{display:block;-webkit-box-orient:inline-axis;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin:-2px var(--cos-space-none) -3px}.my-new-kg-title_6eXRi .my-head-props_41dQD .header-abstract_2UK8H{margin-top:var(--cos-space-xs);font-weight:var(--cos-font-regular);-webkit-text-stroke:0;font-family:PingFang SC,Arial,sans-serif;font-size:var(--cos-text-subtitle-sm);line-height:var(--cos-leading-subtitle-sm);color:var(--cos-color-text-minor)}.my-new-kg-title_6eXRi .my-head-props_41dQD .header-abstract_2UK8H>p{margin:-3px var(--cos-space-none)}.my-new-kg-title_6eXRi .my-entry-wrapper_20xvv{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-left:var(--cos-space-3xs);-webkit-box-flex:0;-webkit-flex:0 0 auto;flex:0 0 auto;height:50px}.my-new-kg-title_6eXRi .my-entry-wrapper_20xvv.my-entry-wrapper-living_3g28b{height:0}.my-new-kg-title_6eXRi .my-entry-wrapper_20xvv .my-entry-con_2ErOM .my-head-logo_JadJH .logo-img_1n376{margin-bottom:-9px;height:80px}", ""]);
// Exports
exports.locals = {
	"header-prompt": "header-prompt_a1apb",
	"headerPrompt": "header-prompt_a1apb",
	"my-new-kg-title": "my-new-kg-title_6eXRi",
	"myNewKgTitle": "my-new-kg-title_6eXRi",
	"my-new-kg-title-living": "my-new-kg-title-living_7GTJH",
	"myNewKgTitleLiving": "my-new-kg-title-living_7GTJH",
	"my-head-props": "my-head-props_41dQD",
	"myHeadProps": "my-head-props_41dQD",
	"header-title": "header-title_7MiEn",
	"headerTitle": "header-title_7MiEn",
	"header-abstract": "header-abstract_2UK8H",
	"headerAbstract": "header-abstract_2UK8H",
	"my-entry-wrapper": "my-entry-wrapper_20xvv",
	"myEntryWrapper": "my-entry-wrapper_20xvv",
	"my-entry-wrapper-living": "my-entry-wrapper-living_3g28b",
	"myEntryWrapperLiving": "my-entry-wrapper-living_3g28b",
	"my-entry-con": "my-entry-con_2ErOM",
	"myEntryCon": "my-entry-con_2ErOM",
	"my-head-logo": "my-head-logo_JadJH",
	"myHeadLogo": "my-head-logo_JadJH",
	"logo-img": "logo-img_1n376",
	"logoImg": "logo-img_1n376"
};
module.exports = exports;


/***/ }),
/* 84 */
/***/ (function(module, exports) {

// Module
var code = [1,"div",8,2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_xclass",1,7,null,6,2,3,"$style",3,"header-con",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",null,3,"\n        \n        ",1,"div",6,2,"class",7,null,16,2,17,6,2,3,"$style",3,"my-new-kg-title",17,12,6,1,3,"isStatusTag",6,2,3,"$style",3,"my-new-kg-title-living",3,"",1,8,6,1,3,"_class",null,null,3,"\n            \n            ",1,"div",6,2,"class",7,null,6,2,3,"$style",3,"my-head-props",1,8,6,1,3,"_class",null,null,3,"\n                ",1,"cosc-title",6,2,"class",7,null,6,2,3,"$style",3,"header-title",1,8,6,1,3,"_class",null,2,"link-info",6,1,3,"logoParams",38,6,1,3,"mainTitle",null,3,"\n                    \n                    ",1,"span",2,2,"class",3,"cos-color-text",null,7,1,6,1,3,"mainTitle",null,null,3,"\n                ",null,null,3,"\n                ",1,"div",5,2,"class",7,null,6,2,3,"$style",3,"header-abstract",1,8,6,1,3,"_class",null,38,6,1,3,"subTitle",null,3,"\n                    ",1,"p",2,2,"class",3,"cos-line-clamp-1",null,9,1,3,3,"\n                        \n                        ",7,1,6,1,3,"subTitle",null,3,"\n                    ",null,3,"\n                ",null,null,3,"\n            ",null,3,"\n            \n            ",1,"div",5,2,"class",7,null,16,2,17,6,2,3,"$style",3,"my-entry-wrapper",17,12,6,1,3,"isStatusTag",6,2,3,"$style",3,"my-entry-wrapper-living",3,"",1,8,6,1,3,"_class",null,38,10,60,6,2,3,"tplInfo",3,"order",4,6,null,3,"\n                ",1,"div",4,2,"class",7,null,6,2,3,"$style",3,"my-entry-con",1,8,6,1,3,"_class",null,null,3,"\n                    ",1,"fragment",4,38,6,1,3,"isStatusTag",null,3,"\n                        ",1,"status-tag-header",4,2,"is-first",6,1,3,"isFirst",2,"live-info",6,1,3,"liveInfo",2,"live-experiment",6,2,3,"liveInfo",3,"liveExperiment",2,"url-params",12,10,183,6,2,3,"liveInfo",3,"liveExperiment",3,"1",6,2,3,"liveInfo",3,"liveParams",12,10,248,10,183,6,2,3,"liveInfo",3,"liveExperiment",3,"2",10,183,6,2,3,"liveInfo",3,"liveExperiment",3,"3",6,2,3,"liveInfo",3,"imageParams",3,"",null,3,"\n                    ",1,1,"fragment",4,40,null,3,"\n                        ",1,"div",7,2,"data-uclk",7,null,13,1,14,3,"module",3,"title_logo",1,8,6,1,3,"json",null,33,"ubc-clk",3,"",2,"class",7,null,6,2,3,"$style",3,"my-head-logo",1,8,6,1,3,"_class",null,38,6,1,3,"isLogoShow",null,3,"\n                            ",1,"img",2,2,"src",6,2,3,"fieldsData",3,"whiteImg",2,"class",7,null,6,2,3,"$style",3,"logo-img",1,8,6,1,3,"_class",null,null,3,"\n                        ",null,null,3,"\n                    ",null,3,"\n                ",null,3,"\n            ",null,null,3,"\n        ",null,3,"\n        \n        ",1,"div",5,2,"class",7,null,6,2,3,"$style",3,"header-prompt",1,8,6,1,3,"_class",null,38,6,1,3,"recommendInfo",null,3,"\n            ",1,"p",2,2,"class",3,"cos-line-clamp-1",null,9,null,3,3,"\n                ",7,null,6,1,3,"recommendInfo",null,3,"\n            ",null,3,"\n        ",null,null,3,"\n    "];
// Exports
module.exports = code;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(86);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(3)["default"]
var update = add("08361b3f", content, true, {"manualInject":true});

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".living-area_5Dj9Z{color:var(--cos-color-text);position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:.08rem .12rem;min-width:.99rem;height:.3rem;background-color:#fff;border-radius:.3rem;font-family:PingFang SC;-webkit-box-sizing:border-box;box-sizing:border-box}.living-area_5Dj9Z.living-area-frist_1xGiF{-webkit-box-shadow:0 .02rem .08rem rgba(0,0,0,.02);box-shadow:0 .02rem .08rem rgba(0,0,0,.02)}.living-area_5Dj9Z.living-area-frist_1xGiF.living-area-big-img_1DjBn{bottom:-.015rem}.living-area_5Dj9Z.living-area-frist_1xGiF.living-area-big-img_1DjBn.living-area-prompt_6Q9GN{bottom:0}.living-area_5Dj9Z.living-area-frist-after_41ltI{background-color:#f5f6fa}.living-area_5Dj9Z .living-icon_1pCmI{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin-right:.06rem}@-webkit-keyframes lineChange_3hM80{0%{-webkit-transform:scaleY(.3);transform:scaleY(.3)}25%{-webkit-transform:scaleY(.7);transform:scaleY(.7)}50%{-webkit-transform:scaleY(1);transform:scaleY(1)}to{-webkit-transform:scaleY(.3);transform:scaleY(.3)}}@keyframes lineChange_3hM80{0%{-webkit-transform:scaleY(.3);transform:scaleY(.3)}25%{-webkit-transform:scaleY(.7);transform:scaleY(.7)}50%{-webkit-transform:scaleY(1);transform:scaleY(1)}to{-webkit-transform:scaleY(.3);transform:scaleY(.3)}}.living-area_5Dj9Z .living-icon_1pCmI .live-line_5z3cX{width:.02rem;height:.1rem;margin-left:.02rem;background-color:#ee0444;-webkit-animation:lineChange_3hM80 680ms linear infinite;animation:lineChange_3hM80 680ms linear infinite}.living-area_5Dj9Z .living-icon_1pCmI .live-line_5z3cX:first-of-type{margin-left:0;-webkit-transform:scaleY(.8);transform:scaleY(.8);-webkit-animation-delay:-340ms;animation-delay:-340ms}.living-area_5Dj9Z .living-icon_1pCmI .live-line_5z3cX:nth-child(2){-webkit-animation-delay:-170ms;animation-delay:-170ms;-webkit-transform:scaleY(.4);transform:scaleY(.4)}.living-area_5Dj9Z .living-icon_1pCmI .live-line_5z3cX:last-of-type{-webkit-transform:scaleY(.6);transform:scaleY(.6)}.living-area_5Dj9Z .living-text_4kBxP{font-weight:500}.living-area_5Dj9Z .model-icon_HC7db{margin-right:.06rem}", ""]);
// Exports
exports.locals = {
	"living-area": "living-area_5Dj9Z",
	"livingArea": "living-area_5Dj9Z",
	"living-area-frist": "living-area-frist_1xGiF",
	"livingAreaFrist": "living-area-frist_1xGiF",
	"living-area-big-img": "living-area-big-img_1DjBn",
	"livingAreaBigImg": "living-area-big-img_1DjBn",
	"living-area-prompt": "living-area-prompt_6Q9GN",
	"livingAreaPrompt": "living-area-prompt_6Q9GN",
	"living-area-frist-after": "living-area-frist-after_41ltI",
	"livingAreaFristAfter": "living-area-frist-after_41ltI",
	"living-icon": "living-icon_1pCmI",
	"livingIcon": "living-icon_1pCmI",
	"live-line": "live-line_5z3cX",
	"liveLine": "live-line_5z3cX",
	"lineChange": "lineChange_3hM80",
	"living-text": "living-text_4kBxP",
	"livingText": "living-text_4kBxP",
	"model-icon": "model-icon_HC7db",
	"modelIcon": "model-icon_HC7db"
};
module.exports = exports;


/***/ }),
/* 87 */
/***/ (function(module, exports) {

// Module
var code = [1,"div",11,2,"rl-type",3,"stop",2,"data-ushow",6,1,3,"imageUclk",2,"data-uclk",6,1,3,"imageUclk",33,"ubc-show",3,"",33,"ubc-clk",3,"",2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",null,3,"\n        ",1,"div",8,2,"class",7,null,16,6,17,3,"cos-link",17,3,"cos-color-text",17,6,2,3,"$style",3,"living-area",17,12,6,1,3,"isFirst",6,2,3,"$style",3,"living-area-frist",6,2,3,"$style",3,"living-area-frist-after",17,12,6,1,3,"isBigImgIcon",6,2,3,"$style",3,"living-area-big-img",3,"",17,12,6,1,3,"recommendInfo",6,2,3,"$style",3,"living-area-prompt",3,"",1,8,6,1,3,"_class",null,45,12,6,2,3,"urlParams",3,"href",3,"a",3,"div",42,6,1,3,"urlParams",null,3,"\n            ",1,"fragment",6,38,10,183,6,1,3,"liveExperiment",3,"1",null,3,"\n                ",1,"div",8,2,"class",7,null,6,2,3,"$style",3,"living-icon",1,8,6,1,3,"_class",null,null,3,"\n                    ",1,"div",1,2,"class",7,null,6,2,3,"$style",3,"live-line",1,8,6,1,3,"_class",null,null,3,"\n                    ",1,"div",1,2,"class",7,null,6,2,3,"$style",3,"live-line",1,8,6,1,3,"_class",null,null,3,"\n                    ",1,"div",1,2,"class",7,null,6,2,3,"$style",3,"live-line",1,8,6,1,3,"_class",null,null,3,"\n                ",null,3,"\n                ",1,"div",2,2,"class",9,null,2,3,"cos-line-clamp-1 ",7,null,6,2,3,"$style",3,"living-text",1,8,6,1,3,"_class",null,null,3,"\n                    直播讲解\n                ",null,3,"\n            ",null,null,3,"\n            ",1,"fragment",6,38,10,248,10,183,6,1,3,"liveExperiment",3,"2",10,183,6,1,3,"liveExperiment",3,"3",null,3,"\n                ",1,"cos-icon",2,2,"name",3,"image-fill",2,"class",7,null,6,2,3,"$style",3,"model-icon",1,8,6,1,3,"_class",null,null,3,"\n                ",1,"div",2,2,"class",3,"cos-line-clamp-1",null,3,"\n                    车型图片\n                ",null,3,"\n            ",null,null,3,"\n        ",null,3,"\n    "];
// Exports
module.exports = code;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(89);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(3)["default"]
var update = add("6e2b0a90", content, true, {"manualInject":true});

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".header-prompt_5CvB9{margin-top:var(--cos-space-md);font-weight:var(--cos-font-regular);-webkit-text-stroke:0;font-family:PingFang SC,Arial,sans-serif;font-size:var(--cos-text-subtitle-sm);line-height:var(--cos-leading-subtitle-sm);color:var(--cos-color-text-minor)}.header-prompt_5CvB9>p{margin:-4px var(--cos-space-none)}.my-new-kg-title_3G5Ye{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.my-new-kg-title_3G5Ye .my-head-props_2K0CI{-webkit-box-flex:1;-webkit-flex:1 1 auto;flex:1 1 auto;overflow:hidden}.my-new-kg-title_3G5Ye .my-head-props_2K0CI .header-title_6k7O6{display:-webkit-box;display:-webkit-flex;display:flex;margin:var(--cos-space-none)}.my-new-kg-title_3G5Ye .my-head-props_2K0CI .header-title_6k7O6>span{display:block;-webkit-box-orient:inline-axis;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin:-2px var(--cos-space-none) -3px}.my-new-kg-title_3G5Ye .my-head-props_2K0CI .header-abstract_5Xm2P{margin-top:var(--cos-space-xs);font-weight:var(--cos-font-regular);-webkit-text-stroke:0;font-family:PingFang SC,Arial,sans-serif;font-size:var(--cos-text-subtitle-sm);line-height:var(--cos-leading-subtitle-sm);color:var(--cos-color-text-minor)}.my-new-kg-title_3G5Ye .my-head-props_2K0CI .header-abstract_5Xm2P>p{margin:-3px var(--cos-space-none)}.my-new-kg-title_3G5Ye .my-entry-wrapper_6DBgq{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-left:var(--cos-space-xxs);-webkit-box-flex:0;-webkit-flex:0 0 auto;flex:0 0 auto;height:0}.my-new-kg-title_3G5Ye .my-entry-wrapper_6DBgq.my-entry-wrapper-height_7LLqG{height:auto}.my-new-kg-title_3G5Ye .my-entry-wrapper_6DBgq .my-entry-con_5xphI .white-logo_6gFlw>img{padding-top:var(--cos-space-xxs);height:80px}.my-new-kg-title_3G5Ye .my-entry-wrapper_6DBgq .my-entry-con_5xphI .my-head-logo_2cYpn{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-radius:var(--cos-rounded-full);padding:var(--cos-space-3xs) var(--cos-space-sm);min-height:30px;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#e1f6f6;-webkit-box-shadow:0 2px 8px rgba(0,0,0,.02);box-shadow:0 2px 8px rgba(0,0,0,.02)}.cos-wise .c-darkmode .my-new-kg-title_3G5Ye .my-entry-wrapper_6DBgq .my-entry-con_5xphI .my-head-logo_2cYpn.my-head-logo-first_h5XOn{background-color:rgba(0,200,201,.1)}@media (prefers-color-scheme:dark){.cos-wise .my-new-kg-title_3G5Ye .my-entry-wrapper_6DBgq .my-entry-con_5xphI .my-head-logo_2cYpn.my-head-logo-first_h5XOn{background-color:rgba(0,200,201,.1)}}.my-new-kg-title_3G5Ye .my-entry-wrapper_6DBgq .my-entry-con_5xphI .my-head-logo_2cYpn.my-head-logo-color_1CgsZ{color:var(--cos-cyan-0)}.my-new-kg-title_3G5Ye .my-entry-wrapper_6DBgq .my-entry-con_5xphI .my-head-logo_2cYpn.my-head-logo-first-after_5heBJ{background-color:var(--cos-color-bg-primary-light)}.my-new-kg-title_3G5Ye .my-entry-wrapper_6DBgq .my-entry-con_5xphI .my-head-logo_2cYpn.my-head-logo-first-after_5heBJ.my-head-logo-color_1CgsZ{color:var(--cos-color-text-primary)}.my-new-kg-title_3G5Ye .my-entry-wrapper_6DBgq .my-entry-con_5xphI .my-head-logo_2cYpn:active{opacity:var(--cos-opacity-20)}.my-new-kg-title_3G5Ye .my-entry-wrapper_6DBgq .my-entry-con_5xphI .my-head-logo_2cYpn .logo-img_5o7YA{width:calc(var(--font-size-scale, 1)*17px);height:calc(var(--font-size-scale, 1)*17px)}.my-new-kg-title_3G5Ye .my-entry-wrapper_6DBgq .my-entry-con_5xphI .my-head-logo_2cYpn .logo-text_3mwGS{margin-left:var(--cos-space-3xs);font-weight:var(--cos-font-medium);-webkit-text-stroke:var(--cos-font-medium-stroke);font-family:PingFang SC,Arial,sans-serif;margin-top:.5px}.my-new-kg-title_3G5Ye .my-entry-wrapper_6DBgq .my-entry-con_5xphI .my-head-logo_2cYpn .logo-text_3mwGS.logo-text-kg-parameter_6VsWD{color:var(--cos-cyan-0)}", ""]);
// Exports
exports.locals = {
	"header-prompt": "header-prompt_5CvB9",
	"headerPrompt": "header-prompt_5CvB9",
	"my-new-kg-title": "my-new-kg-title_3G5Ye",
	"myNewKgTitle": "my-new-kg-title_3G5Ye",
	"my-head-props": "my-head-props_2K0CI",
	"myHeadProps": "my-head-props_2K0CI",
	"header-title": "header-title_6k7O6",
	"headerTitle": "header-title_6k7O6",
	"header-abstract": "header-abstract_5Xm2P",
	"headerAbstract": "header-abstract_5Xm2P",
	"my-entry-wrapper": "my-entry-wrapper_6DBgq",
	"myEntryWrapper": "my-entry-wrapper_6DBgq",
	"my-entry-wrapper-height": "my-entry-wrapper-height_7LLqG",
	"myEntryWrapperHeight": "my-entry-wrapper-height_7LLqG",
	"my-entry-con": "my-entry-con_5xphI",
	"myEntryCon": "my-entry-con_5xphI",
	"white-logo": "white-logo_6gFlw",
	"whiteLogo": "white-logo_6gFlw",
	"my-head-logo": "my-head-logo_2cYpn",
	"myHeadLogo": "my-head-logo_2cYpn",
	"my-head-logo-first": "my-head-logo-first_h5XOn",
	"myHeadLogoFirst": "my-head-logo-first_h5XOn",
	"my-head-logo-color": "my-head-logo-color_1CgsZ",
	"myHeadLogoColor": "my-head-logo-color_1CgsZ",
	"my-head-logo-first-after": "my-head-logo-first-after_5heBJ",
	"myHeadLogoFirstAfter": "my-head-logo-first-after_5heBJ",
	"logo-img": "logo-img_5o7YA",
	"logoImg": "logo-img_5o7YA",
	"logo-text": "logo-text_3mwGS",
	"logoText": "logo-text_3mwGS",
	"logo-text-kg-parameter": "logo-text-kg-parameter_6VsWD",
	"logoTextKgParameter": "logo-text-kg-parameter_6VsWD"
};
module.exports = exports;


/***/ }),
/* 90 */
/***/ (function(module, exports) {

// Module
var code = [1,"div",8,2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",null,3,"\n        ",1,"div",6,2,"class",7,null,6,2,3,"$style",3,"my-new-kg-title",1,8,6,1,3,"_class",null,null,3,"\n            \n            ",1,"div",6,2,"class",7,null,6,2,3,"$style",3,"my-head-props",1,8,6,1,3,"_class",null,null,3,"\n                ",1,"cosc-title",6,2,"class",7,null,6,2,3,"$style",3,"header-title",1,8,6,1,3,"_class",null,2,"link-info",6,1,3,"logoParams",38,6,1,3,"mainTitle",null,3,"\n                    \n                    ",1,"span",2,2,"class",3,"cos-color-text",null,7,1,6,1,3,"mainTitle",null,null,3,"\n                ",null,null,3,"\n                ",1,"div",5,2,"class",7,null,6,2,3,"$style",3,"header-abstract",1,8,6,1,3,"_class",null,38,6,1,3,"subTitle",null,3,"\n                    ",1,"p",2,2,"class",3,"cos-line-clamp-1",null,9,1,3,3,"\n                        \n                        ",7,1,6,1,3,"subTitle",null,3,"\n                    ",null,3,"\n                ",null,null,3,"\n            ",null,3,"\n            \n            ",1,"div",5,2,"class",7,null,16,2,17,6,2,3,"$style",3,"my-entry-wrapper",17,12,6,1,3,"isEntryHeight",6,2,3,"$style",3,"my-entry-wrapper-height",3,"",1,8,6,1,3,"_class",null,38,10,60,6,2,3,"tplInfo",3,"order",4,6,null,3,"\n                ",1,"div",4,2,"class",7,null,6,2,3,"$style",3,"my-entry-con",1,8,6,1,3,"_class",null,null,3,"\n                    ",1,"fragment",4,38,6,1,3,"isStatusTag",null,3,"\n                        ",1,"status-tag-header",4,2,"is-first",6,1,3,"isFirst",2,"live-info",6,1,3,"liveInfo",2,"live-experiment",6,2,3,"liveInfo",3,"liveExperiment",2,"url-params",12,10,183,6,2,3,"liveInfo",3,"liveExperiment",3,"1",6,2,3,"liveInfo",3,"liveParams",12,10,248,10,183,6,2,3,"liveInfo",3,"liveExperiment",3,"2",10,183,6,2,3,"liveInfo",3,"liveExperiment",3,"3",6,2,3,"liveInfo",3,"imageParams",3,"",null,3,"\n                    ",1,1,"fragment",4,40,null,3,"\n                        ",1,"div",5,2,"rl-type",12,10,76,6,2,3,"logoData",3,"logoParams",6,3,3,"logoData",3,"logoParams",3,"href",3,"stop",6,1,3,"undefined",38,6,1,3,"isLogoShow",null,3,"\n                            ",1,"div",7,2,"data-uclk",7,null,13,2,14,3,"module",3,"title_logo",14,3,"logoText",6,2,3,"logoData",3,"logoText",1,8,6,1,3,"json",null,33,"ubc-clk",3,"",45,12,10,76,6,2,3,"logoData",3,"logoParams",6,3,3,"logoData",3,"logoParams",3,"href",3,"a",3,"div",42,6,2,3,"logoData",3,"logoParams",null,3,"\n                                ",1,"div",5,2,"class",7,null,6,2,3,"$style",3,"white-logo",1,8,6,1,3,"_class",null,38,6,2,3,"logoData",3,"whiteImg",null,3,"\n                                    ",1,"img",1,2,"src",6,2,3,"logoData",3,"whiteImg",null,3,"\n                                ",1,1,"div",7,2,"class",7,null,16,4,17,3,"cos-color-text",17,6,2,3,"$style",3,"my-head-logo",17,12,6,2,3,"logoData",3,"hasColor",6,2,3,"$style",3,"my-head-logo-color",3,"",17,12,10,76,6,1,3,"isFirst",6,1,3,"isFirstShow",6,2,3,"$style",3,"my-head-logo-first",6,2,3,"$style",3,"my-head-logo-first-after",1,8,6,1,3,"_class",null,40,null,3,"\n                                    ",1,"img",2,2,"src",6,2,3,"logoData",3,"logoIcon",2,"class",7,null,6,2,3,"$style",3,"logo-img",1,8,6,1,3,"_class",null,null,3,"\n                                    ",1,"span",2,2,"class",7,null,6,2,3,"$style",3,"logo-text",1,8,6,1,3,"_class",null,null,6,2,3,"logoData",3,"logoText",null,3,"\n                                ",null,3,"\n                            ",null,3,"\n                        ",null,null,3,"\n                    ",null,3,"\n                ",null,3,"\n            ",null,null,3,"\n        ",null,3,"\n        \n        ",1,"div",5,2,"class",7,null,6,2,3,"$style",3,"header-prompt",1,8,6,1,3,"_class",null,38,6,1,3,"recommendInfo",null,3,"\n            ",1,"p",2,2,"class",3,"cos-line-clamp-1",null,9,null,3,3,"\n                ",7,null,6,1,3,"recommendInfo",null,3,"\n            ",null,3,"\n        ",null,null,3,"\n    "];
// Exports
module.exports = code;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(92);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(3)["default"]
var update = add("d6ca0f68", content, true, {"manualInject":true});

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".link-no-underline_65gqT:hover{-webkit-text-decoration-line:none;text-decoration-line:none}.header-prompt_7uASS{margin-top:var(--cos-space-md);font-weight:var(--cos-font-regular);-webkit-text-stroke:0;font-family:PingFang SC,Arial,sans-serif;font-size:var(--cos-text-subtitle-sm);line-height:var(--cos-leading-subtitle-sm);color:var(--cos-color-text-minor)}.header-prompt_7uASS>p{margin:-4px var(--cos-space-none)}.top-left-type_3R3Ej .title-top-logo_664k4{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:absolute;top:-18px;left:-15px;padding:var(--cos-space-sm) 16px;height:16px;background-image:-webkit-linear-gradient(311deg,rgba(192,244,240,.81) 5.26%,rgba(192,244,240,.47) 87.68%);background-image:linear-gradient(139deg,rgba(192,244,240,.81) 5.26%,rgba(192,244,240,.47) 87.68%);border-radius:16px var(--cos-rounded-none) var(--cos-rounded-xxl)}.top-left-type_3R3Ej .title-top-logo_664k4>img{height:100%}.top-left-type_3R3Ej .title-top-logo_664k4 .title-top-spot_5NlCr{border-radius:var(--cos-rounded-full);margin:var(--cos-space-none) 4px;width:4px;height:4px;background-color:#1a1a1a}.top-left-type_3R3Ej .title-top-gap_3niv7{padding-top:39px}.my-new-kg-title_2pWYJ{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.my-new-kg-title_2pWYJ .my-head-props_1osam{-webkit-box-flex:1;-webkit-flex:1 1 auto;flex:1 1 auto;overflow:hidden}.my-new-kg-title_2pWYJ .my-head-props_1osam .header-title_6vE5o{display:-webkit-box;display:-webkit-flex;display:flex;margin:var(--cos-space-none)}.my-new-kg-title_2pWYJ .my-head-props_1osam .header-title_6vE5o a{display:block;-webkit-box-orient:inline-axis;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.my-new-kg-title_2pWYJ .my-head-props_1osam .header-title_6vE5o.header-title-first_2Jg6I a{margin:-2px var(--cos-space-none) -3px}.my-new-kg-title_2pWYJ .my-head-props_1osam .header-title_6vE5o.header-title-first_2Jg6I a .cosc-title-slot{-webkit-text-decoration-line:none;text-decoration-line:none}.my-new-kg-title_2pWYJ .my-head-props_1osam .header-title_6vE5o.header-title-first_2Jg6I em{-webkit-text-decoration-line:none;text-decoration-line:none}.my-new-kg-title_2pWYJ .my-head-props_1osam .header-title_6vE5o.header-title-first_2Jg6I:hover a .cosc-title-slot{-webkit-text-decoration-line:underline;text-decoration-line:underline}.my-new-kg-title_2pWYJ .my-head-props_1osam .header-title_6vE5o.header-title-first_2Jg6I:hover em{-webkit-text-decoration-line:underline;text-decoration-line:underline}.my-new-kg-title_2pWYJ .my-head-props_1osam .header-abstract_7amk5{margin-top:var(--cos-space-xs);font-weight:var(--cos-font-regular);-webkit-text-stroke:0;font-family:PingFang SC,Arial,sans-serif;font-size:var(--cos-text-subtitle-sm);line-height:var(--cos-leading-subtitle-sm);color:var(--cos-color-text-minor)}.my-new-kg-title_2pWYJ .my-head-props_1osam .header-abstract_7amk5.header-abstract-img-san-one-after_5MLuB.header-abstract-img-san-one-after_5MLuB{margin-top:var(--cos-space-xxs)}.my-new-kg-title_2pWYJ .my-head-props_1osam .header-abstract_7amk5>p{margin:-3px var(--cos-space-none)}.my-new-kg-title_2pWYJ .my-entry-wrapper_2deHs{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-left:var(--cos-space-xxs);-webkit-box-flex:0;-webkit-flex:0 0 auto;flex:0 0 auto;height:0}.my-new-kg-title_2pWYJ .my-entry-wrapper_2deHs .my-entry-con_3eNg7 .white-logo_7aJnR>img{padding-bottom:var(--cos-space-xxs);height:90px}.my-new-kg-title_2pWYJ .my-entry-wrapper_2deHs .my-entry-con_3eNg7 .my-head-logo_63Gta{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-radius:var(--cos-rounded-full);-webkit-text-decoration-line:none;text-decoration-line:none;color:var(--cos-color-text);padding:var(--cos-space-3xs) var(--cos-space-sm);background-color:#e1f6f6;-webkit-box-shadow:0 2px 8px rgba(0,0,0,.02);box-shadow:0 2px 8px rgba(0,0,0,.02)}.my-new-kg-title_2pWYJ .my-entry-wrapper_2deHs .my-entry-con_3eNg7 .my-head-logo_63Gta:hover{opacity:var(--cos-opacity-85)}.my-new-kg-title_2pWYJ .my-entry-wrapper_2deHs .my-entry-con_3eNg7 .my-head-logo_63Gta:active{opacity:var(--cos-opacity-20)}.my-new-kg-title_2pWYJ .my-entry-wrapper_2deHs .my-entry-con_3eNg7 .my-head-logo_63Gta.my-head-logo-color_1ASf0{color:var(--cos-cyan-0)}.my-new-kg-title_2pWYJ .my-entry-wrapper_2deHs .my-entry-con_3eNg7 .my-head-logo_63Gta.my-head-logo-first-after_5QJML{background-color:var(--cos-color-bg-primary-light)}.my-new-kg-title_2pWYJ .my-entry-wrapper_2deHs .my-entry-con_3eNg7 .my-head-logo_63Gta.my-head-logo-first-after_5QJML.my-head-logo-color_1ASf0{color:var(--cos-color-text-primary)}.my-new-kg-title_2pWYJ .my-entry-wrapper_2deHs .my-entry-con_3eNg7 .my-head-logo_63Gta .logo-img_4ivgi{width:17px;height:17px}.my-new-kg-title_2pWYJ .my-entry-wrapper_2deHs .my-entry-con_3eNg7 .my-head-logo_63Gta .logo-text_72dOa{margin-left:var(--cos-space-3xs);font-weight:var(--cos-font-medium);-webkit-text-stroke:var(--cos-font-medium-stroke);font-family:PingFang SC,Arial,sans-serif}", ""]);
// Exports
exports.locals = {
	"link-no-underline": "link-no-underline_65gqT",
	"linkNoUnderline": "link-no-underline_65gqT",
	"header-prompt": "header-prompt_7uASS",
	"headerPrompt": "header-prompt_7uASS",
	"top-left-type": "top-left-type_3R3Ej",
	"topLeftType": "top-left-type_3R3Ej",
	"title-top-logo": "title-top-logo_664k4",
	"titleTopLogo": "title-top-logo_664k4",
	"title-top-spot": "title-top-spot_5NlCr",
	"titleTopSpot": "title-top-spot_5NlCr",
	"title-top-gap": "title-top-gap_3niv7",
	"titleTopGap": "title-top-gap_3niv7",
	"my-new-kg-title": "my-new-kg-title_2pWYJ",
	"myNewKgTitle": "my-new-kg-title_2pWYJ",
	"my-head-props": "my-head-props_1osam",
	"myHeadProps": "my-head-props_1osam",
	"header-title": "header-title_6vE5o",
	"headerTitle": "header-title_6vE5o",
	"header-title-first": "header-title-first_2Jg6I",
	"headerTitleFirst": "header-title-first_2Jg6I",
	"header-abstract": "header-abstract_7amk5",
	"headerAbstract": "header-abstract_7amk5",
	"header-abstract-img-san-one-after": "header-abstract-img-san-one-after_5MLuB",
	"headerAbstractImgSanOneAfter": "header-abstract-img-san-one-after_5MLuB",
	"my-entry-wrapper": "my-entry-wrapper_2deHs",
	"myEntryWrapper": "my-entry-wrapper_2deHs",
	"my-entry-con": "my-entry-con_3eNg7",
	"myEntryCon": "my-entry-con_3eNg7",
	"white-logo": "white-logo_7aJnR",
	"whiteLogo": "white-logo_7aJnR",
	"my-head-logo": "my-head-logo_63Gta",
	"myHeadLogo": "my-head-logo_63Gta",
	"my-head-logo-color": "my-head-logo-color_1ASf0",
	"myHeadLogoColor": "my-head-logo-color_1ASf0",
	"my-head-logo-first-after": "my-head-logo-first-after_5QJML",
	"myHeadLogoFirstAfter": "my-head-logo-first-after_5QJML",
	"logo-img": "logo-img_4ivgi",
	"logoImg": "logo-img_4ivgi",
	"logo-text": "logo-text_72dOa",
	"logoText": "logo-text_72dOa"
};
module.exports = exports;


/***/ }),
/* 93 */
/***/ (function(module, exports) {

// Module
var code = [1,"div",6,2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",null,3,"\n        ",1,"div",10,2,"class",7,null,6,2,3,"$style",3,"link-no-underline",1,8,6,1,3,"_class",null,45,12,10,76,6,1,3,"isFirst",10,76,6,2,3,"fieldsData",3,"headerParams",6,3,3,"fieldsData",3,"headerParams",3,"href",3,"a",3,"div",42,6,2,3,"fieldsData",3,"headerParams",null,3,"\n            \n            ",1,"div",7,2,"class",7,null,6,2,3,"$style",3,"top-left-type",1,8,6,1,3,"_class",null,38,10,76,6,1,3,"isFirst",6,2,3,"fieldsData",3,"bigImgType",null,3,"\n                ",1,"div",8,2,"class",7,null,6,2,3,"$style",3,"title-top-logo",1,8,6,1,3,"_class",null,null,3,"\n                    ",1,"img",1,2,"src",6,2,3,"fieldsData",3,"youjiaIcon",null,3,"\n                    ",1,"div",2,2,"class",7,null,6,2,3,"$style",3,"title-top-spot",1,8,6,1,3,"_class",null,38,6,2,3,"fieldsData",3,"energyIcon",null,null,3,"\n                    ",1,"img",2,2,"src",6,2,3,"fieldsData",3,"energyIcon",38,6,2,3,"fieldsData",3,"energyIcon",null,null,3,"\n                ",null,3,"\n                ",1,"div",1,2,"class",7,null,6,2,3,"$style",3,"title-top-gap",1,8,6,1,3,"_class",null,null,3,"\n            ",null,null,3,"\n            \n            ",1,"div",6,2,"class",7,null,6,2,3,"$style",3,"my-new-kg-title",1,8,6,1,3,"_class",null,null,3,"\n                \n                ",1,"div",6,2,"class",7,null,6,2,3,"$style",3,"my-head-props",1,8,6,1,3,"_class",null,null,3,"\n                    ",1,"object",3,null,3,"\n                        ",1,"cosc-title",4,2,"class",7,null,16,2,17,6,2,3,"$style",3,"header-title",17,12,6,1,3,"isFirst",6,2,3,"$style",3,"header-title-first",3,"",1,8,6,1,3,"_class",null,2,"link-info",6,2,3,"fieldsData",3,"headerParams",38,6,1,3,"mainTitle",null,9,1,3,3,"\n                            \n                            ",7,1,6,1,3,"mainTitle",null,3,"\n                        ",null,null,3,"\n                    ",null,3,"\n                    ",1,"fragment",4,38,10,183,6,2,3,"tplInfo",3,"tplname",3,"car_full_view_img_san",null,3,"\n                        ",1,"div",5,2,"class",7,null,16,3,17,6,2,3,"$style",3,"header-abstract",17,6,2,3,"$style",3,"header-abstract-img-san",17,12,6,1,3,"isFirst",3,"",6,2,3,"$style",3,"header-abstract-img-san-one-after",1,8,6,1,3,"_class",null,38,10,248,6,1,3,"subTitle",6,2,3,"fieldsData",3,"modelName",null,3,"\n                            ",1,"p",6,2,"class",3,"cos-line-clamp-1",null,3,"\n                                ",1,"span",2,38,6,2,3,"fieldsData",3,"modelName",null,6,2,3,"fieldsData",3,"modelName",null,null,3,"\n                                ",1,"span",3,2,"class",3,"cos-space-ml-lg",38,10,76,6,1,3,"isFirst",6,1,3,"subTitle",null,9,1,3,3,"\n                                    \n                                    ",7,1,6,1,3,"subTitle",null,3,"\n                                ",null,null,3,"\n                            ",null,3,"\n                        ",null,null,3,"\n                    ",1,1,"fragment",4,40,null,3,"\n                        ",1,"div",5,2,"class",7,null,6,2,3,"$style",3,"header-abstract",1,8,6,1,3,"_class",null,38,10,76,6,1,3,"isFirst",6,1,3,"subTitle",null,3,"\n                            ",1,"p",2,2,"class",3,"cos-line-clamp-1",null,9,1,3,3,"\n                                \n                                ",7,1,6,1,3,"subTitle",null,3,"\n                            ",null,3,"\n                        ",null,null,3,"\n                    ",null,3,"\n                ",null,3,"\n                \n                ",1,"div",5,2,"class",7,null,6,2,3,"$style",3,"my-entry-wrapper",1,8,6,1,3,"_class",null,38,10,60,6,2,3,"tplInfo",3,"order",4,6,null,3,"\n                    ",1,"object",4,2,"class",7,null,6,2,3,"$style",3,"my-entry-con",1,8,6,1,3,"_class",null,null,3,"\n                        ",1,"div",6,2,"data-uclk",7,null,13,2,14,3,"module",3,"title_logo",14,3,"logoText",3,"有驾",1,8,6,1,3,"json",null,33,"ubc-clk",3,"",38,6,1,3,"isLogoShow",null,3,"\n                            ",1,"div",5,2,"class",7,null,6,2,3,"$style",3,"white-logo",1,8,6,1,3,"_class",null,38,6,2,3,"fieldsData",3,"whiteImg",null,3,"\n                                ",1,"img",1,2,"src",6,2,3,"fieldsData",3,"whiteImg",null,3,"\n                            ",1,1,"div",9,2,"class",7,null,16,3,17,6,2,3,"$style",3,"my-head-logo",17,12,6,2,3,"logoData",3,"hasColorPc",6,2,3,"$style",3,"my-head-logo-color",3,"",17,12,10,76,6,1,3,"isFirst",6,1,3,"isFirstShow",6,2,3,"$style",3,"my-head-logo-first",6,2,3,"$style",3,"my-head-logo-first-after",1,8,6,1,3,"_class",null,45,12,10,76,6,2,3,"fieldsData",3,"logoParamsPc",6,3,3,"fieldsData",3,"logoParamsPc",3,"href",3,"a",3,"div",40,42,6,2,3,"fieldsData",3,"logoParamsPc",null,3,"\n                                ",1,"img",2,2,"src",6,2,3,"logoData",3,"logoIcon",2,"class",7,null,6,2,3,"$style",3,"logo-img",1,8,6,1,3,"_class",null,null,3,"\n                                ",1,"span",2,2,"class",7,null,6,2,3,"$style",3,"logo-text",1,8,6,1,3,"_class",null,null,6,2,3,"logoData",3,"logoText",null,3,"\n                            ",null,3,"\n                        ",null,null,3,"\n                    ",null,3,"\n                ",null,null,3,"\n            ",null,3,"\n            \n            ",1,"div",5,2,"class",7,null,6,2,3,"$style",3,"header-prompt",1,8,6,1,3,"_class",null,38,6,1,3,"recommendInfo",null,3,"\n                ",1,"p",2,2,"class",3,"cos-line-clamp-1",null,9,null,3,3,"\n                    ",7,null,6,1,3,"recommendInfo",null,3,"\n                ",null,3,"\n            ",null,null,3,"\n        ",null,3,"\n    "];
// Exports
module.exports = code;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(95);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(3)["default"]
var update = add("0c8a7a9f", content, true, {"manualInject":true});

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".paragraph_5vH2c{color:#848691}", ""]);
// Exports
exports.locals = {
	"paragraph": "paragraph_5vH2c"
};
module.exports = exports;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(97);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(3)["default"]
var update = add("0c8a7a9f", content, true, {"manualInject":true});

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".paragraph_42fYU{font-size:.14rem;color:#848691}", ""]);
// Exports
exports.locals = {
	"paragraph": "paragraph_42fYU"
};
module.exports = exports;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(99);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(3)["default"]
var update = add("0c8a7a9f", content, true, {"manualInject":true});

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".link_LDrJi{cursor:pointer!important}.no-spacing_3ASFw{cursor:pointer}.paragraph_xVnON{font-size:.2rem!important;font-weight:500}", ""]);
// Exports
exports.locals = {
	"link": "link_LDrJi",
	"no-spacing": "no-spacing_3ASFw",
	"noSpacing": "no-spacing_3ASFw",
	"paragraph": "paragraph_xVnON"
};
module.exports = exports;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(101);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(3)["default"]
var update = add("0c8a7a9f", content, true, {"manualInject":true});

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".pc-fresh-bottom_3bWjR{padding-bottom:var(--cos-space-md)!important}.pc-fresh-color-header_6gETc{top:-18px!important;left:-15px!important;right:-15px!important}.link-no-underline_viNSg:hover{text-decoration:none}.my-new-kg-header_45qdI{position:relative;margin:-.21rem -.12rem 0;padding:.21rem .12rem .15rem;-webkit-box-sizing:border-box;box-sizing:border-box}.cos-fresh .my-new-kg-header_45qdI{margin:-.19rem -.17rem 0;padding:.18rem .17rem .15rem}.my-new-kg-header_45qdI.my-new-kg-header-no-subtitle_4N4Cs{padding-bottom:.05rem}.my-new-kg-header_45qdI.my-new-kg-header-prompt_4GkB2{padding-top:.13rem}.my-new-kg-header_45qdI.my-new-kg-header-pc_4DiWm{margin:0;padding:.03rem 0 .125rem 0}.my-new-kg-header_45qdI.my-new-kg-header-pc_4DiWm.my-new-kg-header-no-subtitle-pc_75SP4{padding-top:.11rem}.my-new-kg-header_45qdI .my-new-kg-nousetitle_1sXnK{position:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;z-index:2}.my-new-kg-header_45qdI .my-new-kg-nousetitle_1sXnK .my-head-props_6Lmm0{max-width:calc(100% - .5rem)}.my-new-kg-header_45qdI .my-new-kg-nousetitle_1sXnK .my-head-props_6Lmm0.my-head-props-kg_7CdyS{max-width:calc(100% - 120px)}.cos-pc .my-new-kg-header_45qdI .my-new-kg-nousetitle_1sXnK .my-head-props_6Lmm0.my-head-props-kg_7CdyS{max-width:calc(100% - 146px)}.my-new-kg-header_45qdI .my-new-kg-nousetitle_1sXnK .my-head-props_6Lmm0.my-head-props-view-point_5R1TJ{max-width:calc(100% - 1.43rem)}.cos-pc .my-new-kg-header_45qdI .my-new-kg-nousetitle_1sXnK .my-head-props_6Lmm0.my-head-props-view-point_5R1TJ{max-width:calc(100% - 1.65rem)}.my-new-kg-header_45qdI .my-new-kg-nousetitle_1sXnK .my-head-props_6Lmm0 .my-new-kg-prompt_2wCBH{position:relative;z-index:2;padding-bottom:.12rem}.cos-pc .my-new-kg-header_45qdI .my-new-kg-nousetitle_1sXnK .my-head-props_6Lmm0 .my-new-kg-prompt_2wCBH{padding-bottom:.15rem}.my-new-kg-header_45qdI .my-new-kg-nousetitle_1sXnK .my-head-props_6Lmm0 .my-new-kg-prompt_2wCBH.my-new-kg-prompt-big-img_7F8jW{position:absolute;top:0;right:0}.my-new-kg-header_45qdI .my-new-kg-nousetitle_1sXnK .my-head-props_6Lmm0 .my-head-props-con_UKq8R{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.my-new-kg-header_45qdI .my-new-kg-nousetitle_1sXnK .my-head-props_6Lmm0 .my-head-props-con_UKq8R .my-head-article_5Te1M{display:block;-webkit-box-orient:inline-axis;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;-webkit-box-flex:1;-webkit-flex:1;flex:1}.my-new-kg-header_45qdI .my-new-kg-nousetitle_1sXnK .my-head-props_6Lmm0 .my-head-props-con_UKq8R .my-head-article_5Te1M .my-label-title_7xUz8{padding:0 0 .09rem 0;text-decoration:none!important;color:#333}.my-new-kg-header_45qdI .my-new-kg-nousetitle_1sXnK .my-head-props_6Lmm0 .my-head-props-con_UKq8R .my-head-article_5Te1M .my-label-title_7xUz8.my-label-title-no-subtitle_4G4Vd{padding-bottom:.03rem}.my-new-kg-header_45qdI .my-new-kg-nousetitle_1sXnK .my-head-props_6Lmm0 .my-head-props-con_UKq8R .my-head-article_5Te1M .my-label-title_7xUz8.my-label-title-pc_6oNzF{margin:0!important;padding-bottom:.03rem}.my-new-kg-header_45qdI .my-new-kg-nousetitle_1sXnK .my-head-props_6Lmm0 .my-head-props-con_UKq8R .my-head-article_5Te1M .my-label-title_7xUz8.my-label-title-pc_6oNzF em{text-decoration:none!important}.my-new-kg-header_45qdI .my-new-kg-nousetitle_1sXnK .my-head-props_6Lmm0 .my-head-props-con_UKq8R .my-head-article_5Te1M .my-label-title_7xUz8.my-label-title-pc_6oNzF:hover{text-decoration:underline!important}.my-new-kg-header_45qdI .my-new-kg-nousetitle_1sXnK .my-head-props_6Lmm0 .my-head-props-con_UKq8R .my-head-article_5Te1M .my-label-title_7xUz8.my-label-title-pc_6oNzF:hover em{text-decoration:underline!important;-webkit-text-decoration-color:#f73131!important;text-decoration-color:#f73131!important}.my-new-kg-header_45qdI .my-new-kg-nousetitle_1sXnK .my-head-props_6Lmm0 .my-head-props-con_UKq8R .my-head-article_5Te1M .my-head-abstract_7JpvC{font-size:.14rem;color:#848691}.cos-pc .my-new-kg-header_45qdI .my-new-kg-nousetitle_1sXnK .my-head-props_6Lmm0 .my-head-props-con_UKq8R .my-head-article_5Te1M .my-head-abstract_7JpvC{padding-bottom:.045rem}.my-new-kg-header_45qdI .my-new-kg-nousetitle_1sXnK .my-entry-wrapper_4peP7{position:relative;z-index:2;display:-webkit-box;display:-webkit-flex;display:flex}.cos-pc .my-new-kg-header_45qdI .my-new-kg-nousetitle_1sXnK .my-entry-wrapper_4peP7{right:.12rem}.my-new-kg-header_45qdI .my-new-kg-nousetitle_1sXnK .my-entry-wrapper_4peP7.my-entry-wrapper-kg-three_2UVWu{-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:.1rem 0 0 .08rem;min-height:.8rem}.my-new-kg-header_45qdI .my-new-kg-nousetitle_1sXnK .my-entry-wrapper_4peP7 .my-head-logo_35NhX{position:relative;bottom:.03rem;display:inline-block;width:.55rem;height:.4rem;margin-left:.08rem;background-image:var(--icon-img);-webkit-background-size:contain;background-size:contain;background-repeat:no-repeat}.cos-fresh .my-new-kg-header_45qdI .my-new-kg-nousetitle_1sXnK .my-entry-wrapper_4peP7 .my-head-logo_35NhX{margin:-.02rem -.034rem 0 .08rem}.cos-fresh .my-new-kg-header_45qdI .my-new-kg-nousetitle_1sXnK .my-entry-wrapper_4peP7 .my-head-logo_35NhX.my-head-logo-big-img_7wVhq{margin-right:0}.my-new-kg-header_45qdI .my-new-kg-nousetitle_1sXnK .my-entry-wrapper_4peP7 .my-head-logo_35NhX.my-head-logo-prompt_191hG{bottom:0}.c-darkmode .my-new-kg-header_45qdI .my-new-kg-nousetitle_1sXnK .my-entry-wrapper_4peP7 .my-head-logo_35NhX{background-image:var(--icon-img-dark)}@media (prefers-color-scheme:dark){.my-new-kg-header_45qdI .my-new-kg-nousetitle_1sXnK .my-entry-wrapper_4peP7 .my-head-logo_35NhX{background-image:var(--icon-img-dark)}}.my-new-kg-header_45qdI .my-bg-header_3bK3V{position:absolute;top:0;left:0;width:100%;height:100%;z-index:0;overflow:hidden}.c-darkmode .my-new-kg-header_45qdI .my-bg-header_3bK3V{overflow:unset}@media (prefers-color-scheme:dark){.cos-wise .my-new-kg-header_45qdI .my-bg-header_3bK3V{overflow:unset}}.my-new-kg-header_45qdI .my-bg-header_3bK3V.my-bg-header-pc_whBFO{overflow:unset;z-index:-1}.my-new-kg-header_45qdI .my-bg-header_3bK3V .my-horizontal-gradient_3sWWj{position:absolute;top:.01rem;left:0;z-index:1;width:100%;height:100%;background-image:var(--bg-img);background-repeat:no-repeat;-webkit-background-size:100% auto;background-size:100% auto;border-radius:.12rem .12rem 0 0}.cos-fresh .my-new-kg-header_45qdI .my-bg-header_3bK3V .my-horizontal-gradient_3sWWj{height:calc(100% + .03rem)}.cos-fresh .my-new-kg-header_45qdI .my-bg-header_3bK3V .my-horizontal-gradient_3sWWj.my-horizontal-gradient-first-adv_754hq{border-radius:0}.my-new-kg-header_45qdI .my-bg-header_3bK3V .my-horizontal-gradient_3sWWj.my-horizontal-gradient-big-img_2YnVu{max-height:1.2rem;-webkit-background-size:100% 100%;background-size:100% 100%}.cos-wise .c-darkmode .my-new-kg-header_45qdI .my-bg-header_3bK3V .my-horizontal-gradient_3sWWj{height:120%;background-image:var(--bg-img-dark)}@media (prefers-color-scheme:dark){.cos-wise .my-new-kg-header_45qdI .my-bg-header_3bK3V .my-horizontal-gradient_3sWWj{height:120%;background-image:var(--bg-img-dark)}}.my-new-kg-header_45qdI .my-bg-header_3bK3V .my-horizontal-gradient_3sWWj.my-horizontal-gradient-pc_5uOYk{top:-.16rem;left:-.16rem;right:-.16rem;width:auto;height:1.145rem;z-index:-1;border-radius:.15rem .15rem 0 0}.my-new-kg-header_45qdI .my-bg-header_3bK3V .my-horizontal-gradient_3sWWj.my-horizontal-gradient-pc-prompt_5oEUY{top:-.16rem;left:-.16rem;right:-.16rem;width:auto;height:1.4rem;z-index:-1;border-radius:.15rem .15rem 0 0}.my-new-kg-header_45qdI .my-bg-header_3bK3V .my-vertical-gradient_1Tma4{position:absolute;left:0;bottom:0;z-index:1;width:100%;height:65%;background-image:-webkit-gradient(linear,left bottom,left top,color-stop(0,#fff),color-stop(.04rem,#fff),to(rgba(255,255,255,0)));background-image:-webkit-linear-gradient(bottom,#fff 0,#fff .04rem,rgba(255,255,255,0));background-image:linear-gradient(to top,#fff 0,#fff .04rem,rgba(255,255,255,0))}.my-new-kg-header_45qdI .my-bg-header_3bK3V .my-vertical-gradient_1Tma4.my-vertical-gradient-experiment_6jimy{height:5%}.c-darkmode .my-new-kg-header_45qdI .my-bg-header_3bK3V .my-vertical-gradient_1Tma4{background-image:none}@media (prefers-color-scheme:dark){.my-new-kg-header_45qdI .my-bg-header_3bK3V .my-vertical-gradient_1Tma4{background-image:none}}.header-first-after_G9LVd.header-first-after-living-two_7jbIC{margin-bottom:.08rem}.header-first-after_G9LVd .my-no-first-prompt_24G29{padding-bottom:.12rem}.header-first-after_G9LVd .my-no-first-prompt_24G29.my-no-first-prompt-pc_2QfJ8{padding-bottom:.15rem}.header-first-after_G9LVd .my-no-first-prompt_24G29.my-no-first-prompt-one-after_1VVfv{margin-top:-.03rem}.header-first-after_G9LVd .first-after-con_1bYeX{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.header-first-after_G9LVd .first-after-con_1bYeX.first-after-con-logo_EFXBm{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.header-first-after_G9LVd .first-after-con_1bYeX .first-after-article_19S0z{display:block;-webkit-box-orient:inline-axis;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;-webkit-box-flex:1;-webkit-flex:1;flex:1}.header-first-after_G9LVd .first-after-con_1bYeX .first-after-article_19S0z .main-title_rf878{margin-bottom:0!important;padding-bottom:.09rem}.header-first-after_G9LVd .first-after-con_1bYeX .first-after-article_19S0z .sub-title_3KNtv{padding-bottom:.15rem;font-size:.14rem;color:#848691}.header-first-after_G9LVd .first-after-con_1bYeX .logo-slot_5iVNm{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-bottom:.15rem}", ""]);
// Exports
exports.locals = {
	"pc-fresh-bottom": "pc-fresh-bottom_3bWjR",
	"pcFreshBottom": "pc-fresh-bottom_3bWjR",
	"pc-fresh-color-header": "pc-fresh-color-header_6gETc",
	"pcFreshColorHeader": "pc-fresh-color-header_6gETc",
	"link-no-underline": "link-no-underline_viNSg",
	"linkNoUnderline": "link-no-underline_viNSg",
	"my-new-kg-header": "my-new-kg-header_45qdI",
	"myNewKgHeader": "my-new-kg-header_45qdI",
	"my-new-kg-header-no-subtitle": "my-new-kg-header-no-subtitle_4N4Cs",
	"myNewKgHeaderNoSubtitle": "my-new-kg-header-no-subtitle_4N4Cs",
	"my-new-kg-header-prompt": "my-new-kg-header-prompt_4GkB2",
	"myNewKgHeaderPrompt": "my-new-kg-header-prompt_4GkB2",
	"my-new-kg-header-pc": "my-new-kg-header-pc_4DiWm",
	"myNewKgHeaderPc": "my-new-kg-header-pc_4DiWm",
	"my-new-kg-header-no-subtitle-pc": "my-new-kg-header-no-subtitle-pc_75SP4",
	"myNewKgHeaderNoSubtitlePc": "my-new-kg-header-no-subtitle-pc_75SP4",
	"my-new-kg-nousetitle": "my-new-kg-nousetitle_1sXnK",
	"myNewKgNousetitle": "my-new-kg-nousetitle_1sXnK",
	"my-head-props": "my-head-props_6Lmm0",
	"myHeadProps": "my-head-props_6Lmm0",
	"my-head-props-kg": "my-head-props-kg_7CdyS",
	"myHeadPropsKg": "my-head-props-kg_7CdyS",
	"my-head-props-view-point": "my-head-props-view-point_5R1TJ",
	"myHeadPropsViewPoint": "my-head-props-view-point_5R1TJ",
	"my-new-kg-prompt": "my-new-kg-prompt_2wCBH",
	"myNewKgPrompt": "my-new-kg-prompt_2wCBH",
	"my-new-kg-prompt-big-img": "my-new-kg-prompt-big-img_7F8jW",
	"myNewKgPromptBigImg": "my-new-kg-prompt-big-img_7F8jW",
	"my-head-props-con": "my-head-props-con_UKq8R",
	"myHeadPropsCon": "my-head-props-con_UKq8R",
	"my-head-article": "my-head-article_5Te1M",
	"myHeadArticle": "my-head-article_5Te1M",
	"my-label-title": "my-label-title_7xUz8",
	"myLabelTitle": "my-label-title_7xUz8",
	"my-label-title-no-subtitle": "my-label-title-no-subtitle_4G4Vd",
	"myLabelTitleNoSubtitle": "my-label-title-no-subtitle_4G4Vd",
	"my-label-title-pc": "my-label-title-pc_6oNzF",
	"myLabelTitlePc": "my-label-title-pc_6oNzF",
	"my-head-abstract": "my-head-abstract_7JpvC",
	"myHeadAbstract": "my-head-abstract_7JpvC",
	"my-entry-wrapper": "my-entry-wrapper_4peP7",
	"myEntryWrapper": "my-entry-wrapper_4peP7",
	"my-entry-wrapper-kg-three": "my-entry-wrapper-kg-three_2UVWu",
	"myEntryWrapperKgThree": "my-entry-wrapper-kg-three_2UVWu",
	"my-head-logo": "my-head-logo_35NhX",
	"myHeadLogo": "my-head-logo_35NhX",
	"my-head-logo-big-img": "my-head-logo-big-img_7wVhq",
	"myHeadLogoBigImg": "my-head-logo-big-img_7wVhq",
	"my-head-logo-prompt": "my-head-logo-prompt_191hG",
	"myHeadLogoPrompt": "my-head-logo-prompt_191hG",
	"my-bg-header": "my-bg-header_3bK3V",
	"myBgHeader": "my-bg-header_3bK3V",
	"my-bg-header-pc": "my-bg-header-pc_whBFO",
	"myBgHeaderPc": "my-bg-header-pc_whBFO",
	"my-horizontal-gradient": "my-horizontal-gradient_3sWWj",
	"myHorizontalGradient": "my-horizontal-gradient_3sWWj",
	"my-horizontal-gradient-first-adv": "my-horizontal-gradient-first-adv_754hq",
	"myHorizontalGradientFirstAdv": "my-horizontal-gradient-first-adv_754hq",
	"my-horizontal-gradient-big-img": "my-horizontal-gradient-big-img_2YnVu",
	"myHorizontalGradientBigImg": "my-horizontal-gradient-big-img_2YnVu",
	"my-horizontal-gradient-pc": "my-horizontal-gradient-pc_5uOYk",
	"myHorizontalGradientPc": "my-horizontal-gradient-pc_5uOYk",
	"my-horizontal-gradient-pc-prompt": "my-horizontal-gradient-pc-prompt_5oEUY",
	"myHorizontalGradientPcPrompt": "my-horizontal-gradient-pc-prompt_5oEUY",
	"my-vertical-gradient": "my-vertical-gradient_1Tma4",
	"myVerticalGradient": "my-vertical-gradient_1Tma4",
	"my-vertical-gradient-experiment": "my-vertical-gradient-experiment_6jimy",
	"myVerticalGradientExperiment": "my-vertical-gradient-experiment_6jimy",
	"header-first-after": "header-first-after_G9LVd",
	"headerFirstAfter": "header-first-after_G9LVd",
	"header-first-after-living-two": "header-first-after-living-two_7jbIC",
	"headerFirstAfterLivingTwo": "header-first-after-living-two_7jbIC",
	"my-no-first-prompt": "my-no-first-prompt_24G29",
	"myNoFirstPrompt": "my-no-first-prompt_24G29",
	"my-no-first-prompt-pc": "my-no-first-prompt-pc_2QfJ8",
	"myNoFirstPromptPc": "my-no-first-prompt-pc_2QfJ8",
	"my-no-first-prompt-one-after": "my-no-first-prompt-one-after_1VVfv",
	"myNoFirstPromptOneAfter": "my-no-first-prompt-one-after_1VVfv",
	"first-after-con": "first-after-con_1bYeX",
	"firstAfterCon": "first-after-con_1bYeX",
	"first-after-con-logo": "first-after-con-logo_EFXBm",
	"firstAfterConLogo": "first-after-con-logo_EFXBm",
	"first-after-article": "first-after-article_19S0z",
	"firstAfterArticle": "first-after-article_19S0z",
	"main-title": "main-title_rf878",
	"mainTitle": "main-title_rf878",
	"sub-title": "sub-title_3KNtv",
	"subTitle": "sub-title_3KNtv",
	"logo-slot": "logo-slot_5iVNm",
	"logoSlot": "logo-slot_5iVNm"
};
module.exports = exports;


/***/ }),
/* 102 */
/***/ (function(module, exports) {

// Module
var code = [1,"div",6,2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",null,3,"\n        \n        ",1,"sc-link",8,2,"url",6,1,3,"headerUrl",2,"hotspot-style",6,1,3,"headerHotspotStyle",33,"enable-hotspot",3,"",2,"class",7,null,6,2,3,"$style",3,"link-no-underline",1,8,6,1,3,"_class",null,38,6,1,3,"isFirst",null,3,"\n            ",1,"div",8,2,"data-uclk",7,null,13,1,14,3,"module",3,"title",1,8,6,1,3,"json",null,33,"ubc-clk",3,"",2,"class",7,null,16,3,17,6,2,3,"$style",3,"my-new-kg-header",17,12,11,33,6,1,3,"subTitle",12,6,1,3,"isPc",6,2,3,"$style",3,"my-new-kg-header-no-subtitle-pc",6,2,3,"$style",3,"my-new-kg-header-no-subtitle",3,"",17,12,6,1,3,"isPc",6,2,3,"$style",3,"my-new-kg-header-pc",12,6,1,3,"recommendInfo",6,2,3,"$style",3,"my-new-kg-header-prompt",3,"",1,8,6,1,3,"_class",null,null,3,"\n                ",1,"div",6,2,"class",7,null,6,2,3,"$style",3,"my-new-kg-nousetitle",1,8,6,1,3,"_class",null,null,3,"\n                    ",1,"div",6,2,"class",7,null,16,3,17,6,2,3,"$style",3,"my-head-props",17,12,10,183,6,1,3,"cardName",3,"car_kg2_san",6,2,3,"$style",3,"my-head-props-kg",3,"",17,12,10,183,6,1,3,"cardName",3,"car_view_point_san",6,2,3,"$style",3,"my-head-props-view-point",3,"",1,8,6,1,3,"_class",null,null,3,"\n                        \n                        ",1,"sc-paragraph",5,2,"clamp",3,"1",2,"styles",12,6,1,3,"isPc",6,1,3,"$promptPc",6,1,3,"$promptWise",2,"class",7,null,16,2,17,6,2,3,"$style",3,"my-new-kg-prompt",17,12,6,1,3,"isBigImgIcon",6,2,3,"$style",3,"my-new-kg-prompt-big-img",3,"",1,8,6,1,3,"_class",null,38,6,1,3,"recommendInfo",null,9,null,3,3,"\n                            ",7,null,6,1,3,"recommendInfo",null,3,"\n                        ",null,null,3,"\n                        ",1,"div",4,2,"class",7,null,6,2,3,"$style",3,"my-head-props-con",1,8,6,1,3,"_class",null,null,3,"\n                            ",1,"div",6,2,"class",7,null,6,2,3,"$style",3,"my-head-article",1,8,6,1,3,"_class",null,null,3,"\n                                ",1,"object",4,38,10,76,6,1,3,"pcFreshWrapper",6,1,3,"pcFreshTitle",null,3,"\n                                    ",1,"cosc-title",6,2,"style",7,null,13,1,14,3,"padding-top",6,1,3,"mainTitlePaddingTop",1,8,6,1,3,"_style",null,2,"styles",6,1,3,"$myLabelTitlePc",2,"class",7,null,16,3,17,3,"c-line-clamp1",17,6,2,3,"$style",3,"my-label-title",17,12,11,33,6,1,3,"subTitle",6,2,3,"$style",3,"my-label-title-no-subtitle",3,"",1,8,6,1,3,"_class",null,2,"url",6,2,3,"headerUrl",3,"tcUrl",2,"link-info",13,1,14,3,"target",3,"_blank",null,9,1,3,3,"\n                                        \n                                        ",7,1,6,1,3,"mainTitle",null,3,"\n                                    ",null,3,"\n                                ",1,1,"sc-title",6,2,"clamp",3,"1",2,"style",7,null,13,1,14,3,"padding-top",6,1,3,"mainTitlePaddingTop",1,8,6,1,3,"_style",null,2,"styles",12,6,1,3,"isPc",6,1,3,"$myLabelTitlePc",3,"",2,"class",7,null,16,3,17,6,2,3,"$style",3,"my-label-title",17,12,11,33,6,1,3,"subTitle",6,2,3,"$style",3,"my-label-title-no-subtitle",3,"",17,12,6,1,3,"isPc",6,2,3,"$style",3,"my-label-title-pc",3,"",1,8,6,1,3,"_class",null,40,null,9,1,3,3,"\n                                    \n                                    ",7,1,6,1,3,"mainTitle",null,3,"\n                                ",null,3,"\n                                ",1,"sc-paragraph",4,2,"clamp",3,"1",2,"class",7,null,6,2,3,"$style",3,"my-head-abstract",1,8,6,1,3,"_class",null,38,6,1,3,"subTitle",null,9,1,3,3,"\n                                    \n                                    ",7,1,6,1,3,"subTitle",null,3,"\n                                ",null,null,3,"\n                            ",null,3,"\n                        ",null,3,"\n                    ",null,3,"\n                    \n                    ",1,"div",5,2,"class",7,null,16,2,17,6,2,3,"$style",3,"my-entry-wrapper",17,12,10,76,10,183,6,1,3,"cardName",3,"car_kg2_san",6,1,3,"isStatusTag",6,2,3,"$style",3,"my-entry-wrapper-kg-three",3,"",1,8,6,1,3,"_class",null,38,10,248,11,33,6,1,3,"isPc",6,1,3,"isEntryLogoShow",null,3,"\n                        ",1,"div",4,38,6,1,3,"isStatusTag",null,3,"\n                            ",1,"status-tag-header",6,2,"is-first",6,1,3,"isFirst",2,"live-info",6,1,3,"liveInfo",2,"live-experiment",6,2,3,"liveInfo",3,"liveExperiment",2,"recommend-info",6,1,3,"recommendInfo",2,"url-params",12,10,183,6,2,3,"liveInfo",3,"liveExperiment",3,"1",6,2,3,"liveInfo",3,"liveParams",12,10,248,10,183,6,2,3,"liveInfo",3,"liveExperiment",3,"2",10,183,6,2,3,"liveInfo",3,"liveExperiment",3,"3",6,2,3,"liveInfo",3,"imageParams",3,"",2,"card-name",6,1,3,"cardName",null,3,"\n                        ",2,1,"div",6,2,"style",9,null,4,3,"--icon-img: ",7,null,10,43,10,43,3,"url(",6,1,3,"iconImg",3,")",1,8,6,1,3,"_style",null,3,";\n                                --icon-img-dark: ",7,null,10,43,10,43,3,"url(",6,1,3,"iconImgDark",3,")",1,8,6,1,3,"_style",null,2,"data-uclk",7,null,13,1,14,3,"module",3,"title_logo",1,8,6,1,3,"json",null,33,"ubc-clk",3,"",2,"class",7,null,16,3,17,6,2,3,"$style",3,"my-head-logo",17,12,10,248,6,2,3,"liveInfo",3,"liveExperiment",6,1,3,"isBigImgIcon",6,2,3,"$style",3,"my-head-logo-big-img",3,"",17,12,6,1,3,"recommendInfo",6,2,3,"$style",3,"my-head-logo-prompt",3,"",1,8,6,1,3,"_class",null,39,6,1,3,"iconImg",null,3,"\n                        ",1,"template",4,40,null,3,"\n                            ",1,"slot",1,2,"name",3,"my-entry",null,3,"\n                        ",null,3,"\n                    ",null,null,3,"\n                ",null,3,"\n                \n                ",1,"div",6,2,"class",9,null,3,7,null,6,2,3,"$style",3,"my-bg-header",1,8,6,1,3,"_class",null,3," ",7,null,12,6,1,3,"isPc",6,2,3,"$style",3,"my-bg-header-pc",3,"",1,8,6,1,3,"_class",null,null,3,"\n                    ",1,"div",2,2,"style",9,null,5,3,"--bg-img: ",7,null,10,43,10,43,3,"url(",6,1,3,"bgImg",3,")",1,8,6,1,3,"_style",null,3,";\n                                --bg-img-dark: ",7,null,12,6,1,3,"bgImgDark",10,43,10,43,3,"url(",6,1,3,"bgImgDark",3,")",10,43,10,43,3,"url(",6,1,3,"bgImg",3,")",1,8,6,1,3,"_style",null,3,";",2,"class",7,null,16,5,17,6,2,3,"$style",3,"my-horizontal-gradient",17,12,6,1,3,"isPc",12,6,1,3,"recommendInfo",6,2,3,"$style",3,"my-horizontal-gradient-pc-prompt",6,2,3,"$style",3,"my-horizontal-gradient-pc",3,"",17,12,10,76,6,1,3,"isPc",6,1,3,"pcFreshSmooth",6,2,3,"$style",3,"pc-fresh-color-header",3,"",17,12,6,1,3,"isBigImgIcon",6,2,3,"$style",3,"my-horizontal-gradient-big-img",3,"",17,12,6,1,3,"isFirstAdv",6,2,3,"$style",3,"my-horizontal-gradient-first-adv",3,"",1,8,6,1,3,"_class",null,null,3,"\n                    \n                    ",1,"div",2,2,"class",7,null,16,2,17,6,2,3,"$style",3,"my-vertical-gradient",17,12,6,1,3,"isStatusTag",6,2,3,"$style",3,"my-vertical-gradient-experiment",3,"",1,8,6,1,3,"_class",null,38,10,248,11,33,6,1,3,"isPc",6,1,3,"isBgGradientShow",null,null,3,"\n                ",null,3,"\n            ",null,3,"\n        ",1,1,"div",9,2,"data-uclk",7,null,13,1,14,3,"module",3,"title",1,8,6,1,3,"json",null,33,"ubc-clk",3,"",2,"class",7,null,16,2,17,6,2,3,"$style",3,"header-first-after",17,12,10,183,6,2,3,"liveInfo",3,"liveExperiment",3,"2",6,2,3,"$style",3,"header-first-after-living-two",3,"",1,8,6,1,3,"_class",null,40,null,3,"\n            \n            ",1,"sc-paragraph",5,2,"clamp",3,"1",2,"styles",12,6,1,3,"isPc",6,1,3,"$promptPc",6,1,3,"$promptWise",2,"class",7,null,16,2,17,6,2,3,"$style",3,"my-no-first-prompt",17,12,6,1,3,"isPc",6,2,3,"$style",3,"my-no-first-prompt-pc",12,11,33,6,1,3,"isFirst",6,2,3,"$style",3,"my-no-first-prompt-one-after",3,"",1,8,6,1,3,"_class",null,38,6,1,3,"recommendInfo",null,9,null,3,3,"\n                ",7,null,6,1,3,"recommendInfo",null,3,"\n            ",null,null,3,"\n            ",1,"div",6,2,"class",7,null,16,2,17,6,2,3,"$style",3,"first-after-con",17,12,6,1,3,"isStatusTag",6,2,3,"$style",3,"first-after-con-logo",3,"",1,8,6,1,3,"_class",null,null,3,"\n                ",1,"div",4,2,"class",7,null,6,2,3,"$style",3,"first-after-article",1,8,6,1,3,"_class",null,null,3,"\n                    ",1,"slot",8,2,"name",3,"my-no-first-title",null,3,"\n                        ",1,"cosc-title",5,2,"url",12,6,1,3,"isPc",6,2,3,"headerUrl",3,"tcUrl",6,1,3,"undefined",2,"link-info",12,6,1,3,"isPc",13,1,14,3,"target",3,"_blank",6,1,3,"undefined",2,"class",9,null,5,3,"\n                                ",7,null,6,2,3,"$style",3,"main-title",1,8,6,1,3,"_class",null,3,"\n                                ",7,null,12,6,1,3,"isPc",6,2,3,"$style",3,"pc-fresh-bottom",3,"",1,8,6,1,3,"_class",null,3,"\n                            ",38,10,76,6,1,3,"pcFreshWrapper",6,1,3,"mainTitle",null,9,1,3,3,"\n                            \n                            ",7,1,6,1,3,"mainTitle",null,3,"\n                        ",null,null,3,"\n                        ",1,"sc-title",4,2,"url-params",6,1,3,"headerUrl",2,"class",7,null,6,2,3,"$style",3,"main-title",1,8,6,1,3,"_class",null,38,10,76,11,33,6,1,3,"pcFreshWrapper",6,1,3,"mainTitle",null,9,1,3,3,"\n                            \n                            ",7,1,6,1,3,"mainTitle",null,3,"\n                        ",null,null,3,"\n                        ",1,"sc-paragraph",4,2,"clamp",3,"1",2,"class",7,null,6,2,3,"$style",3,"sub-title",1,8,6,1,3,"_class",null,38,10,76,11,33,6,1,3,"isPc",6,1,3,"subTitle",null,9,1,3,3,"\n                            \n                            ",7,1,6,1,3,"subTitle",null,3,"\n                        ",null,null,3,"\n                    ",null,3,"\n                ",null,3,"\n                ",1,"div",5,2,"class",7,null,6,2,3,"$style",3,"logo-slot",1,8,6,1,3,"_class",null,38,6,1,3,"isStatusTag",null,3,"\n                    ",1,"status-tag-header",6,2,"is-first",6,1,3,"isFirst",2,"live-info",6,1,3,"liveInfo",2,"live-experiment",6,2,3,"liveInfo",3,"liveExperiment",2,"recommend-info",6,1,3,"recommendInfo",2,"url-params",12,10,183,6,2,3,"liveInfo",3,"liveExperiment",3,"1",6,2,3,"liveInfo",3,"liveParams",12,10,248,10,183,6,2,3,"liveInfo",3,"liveExperiment",3,"2",10,183,6,2,3,"liveInfo",3,"liveExperiment",3,"3",6,2,3,"liveInfo",3,"imageParams",3,"",2,"card-name",6,1,3,"cardName",null,3,"\n                ",null,null,3,"\n            ",null,3,"\n        ",null,3,"\n    "];
// Exports
module.exports = code;

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(104);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(3)["default"]
var update = add("4e4ddf40", content, true, {"manualInject":true});

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".link-no-underline_WJDLp:hover{text-decoration:none}.car-source_7vuQR{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.cos-wise .car-source_7vuQR{margin-bottom:-4.5px}.cos-pc .car-source_7vuQR{margin-top:.08rem}.car-source_7vuQR .car-source-left_3vUoH{display:-webkit-box;display:-webkit-flex;display:flex;max-width:calc(100% - .16rem);padding-right:.12rem;-webkit-box-sizing:border-box;box-sizing:border-box}.car-source_7vuQR .car-source-left_3vUoH .car-source-left-link_7uDgE{display:block;max-width:100%;overflow:hidden}.car-source_7vuQR .car-source-left_3vUoH .car-source-left-link_7uDgE .source-flex_4B5WS{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:100%}.car-source_7vuQR .car-source-left_3vUoH .car-source-left-link_7uDgE .source-flex_4B5WS .source-icon_7warV{margin-right:.06rem;width:calc(var(--font-size-scale, 1)*.16rem);height:calc(var(--font-size-scale, 1)*.16rem);border-radius:50%;-webkit-background-size:cover;background-size:cover;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:inset 0 0 0 1px #0000001a;box-shadow:inset 0 0 0 1px #0000001a}.cos-pc .car-source_7vuQR .car-source-left_3vUoH .car-source-left-link_7uDgE .source-flex_4B5WS .source-icon_7warV{margin-right:var(--cos-space-3xs)}.car-source_7vuQR .car-source-left_3vUoH .car-source-left-link_7uDgE .source-flex_4B5WS .source-text_6wa6e{-webkit-box-flex:1;-webkit-flex:1;flex:1}.cos-wise .car-source_7vuQR .car-source-left_3vUoH .car-source-left-link_7uDgE .source-flex_4B5WS .source-text_6wa6e{color:#b7b9c1}.car-source_7vuQR .car-source-left_3vUoH .baozhang-con_3WNJO{display:-webkit-box;display:-webkit-flex;display:flex}.car-source_7vuQR .car-source-right_6rsST{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}", ""]);
// Exports
exports.locals = {
	"link-no-underline": "link-no-underline_WJDLp",
	"linkNoUnderline": "link-no-underline_WJDLp",
	"car-source": "car-source_7vuQR",
	"carSource": "car-source_7vuQR",
	"car-source-left": "car-source-left_3vUoH",
	"carSourceLeft": "car-source-left_3vUoH",
	"car-source-left-link": "car-source-left-link_7uDgE",
	"carSourceLeftLink": "car-source-left-link_7uDgE",
	"source-flex": "source-flex_4B5WS",
	"sourceFlex": "source-flex_4B5WS",
	"source-icon": "source-icon_7warV",
	"sourceIcon": "source-icon_7warV",
	"source-text": "source-text_6wa6e",
	"sourceText": "source-text_6wa6e",
	"baozhang-con": "baozhang-con_3WNJO",
	"baozhangCon": "baozhang-con_3WNJO",
	"car-source-right": "car-source-right_6rsST",
	"carSourceRight": "car-source-right_6rsST"
};
module.exports = exports;


/***/ }),
/* 105 */
/***/ (function(module, exports) {

// Module
var code = [1,"div",12,2,"data-ushow",7,null,13,1,14,3,"module",3,"footer",1,8,6,1,3,"json",null,2,"data-uclk",7,null,13,1,14,3,"module",3,"footer",1,8,6,1,3,"json",null,33,"ubc-show",3,"",33,"ubc-clk",3,"",2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_xstyle",1,7,null,13,1,14,3,"padding-top",12,6,1,3,"isPc",3,".05rem",12,6,1,3,"sourceWisePaddingTop",6,1,3,"sourceWisePaddingTop",3,"9px",1,8,6,1,3,"_style",null,2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_xclass",1,7,null,6,2,3,"$style",3,"car-source",1,8,6,1,3,"_class",null,2,"id",6,1,3,"id",null,3,"\n        ",1,"object",10,2,"slot",3,"left",2,"rl-type",3,"stop",2,"class",7,null,6,2,3,"$style",3,"car-source-left",1,8,6,1,3,"_class",null,null,3,"\n            \n            ",1,"div",7,2,"class",7,null,16,4,17,3,"cos-block",17,3,"cos-color-text",17,6,2,3,"$style",3,"link-no-underline",17,6,2,3,"$style",3,"car-source-left-link",1,8,6,1,3,"_class",null,33,"ubc-clk",3,"",45,12,6,2,3,"sourceParams",3,"href",3,"a",3,"div",42,6,1,3,"sourceParams",null,3,"\n                ",1,"div",6,2,"class",7,null,6,2,3,"$style",3,"source-flex",1,8,6,1,3,"_class",null,null,3,"\n                    ",1,"div",2,2,"class",7,null,6,2,3,"$style",3,"source-icon",1,8,6,1,3,"_class",null,2,"style",9,null,3,3,"background-image: url(",7,null,6,2,3,"sourceData",3,"icon",1,8,6,1,3,"_style",null,3,")",null,3,"\n                    ",1,"span",2,2,"class",7,null,16,3,17,3,"cu-line-clamp-1",17,3,"cu-color-source",17,6,2,3,"$style",3,"source-text",1,8,6,1,3,"_class",null,null,9,null,3,3,"\n                        ",7,null,6,2,3,"sourceData",3,"text",null,3,"\n                    ",null,3,"\n                ",null,3,"\n            ",null,3,"\n            \n            ",1,"div",5,2,"class",3,"cos-space-ml-xxs",38,6,1,3,"isPc",null,3,"\n                ",1,"cosc-feedback",1,2,"options",6,1,3,"toolsProps",null,3,"\n            ",null,null,3,"\n            \n            ",1,"div",7,2,"class",7,null,6,2,3,"$style",3,"baozhang-con",1,8,6,1,3,"_class",null,2,"data-ushow",7,null,13,1,14,3,"module",3,"baozhang",1,8,6,1,3,"json",null,33,"ubc-show",3,"",38,6,1,3,"isBaozhang",null,3,"\n                ",1,"baozhang-pc",3,2,"tpl-info",6,1,3,"tplInfo",2,"ubc-public",6,1,3,"ubcPublic",38,6,1,3,"isPc",1,1,"baozhang-wise",3,2,"tpl-info",6,1,3,"tplInfo",2,"ubc-public",6,1,3,"ubcPublic",40,null,3,"\n            ",null,null,3,"\n        ",null,3,"\n        \n        ",1,"div",7,2,"slot",3,"right",2,"rl-type",3,"stop",2,"class",7,null,6,2,3,"$style",3,"car-source-right",1,8,6,1,3,"_class",null,38,11,33,6,1,3,"isPc",null,3,"\n            ",1,"cosc-feedback",1,2,"options",6,2,3,"sourceData",3,"feedback",null,3,"\n        ",null,null,3,"\n    "];
// Exports
module.exports = code;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(107);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(3)["default"]
var update = add("bd86d230", content, true, {"manualInject":true});

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".baozhang-link_jFjFW{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-left:.08rem;cursor:pointer}.baozhang-link_jFjFW .baozhang-icon_YQ4ch{display:inline-block;width:.45rem;height:.16rem;background:url(https://guarantee.cdn.bcebos.com/static%2Fm-vue%2Fstaic%2Fbule_bao.png);-webkit-background-size:100% 100%;background-size:100% 100%;-webkit-box-sizing:border-box;box-sizing:border-box}", ""]);
// Exports
exports.locals = {
	"baozhang-link": "baozhang-link_jFjFW",
	"baozhangLink": "baozhang-link_jFjFW",
	"baozhang-icon": "baozhang-icon_YQ4ch",
	"baozhangIcon": "baozhang-icon_YQ4ch"
};
module.exports = exports;


/***/ }),
/* 108 */
/***/ (function(module, exports) {

// Module
var code = [1,"div",7,2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_xclass",1,7,null,6,2,3,"$style",3,"baozhang-link",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",35,"mouseenter",8,6,1,3,"handleBaoEnter",1,6,1,3,"$event",null,null,3,"\n        ",1,"span",1,2,"class",7,null,6,2,3,"$style",3,"baozhang-icon",1,8,6,1,3,"_class",null,null,3,"\n    "];
// Exports
module.exports = code;

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(110);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(3)["default"]
var update = add("643bb74e", content, true, {"manualInject":true});

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".link-no-underline_kKBDS:hover{text-decoration:none}.baozhang-link_2z1CK{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-left:.08rem;min-width:.45rem;cursor:pointer}.baozhang-link_2z1CK .baozhang-icon_4QJHe{display:inline-block;width:.45rem;height:.16rem;background:url(https://guarantee.cdn.bcebos.com/static%2Fm-vue%2Fstaic%2Fbule_bao.png);-webkit-background-size:100% 100%;background-size:100% 100%;-webkit-box-sizing:border-box;box-sizing:border-box}.c-darkmode .baozhang-link_2z1CK .baozhang-icon_4QJHe{background:url(https://guarantee.cdn.bcebos.com/static%2Fm-vue%2Fstaic%2Fwhite_bao.png);-webkit-background-size:100% 100%;background-size:100% 100%}@media (prefers-color-scheme:dark){.baozhang-link_2z1CK .baozhang-icon_4QJHe{background:url(https://guarantee.cdn.bcebos.com/static%2Fm-vue%2Fstaic%2Fwhite_bao.png);-webkit-background-size:100% 100%;background-size:100% 100%}}.cos-fresh .baozhang-link_2z1CK .baozhang-icon_4QJHe{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:calc(var(--font-size-scale, 1)*14px);height:calc(var(--font-size-scale, 1)*16px);background:url(https://gips2.baidu.com/it/u=4947924,3161063690&fm=3028&app=3028&f=PNG&fmt=auto&q=100&size=f42_48);-webkit-background-size:100% 100%;background-size:100% 100%;-webkit-box-sizing:border-box;box-sizing:border-box}.cos-fresh .baozhang-link_2z1CK .baozhang-icon_4QJHe::before{content:'';position:absolute;width:30px;height:30px;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.c-darkmode .cos-fresh .baozhang-link_2z1CK .baozhang-icon_4QJHe{opacity:.5}@media (prefers-color-scheme:dark){.cos-fresh .baozhang-link_2z1CK .baozhang-icon_4QJHe{opacity:.5}}", ""]);
// Exports
exports.locals = {
	"link-no-underline": "link-no-underline_kKBDS",
	"linkNoUnderline": "link-no-underline_kKBDS",
	"baozhang-link": "baozhang-link_2z1CK",
	"baozhangLink": "baozhang-link_2z1CK",
	"baozhang-icon": "baozhang-icon_4QJHe",
	"baozhangIcon": "baozhang-icon_4QJHe"
};
module.exports = exports;


/***/ }),
/* 111 */
/***/ (function(module, exports) {

// Module
var code = [1,"div",6,2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_xclass",1,7,null,6,2,3,"$style",3,"baozhang-link",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",null,3,"\n        ",1,"span",3,2,"rl-type",3,"stop",2,"class",7,null,6,2,3,"$style",3,"baozhang-icon",1,8,6,1,3,"_class",null,35,"click",8,6,1,3,"onClickAssurance",1,6,1,3,"$event",null,null,3,"\n    "];
// Exports
module.exports = code;

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(113);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(3)["default"]
var update = add("36130c01", content, true, {"manualInject":true});

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".link-no-underline_2HJmL:hover{text-decoration:none}.image-info-mask_ZF84z{border-radius:var(--cos-rounded-sm);position:absolute;content:'';top:0;bottom:0;left:0;right:0;background-image:-webkit-gradient(linear,left top,left bottom,color-stop(0,transparent),color-stop(68%,rgba(0,0,0,.1)),to(rgba(0,0,0,.3)));background-image:-webkit-linear-gradient(transparent 0,rgba(0,0,0,.1) 68%,rgba(0,0,0,.3) 100%);background-image:linear-gradient(transparent 0,rgba(0,0,0,.1) 68%,rgba(0,0,0,.3) 100%)}.image-info-icon_1NwBE{position:absolute;right:9px;bottom:9px}.vr-img-pc_3USn5 .vr-img-a_7m69Q{color:var(--cos-color-text-inverse)}.vr-img-pc_3USn5 .vr-img-a_7m69Q:hover,.vr-img-pc_3USn5 .vr-img-a_7m69Q:visited{color:var(--cos-color-text-inverse)}.vr-img-pc_3USn5 .image-ratio-3-1_75E1t{overflow:hidden;padding-bottom:calc(33% - 9px);height:0}.vr-img-pc_3USn5 .vr-sign_7ouX4{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-radius:var(--cos-rounded-full);background-color:var(--cos-color-bg-inverse);position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);padding:var(--cos-space-xxs) var(--cos-space-xs);font-size:var(--cos-text-caption)}.vr-img-pc_3USn5 .vr-sign_7ouX4>img{margin-right:var(--cos-space-3xs);height:16px}.vr-img-pc_3USn5 .vr-sign_7ouX4 .vr-icon_2qvyG{margin-right:var(--cos-space-3xs);font-size:var(--cos-text-body-lg-higher)}", ""]);
// Exports
exports.locals = {
	"link-no-underline": "link-no-underline_2HJmL",
	"linkNoUnderline": "link-no-underline_2HJmL",
	"image-info-mask": "image-info-mask_ZF84z",
	"imageInfoMask": "image-info-mask_ZF84z",
	"image-info-icon": "image-info-icon_1NwBE",
	"imageInfoIcon": "image-info-icon_1NwBE",
	"vr-img-pc": "vr-img-pc_3USn5",
	"vrImgPc": "vr-img-pc_3USn5",
	"vr-img-a": "vr-img-a_7m69Q",
	"vrImgA": "vr-img-a_7m69Q",
	"image-ratio-3-1": "image-ratio-3-1_75E1t",
	"imageRatio31": "image-ratio-3-1_75E1t",
	"vr-sign": "vr-sign_7ouX4",
	"vrSign": "vr-sign_7ouX4",
	"vr-icon": "vr-icon_2qvyG",
	"vrIcon": "vr-icon_2qvyG"
};
module.exports = exports;


/***/ }),
/* 114 */
/***/ (function(module, exports) {

// Module
var code = [1,"div",6,2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",null,3,"\n        ",1,"div",7,2,"style",3,"--cos-grid-gutter: 16px;",2,"class",7,null,16,3,17,3,"cos-gutter",17,3,"cos-row",17,6,2,3,"$style",3,"vr-img-pc",1,8,6,1,3,"_class",null,null,3,"\n            ",1,"div",7,2,"rl-type",3,"stop",2,"class",7,null,16,2,17,3,"cos-col-9",17,6,2,3,"$style",3,"vr-img-col-left",1,8,6,1,3,"_class",null,null,3,"\n                ",1,"div",4,38,10,76,10,183,6,2,3,"tabItem",3,"text",3,"外观",6,2,3,"outerVrInfo",3,"isShow",null,3,"\n                    ",1,"image-vr-pc",7,2,"is-pc",6,1,3,"isPc",2,"tpl-info",6,1,3,"tplInfo",2,"outer-vr-info",6,1,3,"outerVrInfo",2,"current-tab",6,1,3,"currentTab",2,"query-choose",6,1,3,"queryChoose",2,"ubc-moudle",6,1,3,"ubcMoudle",2,"ubc-public",6,1,3,"ubcPublic",null,3,"\n                ",null,null,3,"\n                ",1,"div",4,38,10,76,10,248,10,183,6,2,3,"tabItem",3,"text",3,"内饰",10,183,6,2,3,"tabItem",3,"text",3,"空间",6,2,3,"vrInfo",3,"isShow",null,3,"\n                    ",1,"div",10,2,"data-ushow",7,null,13,1,14,3,"module",10,43,3,"inner_vr_",6,1,3,"ubcMoudle",1,8,6,1,3,"json",null,2,"data-uclk",7,null,13,1,14,3,"module",10,43,3,"inner_vr_",6,1,3,"ubcMoudle",1,8,6,1,3,"json",null,33,"ubc-show",3,"",33,"ubc-clk",3,"",2,"class",7,null,6,2,3,"$style",3,"vr-img-a",1,8,6,1,3,"_class",null,45,12,10,76,6,2,3,"vrInfo",3,"urlParams",6,3,3,"vrInfo",3,"urlParams",3,"href",3,"a",3,"div",42,6,2,3,"vrInfo",3,"urlParams",null,3,"\n                        ",1,"cos-image",7,2,"src",6,2,3,"vrInfo",3,"imgSrc",2,"class",7,null,16,3,17,3,"cos-image-fit-cover",17,3,"cos-image-hover",17,6,2,3,"$style",3,"image-ratio-3-1",1,8,6,1,3,"_class",null,null,3,"\n                            ",1,"div",1,2,"class",7,null,6,2,3,"$style",3,"image-info-mask",1,8,6,1,3,"_class",null,null,3,"\n                            ",1,"div",5,2,"class",7,null,6,2,3,"$style",3,"vr-sign",1,8,6,1,3,"_class",null,38,6,2,3,"vrInfo",3,"text",null,3,"\n                                ",1,"cos-icon",2,2,"name",3,"panorama",2,"class",7,null,6,2,3,"$style",3,"vr-icon",1,8,6,1,3,"_class",null,null,9,null,3,3,"\n                                ",7,null,6,2,3,"vrInfo",3,"text",null,3,"\n                            ",null,null,3,"\n                        ",null,3,"\n                    ",null,3,"\n                ",null,null,3,"\n            ",null,3,"\n            ",1,"div",7,2,"rl-type",3,"stop",2,"class",3,"cos-col-3",null,3,"\n                ",1,"div",9,2,"data-uclk",7,null,13,1,14,3,"module",3,"image",1,8,6,1,3,"json",null,33,"ubc-clk",3,"",2,"class",7,null,6,2,3,"$style",3,"vr-img-a",1,8,6,1,3,"_class",null,45,12,10,76,6,2,3,"vrInfo",3,"rightOutParams",6,3,3,"vrInfo",3,"rightOutParams",3,"href",3,"a",3,"div",38,10,76,10,183,6,2,3,"tabItem",3,"text",3,"外观",6,2,3,"outerVrInfo",3,"isShow",42,6,2,3,"vrInfo",3,"rightOutParams",null,3,"\n                    ",1,"cos-image",7,2,"src",6,2,3,"vrInfo",3,"rightOut",2,"class",3,"cos-image-1-1 cos-image-fit-cover cos-image-hover",null,3,"\n                        ",1,"div",1,2,"class",7,null,6,2,3,"$style",3,"image-info-mask",1,8,6,1,3,"_class",null,null,3,"\n                        ",1,"div",5,2,"class",7,null,6,2,3,"$style",3,"image-info-icon",1,8,6,1,3,"_class",null,38,6,2,3,"vrInfo",3,"rightOutCount",null,3,"\n                            ",1,"cos-icon",2,2,"name",3,"imagegroup",2,"class",3,"cos-space-mr-3xs",null,9,null,3,3,"\n                            ",7,null,6,2,3,"vrInfo",3,"rightOutCount",null,3,"\n                        ",null,null,3,"\n                    ",null,3,"\n                ",null,null,3,"\n                ",1,"div",9,2,"data-uclk",7,null,13,1,14,3,"module",3,"image",1,8,6,1,3,"json",null,33,"ubc-clk",3,"",2,"class",7,null,6,2,3,"$style",3,"vr-img-a",1,8,6,1,3,"_class",null,45,12,10,76,6,2,3,"vrInfo",3,"rightInnerParams",6,3,3,"vrInfo",3,"rightInnerParams",3,"href",3,"a",3,"div",38,10,76,10,248,10,183,6,2,3,"tabItem",3,"text",3,"内饰",10,183,6,2,3,"tabItem",3,"text",3,"空间",6,2,3,"vrInfo",3,"isShow",42,6,2,3,"vrInfo",3,"rightInnerParams",null,3,"\n                    ",1,"cos-image",7,2,"src",6,2,3,"vrInfo",3,"rightInner",2,"class",3,"cos-image-1-1 cos-image-fit-cover cos-image-hover",null,3,"\n                        ",1,"div",1,2,"class",7,null,6,2,3,"$style",3,"image-info-mask",1,8,6,1,3,"_class",null,null,3,"\n                        ",1,"div",5,2,"class",7,null,6,2,3,"$style",3,"image-info-icon",1,8,6,1,3,"_class",null,38,6,2,3,"vrInfo",3,"rightInnerCount",null,3,"\n                            ",1,"cos-icon",2,2,"name",3,"imagegroup",2,"class",3,"cos-space-mr-3xs",null,9,null,3,3,"\n                            ",7,null,6,2,3,"vrInfo",3,"rightInnerCount",null,3,"\n                        ",null,null,3,"\n                    ",null,3,"\n                ",null,null,3,"\n            ",null,3,"\n        ",null,3,"\n    "];
// Exports
module.exports = code;

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(116);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(3)["default"]
var update = add("256a486d", content, true, {"manualInject":true});

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".xr-container_7ksXl{border-radius:var(--cos-rounded-sm);position:relative;width:100%;overflow:hidden}.xr-container_7ksXl .vr-wrap_4ZgDZ{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-radius:var(--cos-rounded-sm);line-height:1;width:100%;height:100%;background-image:-webkit-linear-gradient(271deg,#dbe7f4 0,#fbfcfe 36%,#edf2f8 64%,#e1eaf4 100%);background-image:linear-gradient(179deg,#dbe7f4 0,#fbfcfe 36%,#edf2f8 64%,#e1eaf4 100%)}.xr-container_7ksXl .vr-wrap_4ZgDZ .loading-container_2yTjH{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:absolute;top:calc(50% - 40px);left:calc(50% - 45px);z-index:20;width:80px;height:90px}.xr-container_7ksXl .vr-wrap_4ZgDZ .vr-image-ab_73F1a{padding-bottom:calc(33% - 9px);width:100%}.xr-container_7ksXl .vr-wrap_4ZgDZ .vr-image-ab_73F1a.vr-image-ab-no-events_1GaG4{padding-bottom:calc(22% - 6px)}.xr-container_7ksXl .vr-wrap_4ZgDZ .vr-image-ab_73F1a .vr-image-real_6C21P{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto}.xr-container_7ksXl .vr-wrap_4ZgDZ .vr-image-ab_73F1a .vr-image-real_6C21P .vr-box_5kl2p{height:160px}.xr-container_7ksXl .vr-wrap_4ZgDZ .vr-sign_3pUFc{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-radius:var(--cos-rounded-full);background-color:var(--cos-color-bg-inverse);color:var(--cos-color-text-inverse);position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);padding:var(--cos-space-xxs) var(--cos-space-xs);font-size:var(--cos-text-caption)}.xr-container_7ksXl .vr-wrap_4ZgDZ .vr-sign_3pUFc>img{margin-right:var(--cos-space-3xs);height:16px}.xr-container_7ksXl .vr-wrap_4ZgDZ .vr-sign_3pUFc .vr-icon_3pChS{margin-right:var(--cos-space-3xs);font-size:var(--cos-text-body-lg-higher)}.xr-container_7ksXl .vr-theme_vx1MS{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:absolute;top:20px;bottom:20px;right:10px;margin-top:auto;margin-bottom:auto;z-index:9}.xr-container_7ksXl .vr-theme_vx1MS .vr-theme-ul_6xjRU{padding:var(--cos-space-3xs);overflow:scroll}.xr-container_7ksXl .vr-theme_vx1MS .vr-theme-ul_6xjRU::-webkit-scrollbar{display:none}.xr-container_7ksXl .vr-theme_vx1MS .vr-theme-ul_6xjRU .vr-theme-li_1H1LC{margin-top:var(--cos-space-xs);border-radius:var(--cos-rounded-full);position:relative;-webkit-box-flex:0;-webkit-flex:0 0 auto;flex:0 0 auto;width:9px;height:9px;cursor:pointer}.xr-container_7ksXl .vr-theme_vx1MS .vr-theme-ul_6xjRU .vr-theme-li_1H1LC:first-of-type{margin-top:var(--cos-space-none)}.xr-container_7ksXl .vr-theme_vx1MS .vr-theme-ul_6xjRU .vr-theme-li_1H1LC.item-choose_2WlTP:after{border-radius:var(--cos-rounded-full);content:'';position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:15px;height:15px;border:4px solid #ccc;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}", ""]);
// Exports
exports.locals = {
	"xr-container": "xr-container_7ksXl",
	"xrContainer": "xr-container_7ksXl",
	"vr-wrap": "vr-wrap_4ZgDZ",
	"vrWrap": "vr-wrap_4ZgDZ",
	"loading-container": "loading-container_2yTjH",
	"loadingContainer": "loading-container_2yTjH",
	"vr-image-ab": "vr-image-ab_73F1a",
	"vrImageAb": "vr-image-ab_73F1a",
	"vr-image-ab-no-events": "vr-image-ab-no-events_1GaG4",
	"vrImageAbNoEvents": "vr-image-ab-no-events_1GaG4",
	"vr-image-real": "vr-image-real_6C21P",
	"vrImageReal": "vr-image-real_6C21P",
	"vr-box": "vr-box_5kl2p",
	"vrBox": "vr-box_5kl2p",
	"vr-sign": "vr-sign_3pUFc",
	"vrSign": "vr-sign_3pUFc",
	"vr-icon": "vr-icon_3pChS",
	"vrIcon": "vr-icon_3pChS",
	"vr-theme": "vr-theme_vx1MS",
	"vrTheme": "vr-theme_vx1MS",
	"vr-theme-ul": "vr-theme-ul_6xjRU",
	"vrThemeUl": "vr-theme-ul_6xjRU",
	"vr-theme-li": "vr-theme-li_1H1LC",
	"vrThemeLi": "vr-theme-li_1H1LC",
	"item-choose": "item-choose_2WlTP",
	"itemChoose": "item-choose_2WlTP"
};
module.exports = exports;


/***/ }),
/* 117 */
/***/ (function(module, exports) {

// Module
var code = [1,"div",8,2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_xclass",1,7,null,6,2,3,"$style",3,"xr-container",1,8,6,1,3,"_class",null,2,"data-uclk",7,null,13,1,14,3,"module",12,6,1,3,"isNoEvents",6,2,3,"outerVrInfo",3,"type",10,43,3,"outer_vr_",6,1,3,"ubcMoudle",1,8,6,1,3,"json",null,33,"ubc-clk",3,"",2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",null,3,"\n        ",1,"div",16,2,"class",9,null,2,3,"cos-link ",7,null,6,2,3,"$style",3,"vr-wrap",1,8,6,1,3,"_class",null,35,"mousedown",8,6,1,3,"mouseEvent",1,6,1,3,"$event",null,35,"mousemove",8,6,1,3,"mouseEvent",1,6,1,3,"$event",null,35,"mouseup",8,6,1,3,"mouseEvent",1,6,1,3,"$event",null,35,"click",8,6,1,3,"mouseEvent",1,6,1,3,"$event",null,45,12,10,76,6,2,3,"outerVrInfo",3,"urlParams",6,3,3,"outerVrInfo",3,"urlParams",3,"href",3,"a",3,"div",42,6,2,3,"outerVrInfo",3,"urlParams",null,3,"\n            \n            ",1,"div",5,2,"class",7,null,6,2,3,"$style",3,"loading-container",1,8,6,1,3,"_class",null,38,6,1,3,"showLoading",null,3,"\n                ",1,"cosc-card-loading",null,null,3,"\n            ",null,null,3,"\n            ",1,"div",4,2,"class",7,null,16,2,17,6,2,3,"$style",3,"vr-image-ab",17,12,6,1,3,"isNoEvents",6,2,3,"$style",3,"vr-image-ab-no-events",3,"",1,8,6,1,3,"_class",null,null,3,"\n                ",1,"div",4,2,"class",7,null,6,2,3,"$style",3,"vr-image-real",1,8,6,1,3,"_class",null,null,3,"\n                    ",1,"div",5,2,"id",3,"vr-box",2,"class",7,null,6,2,3,"$style",3,"vr-box",1,8,6,1,3,"_class",null,35,"touchmove",8,6,1,3,"touchmove",1,6,1,3,"$event",null,41,3,"vrBox",null,3,"\n                    ",null,3,"\n                ",null,3,"\n            ",null,3,"\n            \n            ",1,"div",5,2,"class",7,null,6,2,3,"$style",3,"vr-sign",1,8,6,1,3,"_class",null,38,10,76,11,33,6,1,3,"showLoading",6,2,3,"outerVrInfo",3,"text",null,3,"\n                ",1,"cos-icon",2,2,"name",3,"panorama",2,"class",7,null,6,2,3,"$style",3,"vr-icon",1,8,6,1,3,"_class",null,null,9,null,3,3,"\n                ",7,null,6,2,3,"outerVrInfo",3,"text",null,3,"\n            ",null,null,3,"\n\n            \n            ",1,"div",6,2,"class",7,null,6,2,3,"$style",3,"vr-theme",1,8,6,1,3,"_class",null,35,"click",8,6,1,3,"touchColorList",1,6,1,3,"$event",null,38,10,76,11,33,6,1,3,"isNoEvents",10,76,11,33,6,1,3,"showLoading",10,76,6,2,3,"outerVrInfo",3,"theme",10,62,6,3,3,"outerVrInfo",3,"theme",3,"length",4,1,null,3,"\n                ",1,"div",5,2,"class",7,null,6,2,3,"$style",3,"vr-theme-ul",1,8,6,1,3,"_class",null,41,3,"tabsSub",null,3,"\n                    ",1,"div",4,2,"style",7,null,13,1,14,3,"background",6,2,3,"item",3,"gradientValue",1,8,6,1,3,"_style",null,2,"class",7,null,16,2,17,6,2,3,"$style",3,"vr-theme-li",17,12,10,183,6,1,3,"index",6,1,3,"active",6,2,3,"$style",3,"item-choose",3,"",1,8,6,1,3,"_class",null,35,"click",8,6,1,3,"chooseHandler",3,6,1,3,"$event",6,1,3,"index",6,1,3,"item",1,"stop",37,"item","index",null,6,2,3,"outerVrInfo",3,"theme",null,3,"\n                ",null,3,"\n            ",null,null,3,"\n        ",null,3,"\n    "];
// Exports
module.exports = code;

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(119);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(3)["default"]
var update = add("e57553a8", content, true, {"manualInject":true});

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".card-more_7JU0s{margin:11.5px var(--cos-space-none) -4.5px}.card-more_7JU0s .cos-more-link-icon{font-size:var(--cos-text-subtitle)}.cos-pc .card-more_7JU0s{margin-top:var(--cos-space-md)}.cos-pc .card-more_7JU0s:hover{opacity:var(--cos-opacity-100)}.cos-pc .card-more_7JU0s:hover .cos-more-link-icon,.cos-pc .card-more_7JU0s:hover .cos-more-link-text{color:#00c4c5}.new-style-row_2bUB5{height:1.27rem}.new-style-row_2bUB5.new-style-row-right-two_228sL{height:1.66rem}.new-style-row_2bUB5 .new-style-vr_3V6jz{height:100%}.new-style-row_2bUB5 .new-style-inner_1OGov{position:relative;height:100%;border-radius:.09rem 0 0 .09rem;overflow:hidden}.new-style-row_2bUB5 .new-style-inner_1OGov .new-style-inner-image_3B9vb{display:block;width:100%;height:100%;-webkit-background-size:100% 100%;background-size:100% 100%}.new-style-row_2bUB5 .new-style-inner_1OGov .vr-icon-tip_57yiO{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;width:.78rem;height:.28rem;background:rgba(0,0,0,.2);border-radius:.14rem;-webkit-box-sizing:border-box;box-sizing:border-box}.new-style-row_2bUB5 .new-style-inner_1OGov .vr-icon-tip_57yiO .icon_4rLzJ{width:.18rem;height:.18rem;background-image:url(https://youjia.cdn.bcebos.com/carFullViewVrIcon.png);background-repeat:no-repeat;-webkit-background-size:100% 100%;background-size:100% 100%;margin-right:.05rem}.new-style-row_2bUB5 .new-style-inner_1OGov .vr-icon-tip_57yiO .text_5o1pL{font-family:PingFangSC-Regular;font-size:.12rem;color:#fff;letter-spacing:0;line-height:.28rem;font-weight:400}.new-style-row_2bUB5 .new-style-image-big_6NnOv{width:100%;height:100%;border-radius:.09rem 0 0 .09rem;overflow:hidden}.new-style-row_2bUB5 .new-style-image-big_6NnOv .new-style-image-big-link_7pXiy{display:block;width:100%;height:100%}.new-style-row_2bUB5 .new-style-image-col_2NHqM{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.new-style-row_2bUB5 .new-style-image-col_2NHqM .new-style-image-con_2R2qA{margin:.02rem 0 0 .02rem;width:calc(50% - .01rem);height:.625rem;overflow:hidden}.new-style-row_2bUB5 .new-style-image-col_2NHqM .new-style-image-con_2R2qA:first-of-type,.new-style-row_2bUB5 .new-style-image-col_2NHqM .new-style-image-con_2R2qA:nth-child(2){margin-top:0}.new-style-row_2bUB5 .new-style-image-col_2NHqM .new-style-image-con_2R2qA:nth-child(2n-1){margin-left:0}.new-style-row_2bUB5 .new-style-image-col_2NHqM .new-style-image-con_2R2qA:nth-of-type(2){border-radius:0 .09rem 0 0}.new-style-row_2bUB5 .new-style-image-col_2NHqM .new-style-image-con_2R2qA:nth-of-type(4){border-radius:0 0 .09rem 0}.new-style-row_2bUB5 .new-style-image-col_2NHqM .new-style-image-con-right-two_656sr{margin-top:.02rem;width:100%;height:calc(50% - .01rem);overflow:hidden}.new-style-row_2bUB5 .new-style-image-col_2NHqM .new-style-image-con-right-two_656sr:first-of-type{margin-top:0;border-radius:0 .09rem 0 0}.new-style-row_2bUB5 .new-style-image-col_2NHqM .new-style-image-con-right-two_656sr:nth-child(2){border-radius:0 0 .09rem 0}.new-style-row_2bUB5 .new-style-image-col_2NHqM .new-style-image-link_4HTy3{position:relative;display:block;width:100%;height:100%}.new-style-row_2bUB5 .new-style-image-col_2NHqM .new-style-image-link_4HTy3 .image-slot_16tpp{position:absolute;right:.07rem;bottom:.055rem;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:.12rem;color:#fff;text-shadow:0 0 2px rgba(0,0,0,.2)}.new-style-row_2bUB5 .new-style-image-col_2NHqM .new-style-image-link_4HTy3 .image-slot_16tpp .image-slot-icon_6DOZh{font-size:.14rem;padding-right:.04rem}", ""]);
// Exports
exports.locals = {
	"card-more": "card-more_7JU0s",
	"cardMore": "card-more_7JU0s",
	"new-style-row": "new-style-row_2bUB5",
	"newStyleRow": "new-style-row_2bUB5",
	"new-style-row-right-two": "new-style-row-right-two_228sL",
	"newStyleRowRightTwo": "new-style-row-right-two_228sL",
	"new-style-vr": "new-style-vr_3V6jz",
	"newStyleVr": "new-style-vr_3V6jz",
	"new-style-inner": "new-style-inner_1OGov",
	"newStyleInner": "new-style-inner_1OGov",
	"new-style-inner-image": "new-style-inner-image_3B9vb",
	"newStyleInnerImage": "new-style-inner-image_3B9vb",
	"vr-icon-tip": "vr-icon-tip_57yiO",
	"vrIconTip": "vr-icon-tip_57yiO",
	"icon": "icon_4rLzJ",
	"text": "text_5o1pL",
	"new-style-image-big": "new-style-image-big_6NnOv",
	"newStyleImageBig": "new-style-image-big_6NnOv",
	"new-style-image-big-link": "new-style-image-big-link_7pXiy",
	"newStyleImageBigLink": "new-style-image-big-link_7pXiy",
	"new-style-image-col": "new-style-image-col_2NHqM",
	"newStyleImageCol": "new-style-image-col_2NHqM",
	"new-style-image-con": "new-style-image-con_2R2qA",
	"newStyleImageCon": "new-style-image-con_2R2qA",
	"new-style-image-con-right-two": "new-style-image-con-right-two_656sr",
	"newStyleImageConRightTwo": "new-style-image-con-right-two_656sr",
	"new-style-image-link": "new-style-image-link_4HTy3",
	"newStyleImageLink": "new-style-image-link_4HTy3",
	"image-slot": "image-slot_16tpp",
	"imageSlot": "image-slot_16tpp",
	"image-slot-icon": "image-slot-icon_6DOZh",
	"imageSlotIcon": "image-slot-icon_6DOZh"
};
module.exports = exports;


/***/ }),
/* 120 */
/***/ (function(module, exports) {

// Module
var code = [1,"div",6,2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",null,3,"\n        ",1,"car-tabs-cosmic",7,2,"is-first",6,1,3,"isFirst",2,"tpl-info",6,1,3,"tplInfo",2,"active-index",6,1,3,"queryChooseTabIdx",2,"tab-array",6,1,3,"tabList",null,3,"\n            ",1,"object",9,2,"slot",3,"tab-item",38,10,76,6,2,3,"tabItem",3,"imgList",6,3,3,"tabItem",3,"imgList",3,"length",null,3,"\n                ",1,"div",1,2,"class",3,"cos-space-mt-md",null,3,"\n                ",1,"div",4,38,11,33,6,1,3,"isPc",null,3,"\n                    ",1,"sc-row",6,2,"class",7,null,16,2,17,6,2,3,"$style",3,"new-style-row",17,12,10,183,6,2,3,"tabItem",3,"imageType",3,"左一右二",6,2,3,"$style",3,"new-style-row-right-two",3,"",1,8,6,1,3,"_class",null,null,3,"\n                        ",1,"sc-col",5,2,"span",12,10,183,6,2,3,"tabItem",3,"imageType",3,"左一右二",4,8,4,6,2,"style",3,"padding-right: .01rem;",null,3,"\n                            ",1,"template",4,38,10,76,11,33,6,1,3,"isFirst",10,76,10,121,6,2,3,"tplInfo",3,"order",4,5,10,76,10,183,6,2,3,"tabItem",3,"text",3,"外观",6,2,3,"compInfo",3,"outerVrShow",null,3,"\n                                ",1,"image-vr",9,2,"outer-vr-info",6,2,3,"compInfo",3,"outerVrInfo",2,"ubc-public",6,1,3,"ubcPublic",2,"tpl-info",6,1,3,"tplInfo",2,"current-tab",6,1,3,"currentTab",2,"query-choose",6,1,3,"queryChoose",2,"from",3,"new-style-vr",2,"ubc-moudle",3,"small",2,"is-pc",6,1,3,"isPc",2,"class",7,null,6,2,3,"$style",3,"new-style-vr",1,8,6,1,3,"_class",null,null,3,"\n                            ",2,1,"template",4,39,10,76,11,33,6,1,3,"isFirst",10,76,10,121,6,2,3,"tplInfo",3,"order",4,5,10,76,10,183,6,2,3,"tabItem",3,"text",3,"内饰",6,2,3,"vrInfo",3,"isShow",null,3,"\n                                ",1,"div",11,2,"rl-type",3,"stop",2,"data-ushow",7,null,13,1,14,3,"module",3,"inner_vr_small",1,8,6,1,3,"json",null,2,"data-uclk",7,null,13,1,14,3,"module",3,"inner_vr_small",1,8,6,1,3,"json",null,33,"ubc-show",3,"",33,"ubc-clk",3,"",2,"class",7,null,6,2,3,"$style",3,"new-style-inner",1,8,6,1,3,"_class",null,null,3,"\n                                    ",1,"div",4,2,"style",7,null,13,1,14,3,"background-image",10,43,10,43,3,"url(",6,2,3,"vrInfo",3,"imgSrc",3,")",1,8,6,1,3,"_style",null,2,"class",7,null,6,2,3,"$style",3,"new-style-inner-image",1,8,6,1,3,"_class",null,45,12,10,76,6,2,3,"vrInfo",3,"urlParams",6,3,3,"vrInfo",3,"urlParams",3,"href",3,"a",3,"div",42,6,2,3,"vrInfo",3,"urlParams",null,3,"\n                                    \n                                    ",1,"span",7,2,"class",7,null,6,2,3,"$style",3,"vr-icon-tip",1,8,6,1,3,"_class",null,38,10,183,6,2,3,"tabItem",3,"text",3,"内饰",null,3,"\n                                        ",1,"span",1,2,"class",7,null,6,2,3,"$style",3,"icon",1,8,6,1,3,"_class",null,null,3,"\n                                        ",1,"span",2,2,"class",7,null,6,2,3,"$style",3,"text",1,8,6,1,3,"_class",null,null,3,"VR内饰",null,3,"\n                                    ",null,null,3,"\n                                ",null,3,"\n                            ",1,"template",4,40,null,3,"\n                                ",1,"div",6,2,"data-uclk",7,null,13,1,14,3,"module",10,43,6,2,3,"tabItem",3,"text",3,"_image_0",1,8,6,1,3,"json",null,33,"ubc-clk",3,"",2,"class",7,null,6,2,3,"$style",3,"new-style-image-big",1,8,6,1,3,"_class",null,null,3,"\n                                    ",1,"sc-link",3,2,"style",7,null,13,1,14,3,"background",10,43,10,43,3,"url(",6,2,3,"tabItem",3,"leftImage",3,") no-repeat center/cover",1,8,6,1,3,"_style",null,2,"url",6,2,3,"tabItem",3,"params",2,"class",7,null,6,2,3,"$style",3,"new-style-image-big-link",1,8,6,1,3,"_class",null,null,3,"\n                                ",null,3,"\n                            ",null,3,"\n                        ",null,3,"\n                        ",1,"sc-col",6,2,"span",12,10,183,6,2,3,"tabItem",3,"imageType",3,"左一右二",4,4,4,6,2,"class",7,null,6,2,3,"$style",3,"new-style-image-col",1,8,6,1,3,"_class",null,2,"style",3,"padding-left: .01rem;",null,3,"\n                            ",1,"div",7,2,"data-uclk",7,null,13,1,14,3,"module",10,43,10,43,6,2,3,"tabItem",3,"text",3,"_image_",10,43,6,1,3,"imageIndex",6,2,3,"tabItem",3,"rightImageIndexAdd",1,8,6,1,3,"json",null,33,"ubc-clk",3,"",2,"class",7,null,16,1,17,12,10,183,6,2,3,"tabItem",3,"imageType",3,"左一右二",6,2,3,"$style",3,"new-style-image-con-right-two",6,2,3,"$style",3,"new-style-image-con",1,8,6,1,3,"_class",null,37,"image","imageIndex",null,6,2,3,"tabItem",3,"rightImageList",null,3,"\n                                ",1,"sc-link",6,2,"style",7,null,13,1,14,3,"background",10,43,10,43,3,"url(",6,1,3,"image",3,") no-repeat center/cover",1,8,6,1,3,"_style",null,2,"url",6,2,3,"tabItem",3,"params",2,"class",7,null,6,2,3,"$style",3,"new-style-image-link",1,8,6,1,3,"_class",null,null,3,"\n                                    ",1,"div",7,2,"class",7,null,6,2,3,"$style",3,"image-slot",1,8,6,1,3,"_class",null,38,10,76,10,183,6,1,3,"imageIndex",10,45,6,3,3,"tabItem",3,"rightImageList",3,"length",4,1,6,2,3,"tabItem",3,"imgCount",null,3,"\n                                        ",1,"sc-icon",2,2,"name",3,"imgs",2,"class",7,null,6,2,3,"$style",3,"image-slot-icon",1,8,6,1,3,"_class",null,null,3,"\n                                        ",1,"span",1,null,6,2,3,"tabItem",3,"imgCount",null,3,"\n                                    ",null,null,3,"\n                                ",null,3,"\n                            ",null,3,"\n                        ",null,3,"\n                    ",null,3,"\n                ",1,1,"div",5,2,"class",7,null,6,2,3,"$style",3,"vr-img-pc",1,8,6,1,3,"_class",null,40,null,3,"\n                    ",1,"vrimg-two",10,2,"is-first",6,1,3,"isFirst",2,"tpl-info",6,1,3,"tplInfo",2,"current-tab",6,1,3,"currentTab",2,"query-choose",6,1,3,"queryChoose",2,"outer-vr-info",6,2,3,"compInfo",3,"outerVrInfo",2,"vr-info",6,1,3,"vrInfo",2,"tab-item",6,1,3,"tabItem",2,"ubc-public",6,1,3,"ubcPublic",2,"ubc-moudle",3,"small",38,10,248,10,76,11,33,6,1,3,"isFirst",10,76,10,183,6,2,3,"tabItem",3,"text",3,"外观",6,2,3,"compInfo",3,"outerVrShow",10,76,10,183,6,2,3,"tabItem",3,"text",3,"内饰",6,2,3,"vrInfo",3,"isShow",1,1,"multimg-four",4,2,"url-params",6,2,3,"tabItem",3,"paramsCos",2,"img-count",6,2,3,"tabItem",3,"imgCount",2,"img-list",6,2,3,"tabItem",3,"imgListPc",40,null,3,"\n                ",null,3,"\n                \n                ",1,"object",3,null,3,"\n                    ",1,"div",7,2,"rl-type",3,"stop",2,"data-uclk",7,null,13,1,14,3,"module",3,"moreTab",1,8,6,1,3,"json",null,33,"ubc-clk",3,"",2,"class",7,null,6,2,3,"$style",3,"card-more",1,8,6,1,3,"_class",null,null,3,"\n                        ",1,"cos-more-link",1,2,"link-info",6,2,3,"tabItem",3,"paramsCos",null,3,"\n                    ",null,3,"\n                ",null,3,"\n            ",null,null,3,"\n        ",null,3,"\n    "];
// Exports
module.exports = code;

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(122);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(3)["default"]
var update = add("f25b1206", content, true, {"manualInject":true});

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".tabs-cosmic_23EJc.tabs-cosmic-first_1C1Gb .cos-tab-active{color:var(--cos-cyan-0)}@media (prefers-color-scheme:dark){.cos-wise .tabs-cosmic_23EJc.tabs-cosmic-first_1C1Gb .cos-tab-active{color:rgba(0,214,214,.7)}}.tabs-cosmic_23EJc.tabs-hide_36FBN .cos-tabs-header-container{display:none}.tabs-cosmic_23EJc .cos-tab-pane{width:100%}", ""]);
// Exports
exports.locals = {
	"tabs-cosmic": "tabs-cosmic_23EJc",
	"tabsCosmic": "tabs-cosmic_23EJc",
	"tabs-cosmic-first": "tabs-cosmic-first_1C1Gb",
	"tabsCosmicFirst": "tabs-cosmic-first_1C1Gb",
	"tabs-hide": "tabs-hide_36FBN",
	"tabsHide": "tabs-hide_36FBN"
};
module.exports = exports;


/***/ }),
/* 123 */
/***/ (function(module, exports) {

// Module
var code = [1,"div",9,2,"rl-type",3,"stop",2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",38,10,76,6,1,3,"tabArray",6,2,3,"tabArray",3,"length",41,3,"tabContent",null,3,"\n        \n        ",1,"cos-tabs",8,2,"class",7,null,16,3,17,6,2,3,"$style",3,"tabs-cosmic",17,12,6,1,3,"isFirst",6,2,3,"$style",3,"tabs-cosmic-first",3,"",17,12,10,248,10,62,6,2,3,"tabArray",3,"length",4,1,6,1,3,"isTabNavShow",3,"",6,2,3,"$style",3,"tabs-hide",1,8,6,1,3,"_class",null,2,"active-index",6,1,3,"activeIndexReal",35,"change",8,6,1,3,"handleChange",1,6,1,3,"$event",null,null,3,"\n            ",1,"cos-tab",3,2,"slot",3,"tab",37,"tabItem",null,null,6,1,3,"tabArray",null,9,null,3,3,"\n                ",7,null,6,2,3,"tabItem",3,"text",null,3,"\n            ",null,3,"\n            ",1,"cos-tab-pane",4,37,"tabItem","tabIndex",null,6,1,3,"tabArray",null,3,"\n                \n                ",1,"slot",2,2,"name",3,"tab-item",42,13,2,14,3,"tabItem",6,1,3,"tabItem",14,3,"tabIndex",6,1,3,"tabIndex",null,3,"\n            ",null,3,"\n        ",null,3,"\n    ",null];
// Exports
module.exports = code;

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(125);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(3)["default"]
var update = add("566822f5", content, true, {"manualInject":true});

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".image-info-mask_7triL{border-radius:var(--cos-rounded-sm);position:absolute;content:'';top:0;bottom:0;left:0;right:0;background-image:-webkit-gradient(linear,left top,left bottom,color-stop(0,transparent),color-stop(68%,rgba(0,0,0,.1)),to(rgba(0,0,0,.3)));background-image:-webkit-linear-gradient(transparent 0,rgba(0,0,0,.1) 68%,rgba(0,0,0,.3) 100%);background-image:linear-gradient(transparent 0,rgba(0,0,0,.1) 68%,rgba(0,0,0,.3) 100%)}.image-info-icon_4zHsH{position:absolute;right:9px;bottom:9px;font-size:var(--cos-text-caption)}.image-info-icon_4zHsH .cos-icon{margin-right:2px}.vr-img-a_64Xo2{color:var(--cos-color-text-inverse)}.vr-img-a_64Xo2:hover,.vr-img-a_64Xo2:visited{color:var(--cos-color-text-inverse)}.vr-img-multimg_6cPUg .image-info-mask_7triL{border-radius:var(--cos-rounded-none)}.vr-img-multimg_6cPUg .image-size_1RTLg{padding-bottom:61.3333%}.vr-img-multimg_6cPUg .left-image_3Vf21,.vr-img-multimg_6cPUg .left-image_3Vf21:before{border-top-right-radius:var(--cos-rounded-none);border-bottom-right-radius:var(--cos-rounded-none)}.vr-img-multimg_6cPUg .middle-image_qNEqJ,.vr-img-multimg_6cPUg .middle-image_qNEqJ:before{border-radius:var(--cos-rounded-none)}.vr-img-multimg_6cPUg .right-image_1pdPV,.vr-img-multimg_6cPUg .right-image_1pdPV:before{border-top-left-radius:var(--cos-rounded-none);border-bottom-left-radius:var(--cos-rounded-none)}", ""]);
// Exports
exports.locals = {
	"image-info-mask": "image-info-mask_7triL",
	"imageInfoMask": "image-info-mask_7triL",
	"image-info-icon": "image-info-icon_4zHsH",
	"imageInfoIcon": "image-info-icon_4zHsH",
	"vr-img-a": "vr-img-a_64Xo2",
	"vrImgA": "vr-img-a_64Xo2",
	"vr-img-multimg": "vr-img-multimg_6cPUg",
	"vrImgMultimg": "vr-img-multimg_6cPUg",
	"image-size": "image-size_1RTLg",
	"imageSize": "image-size_1RTLg",
	"left-image": "left-image_3Vf21",
	"leftImage": "left-image_3Vf21",
	"middle-image": "middle-image_qNEqJ",
	"middleImage": "middle-image_qNEqJ",
	"right-image": "right-image_1pdPV",
	"rightImage": "right-image_1pdPV"
};
module.exports = exports;


/***/ }),
/* 126 */
/***/ (function(module, exports) {

// Module
var code = [1,"div",7,2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",38,6,2,3,"imgList",3,"length",null,3,"\n        ",1,"div",5,2,"style",3,"--cos-grid-gutter: 2px;",2,"class",7,null,16,2,17,3,"cos-gutter",17,3,"cos-row",1,8,6,1,3,"_class",null,null,3,"\n            ",1,"div",6,2,"rl-type",3,"stop",2,"class",3,"cos-col-3",37,"item","index",null,6,1,3,"imgList",null,3,"\n                ",1,"div",8,2,"data-uclk",7,null,13,1,14,3,"module",3,"image",1,8,6,1,3,"json",null,33,"ubc-clk",3,"",2,"class",7,null,16,2,17,6,2,3,"$style",3,"vr-img-a",17,6,2,3,"$style",3,"vr-img-multimg",1,8,6,1,3,"_class",null,45,12,10,76,6,1,3,"urlParams",6,2,3,"urlParams",3,"href",3,"a",3,"div",42,6,1,3,"urlParams",null,3,"\n                    ",1,"cos-image",7,2,"src",6,1,3,"item",2,"class",7,null,16,5,17,3,"cos-image-3-2",17,3,"cos-image-fit-cover",17,3,"cos-image-hover",17,6,2,3,"$style",3,"image-size",17,12,10,183,6,1,3,"index",4,0,6,2,3,"$style",3,"left-image",12,10,183,6,1,3,"index",10,45,6,2,3,"imgList",3,"length",4,1,6,2,3,"$style",3,"right-image",6,2,3,"$style",3,"middle-image",1,8,6,1,3,"_class",null,null,3,"\n                        ",1,"div",1,2,"class",7,null,6,2,3,"$style",3,"image-info-mask",1,8,6,1,3,"_class",null,null,3,"\n                        ",1,"div",5,2,"class",7,null,6,2,3,"$style",3,"image-info-icon",1,8,6,1,3,"_class",null,38,10,76,10,183,6,1,3,"index",10,45,6,2,3,"imgList",3,"length",4,1,6,1,3,"imgCount",null,3,"\n                            ",1,"cos-icon",1,2,"name",3,"imagegroup",null,9,null,3,3,"\n                            ",7,null,6,1,3,"imgCount",null,3,"\n                        ",null,null,3,"\n                    ",null,3,"\n                ",null,3,"\n            ",null,3,"\n        ",null,3,"\n    ",null];
// Exports
module.exports = code;

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(128);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(3)["default"]
var update = add("9386ce2e", content, true, {"manualInject":true});

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".xr-container_2Lekf{width:100%;height:2.09rem}.xr-container_2Lekf .tab-small-border_4tApI{border-radius:.09rem 0 0 0!important}.xr-container_2Lekf .vr-wrap_4vq0C{position:relative;width:100%;height:100%;background-image:-webkit-linear-gradient(271deg,#dbe7f4 0,#fbfcfe 36%,#edf2f8 64%,#e1eaf4 100%);background-image:linear-gradient(179deg,#dbe7f4 0,#fbfcfe 36%,#edf2f8 64%,#e1eaf4 100%);border-radius:.09rem;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.xr-container_2Lekf .vr-wrap_4vq0C.new-style-vr_T3zJQ{border-radius:.09rem 0 0 .09rem}.xr-container_2Lekf .vr-wrap_4vq0C .loading-container_5qjWR{width:.8rem;height:.9rem;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:absolute;top:calc(50% - .4rem);left:calc(50% - .45rem);z-index:20}.xr-container_2Lekf .vr-wrap_4vq0C .vr_2WRM7{width:100%;height:100%}.xr-container_2Lekf .vr-wrap_4vq0C .vr_2WRM7 .vr-box_iLWSv{position:relative;width:100%;height:100%}.xr-container_2Lekf .vr-wrap_4vq0C .vr_2WRM7 .vr-theme-wrap_1o7Mb{position:absolute;overflow:hidden;z-index:9;right:0;bottom:0;left:50%;width:100%;text-align:center;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.xr-container_2Lekf .vr-wrap_4vq0C .vr_2WRM7 .vr-theme-wrap_1o7Mb .vr-theme_63xk7{overflow:scroll;white-space:nowrap;width:1.53rem;margin-bottom:.14rem;text-align:center;margin-left:calc(50% - .67rem)}.xr-container_2Lekf .vr-wrap_4vq0C .vr_2WRM7 .vr-theme-wrap_1o7Mb .vr-theme_63xk7 .vr-theme-item_66V8S{display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box;width:.15rem;height:.15rem;text-align:center;white-space:nowrap;border-radius:50%;margin-right:.15rem;vertical-align:middle}.xr-container_2Lekf .vr-wrap_4vq0C .vr_2WRM7 .vr-theme-wrap_1o7Mb .vr-theme_63xk7 .vr-theme-item_66V8S:last-child{margin-right:0}.xr-container_2Lekf .vr-wrap_4vq0C .vr_2WRM7 .vr-theme-wrap_1o7Mb .vr-theme_63xk7 .item-choose_3F1NN{border:.04rem solid #ccc;margin-right:.11rem!important;width:.23rem;height:.23rem}.xr-container_2Lekf .vr-wrap_4vq0C .vr_2WRM7 .vr-theme-wrap_1o7Mb .vr-theme_63xk7::-webkit-scrollbar{display:none}.xr-container_2Lekf .vr-icon-tip_3opBP{width:.78rem;height:.28rem;background:rgba(0,0,0,.2);border-radius:.14rem;position:absolute;top:.74rem;left:calc(50% - .39rem);-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-flex-wrap:nowrap;flex-wrap:nowrap}.xr-container_2Lekf .vr-icon-tip_3opBP.vr-icon-tip-new-style_2NnNu{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.xr-container_2Lekf .vr-icon-tip_3opBP .icon_2kVUv{width:.18rem;height:.18rem;background-image:url(https://youjia.cdn.bcebos.com/carFullViewVrIcon.png);background-repeat:no-repeat;-webkit-background-size:100% 100%;background-size:100% 100%;margin-right:.05rem}.xr-container_2Lekf .vr-icon-tip_3opBP .text_2Pm9S{font-family:PingFangSC-Regular;font-size:.12rem;color:#fff;letter-spacing:0;line-height:.28rem;font-weight:400}", ""]);
// Exports
exports.locals = {
	"xr-container": "xr-container_2Lekf",
	"xrContainer": "xr-container_2Lekf",
	"tab-small-border": "tab-small-border_4tApI",
	"tabSmallBorder": "tab-small-border_4tApI",
	"vr-wrap": "vr-wrap_4vq0C",
	"vrWrap": "vr-wrap_4vq0C",
	"new-style-vr": "new-style-vr_T3zJQ",
	"newStyleVr": "new-style-vr_T3zJQ",
	"loading-container": "loading-container_5qjWR",
	"loadingContainer": "loading-container_5qjWR",
	"vr": "vr_2WRM7",
	"vr-box": "vr-box_iLWSv",
	"vrBox": "vr-box_iLWSv",
	"vr-theme-wrap": "vr-theme-wrap_1o7Mb",
	"vrThemeWrap": "vr-theme-wrap_1o7Mb",
	"vr-theme": "vr-theme_63xk7",
	"vrTheme": "vr-theme_63xk7",
	"vr-theme-item": "vr-theme-item_66V8S",
	"vrThemeItem": "vr-theme-item_66V8S",
	"item-choose": "item-choose_3F1NN",
	"itemChoose": "item-choose_3F1NN",
	"vr-icon-tip": "vr-icon-tip_3opBP",
	"vrIconTip": "vr-icon-tip_3opBP",
	"vr-icon-tip-new-style": "vr-icon-tip-new-style_2NnNu",
	"vrIconTipNewStyle": "vr-icon-tip-new-style_2NnNu",
	"icon": "icon_2kVUv",
	"text": "text_2Pm9S"
};
module.exports = exports;


/***/ }),
/* 129 */
/***/ (function(module, exports) {

// Module
var code = [1,"div",9,2,"rl-type",3,"stop",2,"data-uclk",7,null,13,1,14,3,"module",10,43,3,"outer_vr_",6,1,3,"ubcMoudle",1,8,6,1,3,"json",null,33,"ubc-clk",3,"",2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_xclass",1,7,null,6,2,3,"$style",3,"xr-container",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",null,3,"\n        ",1,"div",11,2,"class",9,null,7,3,"\n                ",7,null,6,2,3,"$style",3,"vr-wrap",1,8,6,1,3,"_class",null,3,"\n                ",7,null,12,10,183,6,1,3,"from",3,"tab_small",6,2,3,"$style",3,"tab-small-border",3,"",1,8,6,1,3,"_class",null,3,"\n                ",7,null,12,10,183,6,1,3,"from",3,"new-style-vr",6,2,3,"$style",3,"new-style-vr",3,"",1,8,6,1,3,"_class",null,3,"\n            ",33,"enable-hotspot",3,"",45,12,10,76,6,2,3,"outerVrInfo",3,"urlParams",6,3,3,"outerVrInfo",3,"urlParams",3,"href",3,"a",3,"div",42,6,2,3,"outerVrInfo",3,"urlParams",null,3,"\n            \n            ",1,"div",5,2,"class",7,null,6,2,3,"$style",3,"loading-container",1,8,6,1,3,"_class",null,38,6,1,3,"showLoading",null,3,"\n                ",1,"sc-loading",null,null,3,"\n            ",null,null,3,"\n            ",1,"div",6,2,"class",7,null,6,2,3,"$style",3,"vr",1,8,6,1,3,"_class",null,null,3,"\n                ",1,"div",5,2,"id",3,"vr-box",2,"ref",3,"vrBox",2,"class",3,"vr-box",35,"touchmove",8,6,1,3,"touchmove",1,6,1,3,"$event",null,null,3,"\n                ",null,3,"\n                \n                ",1,"div",6,2,"class",7,null,6,2,3,"$style",3,"vr-theme-wrap",1,8,6,1,3,"_class",null,35,"click",8,6,1,3,"touchColorList",1,6,1,3,"$event",null,38,10,76,11,33,6,1,3,"showLoading",10,76,6,1,3,"outerVrInfo",6,2,3,"outerVrInfo",3,"theme",null,3,"\n                    ",1,"div",5,2,"class",7,null,6,2,3,"$style",3,"vr-theme",1,8,6,1,3,"_class",null,38,10,62,6,3,3,"outerVrInfo",3,"theme",3,"length",4,1,null,3,"\n                        ",1,"div",4,2,"style",7,null,13,1,14,3,"background",6,2,3,"item",3,"gradientValue",1,8,6,1,3,"_style",null,2,"class",9,null,5,3,"\n                                ",7,null,6,2,3,"$style",3,"vr-theme-item",1,8,6,1,3,"_class",null,3,"\n                                ",7,null,12,10,183,6,1,3,"index",6,1,3,"active",6,2,3,"$style",3,"item-choose",3,"",1,8,6,1,3,"_class",null,3,"\n                            ",35,"click",8,6,1,3,"chooseHandler",3,6,1,3,"$event",6,1,3,"index",6,1,3,"item",1,"stop",37,"item","index",null,6,2,3,"outerVrInfo",3,"theme",null,3,"\n                    ",null,null,3,"\n                ",null,null,3,"\n            ",null,3,"\n            \n            ",1,"div",7,2,"class",7,null,16,2,17,6,2,3,"$style",3,"vr-icon-tip",17,12,10,183,6,1,3,"from",3,"new-style-vr",6,2,3,"$style",3,"vr-icon-tip-new-style",3,"",1,8,6,1,3,"_class",null,38,11,33,6,1,3,"showLoading",null,3,"\n                ",1,"div",1,2,"class",7,null,6,2,3,"$style",3,"icon",1,8,6,1,3,"_class",null,null,3,"\n                ",1,"div",2,2,"class",7,null,6,2,3,"$style",3,"text",1,8,6,1,3,"_class",null,null,3,"\n                    VR外观\n                ",null,3,"\n            ",null,null,3,"\n        ",null,3,"\n    "];
// Exports
module.exports = code;

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(131);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(3)["default"]
var update = add("f041275a", content, true, {"manualInject":true});

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".card-custom_76IAd{--module-gap:var(--cos-space-md)}.cos-pc .card-custom_76IAd.card-custom-first-after_rYKdH{--module-gap:var(--cos-space-xs)}.cos-pc .card-custom_76IAd.card-custom-first_3gUNR{margin-bottom:41px}.cos-pc .card-custom_76IAd.card-custom-first_3gUNR .cosc-card-shadow::after{border-color:rgba(0,200,200,.18)}.card-custom_76IAd .model-name_63UNT{margin-top:var(--cos-space-md)}.cos-pc .card-custom_76IAd .model-name_63UNT{margin-top:var(--module-gap)}.card-custom_76IAd .model-name_63UNT>p{display:block;-webkit-box-orient:inline-axis;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:var(--cos-font-medium);-webkit-text-stroke:var(--cos-font-medium-stroke);font-family:PingFang SC,Arial,sans-serif;margin:-4px var(--cos-space-none) -5px;font-size:var(--cos-text-subtitle)}", ""]);
// Exports
exports.locals = {
	"card-custom": "card-custom_76IAd",
	"cardCustom": "card-custom_76IAd",
	"card-custom-first-after": "card-custom-first-after_rYKdH",
	"cardCustomFirstAfter": "card-custom-first-after_rYKdH",
	"card-custom-first": "card-custom-first_3gUNR",
	"cardCustomFirst": "card-custom-first_3gUNR",
	"model-name": "model-name_63UNT",
	"modelName": "model-name_63UNT"
};
module.exports = exports;


/***/ }),
/* 132 */
/***/ (function(module, exports) {

// Module
var code = [1,"div",11,2,"data-ucfg",6,2,3,"ubcData",3,"dataUcfg",2,"data-ushow",6,2,3,"ubcData",3,"dataUbcShow",2,"data-uclk",6,2,3,"ubcData",3,"dataUbcClk",33,"ubc-show",3,"",33,"ubc-clk",3,"",2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",null,3,"\n        ",1,"cosc-card",12,2,"link-info",6,2,3,"commonInfo",3,"cardParams",2,"tpl-info",6,1,3,"tplInfo",2,"light-bg",6,2,3,"fieldsData",3,"bgProps",2,"shadow",10,76,6,2,3,"baseCnf",3,"isPc",6,2,3,"baseCnf",3,"isFirst",2,"class",7,null,16,2,17,6,2,3,"$style",3,"card-custom",17,12,6,2,3,"baseCnf",3,"isFirst",6,2,3,"$style",3,"card-custom-first",6,2,3,"$style",3,"card-custom-first-after",1,8,6,1,3,"_class",null,null,3,"\n            \n            ",1,"car-header-cosmic",9,2,"is-pc",6,2,3,"baseCnf",3,"isPc",2,"is-first",6,2,3,"baseCnf",3,"isFirst",2,"is-first-adv",6,2,3,"baseCnf",3,"isFirstAdv",33,"is-space-bottom-none",3,"",2,"is-logo-show",10,60,6,2,3,"tplInfo",3,"order",4,6,2,"tpl-info",6,1,3,"tplInfo",2,"main-title",6,2,3,"commonInfo",3,"mainTitle",2,"ubc-public",6,2,3,"ubcData",3,"ubcPublic",2,"fields-data",6,1,3,"fieldsData",null,3,"\n\n            ",1,"fragment",8,38,6,2,3,"baseCnf",3,"isPc",null,3,"\n                \n                ",1,"swiper-info-pc",6,2,"base-cnf",6,1,3,"baseCnf",2,"tpl-info",6,1,3,"tplInfo",2,"ubc-public",6,2,3,"ubcData",3,"ubcPublic",2,"swiper-active-index",6,2,3,"componentInfo",3,"swiperActiveIndex",2,"swiper-list",6,2,3,"componentInfo",3,"swiperList",38,6,2,3,"componentInfo",3,"swiperShow",null,null,3,"\n\n                ",1,"div",5,2,"class",7,null,6,2,3,"$style",3,"model-name",1,8,6,1,3,"_class",null,38,6,2,3,"commonInfo",3,"currentModelName",null,3,"\n                    ",1,"p",1,null,6,2,3,"commonInfo",3,"currentModelName",null,3,"\n                ",null,null,3,"\n\n                \n                ",1,"tab-info-pc",7,2,"base-cnf",6,1,3,"baseCnf",2,"tpl-info",6,1,3,"tplInfo",2,"ubc-public",6,2,3,"ubcData",3,"ubcPublic",2,"common-info",6,1,3,"commonInfo",2,"tab-active-index",6,2,3,"componentInfo",3,"tabActiveIndex",2,"tab-list",6,2,3,"componentInfo",3,"tabList",38,6,2,3,"componentInfo",3,"tabShow",null,null,3,"\n            ",1,1,"fragment",8,40,null,3,"\n                \n                ",1,"swiper-info",6,2,"base-cnf",6,1,3,"baseCnf",2,"tpl-info",6,1,3,"tplInfo",2,"ubc-public",6,2,3,"ubcData",3,"ubcPublic",2,"swiper-active-index",6,2,3,"componentInfo",3,"swiperActiveIndex",2,"swiper-list",6,2,3,"componentInfo",3,"swiperList",38,6,2,3,"componentInfo",3,"swiperShow",null,null,3,"\n\n                ",1,"div",9,2,"data-ushow",7,null,6,2,3,"commonInfo",3,"modelUbc",1,8,6,1,3,"json",null,2,"data-uclk",7,null,6,2,3,"commonInfo",3,"modelUbc",1,8,6,1,3,"json",null,33,"ubc-show",3,"",33,"ubc-clk",3,"",2,"class",7,null,6,2,3,"$style",3,"model-name",1,8,6,1,3,"_class",null,38,6,2,3,"commonInfo",3,"currentModelName",null,3,"\n                    ",1,"p",1,null,6,2,3,"commonInfo",3,"currentModelName",null,3,"\n                ",null,null,3,"\n\n                \n                ",1,"tab-info",7,2,"base-cnf",6,1,3,"baseCnf",2,"tpl-info",6,1,3,"tplInfo",2,"ubc-public",6,2,3,"ubcData",3,"ubcPublic",2,"common-info",6,1,3,"commonInfo",2,"tab-active-index",6,2,3,"componentInfo",3,"tabActiveIndex",2,"tab-list",6,2,3,"componentInfo",3,"tabList",38,6,2,3,"componentInfo",3,"tabShow",null,null,3,"\n            ",null,3,"\n\n            \n            ",1,"footer",4,38,11,33,10,76,6,2,3,"baseCnf",3,"isPc",6,2,3,"baseCnf",3,"isFirst",null,3,"\n                ",1,"div",4,2,"style",7,null,13,1,14,3,"margin-top",12,6,2,3,"baseCnf",3,"isPc",3,"-6px",3,"0",1,8,6,1,3,"_style",null,null,3,"\n                    ",1,"car-source-cosmic",6,2,"is-pc",6,2,3,"baseCnf",3,"isPc",2,"is-first",6,2,3,"baseCnf",3,"isFirst",2,"source-data",6,2,3,"commonInfo",3,"sourceData",2,"source-url",6,2,3,"commonInfo",3,"sourceUrl",2,"source-params",6,2,3,"commonInfo",3,"cardParams",2,"source-wise-padding-top",3,"9px",null,3,"\n                ",null,3,"\n            ",null,null,3,"\n        ",null,3,"\n    "];
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
var add = __webpack_require__(3)["default"]
var update = add("7f19e0a6", content, true, {"manualInject":true});

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".image-info-mask_4b5cc{position:absolute;content:'';top:0;bottom:0;left:0;right:0;background-image:-webkit-gradient(linear,left top,left bottom,color-stop(0,transparent),color-stop(68%,rgba(0,0,0,.1)),to(rgba(0,0,0,.3)));background-image:-webkit-linear-gradient(transparent 0,rgba(0,0,0,.1) 68%,rgba(0,0,0,.3) 100%);background-image:linear-gradient(transparent 0,rgba(0,0,0,.1) 68%,rgba(0,0,0,.3) 100%)}.swiper-img_56xXA{margin-top:var(--cos-space-lg)}.swiper-img_56xXA.swiper-img-first_1EEAw .cos-swiper-indicator-active span{border-color:var(--cos-cyan-0)}.swiper-img_56xXA .cos-swiper-indicator{bottom:0}.swiper-img_56xXA .cos-swiper-content{border-radius:var(--cos-rounded-sm);border:1px solid var(--cos-color-border-media)}.swiper-img_56xXA.swiper-img-indicator_6ldtb .cos-swiper{padding-bottom:var(--cos-space-md)}.swiper-img_56xXA .vr-img-a_1JIu3{color:var(--cos-color-text-inverse)}.swiper-img_56xXA .vr-img-a_1JIu3:hover,.swiper-img_56xXA .vr-img-a_1JIu3:visited{color:var(--cos-color-text-inverse)}.swiper-img_56xXA .vr-img-a_1JIu3 .cos-image{border-radius:var(--cos-rounded-none);background-color:#f7f7f7}.swiper-img_56xXA .vr-img-a_1JIu3 .white-img_1HBUV{background-image:-webkit-linear-gradient(271deg,#dbe7f4 0,#fbfcfe 36%,#edf2f8 64%,#e1eaf4 100%);background-image:linear-gradient(179deg,#dbe7f4 0,#fbfcfe 36%,#edf2f8 64%,#e1eaf4 100%)}.swiper-img_56xXA .vr-img-a_1JIu3 .white-img_1HBUV .cos-image{background-color:unset}.swiper-img_56xXA .vr-img-a_1JIu3 .white-img_1HBUV .cos-image-body{left:0;right:0;margin-left:auto;margin-right:auto;width:75%;object-fit:contain}.swiper-img_56xXA .vr-img-a_1JIu3 .vr-sign_3xtV0{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-radius:var(--cos-rounded-full);background-color:var(--cos-color-bg-inverse);position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);padding:var(--cos-space-xxs) var(--cos-space-xs);font-size:var(--cos-text-caption)}.swiper-img_56xXA .vr-img-a_1JIu3 .vr-sign_3xtV0>img{margin-right:var(--cos-space-3xs);height:16px}.swiper-img_56xXA .vr-img-a_1JIu3 .vr-sign_3xtV0 .vr-icon_3blpa{margin-right:var(--cos-space-3xs);font-size:var(--cos-text-body-lg-higher)}", ""]);
// Exports
exports.locals = {
	"image-info-mask": "image-info-mask_4b5cc",
	"imageInfoMask": "image-info-mask_4b5cc",
	"swiper-img": "swiper-img_56xXA",
	"swiperImg": "swiper-img_56xXA",
	"swiper-img-first": "swiper-img-first_1EEAw",
	"swiperImgFirst": "swiper-img-first_1EEAw",
	"swiper-img-indicator": "swiper-img-indicator_6ldtb",
	"swiperImgIndicator": "swiper-img-indicator_6ldtb",
	"vr-img-a": "vr-img-a_1JIu3",
	"vrImgA": "vr-img-a_1JIu3",
	"white-img": "white-img_1HBUV",
	"whiteImg": "white-img_1HBUV",
	"vr-sign": "vr-sign_3xtV0",
	"vrSign": "vr-sign_3xtV0",
	"vr-icon": "vr-icon_3blpa",
	"vrIcon": "vr-icon_3blpa"
};
module.exports = exports;


/***/ }),
/* 135 */
/***/ (function(module, exports) {

// Module
var code = [1,"div",8,2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_xclass",1,7,null,16,3,17,6,2,3,"$style",3,"swiper-img",17,12,6,2,3,"baseCnf",3,"isFirst",6,2,3,"$style",3,"swiper-img-first",3,"",17,12,10,62,6,2,3,"swiperList",3,"length",4,1,6,2,3,"$style",3,"swiper-img-indicator",3,"",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",38,6,2,3,"swiperList",3,"length",41,3,"tabContent",null,3,"\n        ",1,"cos-swiper",10,2,"indicator",3,"center",2,"snap-align",3,"start",2,"snap-stop",3,"always",2,"space-between",4,0,2,"active-index",6,1,3,"swiperActiveIndex",35,"scroll",8,6,1,3,"handleScroll",1,6,1,3,"$event",null,35,"change",8,6,1,3,"handleChange",1,6,1,3,"$event",null,null,3,"\n            ",1,"cos-swiper-item",5,2,"width",3,"100%",37,"listItem",null,null,6,1,3,"swiperList",null,3,"\n                ",1,"object",3,null,3,"\n                    \n                    ",1,"div",14,2,"data-ushow",7,null,13,1,14,3,"module",6,2,3,"listItem",3,"type",1,8,6,1,3,"json",null,2,"data-uclk",7,null,13,1,14,3,"module",6,2,3,"listItem",3,"type",1,8,6,1,3,"json",null,33,"ubc-show",3,"",33,"ubc-clk",3,"",2,"class",7,null,6,2,3,"$style",3,"vr-img-a",1,8,6,1,3,"_class",null,45,12,10,76,6,2,3,"listItem",3,"urlParams",6,3,3,"listItem",3,"urlParams",3,"href",3,"a",3,"div",42,6,2,3,"listItem",3,"urlParams",null,3,"\n                        ",1,"div",4,38,10,183,6,2,3,"listItem",3,"type",3,"outer_vr",null,3,"\n                            ",1,"object",4,2,"style",3,"pointer-events: none;",null,3,"\n                                ",1,"image-vr",2,33,"is-no-events",3,"",2,"outer-vr-info",6,1,3,"listItem",null,3,"\n                            ",null,3,"\n                        ",null,null,3,"\n                        ",1,"div",5,2,"class",7,null,6,2,3,"$style",3,"white-img",1,8,6,1,3,"_class",null,38,10,183,6,2,3,"listItem",3,"type",3,"white",null,3,"\n                            ",1,"cos-image",5,2,"src",6,2,3,"listItem",3,"imgSrc",2,"class",7,null,16,2,17,3,"cos-image-16-9",17,3,"cos-image-fit-cover",1,8,6,1,3,"_class",null,null,3,"\n                                ",1,"div",5,2,"class",7,null,6,2,3,"$style",3,"vr-sign",1,8,6,1,3,"_class",null,38,6,2,3,"listItem",3,"text",null,3,"\n                                    ",1,"cos-icon",2,2,"name",3,"panorama",2,"class",7,null,6,2,3,"$style",3,"vr-icon",1,8,6,1,3,"_class",null,null,9,null,3,3,"\n                                    ",7,null,6,2,3,"listItem",3,"text",null,3,"\n                                ",null,null,3,"\n                            ",null,3,"\n                        ",null,null,3,"\n                        ",1,"div",4,38,10,183,6,2,3,"listItem",3,"type",3,"inner_vr",null,3,"\n                            ",1,"cos-image",7,2,"src",6,2,3,"listItem",3,"imgSrc",2,"class",7,null,16,2,17,3,"cos-image-16-9",17,3,"cos-image-fit-cover",1,8,6,1,3,"_class",null,null,3,"\n                                ",1,"div",1,2,"class",7,null,6,2,3,"$style",3,"image-info-mask",1,8,6,1,3,"_class",null,null,3,"\n                                ",1,"div",5,2,"class",7,null,6,2,3,"$style",3,"vr-sign",1,8,6,1,3,"_class",null,38,6,2,3,"listItem",3,"text",null,3,"\n                                    ",1,"cos-icon",2,2,"name",3,"panorama",2,"class",7,null,6,2,3,"$style",3,"vr-icon",1,8,6,1,3,"_class",null,null,9,null,3,3,"\n                                    ",7,null,6,2,3,"listItem",3,"text",null,3,"\n                                ",null,null,3,"\n                            ",null,3,"\n                        ",null,null,3,"\n                    ",null,3,"\n                ",null,3,"\n            ",null,3,"\n        ",null,3,"\n    ",null];
// Exports
module.exports = code;

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(137);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(3)["default"]
var update = add("375443f0", content, true, {"manualInject":true});

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".xr-container_5Nvt2{border-radius:var(--cos-rounded-sm);position:relative;width:100%;overflow:hidden}.xr-container_5Nvt2 .vr-wrap_1731I{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;line-height:1;color:var(--cos-color-text-inverse);width:100%;height:100%;background-image:-webkit-linear-gradient(271deg,#dbe7f4 0,#fbfcfe 36%,#edf2f8 64%,#e1eaf4 100%);background-image:linear-gradient(179deg,#dbe7f4 0,#fbfcfe 36%,#edf2f8 64%,#e1eaf4 100%)}.xr-container_5Nvt2 .vr-wrap_1731I .loading-container_3Y2IE{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:absolute;top:calc(50% - 40px);left:calc(50% - 45px);z-index:20;width:80px;height:90px}.xr-container_5Nvt2 .vr-wrap_1731I .vr_2MMdQ{position:relative;padding-bottom:calc(9/16*100%);width:100%;height:0}.xr-container_5Nvt2 .vr-wrap_1731I .vr_2MMdQ .vr-box_1YvtZ{position:absolute;top:0;left:0;width:100%;height:100%}.xr-container_5Nvt2 .vr-wrap_1731I .vr-sign_fQUKL{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-radius:var(--cos-rounded-full);background-color:var(--cos-color-bg-inverse);position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);padding:var(--cos-space-xxs) var(--cos-space-xs);font-size:var(--cos-text-caption)}.xr-container_5Nvt2 .vr-wrap_1731I .vr-sign_fQUKL>img{margin-right:var(--cos-space-3xs);height:16px}.xr-container_5Nvt2 .vr-wrap_1731I .vr-sign_fQUKL .vr-icon_SkS78{margin-right:var(--cos-space-3xs);font-size:var(--cos-text-body-lg-higher)}.xr-container_5Nvt2 .vr-theme_CPSWL{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:absolute;left:20px;right:20px;bottom:15px;margin-left:auto;margin-right:auto;z-index:9}.xr-container_5Nvt2 .vr-theme_CPSWL .vr-theme-ul_5HuJq{display:-webkit-box;display:-webkit-flex;display:flex;padding:var(--cos-space-3xs);width:153px;overflow:scroll}.xr-container_5Nvt2 .vr-theme_CPSWL .vr-theme-ul_5HuJq::-webkit-scrollbar{display:none}.xr-container_5Nvt2 .vr-theme_CPSWL .vr-theme-ul_5HuJq .vr-theme-li_5rfuc{margin-left:var(--cos-space-md);border-radius:var(--cos-rounded-full);position:relative;-webkit-box-flex:0;-webkit-flex:0 0 auto;flex:0 0 auto;width:15px;height:15px;cursor:pointer}.xr-container_5Nvt2 .vr-theme_CPSWL .vr-theme-ul_5HuJq .vr-theme-li_5rfuc:first-of-type{margin-left:var(--cos-space-none)}.xr-container_5Nvt2 .vr-theme_CPSWL .vr-theme-ul_5HuJq .vr-theme-li_5rfuc.item-choose_49w9M:after{border-radius:var(--cos-rounded-full);content:'';position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:21px;height:21px;border:4px solid #ccc;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}", ""]);
// Exports
exports.locals = {
	"xr-container": "xr-container_5Nvt2",
	"xrContainer": "xr-container_5Nvt2",
	"vr-wrap": "vr-wrap_1731I",
	"vrWrap": "vr-wrap_1731I",
	"loading-container": "loading-container_3Y2IE",
	"loadingContainer": "loading-container_3Y2IE",
	"vr": "vr_2MMdQ",
	"vr-box": "vr-box_1YvtZ",
	"vrBox": "vr-box_1YvtZ",
	"vr-sign": "vr-sign_fQUKL",
	"vrSign": "vr-sign_fQUKL",
	"vr-icon": "vr-icon_SkS78",
	"vrIcon": "vr-icon_SkS78",
	"vr-theme": "vr-theme_CPSWL",
	"vrTheme": "vr-theme_CPSWL",
	"vr-theme-ul": "vr-theme-ul_5HuJq",
	"vrThemeUl": "vr-theme-ul_5HuJq",
	"vr-theme-li": "vr-theme-li_5rfuc",
	"vrThemeLi": "vr-theme-li_5rfuc",
	"item-choose": "item-choose_49w9M",
	"itemChoose": "item-choose_49w9M"
};
module.exports = exports;


/***/ }),
/* 138 */
/***/ (function(module, exports) {

// Module
var code = [1,"div",7,2,"rl-type",3,"stop",2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_xclass",1,7,null,6,2,3,"$style",3,"xr-container",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",null,3,"\n        ",1,"div",10,2,"class",7,null,6,2,3,"$style",3,"vr-wrap",1,8,6,1,3,"_class",null,45,12,10,76,6,2,3,"outerVrInfo",3,"urlParams",6,3,3,"outerVrInfo",3,"urlParams",3,"href",3,"a",3,"div",42,6,2,3,"outerVrInfo",3,"urlParams",null,3,"\n            \n            ",1,"div",4,2,"class",7,null,6,2,3,"$style",3,"vr",1,8,6,1,3,"_class",null,null,3,"\n                ",1,"div",5,2,"id",3,"vr-box",2,"ref",3,"vrBox",2,"class",7,null,6,2,3,"$style",3,"vr-box",1,8,6,1,3,"_class",null,35,"touchmove",8,6,1,3,"touchmove",1,6,1,3,"$event",null,null,3,"\n                ",null,3,"\n            ",null,3,"\n            \n            ",1,"div",5,2,"class",7,null,6,2,3,"$style",3,"vr-sign",1,8,6,1,3,"_class",null,38,10,76,11,33,6,1,3,"showLoading",6,2,3,"outerVrInfo",3,"text",null,3,"\n                ",1,"cos-icon",2,2,"name",3,"panorama",2,"class",7,null,6,2,3,"$style",3,"vr-icon",1,8,6,1,3,"_class",null,null,9,null,3,3,"\n                ",7,null,6,2,3,"outerVrInfo",3,"text",null,3,"\n            ",null,null,3,"\n            \n            ",1,"div",6,2,"class",7,null,6,2,3,"$style",3,"vr-theme",1,8,6,1,3,"_class",null,35,"click",8,6,1,3,"touchColorList",1,6,1,3,"$event",null,38,10,76,11,33,6,1,3,"isNoEvents",10,76,11,33,6,1,3,"showLoading",10,76,6,1,3,"outerVrInfo",10,76,6,2,3,"outerVrInfo",3,"theme",10,62,6,3,3,"outerVrInfo",3,"theme",3,"length",4,1,null,3,"\n                ",1,"div",5,2,"class",7,null,6,2,3,"$style",3,"vr-theme-ul",1,8,6,1,3,"_class",null,41,3,"tabsSub",null,3,"\n                    ",1,"div",4,2,"style",7,null,13,1,14,3,"background",6,2,3,"item",3,"gradientValue",1,8,6,1,3,"_style",null,2,"class",7,null,16,2,17,6,2,3,"$style",3,"vr-theme-li",17,12,10,183,6,1,3,"index",6,1,3,"active",6,2,3,"$style",3,"item-choose",3,"",1,8,6,1,3,"_class",null,35,"click",8,6,1,3,"chooseHandler",3,6,1,3,"$event",6,1,3,"index",6,1,3,"item",1,"stop",37,"item","index",null,6,2,3,"outerVrInfo",3,"theme",null,3,"\n                ",null,3,"\n            ",null,null,3,"\n        ",null,3,"\n    "];
// Exports
module.exports = code;

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(140);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(3)["default"]
var update = add("e4ec5d00", content, true, {"manualInject":true});

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".car-tabs_7k2bf{margin-top:var(--cos-space-md)}.car-tabs_7k2bf.car-tabs-no-tabs_3rMJm{margin-top:var(--cos-space-3xs)}.car-tabs_7k2bf .card-more_6zeII{margin:11.5px var(--cos-space-none) -4.5px}.car-tabs_7k2bf .card-more_6zeII .cos-more-link-icon{font-size:var(--cos-text-subtitle)}", ""]);
// Exports
exports.locals = {
	"car-tabs": "car-tabs_7k2bf",
	"carTabs": "car-tabs_7k2bf",
	"car-tabs-no-tabs": "car-tabs-no-tabs_3rMJm",
	"carTabsNoTabs": "car-tabs-no-tabs_3rMJm",
	"card-more": "card-more_6zeII",
	"cardMore": "card-more_6zeII"
};
module.exports = exports;


/***/ }),
/* 141 */
/***/ (function(module, exports) {

// Module
var code = [1,"div",6,2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",null,3,"\n        ",1,"car-tabs-cosmic",8,2,"is-first",6,2,3,"baseCnf",3,"isFirst",2,"tpl-info",6,1,3,"tplInfo",2,"active-index",6,1,3,"tabActiveIndex",2,"tab-array",6,1,3,"tabList",2,"class",7,null,16,2,17,6,2,3,"$style",3,"car-tabs",17,12,10,62,6,2,3,"tabList",3,"length",4,1,3,"",6,2,3,"$style",3,"car-tabs-no-tabs",1,8,6,1,3,"_class",null,null,3,"\n            ",1,"object",7,2,"slot",3,"tab-item",38,10,76,6,2,3,"tabItem",3,"imgList",6,3,3,"tabItem",3,"imgList",3,"length",null,3,"\n                \n                ",1,"img-three",3,2,"common-info",6,1,3,"commonInfo",2,"tab-item",6,1,3,"tabItem",2,"tab-index",6,1,3,"tabIndex",null,3,"\n                \n                ",1,"div",9,2,"rl-type",3,"stop",2,"data-ushow",7,null,13,2,14,3,"module",10,43,3,"more_",6,1,3,"tabIndex",14,3,"modules",3,"more",1,8,6,1,3,"json",null,2,"data-uclk",7,null,13,2,14,3,"module",10,43,3,"more_",6,1,3,"tabIndex",14,3,"modules",3,"more",1,8,6,1,3,"json",null,33,"ubc-show",3,"",33,"ubc-clk",3,"",2,"class",7,null,6,2,3,"$style",3,"card-more",1,8,6,1,3,"_class",null,null,3,"\n                    ",1,"cos-more-link",1,2,"link-info",6,2,3,"commonInfo",3,"cardParams",null,3,"\n                ",null,3,"\n            ",null,null,3,"\n        ",null,3,"\n    "];
// Exports
module.exports = code;

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(143);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(3)["default"]
var update = add("f5b36144", content, true, {"manualInject":true});

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".image-info-mask_2hq0B{position:absolute;content:'';top:0;bottom:0;left:0;right:0;background-image:-webkit-gradient(linear,left top,left bottom,color-stop(0,transparent),color-stop(68%,rgba(0,0,0,.1)),to(rgba(0,0,0,.3)));background-image:-webkit-linear-gradient(transparent 0,rgba(0,0,0,.1) 68%,rgba(0,0,0,.3) 100%);background-image:linear-gradient(transparent 0,rgba(0,0,0,.1) 68%,rgba(0,0,0,.3) 100%)}.image-info-icon_6BvII{display:-webkit-box;display:-webkit-flex;display:flex;position:absolute;right:9px;bottom:9px}.vr-img-a_7rsxp{color:var(--cos-color-text-inverse)}.vr-img-a_7rsxp:hover,.vr-img-a_7rsxp:visited{color:var(--cos-color-text-inverse)}.image-row_33aMR{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;margin-top:var(--cos-space-md)}.image-row_33aMR.cos-gutter_73mdF{margin-right:-8px;margin-right:calc(-.5*var(--cos-grid-gutter));margin-left:-8px;margin-left:calc(-.5*var(--cos-grid-gutter))}.image-row_33aMR .image-col_v6QuZ:nth-child(n+4) .car-image_pxPb6{margin-top:2px}.image-row_33aMR .image-col_v6QuZ:first-of-type .car-image_pxPb6{border-top-left-radius:var(--cos-rounded-sm)}.image-row_33aMR .image-col_v6QuZ:nth-child(3) .car-image_pxPb6{border-top-right-radius:var(--cos-rounded-sm)}.image-row_33aMR .image-col_v6QuZ:nth-last-child(3) .car-image_pxPb6{border-bottom-left-radius:var(--cos-rounded-sm)}.image-row_33aMR .image-col_v6QuZ:last-of-type .car-image_pxPb6{border-bottom-right-radius:var(--cos-rounded-sm)}.image-row_33aMR .image-col_v6QuZ .car-image_pxPb6{border-radius:var(--cos-rounded-none)}", ""]);
// Exports
exports.locals = {
	"image-info-mask": "image-info-mask_2hq0B",
	"imageInfoMask": "image-info-mask_2hq0B",
	"image-info-icon": "image-info-icon_6BvII",
	"imageInfoIcon": "image-info-icon_6BvII",
	"vr-img-a": "vr-img-a_7rsxp",
	"vrImgA": "vr-img-a_7rsxp",
	"image-row": "image-row_33aMR",
	"imageRow": "image-row_33aMR",
	"cos-gutter": "cos-gutter_73mdF",
	"cosGutter": "cos-gutter_73mdF",
	"image-col": "image-col_v6QuZ",
	"imageCol": "image-col_v6QuZ",
	"car-image": "car-image_pxPb6",
	"carImage": "car-image_pxPb6"
};
module.exports = exports;


/***/ }),
/* 144 */
/***/ (function(module, exports) {

// Module
var code = [1,"div",8,2,"rl-type",3,"stop",2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",38,10,76,6,2,3,"tabItem",3,"imgList",6,3,3,"tabItem",3,"imgList",3,"length",null,3,"\n        ",1,"div",7,2,"style",3,"--cos-grid-gutter: 2px;",2,"class",7,null,16,2,17,3,"cos-gutter",17,6,2,3,"$style",3,"image-row",1,8,6,1,3,"_class",null,45,12,10,76,6,2,3,"commonInfo",3,"cardParams",6,3,3,"commonInfo",3,"cardParams",3,"href",3,"a",3,"div",42,6,2,3,"commonInfo",3,"cardParams",null,3,"\n            ",1,"div",5,2,"class",7,null,16,2,17,3,"cos-col-4",17,6,2,3,"$style",3,"image-col",1,8,6,1,3,"_class",null,37,"item","index",null,6,1,3,"imgL",null,3,"\n                ",1,"div",5,2,"data-uclk",7,null,13,2,14,3,"module",10,43,10,43,6,2,3,"tabItem",3,"text",3,"_image_",6,1,3,"index",14,3,"modules",3,"image",1,8,6,1,3,"json",null,2,"class",7,null,16,2,17,6,2,3,"$style",3,"vr-img-a",17,6,2,3,"$style",3,"vr-img-multimg",1,8,6,1,3,"_class",null,null,3,"\n                    ",1,"cos-image",7,2,"src",6,1,3,"item",2,"class",7,null,16,4,17,3,"cos-image-1-1",17,3,"cos-image-fit-cover",17,3,"cos-image-hover",17,6,2,3,"$style",3,"car-image",1,8,6,1,3,"_class",null,null,3,"\n                        ",1,"div",1,2,"class",7,null,6,2,3,"$style",3,"image-info-mask",1,8,6,1,3,"_class",null,null,3,"\n                        ",1,"div",5,2,"class",7,null,6,2,3,"$style",3,"image-info-icon",1,8,6,1,3,"_class",null,38,10,76,10,183,6,1,3,"index",10,45,6,2,3,"imgL",3,"length",4,1,6,2,3,"tabItem",3,"imgCount",null,3,"\n                            ",1,"cos-icon",2,2,"name",3,"imagegroup",2,"class",3,"cos-space-mr-3xs",null,9,null,3,3,"\n                            ",7,null,6,2,3,"tabItem",3,"imgCount",null,3,"\n                        ",null,null,3,"\n                    ",null,3,"\n                ",null,3,"\n            ",null,3,"\n        ",null,3,"\n    ",null];
// Exports
module.exports = code;

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(146);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(3)["default"]
var update = add("08d0cb42", content, true, {"manualInject":true});

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".image-info-mask_7etRh{position:absolute;content:'';top:0;bottom:0;left:0;right:0;background-image:-webkit-gradient(linear,left top,left bottom,color-stop(0,transparent),color-stop(68%,rgba(0,0,0,.1)),to(rgba(0,0,0,.3)));background-image:-webkit-linear-gradient(transparent 0,rgba(0,0,0,.1) 68%,rgba(0,0,0,.3) 100%);background-image:linear-gradient(transparent 0,rgba(0,0,0,.1) 68%,rgba(0,0,0,.3) 100%)}.swiper-img_2Jbav{margin-top:var(--module-gap)}.swiper-img_2Jbav .cos-swiper-indicator{display:none}.swiper-img_2Jbav .cos-swiper-content{border-radius:var(--cos-rounded-sm);border:1px solid var(--cos-color-border-media)}.cos-pc .swiper-img_2Jbav .scroll-con-first_4stUu .cos-swiper-control-prev:hover .cos-swiper-control-icon,.cos-pc .swiper-img_2Jbav .scroll-con-first_4stUu .cos-swiper-control-next:hover .cos-swiper-control-icon{color:var(--cos-cyan-0)}.swiper-img_2Jbav .vr-img-a_1no2N{color:var(--cos-color-text-inverse)}.swiper-img_2Jbav .vr-img-a_1no2N:hover,.swiper-img_2Jbav .vr-img-a_1no2N:visited{color:var(--cos-color-text-inverse)}.swiper-img_2Jbav .vr-img-a_1no2N .cos-image{border-radius:var(--cos-rounded-none);background-color:#f7f7f7}.swiper-img_2Jbav .vr-img-a_1no2N .white-img_3lVHA{background-image:-webkit-linear-gradient(271deg,#dbe7f4 0,#fbfcfe 36%,#edf2f8 64%,#e1eaf4 100%);background-image:linear-gradient(179deg,#dbe7f4 0,#fbfcfe 36%,#edf2f8 64%,#e1eaf4 100%)}.swiper-img_2Jbav .vr-img-a_1no2N .white-img_3lVHA .cos-image{background-color:unset}.swiper-img_2Jbav .vr-img-a_1no2N .image-ratio-width-full_1gkFN{overflow:hidden;padding-bottom:calc(22% - 6px);height:0}.swiper-img_2Jbav .vr-img-a_1no2N .vr-sign_1OJk9{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-radius:var(--cos-rounded-full);background-color:var(--cos-color-bg-inverse);position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);padding:var(--cos-space-xxs) var(--cos-space-xs);font-size:var(--cos-text-caption)}.swiper-img_2Jbav .vr-img-a_1no2N .vr-sign_1OJk9>img{margin-right:var(--cos-space-3xs);height:16px}.swiper-img_2Jbav .vr-img-a_1no2N .vr-sign_1OJk9 .vr-icon_5TiTn{margin-right:var(--cos-space-3xs);font-size:var(--cos-text-body-lg-higher)}", ""]);
// Exports
exports.locals = {
	"image-info-mask": "image-info-mask_7etRh",
	"imageInfoMask": "image-info-mask_7etRh",
	"swiper-img": "swiper-img_2Jbav",
	"swiperImg": "swiper-img_2Jbav",
	"scroll-con-first": "scroll-con-first_4stUu",
	"scrollConFirst": "scroll-con-first_4stUu",
	"vr-img-a": "vr-img-a_1no2N",
	"vrImgA": "vr-img-a_1no2N",
	"white-img": "white-img_3lVHA",
	"whiteImg": "white-img_3lVHA",
	"image-ratio-width-full": "image-ratio-width-full_1gkFN",
	"imageRatioWidthFull": "image-ratio-width-full_1gkFN",
	"vr-sign": "vr-sign_1OJk9",
	"vrSign": "vr-sign_1OJk9",
	"vr-icon": "vr-icon_5TiTn",
	"vrIcon": "vr-icon_5TiTn"
};
module.exports = exports;


/***/ }),
/* 147 */
/***/ (function(module, exports) {

// Module
var code = [1,"div",7,2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_xclass",1,7,null,16,2,17,6,2,3,"$style",3,"swiper-img",17,12,10,62,6,2,3,"swiperList",3,"length",4,1,6,2,3,"$style",3,"swiper-img-indicator",3,"",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",38,6,2,3,"swiperList",3,"length",null,3,"\n        ",1,"cos-swiper",10,2,"indicator",3,"center",2,"snap-align",3,"start",2,"snap-stop",3,"always",2,"space-between",4,0,2,"active-index",6,1,3,"swiperActiveIndex",2,"class",7,null,16,1,17,12,6,2,3,"baseCnf",3,"isFirst",6,2,3,"$style",3,"scroll-con-first",3,"",1,8,6,1,3,"_class",null,35,"scroll",8,6,1,3,"handleScroll",1,6,1,3,"$event",null,null,3,"\n            ",1,"cos-swiper-item",5,2,"width",3,"100%",37,"listItem",null,null,6,1,3,"swiperList",null,3,"\n                ",1,"object",3,null,3,"\n                    \n                    ",1,"div",14,2,"data-ushow",7,null,13,1,14,3,"module",6,2,3,"listItem",3,"type",1,8,6,1,3,"json",null,2,"data-uclk",7,null,13,1,14,3,"module",6,2,3,"listItem",3,"type",1,8,6,1,3,"json",null,33,"ubc-show",3,"",33,"ubc-clk",3,"",2,"class",7,null,6,2,3,"$style",3,"vr-img-a",1,8,6,1,3,"_class",null,45,12,10,76,6,2,3,"listItem",3,"urlParams",6,3,3,"listItem",3,"urlParams",3,"href",3,"a",3,"div",42,6,2,3,"listItem",3,"urlParams",null,3,"\n                        ",1,"object",4,38,10,183,6,2,3,"listItem",3,"type",3,"outer_vr",null,3,"\n                            ",1,"image-vr",2,33,"is-no-events",3,"",2,"outer-vr-info",6,1,3,"listItem",null,3,"\n                        ",null,null,3,"\n                        ",1,"div",5,2,"class",7,null,6,2,3,"$style",3,"white-img",1,8,6,1,3,"_class",null,38,10,183,6,2,3,"listItem",3,"type",3,"white",null,3,"\n                            ",1,"cos-image",5,2,"src",6,2,3,"listItem",3,"imgSrc",2,"class",7,null,16,3,17,3,"cos-image-fit-contain",17,3,"cos-image-hover",17,6,2,3,"$style",3,"image-ratio-width-full",1,8,6,1,3,"_class",null,null,3,"\n                                ",1,"div",5,2,"class",7,null,6,2,3,"$style",3,"vr-sign",1,8,6,1,3,"_class",null,38,6,2,3,"listItem",3,"text",null,3,"\n                                    ",1,"cos-icon",2,2,"name",3,"panorama",2,"class",7,null,6,2,3,"$style",3,"vr-icon",1,8,6,1,3,"_class",null,null,9,null,3,3,"\n                                    ",7,null,6,2,3,"listItem",3,"text",null,3,"\n                                ",null,null,3,"\n                            ",null,3,"\n                        ",null,null,3,"\n                        ",1,"cos-image",8,2,"src",6,2,3,"listItem",3,"imgSrc",2,"class",7,null,16,3,17,3,"cos-image-fit-cover",17,3,"cos-image-hover",17,6,2,3,"$style",3,"image-ratio-width-full",1,8,6,1,3,"_class",null,38,10,183,6,2,3,"listItem",3,"type",3,"inner_vr",null,3,"\n                            ",1,"div",1,2,"class",7,null,6,2,3,"$style",3,"image-info-mask",1,8,6,1,3,"_class",null,null,3,"\n                            ",1,"div",5,2,"class",7,null,6,2,3,"$style",3,"vr-sign",1,8,6,1,3,"_class",null,38,6,2,3,"listItem",3,"text",null,3,"\n                                ",1,"cos-icon",2,2,"name",3,"panorama",2,"class",7,null,6,2,3,"$style",3,"vr-icon",1,8,6,1,3,"_class",null,null,9,null,3,3,"\n                                ",7,null,6,2,3,"listItem",3,"text",null,3,"\n                            ",null,null,3,"\n                        ",null,null,3,"\n                    ",null,3,"\n                ",null,3,"\n            ",null,3,"\n        ",null,3,"\n    ",null];
// Exports
module.exports = code;

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(149);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(3)["default"]
var update = add("7152d7e4", content, true, {"manualInject":true});

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".car-tabs_5EbH2{margin-top:var(--module-gap)}.car-tabs_5EbH2.car-tabs-no-tabs_1Fxik{margin-top:var(--cos-space-3xs)}.car-tabs_5EbH2 .card-more_7AeHX{margin:11.5px var(--cos-space-none) -4.5px}.car-tabs_5EbH2 .card-more_7AeHX.card-more-first-after_64fop{margin-top:5.5px}.car-tabs_5EbH2 .card-more_7AeHX .cos-more-link-icon{font-size:var(--cos-text-subtitle)}.cos-pc .car-tabs_5EbH2 .card-more_7AeHX .more-link-first_3WUl0{margin-bottom:-30px}.cos-pc .car-tabs_5EbH2 .card-more_7AeHX .more-link-first_3WUl0 .cos-more-link-container{position:relative;z-index:1;background-color:var(--cos-gray--5)}.cos-pc .car-tabs_5EbH2 .card-more_7AeHX .more-link-first_3WUl0 .cos-more-link-container:hover{background-color:var(--cos-gray--4)}.cos-pc .car-tabs_5EbH2 .card-more_7AeHX .more-link-first-after_MLSvm .cos-more-link-container{padding:var(--cos-space-none);border:0}.cos-pc .car-tabs_5EbH2 .card-more_7AeHX .more-link-first-after_MLSvm .cos-more-link-container:hover{background:0 0}", ""]);
// Exports
exports.locals = {
	"car-tabs": "car-tabs_5EbH2",
	"carTabs": "car-tabs_5EbH2",
	"car-tabs-no-tabs": "car-tabs-no-tabs_1Fxik",
	"carTabsNoTabs": "car-tabs-no-tabs_1Fxik",
	"card-more": "card-more_7AeHX",
	"cardMore": "card-more_7AeHX",
	"card-more-first-after": "card-more-first-after_64fop",
	"cardMoreFirstAfter": "card-more-first-after_64fop",
	"more-link-first": "more-link-first_3WUl0",
	"moreLinkFirst": "more-link-first_3WUl0",
	"more-link-first-after": "more-link-first-after_MLSvm",
	"moreLinkFirstAfter": "more-link-first-after_MLSvm"
};
module.exports = exports;


/***/ }),
/* 150 */
/***/ (function(module, exports) {

// Module
var code = [1,"div",6,2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",null,3,"\n        ",1,"car-tabs-cosmic",8,2,"is-first",6,2,3,"baseCnf",3,"isFirst",2,"tpl-info",6,1,3,"tplInfo",2,"active-index",6,1,3,"tabActiveIndex",2,"tab-array",6,1,3,"tabList",2,"class",7,null,16,2,17,6,2,3,"$style",3,"car-tabs",17,12,10,62,6,2,3,"tabList",3,"length",4,1,3,"",6,2,3,"$style",3,"car-tabs-no-tabs",1,8,6,1,3,"_class",null,null,3,"\n            ",1,"object",7,2,"slot",3,"tab-item",38,10,76,6,2,3,"tabItem",3,"imgList",6,3,3,"tabItem",3,"imgList",3,"length",null,3,"\n                \n                ",1,"img-five",3,2,"common-info",6,1,3,"commonInfo",2,"tab-item",6,1,3,"tabItem",2,"tab-index",6,1,3,"tabIndex",null,3,"\n                \n                ",1,"div",9,2,"rl-type",3,"stop",2,"data-ushow",7,null,13,2,14,3,"module",10,43,3,"more_",6,1,3,"tabIndex",14,3,"modules",3,"more",1,8,6,1,3,"json",null,2,"data-uclk",7,null,13,2,14,3,"module",10,43,3,"more_",6,1,3,"tabIndex",14,3,"modules",3,"more",1,8,6,1,3,"json",null,33,"ubc-show",3,"",33,"ubc-clk",3,"",2,"class",7,null,16,2,17,6,2,3,"$style",3,"card-more",17,12,6,2,3,"baseCnf",3,"isFirst",3,"",6,2,3,"$style",3,"card-more-first-after",1,8,6,1,3,"_class",null,null,3,"\n                    ",1,"cos-more-link",2,2,"link-info",6,2,3,"commonInfo",3,"cardParams",2,"class",7,null,16,1,17,12,6,2,3,"baseCnf",3,"isFirst",6,2,3,"$style",3,"more-link-first",6,2,3,"$style",3,"more-link-first-after",1,8,6,1,3,"_class",null,null,3,"\n                ",null,3,"\n            ",null,null,3,"\n        ",null,3,"\n    "];
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
var add = __webpack_require__(3)["default"]
var update = add("0d79ffa4", content, true, {"manualInject":true});

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".image-info-mask_1LawS{position:absolute;content:'';top:0;bottom:0;left:0;right:0;background-image:-webkit-gradient(linear,left top,left bottom,color-stop(0,transparent),color-stop(68%,rgba(0,0,0,.1)),to(rgba(0,0,0,.3)));background-image:-webkit-linear-gradient(transparent 0,rgba(0,0,0,.1) 68%,rgba(0,0,0,.3) 100%);background-image:linear-gradient(transparent 0,rgba(0,0,0,.1) 68%,rgba(0,0,0,.3) 100%)}.image-info-icon_3KGiz{display:-webkit-box;display:-webkit-flex;display:flex;position:absolute;right:8px;bottom:8px}.vr-img-a_2Osdc{color:var(--cos-color-text-inverse)}.vr-img-a_2Osdc:hover,.vr-img-a_2Osdc:visited{color:var(--cos-color-text-inverse)}.image-row_6BDhB{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;margin-top:var(--module-gap)}.image-row_6BDhB.cos-gutter_5AcOI{margin-right:-8px;margin-right:calc(-.5*var(--cos-grid-gutter));margin-left:-8px;margin-left:calc(-.5*var(--cos-grid-gutter))}.image-row_6BDhB .image-col_4DFph{width:calc(20% - var(--cos-grid-gutter));padding-left:calc(var(--cos-grid-gutter)*.5);padding-right:calc(var(--cos-grid-gutter)*.5)}.image-row_6BDhB .image-col_4DFph:nth-child(n+6) .car-image_2943S{margin-top:2px}.image-row_6BDhB .image-col_4DFph:first-of-type .car-image_2943S{border-top-left-radius:var(--cos-rounded-sm)}.image-row_6BDhB .image-col_4DFph:nth-child(5) .car-image_2943S{border-top-right-radius:var(--cos-rounded-sm)}.image-row_6BDhB .image-col_4DFph:nth-last-child(5) .car-image_2943S{border-bottom-left-radius:var(--cos-rounded-sm)}.image-row_6BDhB .image-col_4DFph:last-of-type .car-image_2943S{border-bottom-right-radius:var(--cos-rounded-sm)}.image-row_6BDhB .image-col_4DFph .car-image_2943S{border-radius:var(--cos-rounded-none)}", ""]);
// Exports
exports.locals = {
	"image-info-mask": "image-info-mask_1LawS",
	"imageInfoMask": "image-info-mask_1LawS",
	"image-info-icon": "image-info-icon_3KGiz",
	"imageInfoIcon": "image-info-icon_3KGiz",
	"vr-img-a": "vr-img-a_2Osdc",
	"vrImgA": "vr-img-a_2Osdc",
	"image-row": "image-row_6BDhB",
	"imageRow": "image-row_6BDhB",
	"cos-gutter": "cos-gutter_5AcOI",
	"cosGutter": "cos-gutter_5AcOI",
	"image-col": "image-col_4DFph",
	"imageCol": "image-col_4DFph",
	"car-image": "car-image_2943S",
	"carImage": "car-image_2943S"
};
module.exports = exports;


/***/ }),
/* 153 */
/***/ (function(module, exports) {

// Module
var code = [1,"div",8,2,"rl-type",3,"stop",2,"class",7,null,6,1,3,"class",1,8,6,1,3,"_class",null,2,"style",7,null,6,1,3,"style",1,8,6,1,3,"_style",null,2,"id",6,1,3,"id",38,10,76,6,2,3,"tabItem",3,"imgList",6,3,3,"tabItem",3,"imgList",3,"length",null,3,"\n        ",1,"div",7,2,"style",3,"--cos-grid-gutter: 2px;",2,"class",7,null,16,2,17,3,"cos-gutter",17,6,2,3,"$style",3,"image-row",1,8,6,1,3,"_class",null,45,12,10,76,6,2,3,"commonInfo",3,"cardParams",6,3,3,"commonInfo",3,"cardParams",3,"href",3,"a",3,"div",42,6,2,3,"commonInfo",3,"cardParams",null,3,"\n            ",1,"div",5,2,"class",7,null,16,1,17,6,2,3,"$style",3,"image-col",1,8,6,1,3,"_class",null,37,"item","index",null,6,1,3,"imgL",null,3,"\n                ",1,"div",6,2,"data-uclk",7,null,13,2,14,3,"module",10,43,10,43,6,2,3,"tabItem",3,"text",3,"_image_",6,1,3,"index",14,3,"modules",3,"image",1,8,6,1,3,"json",null,33,"ubc-clk",3,"",2,"class",7,null,16,2,17,6,2,3,"$style",3,"vr-img-a",17,6,2,3,"$style",3,"vr-img-multimg",1,8,6,1,3,"_class",null,null,3,"\n                    ",1,"cos-image",7,2,"src",6,1,3,"item",2,"class",7,null,16,4,17,3,"cos-image-4-3",17,3,"cos-image-fit-cover",17,3,"cos-image-hover",17,6,2,3,"$style",3,"car-image",1,8,6,1,3,"_class",null,null,3,"\n                        ",1,"div",1,2,"class",7,null,6,2,3,"$style",3,"image-info-mask",1,8,6,1,3,"_class",null,null,3,"\n                        ",1,"div",5,2,"class",7,null,6,2,3,"$style",3,"image-info-icon",1,8,6,1,3,"_class",null,38,10,76,10,183,6,1,3,"index",10,45,6,2,3,"imgL",3,"length",4,1,6,2,3,"tabItem",3,"imgCount",null,3,"\n                            ",1,"cos-icon",2,2,"name",3,"imagegroup",2,"class",3,"cos-space-mr-3xs",null,9,null,3,3,"\n                            ",7,null,6,2,3,"tabItem",3,"imgCount",null,3,"\n                        ",null,null,3,"\n                    ",null,3,"\n                ",null,3,"\n            ",null,3,"\n        ",null,3,"\n    ",null];
// Exports
module.exports = code;

/***/ })
/******/ ])});;