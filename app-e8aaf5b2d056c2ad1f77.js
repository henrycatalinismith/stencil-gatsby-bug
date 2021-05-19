(self["webpackChunk"] = self["webpackChunk"] || []).push([[143],{

/***/ 1506:
/***/ (function(module) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 676:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _arrayLikeToArray; }
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ 1788:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _inheritsLoose; }
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4665);

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)(subClass, superClass);
}

/***/ }),

/***/ 4665:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _setPrototypeOf; }
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ 7329:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ _toConsumableArray; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
var arrayLikeToArray = __webpack_require__(676);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,arrayLikeToArray/* default */.Z)(arr);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
var unsupportedIterableToArray = __webpack_require__(2961);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || (0,unsupportedIterableToArray/* default */.Z)(arr) || _nonIterableSpread();
}

/***/ }),

/***/ 2961:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _unsupportedIterableToArray; }
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(676);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)(o, minLen);
}

/***/ }),

/***/ 7154:
/***/ (function(module) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  module.exports.default = module.exports, module.exports.__esModule = true;
  return _extends.apply(this, arguments);
}

module.exports = _extends;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 5354:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(9489);

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  setPrototypeOf(subClass, superClass);
}

module.exports = _inheritsLoose;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 5318:
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 7316:
/***/ (function(module) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 9489:
/***/ (function(module) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  module.exports.default = module.exports, module.exports.__esModule = true;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 8:
/***/ (function(module) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports.default = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports.default = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 7757:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(5666);


/***/ }),

/***/ 9228:
/***/ (function(module) {

/*!
 * domready (c) Dustin Diaz 2014 - License MIT
 * ie10 fix - Mikael Kristiansson 2019
 */
!(function(name, definition) {
  if (true) module.exports = definition();
  else {}
})("domready", function() {
  var ie10 = false;
  if (navigator.appVersion.indexOf("MSIE 10") !== -1) {
    ie10 = true;
  }

  var fns = [],
    listener,
    doc = typeof document === "object" && document,
    hack = ie10
      ? doc.documentElement.doScroll("left")
      : doc.documentElement.doScroll,
    domContentLoaded = "DOMContentLoaded",
    loaded =
      doc && (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState);

  if (!loaded && doc)
    doc.addEventListener(
      domContentLoaded,
      (listener = function() {
        doc.removeEventListener(domContentLoaded, listener);
        loaded = 1;
        while ((listener = fns.shift())) listener();
      })
    );

  return function(fn) {
    loaded ? setTimeout(fn, 0) : fns.push(fn);
  };
});


/***/ }),

/***/ 6031:
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 6031;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 2393:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = true;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var getLocation = function getLocation(source) {
  var _source$location = source.location,
      search = _source$location.search,
      hash = _source$location.hash,
      href = _source$location.href,
      origin = _source$location.origin,
      protocol = _source$location.protocol,
      host = _source$location.host,
      hostname = _source$location.hostname,
      port = _source$location.port;
  var pathname = source.location.pathname;

  if (!pathname && href && canUseDOM) {
    var url = new URL(href);
    pathname = url.pathname;
  }

  return {
    pathname: encodeURI(decodeURI(pathname)),
    search: search,
    hash: hash,
    href: href,
    origin: origin,
    protocol: protocol,
    host: host,
    hostname: hostname,
    port: port,
    state: source.history.state,
    key: source.history.state && source.history.state.key || "initial"
  };
};

var createHistory = function createHistory(source, options) {
  var listeners = [];
  var location = getLocation(source);
  var transitioning = false;

  var resolveTransition = function resolveTransition() {};

  return {
    get location() {
      return location;
    },

    get transitioning() {
      return transitioning;
    },

    _onTransitionComplete: function _onTransitionComplete() {
      transitioning = false;
      resolveTransition();
    },
    listen: function listen(listener) {
      listeners.push(listener);

      var popstateListener = function popstateListener() {
        location = getLocation(source);
        listener({
          location: location,
          action: "POP"
        });
      };

      source.addEventListener("popstate", popstateListener);
      return function () {
        source.removeEventListener("popstate", popstateListener);
        listeners = listeners.filter(function (fn) {
          return fn !== listener;
        });
      };
    },
    navigate: function navigate(to) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          state = _ref.state,
          _ref$replace = _ref.replace,
          replace = _ref$replace === undefined ? false : _ref$replace;

      if (typeof to === "number") {
        source.history.go(to);
      } else {
        state = _extends({}, state, {
          key: Date.now() + ""
        }); // try...catch iOS Safari limits to 100 pushState calls

        try {
          if (transitioning || replace) {
            source.history.replaceState(state, null, to);
          } else {
            source.history.pushState(state, null, to);
          }
        } catch (e) {
          source.location[replace ? "replace" : "assign"](to);
        }
      }

      location = getLocation(source);
      transitioning = true;
      var transition = new Promise(function (res) {
        return resolveTransition = res;
      });
      listeners.forEach(function (listener) {
        return listener({
          location: location,
          action: "PUSH"
        });
      });
      return transition;
    }
  };
}; ////////////////////////////////////////////////////////////////////////////////
// Stores history entries in memory for testing or other platforms like Native


var createMemorySource = function createMemorySource() {
  var initialPath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/";
  var searchIndex = initialPath.indexOf("?");
  var initialLocation = {
    pathname: searchIndex > -1 ? initialPath.substr(0, searchIndex) : initialPath,
    search: searchIndex > -1 ? initialPath.substr(searchIndex) : ""
  };
  var index = 0;
  var stack = [initialLocation];
  var states = [null];
  return {
    get location() {
      return stack[index];
    },

    addEventListener: function addEventListener(name, fn) {},
    removeEventListener: function removeEventListener(name, fn) {},
    history: {
      get entries() {
        return stack;
      },

      get index() {
        return index;
      },

      get state() {
        return states[index];
      },

      pushState: function pushState(state, _, uri) {
        var _uri$split = uri.split("?"),
            pathname = _uri$split[0],
            _uri$split$ = _uri$split[1],
            search = _uri$split$ === undefined ? "" : _uri$split$;

        index++;
        stack.push({
          pathname: pathname,
          search: search.length ? "?" + search : search
        });
        states.push(state);
      },
      replaceState: function replaceState(state, _, uri) {
        var _uri$split2 = uri.split("?"),
            pathname = _uri$split2[0],
            _uri$split2$ = _uri$split2[1],
            search = _uri$split2$ === undefined ? "" : _uri$split2$;

        stack[index] = {
          pathname: pathname,
          search: search
        };
        states[index] = state;
      },
      go: function go(to) {
        var newIndex = index + to;

        if (newIndex < 0 || newIndex > states.length - 1) {
          return;
        }

        index = newIndex;
      }
    }
  };
}; ////////////////////////////////////////////////////////////////////////////////
// global history - uses window.history as the source if available, otherwise a
// memory history


var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);

var getSource = function getSource() {
  return canUseDOM ? window : createMemorySource();
};

var globalHistory = createHistory(getSource());
var navigate = globalHistory.navigate; ////////////////////////////////////////////////////////////////////////////////

exports.V5 = globalHistory;
__webpack_unused_export__ = navigate;
__webpack_unused_export__ = createHistory;
__webpack_unused_export__ = createMemorySource;

/***/ }),

/***/ 2098:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.shallowCompare = exports.validateRedirect = exports.insertParams = exports.resolve = exports.match = exports.pick = exports.startsWith = undefined;

var _invariant = __webpack_require__(1143);

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} ////////////////////////////////////////////////////////////////////////////////
// startsWith(string, search) - Check if `string` starts with `search`


var startsWith = function startsWith(string, search) {
  return string.substr(0, search.length) === search;
}; ////////////////////////////////////////////////////////////////////////////////
// pick(routes, uri)
//
// Ranks and picks the best route to match. Each segment gets the highest
// amount of points, then the type of segment gets an additional amount of
// points where
//
//     static > dynamic > splat > root
//
// This way we don't have to worry about the order of our routes, let the
// computers do it.
//
// A route looks like this
//
//     { path, default, value }
//
// And a returned match looks like:
//
//     { route, params, uri }
//
// I know, I should use TypeScript not comments for these types.


var pick = function pick(routes, uri) {
  var match = void 0;
  var default_ = void 0;

  var _uri$split = uri.split("?"),
      uriPathname = _uri$split[0];

  var uriSegments = segmentize(uriPathname);
  var isRootUri = uriSegments[0] === "";
  var ranked = rankRoutes(routes);

  for (var i = 0, l = ranked.length; i < l; i++) {
    var missed = false;
    var route = ranked[i].route;

    if (route.default) {
      default_ = {
        route: route,
        params: {},
        uri: uri
      };
      continue;
    }

    var routeSegments = segmentize(route.path);
    var params = {};
    var max = Math.max(uriSegments.length, routeSegments.length);
    var index = 0;

    for (; index < max; index++) {
      var routeSegment = routeSegments[index];
      var uriSegment = uriSegments[index];

      if (isSplat(routeSegment)) {
        // Hit a splat, just grab the rest, and return a match
        // uri:   /files/documents/work
        // route: /files/*
        var param = routeSegment.slice(1) || "*";
        params[param] = uriSegments.slice(index).map(decodeURIComponent).join("/");
        break;
      }

      if (uriSegment === undefined) {
        // URI is shorter than the route, no match
        // uri:   /users
        // route: /users/:userId
        missed = true;
        break;
      }

      var dynamicMatch = paramRe.exec(routeSegment);

      if (dynamicMatch && !isRootUri) {
        var matchIsNotReserved = reservedNames.indexOf(dynamicMatch[1]) === -1;
        !matchIsNotReserved ?  false ? 0 : (0, _invariant2.default)(false) : void 0;
        var value = decodeURIComponent(uriSegment);
        params[dynamicMatch[1]] = value;
      } else if (routeSegment !== uriSegment) {
        // Current segments don't match, not dynamic, not splat, so no match
        // uri:   /users/123/settings
        // route: /users/:id/profile
        missed = true;
        break;
      }
    }

    if (!missed) {
      match = {
        route: route,
        params: params,
        uri: "/" + uriSegments.slice(0, index).join("/")
      };
      break;
    }
  }

  return match || default_ || null;
}; ////////////////////////////////////////////////////////////////////////////////
// match(path, uri) - Matches just one path to a uri, also lol


var match = function match(path, uri) {
  return pick([{
    path: path
  }], uri);
}; ////////////////////////////////////////////////////////////////////////////////
// resolve(to, basepath)
//
// Resolves URIs as though every path is a directory, no files.  Relative URIs
// in the browser can feel awkward because not only can you be "in a directory"
// you can be "at a file", too. For example
//
//     browserSpecResolve('foo', '/bar/') => /bar/foo
//     browserSpecResolve('foo', '/bar') => /foo
//
// But on the command line of a file system, it's not as complicated, you can't
// `cd` from a file, only directories.  This way, links have to know less about
// their current path. To go deeper you can do this:
//
//     <Link to="deeper"/>
//     // instead of
//     <Link to=`{${props.uri}/deeper}`/>
//
// Just like `cd`, if you want to go deeper from the command line, you do this:
//
//     cd deeper
//     # not
//     cd $(pwd)/deeper
//
// By treating every path as a directory, linking to relative paths should
// require less contextual information and (fingers crossed) be more intuitive.


var resolve = function resolve(to, base) {
  // /foo/bar, /baz/qux => /foo/bar
  if (startsWith(to, "/")) {
    return to;
  }

  var _to$split = to.split("?"),
      toPathname = _to$split[0],
      toQuery = _to$split[1];

  var _base$split = base.split("?"),
      basePathname = _base$split[0];

  var toSegments = segmentize(toPathname);
  var baseSegments = segmentize(basePathname); // ?a=b, /users?b=c => /users?a=b

  if (toSegments[0] === "") {
    return addQuery(basePathname, toQuery);
  } // profile, /users/789 => /users/789/profile


  if (!startsWith(toSegments[0], ".")) {
    var pathname = baseSegments.concat(toSegments).join("/");
    return addQuery((basePathname === "/" ? "" : "/") + pathname, toQuery);
  } // ./         /users/123  =>  /users/123
  // ../        /users/123  =>  /users
  // ../..      /users/123  =>  /
  // ../../one  /a/b/c/d    =>  /a/b/one
  // .././one   /a/b/c/d    =>  /a/b/c/one


  var allSegments = baseSegments.concat(toSegments);
  var segments = [];

  for (var i = 0, l = allSegments.length; i < l; i++) {
    var segment = allSegments[i];
    if (segment === "..") segments.pop();else if (segment !== ".") segments.push(segment);
  }

  return addQuery("/" + segments.join("/"), toQuery);
}; ////////////////////////////////////////////////////////////////////////////////
// insertParams(path, params)


var insertParams = function insertParams(path, params) {
  var _path$split = path.split("?"),
      pathBase = _path$split[0],
      _path$split$ = _path$split[1],
      query = _path$split$ === undefined ? "" : _path$split$;

  var segments = segmentize(pathBase);
  var constructedPath = "/" + segments.map(function (segment) {
    var match = paramRe.exec(segment);
    return match ? params[match[1]] : segment;
  }).join("/");
  var _params$location = params.location;
  _params$location = _params$location === undefined ? {} : _params$location;
  var _params$location$sear = _params$location.search,
      search = _params$location$sear === undefined ? "" : _params$location$sear;
  var searchSplit = search.split("?")[1] || "";
  constructedPath = addQuery(constructedPath, query, searchSplit);
  return constructedPath;
};

var validateRedirect = function validateRedirect(from, to) {
  var filter = function filter(segment) {
    return isDynamic(segment);
  };

  var fromString = segmentize(from).filter(filter).sort().join("/");
  var toString = segmentize(to).filter(filter).sort().join("/");
  return fromString === toString;
}; ////////////////////////////////////////////////////////////////////////////////
// Junk


var paramRe = /^:(.+)/;
var SEGMENT_POINTS = 4;
var STATIC_POINTS = 3;
var DYNAMIC_POINTS = 2;
var SPLAT_PENALTY = 1;
var ROOT_POINTS = 1;

var isRootSegment = function isRootSegment(segment) {
  return segment === "";
};

var isDynamic = function isDynamic(segment) {
  return paramRe.test(segment);
};

var isSplat = function isSplat(segment) {
  return segment && segment[0] === "*";
};

var rankRoute = function rankRoute(route, index) {
  var score = route.default ? 0 : segmentize(route.path).reduce(function (score, segment) {
    score += SEGMENT_POINTS;
    if (isRootSegment(segment)) score += ROOT_POINTS;else if (isDynamic(segment)) score += DYNAMIC_POINTS;else if (isSplat(segment)) score -= SEGMENT_POINTS + SPLAT_PENALTY;else score += STATIC_POINTS;
    return score;
  }, 0);
  return {
    route: route,
    score: score,
    index: index
  };
};

var rankRoutes = function rankRoutes(routes) {
  return routes.map(rankRoute).sort(function (a, b) {
    return a.score < b.score ? 1 : a.score > b.score ? -1 : a.index - b.index;
  });
};

var segmentize = function segmentize(uri) {
  return uri // strip starting/ending slashes
  .replace(/(^\/+|\/+$)/g, "").split("/");
};

var addQuery = function addQuery(pathname) {
  for (var _len = arguments.length, query = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    query[_key - 1] = arguments[_key];
  }

  query = query.filter(function (q) {
    return q && q.length > 0;
  });
  return pathname + (query && query.length > 0 ? "?" + query.join("&") : "");
};

var reservedNames = ["uri", "path"];
/**
 * Shallow compares two objects.
 * @param {Object} obj1 The first object to compare.
 * @param {Object} obj2 The second object to compare.
 */

var shallowCompare = function shallowCompare(obj1, obj2) {
  var obj1Keys = Object.keys(obj1);
  return obj1Keys.length === Object.keys(obj2).length && obj1Keys.every(function (key) {
    return obj2.hasOwnProperty(key) && obj1[key] === obj2[key];
  });
}; ////////////////////////////////////////////////////////////////////////////////


exports.startsWith = startsWith;
exports.pick = pick;
exports.match = match;
exports.resolve = resolve;
exports.insertParams = insertParams;
exports.validateRedirect = validateRedirect;
exports.shallowCompare = shallowCompare;

/***/ }),

/***/ 6494:
/***/ (function(module) {

"use strict";


module.exports = Object.assign;

/***/ }),

/***/ 8037:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(5318);

__webpack_unused_export__ = true;
__webpack_unused_export__ = withPrefix;
__webpack_unused_export__ = withAssetPrefix;
__webpack_unused_export__ = __webpack_unused_export__ = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(7316));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(1506));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(5354));

var _extends2 = _interopRequireDefault(__webpack_require__(7154));

var _propTypes = _interopRequireDefault(__webpack_require__(5697));

var _react = _interopRequireDefault(__webpack_require__(7294));

var _reachRouter = __webpack_require__(9499);

var _utils = __webpack_require__(2098);

var _parsePath = __webpack_require__(1752);

exports.cP = _parsePath.parsePath;

var isAbsolutePath = function isAbsolutePath(path) {
  return path === null || path === void 0 ? void 0 : path.startsWith("/");
};

function withPrefix(path, prefix) {
  var _ref, _prefix;

  if (prefix === void 0) {
    prefix = getGlobalBasePrefix();
  }

  if (!isLocalLink(path)) {
    return path;
  }

  if (path.startsWith("./") || path.startsWith("../")) {
    return path;
  }

  var base = (_ref = (_prefix = prefix) !== null && _prefix !== void 0 ? _prefix : getGlobalPathPrefix()) !== null && _ref !== void 0 ? _ref : "/";
  return "" + (base !== null && base !== void 0 && base.endsWith("/") ? base.slice(0, -1) : base) + (path.startsWith("/") ? path : "/" + path);
} // These global values are wrapped in typeof clauses to ensure the values exist.
// This is especially problematic in unit testing of this component.


var getGlobalPathPrefix = function getGlobalPathPrefix() {
  return  false ? 0 : "/stencil-gatsby-bug";
};

var getGlobalBasePrefix = function getGlobalBasePrefix() {
  return  false ? 0 : "/stencil-gatsby-bug";
};

var isLocalLink = function isLocalLink(path) {
  return path && !path.startsWith("http://") && !path.startsWith("https://") && !path.startsWith("//");
};

function withAssetPrefix(path) {
  return withPrefix(path, getGlobalPathPrefix());
}

function absolutify(path, current) {
  // If it's already absolute, return as-is
  if (isAbsolutePath(path)) {
    return path;
  }

  return (0, _utils.resolve)(path, current);
}

var rewriteLinkPath = function rewriteLinkPath(path, relativeTo) {
  if (typeof path === "number") {
    return path;
  }

  if (!isLocalLink(path)) {
    return path;
  }

  return isAbsolutePath(path) ? withPrefix(path) : absolutify(path, relativeTo);
};

var NavLinkPropTypes = {
  activeClassName: _propTypes.default.string,
  activeStyle: _propTypes.default.object,
  partiallyActive: _propTypes.default.bool
}; // Set up IntersectionObserver

var createIntersectionObserver = function createIntersectionObserver(el, cb) {
  var io = new window.IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (el === entry.target) {
        // Check if element is within viewport, remove listener, destroy observer, and run link callback.
        // MSEdge doesn't currently support isIntersecting, so also test for  an intersectionRatio > 0
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          io.unobserve(el);
          io.disconnect();
          cb();
        }
      }
    });
  }); // Add element to the observer

  io.observe(el);
  return {
    instance: io,
    el: el
  };
};

function GatsbyLinkLocationWrapper(props) {
  return /*#__PURE__*/_react.default.createElement(_reachRouter.Location, null, function (_ref2) {
    var location = _ref2.location;
    return /*#__PURE__*/_react.default.createElement(GatsbyLink, (0, _extends2.default)({}, props, {
      _location: location
    }));
  });
}

var GatsbyLink = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2.default)(GatsbyLink, _React$Component);

  function GatsbyLink(props) {
    var _this;

    _this = _React$Component.call(this, props) || this; // Default to no support for IntersectionObserver

    _this.defaultGetProps = function (_ref3) {
      var isPartiallyCurrent = _ref3.isPartiallyCurrent,
          isCurrent = _ref3.isCurrent;

      if (_this.props.partiallyActive ? isPartiallyCurrent : isCurrent) {
        return {
          className: [_this.props.className, _this.props.activeClassName].filter(Boolean).join(" "),
          style: (0, _extends2.default)({}, _this.props.style, _this.props.activeStyle)
        };
      }

      return null;
    };

    var IOSupported = false;

    if (typeof window !== "undefined" && window.IntersectionObserver) {
      IOSupported = true;
    }

    _this.state = {
      IOSupported: IOSupported
    };
    _this.handleRef = _this.handleRef.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  var _proto = GatsbyLink.prototype;

  _proto._prefetch = function _prefetch() {
    var currentPath = window.location.pathname; // reach router should have the correct state

    if (this.props._location && this.props._location.pathname) {
      currentPath = this.props._location.pathname;
    }

    var rewrittenPath = rewriteLinkPath(this.props.to, currentPath);
    var newPathName = (0, _parsePath.parsePath)(rewrittenPath).pathname; // Prefech is used to speed up next navigations. When you use it on the current navigation,
    // there could be a race-condition where Chrome uses the stale data instead of waiting for the network to complete

    if (currentPath !== newPathName) {
      ___loader.enqueue(newPathName);
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    // Preserve non IO functionality if no support
    if (this.props.to !== prevProps.to && !this.state.IOSupported) {
      this._prefetch();
    }
  };

  _proto.componentDidMount = function componentDidMount() {
    // Preserve non IO functionality if no support
    if (!this.state.IOSupported) {
      this._prefetch();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (!this.io) {
      return;
    }

    var _this$io = this.io,
        instance = _this$io.instance,
        el = _this$io.el;
    instance.unobserve(el);
    instance.disconnect();
  };

  _proto.handleRef = function handleRef(ref) {
    var _this2 = this;

    if (this.props.innerRef && this.props.innerRef.hasOwnProperty("current")) {
      this.props.innerRef.current = ref;
    } else if (this.props.innerRef) {
      this.props.innerRef(ref);
    }

    if (this.state.IOSupported && ref) {
      // If IO supported and element reference found, setup Observer functionality
      this.io = createIntersectionObserver(ref, function () {
        _this2._prefetch();
      });
    }
  };

  _proto.render = function render() {
    var _this3 = this;

    var _this$props = this.props,
        to = _this$props.to,
        _this$props$getProps = _this$props.getProps,
        getProps = _this$props$getProps === void 0 ? this.defaultGetProps : _this$props$getProps,
        _onClick = _this$props.onClick,
        _onMouseEnter = _this$props.onMouseEnter,
        $activeClassName = _this$props.activeClassName,
        $activeStyle = _this$props.activeStyle,
        $innerRef = _this$props.innerRef,
        partiallyActive = _this$props.partiallyActive,
        state = _this$props.state,
        replace = _this$props.replace,
        _location = _this$props._location,
        rest = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["to", "getProps", "onClick", "onMouseEnter", "activeClassName", "activeStyle", "innerRef", "partiallyActive", "state", "replace", "_location"]);

    if (false) {}

    var prefixedTo = rewriteLinkPath(to, _location.pathname);

    if (!isLocalLink(prefixedTo)) {
      return /*#__PURE__*/_react.default.createElement("a", (0, _extends2.default)({
        href: prefixedTo
      }, rest));
    }

    return /*#__PURE__*/_react.default.createElement(_reachRouter.Link, (0, _extends2.default)({
      to: prefixedTo,
      state: state,
      getProps: getProps,
      innerRef: this.handleRef,
      onMouseEnter: function onMouseEnter(e) {
        if (_onMouseEnter) {
          _onMouseEnter(e);
        }

        ___loader.hovering((0, _parsePath.parsePath)(prefixedTo).pathname);
      },
      onClick: function onClick(e) {
        if (_onClick) {
          _onClick(e);
        }

        if (e.button === 0 && // ignore right clicks
        !_this3.props.target && // let browser handle "target=_blank"
        !e.defaultPrevented && // onClick prevented default
        !e.metaKey && // ignore clicks with modifier keys...
        !e.altKey && !e.ctrlKey && !e.shiftKey) {
          e.preventDefault();
          var shouldReplace = replace;

          var isCurrent = encodeURI(prefixedTo) === _location.pathname;

          if (typeof replace !== "boolean" && isCurrent) {
            shouldReplace = true;
          } // Make sure the necessary scripts and data are
          // loaded before continuing.


          window.___navigate(prefixedTo, {
            state: state,
            replace: shouldReplace
          });
        }

        return true;
      }
    }, rest));
  };

  return GatsbyLink;
}(_react.default.Component);

GatsbyLink.propTypes = (0, _extends2.default)({}, NavLinkPropTypes, {
  onClick: _propTypes.default.func,
  to: _propTypes.default.string.isRequired,
  replace: _propTypes.default.bool,
  state: _propTypes.default.object
});

var _default = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  return /*#__PURE__*/_react.default.createElement(GatsbyLinkLocationWrapper, (0, _extends2.default)({
    innerRef: ref
  }, props));
});

__webpack_unused_export__ = _default;

var navigate = function navigate(to, options) {
  window.___navigate(rewriteLinkPath(to, window.location.pathname), options);
};

__webpack_unused_export__ = navigate;

/***/ }),

/***/ 1752:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.parsePath = parsePath;

function parsePath(path) {
  var pathname = path || "/";
  var search = "";
  var hash = "";
  var hashIndex = pathname.indexOf("#");

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf("?");

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === "?" ? "" : search,
    hash: hash === "#" ? "" : hash
  };
}

/***/ }),

/***/ 9679:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = true;
__webpack_unused_export__ = exports.$C = void 0;

var _scrollHandler = __webpack_require__(1432);

exports.$C = _scrollHandler.ScrollHandler;

var _useScrollRestoration = __webpack_require__(4855);

__webpack_unused_export__ = _useScrollRestoration.useScrollRestoration;

/***/ }),

/***/ 1432:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(5318);

exports.__esModule = true;
exports.ScrollHandler = exports.ScrollContext = void 0;

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(1506));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(5354));

var React = _interopRequireWildcard(__webpack_require__(7294));

var _propTypes = _interopRequireDefault(__webpack_require__(5697));

var _sessionStorage = __webpack_require__(1142);

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ScrollContext = /*#__PURE__*/React.createContext(new _sessionStorage.SessionStorage());
exports.ScrollContext = ScrollContext;
ScrollContext.displayName = "GatsbyScrollContext";

var ScrollHandler = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2.default)(ScrollHandler, _React$Component);

  function ScrollHandler() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this._stateStorage = new _sessionStorage.SessionStorage();
    _this._isTicking = false;
    _this._latestKnownScrollY = 0;

    _this.scrollListener = function () {
      _this._latestKnownScrollY = window.scrollY;

      if (!_this._isTicking) {
        _this._isTicking = true;
        requestAnimationFrame(_this._saveScroll.bind((0, _assertThisInitialized2.default)(_this)));
      }
    };

    _this.windowScroll = function (position, prevProps) {
      if (_this.shouldUpdateScroll(prevProps, _this.props)) {
        window.scrollTo(0, position);
      }
    };

    _this.scrollToHash = function (hash, prevProps) {
      var node = document.getElementById(hash.substring(1));

      if (node && _this.shouldUpdateScroll(prevProps, _this.props)) {
        node.scrollIntoView();
      }
    };

    _this.shouldUpdateScroll = function (prevRouterProps, routerProps) {
      var shouldUpdateScroll = _this.props.shouldUpdateScroll;

      if (!shouldUpdateScroll) {
        return true;
      } // Hack to allow accessing this._stateStorage.


      return shouldUpdateScroll.call((0, _assertThisInitialized2.default)(_this), prevRouterProps, routerProps);
    };

    return _this;
  }

  var _proto = ScrollHandler.prototype;

  _proto._saveScroll = function _saveScroll() {
    var key = this.props.location.key || null;

    if (key) {
      this._stateStorage.save(this.props.location, key, this._latestKnownScrollY);
    }

    this._isTicking = false;
  };

  _proto.componentDidMount = function componentDidMount() {
    window.addEventListener("scroll", this.scrollListener);
    var scrollPosition;
    var _this$props$location = this.props.location,
        key = _this$props$location.key,
        hash = _this$props$location.hash;

    if (key) {
      scrollPosition = this._stateStorage.read(this.props.location, key);
    }

    if (scrollPosition) {
      this.windowScroll(scrollPosition, undefined);
    } else if (hash) {
      this.scrollToHash(decodeURI(hash), undefined);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollListener);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var _this$props$location2 = this.props.location,
        hash = _this$props$location2.hash,
        key = _this$props$location2.key;
    var scrollPosition;

    if (key) {
      scrollPosition = this._stateStorage.read(this.props.location, key);
    }
    /**  There are two pieces of state: the browser url and
     * history state which keeps track of scroll position
     * Native behaviour prescribes that we ought to restore scroll position
     * when a user navigates back in their browser (this is the `POP` action)
     * Currently, reach router has a bug that prevents this at https://github.com/reach/router/issues/228
     * So we _always_ stick to the url as a source of truth — if the url
     * contains a hash, we scroll to it
     */


    if (hash) {
      this.scrollToHash(decodeURI(hash), prevProps);
    } else {
      this.windowScroll(scrollPosition, prevProps);
    }
  };

  _proto.render = function render() {
    return /*#__PURE__*/React.createElement(ScrollContext.Provider, {
      value: this._stateStorage
    }, this.props.children);
  };

  return ScrollHandler;
}(React.Component);

exports.ScrollHandler = ScrollHandler;
ScrollHandler.propTypes = {
  shouldUpdateScroll: _propTypes.default.func,
  children: _propTypes.default.element.isRequired,
  location: _propTypes.default.object.isRequired
};

/***/ }),

/***/ 1142:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.SessionStorage = void 0;
var STATE_KEY_PREFIX = "@@scroll|";
var GATSBY_ROUTER_SCROLL_STATE = "___GATSBY_REACT_ROUTER_SCROLL";

var SessionStorage = /*#__PURE__*/function () {
  function SessionStorage() {}

  var _proto = SessionStorage.prototype;

  _proto.read = function read(location, key) {
    var stateKey = this.getStateKey(location, key);

    try {
      var value = window.sessionStorage.getItem(stateKey);
      return value ? JSON.parse(value) : 0;
    } catch (e) {
      if (false) {}

      if (window && window[GATSBY_ROUTER_SCROLL_STATE] && window[GATSBY_ROUTER_SCROLL_STATE][stateKey]) {
        return window[GATSBY_ROUTER_SCROLL_STATE][stateKey];
      }

      return 0;
    }
  };

  _proto.save = function save(location, key, value) {
    var stateKey = this.getStateKey(location, key);
    var storedValue = JSON.stringify(value);

    try {
      window.sessionStorage.setItem(stateKey, storedValue);
    } catch (e) {
      if (window && window[GATSBY_ROUTER_SCROLL_STATE]) {
        window[GATSBY_ROUTER_SCROLL_STATE][stateKey] = JSON.parse(storedValue);
      } else {
        window[GATSBY_ROUTER_SCROLL_STATE] = {};
        window[GATSBY_ROUTER_SCROLL_STATE][stateKey] = JSON.parse(storedValue);
      }

      if (false) {}
    }
  };

  _proto.getStateKey = function getStateKey(location, key) {
    var stateKeyBase = "" + STATE_KEY_PREFIX + location.pathname;
    return key === null || typeof key === "undefined" ? stateKeyBase : stateKeyBase + "|" + key;
  };

  return SessionStorage;
}();

exports.SessionStorage = SessionStorage;

/***/ }),

/***/ 4855:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useScrollRestoration = useScrollRestoration;

var _scrollHandler = __webpack_require__(1432);

var _react = __webpack_require__(7294);

var _reachRouter = __webpack_require__(9499);

function useScrollRestoration(identifier) {
  var location = (0, _reachRouter.useLocation)();
  var state = (0, _react.useContext)(_scrollHandler.ScrollContext);
  var ref = (0, _react.useRef)(null);
  (0, _react.useLayoutEffect)(function () {
    if (ref.current) {
      var position = state.read(location, identifier);
      ref.current.scrollTo(0, position || 0);
    }
  }, [location.key]);
  return {
    ref: ref,
    onScroll: function onScroll() {
      if (ref.current) {
        state.save(location, identifier, ref.current.scrollTop);
      }
    }
  };
}

/***/ }),

/***/ 4999:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

// prefer default export if available
var preferDefault=function preferDefault(m){return m&&m.default||m;};exports.components={"component---src-pages-index-js":function componentSrcPagesIndexJs(){return __webpack_require__.e(/* import() | component---src-pages-index-js */ 678).then(__webpack_require__.bind(__webpack_require__, 7704));}};

/***/ }),

/***/ 5182:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports=[{plugin:__webpack_require__(9037),options:{"plugins":[]}}];

/***/ }),

/***/ 7343:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var plugins=__webpack_require__(5182);var _require$publicLoader=__webpack_require__(8741)/* .publicLoader */ .jN,getResourceURLsForPathname=_require$publicLoader.getResourceURLsForPathname,loadPage=_require$publicLoader.loadPage,loadPageSync=_require$publicLoader.loadPageSync;exports.h=function(api,args,defaultReturn,argTransform){if(args===void 0){args={};}// Hooks for gatsby-cypress's API handler
if(undefined){if(window.___apiHandler){window.___apiHandler(api);}else if(window.___resolvedAPIs){window.___resolvedAPIs.push(api);}else{window.___resolvedAPIs=[api];}}var results=plugins.map(function(plugin){if(!plugin.plugin[api]){return undefined;}args.getResourceURLsForPathname=getResourceURLsForPathname;args.loadPage=loadPage;args.loadPageSync=loadPageSync;var result=plugin.plugin[api](args,plugin.options);if(result&&argTransform){args=argTransform({args:args,result:result,plugin:plugin});}return result;});// Filter out undefined results.
results=results.filter(function(result){return typeof result!=="undefined";});if(results.length>0){return results;}else if(defaultReturn){return[defaultReturn];}else{return[];}};exports.I=function(api,args,defaultReturn){return plugins.reduce(function(previous,next){return next.plugin[api]?previous.then(function(){return next.plugin[api](args,next.options);}):previous;},Promise.resolve());};

/***/ }),

/***/ 8110:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ _cache_emitter; }
});

;// CONCATENATED MODULE: ./node_modules/mitt/dist/mitt.es.js
//      
// An event handler can take an optional event argument
// and should not return a value
                                          
                                                               

// An array of all currently registered event handlers for a type
                                            
                                                            
// A map of event types and their corresponding event handlers.
                        
                                 
                                   
  

/** Mitt: Tiny (~200b) functional event emitter / pubsub.
 *  @name mitt
 *  @returns {Mitt}
 */
function mitt(all                 ) {
	all = all || Object.create(null);

	return {
		/**
		 * Register an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to listen for, or `"*"` for all events
		 * @param  {Function} handler Function to call in response to given event
		 * @memberOf mitt
		 */
		on: function on(type        , handler              ) {
			(all[type] || (all[type] = [])).push(handler);
		},

		/**
		 * Remove an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
		 * @param  {Function} handler Handler function to remove
		 * @memberOf mitt
		 */
		off: function off(type        , handler              ) {
			if (all[type]) {
				all[type].splice(all[type].indexOf(handler) >>> 0, 1);
			}
		},

		/**
		 * Invoke all handlers for the given type.
		 * If present, `"*"` handlers are invoked after type-matched handlers.
		 *
		 * @param {String} type  The event type to invoke
		 * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
		 * @memberOf mitt
		 */
		emit: function emit(type        , evt     ) {
			(all[type] || []).slice().map(function (handler) { handler(evt); });
			(all['*'] || []).slice().map(function (handler) { handler(type, evt); });
		}
	};
}

/* harmony default export */ var mitt_es = (mitt);
//# sourceMappingURL=mitt.es.js.map

;// CONCATENATED MODULE: ./.cache/emitter.js
var emitter=mitt_es();/* harmony default export */ var _cache_emitter = (emitter);

/***/ }),

/***/ 2257:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "UD": function() { return /* binding */ findMatchPath; },
  "Cj": function() { return /* binding */ findPath; },
  "GA": function() { return /* binding */ grabMatchParams; },
  "DS": function() { return /* binding */ setMatchPaths; }
});

// UNUSED EXPORTS: cleanPath

// EXTERNAL MODULE: ./node_modules/@gatsbyjs/reach-router/lib/utils.js
var utils = __webpack_require__(2098);
// EXTERNAL MODULE: ./.cache/strip-prefix.js
var strip_prefix = __webpack_require__(1578);
;// CONCATENATED MODULE: ./.cache/normalize-page-path.js
/* harmony default export */ var normalize_page_path = (function(path){if(path===undefined){return path;}if(path==="/"){return"/";}if(path.charAt(path.length-1)==="/"){return path.slice(0,-1);}return path;});
;// CONCATENATED MODULE: ./.cache/find-path.js
var pathCache=new Map();var matchPaths=[];var trimPathname=function trimPathname(rawPathname){var pathname=decodeURIComponent(rawPathname);// Remove the pathPrefix from the pathname.
var trimmedPathname=(0,strip_prefix/* default */.Z)(pathname,decodeURIComponent("/stencil-gatsby-bug"))// Remove any hashfragment
.split("#")[0]// Remove search query
.split("?")[0];return trimmedPathname;};function absolutify(path){// If it's already absolute, return as-is
if(path.startsWith("/")||path.startsWith("https://")||path.startsWith("http://")){return path;}// Calculate path relative to current location, adding a trailing slash to
// match behavior of @reach/router
return new URL(path,window.location.href+(window.location.href.endsWith("/")?"":"/")).pathname;}/**
 * Set list of matchPaths
 *
 * @param {Array<{path: string, matchPath: string}>} value collection of matchPaths
 */var setMatchPaths=function setMatchPaths(value){matchPaths=value;};/**
 * Return a matchpath url
 * if `match-paths.json` contains `{ "/foo*": "/page1", ...}`, then
 * `/foo?bar=far` => `/page1`
 *
 * @param {string} rawPathname A raw pathname
 * @return {string|null}
 */var findMatchPath=function findMatchPath(rawPathname){var trimmedPathname=cleanPath(rawPathname);var pickPaths=matchPaths.map(function(_ref){var path=_ref.path,matchPath=_ref.matchPath;return{path:matchPath,originalPath:path};});var path=(0,utils.pick)(pickPaths,trimmedPathname);if(path){return normalize_page_path(path.route.originalPath);}return null;};/**
 * Return a matchpath params from reach/router rules
 * if `match-paths.json` contains `{ ":bar/*foo" }`, and the path is /baz/zaz/zoo
 * then it returns
 *  { bar: baz, foo: zaz/zoo }
 *
 * @param {string} rawPathname A raw pathname
 * @return {object}
 */var grabMatchParams=function grabMatchParams(rawPathname){var trimmedPathname=cleanPath(rawPathname);var pickPaths=matchPaths.map(function(_ref2){var path=_ref2.path,matchPath=_ref2.matchPath;return{path:matchPath,originalPath:path};});var path=(0,utils.pick)(pickPaths,trimmedPathname);if(path){return path.params;}return{};};// Given a raw URL path, returns the cleaned version of it (trim off
// `#` and query params), or if it matches an entry in
// `match-paths.json`, its matched path is returned
//
// E.g. `/foo?bar=far` => `/foo`
//
// Or if `match-paths.json` contains `{ "/foo*": "/page1", ...}`, then
// `/foo?bar=far` => `/page1`
var findPath=function findPath(rawPathname){var trimmedPathname=trimPathname(absolutify(rawPathname));if(pathCache.has(trimmedPathname)){return pathCache.get(trimmedPathname);}var foundPath=findMatchPath(trimmedPathname);if(!foundPath){foundPath=cleanPath(rawPathname);}pathCache.set(trimmedPathname,foundPath);return foundPath;};/**
 * Clean a url and converts /index.html => /
 * E.g. `/foo?bar=far` => `/foo`
 *
 * @param {string} rawPathname A raw pathname
 * @return {string}
 */var cleanPath=function cleanPath(rawPathname){var trimmedPathname=trimPathname(absolutify(rawPathname));var foundPath=trimmedPathname;if(foundPath==="/index.html"){foundPath="/";}foundPath=normalize_page_path(foundPath);return foundPath;};

/***/ }),

/***/ 8741:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "uQ": function() { return /* binding */ PageResourceStatus; },
  "kL": function() { return /* binding */ ProdLoader; },
  "ZP": function() { return /* binding */ loader; },
  "hs": function() { return /* binding */ getStaticQueryResults; },
  "jN": function() { return /* binding */ publicLoader; },
  "N1": function() { return /* binding */ setLoader; }
});

// UNUSED EXPORTS: BaseLoader

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__(1788);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__(7329);
;// CONCATENATED MODULE: ./.cache/prefetch.js
var support=function support(feature){if(typeof document==="undefined"){return false;}var fakeLink=document.createElement("link");try{if(fakeLink.relList&&typeof fakeLink.relList.supports==="function"){return fakeLink.relList.supports(feature);}}catch(err){return false;}return false;};var linkPrefetchStrategy=function linkPrefetchStrategy(url,options){return new Promise(function(resolve,reject){if(typeof document==="undefined"){reject();return;}var link=document.createElement("link");link.setAttribute("rel","prefetch");link.setAttribute("href",url);Object.keys(options).forEach(function(key){link.setAttribute(key,options[key]);});link.onload=resolve;link.onerror=reject;var parentElement=document.getElementsByTagName("head")[0]||document.getElementsByName("script")[0].parentNode;parentElement.appendChild(link);});};var xhrPrefetchStrategy=function xhrPrefetchStrategy(url){return new Promise(function(resolve,reject){var req=new XMLHttpRequest();req.open("GET",url,true);req.onload=function(){if(req.status===200){resolve();}else{reject();}};req.send(null);});};var supportedPrefetchStrategy=support("prefetch")?linkPrefetchStrategy:xhrPrefetchStrategy;var preFetched={};var prefetch=function prefetch(url,options){return new Promise(function(resolve){if(preFetched[url]){resolve();return;}supportedPrefetchStrategy(url,options).then(function(){resolve();preFetched[url]=true;}).catch(function(){});// 404s are logged to the console anyway
});};/* harmony default export */ var _cache_prefetch = (prefetch);
// EXTERNAL MODULE: ./.cache/emitter.js + 1 modules
var emitter = __webpack_require__(8110);
// EXTERNAL MODULE: ./.cache/find-path.js + 1 modules
var find_path = __webpack_require__(2257);
;// CONCATENATED MODULE: ./.cache/loader.js
/**
 * Available resource loading statuses
 */var PageResourceStatus={/**
   * At least one of critical resources failed to load
   */Error:"error",/**
   * Resources loaded successfully
   */Success:"success"};var preferDefault=function preferDefault(m){return m&&m.default||m;};var stripSurroundingSlashes=function stripSurroundingSlashes(s){s=s[0]==="/"?s.slice(1):s;s=s.endsWith("/")?s.slice(0,-1):s;return s;};var createPageDataUrl=function createPageDataUrl(path){var fixedPath=path==="/"?"index":stripSurroundingSlashes(path);return "/stencil-gatsby-bug"+"/page-data/"+fixedPath+"/page-data.json";};function doFetch(url,method){if(method===void 0){method="GET";}return new Promise(function(resolve,reject){var req=new XMLHttpRequest();req.open(method,url,true);req.onreadystatechange=function(){if(req.readyState==4){resolve(req);}};req.send(null);});}var doesConnectionSupportPrefetch=function doesConnectionSupportPrefetch(){if("connection"in navigator&&typeof navigator.connection!=="undefined"){if((navigator.connection.effectiveType||"").includes("2g")){return false;}if(navigator.connection.saveData){return false;}}return true;};var toPageResources=function toPageResources(pageData,component){if(component===void 0){component=null;}var page={componentChunkName:pageData.componentChunkName,path:pageData.path,webpackCompilationHash:pageData.webpackCompilationHash,matchPath:pageData.matchPath,staticQueryHashes:pageData.staticQueryHashes};return{component:component,json:pageData.result,page:page};};var BaseLoader=/*#__PURE__*/function(){function BaseLoader(loadComponent,matchPaths){this.inFlightNetworkRequests=new Map();// Map of pagePath -> Page. Where Page is an object with: {
//   status: PageResourceStatus.Success || PageResourceStatus.Error,
//   payload: PageResources, // undefined if PageResourceStatus.Error
// }
// PageResources is {
//   component,
//   json: pageData.result,
//   page: {
//     componentChunkName,
//     path,
//     webpackCompilationHash,
//     staticQueryHashes
//   },
//   staticQueryResults
// }
this.pageDb=new Map();this.inFlightDb=new Map();this.staticQueryDb={};this.pageDataDb=new Map();this.prefetchTriggered=new Set();this.prefetchCompleted=new Set();this.loadComponent=loadComponent;(0,find_path/* setMatchPaths */.DS)(matchPaths);}var _proto=BaseLoader.prototype;_proto.memoizedGet=function memoizedGet(url){var _this=this;var inFlightPromise=this.inFlightNetworkRequests.get(url);if(!inFlightPromise){inFlightPromise=doFetch(url,"GET");this.inFlightNetworkRequests.set(url,inFlightPromise);}// Prefer duplication with then + catch over .finally to prevent problems in ie11 + firefox
return inFlightPromise.then(function(response){_this.inFlightNetworkRequests.delete(url);return response;}).catch(function(err){_this.inFlightNetworkRequests.delete(url);throw err;});};_proto.setApiRunner=function setApiRunner(apiRunner){this.apiRunner=apiRunner;this.prefetchDisabled=apiRunner("disableCorePrefetching").some(function(a){return a;});};_proto.fetchPageDataJson=function fetchPageDataJson(loadObj){var _this2=this;var pagePath=loadObj.pagePath,_loadObj$retries=loadObj.retries,retries=_loadObj$retries===void 0?0:_loadObj$retries;var url=createPageDataUrl(pagePath);return this.memoizedGet(url).then(function(req){var status=req.status,responseText=req.responseText;// Handle 200
if(status===200){try{var jsonPayload=JSON.parse(responseText);if(jsonPayload.path===undefined){throw new Error("not a valid pageData response");}return Object.assign(loadObj,{status:PageResourceStatus.Success,payload:jsonPayload});}catch(err){// continue regardless of error
}}// Handle 404
if(status===404||status===200){// If the request was for a 404 page and it doesn't exist, we're done
if(pagePath==="/404.html"){return Object.assign(loadObj,{status:PageResourceStatus.Error});}// Need some code here to cache the 404 request. In case
// multiple loadPageDataJsons result in 404s
return _this2.fetchPageDataJson(Object.assign(loadObj,{pagePath:"/404.html",notFound:true}));}// handle 500 response (Unrecoverable)
if(status===500){return Object.assign(loadObj,{status:PageResourceStatus.Error});}// Handle everything else, including status === 0, and 503s. Should retry
if(retries<3){return _this2.fetchPageDataJson(Object.assign(loadObj,{retries:retries+1}));}// Retried 3 times already, result is an error.
return Object.assign(loadObj,{status:PageResourceStatus.Error});});};_proto.loadPageDataJson=function loadPageDataJson(rawPath){var _this3=this;var pagePath=(0,find_path/* findPath */.Cj)(rawPath);if(this.pageDataDb.has(pagePath)){var pageData=this.pageDataDb.get(pagePath);if(true){return Promise.resolve(pageData);}}return this.fetchPageDataJson({pagePath:pagePath}).then(function(pageData){_this3.pageDataDb.set(pagePath,pageData);return pageData;});};_proto.findMatchPath=function findMatchPath(rawPath){return (0,find_path/* findMatchPath */.UD)(rawPath);}// TODO check all uses of this and whether they use undefined for page resources not exist
;_proto.loadPage=function loadPage(rawPath){var _this4=this;var pagePath=(0,find_path/* findPath */.Cj)(rawPath);if(this.pageDb.has(pagePath)){var page=this.pageDb.get(pagePath);if(true){if(page.error){return{error:page.error,status:page.status};}return Promise.resolve(page.payload);}}if(this.inFlightDb.has(pagePath)){return this.inFlightDb.get(pagePath);}var inFlightPromise=Promise.all([this.loadAppData(),this.loadPageDataJson(pagePath)]).then(function(allData){var result=allData[1];if(result.status===PageResourceStatus.Error){return{status:PageResourceStatus.Error};}var pageData=result.payload;var _pageData=pageData,componentChunkName=_pageData.componentChunkName,_pageData$staticQuery=_pageData.staticQueryHashes,staticQueryHashes=_pageData$staticQuery===void 0?[]:_pageData$staticQuery;var finalResult={};var componentChunkPromise=_this4.loadComponent(componentChunkName).then(function(component){finalResult.createdAt=new Date();var pageResources;if(!component||component instanceof Error){finalResult.status=PageResourceStatus.Error;finalResult.error=component;}else{finalResult.status=PageResourceStatus.Success;if(result.notFound===true){finalResult.notFound=true;}pageData=Object.assign(pageData,{webpackCompilationHash:allData[0]?allData[0].webpackCompilationHash:""});pageResources=toPageResources(pageData,component);}// undefined if final result is an error
return pageResources;});var staticQueryBatchPromise=Promise.all(staticQueryHashes.map(function(staticQueryHash){// Check for cache in case this static query result has already been loaded
if(_this4.staticQueryDb[staticQueryHash]){var jsonPayload=_this4.staticQueryDb[staticQueryHash];return{staticQueryHash:staticQueryHash,jsonPayload:jsonPayload};}return _this4.memoizedGet("/stencil-gatsby-bug"+"/page-data/sq/d/"+staticQueryHash+".json").then(function(req){var jsonPayload=JSON.parse(req.responseText);return{staticQueryHash:staticQueryHash,jsonPayload:jsonPayload};}).catch(function(){throw new Error("We couldn't load \""+"/stencil-gatsby-bug"+"/page-data/sq/d/"+staticQueryHash+".json\"");});})).then(function(staticQueryResults){var staticQueryResultsMap={};staticQueryResults.forEach(function(_ref){var staticQueryHash=_ref.staticQueryHash,jsonPayload=_ref.jsonPayload;staticQueryResultsMap[staticQueryHash]=jsonPayload;_this4.staticQueryDb[staticQueryHash]=jsonPayload;});return staticQueryResultsMap;});return Promise.all([componentChunkPromise,staticQueryBatchPromise]).then(function(_ref2){var pageResources=_ref2[0],staticQueryResults=_ref2[1];var payload;if(pageResources){payload=Object.assign({},pageResources,{staticQueryResults:staticQueryResults});finalResult.payload=payload;emitter/* default.emit */.Z.emit("onPostLoadPageResources",{page:payload,pageResources:payload});}_this4.pageDb.set(pagePath,finalResult);if(finalResult.error){return{error:finalResult.error,status:finalResult.status};}return payload;})// when static-query fail to load we throw a better error
.catch(function(err){return{error:err,status:PageResourceStatus.Error};});});inFlightPromise.then(function(){_this4.inFlightDb.delete(pagePath);}).catch(function(error){_this4.inFlightDb.delete(pagePath);throw error;});this.inFlightDb.set(pagePath,inFlightPromise);return inFlightPromise;}// returns undefined if the page does not exists in cache
;_proto.loadPageSync=function loadPageSync(rawPath,options){if(options===void 0){options={};}var pagePath=(0,find_path/* findPath */.Cj)(rawPath);if(this.pageDb.has(pagePath)){var _options;var pageData=this.pageDb.get(pagePath);if(pageData.payload){return pageData.payload;}if((_options=options)!==null&&_options!==void 0&&_options.withErrorDetails){return{error:pageData.error,status:pageData.status};}}return undefined;};_proto.shouldPrefetch=function shouldPrefetch(pagePath){// Skip prefetching if we know user is on slow or constrained connection
if(!doesConnectionSupportPrefetch()){return false;}// Check if the page exists.
if(this.pageDb.has(pagePath)){return false;}return true;};_proto.prefetch=function prefetch(pagePath){var _this5=this;if(!this.shouldPrefetch(pagePath)){return false;}// Tell plugins with custom prefetching logic that they should start
// prefetching this path.
if(!this.prefetchTriggered.has(pagePath)){this.apiRunner("onPrefetchPathname",{pathname:pagePath});this.prefetchTriggered.add(pagePath);}// If a plugin has disabled core prefetching, stop now.
if(this.prefetchDisabled){return false;}var realPath=(0,find_path/* findPath */.Cj)(pagePath);// Todo make doPrefetch logic cacheable
// eslint-disable-next-line consistent-return
this.doPrefetch(realPath).then(function(){if(!_this5.prefetchCompleted.has(pagePath)){_this5.apiRunner("onPostPrefetchPathname",{pathname:pagePath});_this5.prefetchCompleted.add(pagePath);}});return true;};_proto.doPrefetch=function doPrefetch(pagePath){var _this6=this;var pageDataUrl=createPageDataUrl(pagePath);return _cache_prefetch(pageDataUrl,{crossOrigin:"anonymous",as:"fetch"}).then(function(){return(// This was just prefetched, so will return a response from
// the cache instead of making another request to the server
_this6.loadPageDataJson(pagePath));});};_proto.hovering=function hovering(rawPath){this.loadPage(rawPath);};_proto.getResourceURLsForPathname=function getResourceURLsForPathname(rawPath){var pagePath=(0,find_path/* findPath */.Cj)(rawPath);var page=this.pageDataDb.get(pagePath);if(page){var pageResources=toPageResources(page.payload);return[].concat((0,toConsumableArray/* default */.Z)(createComponentUrls(pageResources.page.componentChunkName)),[createPageDataUrl(pagePath)]);}else{return null;}};_proto.isPageNotFound=function isPageNotFound(rawPath){var pagePath=(0,find_path/* findPath */.Cj)(rawPath);var page=this.pageDb.get(pagePath);return!page||page.notFound;};_proto.loadAppData=function loadAppData(retries){var _this7=this;if(retries===void 0){retries=0;}return this.memoizedGet("/stencil-gatsby-bug"+"/page-data/app-data.json").then(function(req){var status=req.status,responseText=req.responseText;var appData;if(status!==200&&retries<3){// Retry 3 times incase of non-200 responses
return _this7.loadAppData(retries+1);}// Handle 200
if(status===200){try{var jsonPayload=JSON.parse(responseText);if(jsonPayload.webpackCompilationHash===undefined){throw new Error("not a valid app-data response");}appData=jsonPayload;}catch(err){// continue regardless of error
}}return appData;});};return BaseLoader;}();var createComponentUrls=function createComponentUrls(componentChunkName){return(window.___chunkMapping[componentChunkName]||[]).map(function(chunk){return "/stencil-gatsby-bug"+chunk;});};var ProdLoader=/*#__PURE__*/function(_BaseLoader){(0,inheritsLoose/* default */.Z)(ProdLoader,_BaseLoader);function ProdLoader(asyncRequires,matchPaths){var loadComponent=function loadComponent(chunkName){if(!asyncRequires.components[chunkName]){throw new Error("We couldn't find the correct component chunk with the name "+chunkName);}return asyncRequires.components[chunkName]().then(preferDefault)// loader will handle the case when component is error
.catch(function(err){return err;});};return _BaseLoader.call(this,loadComponent,matchPaths)||this;}var _proto2=ProdLoader.prototype;_proto2.doPrefetch=function doPrefetch(pagePath){return _BaseLoader.prototype.doPrefetch.call(this,pagePath).then(function(result){if(result.status!==PageResourceStatus.Success){return Promise.resolve();}var pageData=result.payload;var chunkName=pageData.componentChunkName;var componentUrls=createComponentUrls(chunkName);return Promise.all(componentUrls.map(_cache_prefetch)).then(function(){return pageData;});});};_proto2.loadPageDataJson=function loadPageDataJson(rawPath){return _BaseLoader.prototype.loadPageDataJson.call(this,rawPath).then(function(data){if(data.notFound){// check if html file exist using HEAD request:
// if it does we should navigate to it instead of showing 404
return doFetch(rawPath,"HEAD").then(function(req){if(req.status===200){// page (.html file) actually exist (or we asked for 404 )
// returning page resources status as errored to trigger
// regular browser navigation to given page
return{status:PageResourceStatus.Error};}// if HEAD request wasn't 200, return notFound result
// and show 404 page
return data;});}return data;});};return ProdLoader;}(BaseLoader);var instance;var setLoader=function setLoader(_loader){instance=_loader;};var publicLoader={enqueue:function enqueue(rawPath){return instance.prefetch(rawPath);},// Real methods
getResourceURLsForPathname:function getResourceURLsForPathname(rawPath){return instance.getResourceURLsForPathname(rawPath);},loadPage:function loadPage(rawPath){return instance.loadPage(rawPath);},// TODO add deprecation to v4 so people use withErrorDetails and then we can remove in v5 and change default behaviour
loadPageSync:function loadPageSync(rawPath,options){if(options===void 0){options={};}return instance.loadPageSync(rawPath,options);},prefetch:function prefetch(rawPath){return instance.prefetch(rawPath);},isPageNotFound:function isPageNotFound(rawPath){return instance.isPageNotFound(rawPath);},hovering:function hovering(rawPath){return instance.hovering(rawPath);},loadAppData:function loadAppData(){return instance.loadAppData();}};/* harmony default export */ var loader = (publicLoader);function getStaticQueryResults(){if(instance){return instance.staticQueryDb;}else{return{};}}

/***/ }),

/***/ 804:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1788);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _api_runner_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7343);
/* harmony import */ var _find_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2257);
// Renders page
var PageRenderer=/*#__PURE__*/function(_React$Component){(0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(PageRenderer,_React$Component);function PageRenderer(){return _React$Component.apply(this,arguments)||this;}var _proto=PageRenderer.prototype;_proto.render=function render(){var props=Object.assign({},this.props,{params:Object.assign({},(0,_find_path__WEBPACK_IMPORTED_MODULE_2__/* .grabMatchParams */ .GA)(this.props.location.pathname),this.props.pageResources.json.pageContext.__params)});var pageElement=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(this.props.pageResources.component,Object.assign({},props,{key:this.props.path||this.props.pageResources.page.path}));var wrappedPage=(0,_api_runner_browser__WEBPACK_IMPORTED_MODULE_1__/* .apiRunner */ .h)("wrapPageElement",{element:pageElement,props:props},pageElement,function(_ref){var result=_ref.result;return{element:result,props:props};}).pop();return wrappedPage;};return PageRenderer;}(react__WEBPACK_IMPORTED_MODULE_0__.Component);/* harmony default export */ __webpack_exports__["Z"] = (PageRenderer);

/***/ }),

/***/ 9865:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__(1788);
// EXTERNAL MODULE: ./.cache/api-runner-browser.js
var api_runner_browser = __webpack_require__(7343);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-dom/profiling.js
var profiling = __webpack_require__(2518);
// EXTERNAL MODULE: ./node_modules/@gatsbyjs/reach-router/es/index.js + 2 modules
var es = __webpack_require__(9499);
// EXTERNAL MODULE: ./node_modules/gatsby-react-router-scroll/index.js
var gatsby_react_router_scroll = __webpack_require__(9679);
// EXTERNAL MODULE: ./node_modules/@mikaelkristiansson/domready/ready.js
var ready = __webpack_require__(9228);
var ready_default = /*#__PURE__*/__webpack_require__.n(ready);
// EXTERNAL MODULE: ./node_modules/gatsby-link/index.js
var gatsby_link = __webpack_require__(8037);
// EXTERNAL MODULE: ./.cache/public-page-renderer.js
var public_page_renderer = __webpack_require__(861);
// EXTERNAL MODULE: ./.cache/loader.js + 1 modules
var loader = __webpack_require__(8741);
;// CONCATENATED MODULE: ./.cache/gatsby-browser-entry.js
var prefetchPathname=loader/* default.enqueue */.ZP.enqueue;var StaticQueryContext=/*#__PURE__*/react.createContext({});function StaticQueryDataRenderer(_ref){var staticQueryData=_ref.staticQueryData,data=_ref.data,query=_ref.query,render=_ref.render;var finalData=data?data.data:staticQueryData[query]&&staticQueryData[query].data;return/*#__PURE__*/React.createElement(React.Fragment,null,finalData&&render(finalData),!finalData&&/*#__PURE__*/React.createElement("div",null,"Loading (StaticQuery)"));}var StaticQuery=function StaticQuery(props){var data=props.data,query=props.query,render=props.render,children=props.children;return/*#__PURE__*/React.createElement(StaticQueryContext.Consumer,null,function(staticQueryData){return/*#__PURE__*/React.createElement(StaticQueryDataRenderer,{data:data,query:query,render:render||children,staticQueryData:staticQueryData});});};var useStaticQuery=function useStaticQuery(query){var _context$query;if(typeof React.useContext!=="function"&&"production"==="development"){throw new Error("You're likely using a version of React that doesn't support Hooks\n"+"Please update React and ReactDOM to 16.8.0 or later to use the useStaticQuery hook.");}var context=React.useContext(StaticQueryContext);// query is a stringified number like `3303882` when wrapped with graphql, If a user forgets
// to wrap the query in a grqphql, then casting it to a Number results in `NaN` allowing us to
// catch the misuse of the API and give proper direction
if(isNaN(Number(query))){throw new Error("useStaticQuery was called with a string but expects to be called using `graphql`. Try this:\n\nimport { useStaticQuery, graphql } from 'gatsby';\n\nuseStaticQuery(graphql`"+query+"`);\n");}if((_context$query=context[query])!==null&&_context$query!==void 0&&_context$query.data){return context[query].data;}else{throw new Error("The result of this StaticQuery could not be fetched.\n\n"+"This is likely a bug in Gatsby and if refreshing the page does not fix it, "+"please open an issue in https://github.com/gatsbyjs/gatsby/issues");}};function graphql(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls "+"are supposed to only be evaluated at compile time, and then compiled away. "+"Unfortunately, something went wrong and the query was left in the compiled code.\n\n"+"Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.");}
;// CONCATENATED MODULE: ./.cache/redirects.json
var redirects_namespaceObject = [];
// EXTERNAL MODULE: ./.cache/emitter.js + 1 modules
var emitter = __webpack_require__(8110);
;// CONCATENATED MODULE: ./.cache/route-announcer-props.js
// This is extracted to separate module because it's shared
// between browser and SSR code
var RouteAnnouncerProps={id:"gatsby-announcer",style:{position:"absolute",top:0,width:1,height:1,padding:0,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},"aria-live":"assertive","aria-atomic":"true"};
// EXTERNAL MODULE: ./node_modules/@gatsbyjs/reach-router/lib/history.js
var lib_history = __webpack_require__(2393);
;// CONCATENATED MODULE: ./.cache/navigation.js
// Convert to a map for faster lookup in maybeRedirect()
var redirectMap=new Map();var redirectIgnoreCaseMap=new Map();redirects_namespaceObject.forEach(function(redirect){if(redirect.ignoreCase){redirectIgnoreCaseMap.set(redirect.fromPath,redirect);}else{redirectMap.set(redirect.fromPath,redirect);}});function maybeRedirect(pathname){var redirect=redirectMap.get(pathname);if(!redirect){redirect=redirectIgnoreCaseMap.get(pathname.toLowerCase());}if(redirect!=null){if(false){}window.___replace(redirect.toPath);return true;}else{return false;}}var onPreRouteUpdate=function onPreRouteUpdate(location,prevLocation){if(!maybeRedirect(location.pathname)){(0,api_runner_browser/* apiRunner */.h)("onPreRouteUpdate",{location:location,prevLocation:prevLocation});}};var onRouteUpdate=function onRouteUpdate(location,prevLocation){if(!maybeRedirect(location.pathname)){(0,api_runner_browser/* apiRunner */.h)("onRouteUpdate",{location:location,prevLocation:prevLocation});if(false){}}};var navigation_navigate=function navigate(to,options){if(options===void 0){options={};}// Support forward/backward navigation with numbers
// navigate(-2) (jumps back 2 history steps)
// navigate(2)  (jumps forward 2 history steps)
if(typeof to==="number"){lib_history/* globalHistory.navigate */.V5.navigate(to);return;}var _parsePath=(0,gatsby_link/* parsePath */.cP)(to),pathname=_parsePath.pathname;var redirect=redirectMap.get(pathname);if(!redirect){redirect=redirectIgnoreCaseMap.get(pathname.toLowerCase());}// If we're redirecting, just replace the passed in pathname
// to the one we want to redirect to.
if(redirect){to=redirect.toPath;pathname=(0,gatsby_link/* parsePath */.cP)(to).pathname;}// If we had a service worker update, no matter the path, reload window and
// reset the pathname whitelist
if(window.___swUpdated){window.location=pathname;return;}// Start a timer to wait for a second before transitioning and showing a
// loader in case resources aren't around yet.
var timeoutId=setTimeout(function(){emitter/* default.emit */.Z.emit("onDelayedLoadPageResources",{pathname:pathname});(0,api_runner_browser/* apiRunner */.h)("onRouteUpdateDelayed",{location:window.location});},1000);loader/* default.loadPage */.ZP.loadPage(pathname).then(function(pageResources){// If no page resources, then refresh the page
// Do this, rather than simply `window.location.reload()`, so that
// pressing the back/forward buttons work - otherwise when pressing
// back, the browser will just change the URL and expect JS to handle
// the change, which won't always work since it might not be a Gatsby
// page.
if(!pageResources||pageResources.status===loader/* PageResourceStatus.Error */.uQ.Error){window.history.replaceState({},"",location.href);window.location=pathname;clearTimeout(timeoutId);return;}// If the loaded page has a different compilation hash to the
// window, then a rebuild has occurred on the server. Reload.
if( true&&pageResources){if(pageResources.page.webpackCompilationHash!==window.___webpackCompilationHash){// Purge plugin-offline cache
if("serviceWorker"in navigator&&navigator.serviceWorker.controller!==null&&navigator.serviceWorker.controller.state==="activated"){navigator.serviceWorker.controller.postMessage({gatsbyApi:"clearPathResources"});}window.location=pathname;}}(0,es.navigate)(to,options);clearTimeout(timeoutId);});};function shouldUpdateScroll(prevRouterProps,_ref){var _this=this;var location=_ref.location;var pathname=location.pathname,hash=location.hash;var results=(0,api_runner_browser/* apiRunner */.h)("shouldUpdateScroll",{prevRouterProps:prevRouterProps,// `pathname` for backwards compatibility
pathname:pathname,routerProps:{location:location},getSavedScrollPosition:function getSavedScrollPosition(args){return[0,// FIXME this is actually a big code smell, we should fix this
// eslint-disable-next-line @babel/no-invalid-this
_this._stateStorage.read(args,args.key)];}});if(results.length>0){// Use the latest registered shouldUpdateScroll result, this allows users to override plugin's configuration
// @see https://github.com/gatsbyjs/gatsby/issues/12038
return results[results.length-1];}if(prevRouterProps){var oldPathname=prevRouterProps.location.pathname;if(oldPathname===pathname){// Scroll to element if it exists, if it doesn't, or no hash is provided,
// scroll to top.
return hash?decodeURI(hash.slice(1)):[0,0];}}return true;}function init(){// The "scroll-behavior" package expects the "action" to be on the location
// object so let's copy it over.
lib_history/* globalHistory.listen */.V5.listen(function(args){args.location.action=args.action;});window.___push=function(to){return navigation_navigate(to,{replace:false});};window.___replace=function(to){return navigation_navigate(to,{replace:true});};window.___navigate=function(to,options){return navigation_navigate(to,options);};// Check for initial page-load redirect
maybeRedirect(window.location.pathname);}var RouteAnnouncer=/*#__PURE__*/function(_React$Component){(0,inheritsLoose/* default */.Z)(RouteAnnouncer,_React$Component);function RouteAnnouncer(props){var _this2;_this2=_React$Component.call(this,props)||this;_this2.announcementRef=/*#__PURE__*/react.createRef();return _this2;}var _proto=RouteAnnouncer.prototype;_proto.componentDidUpdate=function componentDidUpdate(prevProps,nextProps){var _this3=this;requestAnimationFrame(function(){var pageName="new page at "+_this3.props.location.pathname;if(document.title){pageName=document.title;}var pageHeadings=document.querySelectorAll("#gatsby-focus-wrapper h1");if(pageHeadings&&pageHeadings.length){pageName=pageHeadings[0].textContent;}var newAnnouncement="Navigated to "+pageName;if(_this3.announcementRef.current){var oldAnnouncement=_this3.announcementRef.current.innerText;if(oldAnnouncement!==newAnnouncement){_this3.announcementRef.current.innerText=newAnnouncement;}}});};_proto.render=function render(){return/*#__PURE__*/react.createElement("div",Object.assign({},RouteAnnouncerProps,{ref:this.announcementRef}));};return RouteAnnouncer;}(react.Component);var compareLocationProps=function compareLocationProps(prevLocation,nextLocation){var _prevLocation$state,_nextLocation$state;if(prevLocation.href!==nextLocation.href){return true;}if((prevLocation===null||prevLocation===void 0?void 0:(_prevLocation$state=prevLocation.state)===null||_prevLocation$state===void 0?void 0:_prevLocation$state.key)!==(nextLocation===null||nextLocation===void 0?void 0:(_nextLocation$state=nextLocation.state)===null||_nextLocation$state===void 0?void 0:_nextLocation$state.key)){return true;}return false;};// Fire on(Pre)RouteUpdate APIs
var RouteUpdates=/*#__PURE__*/function(_React$Component2){(0,inheritsLoose/* default */.Z)(RouteUpdates,_React$Component2);function RouteUpdates(props){var _this4;_this4=_React$Component2.call(this,props)||this;onPreRouteUpdate(props.location,null);return _this4;}var _proto2=RouteUpdates.prototype;_proto2.componentDidMount=function componentDidMount(){onRouteUpdate(this.props.location,null);};_proto2.shouldComponentUpdate=function shouldComponentUpdate(prevProps){if(compareLocationProps(prevProps.location,this.props.location)){onPreRouteUpdate(this.props.location,prevProps.location);return true;}return false;};_proto2.componentDidUpdate=function componentDidUpdate(prevProps){if(compareLocationProps(prevProps.location,this.props.location)){onRouteUpdate(this.props.location,prevProps.location);}};_proto2.render=function render(){return/*#__PURE__*/react.createElement(react.Fragment,null,this.props.children,/*#__PURE__*/react.createElement(RouteAnnouncer,{location:location}));};return RouteUpdates;}(react.Component);
// EXTERNAL MODULE: ./.cache/page-renderer.js
var page_renderer = __webpack_require__(804);
// EXTERNAL MODULE: ./.cache/_this_is_virtual_fs_path_/$virtual/async-requires.js
var async_requires = __webpack_require__(4999);
;// CONCATENATED MODULE: ./node_modules/shallow-compare/es/index.js
// Pulled from react-compat
// https://github.com/developit/preact-compat/blob/7c5de00e7c85e2ffd011bf3af02899b63f699d3a/src/index.js#L349
function shallowDiffers(a, b) {
  for (var i in a) {
    if (!(i in b)) return true;
  }for (var _i in b) {
    if (a[_i] !== b[_i]) return true;
  }return false;
}

/* harmony default export */ var shallow_compare_es = (function (instance, nextProps, nextState) {
  return shallowDiffers(instance.props, nextProps) || shallowDiffers(instance.state, nextState);
});
;// CONCATENATED MODULE: ./.cache/ensure-resources.js
var EnsureResources=/*#__PURE__*/function(_React$Component){(0,inheritsLoose/* default */.Z)(EnsureResources,_React$Component);function EnsureResources(props){var _this;_this=_React$Component.call(this)||this;var location=props.location,pageResources=props.pageResources;_this.state={location:Object.assign({},location),pageResources:pageResources||loader/* default.loadPageSync */.ZP.loadPageSync(location.pathname,{withErrorDetails:true})};return _this;}EnsureResources.getDerivedStateFromProps=function getDerivedStateFromProps(_ref,prevState){var location=_ref.location;if(prevState.location.href!==location.href){var pageResources=loader/* default.loadPageSync */.ZP.loadPageSync(location.pathname,{withErrorDetails:true});return{pageResources:pageResources,location:Object.assign({},location)};}return{location:Object.assign({},location)};};var _proto=EnsureResources.prototype;_proto.loadResources=function loadResources(rawPath){var _this2=this;loader/* default.loadPage */.ZP.loadPage(rawPath).then(function(pageResources){if(pageResources&&pageResources.status!==loader/* PageResourceStatus.Error */.uQ.Error){_this2.setState({location:Object.assign({},window.location),pageResources:pageResources});}else{window.history.replaceState({},"",location.href);window.location=rawPath;}});};_proto.shouldComponentUpdate=function shouldComponentUpdate(nextProps,nextState){// Always return false if we're missing resources.
if(!nextState.pageResources){this.loadResources(nextProps.location.pathname);return false;}if(false){}// Check if the component or json have changed.
if(this.state.pageResources!==nextState.pageResources){return true;}if(this.state.pageResources.component!==nextState.pageResources.component){return true;}if(this.state.pageResources.json!==nextState.pageResources.json){return true;}// Check if location has changed on a page using internal routing
// via matchPath configuration.
if(this.state.location.key!==nextState.location.key&&nextState.pageResources.page&&(nextState.pageResources.page.matchPath||nextState.pageResources.page.path)){return true;}return shallow_compare_es(this,nextProps,nextState);};_proto.render=function render(){if(false){ var message, _this$state$pageResou; }return this.props.children(this.state);};return EnsureResources;}(react.Component);/* harmony default export */ var ensure_resources = (EnsureResources);
// EXTERNAL MODULE: ./.cache/strip-prefix.js
var strip_prefix = __webpack_require__(1578);
;// CONCATENATED MODULE: ./.cache/_this_is_virtual_fs_path_/$virtual/match-paths.json
var match_paths_namespaceObject = [];
;// CONCATENATED MODULE: ./.cache/production-app.js
// Generated during bootstrap
var production_app_loader=new loader/* ProdLoader */.kL(async_requires,match_paths_namespaceObject);(0,loader/* setLoader */.N1)(production_app_loader);production_app_loader.setApiRunner(api_runner_browser/* apiRunner */.h);window.asyncRequires=async_requires;window.___emitter=emitter/* default */.Z;window.___loader=loader/* publicLoader */.jN;init();(0,api_runner_browser/* apiRunnerAsync */.I)("onClientEntry").then(function(){// Let plugins register a service worker. The plugin just needs
// to return true.
if((0,api_runner_browser/* apiRunner */.h)("registerServiceWorker").filter(Boolean).length>0){__webpack_require__(154);}// In gatsby v2 if Router is used in page using matchPaths
// paths need to contain full path.
// For example:
//   - page have `/app/*` matchPath
//   - inside template user needs to use `/app/xyz` as path
// Resetting `basepath`/`baseuri` keeps current behaviour
// to not introduce breaking change.
// Remove this in v3
var RouteHandler=function RouteHandler(props){return/*#__PURE__*/react.createElement(es.BaseContext.Provider,{value:{baseuri:"/",basepath:"/"}},/*#__PURE__*/react.createElement(page_renderer/* default */.Z,props));};var DataContext=/*#__PURE__*/react.createContext({});var GatsbyRoot=/*#__PURE__*/function(_React$Component){(0,inheritsLoose/* default */.Z)(GatsbyRoot,_React$Component);function GatsbyRoot(){return _React$Component.apply(this,arguments)||this;}var _proto=GatsbyRoot.prototype;_proto.render=function render(){var children=this.props.children;return/*#__PURE__*/react.createElement(es.Location,null,function(_ref){var location=_ref.location;return/*#__PURE__*/react.createElement(ensure_resources,{location:location},function(_ref2){var pageResources=_ref2.pageResources,location=_ref2.location;var staticQueryResults=(0,loader/* getStaticQueryResults */.hs)();return/*#__PURE__*/react.createElement(StaticQueryContext.Provider,{value:staticQueryResults},/*#__PURE__*/react.createElement(DataContext.Provider,{value:{pageResources:pageResources,location:location}},children));});});};return GatsbyRoot;}(react.Component);var LocationHandler=/*#__PURE__*/function(_React$Component2){(0,inheritsLoose/* default */.Z)(LocationHandler,_React$Component2);function LocationHandler(){return _React$Component2.apply(this,arguments)||this;}var _proto2=LocationHandler.prototype;_proto2.render=function render(){var _this=this;return/*#__PURE__*/react.createElement(DataContext.Consumer,null,function(_ref3){var pageResources=_ref3.pageResources,location=_ref3.location;return/*#__PURE__*/react.createElement(RouteUpdates,{location:location},/*#__PURE__*/react.createElement(gatsby_react_router_scroll/* ScrollContext */.$C,{location:location,shouldUpdateScroll:shouldUpdateScroll},/*#__PURE__*/react.createElement(es.Router,{basepath:"/stencil-gatsby-bug",location:location,id:"gatsby-focus-wrapper"},/*#__PURE__*/react.createElement(RouteHandler,Object.assign({path:pageResources.page.path==="/404.html"?(0,strip_prefix/* default */.Z)(location.pathname,"/stencil-gatsby-bug"):encodeURI(pageResources.page.matchPath||pageResources.page.path)},_this.props,{location:location,pageResources:pageResources},pageResources.json)))));});};return LocationHandler;}(react.Component);var _window=window,pagePath=_window.pagePath,browserLoc=_window.location;// Explicitly call navigate if the canonical path (window.pagePath)
// is different to the browser path (window.location.pathname). But
// only if NONE of the following conditions hold:
//
// - The url matches a client side route (page.matchPath)
// - it's a 404 page
// - it's the offline plugin shell (/offline-plugin-app-shell-fallback/)
if(pagePath&&"/stencil-gatsby-bug"+pagePath!==browserLoc.pathname&&!(production_app_loader.findMatchPath((0,strip_prefix/* default */.Z)(browserLoc.pathname,"/stencil-gatsby-bug"))||pagePath==="/404.html"||pagePath.match(/^\/404\/?$/)||pagePath.match(/^\/offline-plugin-app-shell-fallback\/?$/))){(0,es.navigate)("/stencil-gatsby-bug"+pagePath+browserLoc.search+browserLoc.hash,{replace:true});}loader/* publicLoader.loadPage */.jN.loadPage(browserLoc.pathname).then(function(page){if(!page||page.status===loader/* PageResourceStatus.Error */.uQ.Error){var message="page resources for "+browserLoc.pathname+" not found. Not rendering React";// if the chunk throws an error we want to capture the real error
// This should help with https://github.com/gatsbyjs/gatsby/issues/19618
if(page&&page.error){console.error(message);throw page.error;}throw new Error(message);}window.___webpackCompilationHash=page.page.webpackCompilationHash;var SiteRoot=(0,api_runner_browser/* apiRunner */.h)("wrapRootElement",{element:/*#__PURE__*/react.createElement(LocationHandler,null)},/*#__PURE__*/react.createElement(LocationHandler,null),function(_ref4){var result=_ref4.result;return{element:result};}).pop();var App=function App(){return/*#__PURE__*/react.createElement(GatsbyRoot,null,SiteRoot);};var renderer=(0,api_runner_browser/* apiRunner */.h)("replaceHydrateFunction",undefined,profiling.hydrate)[0];ready_default()(function(){renderer(/*#__PURE__*/react.createElement(App,null),typeof window!=="undefined"?document.getElementById("___gatsby"):void 0,function(){(0,api_runner_browser/* apiRunner */.h)("onInitialClientRender");});});});});

/***/ }),

/***/ 6947:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8741);
/* harmony import */ var _page_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(804);
var ProdPageRenderer=function ProdPageRenderer(_ref){var location=_ref.location;var pageResources=_loader__WEBPACK_IMPORTED_MODULE_1__/* .default.loadPageSync */ .ZP.loadPageSync(location.pathname);if(!pageResources){return null;}return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_page_renderer__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z,Object.assign({location:location,pageResources:pageResources},pageResources.json));};/* harmony default export */ __webpack_exports__["default"] = (ProdPageRenderer);

/***/ }),

/***/ 861:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var preferDefault=function preferDefault(m){return m&&m.default||m;};if(false){}else if(true){module.exports=preferDefault(__webpack_require__(6947));}else{}

/***/ }),

/***/ 3639:
/***/ (function(__unused_webpack_module, exports) {

exports.O=function(Component){return Component;};

/***/ }),

/***/ 154:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_runner_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7343);
if(window.location.protocol!=="https:"&&window.location.hostname!=="localhost"){console.error("Service workers can only be used over HTTPS, or on localhost for development");}else if("serviceWorker"in navigator){navigator.serviceWorker.register("/stencil-gatsby-bug"+"/sw.js").then(function(reg){reg.addEventListener("updatefound",function(){(0,_api_runner_browser__WEBPACK_IMPORTED_MODULE_0__/* .apiRunner */ .h)("onServiceWorkerUpdateFound",{serviceWorker:reg});// The updatefound event implies that reg.installing is set; see
// https://w3c.github.io/ServiceWorker/#service-worker-registration-updatefound-event
var installingWorker=reg.installing;console.log("installingWorker",installingWorker);installingWorker.addEventListener("statechange",function(){switch(installingWorker.state){case"installed":if(navigator.serviceWorker.controller){// At this point, the old content will have been purged and the fresh content will
// have been added to the cache.
// We set a flag so Gatsby Link knows to refresh the page on next navigation attempt
window.___swUpdated=true;// We call the onServiceWorkerUpdateReady API so users can show update prompts.
(0,_api_runner_browser__WEBPACK_IMPORTED_MODULE_0__/* .apiRunner */ .h)("onServiceWorkerUpdateReady",{serviceWorker:reg});// If resources failed for the current page, reload.
if(window.___failedResources){console.log("resources failed, SW updated - reloading");window.location.reload();}}else{// At this point, everything has been precached.
// It's the perfect time to display a "Content is cached for offline use." message.
console.log("Content is now available offline!");// Post to service worker that install is complete.
// Delay to allow time for the event listener to be added --
// otherwise fetch is called too soon and resources aren't cached.
(0,_api_runner_browser__WEBPACK_IMPORTED_MODULE_0__/* .apiRunner */ .h)("onServiceWorkerInstalled",{serviceWorker:reg});}break;case"redundant":console.error("The installing service worker became redundant.");(0,_api_runner_browser__WEBPACK_IMPORTED_MODULE_0__/* .apiRunner */ .h)("onServiceWorkerRedundant",{serviceWorker:reg});break;case"activated":(0,_api_runner_browser__WEBPACK_IMPORTED_MODULE_0__/* .apiRunner */ .h)("onServiceWorkerActive",{serviceWorker:reg});break;}});});}).catch(function(e){console.error("Error during service worker registration:",e);});}

/***/ }),

/***/ 1578:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ stripPrefix; }
/* harmony export */ });
/**
 * Remove a prefix from a string. Return the input string if the given prefix
 * isn't found.
 */function stripPrefix(str,prefix){if(prefix===void 0){prefix="";}if(!prefix){return str;}if(str===prefix){return"/";}if(str.startsWith(prefix+"/")){return str.slice(prefix.length);}return str;}

/***/ }),

/***/ 5472:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "DefaultDiv": function() { return /* binding */ DefaultDiv; },
  "ScopedDiv": function() { return /* binding */ ScopedDiv; },
  "ShadowDiv": function() { return /* binding */ ShadowDiv; },
  "defineCustomElements": function() { return /* binding */ defineCustomElements; },
  "setAssetPath": function() { return /* reexport */ setAssetPath; },
  "setPlatformOptions": function() { return /* reexport */ setPlatformOptions; }
});

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function assertThisInitialized_assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__(1788);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function getPrototypeOf_getPrototypeOf(o) {
  getPrototypeOf_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return getPrototypeOf_getPrototypeOf(o);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
var setPrototypeOf = __webpack_require__(4665);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/isNativeFunction.js
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/construct.js


function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) (0,setPrototypeOf/* default */.Z)(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js




function wrapNativeSuper_wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  wrapNativeSuper_wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, getPrototypeOf_getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return (0,setPrototypeOf/* default */.Z)(Wrapper, Class);
  };

  return wrapNativeSuper_wrapNativeSuper(Class);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__(8);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js


function possibleConstructorReturn_possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__(7329);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
var unsupportedIterableToArray = __webpack_require__(2961);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || (0,unsupportedIterableToArray/* default */.Z)(arr, i) || _nonIterableRest();
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function classCallCheck_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(7757);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
;// CONCATENATED MODULE: ./node_modules/@stencil/core/internal/app-data/index.js
var app_data_BUILD = {
  allRenderFn: false,
  cmpDidLoad: true,
  cmpDidUnload: false,
  cmpDidUpdate: true,
  cmpDidRender: true,
  cmpWillLoad: true,
  cmpWillUpdate: true,
  cmpWillRender: true,
  connectedCallback: true,
  disconnectedCallback: true,
  element: true,
  event: true,
  hasRenderFn: true,
  lifecycle: true,
  hostListener: true,
  hostListenerTargetWindow: true,
  hostListenerTargetDocument: true,
  hostListenerTargetBody: true,
  hostListenerTargetParent: false,
  hostListenerTarget: true,
  member: true,
  method: true,
  mode: true,
  observeAttribute: true,
  prop: true,
  propMutable: true,
  reflect: true,
  scoped: true,
  shadowDom: true,
  slot: true,
  cssAnnotations: true,
  state: true,
  style: true,
  svg: true,
  updatable: true,
  vdomAttribute: true,
  vdomXlink: true,
  vdomClass: true,
  vdomFunctional: true,
  vdomKey: true,
  vdomListener: true,
  vdomRef: true,
  vdomPropOrAttr: true,
  vdomRender: true,
  vdomStyle: true,
  vdomText: true,
  watchCallback: true,
  taskQueue: true,
  hotModuleReplacement: false,
  isDebug: false,
  isDev: false,
  isTesting: false,
  hydrateServerSide: false,
  hydrateClientSide: false,
  lifecycleDOMEvents: false,
  lazyLoad: false,
  profile: false,
  slotRelocation: true,
  appendChildSlotFix: false,
  cloneNodeFix: false,
  hydratedAttribute: false,
  hydratedClass: true,
  safari10: false,
  scriptDataOpts: false,
  shadowDomShim: false,
  slotChildNodesFix: false,
  propBoolean: true,
  propNumber: true,
  propString: true,
  cssVarShim: false,
  constructableCSS: true,
  cmpShouldUpdate: true,
  devTools: false,
  dynamicImportShim: false,
  shadowDelegatesFocus: true,
  initializeNextTick: false,
  asyncLoading: false,
  asyncQueue: false,
  transformTagName: false,
  attachStyles: true
};
var Env = {};
var NAMESPACE =
/* default */
'app';

;// CONCATENATED MODULE: ./node_modules/@stencil/core/internal/client/index.js












function _createSuper(Derived) { var hasNativeReflectConstruct = client_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function client_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }


var scopeId;
var contentRef;
var hostTagName;
var customError;
var i = 0;
var useNativeShadowDom = false;
var checkSlotFallbackVisibility = false;
var checkSlotRelocate = false;
var isSvgMode = false;
var renderingRef = null;
var queueCongestion = 0;
var queuePending = false;
/*
 Stencil Client Platform v2.5.2 | MIT Licensed | https://stenciljs.com
 */


var win = typeof window !== 'undefined' ? window : {};
var CSS = app_data_BUILD.cssVarShim ? win.CSS : null;
var doc = win.document || {
  head: {}
};

var H = win.HTMLElement || /*#__PURE__*/function () {
  function _class() {
    classCallCheck_classCallCheck(this, _class);
  }

  return _class;
}();

var plt = {
  $flags$: 0,
  $resourcesUrl$: '',
  jmp: function jmp(h) {
    return h();
  },
  raf: function raf(h) {
    return requestAnimationFrame(h);
  },
  ael: function ael(el, eventName, listener, opts) {
    return el.addEventListener(eventName, listener, opts);
  },
  rel: function rel(el, eventName, listener, opts) {
    return el.removeEventListener(eventName, listener, opts);
  },
  ce: function ce(eventName, opts) {
    return new CustomEvent(eventName, opts);
  }
};
var supportsShadow = app_data_BUILD.shadowDomShim && app_data_BUILD.shadowDom ? /*@__PURE__*/function () {
  return (doc.head.attachShadow + '').indexOf('[native') > -1;
}() : true;

var supportsListenerOptions = /*@__PURE__*/function () {
  var supportsListenerOptions = false;

  try {
    doc.addEventListener('e', null, Object.defineProperty({}, 'passive', {
      get: function get() {
        supportsListenerOptions = true;
      }
    }));
  } catch (e) {}

  return supportsListenerOptions;
}();

var promiseResolve = function promiseResolve(v) {
  return Promise.resolve(v);
};

var supportsConstructibleStylesheets = app_data_BUILD.constructableCSS ? /*@__PURE__*/function () {
  try {
    new CSSStyleSheet();
    return typeof new CSSStyleSheet().replace === 'function';
  } catch (e) {}

  return false;
}() : false;
var Context = {};

var addHostEventListeners = function addHostEventListeners(elm, hostRef, listeners, attachParentListeners) {
  if (app_data_BUILD.hostListener && listeners) {
    // this is called immediately within the element's constructor
    // initialize our event listeners on the host element
    // we do this now so that we can listen to events that may
    // have fired even before the instance is ready
    if (app_data_BUILD.hostListenerTargetParent) {
      // this component may have event listeners that should be attached to the parent
      if (attachParentListeners) {
        // this is being ran from within the connectedCallback
        // which is important so that we know the host element actually has a parent element
        // filter out the listeners to only have the ones that ARE being attached to the parent
        listeners = listeners.filter(function (_ref2) {
          var _ref3 = _slicedToArray(_ref2, 1),
              flags = _ref3[0];

          return flags & 32;
        }
        /* TargetParent */
        );
      } else {
        // this is being ran from within the component constructor
        // everything BUT the parent element listeners should be attached at this time
        // filter out the listeners that are NOT being attached to the parent
        listeners = listeners.filter(function (_ref4) {
          var _ref5 = _slicedToArray(_ref4, 1),
              flags = _ref5[0];

          return !(flags & 32
          /* TargetParent */
          );
        });
      }
    }

    listeners.map(function (_ref6) {
      var _ref7 = _slicedToArray(_ref6, 3),
          flags = _ref7[0],
          name = _ref7[1],
          method = _ref7[2];

      var target = app_data_BUILD.hostListenerTarget ? getHostListenerTarget(elm, flags) : elm;
      var handler = hostListenerProxy(hostRef, method);
      var opts = hostListenerOpts(flags);
      plt.ael(target, name, handler, opts);
      (hostRef.$rmListeners$ = hostRef.$rmListeners$ || []).push(function () {
        return plt.rel(target, name, handler, opts);
      });
    });
  }
};

var hostListenerProxy = function hostListenerProxy(hostRef, methodName) {
  return function (ev) {
    try {
      if (app_data_BUILD.lazyLoad) {
        if (hostRef.$flags$ & 256
        /* isListenReady */
        ) {
            // instance is ready, let's call it's member method for this event
            hostRef.$lazyInstance$[methodName](ev);
          } else {
          (hostRef.$queuedListeners$ = hostRef.$queuedListeners$ || []).push([methodName, ev]);
        }
      } else {
        hostRef.$hostElement$[methodName](ev);
      }
    } catch (e) {
      consoleError(e);
    }
  };
};

var getHostListenerTarget = function getHostListenerTarget(elm, flags) {
  if (app_data_BUILD.hostListenerTargetDocument && flags & 4
  /* TargetDocument */
  ) return doc;
  if (app_data_BUILD.hostListenerTargetWindow && flags & 8
  /* TargetWindow */
  ) return win;
  if (app_data_BUILD.hostListenerTargetBody && flags & 16
  /* TargetBody */
  ) return doc.body;
  if (app_data_BUILD.hostListenerTargetParent && flags & 32
  /* TargetParent */
  ) return elm.parentElement;
  return elm;
}; // prettier-ignore


var hostListenerOpts = function hostListenerOpts(flags) {
  return supportsListenerOptions ? {
    passive: (flags & 1
    /* Passive */
    ) !== 0,
    capture: (flags & 2
    /* Capture */
    ) !== 0
  } : (flags & 2
  /* Capture */
  ) !== 0;
};

var CONTENT_REF_ID = 'r';
var ORG_LOCATION_ID = 'o';
var SLOT_NODE_ID = 's';
var TEXT_NODE_ID = 't';
var HYDRATE_ID = 's-id';
var HYDRATED_STYLE_ID = 'sty-id';
var HYDRATE_CHILD_ID = 'c-id';
var HYDRATED_CSS = '{visibility:hidden}.hydrated{visibility:inherit}';
var XLINK_NS = 'http://www.w3.org/1999/xlink';

var createTime = function createTime(fnName) {
  var tagName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (app_data_BUILD.profile && performance.mark) {
    var key = "st:".concat(fnName, ":").concat(tagName, ":").concat(i++); // Start

    performance.mark(key); // End

    return function () {
      return performance.measure("[Stencil] ".concat(fnName, "() <").concat(tagName, ">"), key);
    };
  } else {
    return function () {
      return;
    };
  }
};

var uniqueTime = function uniqueTime(key, measureText) {
  if (app_data_BUILD.profile && performance.mark) {
    if (performance.getEntriesByName(key).length === 0) {
      performance.mark(key);
    }

    return function () {
      if (performance.getEntriesByName(measureText).length === 0) {
        performance.measure(measureText, key);
      }
    };
  } else {
    return function () {
      return;
    };
  }
};

var inspect = function inspect(ref) {
  var _ref8;

  var hostRef = getHostRef(ref);

  if (!hostRef) {
    return undefined;
  }

  var flags = hostRef.$flags$;
  var hostElement = hostRef.$hostElement$;
  return _ref8 = {
    renderCount: hostRef.$renderCount$,
    flags: {
      hasRendered: !!(flags & 2
      /* hasRendered */
      ),
      hasConnected: !!(flags & 1
      /* hasConnected */
      ),
      isWaitingForChildren: !!(flags & 4
      /* isWaitingForChildren */
      ),
      isConstructingInstance: !!(flags & 8
      /* isConstructingInstance */
      ),
      isQueuedForUpdate: !!(flags & 16
      /* isQueuedForUpdate */
      ),
      hasInitializedComponent: !!(flags & 32
      /* hasInitializedComponent */
      ),
      hasLoadedComponent: !!(flags & 64
      /* hasLoadedComponent */
      ),
      isWatchReady: !!(flags & 128
      /* isWatchReady */
      ),
      isListenReady: !!(flags & 256
      /* isListenReady */
      ),
      needsRerender: !!(flags & 512
      /* needsRerender */
      )
    },
    instanceValues: hostRef.$instanceValues$,
    ancestorComponent: hostRef.$ancestorComponent$,
    hostElement: hostElement,
    lazyInstance: hostRef.$lazyInstance$,
    vnode: hostRef.$vnode$,
    modeName: hostRef.$modeName$,
    onReadyPromise: hostRef.$onReadyPromise$,
    onReadyResolve: hostRef.$onReadyResolve$,
    onInstancePromise: hostRef.$onInstancePromise$,
    onInstanceResolve: hostRef.$onInstanceResolve$,
    onRenderResolve: hostRef.$onRenderResolve$,
    queuedListeners: hostRef.$queuedListeners$,
    rmListeners: hostRef.$rmListeners$
  }, _defineProperty(_ref8, 's-id', hostElement['s-id']), _defineProperty(_ref8, 's-cr', hostElement['s-cr']), _defineProperty(_ref8, 's-lr', hostElement['s-lr']), _defineProperty(_ref8, 's-p', hostElement['s-p']), _defineProperty(_ref8, 's-rc', hostElement['s-rc']), _defineProperty(_ref8, 's-sc', hostElement['s-sc']), _ref8;
};

var installDevTools = function installDevTools() {
  if (BUILD.devTools) {
    var stencil = win.stencil = win.stencil || {};
    var originalInspect = stencil.inspect;

    stencil.inspect = function (ref) {
      var result = inspect(ref);

      if (!result && typeof originalInspect === 'function') {
        result = originalInspect(ref);
      }

      return result;
    };
  }
};

var rootAppliedStyles = new WeakMap();

var registerStyle = function registerStyle(scopeId, cssText, allowCS) {
  var style = styles.get(scopeId);

  if (supportsConstructibleStylesheets && allowCS) {
    style = style || new CSSStyleSheet();
    style.replace(cssText);
  } else {
    style = cssText;
  }

  styles.set(scopeId, style);
};

var addStyle = function addStyle(styleContainerNode, cmpMeta, mode, hostElm) {
  var scopeId = getScopeId(cmpMeta, mode);
  var style = styles.get(scopeId);

  if (!app_data_BUILD.attachStyles) {
    return scopeId;
  } // if an element is NOT connected then getRootNode() will return the wrong root node
  // so the fallback is to always use the document for the root node in those cases


  styleContainerNode = styleContainerNode.nodeType === 11
  /* DocumentFragment */
  ? styleContainerNode : doc;

  if (style) {
    if (typeof style === 'string') {
      styleContainerNode = styleContainerNode.head || styleContainerNode;
      var appliedStyles = rootAppliedStyles.get(styleContainerNode);
      var styleElm;

      if (!appliedStyles) {
        rootAppliedStyles.set(styleContainerNode, appliedStyles = new Set());
      }

      if (!appliedStyles.has(scopeId)) {
        if (app_data_BUILD.hydrateClientSide && styleContainerNode.host && (styleElm = styleContainerNode.querySelector("[".concat(HYDRATED_STYLE_ID, "=\"").concat(scopeId, "\"]")))) {
          // This is only happening on native shadow-dom, do not needs CSS var shim
          styleElm.innerHTML = style;
        } else {
          if (app_data_BUILD.cssVarShim && plt.$cssShim$) {
            styleElm = plt.$cssShim$.createHostStyle(hostElm, scopeId, style, !!(cmpMeta.$flags$ & 10
            /* needsScopedEncapsulation */
            ));
            var newScopeId = styleElm['s-sc'];

            if (newScopeId) {
              scopeId = newScopeId; // we don't want to add this styleID to the appliedStyles Set
              // since the cssVarShim might need to apply several different
              // stylesheets for the same component

              appliedStyles = null;
            }
          } else {
            styleElm = doc.createElement('style');
            styleElm.innerHTML = style;
          }

          if (app_data_BUILD.hydrateServerSide || app_data_BUILD.hotModuleReplacement) {
            styleElm.setAttribute(HYDRATED_STYLE_ID, scopeId);
          }

          styleContainerNode.insertBefore(styleElm, styleContainerNode.querySelector('link'));
        }

        if (appliedStyles) {
          appliedStyles.add(scopeId);
        }
      }
    } else if (app_data_BUILD.constructableCSS && !styleContainerNode.adoptedStyleSheets.includes(style)) {
      styleContainerNode.adoptedStyleSheets = [].concat((0,toConsumableArray/* default */.Z)(styleContainerNode.adoptedStyleSheets), [style]);
    }
  }

  return scopeId;
};

var attachStyles = function attachStyles(hostRef) {
  var cmpMeta = hostRef.$cmpMeta$;
  var elm = hostRef.$hostElement$;
  var flags = cmpMeta.$flags$;
  var endAttachStyles = createTime('attachStyles', cmpMeta.$tagName$);
  var scopeId = addStyle(app_data_BUILD.shadowDom && supportsShadow && elm.shadowRoot ? elm.shadowRoot : elm.getRootNode(), cmpMeta, hostRef.$modeName$, elm);

  if ((app_data_BUILD.shadowDom || app_data_BUILD.scoped) && app_data_BUILD.cssAnnotations && flags & 10
  /* needsScopedEncapsulation */
  ) {
      // only required when we're NOT using native shadow dom (slot)
      // or this browser doesn't support native shadow dom
      // and this host element was NOT created with SSR
      // let's pick out the inner content for slot projection
      // create a node to represent where the original
      // content was first placed, which is useful later on
      // DOM WRITE!!
      elm['s-sc'] = scopeId;
      elm.classList.add(scopeId + '-h');

      if (app_data_BUILD.scoped && flags & 2
      /* scopedCssEncapsulation */
      ) {
          elm.classList.add(scopeId + '-s');
        }
    }

  endAttachStyles();
};

var getScopeId = function getScopeId(cmp, mode) {
  return 'sc-' + (app_data_BUILD.mode && mode && cmp.$flags$ & 32
  /* hasMode */
  ? cmp.$tagName$ + '-' + mode : cmp.$tagName$);
};

var convertScopedToShadow = function convertScopedToShadow(css) {
  return css.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g, '$1{');
}; // Private


var computeMode = function computeMode(elm) {
  return modeResolutionChain.map(function (h) {
    return h(elm);
  }).find(function (m) {
    return !!m;
  });
}; // Public


var setMode = function setMode(handler) {
  return modeResolutionChain.push(handler);
};

var getMode = function getMode(ref) {
  return getHostRef(ref).$modeName$;
};
/**
 * Default style mode id
 */

/**
 * Reusable empty obj/array
 * Don't add values to these!!
 */


var EMPTY_OBJ = {};
/**
 * Namespaces
 */

var SVG_NS = 'http://www.w3.org/2000/svg';
var HTML_NS = 'http://www.w3.org/1999/xhtml';

var isDef = function isDef(v) {
  return v != null;
};

var isComplexType = function isComplexType(o) {
  // https://jsperf.com/typeof-fn-object/5
  o = typeof o;
  return o === 'object' || o === 'function';
};
/**
 * Production h() function based on Preact by
 * Jason Miller (@developit)
 * Licensed under the MIT License
 * https://github.com/developit/preact/blob/master/LICENSE
 *
 * Modified for Stencil's compiler and vdom
 */
// const stack: any[] = [];
// export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, child?: d.ChildType): d.VNode;
// export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, ...children: d.ChildType[]): d.VNode;


var h = function h(nodeName, vnodeData) {
  var child = null;
  var key = null;
  var slotName = null;
  var simple = false;
  var lastSimple = false;
  var vNodeChildren = [];

  var walk = function walk(c) {
    for (var _i = 0; _i < c.length; _i++) {
      child = c[_i];

      if (Array.isArray(child)) {
        walk(child);
      } else if (child != null && typeof child !== 'boolean') {
        if (simple = typeof nodeName !== 'function' && !isComplexType(child)) {
          child = String(child);
        } else if (app_data_BUILD.isDev && typeof nodeName !== 'function' && child.$flags$ === undefined) {
          consoleDevError("vNode passed as children has unexpected type.\nMake sure it's using the correct h() function.\nEmpty objects can also be the cause, look for JSX comments that became objects.");
        }

        if (simple && lastSimple) {
          // If the previous child was simple (string), we merge both
          vNodeChildren[vNodeChildren.length - 1].$text$ += child;
        } else {
          // Append a new vNode, if it's text, we create a text vNode
          vNodeChildren.push(simple ? newVNode(null, child) : child);
        }

        lastSimple = simple;
      }
    }
  };

  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  walk(children);

  if (vnodeData) {
    if (app_data_BUILD.isDev && nodeName === 'input') {
      validateInputProperties(vnodeData);
    } // normalize class / classname attributes


    if (app_data_BUILD.vdomKey && vnodeData.key) {
      key = vnodeData.key;
    }

    if (app_data_BUILD.slotRelocation && vnodeData.name) {
      slotName = vnodeData.name;
    }

    if (app_data_BUILD.vdomClass) {
      var classData = vnodeData.className || vnodeData.class;

      if (classData) {
        vnodeData.class = typeof classData !== 'object' ? classData : Object.keys(classData).filter(function (k) {
          return classData[k];
        }).join(' ');
      }
    }
  }

  if (app_data_BUILD.isDev && vNodeChildren.some(isHost)) {
    consoleDevError("The <Host> must be the single root component. Make sure:\n- You are NOT using hostData() and <Host> in the same component.\n- <Host> is used once, and it's the single root component of the render() function.");
  }

  if (app_data_BUILD.vdomFunctional && typeof nodeName === 'function') {
    // nodeName is a functional component
    return nodeName(vnodeData === null ? {} : vnodeData, vNodeChildren, vdomFnUtils);
  }

  var vnode = newVNode(nodeName, null);
  vnode.$attrs$ = vnodeData;

  if (vNodeChildren.length > 0) {
    vnode.$children$ = vNodeChildren;
  }

  if (app_data_BUILD.vdomKey) {
    vnode.$key$ = key;
  }

  if (app_data_BUILD.slotRelocation) {
    vnode.$name$ = slotName;
  }

  return vnode;
};

var newVNode = function newVNode(tag, text) {
  var vnode = {
    $flags$: 0,
    $tag$: tag,
    $text$: text,
    $elm$: null,
    $children$: null
  };

  if (app_data_BUILD.vdomAttribute) {
    vnode.$attrs$ = null;
  }

  if (app_data_BUILD.vdomKey) {
    vnode.$key$ = null;
  }

  if (app_data_BUILD.slotRelocation) {
    vnode.$name$ = null;
  }

  return vnode;
};

var Host = {};

var isHost = function isHost(node) {
  return node && node.$tag$ === Host;
};

var vdomFnUtils = {
  forEach: function forEach(children, cb) {
    return children.map(convertToPublic).forEach(cb);
  },
  map: function map(children, cb) {
    return children.map(convertToPublic).map(cb).map(convertToPrivate);
  }
};

var convertToPublic = function convertToPublic(node) {
  return {
    vattrs: node.$attrs$,
    vchildren: node.$children$,
    vkey: node.$key$,
    vname: node.$name$,
    vtag: node.$tag$,
    vtext: node.$text$
  };
};

var convertToPrivate = function convertToPrivate(node) {
  if (typeof node.vtag === 'function') {
    var vnodeData = Object.assign({}, node.vattrs);

    if (node.vkey) {
      vnodeData.key = node.vkey;
    }

    if (node.vname) {
      vnodeData.name = node.vname;
    }

    return h.apply(void 0, [node.vtag, vnodeData].concat((0,toConsumableArray/* default */.Z)(node.vchildren || [])));
  }

  var vnode = newVNode(node.vtag, node.vtext);
  vnode.$attrs$ = node.vattrs;
  vnode.$children$ = node.vchildren;
  vnode.$key$ = node.vkey;
  vnode.$name$ = node.vname;
  return vnode;
};

var validateInputProperties = function validateInputProperties(vnodeData) {
  var props = Object.keys(vnodeData);
  var typeIndex = props.indexOf('type');
  var minIndex = props.indexOf('min');
  var maxIndex = props.indexOf('max');
  var stepIndex = props.indexOf('min');
  var value = props.indexOf('value');

  if (value === -1) {
    return;
  }

  if (value < typeIndex || value < minIndex || value < maxIndex || value < stepIndex) {
    consoleDevWarn("The \"value\" prop of <input> should be set after \"min\", \"max\", \"type\" and \"step\"");
  }
};
/**
 * Production setAccessor() function based on Preact by
 * Jason Miller (@developit)
 * Licensed under the MIT License
 * https://github.com/developit/preact/blob/master/LICENSE
 *
 * Modified for Stencil's compiler and vdom
 */


var setAccessor = function setAccessor(elm, memberName, oldValue, newValue, isSvg, flags) {
  if (oldValue !== newValue) {
    var isProp = isMemberInElement(elm, memberName);
    var ln = memberName.toLowerCase();

    if (app_data_BUILD.vdomClass && memberName === 'class') {
      var classList = elm.classList;
      var oldClasses = parseClassList(oldValue);
      var newClasses = parseClassList(newValue);
      classList.remove.apply(classList, (0,toConsumableArray/* default */.Z)(oldClasses.filter(function (c) {
        return c && !newClasses.includes(c);
      })));
      classList.add.apply(classList, (0,toConsumableArray/* default */.Z)(newClasses.filter(function (c) {
        return c && !oldClasses.includes(c);
      })));
    } else if (app_data_BUILD.vdomStyle && memberName === 'style') {
      // update style attribute, css properties and values
      if (app_data_BUILD.updatable) {
        for (var prop in oldValue) {
          if (!newValue || newValue[prop] == null) {
            if (!app_data_BUILD.hydrateServerSide && prop.includes('-')) {
              elm.style.removeProperty(prop);
            } else {
              elm.style[prop] = '';
            }
          }
        }
      }

      for (var _prop in newValue) {
        if (!oldValue || newValue[_prop] !== oldValue[_prop]) {
          if (!app_data_BUILD.hydrateServerSide && _prop.includes('-')) {
            elm.style.setProperty(_prop, newValue[_prop]);
          } else {
            elm.style[_prop] = newValue[_prop];
          }
        }
      }
    } else if (app_data_BUILD.vdomKey && memberName === 'key') ;else if (app_data_BUILD.vdomRef && memberName === 'ref') {
      // minifier will clean this up
      if (newValue) {
        newValue(elm);
      }
    } else if (app_data_BUILD.vdomListener && (app_data_BUILD.lazyLoad ? !isProp : !elm.__lookupSetter__(memberName)) && memberName[0] === 'o' && memberName[1] === 'n') {
      // Event Handlers
      // so if the member name starts with "on" and the 3rd characters is
      // a capital letter, and it's not already a member on the element,
      // then we're assuming it's an event listener
      if (memberName[2] === '-') {
        // on- prefixed events
        // allows to be explicit about the dom event to listen without any magic
        // under the hood:
        // <my-cmp on-click> // listens for "click"
        // <my-cmp on-Click> // listens for "Click"
        // <my-cmp on-ionChange> // listens for "ionChange"
        // <my-cmp on-EVENTS> // listens for "EVENTS"
        memberName = memberName.slice(3);
      } else if (isMemberInElement(win, ln)) {
        // standard event
        // the JSX attribute could have been "onMouseOver" and the
        // member name "onmouseover" is on the window's prototype
        // so let's add the listener "mouseover", which is all lowercased
        memberName = ln.slice(2);
      } else {
        // custom event
        // the JSX attribute could have been "onMyCustomEvent"
        // so let's trim off the "on" prefix and lowercase the first character
        // and add the listener "myCustomEvent"
        // except for the first character, we keep the event name case
        memberName = ln[2] + memberName.slice(3);
      }

      if (oldValue) {
        plt.rel(elm, memberName, oldValue, false);
      }

      if (newValue) {
        plt.ael(elm, memberName, newValue, false);
      }
    } else if (app_data_BUILD.vdomPropOrAttr) {
      // Set property if it exists and it's not a SVG
      var isComplex = isComplexType(newValue);

      if ((isProp || isComplex && newValue !== null) && !isSvg) {
        try {
          if (!elm.tagName.includes('-')) {
            var n = newValue == null ? '' : newValue; // Workaround for Safari, moving the <input> caret when re-assigning the same valued

            if (memberName === 'list') {
              isProp = false; // tslint:disable-next-line: triple-equals
            } else if (oldValue == null || elm[memberName] != n) {
              elm[memberName] = n;
            }
          } else {
            elm[memberName] = newValue;
          }
        } catch (e) {}
      }
      /**
       * Need to manually update attribute if:
       * - memberName is not an attribute
       * - if we are rendering the host element in order to reflect attribute
       * - if it's a SVG, since properties might not work in <svg>
       * - if the newValue is null/undefined or 'false'.
       */


      var xlink = false;

      if (app_data_BUILD.vdomXlink) {
        if (ln !== (ln = ln.replace(/^xlink\:?/, ''))) {
          memberName = ln;
          xlink = true;
        }
      }

      if (newValue == null || newValue === false) {
        if (newValue !== false || elm.getAttribute(memberName) === '') {
          if (app_data_BUILD.vdomXlink && xlink) {
            elm.removeAttributeNS(XLINK_NS, memberName);
          } else {
            elm.removeAttribute(memberName);
          }
        }
      } else if ((!isProp || flags & 4
      /* isHost */
      || isSvg) && !isComplex) {
        newValue = newValue === true ? '' : newValue;

        if (app_data_BUILD.vdomXlink && xlink) {
          elm.setAttributeNS(XLINK_NS, memberName, newValue);
        } else {
          elm.setAttribute(memberName, newValue);
        }
      }
    }
  }
};

var parseClassListRegex = /\s/;

var parseClassList = function parseClassList(value) {
  return !value ? [] : value.split(parseClassListRegex);
};

var updateElement = function updateElement(oldVnode, newVnode, isSvgMode, memberName) {
  // if the element passed in is a shadow root, which is a document fragment
  // then we want to be adding attrs/props to the shadow root's "host" element
  // if it's not a shadow root, then we add attrs/props to the same element
  var elm = newVnode.$elm$.nodeType === 11
  /* DocumentFragment */
  && newVnode.$elm$.host ? newVnode.$elm$.host : newVnode.$elm$;
  var oldVnodeAttrs = oldVnode && oldVnode.$attrs$ || EMPTY_OBJ;
  var newVnodeAttrs = newVnode.$attrs$ || EMPTY_OBJ;

  if (app_data_BUILD.updatable) {
    // remove attributes no longer present on the vnode by setting them to undefined
    for (memberName in oldVnodeAttrs) {
      if (!(memberName in newVnodeAttrs)) {
        setAccessor(elm, memberName, oldVnodeAttrs[memberName], undefined, isSvgMode, newVnode.$flags$);
      }
    }
  } // add new & update changed attributes


  for (memberName in newVnodeAttrs) {
    setAccessor(elm, memberName, oldVnodeAttrs[memberName], newVnodeAttrs[memberName], isSvgMode, newVnode.$flags$);
  }
};

var createElm = function createElm(oldParentVNode, newParentVNode, childIndex, parentElm) {
  // tslint:disable-next-line: prefer-const
  var newVNode = newParentVNode.$children$[childIndex];
  var i = 0;
  var elm;
  var childNode;
  var oldVNode;

  if (app_data_BUILD.slotRelocation && !useNativeShadowDom) {
    // remember for later we need to check to relocate nodes
    checkSlotRelocate = true;

    if (newVNode.$tag$ === 'slot') {
      if (scopeId) {
        // scoped css needs to add its scoped id to the parent element
        parentElm.classList.add(scopeId + '-s');
      }

      newVNode.$flags$ |= newVNode.$children$ ? // slot element has fallback content
      2
      /* isSlotFallback */
      : // slot element does not have fallback content
      1
      /* isSlotReference */
      ;
    }
  }

  if (app_data_BUILD.isDev && newVNode.$elm$) {
    consoleDevError("The JSX ".concat(newVNode.$text$ !== null ? "\"".concat(newVNode.$text$, "\" text") : "\"".concat(newVNode.$tag$, "\" element"), " node should not be shared within the same renderer. The renderer caches element lookups in order to improve performance. However, a side effect from this is that the exact same JSX node should not be reused. For more information please see https://stenciljs.com/docs/templating-jsx#avoid-shared-jsx-nodes"));
  }

  if (app_data_BUILD.vdomText && newVNode.$text$ !== null) {
    // create text node
    elm = newVNode.$elm$ = doc.createTextNode(newVNode.$text$);
  } else if (app_data_BUILD.slotRelocation && newVNode.$flags$ & 1
  /* isSlotReference */
  ) {
      // create a slot reference node
      elm = newVNode.$elm$ = app_data_BUILD.isDebug || app_data_BUILD.hydrateServerSide ? slotReferenceDebugNode(newVNode) : doc.createTextNode('');
    } else {
    if (app_data_BUILD.svg && !isSvgMode) {
      isSvgMode = newVNode.$tag$ === 'svg';
    } // create element


    elm = newVNode.$elm$ = app_data_BUILD.svg ? doc.createElementNS(isSvgMode ? SVG_NS : HTML_NS, app_data_BUILD.slotRelocation && newVNode.$flags$ & 2
    /* isSlotFallback */
    ? 'slot-fb' : newVNode.$tag$) : doc.createElement(app_data_BUILD.slotRelocation && newVNode.$flags$ & 2
    /* isSlotFallback */
    ? 'slot-fb' : newVNode.$tag$);

    if (app_data_BUILD.svg && isSvgMode && newVNode.$tag$ === 'foreignObject') {
      isSvgMode = false;
    } // add css classes, attrs, props, listeners, etc.


    if (app_data_BUILD.vdomAttribute) {
      updateElement(null, newVNode, isSvgMode);
    }

    if ((app_data_BUILD.shadowDom || app_data_BUILD.scoped) && isDef(scopeId) && elm['s-si'] !== scopeId) {
      // if there is a scopeId and this is the initial render
      // then let's add the scopeId as a css class
      elm.classList.add(elm['s-si'] = scopeId);
    }

    if (newVNode.$children$) {
      for (i = 0; i < newVNode.$children$.length; ++i) {
        // create the node
        childNode = createElm(oldParentVNode, newVNode, i, elm); // return node could have been null

        if (childNode) {
          // append our new node
          elm.appendChild(childNode);
        }
      }
    }

    if (app_data_BUILD.svg) {
      if (newVNode.$tag$ === 'svg') {
        // Only reset the SVG context when we're exiting <svg> element
        isSvgMode = false;
      } else if (elm.tagName === 'foreignObject') {
        // Reenter SVG context when we're exiting <foreignObject> element
        isSvgMode = true;
      }
    }
  }

  if (app_data_BUILD.slotRelocation) {
    elm['s-hn'] = hostTagName;

    if (newVNode.$flags$ & (2
    /* isSlotFallback */
    | 1
    /* isSlotReference */
    )) {
      // remember the content reference comment
      elm['s-sr'] = true; // remember the content reference comment

      elm['s-cr'] = contentRef; // remember the slot name, or empty string for default slot

      elm['s-sn'] = newVNode.$name$ || ''; // check if we've got an old vnode for this slot

      oldVNode = oldParentVNode && oldParentVNode.$children$ && oldParentVNode.$children$[childIndex];

      if (oldVNode && oldVNode.$tag$ === newVNode.$tag$ && oldParentVNode.$elm$) {
        // we've got an old slot vnode and the wrapper is being replaced
        // so let's move the old slot content back to it's original location
        putBackInOriginalLocation(oldParentVNode.$elm$, false);
      }
    }
  }

  return elm;
};

var putBackInOriginalLocation = function putBackInOriginalLocation(parentElm, recursive) {
  plt.$flags$ |= 1
  /* isTmpDisconnected */
  ;
  var oldSlotChildNodes = parentElm.childNodes;

  for (var _i2 = oldSlotChildNodes.length - 1; _i2 >= 0; _i2--) {
    var childNode = oldSlotChildNodes[_i2];

    if (childNode['s-hn'] !== hostTagName && childNode['s-ol']) {
      // // this child node in the old element is from another component
      // // remove this node from the old slot's parent
      // childNode.remove();
      // and relocate it back to it's original location
      parentReferenceNode(childNode).insertBefore(childNode, referenceNode(childNode)); // remove the old original location comment entirely
      // later on the patch function will know what to do
      // and move this to the correct spot in need be

      childNode['s-ol'].remove();
      childNode['s-ol'] = undefined;
      checkSlotRelocate = true;
    }

    if (recursive) {
      putBackInOriginalLocation(childNode, recursive);
    }
  }

  plt.$flags$ &= ~1
  /* isTmpDisconnected */
  ;
};

var addVnodes = function addVnodes(parentElm, before, parentVNode, vnodes, startIdx, endIdx) {
  var containerElm = app_data_BUILD.slotRelocation && parentElm['s-cr'] && parentElm['s-cr'].parentNode || parentElm;
  var childNode;

  if (app_data_BUILD.shadowDom && containerElm.shadowRoot && containerElm.tagName === hostTagName) {
    containerElm = containerElm.shadowRoot;
  }

  for (; startIdx <= endIdx; ++startIdx) {
    if (vnodes[startIdx]) {
      childNode = createElm(null, parentVNode, startIdx, parentElm);

      if (childNode) {
        vnodes[startIdx].$elm$ = childNode;
        containerElm.insertBefore(childNode, app_data_BUILD.slotRelocation ? referenceNode(before) : before);
      }
    }
  }
};

var removeVnodes = function removeVnodes(vnodes, startIdx, endIdx, vnode, elm) {
  for (; startIdx <= endIdx; ++startIdx) {
    if (vnode = vnodes[startIdx]) {
      elm = vnode.$elm$;
      callNodeRefs(vnode);

      if (app_data_BUILD.slotRelocation) {
        // we're removing this element
        // so it's possible we need to show slot fallback content now
        checkSlotFallbackVisibility = true;

        if (elm['s-ol']) {
          // remove the original location comment
          elm['s-ol'].remove();
        } else {
          // it's possible that child nodes of the node
          // that's being removed are slot nodes
          putBackInOriginalLocation(elm, true);
        }
      } // remove the vnode's element from the dom


      elm.remove();
    }
  }
};

var updateChildren = function updateChildren(parentElm, oldCh, newVNode, newCh) {
  var oldStartIdx = 0;
  var newStartIdx = 0;
  var idxInOld = 0;
  var i = 0;
  var oldEndIdx = oldCh.length - 1;
  var oldStartVnode = oldCh[0];
  var oldEndVnode = oldCh[oldEndIdx];
  var newEndIdx = newCh.length - 1;
  var newStartVnode = newCh[0];
  var newEndVnode = newCh[newEndIdx];
  var node;
  var elmToMove;

  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    if (oldStartVnode == null) {
      // Vnode might have been moved left
      oldStartVnode = oldCh[++oldStartIdx];
    } else if (oldEndVnode == null) {
      oldEndVnode = oldCh[--oldEndIdx];
    } else if (newStartVnode == null) {
      newStartVnode = newCh[++newStartIdx];
    } else if (newEndVnode == null) {
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldStartVnode, newStartVnode)) {
      patch(oldStartVnode, newStartVnode);
      oldStartVnode = oldCh[++oldStartIdx];
      newStartVnode = newCh[++newStartIdx];
    } else if (isSameVnode(oldEndVnode, newEndVnode)) {
      patch(oldEndVnode, newEndVnode);
      oldEndVnode = oldCh[--oldEndIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldStartVnode, newEndVnode)) {
      // Vnode moved right
      if (app_data_BUILD.slotRelocation && (oldStartVnode.$tag$ === 'slot' || newEndVnode.$tag$ === 'slot')) {
        putBackInOriginalLocation(oldStartVnode.$elm$.parentNode, false);
      }

      patch(oldStartVnode, newEndVnode);
      parentElm.insertBefore(oldStartVnode.$elm$, oldEndVnode.$elm$.nextSibling);
      oldStartVnode = oldCh[++oldStartIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldEndVnode, newStartVnode)) {
      // Vnode moved left
      if (app_data_BUILD.slotRelocation && (oldStartVnode.$tag$ === 'slot' || newEndVnode.$tag$ === 'slot')) {
        putBackInOriginalLocation(oldEndVnode.$elm$.parentNode, false);
      }

      patch(oldEndVnode, newStartVnode);
      parentElm.insertBefore(oldEndVnode.$elm$, oldStartVnode.$elm$);
      oldEndVnode = oldCh[--oldEndIdx];
      newStartVnode = newCh[++newStartIdx];
    } else {
      // createKeyToOldIdx
      idxInOld = -1;

      if (app_data_BUILD.vdomKey) {
        for (i = oldStartIdx; i <= oldEndIdx; ++i) {
          if (oldCh[i] && oldCh[i].$key$ !== null && oldCh[i].$key$ === newStartVnode.$key$) {
            idxInOld = i;
            break;
          }
        }
      }

      if (app_data_BUILD.vdomKey && idxInOld >= 0) {
        elmToMove = oldCh[idxInOld];

        if (elmToMove.$tag$ !== newStartVnode.$tag$) {
          node = createElm(oldCh && oldCh[newStartIdx], newVNode, idxInOld, parentElm);
        } else {
          patch(elmToMove, newStartVnode);
          oldCh[idxInOld] = undefined;
          node = elmToMove.$elm$;
        }

        newStartVnode = newCh[++newStartIdx];
      } else {
        // new element
        node = createElm(oldCh && oldCh[newStartIdx], newVNode, newStartIdx, parentElm);
        newStartVnode = newCh[++newStartIdx];
      }

      if (node) {
        if (app_data_BUILD.slotRelocation) {
          parentReferenceNode(oldStartVnode.$elm$).insertBefore(node, referenceNode(oldStartVnode.$elm$));
        } else {
          oldStartVnode.$elm$.parentNode.insertBefore(node, oldStartVnode.$elm$);
        }
      }
    }
  }

  if (oldStartIdx > oldEndIdx) {
    addVnodes(parentElm, newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].$elm$, newVNode, newCh, newStartIdx, newEndIdx);
  } else if (app_data_BUILD.updatable && newStartIdx > newEndIdx) {
    removeVnodes(oldCh, oldStartIdx, oldEndIdx);
  }
};

var isSameVnode = function isSameVnode(vnode1, vnode2) {
  // compare if two vnode to see if they're "technically" the same
  // need to have the same element tag, and same key to be the same
  if (vnode1.$tag$ === vnode2.$tag$) {
    if (app_data_BUILD.slotRelocation && vnode1.$tag$ === 'slot') {
      return vnode1.$name$ === vnode2.$name$;
    }

    if (app_data_BUILD.vdomKey) {
      return vnode1.$key$ === vnode2.$key$;
    }

    return true;
  }

  return false;
};

var referenceNode = function referenceNode(node) {
  // this node was relocated to a new location in the dom
  // because of some other component's slot
  // but we still have an html comment in place of where
  // it's original location was according to it's original vdom
  return node && node['s-ol'] || node;
};

var parentReferenceNode = function parentReferenceNode(node) {
  return (node['s-ol'] ? node['s-ol'] : node).parentNode;
};

var patch = function patch(oldVNode, newVNode) {
  var elm = newVNode.$elm$ = oldVNode.$elm$;
  var oldChildren = oldVNode.$children$;
  var newChildren = newVNode.$children$;
  var tag = newVNode.$tag$;
  var text = newVNode.$text$;
  var defaultHolder;

  if (!app_data_BUILD.vdomText || text === null) {
    if (app_data_BUILD.svg) {
      // test if we're rendering an svg element, or still rendering nodes inside of one
      // only add this to the when the compiler sees we're using an svg somewhere
      isSvgMode = tag === 'svg' ? true : tag === 'foreignObject' ? false : isSvgMode;
    } // element node


    if (app_data_BUILD.vdomAttribute || app_data_BUILD.reflect) {
      if (app_data_BUILD.slot && tag === 'slot') ;else {
        // either this is the first render of an element OR it's an update
        // AND we already know it's possible it could have changed
        // this updates the element's css classes, attrs, props, listeners, etc.
        updateElement(oldVNode, newVNode, isSvgMode);
      }
    }

    if (app_data_BUILD.updatable && oldChildren !== null && newChildren !== null) {
      // looks like there's child vnodes for both the old and new vnodes
      updateChildren(elm, oldChildren, newVNode, newChildren);
    } else if (newChildren !== null) {
      // no old child vnodes, but there are new child vnodes to add
      if (app_data_BUILD.updatable && app_data_BUILD.vdomText && oldVNode.$text$ !== null) {
        // the old vnode was text, so be sure to clear it out
        elm.textContent = '';
      } // add the new vnode children


      addVnodes(elm, null, newVNode, newChildren, 0, newChildren.length - 1);
    } else if (app_data_BUILD.updatable && oldChildren !== null) {
      // no new child vnodes, but there are old child vnodes to remove
      removeVnodes(oldChildren, 0, oldChildren.length - 1);
    }

    if (app_data_BUILD.svg && isSvgMode && tag === 'svg') {
      isSvgMode = false;
    }
  } else if (app_data_BUILD.vdomText && app_data_BUILD.slotRelocation && (defaultHolder = elm['s-cr'])) {
    // this element has slotted content
    defaultHolder.parentNode.textContent = text;
  } else if (app_data_BUILD.vdomText && oldVNode.$text$ !== text) {
    // update the text content for the text only vnode
    // and also only if the text is different than before
    elm.data = text;
  }
};

var updateFallbackSlotVisibility = function updateFallbackSlotVisibility(elm) {
  // tslint:disable-next-line: prefer-const
  var childNodes = elm.childNodes;
  var childNode;
  var i;
  var ilen;
  var j;
  var slotNameAttr;
  var nodeType;

  for (i = 0, ilen = childNodes.length; i < ilen; i++) {
    childNode = childNodes[i];

    if (childNode.nodeType === 1
    /* ElementNode */
    ) {
        if (childNode['s-sr']) {
          // this is a slot fallback node
          // get the slot name for this slot reference node
          slotNameAttr = childNode['s-sn']; // by default always show a fallback slot node
          // then hide it if there are other slots in the light dom

          childNode.hidden = false;

          for (j = 0; j < ilen; j++) {
            nodeType = childNodes[j].nodeType;

            if (childNodes[j]['s-hn'] !== childNode['s-hn'] || slotNameAttr !== '') {
              // this sibling node is from a different component OR is a named fallback slot node
              if (nodeType === 1
              /* ElementNode */
              && slotNameAttr === childNodes[j].getAttribute('slot')) {
                childNode.hidden = true;
                break;
              }
            } else {
              // this is a default fallback slot node
              // any element or text node (with content)
              // should hide the default fallback slot node
              if (nodeType === 1
              /* ElementNode */
              || nodeType === 3
              /* TextNode */
              && childNodes[j].textContent.trim() !== '') {
                childNode.hidden = true;
                break;
              }
            }
          }
        } // keep drilling down


        updateFallbackSlotVisibility(childNode);
      }
  }
};

var relocateNodes = [];

var relocateSlotContent = function relocateSlotContent(elm) {
  // tslint:disable-next-line: prefer-const
  var childNode;
  var node;
  var hostContentNodes;
  var slotNameAttr;
  var relocateNodeData;
  var j;
  var i = 0;
  var childNodes = elm.childNodes;
  var ilen = childNodes.length;

  for (; i < ilen; i++) {
    childNode = childNodes[i];

    if (childNode['s-sr'] && (node = childNode['s-cr']) && node.parentNode) {
      // first got the content reference comment node
      // then we got it's parent, which is where all the host content is in now
      hostContentNodes = node.parentNode.childNodes;
      slotNameAttr = childNode['s-sn'];

      for (j = hostContentNodes.length - 1; j >= 0; j--) {
        node = hostContentNodes[j];

        if (!node['s-cn'] && !node['s-nr'] && node['s-hn'] !== childNode['s-hn']) {
          // let's do some relocating to its new home
          // but never relocate a content reference node
          // that is suppose to always represent the original content location
          if (isNodeLocatedInSlot(node, slotNameAttr)) {
            // it's possible we've already decided to relocate this node
            relocateNodeData = relocateNodes.find(function (r) {
              return r.$nodeToRelocate$ === node;
            }); // made some changes to slots
            // let's make sure we also double check
            // fallbacks are correctly hidden or shown

            checkSlotFallbackVisibility = true;
            node['s-sn'] = node['s-sn'] || slotNameAttr;

            if (relocateNodeData) {
              // previously we never found a slot home for this node
              // but turns out we did, so let's remember it now
              relocateNodeData.$slotRefNode$ = childNode;
            } else {
              // add to our list of nodes to relocate
              relocateNodes.push({
                $slotRefNode$: childNode,
                $nodeToRelocate$: node
              });
            }

            if (node['s-sr']) {
              relocateNodes.map(function (relocateNode) {
                if (isNodeLocatedInSlot(relocateNode.$nodeToRelocate$, node['s-sn'])) {
                  relocateNodeData = relocateNodes.find(function (r) {
                    return r.$nodeToRelocate$ === node;
                  });

                  if (relocateNodeData && !relocateNode.$slotRefNode$) {
                    relocateNode.$slotRefNode$ = relocateNodeData.$slotRefNode$;
                  }
                }
              });
            }
          } else if (!relocateNodes.some(function (r) {
            return r.$nodeToRelocate$ === node;
          })) {
            // so far this element does not have a slot home, not setting slotRefNode on purpose
            // if we never find a home for this element then we'll need to hide it
            relocateNodes.push({
              $nodeToRelocate$: node
            });
          }
        }
      }
    }

    if (childNode.nodeType === 1
    /* ElementNode */
    ) {
        relocateSlotContent(childNode);
      }
  }
};

var isNodeLocatedInSlot = function isNodeLocatedInSlot(nodeToRelocate, slotNameAttr) {
  if (nodeToRelocate.nodeType === 1
  /* ElementNode */
  ) {
      if (nodeToRelocate.getAttribute('slot') === null && slotNameAttr === '') {
        return true;
      }

      if (nodeToRelocate.getAttribute('slot') === slotNameAttr) {
        return true;
      }

      return false;
    }

  if (nodeToRelocate['s-sn'] === slotNameAttr) {
    return true;
  }

  return slotNameAttr === '';
};

var callNodeRefs = function callNodeRefs(vNode) {
  if (app_data_BUILD.vdomRef) {
    vNode.$attrs$ && vNode.$attrs$.ref && vNode.$attrs$.ref(null);
    vNode.$children$ && vNode.$children$.map(callNodeRefs);
  }
};

var renderVdom = function renderVdom(hostRef, renderFnResults) {
  var hostElm = hostRef.$hostElement$;
  var cmpMeta = hostRef.$cmpMeta$;
  var oldVNode = hostRef.$vnode$ || newVNode(null, null);
  var rootVnode = isHost(renderFnResults) ? renderFnResults : h(null, null, renderFnResults);
  hostTagName = hostElm.tagName; // <Host> runtime check

  if (app_data_BUILD.isDev && Array.isArray(renderFnResults) && renderFnResults.some(isHost)) {
    throw new Error("The <Host> must be the single root component.\nLooks like the render() function of \"".concat(hostTagName.toLowerCase(), "\" is returning an array that contains the <Host>.\n\nThe render() function should look like this instead:\n\nrender() {\n  // Do not return an array\n  return (\n    <Host>{content}</Host>\n  );\n}\n  "));
  }

  if (app_data_BUILD.reflect && cmpMeta.$attrsToReflect$) {
    rootVnode.$attrs$ = rootVnode.$attrs$ || {};
    cmpMeta.$attrsToReflect$.map(function (_ref9) {
      var _ref10 = _slicedToArray(_ref9, 2),
          propName = _ref10[0],
          attribute = _ref10[1];

      return rootVnode.$attrs$[attribute] = hostElm[propName];
    });
  }

  rootVnode.$tag$ = null;
  rootVnode.$flags$ |= 4
  /* isHost */
  ;
  hostRef.$vnode$ = rootVnode;
  rootVnode.$elm$ = oldVNode.$elm$ = app_data_BUILD.shadowDom ? hostElm.shadowRoot || hostElm : hostElm;

  if (app_data_BUILD.scoped || app_data_BUILD.shadowDom) {
    scopeId = hostElm['s-sc'];
  }

  if (app_data_BUILD.slotRelocation) {
    contentRef = hostElm['s-cr'];
    useNativeShadowDom = supportsShadow && (cmpMeta.$flags$ & 1
    /* shadowDomEncapsulation */
    ) !== 0; // always reset

    checkSlotFallbackVisibility = false;
  } // synchronous patch


  patch(oldVNode, rootVnode);

  if (app_data_BUILD.slotRelocation) {
    // while we're moving nodes around existing nodes, temporarily disable
    // the disconnectCallback from working
    plt.$flags$ |= 1
    /* isTmpDisconnected */
    ;

    if (checkSlotRelocate) {
      relocateSlotContent(rootVnode.$elm$);
      var relocateData;
      var nodeToRelocate;
      var orgLocationNode;
      var parentNodeRef;
      var insertBeforeNode;
      var refNode;
      var _i3 = 0;

      for (; _i3 < relocateNodes.length; _i3++) {
        relocateData = relocateNodes[_i3];
        nodeToRelocate = relocateData.$nodeToRelocate$;

        if (!nodeToRelocate['s-ol']) {
          // add a reference node marking this node's original location
          // keep a reference to this node for later lookups
          orgLocationNode = app_data_BUILD.isDebug || app_data_BUILD.hydrateServerSide ? originalLocationDebugNode(nodeToRelocate) : doc.createTextNode('');
          orgLocationNode['s-nr'] = nodeToRelocate;
          nodeToRelocate.parentNode.insertBefore(nodeToRelocate['s-ol'] = orgLocationNode, nodeToRelocate);
        }
      }

      for (_i3 = 0; _i3 < relocateNodes.length; _i3++) {
        relocateData = relocateNodes[_i3];
        nodeToRelocate = relocateData.$nodeToRelocate$;

        if (relocateData.$slotRefNode$) {
          // by default we're just going to insert it directly
          // after the slot reference node
          parentNodeRef = relocateData.$slotRefNode$.parentNode;
          insertBeforeNode = relocateData.$slotRefNode$.nextSibling;
          orgLocationNode = nodeToRelocate['s-ol'];

          while (orgLocationNode = orgLocationNode.previousSibling) {
            refNode = orgLocationNode['s-nr'];

            if (refNode && refNode['s-sn'] === nodeToRelocate['s-sn'] && parentNodeRef === refNode.parentNode) {
              refNode = refNode.nextSibling;

              if (!refNode || !refNode['s-nr']) {
                insertBeforeNode = refNode;
                break;
              }
            }
          }

          if (!insertBeforeNode && parentNodeRef !== nodeToRelocate.parentNode || nodeToRelocate.nextSibling !== insertBeforeNode) {
            // we've checked that it's worth while to relocate
            // since that the node to relocate
            // has a different next sibling or parent relocated
            if (nodeToRelocate !== insertBeforeNode) {
              if (!nodeToRelocate['s-hn'] && nodeToRelocate['s-ol']) {
                // probably a component in the index.html that doesn't have it's hostname set
                nodeToRelocate['s-hn'] = nodeToRelocate['s-ol'].parentNode.nodeName;
              } // add it back to the dom but in its new home


              parentNodeRef.insertBefore(nodeToRelocate, insertBeforeNode);
            }
          }
        } else {
          // this node doesn't have a slot home to go to, so let's hide it
          if (nodeToRelocate.nodeType === 1
          /* ElementNode */
          ) {
              nodeToRelocate.hidden = true;
            }
        }
      }
    }

    if (checkSlotFallbackVisibility) {
      updateFallbackSlotVisibility(rootVnode.$elm$);
    } // done moving nodes around
    // allow the disconnect callback to work again


    plt.$flags$ &= ~1
    /* isTmpDisconnected */
    ; // always reset

    relocateNodes.length = 0;
  }
}; // slot comment debug nodes only created with the `--debug` flag
// otherwise these nodes are text nodes w/out content


var slotReferenceDebugNode = function slotReferenceDebugNode(slotVNode) {
  return doc.createComment("<slot".concat(slotVNode.$name$ ? ' name="' + slotVNode.$name$ + '"' : '', "> (host=").concat(hostTagName.toLowerCase(), ")"));
};

var originalLocationDebugNode = function originalLocationDebugNode(nodeToRelocate) {
  return doc.createComment("org-location for " + (nodeToRelocate.localName ? "<".concat(nodeToRelocate.localName, "> (host=").concat(nodeToRelocate['s-hn'], ")") : "[".concat(nodeToRelocate.textContent, "]")));
};

var getElement = function getElement(ref) {
  return BUILD.lazyLoad ? getHostRef(ref).$hostElement$ : ref;
};

var createEvent = function createEvent(ref, name, flags) {
  var elm = getElement(ref);
  return {
    emit: function emit(detail) {
      if (BUILD.isDev && !elm.isConnected) {
        consoleDevWarn("The \"".concat(name, "\" event was emitted, but the dispatcher node is no longer connected to the dom."));
      }

      return emitEvent(elm, name, {
        bubbles: !!(flags & 4
        /* Bubbles */
        ),
        composed: !!(flags & 2
        /* Composed */
        ),
        cancelable: !!(flags & 1
        /* Cancellable */
        ),
        detail: detail
      });
    }
  };
};

var emitEvent = function emitEvent(elm, name, opts) {
  var ev = plt.ce(name, opts);
  elm.dispatchEvent(ev);
  return ev;
};

var attachToAncestor = function attachToAncestor(hostRef, ancestorComponent) {
  if (app_data_BUILD.asyncLoading && ancestorComponent && !hostRef.$onRenderResolve$ && ancestorComponent['s-p']) {
    ancestorComponent['s-p'].push(new Promise(function (r) {
      return hostRef.$onRenderResolve$ = r;
    }));
  }
};

var scheduleUpdate = function scheduleUpdate(hostRef, isInitialLoad) {
  if (app_data_BUILD.taskQueue && app_data_BUILD.updatable) {
    hostRef.$flags$ |= 16
    /* isQueuedForUpdate */
    ;
  }

  if (app_data_BUILD.asyncLoading && hostRef.$flags$ & 4
  /* isWaitingForChildren */
  ) {
      hostRef.$flags$ |= 512
      /* needsRerender */
      ;
      return;
    }

  attachToAncestor(hostRef, hostRef.$ancestorComponent$); // there is no ancestor component or the ancestor component
  // has already fired off its lifecycle update then
  // fire off the initial update

  var dispatch = function dispatch() {
    return dispatchHooks(hostRef, isInitialLoad);
  };

  return app_data_BUILD.taskQueue ? writeTask(dispatch) : dispatch();
};

var dispatchHooks = function dispatchHooks(hostRef, isInitialLoad) {
  var elm = hostRef.$hostElement$;
  var endSchedule = createTime('scheduleUpdate', hostRef.$cmpMeta$.$tagName$);
  var instance = app_data_BUILD.lazyLoad ? hostRef.$lazyInstance$ : elm;
  var promise;

  if (isInitialLoad) {
    if (app_data_BUILD.lazyLoad && app_data_BUILD.hostListener) {
      hostRef.$flags$ |= 256
      /* isListenReady */
      ;

      if (hostRef.$queuedListeners$) {
        hostRef.$queuedListeners$.map(function (_ref11) {
          var _ref12 = _slicedToArray(_ref11, 2),
              methodName = _ref12[0],
              event = _ref12[1];

          return safeCall(instance, methodName, event);
        });
        hostRef.$queuedListeners$ = null;
      }
    }

    emitLifecycleEvent(elm, 'componentWillLoad');

    if (app_data_BUILD.cmpWillLoad) {
      promise = safeCall(instance, 'componentWillLoad');
    }
  } else {
    emitLifecycleEvent(elm, 'componentWillUpdate');

    if (app_data_BUILD.cmpWillUpdate) {
      promise = safeCall(instance, 'componentWillUpdate');
    }
  }

  emitLifecycleEvent(elm, 'componentWillRender');

  if (app_data_BUILD.cmpWillRender) {
    promise = then(promise, function () {
      return safeCall(instance, 'componentWillRender');
    });
  }

  endSchedule();
  return then(promise, function () {
    return updateComponent(hostRef, instance, isInitialLoad);
  });
};

var updateComponent = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee(hostRef, instance, isInitialLoad) {
    var elm, endUpdate, rc, endRender, childrenPromises, postUpdate;
    return regenerator_default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // updateComponent
            elm = hostRef.$hostElement$;
            endUpdate = createTime('update', hostRef.$cmpMeta$.$tagName$);
            rc = elm['s-rc'];

            if (app_data_BUILD.style && isInitialLoad) {
              // DOM WRITE!
              attachStyles(hostRef);
            }

            endRender = createTime('render', hostRef.$cmpMeta$.$tagName$);

            if (app_data_BUILD.isDev) {
              hostRef.$flags$ |= 1024
              /* devOnRender */
              ;
            }

            if (!app_data_BUILD.hydrateServerSide) {
              _context.next = 11;
              break;
            }

            _context.next = 9;
            return callRender(hostRef, instance, elm);

          case 9:
            _context.next = 12;
            break;

          case 11:
            callRender(hostRef, instance, elm);

          case 12:
            if (app_data_BUILD.cssVarShim && plt.$cssShim$) {
              plt.$cssShim$.updateHost(elm);
            }

            if (app_data_BUILD.isDev) {
              hostRef.$renderCount$++;
              hostRef.$flags$ &= ~1024
              /* devOnRender */
              ;
            }

            if (app_data_BUILD.hydrateServerSide) {
              try {
                // manually connected child components during server-side hydrate
                serverSideConnected(elm);

                if (isInitialLoad) {
                  // using only during server-side hydrate
                  if (hostRef.$cmpMeta$.$flags$ & 1
                  /* shadowDomEncapsulation */
                  ) {
                      elm['s-en'] = '';
                    } else if (hostRef.$cmpMeta$.$flags$ & 2
                  /* scopedCssEncapsulation */
                  ) {
                      elm['s-en'] = 'c';
                    }
                }
              } catch (e) {
                consoleError(e, elm);
              }
            }

            if (app_data_BUILD.asyncLoading && rc) {
              // ok, so turns out there are some child host elements
              // waiting on this parent element to load
              // let's fire off all update callbacks waiting
              rc.map(function (cb) {
                return cb();
              });
              elm['s-rc'] = undefined;
            }

            endRender();
            endUpdate();

            if (app_data_BUILD.asyncLoading) {
              childrenPromises = elm['s-p'];

              postUpdate = function postUpdate() {
                return postUpdateComponent(hostRef);
              };

              if (childrenPromises.length === 0) {
                postUpdate();
              } else {
                Promise.all(childrenPromises).then(postUpdate);
                hostRef.$flags$ |= 4
                /* isWaitingForChildren */
                ;
                childrenPromises.length = 0;
              }
            } else {
              postUpdateComponent(hostRef);
            }

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function updateComponent(_x, _x2, _x3) {
    return _ref13.apply(this, arguments);
  };
}();

var callRender = function callRender(hostRef, instance, elm) {
  // in order for bundlers to correctly treeshake the BUILD object
  // we need to ensure BUILD is not deoptimized within a try/catch
  // https://rollupjs.org/guide/en/#treeshake tryCatchDeoptimization
  var allRenderFn = app_data_BUILD.allRenderFn ? true : false;
  var lazyLoad = app_data_BUILD.lazyLoad ? true : false;
  var taskQueue = app_data_BUILD.taskQueue ? true : false;
  var updatable = app_data_BUILD.updatable ? true : false;

  try {
    renderingRef = instance;
    instance = allRenderFn ? instance.render() : instance.render && instance.render();

    if (updatable && taskQueue) {
      hostRef.$flags$ &= ~16
      /* isQueuedForUpdate */
      ;
    }

    if (updatable || lazyLoad) {
      hostRef.$flags$ |= 2
      /* hasRendered */
      ;
    }

    if (app_data_BUILD.hasRenderFn || app_data_BUILD.reflect) {
      if (app_data_BUILD.vdomRender || app_data_BUILD.reflect) {
        // looks like we've got child nodes to render into this host element
        // or we need to update the css class/attrs on the host element
        // DOM WRITE!
        if (app_data_BUILD.hydrateServerSide) {
          return Promise.resolve(instance).then(function (value) {
            return renderVdom(hostRef, value);
          });
        } else {
          renderVdom(hostRef, instance);
        }
      } else {
        elm.textContent = instance;
      }
    }
  } catch (e) {
    consoleError(e, hostRef.$hostElement$);
  }

  renderingRef = null;
  return null;
};

var getRenderingRef = function getRenderingRef() {
  return renderingRef;
};

var postUpdateComponent = function postUpdateComponent(hostRef) {
  var tagName = hostRef.$cmpMeta$.$tagName$;
  var elm = hostRef.$hostElement$;
  var endPostUpdate = createTime('postUpdate', tagName);
  var instance = app_data_BUILD.lazyLoad ? hostRef.$lazyInstance$ : elm;
  var ancestorComponent = hostRef.$ancestorComponent$;

  if (app_data_BUILD.cmpDidRender) {
    if (app_data_BUILD.isDev) {
      hostRef.$flags$ |= 1024
      /* devOnRender */
      ;
    }

    safeCall(instance, 'componentDidRender');

    if (app_data_BUILD.isDev) {
      hostRef.$flags$ &= ~1024
      /* devOnRender */
      ;
    }
  }

  emitLifecycleEvent(elm, 'componentDidRender');

  if (!(hostRef.$flags$ & 64
  /* hasLoadedComponent */
  )) {
    hostRef.$flags$ |= 64
    /* hasLoadedComponent */
    ;

    if (app_data_BUILD.asyncLoading && app_data_BUILD.cssAnnotations) {
      // DOM WRITE!
      addHydratedFlag(elm);
    }

    if (app_data_BUILD.cmpDidLoad) {
      if (app_data_BUILD.isDev) {
        hostRef.$flags$ |= 2048
        /* devOnDidLoad */
        ;
      }

      safeCall(instance, 'componentDidLoad');

      if (app_data_BUILD.isDev) {
        hostRef.$flags$ &= ~2048
        /* devOnDidLoad */
        ;
      }
    }

    emitLifecycleEvent(elm, 'componentDidLoad');
    endPostUpdate();

    if (app_data_BUILD.asyncLoading) {
      hostRef.$onReadyResolve$(elm);

      if (!ancestorComponent) {
        appDidLoad(tagName);
      }
    }
  } else {
    if (app_data_BUILD.cmpDidUpdate) {
      // we've already loaded this component
      // fire off the user's componentDidUpdate method (if one was provided)
      // componentDidUpdate runs AFTER render() has been called
      // and all child components have finished updating
      if (app_data_BUILD.isDev) {
        hostRef.$flags$ |= 1024
        /* devOnRender */
        ;
      }

      safeCall(instance, 'componentDidUpdate');

      if (app_data_BUILD.isDev) {
        hostRef.$flags$ &= ~1024
        /* devOnRender */
        ;
      }
    }

    emitLifecycleEvent(elm, 'componentDidUpdate');
    endPostUpdate();
  }

  if (app_data_BUILD.hotModuleReplacement) {
    elm['s-hmr-load'] && elm['s-hmr-load']();
  }

  if (app_data_BUILD.method && app_data_BUILD.lazyLoad) {
    hostRef.$onInstanceResolve$(elm);
  } // load events fire from bottom to top
  // the deepest elements load first then bubbles up


  if (app_data_BUILD.asyncLoading) {
    if (hostRef.$onRenderResolve$) {
      hostRef.$onRenderResolve$();
      hostRef.$onRenderResolve$ = undefined;
    }

    if (hostRef.$flags$ & 512
    /* needsRerender */
    ) {
        nextTick(function () {
          return scheduleUpdate(hostRef, false);
        });
      }

    hostRef.$flags$ &= ~(4
    /* isWaitingForChildren */
    | 512
    /* needsRerender */
    );
  } // ( •_•)
  // ( •_•)>⌐■-■
  // (⌐■_■)

};

var forceUpdate = function forceUpdate(ref) {
  if (BUILD.updatable) {
    var hostRef = getHostRef(ref);
    var isConnected = hostRef.$hostElement$.isConnected;

    if (isConnected && (hostRef.$flags$ & (2
    /* hasRendered */
    | 16
    /* isQueuedForUpdate */
    )) === 2
    /* hasRendered */
    ) {
        scheduleUpdate(hostRef, false);
      } // Returns "true" when the forced update was successfully scheduled


    return isConnected;
  }

  return false;
};

var appDidLoad = function appDidLoad(who) {
  // on appload
  // we have finish the first big initial render
  if (app_data_BUILD.cssAnnotations) {
    addHydratedFlag(doc.documentElement);
  }

  if (app_data_BUILD.asyncQueue) {
    plt.$flags$ |= 2
    /* appLoaded */
    ;
  }

  nextTick(function () {
    return emitEvent(win, 'appload', {
      detail: {
        namespace: NAMESPACE
      }
    });
  });

  if (app_data_BUILD.profile && performance.measure) {
    performance.measure("[Stencil] ".concat(NAMESPACE, " initial load (by ").concat(who, ")"), 'st:app:start');
  }
};

var safeCall = function safeCall(instance, method, arg) {
  if (instance && instance[method]) {
    try {
      return instance[method](arg);
    } catch (e) {
      consoleError(e);
    }
  }

  return undefined;
};

var then = function then(promise, thenFn) {
  return promise && promise.then ? promise.then(thenFn) : thenFn();
};

var emitLifecycleEvent = function emitLifecycleEvent(elm, lifecycleName) {
  if (app_data_BUILD.lifecycleDOMEvents) {
    emitEvent(elm, 'stencil_' + lifecycleName, {
      bubbles: true,
      composed: true,
      detail: {
        namespace: NAMESPACE
      }
    });
  }
};

var addHydratedFlag = function addHydratedFlag(elm) {
  return app_data_BUILD.hydratedClass ? elm.classList.add('hydrated') : app_data_BUILD.hydratedAttribute ? elm.setAttribute('hydrated', '') : undefined;
};

var serverSideConnected = function serverSideConnected(elm) {
  var children = elm.children;

  if (children != null) {
    for (var _i4 = 0, ii = children.length; _i4 < ii; _i4++) {
      var childElm = children[_i4];

      if (typeof childElm.connectedCallback === 'function') {
        childElm.connectedCallback();
      }

      serverSideConnected(childElm);
    }
  }
};

var initializeClientHydrate = function initializeClientHydrate(hostElm, tagName, hostId, hostRef) {
  var endHydrate = createTime('hydrateClient', tagName);
  var shadowRoot = hostElm.shadowRoot;
  var childRenderNodes = [];
  var slotNodes = [];
  var shadowRootNodes = app_data_BUILD.shadowDom && shadowRoot ? [] : null;
  var vnode = hostRef.$vnode$ = newVNode(tagName, null);

  if (!plt.$orgLocNodes$) {
    initializeDocumentHydrate(doc.body, plt.$orgLocNodes$ = new Map());
  }

  hostElm[HYDRATE_ID] = hostId;
  hostElm.removeAttribute(HYDRATE_ID);
  clientHydrate(vnode, childRenderNodes, slotNodes, shadowRootNodes, hostElm, hostElm, hostId);
  childRenderNodes.map(function (c) {
    var orgLocationId = c.$hostId$ + '.' + c.$nodeId$;
    var orgLocationNode = plt.$orgLocNodes$.get(orgLocationId);
    var node = c.$elm$;

    if (orgLocationNode && supportsShadow && orgLocationNode['s-en'] === '') {
      orgLocationNode.parentNode.insertBefore(node, orgLocationNode.nextSibling);
    }

    if (!shadowRoot) {
      node['s-hn'] = tagName;

      if (orgLocationNode) {
        node['s-ol'] = orgLocationNode;
        node['s-ol']['s-nr'] = node;
      }
    }

    plt.$orgLocNodes$.delete(orgLocationId);
  });

  if (app_data_BUILD.shadowDom && shadowRoot) {
    shadowRootNodes.map(function (shadowRootNode) {
      if (shadowRootNode) {
        shadowRoot.appendChild(shadowRootNode);
      }
    });
  }

  endHydrate();
};

var clientHydrate = function clientHydrate(parentVNode, childRenderNodes, slotNodes, shadowRootNodes, hostElm, node, hostId) {
  var childNodeType;
  var childIdSplt;
  var childVNode;
  var i;

  if (node.nodeType === 1
  /* ElementNode */
  ) {
      childNodeType = node.getAttribute(HYDRATE_CHILD_ID);

      if (childNodeType) {
        // got the node data from the element's attribute
        // `${hostId}.${nodeId}.${depth}.${index}`
        childIdSplt = childNodeType.split('.');

        if (childIdSplt[0] === hostId || childIdSplt[0] === '0') {
          childVNode = {
            $flags$: 0,
            $hostId$: childIdSplt[0],
            $nodeId$: childIdSplt[1],
            $depth$: childIdSplt[2],
            $index$: childIdSplt[3],
            $tag$: node.tagName.toLowerCase(),
            $elm$: node,
            $attrs$: null,
            $children$: null,
            $key$: null,
            $name$: null,
            $text$: null
          };
          childRenderNodes.push(childVNode);
          node.removeAttribute(HYDRATE_CHILD_ID); // this is a new child vnode
          // so ensure its parent vnode has the vchildren array

          if (!parentVNode.$children$) {
            parentVNode.$children$ = [];
          } // add our child vnode to a specific index of the vnode's children


          parentVNode.$children$[childVNode.$index$] = childVNode; // this is now the new parent vnode for all the next child checks

          parentVNode = childVNode;

          if (shadowRootNodes && childVNode.$depth$ === '0') {
            shadowRootNodes[childVNode.$index$] = childVNode.$elm$;
          }
        }
      } // recursively drill down, end to start so we can remove nodes


      for (i = node.childNodes.length - 1; i >= 0; i--) {
        clientHydrate(parentVNode, childRenderNodes, slotNodes, shadowRootNodes, hostElm, node.childNodes[i], hostId);
      }

      if (node.shadowRoot) {
        // keep drilling down through the shadow root nodes
        for (i = node.shadowRoot.childNodes.length - 1; i >= 0; i--) {
          clientHydrate(parentVNode, childRenderNodes, slotNodes, shadowRootNodes, hostElm, node.shadowRoot.childNodes[i], hostId);
        }
      }
    } else if (node.nodeType === 8
  /* CommentNode */
  ) {
      // `${COMMENT_TYPE}.${hostId}.${nodeId}.${depth}.${index}`
      childIdSplt = node.nodeValue.split('.');

      if (childIdSplt[1] === hostId || childIdSplt[1] === '0') {
        // comment node for either the host id or a 0 host id
        childNodeType = childIdSplt[0];
        childVNode = {
          $flags$: 0,
          $hostId$: childIdSplt[1],
          $nodeId$: childIdSplt[2],
          $depth$: childIdSplt[3],
          $index$: childIdSplt[4],
          $elm$: node,
          $attrs$: null,
          $children$: null,
          $key$: null,
          $name$: null,
          $tag$: null,
          $text$: null
        };

        if (childNodeType === TEXT_NODE_ID) {
          childVNode.$elm$ = node.nextSibling;

          if (childVNode.$elm$ && childVNode.$elm$.nodeType === 3
          /* TextNode */
          ) {
              childVNode.$text$ = childVNode.$elm$.textContent;
              childRenderNodes.push(childVNode); // remove the text comment since it's no longer needed

              node.remove();

              if (!parentVNode.$children$) {
                parentVNode.$children$ = [];
              }

              parentVNode.$children$[childVNode.$index$] = childVNode;

              if (shadowRootNodes && childVNode.$depth$ === '0') {
                shadowRootNodes[childVNode.$index$] = childVNode.$elm$;
              }
            }
        } else if (childVNode.$hostId$ === hostId) {
          // this comment node is specifcally for this host id
          if (childNodeType === SLOT_NODE_ID) {
            // `${SLOT_NODE_ID}.${hostId}.${nodeId}.${depth}.${index}.${slotName}`;
            childVNode.$tag$ = 'slot';

            if (childIdSplt[5]) {
              node['s-sn'] = childVNode.$name$ = childIdSplt[5];
            } else {
              node['s-sn'] = '';
            }

            node['s-sr'] = true;

            if (app_data_BUILD.shadowDom && shadowRootNodes) {
              // browser support shadowRoot and this is a shadow dom component
              // create an actual slot element
              childVNode.$elm$ = doc.createElement(childVNode.$tag$);

              if (childVNode.$name$) {
                // add the slot name attribute
                childVNode.$elm$.setAttribute('name', childVNode.$name$);
              } // insert the new slot element before the slot comment


              node.parentNode.insertBefore(childVNode.$elm$, node); // remove the slot comment since it's not needed for shadow

              node.remove();

              if (childVNode.$depth$ === '0') {
                shadowRootNodes[childVNode.$index$] = childVNode.$elm$;
              }
            }

            slotNodes.push(childVNode);

            if (!parentVNode.$children$) {
              parentVNode.$children$ = [];
            }

            parentVNode.$children$[childVNode.$index$] = childVNode;
          } else if (childNodeType === CONTENT_REF_ID) {
            // `${CONTENT_REF_ID}.${hostId}`;
            if (app_data_BUILD.shadowDom && shadowRootNodes) {
              // remove the content ref comment since it's not needed for shadow
              node.remove();
            } else if (app_data_BUILD.slotRelocation) {
              hostElm['s-cr'] = node;
              node['s-cn'] = true;
            }
          }
        }
      }
    } else if (parentVNode && parentVNode.$tag$ === 'style') {
    var vnode = newVNode(null, node.textContent);
    vnode.$elm$ = node;
    vnode.$index$ = '0';
    parentVNode.$children$ = [vnode];
  }
};

var initializeDocumentHydrate = function initializeDocumentHydrate(node, orgLocNodes) {
  if (node.nodeType === 1
  /* ElementNode */
  ) {
      var _i5 = 0;

      for (; _i5 < node.childNodes.length; _i5++) {
        initializeDocumentHydrate(node.childNodes[_i5], orgLocNodes);
      }

      if (node.shadowRoot) {
        for (_i5 = 0; _i5 < node.shadowRoot.childNodes.length; _i5++) {
          initializeDocumentHydrate(node.shadowRoot.childNodes[_i5], orgLocNodes);
        }
      }
    } else if (node.nodeType === 8
  /* CommentNode */
  ) {
      var childIdSplt = node.nodeValue.split('.');

      if (childIdSplt[0] === ORG_LOCATION_ID) {
        orgLocNodes.set(childIdSplt[1] + '.' + childIdSplt[2], node);
        node.nodeValue = ''; // useful to know if the original location is
        // the root light-dom of a shadow dom component

        node['s-en'] = childIdSplt[3];
      }
    }
};

var parsePropertyValue = function parsePropertyValue(propValue, propType) {
  // ensure this value is of the correct prop type
  if (propValue != null && !isComplexType(propValue)) {
    if (app_data_BUILD.propBoolean && propType & 4
    /* Boolean */
    ) {
        // per the HTML spec, any string value means it is a boolean true value
        // but we'll cheat here and say that the string "false" is the boolean false
        return propValue === 'false' ? false : propValue === '' || !!propValue;
      }

    if (app_data_BUILD.propNumber && propType & 2
    /* Number */
    ) {
        // force it to be a number
        return parseFloat(propValue);
      }

    if (app_data_BUILD.propString && propType & 1
    /* String */
    ) {
        // could have been passed as a number or boolean
        // but we still want it as a string
        return String(propValue);
      } // redundant return here for better minification


    return propValue;
  } // not sure exactly what type we want
  // so no need to change to a different type


  return propValue;
};

var getValue = function getValue(ref, propName) {
  return getHostRef(ref).$instanceValues$.get(propName);
};

var setValue = function setValue(ref, propName, newVal, cmpMeta) {
  // check our new property value against our internal value
  var hostRef = getHostRef(ref);
  var elm = app_data_BUILD.lazyLoad ? hostRef.$hostElement$ : ref;
  var oldVal = hostRef.$instanceValues$.get(propName);
  var flags = hostRef.$flags$;
  var instance = app_data_BUILD.lazyLoad ? hostRef.$lazyInstance$ : elm;
  newVal = parsePropertyValue(newVal, cmpMeta.$members$[propName][0]);

  if ((!app_data_BUILD.lazyLoad || !(flags & 8
  /* isConstructingInstance */
  ) || oldVal === undefined) && newVal !== oldVal) {
    // gadzooks! the property's value has changed!!
    // set our new value!
    hostRef.$instanceValues$.set(propName, newVal);

    if (app_data_BUILD.isDev) {
      if (hostRef.$flags$ & 1024
      /* devOnRender */
      ) {
          consoleDevWarn("The state/prop \"".concat(propName, "\" changed during rendering. This can potentially lead to infinite-loops and other bugs."), '\nElement', elm, '\nNew value', newVal, '\nOld value', oldVal);
        } else if (hostRef.$flags$ & 2048
      /* devOnDidLoad */
      ) {
          consoleDevWarn("The state/prop \"".concat(propName, "\" changed during \"componentDidLoad()\", this triggers extra re-renders, try to setup on \"componentWillLoad()\""), '\nElement', elm, '\nNew value', newVal, '\nOld value', oldVal);
        }
    }

    if (!app_data_BUILD.lazyLoad || instance) {
      // get an array of method names of watch functions to call
      if (app_data_BUILD.watchCallback && cmpMeta.$watchers$ && flags & 128
      /* isWatchReady */
      ) {
          var watchMethods = cmpMeta.$watchers$[propName];

          if (watchMethods) {
            // this instance is watching for when this property changed
            watchMethods.map(function (watchMethodName) {
              try {
                // fire off each of the watch methods that are watching this property
                instance[watchMethodName](newVal, oldVal, propName);
              } catch (e) {
                consoleError(e, elm);
              }
            });
          }
        }

      if (app_data_BUILD.updatable && (flags & (2
      /* hasRendered */
      | 16
      /* isQueuedForUpdate */
      )) === 2
      /* hasRendered */
      ) {
          if (app_data_BUILD.cmpShouldUpdate && instance.componentShouldUpdate) {
            if (instance.componentShouldUpdate(newVal, oldVal, propName) === false) {
              return;
            }
          } // looks like this value actually changed, so we've got work to do!
          // but only if we've already rendered, otherwise just chill out
          // queue that we need to do an update, but don't worry about queuing
          // up millions cuz this function ensures it only runs once


          scheduleUpdate(hostRef, false);
        }
    }
  }
};

var proxyComponent = function proxyComponent(Cstr, cmpMeta, flags) {
  if (app_data_BUILD.member && cmpMeta.$members$) {
    if (app_data_BUILD.watchCallback && Cstr.watchers) {
      cmpMeta.$watchers$ = Cstr.watchers;
    } // It's better to have a const than two Object.entries()


    var members = Object.entries(cmpMeta.$members$);
    var prototype = Cstr.prototype;
    members.map(function (_ref14) {
      var _ref15 = _slicedToArray(_ref14, 2),
          memberName = _ref15[0],
          _ref15$ = _slicedToArray(_ref15[1], 1),
          memberFlags = _ref15$[0];

      if ((app_data_BUILD.prop || app_data_BUILD.state) && (memberFlags & 31
      /* Prop */
      || (!app_data_BUILD.lazyLoad || flags & 2
      /* proxyState */
      ) && memberFlags & 32
      /* State */
      )) {
        // proxyComponent - prop
        Object.defineProperty(prototype, memberName, {
          get: function get() {
            // proxyComponent, get value
            return getValue(this, memberName);
          },
          set: function set(newValue) {
            // only during dev time
            if (app_data_BUILD.isDev) {
              var ref = getHostRef(this);

              if ( // we are proxying the instance (not element)
              (flags & 1
              /* isElementConstructor */
              ) === 0 && // the element is not constructing
              (ref.$flags$ & 8
              /* isConstructingInstance */
              ) === 0 && // the member is a prop
              (memberFlags & 31
              /* Prop */
              ) !== 0 && // the member is not mutable
              (memberFlags & 1024
              /* Mutable */
              ) === 0) {
                consoleDevWarn("@Prop() \"".concat(memberName, "\" on <").concat(cmpMeta.$tagName$, "> is immutable but was modified from within the component.\nMore information: https://stenciljs.com/docs/properties#prop-mutability"));
              }
            } // proxyComponent, set value


            setValue(this, memberName, newValue, cmpMeta);
          },
          configurable: true,
          enumerable: true
        });
      } else if (app_data_BUILD.lazyLoad && app_data_BUILD.method && flags & 1
      /* isElementConstructor */
      && memberFlags & 64
      /* Method */
      ) {
          // proxyComponent - method
          Object.defineProperty(prototype, memberName, {
            value: function value() {
              for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
              }

              var ref = getHostRef(this);
              return ref.$onInstancePromise$.then(function () {
                var _ref$$lazyInstance$;

                return (_ref$$lazyInstance$ = ref.$lazyInstance$)[memberName].apply(_ref$$lazyInstance$, args);
              });
            }
          });
        }
    });

    if (app_data_BUILD.observeAttribute && (!app_data_BUILD.lazyLoad || flags & 1
    /* isElementConstructor */
    )) {
      var attrNameToPropName = new Map();

      prototype.attributeChangedCallback = function (attrName, _oldValue, newValue) {
        var _this = this;

        plt.jmp(function () {
          var propName = attrNameToPropName.get(attrName);
          _this[propName] = newValue === null && typeof _this[propName] === 'boolean' ? false : newValue;
        });
      }; // create an array of attributes to observe
      // and also create a map of html attribute name to js property name


      Cstr.observedAttributes = members.filter(function (_ref16) {
        var _ref17 = _slicedToArray(_ref16, 2),
            _ = _ref17[0],
            m = _ref17[1];

        return m[0] & 15;
      }
      /* HasAttribute */
      ) // filter to only keep props that should match attributes
      .map(function (_ref18) {
        var _ref19 = _slicedToArray(_ref18, 2),
            propName = _ref19[0],
            m = _ref19[1];

        var attrName = m[1] || propName;
        attrNameToPropName.set(attrName, propName);

        if (app_data_BUILD.reflect && m[0] & 512
        /* ReflectAttr */
        ) {
            cmpMeta.$attrsToReflect$.push([propName, attrName]);
          }

        return attrName;
      });
    }
  }

  return Cstr;
};

var initializeComponent = /*#__PURE__*/function () {
  var _ref20 = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee2(elm, hostRef, cmpMeta, hmrVersionId, Cstr) {
    var endLoad, endNewInstance, style, _scopeId, endRegisterStyles, ancestorComponent, schedule;

    return regenerator_default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!((app_data_BUILD.lazyLoad || app_data_BUILD.hydrateServerSide || app_data_BUILD.style) && (hostRef.$flags$ & 32
            /* hasInitializedComponent */
            ) === 0)) {
              _context2.next = 36;
              break;
            }

            if (!(app_data_BUILD.lazyLoad || app_data_BUILD.hydrateClientSide)) {
              _context2.next = 22;
              break;
            }

            // we haven't initialized this element yet
            hostRef.$flags$ |= 32
            /* hasInitializedComponent */
            ; // lazy loaded components
            // request the component's implementation to be
            // wired up with the host element

            Cstr = loadModule(cmpMeta, hostRef, hmrVersionId);

            if (!Cstr.then) {
              _context2.next = 10;
              break;
            }

            // Await creates a micro-task avoid if possible
            endLoad = uniqueTime("st:load:".concat(cmpMeta.$tagName$, ":").concat(hostRef.$modeName$), "[Stencil] Load module for <".concat(cmpMeta.$tagName$, ">"));
            _context2.next = 8;
            return Cstr;

          case 8:
            Cstr = _context2.sent;
            endLoad();

          case 10:
            if (!((app_data_BUILD.isDev || app_data_BUILD.isDebug) && !Cstr)) {
              _context2.next = 12;
              break;
            }

            throw new Error("Constructor for \"".concat(cmpMeta.$tagName$, "#").concat(hostRef.$modeName$, "\" was not found"));

          case 12:
            if (app_data_BUILD.member && !Cstr.isProxied) {
              // we'eve never proxied this Constructor before
              // let's add the getters/setters to its prototype before
              // the first time we create an instance of the implementation
              if (app_data_BUILD.watchCallback) {
                cmpMeta.$watchers$ = Cstr.watchers;
              }

              proxyComponent(Cstr, cmpMeta, 2
              /* proxyState */
              );
              Cstr.isProxied = true;
            }

            endNewInstance = createTime('createInstance', cmpMeta.$tagName$); // ok, time to construct the instance
            // but let's keep track of when we start and stop
            // so that the getters/setters don't incorrectly step on data

            if (app_data_BUILD.member) {
              hostRef.$flags$ |= 8
              /* isConstructingInstance */
              ;
            } // construct the lazy-loaded component implementation
            // passing the hostRef is very important during
            // construction in order to directly wire together the
            // host element and the lazy-loaded instance


            try {
              new Cstr(hostRef);
            } catch (e) {
              consoleError(e);
            }

            if (app_data_BUILD.member) {
              hostRef.$flags$ &= ~8
              /* isConstructingInstance */
              ;
            }

            if (app_data_BUILD.watchCallback) {
              hostRef.$flags$ |= 128
              /* isWatchReady */
              ;
            }

            endNewInstance();
            fireConnectedCallback(hostRef.$lazyInstance$);
            _context2.next = 24;
            break;

          case 22:
            // sync constructor component
            Cstr = elm.constructor;
            hostRef.$flags$ |= 128
            /* isWatchReady */
            | 32
            /* hasInitializedComponent */
            ;

          case 24:
            if (!(app_data_BUILD.style && Cstr.style)) {
              _context2.next = 36;
              break;
            }

            // this component has styles but we haven't registered them yet
            style = Cstr.style;

            if (app_data_BUILD.mode && typeof style !== 'string') {
              style = style[hostRef.$modeName$ = computeMode(elm)];

              if (app_data_BUILD.hydrateServerSide && hostRef.$modeName$) {
                elm.setAttribute('s-mode', hostRef.$modeName$);
              }
            }

            _scopeId = getScopeId(cmpMeta, hostRef.$modeName$);

            if (styles.has(_scopeId)) {
              _context2.next = 36;
              break;
            }

            endRegisterStyles = createTime('registerStyles', cmpMeta.$tagName$);

            if (!(!app_data_BUILD.hydrateServerSide && app_data_BUILD.shadowDom && app_data_BUILD.shadowDomShim && cmpMeta.$flags$ & 8
            /* needsShadowDomShim */
            )) {
              _context2.next = 34;
              break;
            }

            _context2.next = 33;
            return __webpack_require__.e(/* import() */ 662).then(__webpack_require__.bind(__webpack_require__, 662)).then(function (m) {
              return m.scopeCss(style, _scopeId, false);
            });

          case 33:
            style = _context2.sent;

          case 34:
            registerStyle(_scopeId, style, !!(cmpMeta.$flags$ & 1
            /* shadowDomEncapsulation */
            ));
            endRegisterStyles();

          case 36:
            // we've successfully created a lazy instance
            ancestorComponent = hostRef.$ancestorComponent$;

            schedule = function schedule() {
              return scheduleUpdate(hostRef, true);
            };

            if (app_data_BUILD.asyncLoading && ancestorComponent && ancestorComponent['s-rc']) {
              // this is the intial load and this component it has an ancestor component
              // but the ancestor component has NOT fired its will update lifecycle yet
              // so let's just cool our jets and wait for the ancestor to continue first
              // this will get fired off when the ancestor component
              // finally gets around to rendering its lazy self
              // fire off the initial update
              ancestorComponent['s-rc'].push(schedule);
            } else {
              schedule();
            }

          case 39:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function initializeComponent(_x4, _x5, _x6, _x7, _x8) {
    return _ref20.apply(this, arguments);
  };
}();

var fireConnectedCallback = function fireConnectedCallback(instance) {
  if (app_data_BUILD.lazyLoad && app_data_BUILD.connectedCallback) {
    safeCall(instance, 'connectedCallback');
  }
};

var _connectedCallback = function connectedCallback(elm) {
  if ((plt.$flags$ & 1
  /* isTmpDisconnected */
  ) === 0) {
    var hostRef = getHostRef(elm);
    var cmpMeta = hostRef.$cmpMeta$;
    var endConnected = createTime('connectedCallback', cmpMeta.$tagName$);

    if (app_data_BUILD.hostListenerTargetParent) {
      // only run if we have listeners being attached to a parent
      addHostEventListeners(elm, hostRef, cmpMeta.$listeners$, true);
    }

    if (!(hostRef.$flags$ & 1
    /* hasConnected */
    )) {
      // first time this component has connected
      hostRef.$flags$ |= 1
      /* hasConnected */
      ;
      var hostId;

      if (app_data_BUILD.hydrateClientSide) {
        hostId = elm.getAttribute(HYDRATE_ID);

        if (hostId) {
          if (app_data_BUILD.shadowDom && supportsShadow && cmpMeta.$flags$ & 1
          /* shadowDomEncapsulation */
          ) {
              var _scopeId2 = app_data_BUILD.mode ? addStyle(elm.shadowRoot, cmpMeta, elm.getAttribute('s-mode')) : addStyle(elm.shadowRoot, cmpMeta);

              elm.classList.remove(_scopeId2 + '-h', _scopeId2 + '-s');
            }

          initializeClientHydrate(elm, cmpMeta.$tagName$, hostId, hostRef);
        }
      }

      if (app_data_BUILD.slotRelocation && !hostId) {
        // initUpdate
        // if the slot polyfill is required we'll need to put some nodes
        // in here to act as original content anchors as we move nodes around
        // host element has been connected to the DOM
        if (app_data_BUILD.hydrateServerSide || (app_data_BUILD.slot || app_data_BUILD.shadowDom) && cmpMeta.$flags$ & (4
        /* hasSlotRelocation */
        | 8
        /* needsShadowDomShim */
        )) {
          setContentReference(elm);
        }
      }

      if (app_data_BUILD.asyncLoading) {
        // find the first ancestor component (if there is one) and register
        // this component as one of the actively loading child components for its ancestor
        var ancestorComponent = elm;

        while (ancestorComponent = ancestorComponent.parentNode || ancestorComponent.host) {
          // climb up the ancestors looking for the first
          // component that hasn't finished its lifecycle update yet
          if (app_data_BUILD.hydrateClientSide && ancestorComponent.nodeType === 1
          /* ElementNode */
          && ancestorComponent.hasAttribute('s-id') && ancestorComponent['s-p'] || ancestorComponent['s-p']) {
            // we found this components first ancestor component
            // keep a reference to this component's ancestor component
            attachToAncestor(hostRef, hostRef.$ancestorComponent$ = ancestorComponent);
            break;
          }
        }
      } // Lazy properties
      // https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties


      if (app_data_BUILD.prop && app_data_BUILD.lazyLoad && !app_data_BUILD.hydrateServerSide && cmpMeta.$members$) {
        Object.entries(cmpMeta.$members$).map(function (_ref21) {
          var _ref22 = _slicedToArray(_ref21, 2),
              memberName = _ref22[0],
              _ref22$ = _slicedToArray(_ref22[1], 1),
              memberFlags = _ref22$[0];

          if (memberFlags & 31
          /* Prop */
          && elm.hasOwnProperty(memberName)) {
            var value = elm[memberName];
            delete elm[memberName];
            elm[memberName] = value;
          }
        });
      }

      if (app_data_BUILD.initializeNextTick) {
        // connectedCallback, taskQueue, initialLoad
        // angular sets attribute AFTER connectCallback
        // https://github.com/angular/angular/issues/18909
        // https://github.com/angular/angular/issues/19940
        nextTick(function () {
          return initializeComponent(elm, hostRef, cmpMeta);
        });
      } else {
        initializeComponent(elm, hostRef, cmpMeta);
      }
    } else {
      // not the first time this has connected
      // reattach any event listeners to the host
      // since they would have been removed when disconnected
      addHostEventListeners(elm, hostRef, cmpMeta.$listeners$, false); // fire off connectedCallback() on component instance

      fireConnectedCallback(hostRef.$lazyInstance$);
    }

    endConnected();
  }
};

var setContentReference = function setContentReference(elm) {
  // only required when we're NOT using native shadow dom (slot)
  // or this browser doesn't support native shadow dom
  // and this host element was NOT created with SSR
  // let's pick out the inner content for slot projection
  // create a node to represent where the original
  // content was first placed, which is useful later on
  var contentRefElm = elm['s-cr'] = doc.createComment(app_data_BUILD.isDebug ? "content-ref (host=".concat(elm.localName, ")") : '');
  contentRefElm['s-cn'] = true;
  elm.insertBefore(contentRefElm, elm.firstChild);
};

var _disconnectedCallback = function disconnectedCallback(elm) {
  if ((plt.$flags$ & 1
  /* isTmpDisconnected */
  ) === 0) {
    var hostRef = getHostRef(elm);
    var instance = app_data_BUILD.lazyLoad ? hostRef.$lazyInstance$ : elm;

    if (app_data_BUILD.hostListener) {
      if (hostRef.$rmListeners$) {
        hostRef.$rmListeners$.map(function (rmListener) {
          return rmListener();
        });
        hostRef.$rmListeners$ = undefined;
      }
    } // clear CSS var-shim tracking


    if (app_data_BUILD.cssVarShim && plt.$cssShim$) {
      plt.$cssShim$.removeHost(elm);
    }

    if (app_data_BUILD.lazyLoad && app_data_BUILD.disconnectedCallback) {
      safeCall(instance, 'disconnectedCallback');
    }

    if (app_data_BUILD.cmpDidUnload) {
      safeCall(instance, 'componentDidUnload');
    }
  }
};

var defineCustomElement = function defineCustomElement(Cstr, compactMeta) {
  customElements.define(compactMeta[1], proxyCustomElement(Cstr, compactMeta));
};

var proxyCustomElement = function proxyCustomElement(Cstr, compactMeta) {
  var cmpMeta = {
    $flags$: compactMeta[0],
    $tagName$: compactMeta[1]
  };

  if (app_data_BUILD.member) {
    cmpMeta.$members$ = compactMeta[2];
  }

  if (app_data_BUILD.hostListener) {
    cmpMeta.$listeners$ = compactMeta[3];
  }

  if (app_data_BUILD.watchCallback) {
    cmpMeta.$watchers$ = Cstr.$watchers$;
  }

  if (app_data_BUILD.reflect) {
    cmpMeta.$attrsToReflect$ = [];
  }

  if (app_data_BUILD.shadowDom && !supportsShadow && cmpMeta.$flags$ & 1
  /* shadowDomEncapsulation */
  ) {
      cmpMeta.$flags$ |= 8
      /* needsShadowDomShim */
      ;
    }

  var originalConnectedCallback = Cstr.prototype.connectedCallback;
  var originalDisconnectedCallback = Cstr.prototype.disconnectedCallback;
  Object.assign(Cstr.prototype, {
    __registerHost: function __registerHost() {
      registerHost(this, cmpMeta);
    },
    connectedCallback: function connectedCallback() {
      _connectedCallback(this);

      if (app_data_BUILD.connectedCallback && originalConnectedCallback) {
        originalConnectedCallback.call(this);
      }
    },
    disconnectedCallback: function disconnectedCallback() {
      _disconnectedCallback(this);

      if (app_data_BUILD.disconnectedCallback && originalDisconnectedCallback) {
        originalDisconnectedCallback.call(this);
      }
    }
  });
  Cstr.is = cmpMeta.$tagName$;
  return proxyComponent(Cstr, cmpMeta, 1
  /* isElementConstructor */
  | 2
  /* proxyState */
  );
};

var forceModeUpdate = function forceModeUpdate(elm) {
  if (BUILD.style && BUILD.mode && !BUILD.lazyLoad) {
    var mode = computeMode(elm);
    var hostRef = getHostRef(elm);

    if (hostRef.$modeName$ !== mode) {
      var cmpMeta = hostRef.$cmpMeta$;
      var oldScopeId = elm['s-sc'];

      var _scopeId3 = getScopeId(cmpMeta, mode);

      var style = elm.constructor.style[mode];
      var flags = cmpMeta.$flags$;

      if (style) {
        if (!styles.has(_scopeId3)) {
          registerStyle(_scopeId3, style, !!(flags & 1
          /* shadowDomEncapsulation */
          ));
        }

        hostRef.$modeName$ = mode;
        elm.classList.remove(oldScopeId + '-h', oldScopeId + '-s');
        attachStyles(hostRef);
        forceUpdate(elm);
      }
    }
  }
};

var attachShadow = function attachShadow(el) {
  if (supportsShadow) {
    el.attachShadow({
      mode: 'open'
    });
  } else {
    el.shadowRoot = el;
  }
};

var hmrStart = function hmrStart(elm, cmpMeta, hmrVersionId) {
  // ¯\_(ツ)_/¯
  var hostRef = getHostRef(elm); // reset state flags to only have been connected

  hostRef.$flags$ = 1
  /* hasConnected */
  ; // TODO
  // detatch any event listeners that may have been added
  // because we're not passing an exact event name it'll
  // remove all of this element's event, which is good
  // create a callback for when this component finishes hmr

  elm['s-hmr-load'] = function () {
    // finished hmr for this element
    delete elm['s-hmr-load'];
  }; // re-initialize the component


  initializeComponent(elm, hostRef, cmpMeta, hmrVersionId);
};

var patchCloneNode = function patchCloneNode(HostElementPrototype) {
  var orgCloneNode = HostElementPrototype.cloneNode;

  HostElementPrototype.cloneNode = function (deep) {
    var srcNode = this;
    var isShadowDom = BUILD.shadowDom ? srcNode.shadowRoot && supportsShadow : false;
    var clonedNode = orgCloneNode.call(srcNode, isShadowDom ? deep : false);

    if (BUILD.slot && !isShadowDom && deep) {
      (function () {
        var i = 0;
        var slotted, nonStencilNode;
        var stencilPrivates = ['s-id', 's-cr', 's-lr', 's-rc', 's-sc', 's-p', 's-cn', 's-sr', 's-sn', 's-hn', 's-ol', 's-nr', 's-si'];

        for (; i < srcNode.childNodes.length; i++) {
          slotted = srcNode.childNodes[i]['s-nr'];
          nonStencilNode = stencilPrivates.every(function (privateField) {
            return !srcNode.childNodes[i][privateField];
          });

          if (slotted) {
            if (BUILD.appendChildSlotFix && clonedNode.__appendChild) {
              clonedNode.__appendChild(slotted.cloneNode(true));
            } else {
              clonedNode.appendChild(slotted.cloneNode(true));
            }
          }

          if (nonStencilNode) {
            clonedNode.appendChild(srcNode.childNodes[i].cloneNode(true));
          }
        }
      })();
    }

    return clonedNode;
  };
};

var patchSlotAppendChild = function patchSlotAppendChild(HostElementPrototype) {
  HostElementPrototype.__appendChild = HostElementPrototype.appendChild;

  HostElementPrototype.appendChild = function (newChild) {
    var slotName = newChild['s-sn'] = getSlotName(newChild);
    var slotNode = getHostSlotNode(this.childNodes, slotName);

    if (slotNode) {
      var slotChildNodes = getHostSlotChildNodes(slotNode, slotName);
      var appendAfter = slotChildNodes[slotChildNodes.length - 1];
      return appendAfter.parentNode.insertBefore(newChild, appendAfter.nextSibling);
    }

    return this.__appendChild(newChild);
  };
};

var patchChildSlotNodes = function patchChildSlotNodes(elm, cmpMeta) {
  var FakeNodeList = /*#__PURE__*/function (_Array) {
    _inherits(FakeNodeList, _Array);

    var _super = _createSuper(FakeNodeList);

    function FakeNodeList() {
      _classCallCheck(this, FakeNodeList);

      return _super.apply(this, arguments);
    }

    _createClass(FakeNodeList, [{
      key: "item",
      value: function item(n) {
        return this[n];
      }
    }]);

    return FakeNodeList;
  }( /*#__PURE__*/_wrapNativeSuper(Array));

  if (cmpMeta.$flags$ & 8
  /* needsShadowDomShim */
  ) {
      var childNodesFn = elm.__lookupGetter__('childNodes');

      Object.defineProperty(elm, 'children', {
        get: function get() {
          return this.childNodes.map(function (n) {
            return n.nodeType === 1;
          });
        }
      });
      Object.defineProperty(elm, 'childElementCount', {
        get: function get() {
          return elm.children.length;
        }
      });
      Object.defineProperty(elm, 'childNodes', {
        get: function get() {
          var childNodes = childNodesFn.call(this);

          if ((plt.$flags$ & 1
          /* isTmpDisconnected */
          ) === 0 && getHostRef(this).$flags$ & 2
          /* hasRendered */
          ) {
              var result = new FakeNodeList();

              for (var _i6 = 0; _i6 < childNodes.length; _i6++) {
                var slot = childNodes[_i6]['s-nr'];

                if (slot) {
                  result.push(slot);
                }
              }

              return result;
            }

          return FakeNodeList.from(childNodes);
        }
      });
    }
};

var getSlotName = function getSlotName(node) {
  return node['s-sn'] || node.nodeType === 1 && node.getAttribute('slot') || '';
};

var getHostSlotNode = function getHostSlotNode(childNodes, slotName) {
  var i = 0;
  var childNode;

  for (; i < childNodes.length; i++) {
    childNode = childNodes[i];

    if (childNode['s-sr'] && childNode['s-sn'] === slotName) {
      return childNode;
    }

    childNode = getHostSlotNode(childNode.childNodes, slotName);

    if (childNode) {
      return childNode;
    }
  }

  return null;
};

var getHostSlotChildNodes = function getHostSlotChildNodes(n, slotName) {
  var childNodes = [n];

  while ((n = n.nextSibling) && n['s-sn'] === slotName) {
    childNodes.push(n);
  }

  return childNodes;
};

var bootstrapLazy = function bootstrapLazy(lazyBundles) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (BUILD.profile && performance.mark) {
    performance.mark('st:app:start');
  }

  installDevTools();
  var endBootstrap = createTime('bootstrapLazy');
  var cmpTags = [];
  var exclude = options.exclude || [];
  var customElements = win.customElements;
  var head = doc.head;
  var metaCharset = /*@__PURE__*/head.querySelector('meta[charset]');
  var visibilityStyle = /*@__PURE__*/doc.createElement('style');
  var deferredConnectedCallbacks = [];
  var styles = /*@__PURE__*/doc.querySelectorAll("[".concat(HYDRATED_STYLE_ID, "]"));
  var appLoadFallback;
  var isBootstrapping = true;
  var i = 0;
  Object.assign(plt, options);
  plt.$resourcesUrl$ = new URL(options.resourcesUrl || './', doc.baseURI).href;

  if (BUILD.asyncQueue) {
    if (options.syncQueue) {
      plt.$flags$ |= 4
      /* queueSync */
      ;
    }
  }

  if (BUILD.hydrateClientSide) {
    // If the app is already hydrated there is not point to disable the
    // async queue. This will improve the first input delay
    plt.$flags$ |= 2
    /* appLoaded */
    ;
  }

  if (BUILD.hydrateClientSide && BUILD.shadowDom) {
    for (; i < styles.length; i++) {
      registerStyle(styles[i].getAttribute(HYDRATED_STYLE_ID), convertScopedToShadow(styles[i].innerHTML), true);
    }
  }

  lazyBundles.map(function (lazyBundle) {
    return lazyBundle[1].map(function (compactMeta) {
      var cmpMeta = {
        $flags$: compactMeta[0],
        $tagName$: compactMeta[1],
        $members$: compactMeta[2],
        $listeners$: compactMeta[3]
      };

      if (BUILD.member) {
        cmpMeta.$members$ = compactMeta[2];
      }

      if (BUILD.hostListener) {
        cmpMeta.$listeners$ = compactMeta[3];
      }

      if (BUILD.reflect) {
        cmpMeta.$attrsToReflect$ = [];
      }

      if (BUILD.watchCallback) {
        cmpMeta.$watchers$ = {};
      }

      if (BUILD.shadowDom && !supportsShadow && cmpMeta.$flags$ & 1
      /* shadowDomEncapsulation */
      ) {
          cmpMeta.$flags$ |= 8
          /* needsShadowDomShim */
          ;
        }

      var tagName = BUILD.transformTagName && options.transformTagName ? options.transformTagName(cmpMeta.$tagName$) : cmpMeta.$tagName$;

      var HostElement = /*#__PURE__*/function (_HTMLElement) {
        _inherits(HostElement, _HTMLElement);

        var _super2 = _createSuper(HostElement);

        // StencilLazyHost
        function HostElement(self) {
          var _this2;

          _classCallCheck(this, HostElement);

          // @ts-ignore
          _this2 = _super2.call(this, self);
          self = _assertThisInitialized(_this2);
          registerHost(self, cmpMeta);

          if (BUILD.shadowDom && cmpMeta.$flags$ & 1
          /* shadowDomEncapsulation */
          ) {
              // this component is using shadow dom
              // and this browser supports shadow dom
              // add the read-only property "shadowRoot" to the host element
              // adding the shadow root build conditionals to minimize runtime
              if (supportsShadow) {
                if (BUILD.shadowDelegatesFocus) {
                  self.attachShadow({
                    mode: 'open',
                    delegatesFocus: !!(cmpMeta.$flags$ & 16
                    /* shadowDelegatesFocus */
                    )
                  });
                } else {
                  self.attachShadow({
                    mode: 'open'
                  });
                }
              } else if (!BUILD.hydrateServerSide && !('shadowRoot' in self)) {
                self.shadowRoot = self;
              }
            }

          if (BUILD.slotChildNodesFix) {
            patchChildSlotNodes(self, cmpMeta);
          }

          return _this2;
        }

        _createClass(HostElement, [{
          key: "connectedCallback",
          value: function connectedCallback() {
            var _this3 = this;

            if (appLoadFallback) {
              clearTimeout(appLoadFallback);
              appLoadFallback = null;
            }

            if (isBootstrapping) {
              // connectedCallback will be processed once all components have been registered
              deferredConnectedCallbacks.push(this);
            } else {
              plt.jmp(function () {
                return _connectedCallback(_this3);
              });
            }
          }
        }, {
          key: "disconnectedCallback",
          value: function disconnectedCallback() {
            var _this4 = this;

            plt.jmp(function () {
              return _disconnectedCallback(_this4);
            });
          }
        }, {
          key: "componentOnReady",
          value: function componentOnReady() {
            return getHostRef(this).$onReadyPromise$;
          }
        }]);

        return HostElement;
      }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

      if (BUILD.cloneNodeFix) {
        patchCloneNode(HostElement.prototype);
      }

      if (BUILD.appendChildSlotFix) {
        patchSlotAppendChild(HostElement.prototype);
      }

      if (BUILD.hotModuleReplacement) {
        HostElement.prototype['s-hmr'] = function (hmrVersionId) {
          hmrStart(this, cmpMeta, hmrVersionId);
        };
      }

      cmpMeta.$lazyBundleId$ = lazyBundle[0];

      if (!exclude.includes(tagName) && !customElements.get(tagName)) {
        cmpTags.push(tagName);
        customElements.define(tagName, proxyComponent(HostElement, cmpMeta, 1
        /* isElementConstructor */
        ));
      }
    });
  });

  if (BUILD.hydratedClass || BUILD.hydratedAttribute) {
    visibilityStyle.innerHTML = cmpTags + HYDRATED_CSS;
    visibilityStyle.setAttribute('data-styles', '');
    head.insertBefore(visibilityStyle, metaCharset ? metaCharset.nextSibling : head.firstChild);
  } // Process deferred connectedCallbacks now all components have been registered


  isBootstrapping = false;

  if (deferredConnectedCallbacks.length) {
    deferredConnectedCallbacks.map(function (host) {
      return host.connectedCallback();
    });
  } else {
    if (BUILD.profile) {
      plt.jmp(function () {
        return appLoadFallback = setTimeout(appDidLoad, 30, 'timeout');
      });
    } else {
      plt.jmp(function () {
        return appLoadFallback = setTimeout(appDidLoad, 30);
      });
    }
  } // Fallback appLoad event


  endBootstrap();
};

var getAssetPath = function getAssetPath(path) {
  var assetUrl = new URL(path, plt.$resourcesUrl$);
  return assetUrl.origin !== win.location.origin ? assetUrl.href : assetUrl.pathname;
};

var setAssetPath = function setAssetPath(path) {
  return plt.$resourcesUrl$ = path;
};

var getConnect = function getConnect(_ref, tagName) {
  var componentOnReady = function componentOnReady() {
    var elm = doc.querySelector(tagName);

    if (!elm) {
      elm = doc.createElement(tagName);
      doc.body.appendChild(elm);
    }

    return typeof elm.componentOnReady === 'function' ? elm.componentOnReady() : Promise.resolve(elm);
  };

  var create = function create() {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return componentOnReady().then(function (el) {
      return el.create.apply(el, args);
    });
  };

  return {
    create: create,
    componentOnReady: componentOnReady
  };
};

var getContext = function getContext(_elm, context) {
  if (context in Context) {
    return Context[context];
  } else if (context === 'window') {
    return win;
  } else if (context === 'document') {
    return doc;
  } else if (context === 'isServer' || context === 'isPrerender') {
    return BUILD.hydrateServerSide ? true : false;
  } else if (context === 'isClient') {
    return BUILD.hydrateServerSide ? false : true;
  } else if (context === 'resourcesUrl' || context === 'publicPath') {
    return getAssetPath('.');
  } else if (context === 'queue') {
    return {
      write: writeTask,
      read: readTask,
      tick: {
        then: function then(cb) {
          return nextTick(cb);
        }
      }
    };
  }

  return undefined;
};

var insertVdomAnnotations = function insertVdomAnnotations(doc, staticComponents) {
  if (doc != null) {
    var docData = {
      hostIds: 0,
      rootLevelIds: 0,
      staticComponents: new Set(staticComponents)
    };
    var orgLocationNodes = [];
    parseVNodeAnnotations(doc, doc.body, docData, orgLocationNodes);
    orgLocationNodes.forEach(function (orgLocationNode) {
      if (orgLocationNode != null) {
        var nodeRef = orgLocationNode['s-nr'];
        var hostId = nodeRef['s-host-id'];
        var nodeId = nodeRef['s-node-id'];
        var childId = "".concat(hostId, ".").concat(nodeId);

        if (hostId == null) {
          hostId = 0;
          docData.rootLevelIds++;
          nodeId = docData.rootLevelIds;
          childId = "".concat(hostId, ".").concat(nodeId);

          if (nodeRef.nodeType === 1
          /* ElementNode */
          ) {
              nodeRef.setAttribute(HYDRATE_CHILD_ID, childId);
            } else if (nodeRef.nodeType === 3
          /* TextNode */
          ) {
              if (hostId === 0) {
                var textContent = nodeRef.nodeValue.trim();

                if (textContent === '') {
                  // useless whitespace node at the document root
                  orgLocationNode.remove();
                  return;
                }
              }

              var commentBeforeTextNode = doc.createComment(childId);
              commentBeforeTextNode.nodeValue = "".concat(TEXT_NODE_ID, ".").concat(childId);
              nodeRef.parentNode.insertBefore(commentBeforeTextNode, nodeRef);
            }
        }

        var orgLocationNodeId = "".concat(ORG_LOCATION_ID, ".").concat(childId);
        var orgLocationParentNode = orgLocationNode.parentElement;

        if (orgLocationParentNode) {
          if (orgLocationParentNode['s-en'] === '') {
            // ending with a "." means that the parent element
            // of this node's original location is a SHADOW dom element
            // and this node is apart of the root level light dom
            orgLocationNodeId += ".";
          } else if (orgLocationParentNode['s-en'] === 'c') {
            // ending with a ".c" means that the parent element
            // of this node's original location is a SCOPED element
            // and this node is apart of the root level light dom
            orgLocationNodeId += ".c";
          }
        }

        orgLocationNode.nodeValue = orgLocationNodeId;
      }
    });
  }
};

var parseVNodeAnnotations = function parseVNodeAnnotations(doc, node, docData, orgLocationNodes) {
  if (node == null) {
    return;
  }

  if (node['s-nr'] != null) {
    orgLocationNodes.push(node);
  }

  if (node.nodeType === 1
  /* ElementNode */
  ) {
      node.childNodes.forEach(function (childNode) {
        var hostRef = getHostRef(childNode);

        if (hostRef != null && !docData.staticComponents.has(childNode.nodeName.toLowerCase())) {
          var cmpData = {
            nodeIds: 0
          };
          insertVNodeAnnotations(doc, childNode, hostRef.$vnode$, docData, cmpData);
        }

        parseVNodeAnnotations(doc, childNode, docData, orgLocationNodes);
      });
    }
};

var insertVNodeAnnotations = function insertVNodeAnnotations(doc, hostElm, vnode, docData, cmpData) {
  if (vnode != null) {
    var hostId = ++docData.hostIds;
    hostElm.setAttribute(HYDRATE_ID, hostId);

    if (hostElm['s-cr'] != null) {
      hostElm['s-cr'].nodeValue = "".concat(CONTENT_REF_ID, ".").concat(hostId);
    }

    if (vnode.$children$ != null) {
      var depth = 0;
      vnode.$children$.forEach(function (vnodeChild, index) {
        insertChildVNodeAnnotations(doc, vnodeChild, cmpData, hostId, depth, index);
      });
    }

    if (hostElm && vnode && vnode.$elm$ && !hostElm.hasAttribute('c-id')) {
      var parent = hostElm.parentElement;

      if (parent && parent.childNodes) {
        var parentChildNodes = Array.from(parent.childNodes);
        var comment = parentChildNodes.find(function (node) {
          return node.nodeType === 8
          /* CommentNode */
          && node['s-sr'];
        });

        if (comment) {
          var index = parentChildNodes.indexOf(hostElm) - 1;
          vnode.$elm$.setAttribute(HYDRATE_CHILD_ID, "".concat(comment['s-host-id'], ".").concat(comment['s-node-id'], ".0.").concat(index));
        }
      }
    }
  }
};

var insertChildVNodeAnnotations = function insertChildVNodeAnnotations(doc, vnodeChild, cmpData, hostId, depth, index) {
  var childElm = vnodeChild.$elm$;

  if (childElm == null) {
    return;
  }

  var nodeId = cmpData.nodeIds++;
  var childId = "".concat(hostId, ".").concat(nodeId, ".").concat(depth, ".").concat(index);
  childElm['s-host-id'] = hostId;
  childElm['s-node-id'] = nodeId;

  if (childElm.nodeType === 1
  /* ElementNode */
  ) {
      childElm.setAttribute(HYDRATE_CHILD_ID, childId);
    } else if (childElm.nodeType === 3
  /* TextNode */
  ) {
      var parentNode = childElm.parentNode;
      var nodeName = parentNode.nodeName;

      if (nodeName !== 'STYLE' && nodeName !== 'SCRIPT') {
        var textNodeId = "".concat(TEXT_NODE_ID, ".").concat(childId);
        var commentBeforeTextNode = doc.createComment(textNodeId);
        parentNode.insertBefore(commentBeforeTextNode, childElm);
      }
    } else if (childElm.nodeType === 8
  /* CommentNode */
  ) {
      if (childElm['s-sr']) {
        var slotName = childElm['s-sn'] || '';
        var slotNodeId = "".concat(SLOT_NODE_ID, ".").concat(childId, ".").concat(slotName);
        childElm.nodeValue = slotNodeId;
      }
    }

  if (vnodeChild.$children$ != null) {
    var childDepth = depth + 1;
    vnodeChild.$children$.forEach(function (vnode, index) {
      insertChildVNodeAnnotations(doc, vnode, cmpData, hostId, childDepth, index);
    });
  }
};

var setPlatformOptions = function setPlatformOptions(opts) {
  return Object.assign(plt, opts);
};

var Fragment = function Fragment(_, children) {
  return children;
};

var hostRefs = new WeakMap();

var getHostRef = function getHostRef(ref) {
  return hostRefs.get(ref);
};

var registerInstance = function registerInstance(lazyInstance, hostRef) {
  return hostRefs.set(hostRef.$lazyInstance$ = lazyInstance, hostRef);
};

var registerHost = function registerHost(elm, cmpMeta) {
  var hostRef = {
    $flags$: 0,
    $hostElement$: elm,
    $cmpMeta$: cmpMeta,
    $instanceValues$: new Map()
  };

  if (app_data_BUILD.isDev) {
    hostRef.$renderCount$ = 0;
  }

  if (app_data_BUILD.method && app_data_BUILD.lazyLoad) {
    hostRef.$onInstancePromise$ = new Promise(function (r) {
      return hostRef.$onInstanceResolve$ = r;
    });
  }

  if (app_data_BUILD.asyncLoading) {
    hostRef.$onReadyPromise$ = new Promise(function (r) {
      return hostRef.$onReadyResolve$ = r;
    });
    elm['s-p'] = [];
    elm['s-rc'] = [];
  }

  addHostEventListeners(elm, hostRef, cmpMeta.$listeners$, false);
  return hostRefs.set(elm, hostRef);
};

var isMemberInElement = function isMemberInElement(elm, memberName) {
  return memberName in elm;
};

var consoleError = function consoleError(e, el) {
  return (customError || console.error)(e, el);
};

var STENCIL_DEV_MODE = app_data_BUILD.isTesting ? ['STENCIL:'] // E2E testing
: ['%cstencil', 'color: white;background:#4c47ff;font-weight: bold; font-size:10px; padding:2px 6px; border-radius: 5px'];

var consoleDevError = function consoleDevError() {
  var _console;

  for (var _len4 = arguments.length, m = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    m[_key4] = arguments[_key4];
  }

  return (_console = console).error.apply(_console, STENCIL_DEV_MODE.concat(m));
};

var consoleDevWarn = function consoleDevWarn() {
  var _console2;

  for (var _len5 = arguments.length, m = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    m[_key5] = arguments[_key5];
  }

  return (_console2 = console).warn.apply(_console2, STENCIL_DEV_MODE.concat(m));
};

var consoleDevInfo = function consoleDevInfo() {
  var _console3;

  for (var _len6 = arguments.length, m = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    m[_key6] = arguments[_key6];
  }

  return (_console3 = console).info.apply(_console3, STENCIL_DEV_MODE.concat(m));
};

var setErrorHandler = function setErrorHandler(handler) {
  return customError = handler;
};

var cmpModules = /*@__PURE__*/new Map();

var loadModule = function loadModule(cmpMeta, hostRef, hmrVersionId) {
  // loadModuleImport
  var exportName = cmpMeta.$tagName$.replace(/-/g, '_');
  var bundleId = cmpMeta.$lazyBundleId$;

  if (app_data_BUILD.isDev && typeof bundleId !== 'string') {
    consoleDevError("Trying to lazily load component <".concat(cmpMeta.$tagName$, "> with style mode \"").concat(hostRef.$modeName$, "\", but it does not exist."));
    return undefined;
  }

  var module = !app_data_BUILD.hotModuleReplacement ? cmpModules.get(bundleId) : false;

  if (module) {
    return module[exportName];
  }

  return __webpack_require__(6031)("./".concat(bundleId, ".entry.js").concat(app_data_BUILD.hotModuleReplacement && hmrVersionId ? '?s-hmr=' + hmrVersionId : '')).then(function (importedModule) {
    if (!app_data_BUILD.hotModuleReplacement) {
      cmpModules.set(bundleId, importedModule);
    }

    return importedModule[exportName];
  }, consoleError);
};

var styles = new Map();
var modeResolutionChain = [];
var queueDomReads = [];
var queueDomWrites = [];
var queueDomWritesLow = [];

var queueTask = function queueTask(queue, write) {
  return function (cb) {
    queue.push(cb);

    if (!queuePending) {
      queuePending = true;

      if (write && plt.$flags$ & 4
      /* queueSync */
      ) {
          nextTick(flush);
        } else {
        plt.raf(flush);
      }
    }
  };
};

var consume = function consume(queue) {
  for (var _i7 = 0; _i7 < queue.length; _i7++) {
    try {
      queue[_i7](performance.now());
    } catch (e) {
      consoleError(e);
    }
  }

  queue.length = 0;
};

var consumeTimeout = function consumeTimeout(queue, timeout) {
  var i = 0;
  var ts = 0;

  while (i < queue.length && (ts = performance.now()) < timeout) {
    try {
      queue[i++](ts);
    } catch (e) {
      consoleError(e);
    }
  }

  if (i === queue.length) {
    queue.length = 0;
  } else if (i !== 0) {
    queue.splice(0, i);
  }
};

var flush = function flush() {
  if (app_data_BUILD.asyncQueue) {
    queueCongestion++;
  } // always force a bunch of medium callbacks to run, but still have
  // a throttle on how many can run in a certain time
  // DOM READS!!!


  consume(queueDomReads); // DOM WRITES!!!

  if (app_data_BUILD.asyncQueue) {
    var timeout = (plt.$flags$ & 6
    /* queueMask */
    ) === 2
    /* appLoaded */
    ? performance.now() + 14 * Math.ceil(queueCongestion * (1.0 / 10.0)) : Infinity;
    consumeTimeout(queueDomWrites, timeout);
    consumeTimeout(queueDomWritesLow, timeout);

    if (queueDomWrites.length > 0) {
      queueDomWritesLow.push.apply(queueDomWritesLow, queueDomWrites);
      queueDomWrites.length = 0;
    }

    if (queuePending = queueDomReads.length + queueDomWrites.length + queueDomWritesLow.length > 0) {
      // still more to do yet, but we've run out of time
      // let's let this thing cool off and try again in the next tick
      plt.raf(flush);
    } else {
      queueCongestion = 0;
    }
  } else {
    consume(queueDomWrites);

    if (queuePending = queueDomReads.length > 0) {
      // still more to do yet, but we've run out of time
      // let's let this thing cool off and try again in the next tick
      plt.raf(flush);
    }
  }
};

var nextTick = /*@__PURE__*/function nextTick(cb) {
  return promiseResolve().then(cb);
};

var readTask = /*@__PURE__*/(/* unused pure expression or super */ null && (queueTask(queueDomReads, false)));
var writeTask = /*@__PURE__*/queueTask(queueDomWrites, true);
var Build = {
  isDev: app_data_BUILD.isDev ? true : false,
  isBrowser: true,
  isServer: false,
  isTesting: app_data_BUILD.isTesting ? true : false
};


;// CONCATENATED MODULE: ./dist/custom-elements/index.js
var DefaultDiv$1=/*#__PURE__*/function(_HTMLElement){(0,inheritsLoose/* default */.Z)(DefaultDiv$1,_HTMLElement);function DefaultDiv$1(){var _this;_this=_HTMLElement.call(this)||this;_this.__registerHost();return _this;}var _proto=DefaultDiv$1.prototype;_proto.render=function render(){return h(Host,null,h("div",null,"default div"));};return DefaultDiv$1;}(/*#__PURE__*/wrapNativeSuper_wrapNativeSuper(HTMLElement));var ScopedDiv$1=/*#__PURE__*/function(_HTMLElement2){(0,inheritsLoose/* default */.Z)(ScopedDiv$1,_HTMLElement2);function ScopedDiv$1(){var _this2;_this2=_HTMLElement2.call(this)||this;_this2.__registerHost();return _this2;}var _proto2=ScopedDiv$1.prototype;_proto2.render=function render(){return h(Host,null,h("div",null,"scoped div"));};return ScopedDiv$1;}(/*#__PURE__*/wrapNativeSuper_wrapNativeSuper(HTMLElement));var ShadowDiv$1=/*#__PURE__*/function(_HTMLElement3){(0,inheritsLoose/* default */.Z)(ShadowDiv$1,_HTMLElement3);function ShadowDiv$1(){var _this3;_this3=_HTMLElement3.call(this)||this;_this3.__registerHost();attachShadow(assertThisInitialized_assertThisInitialized(_this3));return _this3;}var _proto3=ShadowDiv$1.prototype;_proto3.render=function render(){return h(Host,null,h("div",null,"shadow div"));};return ShadowDiv$1;}(/*#__PURE__*/wrapNativeSuper_wrapNativeSuper(HTMLElement));var DefaultDiv=/*@__PURE__*/proxyCustomElement(DefaultDiv$1,[0,"default-div"]);var ScopedDiv=/*@__PURE__*/proxyCustomElement(ScopedDiv$1,[2,"scoped-div"]);var ShadowDiv=/*@__PURE__*/proxyCustomElement(ShadowDiv$1,[1,"shadow-div"]);var defineCustomElements=function defineCustomElements(opts){if(typeof customElements!=='undefined'){[DefaultDiv,ScopedDiv,ShadowDiv].forEach(function(cmp){if(!customElements.get(cmp.is)){customElements.define(cmp.is,cmp,opts);}});}};

/***/ }),

/***/ 9037:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var _require=__webpack_require__(5472),defineCustomElements=_require.defineCustomElements;exports.onClientEntry=function(){defineCustomElements();};

/***/ }),

/***/ 9499:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "BaseContext": function() { return /* binding */ BaseContext; },
  "Link": function() { return /* binding */ Link; },
  "Location": function() { return /* binding */ Location; },
  "LocationProvider": function() { return /* binding */ LocationProvider; },
  "Match": function() { return /* binding */ Match; },
  "Redirect": function() { return /* binding */ Redirect; },
  "Router": function() { return /* binding */ Router; },
  "ServerLocation": function() { return /* binding */ ServerLocation; },
  "createHistory": function() { return /* reexport */ createHistory; },
  "createMemorySource": function() { return /* reexport */ createMemorySource; },
  "globalHistory": function() { return /* reexport */ globalHistory; },
  "isRedirect": function() { return /* binding */ isRedirect; },
  "matchPath": function() { return /* reexport */ match; },
  "navigate": function() { return /* reexport */ history_navigate; },
  "redirectTo": function() { return /* binding */ redirectTo; },
  "useLocation": function() { return /* binding */ useLocation; },
  "useMatch": function() { return /* binding */ useMatch; },
  "useNavigate": function() { return /* binding */ useNavigate; },
  "useParams": function() { return /* binding */ useParams; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/invariant/browser.js
var browser = __webpack_require__(1143);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);
// EXTERNAL MODULE: ./.cache/react-lifecycles-compat.js
var react_lifecycles_compat = __webpack_require__(3639);
;// CONCATENATED MODULE: ./node_modules/@gatsbyjs/reach-router/es/lib/utils.js
 ////////////////////////////////////////////////////////////////////////////////
// startsWith(string, search) - Check if `string` starts with `search`

var startsWith = function startsWith(string, search) {
  return string.substr(0, search.length) === search;
}; ////////////////////////////////////////////////////////////////////////////////
// pick(routes, uri)
//
// Ranks and picks the best route to match. Each segment gets the highest
// amount of points, then the type of segment gets an additional amount of
// points where
//
//     static > dynamic > splat > root
//
// This way we don't have to worry about the order of our routes, let the
// computers do it.
//
// A route looks like this
//
//     { path, default, value }
//
// And a returned match looks like:
//
//     { route, params, uri }
//
// I know, I should use TypeScript not comments for these types.


var pick = function pick(routes, uri) {
  var match = void 0;
  var default_ = void 0;

  var _uri$split = uri.split("?"),
      uriPathname = _uri$split[0];

  var uriSegments = segmentize(uriPathname);
  var isRootUri = uriSegments[0] === "";
  var ranked = rankRoutes(routes);

  for (var i = 0, l = ranked.length; i < l; i++) {
    var missed = false;
    var route = ranked[i].route;

    if (route.default) {
      default_ = {
        route: route,
        params: {},
        uri: uri
      };
      continue;
    }

    var routeSegments = segmentize(route.path);
    var params = {};
    var max = Math.max(uriSegments.length, routeSegments.length);
    var index = 0;

    for (; index < max; index++) {
      var routeSegment = routeSegments[index];
      var uriSegment = uriSegments[index];

      if (isSplat(routeSegment)) {
        // Hit a splat, just grab the rest, and return a match
        // uri:   /files/documents/work
        // route: /files/*
        var param = routeSegment.slice(1) || "*";
        params[param] = uriSegments.slice(index).map(decodeURIComponent).join("/");
        break;
      }

      if (uriSegment === undefined) {
        // URI is shorter than the route, no match
        // uri:   /users
        // route: /users/:userId
        missed = true;
        break;
      }

      var dynamicMatch = paramRe.exec(routeSegment);

      if (dynamicMatch && !isRootUri) {
        var matchIsNotReserved = reservedNames.indexOf(dynamicMatch[1]) === -1;
        !matchIsNotReserved ?  false ? 0 : browser_default()(false) : void 0;
        var value = decodeURIComponent(uriSegment);
        params[dynamicMatch[1]] = value;
      } else if (routeSegment !== uriSegment) {
        // Current segments don't match, not dynamic, not splat, so no match
        // uri:   /users/123/settings
        // route: /users/:id/profile
        missed = true;
        break;
      }
    }

    if (!missed) {
      match = {
        route: route,
        params: params,
        uri: "/" + uriSegments.slice(0, index).join("/")
      };
      break;
    }
  }

  return match || default_ || null;
}; ////////////////////////////////////////////////////////////////////////////////
// match(path, uri) - Matches just one path to a uri, also lol


var match = function match(path, uri) {
  return pick([{
    path: path
  }], uri);
}; ////////////////////////////////////////////////////////////////////////////////
// resolve(to, basepath)
//
// Resolves URIs as though every path is a directory, no files.  Relative URIs
// in the browser can feel awkward because not only can you be "in a directory"
// you can be "at a file", too. For example
//
//     browserSpecResolve('foo', '/bar/') => /bar/foo
//     browserSpecResolve('foo', '/bar') => /foo
//
// But on the command line of a file system, it's not as complicated, you can't
// `cd` from a file, only directories.  This way, links have to know less about
// their current path. To go deeper you can do this:
//
//     <Link to="deeper"/>
//     // instead of
//     <Link to=`{${props.uri}/deeper}`/>
//
// Just like `cd`, if you want to go deeper from the command line, you do this:
//
//     cd deeper
//     # not
//     cd $(pwd)/deeper
//
// By treating every path as a directory, linking to relative paths should
// require less contextual information and (fingers crossed) be more intuitive.


var resolve = function resolve(to, base) {
  // /foo/bar, /baz/qux => /foo/bar
  if (startsWith(to, "/")) {
    return to;
  }

  var _to$split = to.split("?"),
      toPathname = _to$split[0],
      toQuery = _to$split[1];

  var _base$split = base.split("?"),
      basePathname = _base$split[0];

  var toSegments = segmentize(toPathname);
  var baseSegments = segmentize(basePathname); // ?a=b, /users?b=c => /users?a=b

  if (toSegments[0] === "") {
    return addQuery(basePathname, toQuery);
  } // profile, /users/789 => /users/789/profile


  if (!startsWith(toSegments[0], ".")) {
    var pathname = baseSegments.concat(toSegments).join("/");
    return addQuery((basePathname === "/" ? "" : "/") + pathname, toQuery);
  } // ./         /users/123  =>  /users/123
  // ../        /users/123  =>  /users
  // ../..      /users/123  =>  /
  // ../../one  /a/b/c/d    =>  /a/b/one
  // .././one   /a/b/c/d    =>  /a/b/c/one


  var allSegments = baseSegments.concat(toSegments);
  var segments = [];

  for (var i = 0, l = allSegments.length; i < l; i++) {
    var segment = allSegments[i];
    if (segment === "..") segments.pop();else if (segment !== ".") segments.push(segment);
  }

  return addQuery("/" + segments.join("/"), toQuery);
}; ////////////////////////////////////////////////////////////////////////////////
// insertParams(path, params)


var insertParams = function insertParams(path, params) {
  var _path$split = path.split("?"),
      pathBase = _path$split[0],
      _path$split$ = _path$split[1],
      query = _path$split$ === undefined ? "" : _path$split$;

  var segments = segmentize(pathBase);
  var constructedPath = "/" + segments.map(function (segment) {
    var match = paramRe.exec(segment);
    return match ? params[match[1]] : segment;
  }).join("/");
  var _params$location = params.location;
  _params$location = _params$location === undefined ? {} : _params$location;
  var _params$location$sear = _params$location.search,
      search = _params$location$sear === undefined ? "" : _params$location$sear;
  var searchSplit = search.split("?")[1] || "";
  constructedPath = addQuery(constructedPath, query, searchSplit);
  return constructedPath;
};

var validateRedirect = function validateRedirect(from, to) {
  var filter = function filter(segment) {
    return isDynamic(segment);
  };

  var fromString = segmentize(from).filter(filter).sort().join("/");
  var toString = segmentize(to).filter(filter).sort().join("/");
  return fromString === toString;
}; ////////////////////////////////////////////////////////////////////////////////
// Junk


var paramRe = /^:(.+)/;
var SEGMENT_POINTS = 4;
var STATIC_POINTS = 3;
var DYNAMIC_POINTS = 2;
var SPLAT_PENALTY = 1;
var ROOT_POINTS = 1;

var isRootSegment = function isRootSegment(segment) {
  return segment === "";
};

var isDynamic = function isDynamic(segment) {
  return paramRe.test(segment);
};

var isSplat = function isSplat(segment) {
  return segment && segment[0] === "*";
};

var rankRoute = function rankRoute(route, index) {
  var score = route.default ? 0 : segmentize(route.path).reduce(function (score, segment) {
    score += SEGMENT_POINTS;
    if (isRootSegment(segment)) score += ROOT_POINTS;else if (isDynamic(segment)) score += DYNAMIC_POINTS;else if (isSplat(segment)) score -= SEGMENT_POINTS + SPLAT_PENALTY;else score += STATIC_POINTS;
    return score;
  }, 0);
  return {
    route: route,
    score: score,
    index: index
  };
};

var rankRoutes = function rankRoutes(routes) {
  return routes.map(rankRoute).sort(function (a, b) {
    return a.score < b.score ? 1 : a.score > b.score ? -1 : a.index - b.index;
  });
};

var segmentize = function segmentize(uri) {
  return uri // strip starting/ending slashes
  .replace(/(^\/+|\/+$)/g, "").split("/");
};

var addQuery = function addQuery(pathname) {
  for (var _len = arguments.length, query = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    query[_key - 1] = arguments[_key];
  }

  query = query.filter(function (q) {
    return q && q.length > 0;
  });
  return pathname + (query && query.length > 0 ? "?" + query.join("&") : "");
};

var reservedNames = ["uri", "path"];
/**
 * Shallow compares two objects.
 * @param {Object} obj1 The first object to compare.
 * @param {Object} obj2 The second object to compare.
 */

var shallowCompare = function shallowCompare(obj1, obj2) {
  var obj1Keys = Object.keys(obj1);
  return obj1Keys.length === Object.keys(obj2).length && obj1Keys.every(function (key) {
    return obj2.hasOwnProperty(key) && obj1[key] === obj2[key];
  });
}; ////////////////////////////////////////////////////////////////////////////////



;// CONCATENATED MODULE: ./node_modules/@gatsbyjs/reach-router/es/lib/history.js
var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var getLocation = function getLocation(source) {
  var _source$location = source.location,
      search = _source$location.search,
      hash = _source$location.hash,
      href = _source$location.href,
      origin = _source$location.origin,
      protocol = _source$location.protocol,
      host = _source$location.host,
      hostname = _source$location.hostname,
      port = _source$location.port;
  var pathname = source.location.pathname;

  if (!pathname && href && canUseDOM) {
    var url = new URL(href);
    pathname = url.pathname;
  }

  return {
    pathname: encodeURI(decodeURI(pathname)),
    search: search,
    hash: hash,
    href: href,
    origin: origin,
    protocol: protocol,
    host: host,
    hostname: hostname,
    port: port,
    state: source.history.state,
    key: source.history.state && source.history.state.key || "initial"
  };
};

var createHistory = function createHistory(source, options) {
  var listeners = [];
  var location = getLocation(source);
  var transitioning = false;

  var resolveTransition = function resolveTransition() {};

  return {
    get location() {
      return location;
    },

    get transitioning() {
      return transitioning;
    },

    _onTransitionComplete: function _onTransitionComplete() {
      transitioning = false;
      resolveTransition();
    },
    listen: function listen(listener) {
      listeners.push(listener);

      var popstateListener = function popstateListener() {
        location = getLocation(source);
        listener({
          location: location,
          action: "POP"
        });
      };

      source.addEventListener("popstate", popstateListener);
      return function () {
        source.removeEventListener("popstate", popstateListener);
        listeners = listeners.filter(function (fn) {
          return fn !== listener;
        });
      };
    },
    navigate: function navigate(to) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          state = _ref.state,
          _ref$replace = _ref.replace,
          replace = _ref$replace === undefined ? false : _ref$replace;

      if (typeof to === "number") {
        source.history.go(to);
      } else {
        state = _extends({}, state, {
          key: Date.now() + ""
        }); // try...catch iOS Safari limits to 100 pushState calls

        try {
          if (transitioning || replace) {
            source.history.replaceState(state, null, to);
          } else {
            source.history.pushState(state, null, to);
          }
        } catch (e) {
          source.location[replace ? "replace" : "assign"](to);
        }
      }

      location = getLocation(source);
      transitioning = true;
      var transition = new Promise(function (res) {
        return resolveTransition = res;
      });
      listeners.forEach(function (listener) {
        return listener({
          location: location,
          action: "PUSH"
        });
      });
      return transition;
    }
  };
}; ////////////////////////////////////////////////////////////////////////////////
// Stores history entries in memory for testing or other platforms like Native


var createMemorySource = function createMemorySource() {
  var initialPath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/";
  var searchIndex = initialPath.indexOf("?");
  var initialLocation = {
    pathname: searchIndex > -1 ? initialPath.substr(0, searchIndex) : initialPath,
    search: searchIndex > -1 ? initialPath.substr(searchIndex) : ""
  };
  var index = 0;
  var stack = [initialLocation];
  var states = [null];
  return {
    get location() {
      return stack[index];
    },

    addEventListener: function addEventListener(name, fn) {},
    removeEventListener: function removeEventListener(name, fn) {},
    history: {
      get entries() {
        return stack;
      },

      get index() {
        return index;
      },

      get state() {
        return states[index];
      },

      pushState: function pushState(state, _, uri) {
        var _uri$split = uri.split("?"),
            pathname = _uri$split[0],
            _uri$split$ = _uri$split[1],
            search = _uri$split$ === undefined ? "" : _uri$split$;

        index++;
        stack.push({
          pathname: pathname,
          search: search.length ? "?" + search : search
        });
        states.push(state);
      },
      replaceState: function replaceState(state, _, uri) {
        var _uri$split2 = uri.split("?"),
            pathname = _uri$split2[0],
            _uri$split2$ = _uri$split2[1],
            search = _uri$split2$ === undefined ? "" : _uri$split2$;

        stack[index] = {
          pathname: pathname,
          search: search
        };
        states[index] = state;
      },
      go: function go(to) {
        var newIndex = index + to;

        if (newIndex < 0 || newIndex > states.length - 1) {
          return;
        }

        index = newIndex;
      }
    }
  };
}; ////////////////////////////////////////////////////////////////////////////////
// global history - uses window.history as the source if available, otherwise a
// memory history


var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);

var getSource = function getSource() {
  return canUseDOM ? window : createMemorySource();
};

var globalHistory = createHistory(getSource());
var history_navigate = globalHistory.navigate; ////////////////////////////////////////////////////////////////////////////////


;// CONCATENATED MODULE: ./node_modules/@gatsbyjs/reach-router/es/index.js
var es_extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
/* eslint-disable jsx-a11y/anchor-has-content */






 ////////////////////////////////////////////////////////////////////////////////

var createNamedContext = function createNamedContext(name, defaultValue) {
  var Ctx = (0,react.createContext)(defaultValue);
  Ctx.displayName = name;
  return Ctx;
}; ////////////////////////////////////////////////////////////////////////////////
// Location Context/Provider


var LocationContext = createNamedContext("Location"); // sets up a listener if there isn't one already so apps don't need to be
// wrapped in some top level provider

var Location = function Location(_ref) {
  var children = _ref.children;
  return react.createElement(LocationContext.Consumer, null, function (context) {
    return context ? children(context) : react.createElement(LocationProvider, null, children);
  });
};

var LocationProvider = function (_React$Component) {
  _inherits(LocationProvider, _React$Component);

  function LocationProvider() {
    var _temp, _this, _ret;

    _classCallCheck(this, LocationProvider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      context: _this.getContext(),
      refs: {
        unlisten: null
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  LocationProvider.prototype.getContext = function getContext() {
    var _props$history = this.props.history,
        navigate = _props$history.navigate,
        location = _props$history.location;
    return {
      navigate: navigate,
      location: location
    };
  };

  LocationProvider.prototype.componentDidCatch = function componentDidCatch(error, info) {
    if (isRedirect(error)) {
      var _navigate = this.props.history.navigate;

      _navigate(error.uri, {
        replace: true
      });
    } else {
      throw error;
    }
  };

  LocationProvider.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (prevState.context.location !== this.state.context.location) {
      this.props.history._onTransitionComplete();
    }
  };

  LocationProvider.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    var refs = this.state.refs,
        history = this.props.history;

    history._onTransitionComplete();

    refs.unlisten = history.listen(function () {
      Promise.resolve().then(function () {
        // TODO: replace rAF with react deferred update API when it's ready https://github.com/facebook/react/issues/13306
        requestAnimationFrame(function () {
          if (!_this2.unmounted) {
            _this2.setState(function () {
              return {
                context: _this2.getContext()
              };
            });
          }
        });
      });
    });
  };

  LocationProvider.prototype.componentWillUnmount = function componentWillUnmount() {
    var refs = this.state.refs;
    this.unmounted = true;
    refs.unlisten();
  };

  LocationProvider.prototype.render = function render() {
    var context = this.state.context,
        children = this.props.children;
    return react.createElement(LocationContext.Provider, {
      value: context
    }, typeof children === "function" ? children(context) : children || null);
  };

  return LocationProvider;
}(react.Component); ////////////////////////////////////////////////////////////////////////////////


LocationProvider.defaultProps = {
  history: globalHistory
};
 false ? 0 : void 0;

var ServerLocation = function ServerLocation(_ref2) {
  var url = _ref2.url,
      children = _ref2.children;
  var searchIndex = url.indexOf("?");
  var searchExists = searchIndex > -1;
  var pathname = void 0;
  var search = "";
  var hash = "";

  if (searchExists) {
    pathname = url.substring(0, searchIndex);
    search = url.substring(searchIndex);
  } else {
    pathname = url;
  }

  return react.createElement(LocationContext.Provider, {
    value: {
      location: {
        pathname: pathname,
        search: search,
        hash: hash
      },
      navigate: function navigate() {
        throw new Error("You can't call navigate on the server.");
      }
    }
  }, children);
}; ////////////////////////////////////////////////////////////////////////////////
// Sets baseuri and basepath for nested routers and links


var BaseContext = createNamedContext("Base", {
  baseuri: "/",
  basepath: "/",
  navigate: globalHistory.navigate
}); ////////////////////////////////////////////////////////////////////////////////
// The main event, welcome to the show everybody.

var Router = function Router(props) {
  return react.createElement(BaseContext.Consumer, null, function (baseContext) {
    return react.createElement(Location, null, function (locationContext) {
      return react.createElement(RouterImpl, es_extends({}, baseContext, locationContext, props));
    });
  });
};

var RouterImpl = function (_React$PureComponent) {
  _inherits(RouterImpl, _React$PureComponent);

  function RouterImpl() {
    _classCallCheck(this, RouterImpl);

    return _possibleConstructorReturn(this, _React$PureComponent.apply(this, arguments));
  }

  RouterImpl.prototype.render = function render() {
    var _props = this.props,
        location = _props.location,
        _navigate2 = _props.navigate,
        basepath = _props.basepath,
        primary = _props.primary,
        children = _props.children,
        baseuri = _props.baseuri,
        _props$component = _props.component,
        component = _props$component === undefined ? "div" : _props$component,
        domProps = _objectWithoutProperties(_props, ["location", "navigate", "basepath", "primary", "children", "baseuri", "component"]);

    var routes = react.Children.toArray(children).reduce(function (array, child) {
      var routes = createRoute(basepath)(child);
      return array.concat(routes);
    }, []);
    var pathname = location.pathname;
    var match = pick(routes, pathname);

    if (match) {
      var params = match.params,
          uri = match.uri,
          route = match.route,
          element = match.route.value; // remove the /* from the end for child routes relative paths

      basepath = route.default ? basepath : route.path.replace(/\*$/, "");

      var props = es_extends({}, params, {
        uri: uri,
        location: location,
        navigate: function navigate(to, options) {
          return _navigate2(resolve(to, uri), options);
        }
      });

      var clone = react.cloneElement(element, props, element.props.children ? react.createElement(Router, {
        location: location,
        primary: primary
      }, element.props.children) : undefined); // using 'div' for < 16.3 support

      var FocusWrapper = primary ? FocusHandler : component; // don't pass any props to 'div'

      var wrapperProps = primary ? es_extends({
        uri: uri,
        location: location,
        component: component
      }, domProps) : domProps;
      return react.createElement(BaseContext.Provider, {
        value: {
          baseuri: uri,
          basepath: basepath,
          navigate: props.navigate
        }
      }, react.createElement(FocusWrapper, wrapperProps, clone));
    } else {
      // Not sure if we want this, would require index routes at every level
      // warning(
      //   false,
      //   `<Router basepath="${basepath}">\n\nNothing matched:\n\t${
      //     location.pathname
      //   }\n\nPaths checked: \n\t${routes
      //     .map(route => route.path)
      //     .join(
      //       "\n\t"
      //     )}\n\nTo get rid of this warning, add a default NotFound component as child of Router:
      //   \n\tlet NotFound = () => <div>Not Found!</div>
      //   \n\t<Router>\n\t  <NotFound default/>\n\t  {/* ... */}\n\t</Router>`
      // );
      return null;
    }
  };

  return RouterImpl;
}(react.PureComponent);

RouterImpl.defaultProps = {
  primary: true
};
var FocusContext = createNamedContext("Focus");

var FocusHandler = function FocusHandler(_ref3) {
  var uri = _ref3.uri,
      location = _ref3.location,
      component = _ref3.component,
      domProps = _objectWithoutProperties(_ref3, ["uri", "location", "component"]);

  return react.createElement(FocusContext.Consumer, null, function (requestFocus) {
    return react.createElement(FocusHandlerImpl, es_extends({}, domProps, {
      component: component,
      requestFocus: requestFocus,
      uri: uri,
      location: location
    }));
  });
}; // don't focus on initial render


var initialRender = true;
var focusHandlerCount = 0;

var FocusHandlerImpl = function (_React$Component2) {
  _inherits(FocusHandlerImpl, _React$Component2);

  function FocusHandlerImpl() {
    var _temp2, _this4, _ret2;

    _classCallCheck(this, FocusHandlerImpl);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this4 = _possibleConstructorReturn(this, _React$Component2.call.apply(_React$Component2, [this].concat(args))), _this4), _this4.state = {}, _this4.requestFocus = function (node) {
      if (!_this4.state.shouldFocus && node) {
        node.focus();
      }
    }, _temp2), _possibleConstructorReturn(_this4, _ret2);
  }

  FocusHandlerImpl.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var initial = prevState.uri == null;

    if (initial) {
      return es_extends({
        shouldFocus: true
      }, nextProps);
    } else {
      var myURIChanged = nextProps.uri !== prevState.uri;
      var navigatedUpToMe = prevState.location.pathname !== nextProps.location.pathname && nextProps.location.pathname === nextProps.uri;
      return es_extends({
        shouldFocus: myURIChanged || navigatedUpToMe
      }, nextProps);
    }
  };

  FocusHandlerImpl.prototype.componentDidMount = function componentDidMount() {
    focusHandlerCount++;
    this.focus();
  };

  FocusHandlerImpl.prototype.componentWillUnmount = function componentWillUnmount() {
    focusHandlerCount--;

    if (focusHandlerCount === 0) {
      initialRender = true;
    }
  };

  FocusHandlerImpl.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (prevProps.location !== this.props.location && this.state.shouldFocus) {
      this.focus();
    }
  };

  FocusHandlerImpl.prototype.focus = function focus() {
    if (false) {}

    var requestFocus = this.props.requestFocus;

    if (requestFocus) {
      requestFocus(this.node);
    } else {
      if (initialRender) {
        initialRender = false;
      } else if (this.node) {
        // React polyfills [autofocus] and it fires earlier than cDM,
        // so we were stealing focus away, this line prevents that.
        if (!this.node.contains(document.activeElement)) {
          this.node.focus();
        }
      }
    }
  };

  FocusHandlerImpl.prototype.render = function render() {
    var _this5 = this;

    var _props2 = this.props,
        children = _props2.children,
        style = _props2.style,
        requestFocus = _props2.requestFocus,
        _props2$component = _props2.component,
        Comp = _props2$component === undefined ? "div" : _props2$component,
        uri = _props2.uri,
        location = _props2.location,
        domProps = _objectWithoutProperties(_props2, ["children", "style", "requestFocus", "component", "uri", "location"]);

    return react.createElement(Comp, es_extends({
      style: es_extends({
        outline: "none"
      }, style),
      tabIndex: "-1",
      ref: function ref(n) {
        return _this5.node = n;
      }
    }, domProps), react.createElement(FocusContext.Provider, {
      value: this.requestFocus
    }, this.props.children));
  };

  return FocusHandlerImpl;
}(react.Component);

(0,react_lifecycles_compat/* polyfill */.O)(FocusHandlerImpl);

var k = function k() {}; ////////////////////////////////////////////////////////////////////////////////


var forwardRef = react.forwardRef;

if (typeof forwardRef === "undefined") {
  forwardRef = function forwardRef(C) {
    return C;
  };
}

var Link = forwardRef(function (_ref4, ref) {
  var innerRef = _ref4.innerRef,
      props = _objectWithoutProperties(_ref4, ["innerRef"]);

  return react.createElement(BaseContext.Consumer, null, function (_ref5) {
    var basepath = _ref5.basepath,
        baseuri = _ref5.baseuri;
    return react.createElement(Location, null, function (_ref6) {
      var location = _ref6.location,
          navigate = _ref6.navigate;

      var to = props.to,
          state = props.state,
          replace = props.replace,
          _props$getProps = props.getProps,
          getProps = _props$getProps === undefined ? k : _props$getProps,
          anchorProps = _objectWithoutProperties(props, ["to", "state", "replace", "getProps"]);

      var href = resolve(to, baseuri);
      var encodedHref = encodeURI(href);
      var isCurrent = location.pathname === encodedHref;
      var isPartiallyCurrent = startsWith(location.pathname, encodedHref);
      return react.createElement("a", es_extends({
        ref: ref || innerRef,
        "aria-current": isCurrent ? "page" : undefined
      }, anchorProps, getProps({
        isCurrent: isCurrent,
        isPartiallyCurrent: isPartiallyCurrent,
        href: href,
        location: location
      }), {
        href: href,
        onClick: function onClick(event) {
          if (anchorProps.onClick) anchorProps.onClick(event);

          if (shouldNavigate(event)) {
            event.preventDefault();
            var shouldReplace = replace;

            if (typeof replace !== "boolean" && isCurrent) {
              var _location$state = es_extends({}, location.state),
                  key = _location$state.key,
                  restState = _objectWithoutProperties(_location$state, ["key"]);

              shouldReplace = shallowCompare(es_extends({}, state), restState);
            }

            navigate(href, {
              state: state,
              replace: shouldReplace
            });
          }
        }
      }));
    });
  });
});
Link.displayName = "Link";
 false ? 0 : void 0; ////////////////////////////////////////////////////////////////////////////////

function RedirectRequest(uri) {
  this.uri = uri;
}

var isRedirect = function isRedirect(o) {
  return o instanceof RedirectRequest;
};

var redirectTo = function redirectTo(to) {
  throw new RedirectRequest(to);
};

var RedirectImpl = function (_React$Component3) {
  _inherits(RedirectImpl, _React$Component3);

  function RedirectImpl() {
    _classCallCheck(this, RedirectImpl);

    return _possibleConstructorReturn(this, _React$Component3.apply(this, arguments));
  } // Support React < 16 with this hook


  RedirectImpl.prototype.componentDidMount = function componentDidMount() {
    var _props3 = this.props,
        navigate = _props3.navigate,
        to = _props3.to,
        from = _props3.from,
        _props3$replace = _props3.replace,
        replace = _props3$replace === undefined ? true : _props3$replace,
        state = _props3.state,
        noThrow = _props3.noThrow,
        baseuri = _props3.baseuri,
        props = _objectWithoutProperties(_props3, ["navigate", "to", "from", "replace", "state", "noThrow", "baseuri"]);

    Promise.resolve().then(function () {
      var resolvedTo = resolve(to, baseuri);
      navigate(insertParams(resolvedTo, props), {
        replace: replace,
        state: state
      });
    });
  };

  RedirectImpl.prototype.render = function render() {
    var _props4 = this.props,
        navigate = _props4.navigate,
        to = _props4.to,
        from = _props4.from,
        replace = _props4.replace,
        state = _props4.state,
        noThrow = _props4.noThrow,
        baseuri = _props4.baseuri,
        props = _objectWithoutProperties(_props4, ["navigate", "to", "from", "replace", "state", "noThrow", "baseuri"]);

    var resolvedTo = resolve(to, baseuri);
    if (!noThrow) redirectTo(insertParams(resolvedTo, props));
    return null;
  };

  return RedirectImpl;
}(react.Component);

var Redirect = function Redirect(props) {
  return react.createElement(BaseContext.Consumer, null, function (_ref7) {
    var baseuri = _ref7.baseuri;
    return react.createElement(Location, null, function (locationContext) {
      return react.createElement(RedirectImpl, es_extends({}, locationContext, {
        baseuri: baseuri
      }, props));
    });
  });
};

 false ? 0 : void 0; ////////////////////////////////////////////////////////////////////////////////

var Match = function Match(_ref8) {
  var path = _ref8.path,
      children = _ref8.children;
  return react.createElement(BaseContext.Consumer, null, function (_ref9) {
    var baseuri = _ref9.baseuri;
    return react.createElement(Location, null, function (_ref10) {
      var navigate = _ref10.navigate,
          location = _ref10.location;
      var resolvedPath = resolve(path, baseuri);
      var result = match(resolvedPath, location.pathname);
      return children({
        navigate: navigate,
        location: location,
        match: result ? es_extends({}, result.params, {
          uri: result.uri,
          path: path
        }) : null
      });
    });
  });
}; ////////////////////////////////////////////////////////////////////////////////
// Hooks


var useLocation = function useLocation() {
  var context = (0,react.useContext)(LocationContext);

  if (!context) {
    throw new Error("useLocation hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");
  }

  return context.location;
};

var useNavigate = function useNavigate() {
  var context = (0,react.useContext)(BaseContext);

  if (!context) {
    throw new Error("useNavigate hook was used but a BaseContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");
  }

  return context.navigate;
};

var useParams = function useParams() {
  var context = (0,react.useContext)(BaseContext);

  if (!context) {
    throw new Error("useParams hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");
  }

  var location = useLocation();
  var results = match(context.basepath, location.pathname);
  return results ? results.params : null;
};

var useMatch = function useMatch(path) {
  if (!path) {
    throw new Error("useMatch(path: string) requires an argument of a string to match against");
  }

  var context = (0,react.useContext)(BaseContext);

  if (!context) {
    throw new Error("useMatch hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");
  }

  var location = useLocation();
  var resolvedPath = resolve(path, context.baseuri);
  var result = match(resolvedPath, location.pathname);
  return result ? es_extends({}, result.params, {
    uri: result.uri,
    path: path
  }) : null;
}; ////////////////////////////////////////////////////////////////////////////////
// Junk


var stripSlashes = function stripSlashes(str) {
  return str.replace(/(^\/+|\/+$)/g, "");
};

var createRoute = function createRoute(basepath) {
  return function (element) {
    if (!element) {
      return null;
    }

    if (element.type === react.Fragment && element.props.children) {
      return react.Children.map(element.props.children, createRoute(basepath));
    }

    !(element.props.path || element.props.default || element.type === Redirect) ?  false ? 0 : browser_default()(false) : void 0;
    !!(element.type === Redirect && (!element.props.from || !element.props.to)) ?  false ? 0 : browser_default()(false) : void 0;
    !!(element.type === Redirect && !validateRedirect(element.props.from, element.props.to)) ?  false ? 0 : browser_default()(false) : void 0;

    if (element.props.default) {
      return {
        value: element,
        default: true
      };
    }

    var elementPath = element.type === Redirect ? element.props.from : element.props.path;
    var path = elementPath === "/" ? basepath : stripSlashes(basepath) + "/" + stripSlashes(elementPath);
    return {
      value: element,
      default: element.props.default,
      path: element.props.children ? stripSlashes(path) + "/*" : path
    };
  };
};

var shouldNavigate = function shouldNavigate(event) {
  return !event.defaultPrevented && event.button === 0 && !(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}; ////////////////////////////////////////////////////////////////////////




/***/ }),

/***/ 1143:
/***/ (function(module) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (false) {}

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ 5666:
/***/ (function(module) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [774], function() { return __webpack_exec__(9865); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=app-e8aaf5b2d056c2ad1f77.js.map