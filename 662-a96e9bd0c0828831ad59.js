(self["webpackChunk"] = self["webpackChunk"] || []).push([[662],{

/***/ 662:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scopeCss": function() { return /* binding */ scopeCss; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_stencil_gatsby_bug_stencil_gatsby_bug_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7329);
/* harmony import */ var core_js_modules_es_string_trim_end_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8702);
/* harmony import */ var core_js_modules_es_string_trim_end_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_end_js__WEBPACK_IMPORTED_MODULE_0__);



/*
 Stencil Client Platform v2.5.2 | MIT Licensed | https://stenciljs.com
 */

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 *
 * This file is a port of shadowCSS from webcomponents.js to TypeScript.
 * https://github.com/webcomponents/webcomponentsjs/blob/4efecd7e0e/src/ShadowCSS/ShadowCSS.js
 * https://github.com/angular/angular/blob/master/packages/compiler/src/shadow_css.ts
 */
var safeSelector = function safeSelector(selector) {
  var placeholders = [];
  var index = 0;
  var content; // Replaces attribute selectors with placeholders.
  // The WS in [attr="va lue"] would otherwise be interpreted as a selector separator.

  selector = selector.replace(/(\[[^\]]*\])/g, function (_, keep) {
    var replaceBy = "__ph-".concat(index, "__");
    placeholders.push(keep);
    index++;
    return replaceBy;
  }); // Replaces the expression in `:nth-child(2n + 1)` with a placeholder.
  // WS and "+" would otherwise be interpreted as selector separators.

  content = selector.replace(/(:nth-[-\w]+)(\([^)]+\))/g, function (_, pseudo, exp) {
    var replaceBy = "__ph-".concat(index, "__");
    placeholders.push(exp);
    index++;
    return pseudo + replaceBy;
  });
  var ss = {
    content: content,
    placeholders: placeholders
  };
  return ss;
};

var restoreSafeSelector = function restoreSafeSelector(placeholders, content) {
  return content.replace(/__ph-(\d+)__/g, function (_, index) {
    return placeholders[+index];
  });
};

var _polyfillHost = '-shadowcsshost';
var _polyfillSlotted = '-shadowcssslotted'; // note: :host-context pre-processed to -shadowcsshostcontext.

var _polyfillHostContext = '-shadowcsscontext';

var _parenSuffix = ')(?:\\((' + '(?:\\([^)(]*\\)|[^)(]*)+?' + ')\\))?([^,{]*)';

var _cssColonHostRe = new RegExp('(' + _polyfillHost + _parenSuffix, 'gim');

var _cssColonHostContextRe = new RegExp('(' + _polyfillHostContext + _parenSuffix, 'gim');

var _cssColonSlottedRe = new RegExp('(' + _polyfillSlotted + _parenSuffix, 'gim');

var _polyfillHostNoCombinator = _polyfillHost + '-no-combinator';

var _polyfillHostNoCombinatorRe = /-shadowcsshost-no-combinator([^\s]*)/;
var _shadowDOMSelectorsRe = [/::shadow/g, /::content/g];
var _selectorReSuffix = '([>\\s~+[.,{:][\\s\\S]*)?$';
var _polyfillHostRe = /-shadowcsshost/gim;
var _colonHostRe = /:host/gim;
var _colonSlottedRe = /::slotted/gim;
var _colonHostContextRe = /:host-context/gim;
var _commentRe = /\/\*\s*[\s\S]*?\*\//g;

var stripComments = function stripComments(input) {
  return input.replace(_commentRe, '');
};

var _commentWithHashRe = /\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g;

var extractCommentsWithHash = function extractCommentsWithHash(input) {
  return input.match(_commentWithHashRe) || [];
};

var _ruleRe = /(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g;
var _curlyRe = /([{}])/g;
var OPEN_CURLY = '{';
var CLOSE_CURLY = '}';
var BLOCK_PLACEHOLDER = '%BLOCK%';

var processRules = function processRules(input, ruleCallback) {
  var inputWithEscapedBlocks = escapeBlocks(input);
  var nextBlockIndex = 0;
  return inputWithEscapedBlocks.escapedString.replace(_ruleRe, function () {
    var selector = arguments.length <= 2 ? undefined : arguments[2];
    var content = '';
    var suffix = arguments.length <= 4 ? undefined : arguments[4];
    var contentPrefix = '';

    if (suffix && suffix.startsWith('{' + BLOCK_PLACEHOLDER)) {
      content = inputWithEscapedBlocks.blocks[nextBlockIndex++];
      suffix = suffix.substring(BLOCK_PLACEHOLDER.length + 1);
      contentPrefix = '{';
    }

    var cssRule = {
      selector: selector,
      content: content
    };
    var rule = ruleCallback(cssRule);
    return "".concat(arguments.length <= 1 ? undefined : arguments[1]).concat(rule.selector).concat(arguments.length <= 3 ? undefined : arguments[3]).concat(contentPrefix).concat(rule.content).concat(suffix);
  });
};

var escapeBlocks = function escapeBlocks(input) {
  var inputParts = input.split(_curlyRe);
  var resultParts = [];
  var escapedBlocks = [];
  var bracketCount = 0;
  var currentBlockParts = [];

  for (var partIndex = 0; partIndex < inputParts.length; partIndex++) {
    var part = inputParts[partIndex];

    if (part === CLOSE_CURLY) {
      bracketCount--;
    }

    if (bracketCount > 0) {
      currentBlockParts.push(part);
    } else {
      if (currentBlockParts.length > 0) {
        escapedBlocks.push(currentBlockParts.join(''));
        resultParts.push(BLOCK_PLACEHOLDER);
        currentBlockParts = [];
      }

      resultParts.push(part);
    }

    if (part === OPEN_CURLY) {
      bracketCount++;
    }
  }

  if (currentBlockParts.length > 0) {
    escapedBlocks.push(currentBlockParts.join(''));
    resultParts.push(BLOCK_PLACEHOLDER);
  }

  var strEscapedBlocks = {
    escapedString: resultParts.join(''),
    blocks: escapedBlocks
  };
  return strEscapedBlocks;
};

var insertPolyfillHostInCssText = function insertPolyfillHostInCssText(selector) {
  selector = selector.replace(_colonHostContextRe, _polyfillHostContext).replace(_colonHostRe, _polyfillHost).replace(_colonSlottedRe, _polyfillSlotted);
  return selector;
};

var convertColonRule = function convertColonRule(cssText, regExp, partReplacer) {
  // m[1] = :host(-context), m[2] = contents of (), m[3] rest of rule
  return cssText.replace(regExp, function () {
    for (var _len = arguments.length, m = new Array(_len), _key = 0; _key < _len; _key++) {
      m[_key] = arguments[_key];
    }

    if (m[2]) {
      var parts = m[2].split(',');
      var r = [];

      for (var i = 0; i < parts.length; i++) {
        var p = parts[i].trim();
        if (!p) break;
        r.push(partReplacer(_polyfillHostNoCombinator, p, m[3]));
      }

      return r.join(',');
    } else {
      return _polyfillHostNoCombinator + m[3];
    }
  });
};

var colonHostPartReplacer = function colonHostPartReplacer(host, part, suffix) {
  return host + part.replace(_polyfillHost, '') + suffix;
};

var convertColonHost = function convertColonHost(cssText) {
  return convertColonRule(cssText, _cssColonHostRe, colonHostPartReplacer);
};

var colonHostContextPartReplacer = function colonHostContextPartReplacer(host, part, suffix) {
  if (part.indexOf(_polyfillHost) > -1) {
    return colonHostPartReplacer(host, part, suffix);
  } else {
    return host + part + suffix + ', ' + part + ' ' + host + suffix;
  }
};

var convertColonSlotted = function convertColonSlotted(cssText, slotScopeId) {
  var slotClass = '.' + slotScopeId + ' > ';
  var selectors = [];
  cssText = cssText.replace(_cssColonSlottedRe, function () {
    for (var _len2 = arguments.length, m = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      m[_key2] = arguments[_key2];
    }

    if (m[2]) {
      var compound = m[2].trim();
      var suffix = m[3];
      var slottedSelector = slotClass + compound + suffix;
      var prefixSelector = '';

      for (var i = m[4] - 1; i >= 0; i--) {
        var char = m[5][i];

        if (char === '}' || char === ',') {
          break;
        }

        prefixSelector = char + prefixSelector;
      }

      var orgSelector = prefixSelector + slottedSelector;
      var addedSelector = "".concat(prefixSelector.trimRight()).concat(slottedSelector.trim());

      if (orgSelector.trim() !== addedSelector.trim()) {
        var updatedSelector = "".concat(addedSelector, ", ").concat(orgSelector);
        selectors.push({
          orgSelector: orgSelector,
          updatedSelector: updatedSelector
        });
      }

      return slottedSelector;
    } else {
      return _polyfillHostNoCombinator + m[3];
    }
  });
  return {
    selectors: selectors,
    cssText: cssText
  };
};

var convertColonHostContext = function convertColonHostContext(cssText) {
  return convertColonRule(cssText, _cssColonHostContextRe, colonHostContextPartReplacer);
};

var convertShadowDOMSelectors = function convertShadowDOMSelectors(cssText) {
  return _shadowDOMSelectorsRe.reduce(function (result, pattern) {
    return result.replace(pattern, ' ');
  }, cssText);
};

var makeScopeMatcher = function makeScopeMatcher(scopeSelector) {
  var lre = /\[/g;
  var rre = /\]/g;
  scopeSelector = scopeSelector.replace(lre, '\\[').replace(rre, '\\]');
  return new RegExp('^(' + scopeSelector + ')' + _selectorReSuffix, 'm');
};

var selectorNeedsScoping = function selectorNeedsScoping(selector, scopeSelector) {
  var re = makeScopeMatcher(scopeSelector);
  return !re.test(selector);
};

var applySimpleSelectorScope = function applySimpleSelectorScope(selector, scopeSelector, hostSelector) {
  // In Android browser, the lastIndex is not reset when the regex is used in String.replace()
  _polyfillHostRe.lastIndex = 0;

  if (_polyfillHostRe.test(selector)) {
    var replaceBy = ".".concat(hostSelector);
    return selector.replace(_polyfillHostNoCombinatorRe, function (_, selector) {
      return selector.replace(/([^:]*)(:*)(.*)/, function (_, before, colon, after) {
        return before + replaceBy + colon + after;
      });
    }).replace(_polyfillHostRe, replaceBy + ' ');
  }

  return scopeSelector + ' ' + selector;
};

var applyStrictSelectorScope = function applyStrictSelectorScope(selector, scopeSelector, hostSelector) {
  var isRe = /\[is=([^\]]*)\]/g;
  scopeSelector = scopeSelector.replace(isRe, function (_) {
    return arguments.length <= 1 ? undefined : arguments[1];
  });
  var className = '.' + scopeSelector;

  var _scopeSelectorPart = function _scopeSelectorPart(p) {
    var scopedP = p.trim();

    if (!scopedP) {
      return '';
    }

    if (p.indexOf(_polyfillHostNoCombinator) > -1) {
      scopedP = applySimpleSelectorScope(p, scopeSelector, hostSelector);
    } else {
      // remove :host since it should be unnecessary
      var t = p.replace(_polyfillHostRe, '');

      if (t.length > 0) {
        var matches = t.match(/([^:]*)(:*)(.*)/);

        if (matches) {
          scopedP = matches[1] + className + matches[2] + matches[3];
        }
      }
    }

    return scopedP;
  };

  var safeContent = safeSelector(selector);
  selector = safeContent.content;
  var scopedSelector = '';
  var startIndex = 0;
  var res;
  var sep = /( |>|\+|~(?!=))\s*/g; // If a selector appears before :host it should not be shimmed as it
  // matches on ancestor elements and not on elements in the host's shadow
  // `:host-context(div)` is transformed to
  // `-shadowcsshost-no-combinatordiv, div -shadowcsshost-no-combinator`
  // the `div` is not part of the component in the 2nd selectors and should not be scoped.
  // Historically `component-tag:host` was matching the component so we also want to preserve
  // this behavior to avoid breaking legacy apps (it should not match).
  // The behavior should be:
  // - `tag:host` -> `tag[h]` (this is to avoid breaking legacy apps, should not match anything)
  // - `tag :host` -> `tag [h]` (`tag` is not scoped because it's considered part of a
  //   `:host-context(tag)`)

  var hasHost = selector.indexOf(_polyfillHostNoCombinator) > -1; // Only scope parts after the first `-shadowcsshost-no-combinator` when it is present

  var shouldScope = !hasHost;

  while ((res = sep.exec(selector)) !== null) {
    var separator = res[1];

    var _part = selector.slice(startIndex, res.index).trim();

    shouldScope = shouldScope || _part.indexOf(_polyfillHostNoCombinator) > -1;
    var scopedPart = shouldScope ? _scopeSelectorPart(_part) : _part;
    scopedSelector += "".concat(scopedPart, " ").concat(separator, " ");
    startIndex = sep.lastIndex;
  }

  var part = selector.substring(startIndex);
  shouldScope = shouldScope || part.indexOf(_polyfillHostNoCombinator) > -1;
  scopedSelector += shouldScope ? _scopeSelectorPart(part) : part; // replace the placeholders with their original values

  return restoreSafeSelector(safeContent.placeholders, scopedSelector);
};

var scopeSelector = function scopeSelector(selector, scopeSelectorText, hostSelector, slotSelector) {
  return selector.split(',').map(function (shallowPart) {
    if (slotSelector && shallowPart.indexOf('.' + slotSelector) > -1) {
      return shallowPart.trim();
    }

    if (selectorNeedsScoping(shallowPart, scopeSelectorText)) {
      return applyStrictSelectorScope(shallowPart, scopeSelectorText, hostSelector).trim();
    } else {
      return shallowPart.trim();
    }
  }).join(', ');
};

var scopeSelectors = function scopeSelectors(cssText, scopeSelectorText, hostSelector, slotSelector, commentOriginalSelector) {
  return processRules(cssText, function (rule) {
    var selector = rule.selector;
    var content = rule.content;

    if (rule.selector[0] !== '@') {
      selector = scopeSelector(rule.selector, scopeSelectorText, hostSelector, slotSelector);
    } else if (rule.selector.startsWith('@media') || rule.selector.startsWith('@supports') || rule.selector.startsWith('@page') || rule.selector.startsWith('@document')) {
      content = scopeSelectors(rule.content, scopeSelectorText, hostSelector, slotSelector);
    }

    var cssRule = {
      selector: selector.replace(/\s{2,}/g, ' ').trim(),
      content: content
    };
    return cssRule;
  });
};

var scopeCssText = function scopeCssText(cssText, scopeId, hostScopeId, slotScopeId, commentOriginalSelector) {
  cssText = insertPolyfillHostInCssText(cssText);
  cssText = convertColonHost(cssText);
  cssText = convertColonHostContext(cssText);
  var slotted = convertColonSlotted(cssText, slotScopeId);
  cssText = slotted.cssText;
  cssText = convertShadowDOMSelectors(cssText);

  if (scopeId) {
    cssText = scopeSelectors(cssText, scopeId, hostScopeId, slotScopeId);
  }

  cssText = cssText.replace(/-shadowcsshost-no-combinator/g, ".".concat(hostScopeId));
  cssText = cssText.replace(/>\s*\*\s+([^{, ]+)/gm, ' $1 ');
  return {
    cssText: cssText.trim(),
    slottedSelectors: slotted.selectors
  };
};

var scopeCss = function scopeCss(cssText, scopeId, commentOriginalSelector) {
  var hostScopeId = scopeId + '-h';
  var slotScopeId = scopeId + '-s';
  var commentsWithHash = extractCommentsWithHash(cssText);
  cssText = stripComments(cssText);
  var orgSelectors = [];

  if (commentOriginalSelector) {
    var processCommentedSelector = function processCommentedSelector(rule) {
      var placeholder = "/*!@___".concat(orgSelectors.length, "___*/");
      var comment = "/*!@".concat(rule.selector, "*/");
      orgSelectors.push({
        placeholder: placeholder,
        comment: comment
      });
      rule.selector = placeholder + rule.selector;
      return rule;
    };

    cssText = processRules(cssText, function (rule) {
      if (rule.selector[0] !== '@') {
        return processCommentedSelector(rule);
      } else if (rule.selector.startsWith('@media') || rule.selector.startsWith('@supports') || rule.selector.startsWith('@page') || rule.selector.startsWith('@document')) {
        rule.content = processRules(rule.content, processCommentedSelector);
        return rule;
      }

      return rule;
    });
  }

  var scoped = scopeCssText(cssText, scopeId, hostScopeId, slotScopeId);
  cssText = [scoped.cssText].concat((0,_home_runner_work_stencil_gatsby_bug_stencil_gatsby_bug_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(commentsWithHash)).join('\n');

  if (commentOriginalSelector) {
    orgSelectors.forEach(function (_ref) {
      var placeholder = _ref.placeholder,
          comment = _ref.comment;
      cssText = cssText.replace(placeholder, comment);
    });
  }

  scoped.slottedSelectors.forEach(function (slottedSelector) {
    cssText = cssText.replace(slottedSelector.orgSelector, slottedSelector.updatedSelector);
  });
  return cssText;
};



/***/ }),

/***/ 9670:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(111);

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ 1318:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(5656);
var toLength = __webpack_require__(7466);
var toAbsoluteIndex = __webpack_require__(1400);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ 4326:
/***/ (function(module) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ 9920:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var has = __webpack_require__(6656);
var ownKeys = __webpack_require__(3887);
var getOwnPropertyDescriptorModule = __webpack_require__(1236);
var definePropertyModule = __webpack_require__(3070);

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ 8880:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var definePropertyModule = __webpack_require__(3070);
var createPropertyDescriptor = __webpack_require__(9114);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 9114:
/***/ (function(module) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ 9781:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(7293);

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ 317:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var isObject = __webpack_require__(111);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ 748:
/***/ (function(module) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ 2109:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var getOwnPropertyDescriptor = __webpack_require__(1236).f;
var createNonEnumerableProperty = __webpack_require__(8880);
var redefine = __webpack_require__(1320);
var setGlobal = __webpack_require__(3505);
var copyConstructorProperties = __webpack_require__(9920);
var isForced = __webpack_require__(4705);

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ 7293:
/***/ (function(module) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ 5005:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var path = __webpack_require__(857);
var global = __webpack_require__(7854);

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ 7854:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();


/***/ }),

/***/ 6656:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toObject = __webpack_require__(7908);

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function hasOwn(it, key) {
  return hasOwnProperty.call(toObject(it), key);
};


/***/ }),

/***/ 3501:
/***/ (function(module) {

module.exports = {};


/***/ }),

/***/ 4664:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var fails = __webpack_require__(7293);
var createElement = __webpack_require__(317);

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ 8361:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(7293);
var classof = __webpack_require__(4326);

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ 2788:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var store = __webpack_require__(5465);

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ 9909:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(8536);
var global = __webpack_require__(7854);
var isObject = __webpack_require__(111);
var createNonEnumerableProperty = __webpack_require__(8880);
var objectHas = __webpack_require__(6656);
var shared = __webpack_require__(5465);
var sharedKey = __webpack_require__(6200);
var hiddenKeys = __webpack_require__(3501);

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    if (wmhas.call(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (objectHas(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ 4705:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(7293);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ 111:
/***/ (function(module) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ 1913:
/***/ (function(module) {

module.exports = false;


/***/ }),

/***/ 8536:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var inspectSource = __webpack_require__(2788);

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ 3070:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var IE8_DOM_DEFINE = __webpack_require__(4664);
var anObject = __webpack_require__(9670);
var toPrimitive = __webpack_require__(7593);

// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ 1236:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var propertyIsEnumerableModule = __webpack_require__(5296);
var createPropertyDescriptor = __webpack_require__(9114);
var toIndexedObject = __webpack_require__(5656);
var toPrimitive = __webpack_require__(7593);
var has = __webpack_require__(6656);
var IE8_DOM_DEFINE = __webpack_require__(4664);

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ 8006:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(6324);
var enumBugKeys = __webpack_require__(748);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ 5181:
/***/ (function(__unused_webpack_module, exports) {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 6324:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var has = __webpack_require__(6656);
var toIndexedObject = __webpack_require__(5656);
var indexOf = __webpack_require__(1318).indexOf;
var hiddenKeys = __webpack_require__(3501);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ 5296:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ 3887:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(5005);
var getOwnPropertyNamesModule = __webpack_require__(8006);
var getOwnPropertySymbolsModule = __webpack_require__(5181);
var anObject = __webpack_require__(9670);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ 857:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);

module.exports = global;


/***/ }),

/***/ 1320:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var createNonEnumerableProperty = __webpack_require__(8880);
var has = __webpack_require__(6656);
var setGlobal = __webpack_require__(3505);
var inspectSource = __webpack_require__(2788);
var InternalStateModule = __webpack_require__(9909);

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var state;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) {
      createNonEnumerableProperty(value, 'name', key);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ 4488:
/***/ (function(module) {

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ 3505:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var createNonEnumerableProperty = __webpack_require__(8880);

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ 6200:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var shared = __webpack_require__(2309);
var uid = __webpack_require__(9711);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ 5465:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var setGlobal = __webpack_require__(3505);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ 2309:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var IS_PURE = __webpack_require__(1913);
var store = __webpack_require__(5465);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.12.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ 6091:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(7293);
var whitespaces = __webpack_require__(1361);

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
  });
};


/***/ }),

/***/ 3111:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(4488);
var whitespaces = __webpack_require__(1361);

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ 1400:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toInteger = __webpack_require__(9958);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ 5656:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(8361);
var requireObjectCoercible = __webpack_require__(4488);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ 9958:
/***/ (function(module) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ 7466:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toInteger = __webpack_require__(9958);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ 7908:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(4488);

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ 7593:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(111);

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ 9711:
/***/ (function(module) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ 1361:
/***/ (function(module) {

// a string of all valid unicode whitespaces
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ 8702:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var $trimEnd = __webpack_require__(3111).end;
var forcedStringTrimMethod = __webpack_require__(6091);

var FORCED = forcedStringTrimMethod('trimEnd');

var trimEnd = FORCED ? function trimEnd() {
  return $trimEnd(this);
// eslint-disable-next-line es/no-string-prototype-trimstart-trimend -- safe
} : ''.trimEnd;

// `String.prototype.{ trimEnd, trimRight }` methods
// https://tc39.es/ecma262/#sec-string.prototype.trimend
// https://tc39.es/ecma262/#String.prototype.trimright
$({ target: 'String', proto: true, forced: FORCED }, {
  trimEnd: trimEnd,
  trimRight: trimEnd
});


/***/ })

}]);
//# sourceMappingURL=662-a96e9bd0c0828831ad59.js.map