/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _redux = __webpack_require__(7);
	
	var _xtend = __webpack_require__(34);
	
	var _xtend2 = _interopRequireDefault(_xtend);
	
	var _inferno = __webpack_require__(1);
	
	var _inferno2 = _interopRequireDefault(_inferno);
	
	var _infernoRedux = __webpack_require__(13);
	
	var _infernoComponent = __webpack_require__(2);
	
	var _infernoComponent2 = _interopRequireDefault(_infernoComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	__webpack_require__(10); //@todo separate file in own dist
	
	// -- Redux Base --------------------------------------------------------------
	
	function defaultState() {
		return {
			convert: { from: 6, to: 2 },
			el: '#cookie-converter',
			hash: true,
			lc: {},
			locale: 'en',
			minRecipeRows: 5,
			recipe: "",
			recipeBlocks: []
		};
	}
	
	function reducer(state, action) {
		var type = action.type;
	
		if (action && reducers[type]) {
			return reducers[type](state, action);
		} else {
			if (false) {
				console.warn("Unknown action type '%s'.", type);
			}
			return state;
		}
	}
	
	function makeStore(state) {
		var devtools = !!window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : void 0;
		return (0, _redux.createStore)(reducer, state, devtools);
	}
	
	// -- View --------------------------------------------------------------------
	
	var RecipeConverted = (0, _infernoRedux.connect)(function (state) {
		return state;
	}, // mapStateToProps,
	function (dispatch) {
		return {
			toggleNumberConvert: function toggleNumberConvert(index) {
				return dispatch(actions.toggleNumberConvert(index));
			}
		};
	} // mapDispatchToProps,
	)(function (_Component) {
		_inherits(RecipeConverted_In, _Component);
	
		function RecipeConverted_In() {
			_classCallCheck(this, RecipeConverted_In);
	
			return _possibleConstructorReturn(this, (RecipeConverted_In.__proto__ || Object.getPrototypeOf(RecipeConverted_In)).apply(this, arguments));
		}
	
		_createClass(RecipeConverted_In, [{
			key: 'renderBlock',
			value: function renderBlock(block, index) {
				var _props = this.props,
				    convert = _props.convert,
				    toggleNumberConvert = _props.toggleNumberConvert;
				var from = convert.from,
				    to = convert.to;
	
				if (block.t === 'var') {
					var n = block.n,
					    _convert = block.convert;
	
					var number = cookingFormat(_convert ? ratio(n, from, to) : n);
					return (0, _inferno.createVNode)(2, 'span', {
						'className': 'var ' + (_convert ? 'on' : 'off')
					}, number, {
						'onClick': function onClick() {
							return toggleNumberConvert(index);
						}
					});
				} else {
					var txt = block.txt;
	
					var txts = txt.split('\n');
					var last = txts.pop();
					return txts.map(function (txt) {
						return (0, _inferno.createVNode)(2, 'span', null, [txt, (0, _inferno.createVNode)(2, 'br')]);
					}).concat([(0, _inferno.createVNode)(2, 'span', null, last)]);
				}
			}
		}, {
			key: 'render',
			value: function render() {
				var _props2 = this.props,
				    recipeBlocks = _props2.recipeBlocks,
				    convert = _props2.convert;
	
				var renderBlock = this.renderBlock.bind(this);
				return (0, _inferno.createVNode)(2, 'div', {
					'class': 'converted'
				}, recipeBlocks.map(renderBlock));
			}
		}]);
	
		return RecipeConverted_In;
	}(_infernoComponent2.default));
	
	var View = (0, _infernoRedux.connect)(function (state) {
		return state;
	}, // mapStateToProps,
	function (dispatch) {
		return {
			changeConvertFrom: function changeConvertFrom(val) {
				return dispatch(actions.changeConvertFrom(val));
			},
			changeConvertTo: function changeConvertTo(val) {
				return dispatch(actions.changeConvertTo(val));
			},
			updateRecipe: function updateRecipe(val) {
				return dispatch(actions.updateRecipe(val));
			}
		};
	} // mapDispatchToProps,
	)(function (_Component2) {
		_inherits(Top, _Component2);
	
		function Top() {
			_classCallCheck(this, Top);
	
			return _possibleConstructorReturn(this, (Top.__proto__ || Object.getPrototypeOf(Top)).apply(this, arguments));
		}
	
		_createClass(Top, [{
			key: 'recipeRows',
			value: function recipeRows(recipe) {
				return Math.max(this.props.minRecipeRows, recipe.split('\n').length);
			}
		}, {
			key: 'formatNumberPicker',
			value: function formatNumberPicker(value, onChange) {
				var lc = getLc(this.props.locale);
				if (value <= 10 && !this.state.customInputRatio) {
					return (0, _inferno.createVNode)(2048, 'select', null, [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function (x) {
						return (0, _inferno.createVNode)(2, 'option', {
							'value': x,
							'selected': x == value
						}, x);
					}), (0, _inferno.createVNode)(2, 'option', {
						'value': '11'
					}, lc.ratio_more)], {
						'onChange': onChange
					});
				} else {
					return (0, _inferno.createVNode)(512, 'input', {
						'type': 'text',
						'value': value
					}, null, {
						'onInput': onChange
					});
				}
			}
		}, {
			key: 'copyPermalink',
			value: function copyPermalink(_ref, _evt) {
				var lc = _ref.lc,
				    permalink = _ref.permalink;
	
				var prompt = lc.permalink_copy_prompt;
				window.prompt(prompt, permalink);
			}
		}, {
			key: 'maybeActivateCustomRatio',
			value: function maybeActivateCustomRatio(value, el) {
				var customInputRatio = this.state.customInputRatio;
	
				var parent = el.parentNode;
				if (Number(value) > 10 && !customInputRatio) {
					this.setState({ customInputRatio: true }, function () {
						// when setState is done (and hopefully the rendering),
						// we select the input and focus it
						var input = parent.getElementsByTagName('input')[0];
						if (input) {
							input.focus();
							input.select();
						}
					});
				}
			}
		}, {
			key: 'render',
			value: function render() {
				var _props3 = this.props,
				    changeConvertFrom = _props3.changeConvertFrom,
				    changeConvertTo = _props3.changeConvertTo,
				    convert = _props3.convert,
				    locale = _props3.locale,
				    recipe = _props3.recipe,
				    recipeRows = _props3.recipeRows,
				    updateRecipe = _props3.updateRecipe;
	
				var lc = getLc(locale);
				var permalink = makePermalink(this.props);
				var permalinkEvt = (0, _inferno.linkEvent)({ permalink: permalink, lc: lc }, this.copyPermalink);
				var self = this;
				var changeConvertFromEvt = inputEvt(function (val) {
					var inputEl = this;
					self.maybeActivateCustomRatio(val, inputEl);
					changeConvertFrom(val);
				});
				var changeConvertToEvt = inputEvt(function (val) {
					var inputEl = this;
					self.maybeActivateCustomRatio(val, inputEl);
					changeConvertTo(val);
				});
				var updateRecipeEvt = inputEvt(updateRecipe);
				return (0, _inferno.createVNode)(2, 'div', {
					'className': 'cookie-converter'
				}, [(0, _inferno.createVNode)(2, 'div', {
					'className': 'cconv-block recipe-source'
				}, [(0, _inferno.createVNode)(2, 'label', null, [lc.ratio_from_before + ' ', this.formatNumberPicker(convert.from, changeConvertFromEvt), ' ' + lc.ratio_from_after, ' :']), (0, _inferno.createVNode)(1024, 'textarea', {
					'className': 'recipe',
					'rows': this.recipeRows(recipe)
				}, recipe, {
					'onInput': updateRecipeEvt
				}), (0, _inferno.createVNode)(2, 'p', null, [(0, _inferno.createVNode)(2, 'a', {
					'href': permalink
				}, lc.permalink), ' ', (0, _inferno.createVNode)(2, 'small', null, (0, _inferno.createVNode)(2, 'button', null, lc.copy_permalink, {
					'onClick': permalinkEvt
				}))])]), (0, _inferno.createVNode)(2, 'div', {
					'className': 'cconv-block recipe-converted'
				}, [(0, _inferno.createVNode)(2, 'label', null, [lc.ratio_to_before + ' ', this.formatNumberPicker(convert.to, changeConvertToEvt), ' ' + lc.ratio_to_after, ' :']), (0, _inferno.createVNode)(16, RecipeConverted)])]);
			}
		}]);
	
		return Top;
	}(_infernoComponent2.default));
	
	function renderConverter(store) {
		var el = selectEl(store.getState().el);
		_inferno2.default.render((0, _inferno.createVNode)(16, _infernoRedux.Provider, {
			'store': store,
			children: (0, _inferno.createVNode)(16, View)
		}), el);
	}
	
	// -- Logic -------------------------------------------------------------------
	
	var actions = {
		changeConvertFrom: function changeConvertFrom(x) {
			return { type: 'C_CHANGE_CONVERT_FROM', value: x };
		},
		changeConvertTo: function changeConvertTo(x) {
			return { type: 'C_CHANGE_CONVERT_TO', value: x };
		},
		toggleNumberConvert: function toggleNumberConvert(x) {
			return { type: 'C_TOGGLE_NUMBER_CONVERT', index: x };
		},
		updateRecipe: function updateRecipe(x) {
			return { type: 'C_UPDATE_RECIPE', recipe: x };
		}
	};
	
	var reducers = {
		C_CHANGE_CONVERT_FROM: function C_CHANGE_CONVERT_FROM(state, _ref2) {
			var value = _ref2.value;
			var convert = state.convert;
	
			convert = _extends({}, convert, { from: ensureNumber(value, defaultState().convert.from) });
			return _extends({}, state, { convert: convert });
		},
		C_CHANGE_CONVERT_TO: function C_CHANGE_CONVERT_TO(state, _ref3) {
			var value = _ref3.value;
			var convert = state.convert;
	
			convert = _extends({}, convert, { to: ensureNumber(value, defaultState().convert.to) });
			return _extends({}, state, { convert: convert });
		},
		C_TOGGLE_NUMBER_CONVERT: function C_TOGGLE_NUMBER_CONVERT(state, _ref4) {
			var index = _ref4.index;
			var recipeBlocks = state.recipeBlocks;
	
			var block = recipeBlocks[index];
			if (block === void 0) {
				return state;
			}
			if (block.t !== 'var') {
				throw new Error("Block is not a var : " + JSON.stringify(block));
			}
			var newBlock = _extends({}, block, { convert: !block.convert });
			var newBlocks = recipeBlocks.slice(0, index) // before
			.concat([newBlock]).concat(recipeBlocks.slice(index + 1)); // after
			return _extends({}, state, { recipeBlocks: newBlocks });
		},
		C_UPDATE_RECIPE: function C_UPDATE_RECIPE(state, _ref5) {
			var recipe = _ref5.recipe;
	
			var recipeBlocks = parseRecipe(recipe);
			return _extends({}, state, { recipeBlocks: recipeBlocks, recipe: recipe });
		}
	};
	
	function makePermalink(state) {
		return window.location.href.replace(/#.*/, '') // remove current hash
		+ '#' + serialize(exportState(state));
	}
	
	function exportState(state) {
		var recipe = state.recipe,
		    convert = state.convert,
		    recipeBlocks = state.recipeBlocks;
	
		var disabledBlocksIndexes = recipeBlocks.reduce(function (acc, b, i) {
			if (b.t === 'var' && !b.convert) {
				acc.push(i);
			}
			return acc;
		}, []);
		var data = {
			recipe: recipe,
			convert: convert,
			disable: disabledBlocksIndexes.length ? disabledBlocksIndexes : void 0
		};
		return data;
	}
	
	function serialize(data) {
		return base64Encode(JSON.stringify(data));
	}
	
	function unserialize(str) {
		try {
			return JSON.parse(base64Decode(str));
		} catch (e) {
			return false;
		}
	}
	
	var fracts = {
		'1/2': 0.5,
		'\xBD': 0.5, // ½ unicode
		'1/3': 0.33,
		'2/3': 0.67,
		'1/4': 0.25,
		'1/8': 0.125,
		'1/5': 0.2,
		'1/6': 0.17
	};
	
	var deFracts = {
		'0.5': '1/2',
		'0.33': '1/3',
		'0.67': '2/3',
		'0.25': '1/4',
		'0.125': '1/8',
		'0.2': '1/5',
		'0.17': '1/6'
	};
	
	function cookingFormat(value) {
		return deFracts[value] || value;
	}
	
	function parseRecipe(recipe) {
		var _ref6;
	
		// Cut the recipe in constant parts and variable parts. Variable parts
		// contain the base number and a .convert property (to disable converting)
	
		// Replace cooking format by actual numbers
		var cleaned = Object.keys(fracts).reduce(function (tpl, frac) {
			return tpl.replace(new RegExp(frac, 'g'), fracts[frac]);
		}, recipe)
		// replace french decimals
		.replace(/([0-9]),([0-9])/g, function (_, int, dec) {
			return int + '.' + dec;
		});
	
		var variables = [];
		var separator = '__x_X_CUT_HERE_X_x__';
		// now we look for numbers in the recipe, we store them in variables[] and
		// replace them with a separator.
		var template = cleaned.replace(/[0-9\.]+/g, function (val) {
			// if not a true number, like "1.5.4", treat as text
			var n = Number(val);
			if (n != val) return val;
			variables.push({ convert: true, n: n, t: 'var' });
			return separator;
		})
		// now, we split the recipe with the separator, and create text blocks
		.split(separator).map(function (txt) {
			return { txt: txt, t: 'txt' };
		});
		// we must now intersperse this array with the variables array
		template = (_ref6 = []).concat.apply(_ref6, _toConsumableArray(template.map(function (txtBlock, i) {
			return [txtBlock, variables[i]];
		})));
		// the last element is always undefined because if the recipe ends with a
		// number, an empty string is created: "aa_".split('_') = ["aa", ""].
		// So the last variables[i] does not exist
		var undef = template.pop();
		if (undef !== void 0) {
			console.error("@todo You'd better check this out");
		}
		return template;
	}
	
	function ratio(value, from, to) {
		var converted = value / from * to;
		var decimals = 2; // changing decimals may broke fracts/deFracts
		var dec = Math.pow(10, decimals);
		return Math.round(converted * dec) / dec;
	}
	
	var CookieConverter = window.CookieConverter = {
		i18n: {},
		base64Encode: base64Encode,
		base64Decode: base64Decode
	};
	
	CookieConverter.create = function (_state) {
		var state = (0, _xtend2.default)(defaultState(), _state);
		var hash = !!state.hash;
		var hashData = false;
		if (hash) {
			var serialized = window.location.hash.slice(1);
			hashData = unserialize(serialized);
		}
		if (hashData) {
			// rebind if we have hash data
			state = (0, _xtend2.default)(state, {
				recipe: hashData.recipe || state.recipe,
				convert: hashData.convert || state.convert
			});
		}
		state.recipeBlocks = parseRecipe(state.recipe);
		var store = makeStore(state);
		if (hashData.disable && hashData.disable.forEach) {
			hashData.disable.forEach(function (x) {
				return store.dispatch(actions.toggleNumberConvert(x));
			});
		}
		renderConverter(store);
		if (false) {
			console.warn('@todo return an action dispatcher to this store // return wrapActions(actions, store.dispatch)');
		}
	};
	
	CookieConverter.getHashRecipe = function (defaultRecipe) {
		console.warn('This function is deprecated');
		return defaultRecipe;
	};
	
	// -- Util --------------------------------------------------------------------
	
	function selectEl(cssSelector) {
		if (cssSelector instanceof Element) {
			return cssSelector;
		} else if (document.querySelector) {
			return document.querySelector(cssSelector);
		} else {
			var $ = window.jQuery || window.$;
			if ($) {
				var selected = $(cssSelector);
				// other libs
				if (selected instanceof Element) {
					return selected;
					// jQuery
				} else if (typeof selected.get === 'function') {
					return selected.get(0);
				}
			}
		}
		throw new Error("Unsupported browser");
	}
	
	function base64Encode(str) {
		return window.btoa(unescape(encodeURIComponent(str)));
	}
	
	function base64Decode(str) {
		return decodeURIComponent(escape(window.atob(str)));
	}
	
	function inputEvt(fn) {
		for (var _len = arguments.length, more = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
			more[_key - 1] = arguments[_key];
		}
	
		return function (evt) {
			// Select is ok but input onInput events does not pass the <input/>
			// as 'this' here @todo why?
			return fn.call.apply(fn, [/* this */evt.target, evt.target.value].concat(more));
		};
	}
	
	function ensureNumber(n, def) {
		n = Number(n);
		return isNaN(n) ? def : n;
	}
	
	function getLc(locale) {
		var english = CookieConverter.i18n['en'];
		return (0, _xtend2.default)(english, CookieConverter.i18n[locale]);
	}

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(17);
	module.exports.default = module.exports;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(14);
	module.exports.default = module.exports;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(24);
	
	/** Built-in value references. */
	var Symbol = root.Symbol;
	
	module.exports = Symbol;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(18),
	    getPrototype = __webpack_require__(20),
	    isObjectLike = __webpack_require__(25);
	
	/** `Object#toString` result references. */
	var objectTag = '[object Object]';
	
	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);
	
	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
	    funcToString.call(Ctor) == objectCtorString;
	}
	
	module.exports = isPlainObject;


/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = compose;
	/**
	 * Composes single-argument functions from right to left. The rightmost
	 * function can take multiple arguments as it provides the signature for
	 * the resulting composite function.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing the argument functions
	 * from right to left. For example, compose(f, g, h) is identical to doing
	 * (...args) => f(g(h(...args))).
	 */
	
	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }
	
	  if (funcs.length === 0) {
	    return function (arg) {
	      return arg;
	    };
	  }
	
	  if (funcs.length === 1) {
	    return funcs[0];
	  }
	
	  var last = funcs[funcs.length - 1];
	  var rest = funcs.slice(0, -1);
	  return function () {
	    return rest.reduceRight(function (composed, f) {
	      return f(composed);
	    }, last.apply(undefined, arguments));
	  };
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.ActionTypes = undefined;
	exports['default'] = createStore;
	
	var _isPlainObject = __webpack_require__(4);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _symbolObservable = __webpack_require__(30);
	
	var _symbolObservable2 = _interopRequireDefault(_symbolObservable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = exports.ActionTypes = {
	  INIT: '@@redux/INIT'
	};
	
	/**
	 * Creates a Redux store that holds the state tree.
	 * The only way to change the data in the store is to call `dispatch()` on it.
	 *
	 * There should only be a single store in your app. To specify how different
	 * parts of the state tree respond to actions, you may combine several reducers
	 * into a single reducer function by using `combineReducers`.
	 *
	 * @param {Function} reducer A function that returns the next state tree, given
	 * the current state tree and the action to handle.
	 *
	 * @param {any} [preloadedState] The initial state. You may optionally specify it
	 * to hydrate the state from the server in universal apps, or to restore a
	 * previously serialized user session.
	 * If you use `combineReducers` to produce the root reducer function, this must be
	 * an object with the same shape as `combineReducers` keys.
	 *
	 * @param {Function} enhancer The store enhancer. You may optionally specify it
	 * to enhance the store with third-party capabilities such as middleware,
	 * time travel, persistence, etc. The only store enhancer that ships with Redux
	 * is `applyMiddleware()`.
	 *
	 * @returns {Store} A Redux store that lets you read the state, dispatch actions
	 * and subscribe to changes.
	 */
	function createStore(reducer, preloadedState, enhancer) {
	  var _ref2;
	
	  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = preloadedState;
	    preloadedState = undefined;
	  }
	
	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error('Expected the enhancer to be a function.');
	    }
	
	    return enhancer(createStore)(reducer, preloadedState);
	  }
	
	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }
	
	  var currentReducer = reducer;
	  var currentState = preloadedState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;
	
	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }
	
	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }
	
	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected listener to be a function.');
	    }
	
	    var isSubscribed = true;
	
	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);
	
	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }
	
	      isSubscribed = false;
	
	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	    };
	  }
	
	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!(0, _isPlainObject2['default'])(action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }
	
	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }
	
	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }
	
	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }
	
	    var listeners = currentListeners = nextListeners;
	    for (var i = 0; i < listeners.length; i++) {
	      listeners[i]();
	    }
	
	    return action;
	  }
	
	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error('Expected the nextReducer to be a function.');
	    }
	
	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }
	
	  /**
	   * Interoperability point for observable/reactive libraries.
	   * @returns {observable} A minimal observable of state changes.
	   * For more information, see the observable proposal:
	   * https://github.com/zenparsing/es-observable
	   */
	  function observable() {
	    var _ref;
	
	    var outerSubscribe = subscribe;
	    return _ref = {
	      /**
	       * The minimal observable subscription method.
	       * @param {Object} observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns {subscription} An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */
	      subscribe: function subscribe(observer) {
	        if (typeof observer !== 'object') {
	          throw new TypeError('Expected the observer to be an object.');
	        }
	
	        function observeState() {
	          if (observer.next) {
	            observer.next(getState());
	          }
	        }
	
	        observeState();
	        var unsubscribe = outerSubscribe(observeState);
	        return { unsubscribe: unsubscribe };
	      }
	    }, _ref[_symbolObservable2['default']] = function () {
	      return this;
	    }, _ref;
	  }
	
	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });
	
	  return _ref2 = {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  }, _ref2[_symbolObservable2['default']] = observable, _ref2;
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;
	
	var _createStore = __webpack_require__(6);
	
	var _createStore2 = _interopRequireDefault(_createStore);
	
	var _combineReducers = __webpack_require__(28);
	
	var _combineReducers2 = _interopRequireDefault(_combineReducers);
	
	var _bindActionCreators = __webpack_require__(27);
	
	var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);
	
	var _applyMiddleware = __webpack_require__(26);
	
	var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);
	
	var _compose = __webpack_require__(5);
	
	var _compose2 = _interopRequireDefault(_compose);
	
	var _warning = __webpack_require__(8);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/*
	* This is a dummy function to check if the function name has been altered by minification.
	* If the function has been minified and NODE_ENV !== 'production', warn the user.
	*/
	function isCrushed() {}
	
	if (false) {
	  (0, _warning2['default'])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
	}
	
	exports.createStore = _createStore2['default'];
	exports.combineReducers = _combineReducers2['default'];
	exports.bindActionCreators = _bindActionCreators2['default'];
	exports.applyMiddleware = _applyMiddleware2['default'];
	exports.compose = _compose2['default'];

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports
	
	
	// module
	exports.push([module.id, ".cookie-converter textarea {\n\tmin-width:90%;\n}\n\n.cookie-converter .ratio {\n\tmax-width: 50px;\n}\n\n.cookie-converter .converted span.var {\n\tcursor:pointer;\n\tpadding:1px;\n\tbackground:#eee;\n\n\tborder-radius:3px;\n\tborder-top:0px solid transparent;\n\tborder-bottom:3px solid #ccc;\n\tborder-left: 1px solid #ccc;\n\tborder-right:1px solid #ccc;\n}\n\n.cookie-converter .converted span:active {\n\tposition:relative; top:1px;\n\tborder-bottom-width:2px;\n}\n\n.cookie-converter .converted span.var.on {\n\tbackground:#D6ED90;\n\tborder-color:#BED56A;\n\tborder-top-color:transparent;\n}\n\n.cookie-converter .permalink {\n\tmargin:0;\n\tcolor:grey;\n}\n", ""]);
	
	// exports


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(9);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(29)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./cookie-converter.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./cookie-converter.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 11 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(15);
	module.exports.default = module.exports;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(16);
	module.exports.default = module.exports;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * inferno-component v1.1.1
	 * (c) 2017 Dominic Gannaway
	 * Released under the MIT License.
	 */
	(function (global, factory) {
	     true ? module.exports = factory(__webpack_require__(1)) :
	    typeof define === 'function' && define.amd ? define(['inferno'], factory) :
	    (global.Inferno = global.Inferno || {}, global.Inferno.Component = factory(global.Inferno));
	}(this, (function (inferno) { 'use strict';
	
	var ERROR_MSG = 'a runtime error occured! Use Inferno in development environment to find the error.';
	var isBrowser = typeof window !== 'undefined' && window.document;
	
	// this is MUCH faster than .constructor === Array and instanceof Array
	// in Node 7 and the later versions of V8, slower in older versions though
	var isArray = Array.isArray;
	
	function isStringOrNumber(obj) {
	    var type = typeof obj;
	    return type === 'string' || type === 'number';
	}
	function isNullOrUndef(obj) {
	    return isUndefined(obj) || isNull(obj);
	}
	function isInvalid(obj) {
	    return isNull(obj) || obj === false || isTrue(obj) || isUndefined(obj);
	}
	function isFunction(obj) {
	    return typeof obj === 'function';
	}
	
	
	
	function isNull(obj) {
	    return obj === null;
	}
	function isTrue(obj) {
	    return obj === true;
	}
	function isUndefined(obj) {
	    return obj === undefined;
	}
	
	function throwError(message) {
	    if (!message) {
	        message = ERROR_MSG;
	    }
	    throw new Error(("Inferno Error: " + message));
	}
	
	var Lifecycle = function Lifecycle() {
	    this.listeners = [];
	    this.fastUnmount = true;
	};
	Lifecycle.prototype.addListener = function addListener (callback) {
	    this.listeners.push(callback);
	};
	Lifecycle.prototype.trigger = function trigger () {
	        var this$1 = this;
	
	    for (var i = 0; i < this.listeners.length; i++) {
	        this$1.listeners[i]();
	    }
	};
	
	var noOp = ERROR_MSG;
	if (false) {
	    noOp = 'Inferno Error: Can only update a mounted or mounting component. This usually means you called setState() or forceUpdate() on an unmounted component. This is a no-op.';
	}
	var componentCallbackQueue = new Map();
	// when a components root VNode is also a component, we can run into issues
	// this will recursively look for vNode.parentNode if the VNode is a component
	function updateParentComponentVNodes(vNode, dom) {
	    if (vNode.flags & 28 /* Component */) {
	        var parentVNode = vNode.parentVNode;
	        if (parentVNode) {
	            parentVNode.dom = dom;
	            updateParentComponentVNodes(parentVNode, dom);
	        }
	    }
	}
	// this is in shapes too, but we don't want to import from shapes as it will pull in a duplicate of createVNode
	function createVoidVNode() {
	    return inferno.createVNode(4096 /* Void */);
	}
	function createTextVNode(text) {
	    return inferno.createVNode(1 /* Text */, null, null, text);
	}
	function addToQueue(component, force, callback) {
	    // TODO this function needs to be revised and improved on
	    var queue = componentCallbackQueue.get(component);
	    if (!queue) {
	        queue = [];
	        componentCallbackQueue.set(component, queue);
	        Promise.resolve().then(function () {
	            componentCallbackQueue.delete(component);
	            applyState(component, force, function () {
	                for (var i = 0; i < queue.length; i++) {
	                    queue[i]();
	                }
	            });
	        });
	    }
	    if (callback) {
	        queue.push(callback);
	    }
	}
	function queueStateChanges(component, newState, callback, sync) {
	    if (isFunction(newState)) {
	        newState = newState(component.state);
	    }
	    for (var stateKey in newState) {
	        component._pendingState[stateKey] = newState[stateKey];
	    }
	    if (!component._pendingSetState && isBrowser) {
	        if (sync || component._blockRender) {
	            component._pendingSetState = true;
	            applyState(component, false, callback);
	        }
	        else {
	            addToQueue(component, false, callback);
	        }
	    }
	    else {
	        component.state = Object.assign({}, component.state, component._pendingState);
	        component._pendingState = {};
	    }
	}
	function applyState(component, force, callback) {
	    if ((!component._deferSetState || force) && !component._blockRender && !component._unmounted) {
	        component._pendingSetState = false;
	        var pendingState = component._pendingState;
	        var prevState = component.state;
	        var nextState = Object.assign({}, prevState, pendingState);
	        var props = component.props;
	        var context = component.context;
	        component._pendingState = {};
	        var nextInput = component._updateComponent(prevState, nextState, props, props, context, force, true);
	        var didUpdate = true;
	        if (isInvalid(nextInput)) {
	            nextInput = createVoidVNode();
	        }
	        else if (nextInput === inferno.NO_OP) {
	            nextInput = component._lastInput;
	            didUpdate = false;
	        }
	        else if (isStringOrNumber(nextInput)) {
	            nextInput = createTextVNode(nextInput);
	        }
	        else if (isArray(nextInput)) {
	            if (false) {
	                throwError('a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.');
	            }
	            throwError();
	        }
	        var lastInput = component._lastInput;
	        var vNode = component._vNode;
	        var parentDom = (lastInput.dom && lastInput.dom.parentNode) || (lastInput.dom = vNode.dom);
	        component._lastInput = nextInput;
	        if (didUpdate) {
	            var subLifecycle = component._lifecycle;
	            if (!subLifecycle) {
	                subLifecycle = new Lifecycle();
	            }
	            else {
	                subLifecycle.listeners = [];
	            }
	            component._lifecycle = subLifecycle;
	            var childContext = component.getChildContext();
	            if (!isNullOrUndef(childContext)) {
	                childContext = Object.assign({}, context, component._childContext, childContext);
	            }
	            else {
	                childContext = Object.assign({}, context, component._childContext);
	            }
	            component._patch(lastInput, nextInput, parentDom, subLifecycle, childContext, component._isSVG, false);
	            subLifecycle.trigger();
	            component.componentDidUpdate(props, prevState);
	            inferno.options.afterUpdate && inferno.options.afterUpdate(vNode);
	        }
	        var dom = vNode.dom = nextInput.dom;
	        var componentToDOMNodeMap = component._componentToDOMNodeMap;
	        componentToDOMNodeMap && componentToDOMNodeMap.set(component, nextInput.dom);
	        updateParentComponentVNodes(vNode, dom);
	        if (!isNullOrUndef(callback)) {
	            callback();
	        }
	    }
	    else if (callback) {
	        callback();
	    }
	}
	var Component$1 = function Component(props, context) {
	    this.state = {};
	    this.refs = {};
	    this._blockRender = false;
	    this._ignoreSetState = false;
	    this._blockSetState = false;
	    this._deferSetState = false;
	    this._pendingSetState = false;
	    this._pendingState = {};
	    this._lastInput = null;
	    this._vNode = null;
	    this._unmounted = true;
	    this._lifecycle = null;
	    this._childContext = null;
	    this._patch = null;
	    this._isSVG = false;
	    this._componentToDOMNodeMap = null;
	    /** @type {object} */
	    this.props = props || inferno.EMPTY_OBJ;
	    /** @type {object} */
	    this.context = context || {};
	};
	Component$1.prototype.render = function render (nextProps, nextState, nextContext) {
	};
	Component$1.prototype.forceUpdate = function forceUpdate (callback) {
	    if (this._unmounted) {
	        return;
	    }
	    isBrowser && applyState(this, true, callback);
	};
	Component$1.prototype.setState = function setState (newState, callback) {
	    if (this._unmounted) {
	        return;
	    }
	    if (!this._blockSetState) {
	        if (!this._ignoreSetState) {
	            queueStateChanges(this, newState, callback, false);
	        }
	    }
	    else {
	        if (false) {
	            throwError('cannot update state via setState() in componentWillUpdate().');
	        }
	        throwError();
	    }
	};
	Component$1.prototype.setStateSync = function setStateSync (newState) {
	    if (this._unmounted) {
	        return;
	    }
	    if (!this._blockSetState) {
	        if (!this._ignoreSetState) {
	            queueStateChanges(this, newState, null, true);
	        }
	    }
	    else {
	        if (false) {
	            throwError('cannot update state via setState() in componentWillUpdate().');
	        }
	        throwError();
	    }
	};
	Component$1.prototype.componentWillMount = function componentWillMount () {
	};
	Component$1.prototype.componentDidUpdate = function componentDidUpdate (prevProps, prevState, prevContext) {
	};
	Component$1.prototype.shouldComponentUpdate = function shouldComponentUpdate (nextProps, nextState, context) {
	    return true;
	};
	Component$1.prototype.componentWillReceiveProps = function componentWillReceiveProps (nextProps, context) {
	};
	Component$1.prototype.componentWillUpdate = function componentWillUpdate (nextProps, nextState, nextContext) {
	};
	Component$1.prototype.getChildContext = function getChildContext () {
	};
	Component$1.prototype._updateComponent = function _updateComponent (prevState, nextState, prevProps, nextProps, context, force, fromSetState) {
	    if (this._unmounted === true) {
	        if (false) {
	            throwError(noOp);
	        }
	        throwError();
	    }
	    if ((prevProps !== nextProps || nextProps === inferno.EMPTY_OBJ) || prevState !== nextState || force) {
	        if (prevProps !== nextProps || nextProps === inferno.EMPTY_OBJ) {
	            if (!fromSetState) {
	                this._blockRender = true;
	                this.componentWillReceiveProps(nextProps, context);
	                this._blockRender = false;
	            }
	            if (this._pendingSetState) {
	                nextState = Object.assign({}, nextState, this._pendingState);
	                this._pendingSetState = false;
	                this._pendingState = {};
	            }
	        }
	        var shouldUpdate = this.shouldComponentUpdate(nextProps, nextState, context);
	        if (shouldUpdate !== false || force) {
	            this._blockSetState = true;
	            this.componentWillUpdate(nextProps, nextState, context);
	            this._blockSetState = false;
	            this.props = nextProps;
	            var state = this.state = nextState;
	            this.context = context;
	            inferno.options.beforeRender && inferno.options.beforeRender(this);
	            var render = this.render(nextProps, state, context);
	            inferno.options.afterRender && inferno.options.afterRender(this);
	            return render;
	        }
	    }
	    return inferno.NO_OP;
	};
	
	return Component$1;
	
	})));


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * inferno-create-element v1.1.1
	 * (c) 2017 Dominic Gannaway
	 * Released under the MIT License.
	 */
	(function (global, factory) {
	     true ? module.exports = factory(__webpack_require__(1)) :
	    typeof define === 'function' && define.amd ? define(['inferno'], factory) :
	    (global.Inferno = global.Inferno || {}, global.Inferno.createElement = factory(global.Inferno));
	}(this, (function (inferno) { 'use strict';
	
	// this is MUCH faster than .constructor === Array and instanceof Array
	// in Node 7 and the later versions of V8, slower in older versions though
	
	function isStatefulComponent(o) {
	    return !isUndefined(o.prototype) && !isUndefined(o.prototype.render);
	}
	
	
	function isInvalid(obj) {
	    return isNull(obj) || obj === false || isTrue(obj) || isUndefined(obj);
	}
	
	function isAttrAnEvent(attr) {
	    return attr[0] === 'o' && attr[1] === 'n' && attr.length > 3;
	}
	function isString(obj) {
	    return typeof obj === 'string';
	}
	
	function isNull(obj) {
	    return obj === null;
	}
	function isTrue(obj) {
	    return obj === true;
	}
	function isUndefined(obj) {
	    return obj === undefined;
	}
	function isObject(o) {
	    return typeof o === 'object';
	}
	
	var componentHooks = {
	    onComponentWillMount: true,
	    onComponentDidMount: true,
	    onComponentWillUnmount: true,
	    onComponentShouldUpdate: true,
	    onComponentWillUpdate: true,
	    onComponentDidUpdate: true
	};
	function createElement$1(name, props) {
	    var _children = [], len = arguments.length - 2;
	    while ( len-- > 0 ) _children[ len ] = arguments[ len + 2 ];
	
	    if (isInvalid(name) || isObject(name)) {
	        throw new Error('Inferno Error: createElement() name parameter cannot be undefined, null, false or true, It must be a string, class or function.');
	    }
	    var children = _children;
	    var ref = null;
	    var key = null;
	    var events = null;
	    var flags = 0;
	    if (_children) {
	        if (_children.length === 1) {
	            children = _children[0];
	        }
	        else if (_children.length === 0) {
	            children = undefined;
	        }
	    }
	    if (isString(name)) {
	        flags = 2 /* HtmlElement */;
	        switch (name) {
	            case 'svg':
	                flags = 128 /* SvgElement */;
	                break;
	            case 'input':
	                flags = 512 /* InputElement */;
	                break;
	            case 'textarea':
	                flags = 1024 /* TextareaElement */;
	                break;
	            case 'select':
	                flags = 2048 /* SelectElement */;
	                break;
	            default:
	        }
	        for (var prop in props) {
	            if (prop === 'key') {
	                key = props.key;
	                delete props.key;
	            }
	            else if (prop === 'children' && isUndefined(children)) {
	                children = props.children; // always favour children args, default to props
	            }
	            else if (prop === 'ref') {
	                ref = props.ref;
	            }
	            else if (isAttrAnEvent(prop)) {
	                if (!events) {
	                    events = {};
	                }
	                events[prop] = props[prop];
	                delete props[prop];
	            }
	        }
	    }
	    else {
	        flags = isStatefulComponent(name) ? 4 /* ComponentClass */ : 8 /* ComponentFunction */;
	        if (!isUndefined(children)) {
	            if (!props) {
	                props = {};
	            }
	            props.children = children;
	            children = null;
	        }
	        for (var prop$1 in props) {
	            if (componentHooks[prop$1]) {
	                if (!ref) {
	                    ref = {};
	                }
	                ref[prop$1] = props[prop$1];
	            }
	            else if (prop$1 === 'key') {
	                key = props.key;
	                delete props.key;
	            }
	        }
	    }
	    return inferno.createVNode(flags, name, props, children, events, key, ref);
	}
	
	return createElement$1;
	
	})));


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * inferno-redux v1.1.1
	 * (c) 2017 Dominic Gannaway
	 * Released under the MIT License.
	 */
	(function (global, factory) {
		 true ? module.exports = factory(__webpack_require__(2), __webpack_require__(7), __webpack_require__(12)) :
		typeof define === 'function' && define.amd ? define(['inferno-component', 'redux', 'inferno-create-element'], factory) :
		(global.Inferno = global.Inferno || {}, global.Inferno.Redux = factory(global.Inferno.Component,global.Redux,global.Inferno.createElement));
	}(this, (function (Component,redux,createElement) { 'use strict';
	
	Component = 'default' in Component ? Component['default'] : Component;
	createElement = 'default' in createElement ? createElement['default'] : createElement;
	
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	    /* eslint-disable no-console */
	    if (typeof console !== 'undefined' && typeof console.error === 'function') {
	        console.error(message);
	    }
	    /* eslint-enable no-console */
	    try {
	        // This error was thrown as a convenience so that if you enable
	        // "break on all exceptions" in your console,
	        // it would pause the execution at this line.
	        throw new Error(message);
	    }
	    catch (e) { }
	    /* eslint-enable no-empty */
	}
	function shallowEqual(objA, objB) {
	    if (objA === objB) {
	        return true;
	    }
	    var keysA = Object.keys(objA);
	    var keysB = Object.keys(objB);
	    if (keysA.length !== keysB.length) {
	        return false;
	    }
	    // Test for A's keys different from B.
	    var hasOwn = Object.prototype.hasOwnProperty;
	    for (var i = 0; i < keysA.length; i++) {
	        var key = keysA[i];
	        if (!hasOwn.call(objB, key) ||
	            objA[key] !== objB[key]) {
	            return false;
	        }
	    }
	    return true;
	}
	function wrapActionCreators(actionCreators) {
	    return function (dispatch) { return redux.bindActionCreators(actionCreators, dispatch); };
	}
	
	var ERROR_MSG = 'a runtime error occured! Use Inferno in development environment to find the error.';
	
	function toArray(children) {
	    return isArray(children) ? children : (children ? [children] : children);
	}
	// this is MUCH faster than .constructor === Array and instanceof Array
	// in Node 7 and the later versions of V8, slower in older versions though
	var isArray = Array.isArray;
	
	
	function isNullOrUndef(obj) {
	    return isUndefined(obj) || isNull(obj);
	}
	
	function isFunction(obj) {
	    return typeof obj === 'function';
	}
	
	
	
	function isNull(obj) {
	    return obj === null;
	}
	
	function isUndefined(obj) {
	    return obj === undefined;
	}
	
	function throwError(message) {
	    if (!message) {
	        message = ERROR_MSG;
	    }
	    throw new Error(("Inferno Error: " + message));
	}
	
	var didWarnAboutReceivingStore = false;
	function warnAboutReceivingStore() {
	    if (didWarnAboutReceivingStore) {
	        return;
	    }
	    didWarnAboutReceivingStore = true;
	    warning('<Provider> does not support changing `store` on the fly.');
	}
	var Provider = (function (Component$$1) {
	    function Provider(props, context) {
	        Component$$1.call(this, props, context);
	        this.store = props.store;
	    }
	
	    if ( Component$$1 ) Provider.__proto__ = Component$$1;
	    Provider.prototype = Object.create( Component$$1 && Component$$1.prototype );
	    Provider.prototype.constructor = Provider;
	    Provider.prototype.getChildContext = function getChildContext () {
	        return { store: this.store };
	    };
	    Provider.prototype.render = function render () {
	        if (isNullOrUndef(this.props.children) || toArray(this.props.children).length !== 1) {
	            throw Error('Inferno Error: Only one child is allowed within the `Provider` component');
	        }
	        return this.props.children;
	    };
	
	    return Provider;
	}(Component));
	
	if (false) {
	    Provider.prototype.componentWillReceiveProps = function (nextProps) {
	        var ref = this;
	        var store = ref.store;
	        var nextStore = nextProps.store;
	        if (store !== nextStore) {
	            warnAboutReceivingStore();
	        }
	    };
	}
	
	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}
	
	var index$1 = createCommonjsModule(function (module) {
	'use strict';
	
	var INFERNO_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    propTypes: true,
	    type: true
	};
	
	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    arguments: true,
	    arity: true
	};
	
	var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';
	
	function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
	    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
	        var keys = Object.getOwnPropertyNames(sourceComponent);
	
	        /* istanbul ignore else */
	        if (isGetOwnPropertySymbolsAvailable) {
	            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
	        }
	
	        for (var i = 0; i < keys.length; ++i) {
	            if (!INFERNO_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
	                try {
	                    targetComponent[keys[i]] = sourceComponent[keys[i]];
	                } catch (error) {
	
	                }
	            }
	        }
	    }
	
	    return targetComponent;
	}
	
	module.exports = hoistNonReactStatics;
	module.exports.default = module.exports;
	});
	
	// From https://github.com/lodash/lodash/blob/es
	function overArg(func, transform) {
	    return function (arg) {
	        return func(transform(arg));
	    };
	}
	var getPrototype = overArg(Object.getPrototypeOf, Object);
	function isObjectLike(value) {
	    return value != null && typeof value === 'object';
	}
	var objectTag = '[object Object]';
	var funcProto = Function.prototype;
	var objectProto = Object.prototype;
	var funcToString = funcProto.toString;
	var hasOwnProperty = objectProto.hasOwnProperty;
	var objectCtorString = funcToString.call(Object);
	var objectToString = objectProto.toString;
	function isPlainObject(value) {
	    if (!isObjectLike(value) || objectToString.call(value) !== objectTag) {
	        return false;
	    }
	    var proto = getPrototype(value);
	    if (proto === null) {
	        return true;
	    }
	    var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	    return (typeof Ctor === 'function' &&
	        Ctor instanceof Ctor && funcToString.call(Ctor) === objectCtorString);
	}
	
	var errorObject = { value: null };
	var defaultMapStateToProps = function (state) { return ({}); }; // eslint-disable-line no-unused-vars
	var defaultMapDispatchToProps = function (dispatch) { return ({ dispatch: dispatch }); };
	var defaultMergeProps = function (stateProps, dispatchProps, parentProps) { return Object.assign({}, parentProps, stateProps, dispatchProps); };
	function tryCatch(fn, ctx) {
	    try {
	        return fn.apply(ctx);
	    }
	    catch (e) {
	        errorObject.value = e;
	        return errorObject;
	    }
	}
	function getDisplayName(WrappedComponent) {
	    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	}
	// Helps track hot reloading.
	var nextVersion = 0;
	function connect(mapStateToProps, mapDispatchToProps, mergeProps, options) {
	    if ( options === void 0 ) options = {};
	
	    var shouldSubscribe = Boolean(mapStateToProps);
	    var mapState = mapStateToProps || defaultMapStateToProps;
	    var mapDispatch;
	    if (isFunction(mapDispatchToProps)) {
	        mapDispatch = mapDispatchToProps;
	    }
	    else if (!mapDispatchToProps) {
	        mapDispatch = defaultMapDispatchToProps;
	    }
	    else {
	        mapDispatch = wrapActionCreators(mapDispatchToProps);
	    }
	    var finalMergeProps = mergeProps || defaultMergeProps;
	    var pure = options.pure; if ( pure === void 0 ) pure = true;
	    var withRef = options.withRef; if ( withRef === void 0 ) withRef = false;
	    var checkMergedEquals = pure && finalMergeProps !== defaultMergeProps;
	    // Helps track hot reloading.
	    var version = nextVersion++;
	    return function wrapWithConnect(WrappedComponent) {
	        var connectDisplayName = "Connect(" + (getDisplayName(WrappedComponent)) + ")";
	        function checkStateShape(props, methodName) {
	            if (!isPlainObject(props)) {
	                warning(methodName + "() in " + connectDisplayName + " must return a plain object. " +
	                    "Instead received " + props + ".");
	            }
	        }
	        function computeMergedProps(stateProps, dispatchProps, parentProps) {
	            var mergedProps = finalMergeProps(stateProps, dispatchProps, parentProps);
	            if (false) {
	                checkStateShape(mergedProps, 'mergeProps');
	            }
	            return mergedProps;
	        }
	        var Connect = (function (Component$$1) {
	            function Connect(props, context) {
	                var this$1 = this;
	
	                Component$$1.call(this, props, context);
	                this.version = version;
	                this.wrappedInstance = null;
	                this.store = (props && props.store) || (context && context.store);
	                this.componentDidMount = function () {
	                    this$1.trySubscribe();
	                };
	                if (!this.store) {
	                    throwError('Could not find "store" in either the context or ' +
	                        "props of \"" + connectDisplayName + "\". " +
	                        'Either wrap the root component in a <Provider>, ' +
	                        "or explicitly pass \"store\" as a prop to \"" + connectDisplayName + "\".");
	                }
	                var storeState = this.store.getState();
	                this.state = { storeState: storeState };
	                this.clearCache();
	            }
	
	            if ( Component$$1 ) Connect.__proto__ = Component$$1;
	            Connect.prototype = Object.create( Component$$1 && Component$$1.prototype );
	            Connect.prototype.constructor = Connect;
	            Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate () {
	                return !pure || this.haveOwnPropsChanged || this.hasStoreStateChanged;
	            };
	            Connect.prototype.computeStateProps = function computeStateProps (store, props) {
	                if (!this.finalMapStateToProps) {
	                    return this.configureFinalMapState(store, props);
	                }
	                var state = store.getState();
	                var stateProps = this.doStatePropsDependOnOwnProps ?
	                    this.finalMapStateToProps(state, props) :
	                    this.finalMapStateToProps(state);
	                return stateProps;
	            };
	            Connect.prototype.configureFinalMapState = function configureFinalMapState (store, props) {
	                var mappedState = mapState(store.getState(), props);
	                var isFactory = isFunction(mappedState);
	                this.finalMapStateToProps = isFactory ? mappedState : mapState;
	                this.doStatePropsDependOnOwnProps = this.finalMapStateToProps.length !== 1;
	                if (isFactory) {
	                    return this.computeStateProps(store, props);
	                }
	                return mappedState;
	            };
	            Connect.prototype.computeDispatchProps = function computeDispatchProps (store, props) {
	                if (!this.finalMapDispatchToProps) {
	                    return this.configureFinalMapDispatch(store, props);
	                }
	                var dispatch = store.dispatch;
	                var dispatchProps = this.doDispatchPropsDependOnOwnProps ?
	                    this.finalMapDispatchToProps(dispatch, props) :
	                    this.finalMapDispatchToProps(dispatch);
	                return dispatchProps;
	            };
	            Connect.prototype.configureFinalMapDispatch = function configureFinalMapDispatch (store, props) {
	                var mappedDispatch = mapDispatch(store.dispatch, props);
	                var isFactory = isFunction(mappedDispatch);
	                this.finalMapDispatchToProps = isFactory ? mappedDispatch : mapDispatch;
	                this.doDispatchPropsDependOnOwnProps = this.finalMapDispatchToProps.length !== 1;
	                if (isFactory) {
	                    return this.computeDispatchProps(store, props);
	                }
	                return mappedDispatch;
	            };
	            Connect.prototype.updateStatePropsIfNeeded = function updateStatePropsIfNeeded () {
	                var nextStateProps = this.computeStateProps(this.store, this.props);
	                if (this.stateProps && shallowEqual(nextStateProps, this.stateProps)) {
	                    return false;
	                }
	                this.stateProps = nextStateProps;
	                return true;
	            };
	            Connect.prototype.updateDispatchPropsIfNeeded = function updateDispatchPropsIfNeeded () {
	                var nextDispatchProps = this.computeDispatchProps(this.store, this.props);
	                if (this.dispatchProps && shallowEqual(nextDispatchProps, this.dispatchProps)) {
	                    return false;
	                }
	                this.dispatchProps = nextDispatchProps;
	                return true;
	            };
	            Connect.prototype.updateMergedPropsIfNeeded = function updateMergedPropsIfNeeded () {
	                var nextMergedProps = computeMergedProps(this.stateProps, this.dispatchProps, this.props);
	                if (this.mergedProps && checkMergedEquals && shallowEqual(nextMergedProps, this.mergedProps)) {
	                    return false;
	                }
	                this.mergedProps = nextMergedProps;
	                return true;
	            };
	            Connect.prototype.isSubscribed = function isSubscribed () {
	                return isFunction(this.unsubscribe);
	            };
	            Connect.prototype.trySubscribe = function trySubscribe () {
	                if (shouldSubscribe && !this.unsubscribe) {
	                    this.unsubscribe = this.store.subscribe(this.handleChange.bind(this));
	                    this.handleChange();
	                }
	            };
	            Connect.prototype.tryUnsubscribe = function tryUnsubscribe () {
	                if (this.unsubscribe) {
	                    this.unsubscribe();
	                    this.unsubscribe = null;
	                }
	            };
	            Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps (nextProps) {
	                if (!pure || !shallowEqual(nextProps, this.props)) {
	                    this.haveOwnPropsChanged = true;
	                }
	            };
	            Connect.prototype.componentWillUnmount = function componentWillUnmount () {
	                this.tryUnsubscribe();
	                this.clearCache();
	            };
	            Connect.prototype.clearCache = function clearCache () {
	                this.dispatchProps = null;
	                this.stateProps = null;
	                this.mergedProps = null;
	                this.haveOwnPropsChanged = true;
	                this.hasStoreStateChanged = true;
	                this.haveStatePropsBeenPrecalculated = false;
	                this.statePropsPrecalculationError = null;
	                this.renderedElement = null;
	                this.finalMapDispatchToProps = null;
	                this.finalMapStateToProps = null;
	            };
	            Connect.prototype.handleChange = function handleChange () {
	                if (!this.unsubscribe) {
	                    return;
	                }
	                var storeState = this.store.getState();
	                var prevStoreState = this.state.storeState;
	                if (pure && prevStoreState === storeState) {
	                    return;
	                }
	                if (pure && !this.doStatePropsDependOnOwnProps) {
	                    var haveStatePropsChanged = tryCatch(this.updateStatePropsIfNeeded, this);
	                    if (!haveStatePropsChanged) {
	                        return;
	                    }
	                    if (haveStatePropsChanged === errorObject) {
	                        this.statePropsPrecalculationError = errorObject.value;
	                    }
	                    this.haveStatePropsBeenPrecalculated = true;
	                }
	                this.hasStoreStateChanged = true;
	                this.setState({ storeState: storeState });
	            };
	            Connect.prototype.getWrappedInstance = function getWrappedInstance () {
	                return this.wrappedInstance;
	            };
	            Connect.prototype.render = function render () {
	                var this$1 = this;
	
	                var ref = this;
	                var haveOwnPropsChanged = ref.haveOwnPropsChanged;
	                var hasStoreStateChanged = ref.hasStoreStateChanged;
	                var haveStatePropsBeenPrecalculated = ref.haveStatePropsBeenPrecalculated;
	                var statePropsPrecalculationError = ref.statePropsPrecalculationError;
	                var renderedElement = ref.renderedElement;
	                this.haveOwnPropsChanged = false;
	                this.hasStoreStateChanged = false;
	                this.haveStatePropsBeenPrecalculated = false;
	                this.statePropsPrecalculationError = null;
	                if (statePropsPrecalculationError) {
	                    throw statePropsPrecalculationError;
	                }
	                var shouldUpdateStateProps = true;
	                var shouldUpdateDispatchProps = true;
	                if (pure && renderedElement) {
	                    shouldUpdateStateProps = hasStoreStateChanged || (haveOwnPropsChanged && this.doStatePropsDependOnOwnProps);
	                    shouldUpdateDispatchProps =
	                        haveOwnPropsChanged && this.doDispatchPropsDependOnOwnProps;
	                }
	                var haveStatePropsChanged = false;
	                var haveDispatchPropsChanged = false;
	                if (haveStatePropsBeenPrecalculated) {
	                    haveStatePropsChanged = true;
	                }
	                else if (shouldUpdateStateProps) {
	                    haveStatePropsChanged = this.updateStatePropsIfNeeded();
	                }
	                if (shouldUpdateDispatchProps) {
	                    haveDispatchPropsChanged = this.updateDispatchPropsIfNeeded();
	                }
	                var haveMergedPropsChanged = true;
	                if (haveStatePropsChanged ||
	                    haveDispatchPropsChanged ||
	                    haveOwnPropsChanged) {
	                    haveMergedPropsChanged = this.updateMergedPropsIfNeeded();
	                }
	                else {
	                    haveMergedPropsChanged = false;
	                }
	                if (!haveMergedPropsChanged && renderedElement) {
	                    return renderedElement;
	                }
	                if (withRef) {
	                    this.renderedElement = createElement(WrappedComponent, Object.assign({}, this.mergedProps, { ref: function (instance) { return this$1.wrappedInstance = instance; } }));
	                }
	                else {
	                    this.renderedElement = createElement(WrappedComponent, this.mergedProps);
	                }
	                return this.renderedElement;
	            };
	
	            return Connect;
	        }(Component));
	        Connect.displayName = connectDisplayName;
	        Connect.WrappedComponent = WrappedComponent;
	        if (false) {
	            Connect.prototype.componentWillUpdate = function componentWillUpdate() {
	                if (this.version === version) {
	                    return;
	                }
	                // We are hot reloading!
	                this.version = version;
	                this.trySubscribe();
	                this.clearCache();
	            };
	        }
	        return index$1(Connect, WrappedComponent);
	    };
	}
	
	var index = {
		Provider: Provider,
		connect: connect
	};
	
	return index;
	
	})));


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * inferno v1.1.1
	 * (c) 2017 Dominic Gannaway
	 * Released under the MIT License.
	 */
	(function (global, factory) {
		 true ? factory(exports) :
		typeof define === 'function' && define.amd ? define(['exports'], factory) :
		(factory((global.Inferno = global.Inferno || {})));
	}(this, (function (exports) { 'use strict';
	
	var NO_OP = '$NO_OP';
	var ERROR_MSG = 'a runtime error occured! Use Inferno in development environment to find the error.';
	var isBrowser = typeof window !== 'undefined' && window.document;
	
	// this is MUCH faster than .constructor === Array and instanceof Array
	// in Node 7 and the later versions of V8, slower in older versions though
	var isArray = Array.isArray;
	function isStatefulComponent(o) {
	    return !isUndefined(o.prototype) && !isUndefined(o.prototype.render);
	}
	function isStringOrNumber(obj) {
	    var type = typeof obj;
	    return type === 'string' || type === 'number';
	}
	function isNullOrUndef(obj) {
	    return isUndefined(obj) || isNull(obj);
	}
	function isInvalid(obj) {
	    return isNull(obj) || obj === false || isTrue(obj) || isUndefined(obj);
	}
	function isFunction(obj) {
	    return typeof obj === 'function';
	}
	function isAttrAnEvent(attr) {
	    return attr[0] === 'o' && attr[1] === 'n' && attr.length > 3;
	}
	function isString(obj) {
	    return typeof obj === 'string';
	}
	function isNumber(obj) {
	    return typeof obj === 'number';
	}
	function isNull(obj) {
	    return obj === null;
	}
	function isTrue(obj) {
	    return obj === true;
	}
	function isUndefined(obj) {
	    return obj === undefined;
	}
	function isObject(o) {
	    return typeof o === 'object';
	}
	function throwError(message) {
	    if (!message) {
	        message = ERROR_MSG;
	    }
	    throw new Error(("Inferno Error: " + message));
	}
	function warning(condition, message) {
	    if (!condition) {
	        console.error(message);
	    }
	}
	var EMPTY_OBJ = {};
	
	function applyKey(key, vNode) {
	    vNode.key = key;
	    return vNode;
	}
	function applyKeyIfMissing(key, vNode) {
	    if (isNumber(key)) {
	        key = "." + key;
	    }
	    if (isNull(vNode.key) || vNode.key[0] === '.') {
	        return applyKey(key, vNode);
	    }
	    return vNode;
	}
	function applyKeyPrefix(key, vNode) {
	    vNode.key = key + vNode.key;
	    return vNode;
	}
	function _normalizeVNodes(nodes, result, index, currentKey) {
	    for (; index < nodes.length; index++) {
	        var n = nodes[index];
	        var key = currentKey + "." + index;
	        if (!isInvalid(n)) {
	            if (isArray(n)) {
	                _normalizeVNodes(n, result, 0, key);
	            }
	            else {
	                if (isStringOrNumber(n)) {
	                    n = createTextVNode(n);
	                }
	                else if (isVNode(n) && n.dom || (n.key && n.key[0] === '.')) {
	                    n = cloneVNode(n);
	                }
	                if (isNull(n.key) || n.key[0] === '.') {
	                    n = applyKey(key, n);
	                }
	                else {
	                    n = applyKeyPrefix(currentKey, n);
	                }
	                result.push(n);
	            }
	        }
	    }
	}
	function normalizeVNodes(nodes) {
	    var newNodes;
	    // we assign $ which basically means we've flagged this array for future note
	    // if it comes back again, we need to clone it, as people are using it
	    // in an immutable way
	    // tslint:disable
	    if (nodes['$']) {
	        nodes = nodes.slice();
	    }
	    else {
	        nodes['$'] = true;
	    }
	    // tslint:enable
	    for (var i = 0; i < nodes.length; i++) {
	        var n = nodes[i];
	        if (isInvalid(n) || isArray(n)) {
	            var result = (newNodes || nodes).slice(0, i);
	            _normalizeVNodes(nodes, result, i, "");
	            return result;
	        }
	        else if (isStringOrNumber(n)) {
	            if (!newNodes) {
	                newNodes = nodes.slice(0, i);
	            }
	            newNodes.push(applyKeyIfMissing(i, createTextVNode(n)));
	        }
	        else if ((isVNode(n) && n.dom) || (isNull(n.key) && !(n.flags & 64 /* HasNonKeyedChildren */))) {
	            if (!newNodes) {
	                newNodes = nodes.slice(0, i);
	            }
	            newNodes.push(applyKeyIfMissing(i, cloneVNode(n)));
	        }
	        else if (newNodes) {
	            newNodes.push(applyKeyIfMissing(i, cloneVNode(n)));
	        }
	    }
	    return newNodes || nodes;
	}
	function normalizeChildren(children) {
	    if (isArray(children)) {
	        return normalizeVNodes(children);
	    }
	    else if (isVNode(children) && children.dom) {
	        return cloneVNode(children);
	    }
	    return children;
	}
	function normalizeProps(vNode, props, children) {
	    if (!(vNode.flags & 28 /* Component */) && isNullOrUndef(children) && !isNullOrUndef(props.children)) {
	        vNode.children = props.children;
	    }
	    if (props.ref) {
	        vNode.ref = props.ref;
	        delete props.ref;
	    }
	    if (props.events) {
	        vNode.events = props.events;
	    }
	    if (!isNullOrUndef(props.key)) {
	        vNode.key = props.key;
	        delete props.key;
	    }
	}
	function copyPropsTo(copyFrom, copyTo) {
	    for (var prop in copyFrom) {
	        if (isUndefined(copyTo[prop])) {
	            copyTo[prop] = copyFrom[prop];
	        }
	    }
	}
	function normalizeElement(type, vNode) {
	    if (type === 'svg') {
	        vNode.flags = 128 /* SvgElement */;
	    }
	    else if (type === 'input') {
	        vNode.flags = 512 /* InputElement */;
	    }
	    else if (type === 'select') {
	        vNode.flags = 2048 /* SelectElement */;
	    }
	    else if (type === 'textarea') {
	        vNode.flags = 1024 /* TextareaElement */;
	    }
	    else if (type === 'media') {
	        vNode.flags = 256 /* MediaElement */;
	    }
	    else {
	        vNode.flags = 2 /* HtmlElement */;
	    }
	}
	function normalize(vNode) {
	    var props = vNode.props;
	    var hasProps = !isNull(props);
	    var type = vNode.type;
	    var children = vNode.children;
	    // convert a wrongly created type back to element
	    if (isString(type) && (vNode.flags & 28 /* Component */)) {
	        normalizeElement(type, vNode);
	        if (hasProps && props.children) {
	            vNode.children = props.children;
	            children = props.children;
	        }
	    }
	    if (hasProps) {
	        normalizeProps(vNode, props, children);
	    }
	    if (!isInvalid(children)) {
	        vNode.children = normalizeChildren(children);
	    }
	    if (hasProps && !isInvalid(props.children)) {
	        props.children = normalizeChildren(props.children);
	    }
	    if (false) {
	        // This code will be stripped out from production CODE
	        // It will help users to track errors in their applications.
	        function verifyKeys(vNodes) {
	            var keyValues = vNodes.map(function (vnode) { return vnode.key; });
	            keyValues.some(function (item, idx) {
	                var hasDuplicate = keyValues.indexOf(item) !== idx;
	                warning(!hasDuplicate, 'Infreno normalisation(...): Encountered two children with same key, all keys must be unique within its siblings. Duplicated key is:' + item);
	                return hasDuplicate;
	            });
	        }
	        if (vNode.children && Array.isArray(vNode.children)) {
	            verifyKeys(vNode.children);
	        }
	    }
	}
	
	var options = {
	    recyclingEnabled: true,
	    findDOMNodeEnabled: false,
	    roots: null,
	    createVNode: null,
	    beforeRender: null,
	    afterRender: null,
	    afterMount: null,
	    afterUpdate: null,
	    beforeUnmount: null
	};
	
	function createVNode(flags, type, props, children, events, key, ref, noNormalise) {
	    if (flags & 16 /* ComponentUnknown */) {
	        flags = isStatefulComponent(type) ? 4 /* ComponentClass */ : 8 /* ComponentFunction */;
	    }
	    var vNode = {
	        children: isUndefined(children) ? null : children,
	        dom: null,
	        events: events || null,
	        flags: flags,
	        key: isUndefined(key) ? null : key,
	        props: props || null,
	        ref: ref || null,
	        type: type
	    };
	    if (!noNormalise) {
	        normalize(vNode);
	    }
	    if (options.createVNode) {
	        options.createVNode(vNode);
	    }
	    return vNode;
	}
	function cloneVNode(vNodeToClone, props) {
	    var _children = [], len = arguments.length - 2;
	    while ( len-- > 0 ) _children[ len ] = arguments[ len + 2 ];
	
	    var children = _children;
	    if (_children.length > 0 && !isNull(_children[0])) {
	        if (!props) {
	            props = {};
	        }
	        if (_children.length === 1) {
	            children = _children[0];
	        }
	        if (isUndefined(props.children)) {
	            props.children = children;
	        }
	        else {
	            if (isArray(children)) {
	                if (isArray(props.children)) {
	                    props.children = props.children.concat(children);
	                }
	                else {
	                    props.children = [props.children].concat(children);
	                }
	            }
	            else {
	                if (isArray(props.children)) {
	                    props.children.push(children);
	                }
	                else {
	                    props.children = [props.children];
	                    props.children.push(children);
	                }
	            }
	        }
	    }
	    children = null;
	    var newVNode;
	    if (isArray(vNodeToClone)) {
	        var tmpArray = [];
	        for (var i = 0; i < vNodeToClone.length; i++) {
	            tmpArray.push(cloneVNode(vNodeToClone[i]));
	        }
	        newVNode = tmpArray;
	    }
	    else {
	        var flags = vNodeToClone.flags;
	        var events = vNodeToClone.events || (props && props.events) || null;
	        var key = !isNullOrUndef(vNodeToClone.key) ? vNodeToClone.key : (props ? props.key : null);
	        var ref = vNodeToClone.ref || (props ? props.ref : null);
	        if (flags & 28 /* Component */) {
	            newVNode = createVNode(flags, vNodeToClone.type, Object.assign({}, vNodeToClone.props, props), null, events, key, ref, true);
	            var newProps = newVNode.props;
	            if (newProps) {
	                var newChildren = newProps.children;
	                // we need to also clone component children that are in props
	                // as the children may also have been hoisted
	                if (newChildren) {
	                    if (isArray(newChildren)) {
	                        for (var i$1 = 0; i$1 < newChildren.length; i$1++) {
	                            var child = newChildren[i$1];
	                            if (!isInvalid(child) && isVNode(child)) {
	                                newProps.children[i$1] = cloneVNode(child);
	                            }
	                        }
	                    }
	                    else if (isVNode(newChildren)) {
	                        newProps.children = cloneVNode(newChildren);
	                    }
	                }
	            }
	            newVNode.children = null;
	        }
	        else if (flags & 3970 /* Element */) {
	            children = (props && props.children) || vNodeToClone.children;
	            newVNode = createVNode(flags, vNodeToClone.type, Object.assign({}, vNodeToClone.props, props), children, events, key, ref, !children);
	        }
	        else if (flags & 1 /* Text */) {
	            newVNode = createTextVNode(vNodeToClone.children);
	        }
	    }
	    return newVNode;
	}
	function createVoidVNode() {
	    return createVNode(4096 /* Void */);
	}
	function createTextVNode(text) {
	    return createVNode(1 /* Text */, null, null, text, null, null, null, true);
	}
	function isVNode(o) {
	    return !!o.flags;
	}
	
	var Lifecycle = function Lifecycle() {
	    this.listeners = [];
	    this.fastUnmount = true;
	};
	Lifecycle.prototype.addListener = function addListener (callback) {
	    this.listeners.push(callback);
	};
	Lifecycle.prototype.trigger = function trigger () {
	        var this$1 = this;
	
	    for (var i = 0; i < this.listeners.length; i++) {
	        this$1.listeners[i]();
	    }
	};
	
	function constructDefaults(string, object, value) {
	    /* eslint no-return-assign: 0 */
	    string.split(',').forEach(function (i) { return object[i] = value; });
	}
	var xlinkNS = 'http://www.w3.org/1999/xlink';
	var xmlNS = 'http://www.w3.org/XML/1998/namespace';
	var svgNS = 'http://www.w3.org/2000/svg';
	var strictProps = {};
	var booleanProps = {};
	var namespaces = {};
	var isUnitlessNumber = {};
	var skipProps = {};
	var dehyphenProps = {
	    httpEquiv: 'http-equiv',
	    acceptCharset: 'accept-charset'
	};
	var probablyKebabProps = /^(accentH|arabicF|capH|font[FSVW]|glyph[NO]|horiz[AO]|panose1|renderingI|strikethrough[PT]|underline[PT]|v[AHIM]|vert[AO]|xH|alignmentB|baselineS|clip[PR]|color[IPR]|dominantB|enableB|fill[OR]|flood[COF]|imageR|letterS|lightingC|marker[EMS]|pointerE|shapeR|stop[CO]|stroke[DLMOW]|text[ADR]|unicodeB|wordS|writingM).*/;
	function kebabize(str, smallLetter, largeLetter) {
	    return (smallLetter + "-" + (largeLetter.toLowerCase()));
	}
	var delegatedProps = {};
	constructDefaults('xlink:href,xlink:arcrole,xlink:actuate,xlink:role,xlink:titlef,xlink:type', namespaces, xlinkNS);
	constructDefaults('xml:base,xml:lang,xml:space', namespaces, xmlNS);
	constructDefaults('volume,defaultValue,defaultChecked', strictProps, true);
	constructDefaults('children,ref,key,selected,checked,value,multiple', skipProps, true);
	constructDefaults('onClick,onMouseDown,onMouseUp,onMouseMove,onSubmit,onDblClick,onKeyDown,onKeyUp,onKeyPress', delegatedProps, true);
	constructDefaults('muted,scoped,loop,open,checked,default,capture,disabled,readOnly,required,autoplay,controls,seamless,reversed,allowfullscreen,novalidate', booleanProps, true);
	constructDefaults('animationIterationCount,borderImageOutset,borderImageSlice,borderImageWidth,boxFlex,boxFlexGroup,boxOrdinalGroup,columnCount,flex,flexGrow,flexPositive,flexShrink,flexNegative,flexOrder,gridRow,gridColumn,fontWeight,lineClamp,lineHeight,opacity,order,orphans,tabSize,widows,zIndex,zoom,fillOpacity,floodOpacity,stopOpacity,strokeDasharray,strokeDashoffset,strokeMiterlimit,strokeOpacity,strokeWidth,', isUnitlessNumber, true);
	
	var isiOS = isBrowser && !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
	var delegatedEvents = new Map();
	function handleEvent(name, lastEvent, nextEvent, dom) {
	    var delegatedRoots = delegatedEvents.get(name);
	    if (nextEvent) {
	        if (!delegatedRoots) {
	            delegatedRoots = { items: new Map(), count: 0, docEvent: null };
	            var docEvent = attachEventToDocument(name, delegatedRoots);
	            delegatedRoots.docEvent = docEvent;
	            delegatedEvents.set(name, delegatedRoots);
	        }
	        if (!lastEvent) {
	            delegatedRoots.count++;
	            if (isiOS && name === 'onClick') {
	                trapClickOnNonInteractiveElement(dom);
	            }
	        }
	        delegatedRoots.items.set(dom, nextEvent);
	    }
	    else if (delegatedRoots) {
	        if (delegatedRoots.items.has(dom)) {
	            delegatedRoots.count--;
	            delegatedRoots.items.delete(dom);
	            if (delegatedRoots.count === 0) {
	                document.removeEventListener(normalizeEventName(name), delegatedRoots.docEvent);
	                delegatedEvents.delete(name);
	            }
	        }
	    }
	}
	function dispatchEvent(event, dom, items, count, eventData) {
	    var eventsToTrigger = items.get(dom);
	    if (eventsToTrigger) {
	        count--;
	        // linkEvent object
	        eventData.dom = dom;
	        if (eventsToTrigger.event) {
	            eventsToTrigger.event(eventsToTrigger.data, event);
	        }
	        else {
	            eventsToTrigger(event);
	        }
	        if (eventData.stopPropagation) {
	            return;
	        }
	    }
	    var parentDom = dom.parentNode;
	    if (count > 0 && (parentDom || parentDom === document.body)) {
	        dispatchEvent(event, parentDom, items, count, eventData);
	    }
	}
	function normalizeEventName(name) {
	    return name.substr(2).toLowerCase();
	}
	function attachEventToDocument(name, delegatedRoots) {
	    var docEvent = function (event) {
	        var eventData = {
	            stopPropagation: false,
	            dom: document
	        };
	        // we have to do this as some browsers recycle the same Event between calls
	        // so we need to make the property configurable
	        Object.defineProperty(event, 'currentTarget', {
	            configurable: true,
	            get: function get() {
	                return eventData.dom;
	            }
	        });
	        event.stopPropagation = function () {
	            eventData.stopPropagation = true;
	        };
	        var count = delegatedRoots.count;
	        if (count > 0) {
	            dispatchEvent(event, event.target, delegatedRoots.items, count, eventData);
	        }
	    };
	    document.addEventListener(normalizeEventName(name), docEvent);
	    return docEvent;
	}
	function emptyFn() { }
	function trapClickOnNonInteractiveElement(dom) {
	    // Mobile Safari does not fire properly bubble click events on
	    // non-interactive elements, which means delegated click listeners do not
	    // fire. The workaround for this bug involves attaching an empty click
	    // listener on the target node.
	    // http://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
	    // Just set it using the onclick property so that we don't have to manage any
	    // bookkeeping for it. Not sure if we need to clear it when the listener is
	    // removed.
	    // TODO: Only do this for the relevant Safaris maybe?
	    dom.onclick = emptyFn;
	}
	
	function isCheckedType(type) {
	    return type === 'checkbox' || type === 'radio';
	}
	function isControlled(props) {
	    var usesChecked = isCheckedType(props.type);
	    return usesChecked ? !isNullOrUndef(props.checked) : !isNullOrUndef(props.value);
	}
	function onTextInputChange(e) {
	    var vNode = this.vNode;
	    var events = vNode.events || EMPTY_OBJ;
	    var dom = vNode.dom;
	    if (events.onInput) {
	        var event = events.onInput;
	        if (event.event) {
	            event.event(event.data, e);
	        }
	        else {
	            event(e);
	        }
	    }
	    else if (events.oninput) {
	        events.oninput(e);
	    }
	    // the user may have updated the vNode from the above onInput events
	    // so we need to get it from the context of `this` again
	    applyValue(this.vNode, dom);
	}
	function wrappedOnChange(e) {
	    var vNode = this.vNode;
	    var events = vNode.events || EMPTY_OBJ;
	    var event = events.onChange;
	    if (event.event) {
	        event.event(event.data, e);
	    }
	    else {
	        event(e);
	    }
	}
	function onCheckboxChange(e) {
	    var vNode = this.vNode;
	    var events = vNode.events || EMPTY_OBJ;
	    var dom = vNode.dom;
	    if (events.onClick) {
	        var event = events.onClick;
	        if (event.event) {
	            event.event(event.data, e);
	        }
	        else {
	            event(e);
	        }
	    }
	    else if (events.onclick) {
	        events.onclick(e);
	    }
	    // the user may have updated the vNode from the above onClick events
	    // so we need to get it from the context of `this` again
	    applyValue(this.vNode, dom);
	}
	function handleAssociatedRadioInputs(name) {
	    var inputs = document.querySelectorAll(("input[type=\"radio\"][name=\"" + name + "\"]"));
	    [].forEach.call(inputs, function (dom) {
	        var inputWrapper = wrappers.get(dom);
	        if (inputWrapper) {
	            var props = inputWrapper.vNode.props;
	            if (props) {
	                dom.checked = inputWrapper.vNode.props.checked;
	            }
	        }
	    });
	}
	function processInput(vNode, dom) {
	    var props = vNode.props || EMPTY_OBJ;
	    applyValue(vNode, dom);
	    if (isControlled(props)) {
	        var inputWrapper = wrappers.get(dom);
	        if (!inputWrapper) {
	            inputWrapper = {
	                vNode: vNode
	            };
	            if (isCheckedType(props.type)) {
	                dom.onclick = onCheckboxChange.bind(inputWrapper);
	                dom.onclick.wrapped = true;
	            }
	            else {
	                dom.oninput = onTextInputChange.bind(inputWrapper);
	                dom.oninput.wrapped = true;
	            }
	            if (props.onChange) {
	                dom.onchange = wrappedOnChange.bind(inputWrapper);
	                dom.onchange.wrapped = true;
	            }
	            wrappers.set(dom, inputWrapper);
	        }
	        inputWrapper.vNode = vNode;
	    }
	}
	function applyValue(vNode, dom) {
	    var props = vNode.props || EMPTY_OBJ;
	    var type = props.type;
	    var value = props.value;
	    var checked = props.checked;
	    var multiple = props.multiple;
	    if (type && type !== dom.type) {
	        dom.type = type;
	    }
	    if (multiple && multiple !== dom.multiple) {
	        dom.multiple = multiple;
	    }
	    if (isCheckedType(type)) {
	        if (!isNullOrUndef(value)) {
	            dom.value = value;
	        }
	        dom.checked = checked;
	        if (type === 'radio' && props.name) {
	            handleAssociatedRadioInputs(props.name);
	        }
	    }
	    else {
	        if (!isNullOrUndef(value) && dom.value !== value) {
	            dom.value = value;
	        }
	        else if (!isNullOrUndef(checked)) {
	            dom.checked = checked;
	        }
	    }
	}
	
	function isControlled$1(props) {
	    return !isNullOrUndef(props.value);
	}
	function updateChildOptionGroup(vNode, value) {
	    var type = vNode.type;
	    if (type === 'optgroup') {
	        var children = vNode.children;
	        if (isArray(children)) {
	            for (var i = 0; i < children.length; i++) {
	                updateChildOption(children[i], value);
	            }
	        }
	        else if (isVNode(children)) {
	            updateChildOption(children, value);
	        }
	    }
	    else {
	        updateChildOption(vNode, value);
	    }
	}
	function updateChildOption(vNode, value) {
	    var props = vNode.props || EMPTY_OBJ;
	    var dom = vNode.dom;
	    // we do this as multiple may have changed
	    dom.value = props.value;
	    if ((isArray(value) && value.indexOf(props.value) !== -1) || props.value === value) {
	        dom.selected = true;
	    }
	    else {
	        dom.selected = props.selected || false;
	    }
	}
	function onSelectChange(e) {
	    var vNode = this.vNode;
	    var events = vNode.events || EMPTY_OBJ;
	    var dom = vNode.dom;
	    if (events.onChange) {
	        var event = events.onChange;
	        if (event.event) {
	            event.event(event.data, e);
	        }
	        else {
	            event(e);
	        }
	    }
	    else if (events.onchange) {
	        events.onchange(e);
	    }
	    // the user may have updated the vNode from the above onChange events
	    // so we need to get it from the context of `this` again
	    applyValue$1(this.vNode, dom);
	}
	function processSelect(vNode, dom) {
	    var props = vNode.props || EMPTY_OBJ;
	    applyValue$1(vNode, dom);
	    if (isControlled$1(props)) {
	        var selectWrapper = wrappers.get(dom);
	        if (!selectWrapper) {
	            selectWrapper = {
	                vNode: vNode
	            };
	            dom.onchange = onSelectChange.bind(selectWrapper);
	            dom.onchange.wrapped = true;
	            wrappers.set(dom, selectWrapper);
	        }
	        selectWrapper.vNode = vNode;
	    }
	}
	function applyValue$1(vNode, dom) {
	    var props = vNode.props || EMPTY_OBJ;
	    if (props.multiple !== dom.multiple) {
	        dom.multiple = props.multiple;
	    }
	    var children = vNode.children;
	    var value = props.value;
	    if (isArray(children)) {
	        for (var i = 0; i < children.length; i++) {
	            updateChildOptionGroup(children[i], value);
	        }
	    }
	    else if (isVNode(children)) {
	        updateChildOptionGroup(children, value);
	    }
	}
	
	function isControlled$2(props) {
	    return !isNullOrUndef(props.value);
	}
	function wrappedOnChange$1(e) {
	    var vNode = this.vNode;
	    var events = vNode.events || EMPTY_OBJ;
	    var event = events.onChange;
	    if (event.event) {
	        event.event(event.data, e);
	    }
	    else {
	        event(e);
	    }
	}
	function onTextareaInputChange(e) {
	    var vNode = this.vNode;
	    var events = vNode.events || EMPTY_OBJ;
	    var dom = vNode.dom;
	    if (events.onInput) {
	        var event = events.onInput;
	        if (event.event) {
	            event.event(event.data, e);
	        }
	        else {
	            event(e);
	        }
	    }
	    else if (events.oninput) {
	        events.oninput(e);
	    }
	    // the user may have updated the vNode from the above onInput events
	    // so we need to get it from the context of `this` again
	    applyValue$2(this.vNode, dom);
	}
	function processTextarea(vNode, dom) {
	    var props = vNode.props || EMPTY_OBJ;
	    applyValue$2(vNode, dom);
	    var textareaWrapper = wrappers.get(dom);
	    if (isControlled$2(props)) {
	        if (!textareaWrapper) {
	            textareaWrapper = {
	                vNode: vNode
	            };
	            dom.oninput = onTextareaInputChange.bind(textareaWrapper);
	            dom.oninput.wrapped = true;
	            if (props.onChange) {
	                dom.onchange = wrappedOnChange$1.bind(textareaWrapper);
	                dom.onchange.wrapped = true;
	            }
	            wrappers.set(dom, textareaWrapper);
	        }
	        textareaWrapper.vNode = vNode;
	    }
	}
	function applyValue$2(vNode, dom) {
	    var props = vNode.props || EMPTY_OBJ;
	    var value = props.value;
	    if (dom.value !== value) {
	        if (!isNullOrUndef(value)) {
	            dom.value = value;
	        }
	    }
	}
	
	var wrappers = new Map();
	function processElement(flags, vNode, dom) {
	    if (flags & 512 /* InputElement */) {
	        processInput(vNode, dom);
	    }
	    else if (flags & 2048 /* SelectElement */) {
	        processSelect(vNode, dom);
	    }
	    else if (flags & 1024 /* TextareaElement */) {
	        processTextarea(vNode, dom);
	    }
	}
	
	function unmount(vNode, parentDom, lifecycle, canRecycle, isRecycling) {
	    var flags = vNode.flags;
	    if (flags & 28 /* Component */) {
	        unmountComponent(vNode, parentDom, lifecycle, canRecycle, isRecycling);
	    }
	    else if (flags & 3970 /* Element */) {
	        unmountElement(vNode, parentDom, lifecycle, canRecycle, isRecycling);
	    }
	    else if (flags & (1 /* Text */ | 4096 /* Void */)) {
	        unmountVoidOrText(vNode, parentDom);
	    }
	}
	function unmountVoidOrText(vNode, parentDom) {
	    if (parentDom) {
	        removeChild(parentDom, vNode.dom);
	    }
	}
	var alreadyUnmounted = new WeakMap();
	function unmountComponent(vNode, parentDom, lifecycle, canRecycle, isRecycling) {
	    var instance = vNode.children;
	    var flags = vNode.flags;
	    var isStatefulComponent$$1 = flags & 4;
	    var ref = vNode.ref;
	    var dom = vNode.dom;
	    if (alreadyUnmounted.has(vNode) && !isRecycling && !parentDom) {
	        return;
	    }
	    alreadyUnmounted.set(vNode);
	    if (!isRecycling) {
	        if (isStatefulComponent$$1) {
	            if (!instance._unmounted) {
	                instance._ignoreSetState = true;
	                options.beforeUnmount && options.beforeUnmount(vNode);
	                instance.componentWillUnmount && instance.componentWillUnmount();
	                if (ref && !isRecycling) {
	                    ref(null);
	                }
	                instance._unmounted = true;
	                options.findDOMNodeEnabled && componentToDOMNodeMap.delete(instance);
	                var subLifecycle = instance._lifecycle;
	                if (!subLifecycle.fastUnmount) {
	                    unmount(instance._lastInput, null, subLifecycle, false, isRecycling);
	                }
	            }
	        }
	        else {
	            if (!isNullOrUndef(ref)) {
	                if (!isNullOrUndef(ref.onComponentWillUnmount)) {
	                    ref.onComponentWillUnmount(dom);
	                }
	            }
	            if (!lifecycle.fastUnmount) {
	                unmount(instance, null, lifecycle, false, isRecycling);
	            }
	        }
	    }
	    if (parentDom) {
	        var lastInput = instance._lastInput;
	        if (isNullOrUndef(lastInput)) {
	            lastInput = instance;
	        }
	        removeChild(parentDom, dom);
	    }
	    if (options.recyclingEnabled && !isStatefulComponent$$1 && (parentDom || canRecycle)) {
	        poolComponent(vNode);
	    }
	}
	function unmountElement(vNode, parentDom, lifecycle, canRecycle, isRecycling) {
	    var dom = vNode.dom;
	    var ref = vNode.ref;
	    var events = vNode.events;
	    if (alreadyUnmounted.has(vNode) && !isRecycling && !parentDom) {
	        return;
	    }
	    alreadyUnmounted.set(vNode);
	    if (!lifecycle.fastUnmount) {
	        if (ref && !isRecycling) {
	            unmountRef(ref);
	        }
	        var children = vNode.children;
	        if (!isNullOrUndef(children)) {
	            unmountChildren$1(children, lifecycle, isRecycling);
	        }
	    }
	    if (!isNull(events)) {
	        for (var name in events) {
	            // do not add a hasOwnProperty check here, it affects performance
	            patchEvent(name, events[name], null, dom, lifecycle);
	            events[name] = null;
	        }
	    }
	    if (parentDom) {
	        removeChild(parentDom, dom);
	    }
	    if (options.recyclingEnabled && (parentDom || canRecycle)) {
	        poolElement(vNode);
	    }
	}
	function unmountChildren$1(children, lifecycle, isRecycling) {
	    if (isArray(children)) {
	        for (var i = 0; i < children.length; i++) {
	            var child = children[i];
	            if (!isInvalid(child) && isObject(child)) {
	                unmount(child, null, lifecycle, false, isRecycling);
	            }
	        }
	    }
	    else if (isObject(children)) {
	        unmount(children, null, lifecycle, false, isRecycling);
	    }
	}
	function unmountRef(ref) {
	    if (isFunction(ref)) {
	        ref(null);
	    }
	    else {
	        if (isInvalid(ref)) {
	            return;
	        }
	        if (false) {
	            throwError('string "refs" are not supported in Inferno 1.0. Use callback "refs" instead.');
	        }
	        throwError();
	    }
	}
	
	function patch(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling) {
	    if (lastVNode !== nextVNode) {
	        var lastFlags = lastVNode.flags;
	        var nextFlags = nextVNode.flags;
	        if (nextFlags & 28 /* Component */) {
	            if (lastFlags & 28 /* Component */) {
	                patchComponent(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, nextFlags & 4 /* ComponentClass */, isRecycling);
	            }
	            else {
	                replaceVNode(parentDom, mountComponent(nextVNode, null, lifecycle, context, isSVG, nextFlags & 4 /* ComponentClass */), lastVNode, lifecycle, isRecycling);
	            }
	        }
	        else if (nextFlags & 3970 /* Element */) {
	            if (lastFlags & 3970 /* Element */) {
	                patchElement(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
	            }
	            else {
	                replaceVNode(parentDom, mountElement(nextVNode, null, lifecycle, context, isSVG), lastVNode, lifecycle, isRecycling);
	            }
	        }
	        else if (nextFlags & 1 /* Text */) {
	            if (lastFlags & 1 /* Text */) {
	                patchText(lastVNode, nextVNode);
	            }
	            else {
	                replaceVNode(parentDom, mountText(nextVNode, null), lastVNode, lifecycle, isRecycling);
	            }
	        }
	        else if (nextFlags & 4096 /* Void */) {
	            if (lastFlags & 4096 /* Void */) {
	                patchVoid(lastVNode, nextVNode);
	            }
	            else {
	                replaceVNode(parentDom, mountVoid(nextVNode, null), lastVNode, lifecycle, isRecycling);
	            }
	        }
	        else {
	            // Error case: mount new one replacing old one
	            replaceLastChildAndUnmount(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
	        }
	    }
	}
	function unmountChildren(children, dom, lifecycle, isRecycling) {
	    if (isVNode(children)) {
	        unmount(children, dom, lifecycle, true, isRecycling);
	    }
	    else if (isArray(children)) {
	        removeAllChildren(dom, children, lifecycle, isRecycling);
	    }
	    else {
	        dom.textContent = '';
	    }
	}
	function patchElement(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling) {
	    var nextTag = nextVNode.type;
	    var lastTag = lastVNode.type;
	    if (lastTag !== nextTag) {
	        replaceWithNewNode(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
	    }
	    else {
	        var dom = lastVNode.dom;
	        var lastProps = lastVNode.props;
	        var nextProps = nextVNode.props;
	        var lastChildren = lastVNode.children;
	        var nextChildren = nextVNode.children;
	        var lastFlags = lastVNode.flags;
	        var nextFlags = nextVNode.flags;
	        var lastRef = lastVNode.ref;
	        var nextRef = nextVNode.ref;
	        var lastEvents = lastVNode.events;
	        var nextEvents = nextVNode.events;
	        nextVNode.dom = dom;
	        if (isSVG || (nextFlags & 128 /* SvgElement */)) {
	            isSVG = true;
	        }
	        if (lastChildren !== nextChildren) {
	            patchChildren(lastFlags, nextFlags, lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling);
	        }
	        if (!(nextFlags & 2 /* HtmlElement */)) {
	            processElement(nextFlags, nextVNode, dom);
	        }
	        if (lastProps !== nextProps) {
	            patchProps(lastProps, nextProps, dom, lifecycle, context, isSVG);
	        }
	        if (lastEvents !== nextEvents) {
	            patchEvents(lastEvents, nextEvents, dom, lifecycle);
	        }
	        if (nextRef) {
	            if (lastRef !== nextRef || isRecycling) {
	                mountRef(dom, nextRef, lifecycle);
	            }
	        }
	    }
	}
	function patchChildren(lastFlags, nextFlags, lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling) {
	    var patchArray = false;
	    var patchKeyed = false;
	    if (nextFlags & 64 /* HasNonKeyedChildren */) {
	        patchArray = true;
	    }
	    else if ((lastFlags & 32 /* HasKeyedChildren */) && (nextFlags & 32 /* HasKeyedChildren */)) {
	        patchKeyed = true;
	        patchArray = true;
	    }
	    else if (isInvalid(nextChildren)) {
	        unmountChildren(lastChildren, dom, lifecycle, isRecycling);
	    }
	    else if (isInvalid(lastChildren)) {
	        if (isStringOrNumber(nextChildren)) {
	            setTextContent(dom, nextChildren);
	        }
	        else {
	            if (isArray(nextChildren)) {
	                mountArrayChildren(nextChildren, dom, lifecycle, context, isSVG);
	            }
	            else {
	                mount(nextChildren, dom, lifecycle, context, isSVG);
	            }
	        }
	    }
	    else if (isStringOrNumber(nextChildren)) {
	        if (isStringOrNumber(lastChildren)) {
	            updateTextContent(dom, nextChildren);
	        }
	        else {
	            unmountChildren(lastChildren, dom, lifecycle, isRecycling);
	            setTextContent(dom, nextChildren);
	        }
	    }
	    else if (isArray(nextChildren)) {
	        if (isArray(lastChildren)) {
	            patchArray = true;
	            if (isKeyed(lastChildren, nextChildren)) {
	                patchKeyed = true;
	            }
	        }
	        else {
	            unmountChildren(lastChildren, dom, lifecycle, isRecycling);
	            mountArrayChildren(nextChildren, dom, lifecycle, context, isSVG);
	        }
	    }
	    else if (isArray(lastChildren)) {
	        removeAllChildren(dom, lastChildren, lifecycle, isRecycling);
	        mount(nextChildren, dom, lifecycle, context, isSVG);
	    }
	    else if (isVNode(nextChildren)) {
	        if (isVNode(lastChildren)) {
	            patch(lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling);
	        }
	        else {
	            unmountChildren(lastChildren, dom, lifecycle, isRecycling);
	            mount(nextChildren, dom, lifecycle, context, isSVG);
	        }
	    } /* else if (isVNode(lastChildren)) {
	        // TODO: One test hits this line when passing invalid children what should be done?
	        // debugger;
	    } else {
	        // debugger;
	    }*/
	    if (patchArray) {
	        if (patchKeyed) {
	            patchKeyedChildren(lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling);
	        }
	        else {
	            patchNonKeyedChildren(lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling);
	        }
	    }
	}
	function patchComponent(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isClass, isRecycling) {
	    var lastType = lastVNode.type;
	    var nextType = nextVNode.type;
	    var nextProps = nextVNode.props || EMPTY_OBJ;
	    var lastKey = lastVNode.key;
	    var nextKey = nextVNode.key;
	    var defaultProps = nextType.defaultProps;
	    if (!isUndefined(defaultProps)) {
	        copyPropsTo(defaultProps, nextProps);
	        nextVNode.props = nextProps;
	    }
	    if (lastType !== nextType) {
	        if (isClass) {
	            replaceWithNewNode(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
	        }
	        else {
	            var lastInput = lastVNode.children._lastInput || lastVNode.children;
	            var nextInput = createFunctionalComponentInput(nextVNode, nextType, nextProps, context);
	            unmount(lastVNode, null, lifecycle, false, isRecycling);
	            patch(lastInput, nextInput, parentDom, lifecycle, context, isSVG, isRecycling);
	            var dom = nextVNode.dom = nextInput.dom;
	            nextVNode.children = nextInput;
	            mountFunctionalComponentCallbacks(nextVNode.ref, dom, lifecycle);
	        }
	    }
	    else {
	        if (isClass) {
	            if (lastKey !== nextKey) {
	                replaceWithNewNode(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
	                return false;
	            }
	            var instance = lastVNode.children;
	            if (instance._unmounted) {
	                if (isNull(parentDom)) {
	                    return true;
	                }
	                replaceChild(parentDom, mountComponent(nextVNode, null, lifecycle, context, isSVG, nextVNode.flags & 4 /* ComponentClass */), lastVNode.dom);
	            }
	            else {
	                var lastState = instance.state;
	                var nextState = instance.state;
	                var lastProps = instance.props;
	                var childContext = instance.getChildContext();
	                nextVNode.children = instance;
	                instance._isSVG = isSVG;
	                if (!isNullOrUndef(childContext)) {
	                    childContext = Object.assign({}, context, childContext);
	                }
	                else {
	                    childContext = context;
	                }
	                var lastInput$1 = instance._lastInput;
	                var nextInput$1 = instance._updateComponent(lastState, nextState, lastProps, nextProps, context, false, false);
	                var didUpdate = true;
	                instance._childContext = childContext;
	                if (isInvalid(nextInput$1)) {
	                    nextInput$1 = createVoidVNode();
	                }
	                else if (nextInput$1 === NO_OP) {
	                    nextInput$1 = lastInput$1;
	                    didUpdate = false;
	                }
	                else if (isStringOrNumber(nextInput$1)) {
	                    nextInput$1 = createTextVNode(nextInput$1);
	                }
	                else if (isArray(nextInput$1)) {
	                    if (false) {
	                        throwError('a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.');
	                    }
	                    throwError();
	                }
	                else if (isObject(nextInput$1) && nextInput$1.dom) {
	                    nextInput$1 = cloneVNode(nextInput$1);
	                }
	                if (nextInput$1.flags & 28 /* Component */) {
	                    nextInput$1.parentVNode = nextVNode;
	                }
	                else if (lastInput$1.flags & 28 /* Component */) {
	                    lastInput$1.parentVNode = nextVNode;
	                }
	                instance._lastInput = nextInput$1;
	                instance._vNode = nextVNode;
	                if (didUpdate) {
	                    var fastUnmount = lifecycle.fastUnmount;
	                    var subLifecycle = instance._lifecycle;
	                    lifecycle.fastUnmount = subLifecycle.fastUnmount;
	                    patch(lastInput$1, nextInput$1, parentDom, lifecycle, childContext, isSVG, isRecycling);
	                    subLifecycle.fastUnmount = lifecycle.fastUnmount;
	                    lifecycle.fastUnmount = fastUnmount;
	                    instance.componentDidUpdate(lastProps, lastState);
	                    options.afterUpdate && options.afterUpdate(nextVNode);
	                    options.findDOMNodeEnabled && componentToDOMNodeMap.set(instance, nextInput$1.dom);
	                }
	                nextVNode.dom = nextInput$1.dom;
	            }
	        }
	        else {
	            var shouldUpdate = true;
	            var lastProps$1 = lastVNode.props;
	            var nextHooks = nextVNode.ref;
	            var nextHooksDefined = !isNullOrUndef(nextHooks);
	            var lastInput$2 = lastVNode.children;
	            var nextInput$2 = lastInput$2;
	            nextVNode.dom = lastVNode.dom;
	            nextVNode.children = lastInput$2;
	            if (lastKey !== nextKey) {
	                shouldUpdate = true;
	            }
	            else {
	                if (nextHooksDefined && !isNullOrUndef(nextHooks.onComponentShouldUpdate)) {
	                    shouldUpdate = nextHooks.onComponentShouldUpdate(lastProps$1, nextProps);
	                }
	            }
	            if (shouldUpdate !== false) {
	                if (nextHooksDefined && !isNullOrUndef(nextHooks.onComponentWillUpdate)) {
	                    nextHooks.onComponentWillUpdate(lastProps$1, nextProps);
	                }
	                nextInput$2 = nextType(nextProps, context);
	                if (isInvalid(nextInput$2)) {
	                    nextInput$2 = createVoidVNode();
	                }
	                else if (isStringOrNumber(nextInput$2) && nextInput$2 !== NO_OP) {
	                    nextInput$2 = createTextVNode(nextInput$2);
	                }
	                else if (isArray(nextInput$2)) {
	                    if (false) {
	                        throwError('a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.');
	                    }
	                    throwError();
	                }
	                else if (isObject(nextInput$2) && nextInput$2.dom) {
	                    nextInput$2 = cloneVNode(nextInput$2);
	                }
	                if (nextInput$2 !== NO_OP) {
	                    patch(lastInput$2, nextInput$2, parentDom, lifecycle, context, isSVG, isRecycling);
	                    nextVNode.children = nextInput$2;
	                    if (nextHooksDefined && !isNullOrUndef(nextHooks.onComponentDidUpdate)) {
	                        nextHooks.onComponentDidUpdate(lastProps$1, nextProps);
	                    }
	                    nextVNode.dom = nextInput$2.dom;
	                }
	            }
	            if (nextInput$2.flags & 28 /* Component */) {
	                nextInput$2.parentVNode = nextVNode;
	            }
	            else if (lastInput$2.flags & 28 /* Component */) {
	                lastInput$2.parentVNode = nextVNode;
	            }
	        }
	    }
	    return false;
	}
	function patchText(lastVNode, nextVNode) {
	    var nextText = nextVNode.children;
	    var dom = lastVNode.dom;
	    nextVNode.dom = dom;
	    if (lastVNode.children !== nextText) {
	        dom.nodeValue = nextText;
	    }
	}
	function patchVoid(lastVNode, nextVNode) {
	    nextVNode.dom = lastVNode.dom;
	}
	function patchNonKeyedChildren(lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling) {
	    var lastChildrenLength = lastChildren.length;
	    var nextChildrenLength = nextChildren.length;
	    var commonLength = lastChildrenLength > nextChildrenLength ? nextChildrenLength : lastChildrenLength;
	    var i = 0;
	    for (; i < commonLength; i++) {
	        var nextChild = nextChildren[i];
	        if (nextChild.dom) {
	            nextChild = nextChildren[i] = cloneVNode(nextChild);
	        }
	        patch(lastChildren[i], nextChild, dom, lifecycle, context, isSVG, isRecycling);
	    }
	    if (lastChildrenLength < nextChildrenLength) {
	        for (i = commonLength; i < nextChildrenLength; i++) {
	            var nextChild$1 = nextChildren[i];
	            if (nextChild$1.dom) {
	                nextChild$1 = nextChildren[i] = cloneVNode(nextChild$1);
	            }
	            appendChild(dom, mount(nextChild$1, null, lifecycle, context, isSVG));
	        }
	    }
	    else if (nextChildrenLength === 0) {
	        removeAllChildren(dom, lastChildren, lifecycle, isRecycling);
	    }
	    else if (lastChildrenLength > nextChildrenLength) {
	        for (i = commonLength; i < lastChildrenLength; i++) {
	            unmount(lastChildren[i], dom, lifecycle, false, isRecycling);
	        }
	    }
	}
	function patchKeyedChildren(a, b, dom, lifecycle, context, isSVG, isRecycling) {
	    var aLength = a.length;
	    var bLength = b.length;
	    var aEnd = aLength - 1;
	    var bEnd = bLength - 1;
	    var aStart = 0;
	    var bStart = 0;
	    var i;
	    var j;
	    var aNode;
	    var bNode;
	    var nextNode;
	    var nextPos;
	    var node;
	    if (aLength === 0) {
	        if (bLength !== 0) {
	            mountArrayChildren(b, dom, lifecycle, context, isSVG);
	        }
	        return;
	    }
	    else if (bLength === 0) {
	        removeAllChildren(dom, a, lifecycle, isRecycling);
	        return;
	    }
	    var aStartNode = a[aStart];
	    var bStartNode = b[bStart];
	    var aEndNode = a[aEnd];
	    var bEndNode = b[bEnd];
	    if (bStartNode.dom) {
	        b[bStart] = bStartNode = cloneVNode(bStartNode);
	    }
	    if (bEndNode.dom) {
	        b[bEnd] = bEndNode = cloneVNode(bEndNode);
	    }
	    // Step 1
	    /* eslint no-constant-condition: 0 */
	    outer: while (true) {
	        // Sync nodes with the same key at the beginning.
	        while (aStartNode.key === bStartNode.key) {
	            patch(aStartNode, bStartNode, dom, lifecycle, context, isSVG, isRecycling);
	            aStart++;
	            bStart++;
	            if (aStart > aEnd || bStart > bEnd) {
	                break outer;
	            }
	            aStartNode = a[aStart];
	            bStartNode = b[bStart];
	            if (bStartNode.dom) {
	                b[bStart] = bStartNode = cloneVNode(bStartNode);
	            }
	        }
	        // Sync nodes with the same key at the end.
	        while (aEndNode.key === bEndNode.key) {
	            patch(aEndNode, bEndNode, dom, lifecycle, context, isSVG, isRecycling);
	            aEnd--;
	            bEnd--;
	            if (aStart > aEnd || bStart > bEnd) {
	                break outer;
	            }
	            aEndNode = a[aEnd];
	            bEndNode = b[bEnd];
	            if (bEndNode.dom) {
	                b[bEnd] = bEndNode = cloneVNode(bEndNode);
	            }
	        }
	        // Move and sync nodes from right to left.
	        if (aEndNode.key === bStartNode.key) {
	            patch(aEndNode, bStartNode, dom, lifecycle, context, isSVG, isRecycling);
	            insertOrAppend(dom, bStartNode.dom, aStartNode.dom);
	            aEnd--;
	            bStart++;
	            aEndNode = a[aEnd];
	            bStartNode = b[bStart];
	            if (bStartNode.dom) {
	                b[bStart] = bStartNode = cloneVNode(bStartNode);
	            }
	            continue;
	        }
	        // Move and sync nodes from left to right.
	        if (aStartNode.key === bEndNode.key) {
	            patch(aStartNode, bEndNode, dom, lifecycle, context, isSVG, isRecycling);
	            nextPos = bEnd + 1;
	            nextNode = nextPos < b.length ? b[nextPos].dom : null;
	            insertOrAppend(dom, bEndNode.dom, nextNode);
	            aStart++;
	            bEnd--;
	            aStartNode = a[aStart];
	            bEndNode = b[bEnd];
	            if (bEndNode.dom) {
	                b[bEnd] = bEndNode = cloneVNode(bEndNode);
	            }
	            continue;
	        }
	        break;
	    }
	    if (aStart > aEnd) {
	        if (bStart <= bEnd) {
	            nextPos = bEnd + 1;
	            nextNode = nextPos < b.length ? b[nextPos].dom : null;
	            while (bStart <= bEnd) {
	                node = b[bStart];
	                if (node.dom) {
	                    b[bStart] = node = cloneVNode(node);
	                }
	                bStart++;
	                insertOrAppend(dom, mount(node, null, lifecycle, context, isSVG), nextNode);
	            }
	        }
	    }
	    else if (bStart > bEnd) {
	        while (aStart <= aEnd) {
	            unmount(a[aStart++], dom, lifecycle, false, isRecycling);
	        }
	    }
	    else {
	        aLength = aEnd - aStart + 1;
	        bLength = bEnd - bStart + 1;
	        var aNullable = a;
	        var sources = new Array(bLength);
	        // Mark all nodes as inserted.
	        for (i = 0; i < bLength; i++) {
	            sources[i] = -1;
	        }
	        var moved = false;
	        var pos = 0;
	        var patched = 0;
	        if ((bLength <= 4) || (aLength * bLength <= 16)) {
	            for (i = aStart; i <= aEnd; i++) {
	                aNode = a[i];
	                if (patched < bLength) {
	                    for (j = bStart; j <= bEnd; j++) {
	                        bNode = b[j];
	                        if (aNode.key === bNode.key) {
	                            sources[j - bStart] = i;
	                            if (pos > j) {
	                                moved = true;
	                            }
	                            else {
	                                pos = j;
	                            }
	                            if (bNode.dom) {
	                                b[j] = bNode = cloneVNode(bNode);
	                            }
	                            patch(aNode, bNode, dom, lifecycle, context, isSVG, isRecycling);
	                            patched++;
	                            aNullable[i] = null;
	                            break;
	                        }
	                    }
	                }
	            }
	        }
	        else {
	            var keyIndex = new Map();
	            for (i = bStart; i <= bEnd; i++) {
	                node = b[i];
	                keyIndex.set(node.key, i);
	            }
	            for (i = aStart; i <= aEnd; i++) {
	                aNode = a[i];
	                if (patched < bLength) {
	                    j = keyIndex.get(aNode.key);
	                    if (!isUndefined(j)) {
	                        bNode = b[j];
	                        sources[j - bStart] = i;
	                        if (pos > j) {
	                            moved = true;
	                        }
	                        else {
	                            pos = j;
	                        }
	                        if (bNode.dom) {
	                            b[j] = bNode = cloneVNode(bNode);
	                        }
	                        patch(aNode, bNode, dom, lifecycle, context, isSVG, isRecycling);
	                        patched++;
	                        aNullable[i] = null;
	                    }
	                }
	            }
	        }
	        if (aLength === a.length && patched === 0) {
	            removeAllChildren(dom, a, lifecycle, isRecycling);
	            while (bStart < bLength) {
	                node = b[bStart];
	                if (node.dom) {
	                    b[bStart] = node = cloneVNode(node);
	                }
	                bStart++;
	                insertOrAppend(dom, mount(node, null, lifecycle, context, isSVG), null);
	            }
	        }
	        else {
	            i = aLength - patched;
	            while (i > 0) {
	                aNode = aNullable[aStart++];
	                if (!isNull(aNode)) {
	                    unmount(aNode, dom, lifecycle, true, isRecycling);
	                    i--;
	                }
	            }
	            if (moved) {
	                var seq = lis_algorithm(sources);
	                j = seq.length - 1;
	                for (i = bLength - 1; i >= 0; i--) {
	                    if (sources[i] === -1) {
	                        pos = i + bStart;
	                        node = b[pos];
	                        if (node.dom) {
	                            b[pos] = node = cloneVNode(node);
	                        }
	                        nextPos = pos + 1;
	                        nextNode = nextPos < b.length ? b[nextPos].dom : null;
	                        insertOrAppend(dom, mount(node, dom, lifecycle, context, isSVG), nextNode);
	                    }
	                    else {
	                        if (j < 0 || i !== seq[j]) {
	                            pos = i + bStart;
	                            node = b[pos];
	                            nextPos = pos + 1;
	                            nextNode = nextPos < b.length ? b[nextPos].dom : null;
	                            insertOrAppend(dom, node.dom, nextNode);
	                        }
	                        else {
	                            j--;
	                        }
	                    }
	                }
	            }
	            else if (patched !== bLength) {
	                for (i = bLength - 1; i >= 0; i--) {
	                    if (sources[i] === -1) {
	                        pos = i + bStart;
	                        node = b[pos];
	                        if (node.dom) {
	                            b[pos] = node = cloneVNode(node);
	                        }
	                        nextPos = pos + 1;
	                        nextNode = nextPos < b.length ? b[nextPos].dom : null;
	                        insertOrAppend(dom, mount(node, null, lifecycle, context, isSVG), nextNode);
	                    }
	                }
	            }
	        }
	    }
	}
	// // https://en.wikipedia.org/wiki/Longest_increasing_subsequence
	function lis_algorithm(a) {
	    var p = a.slice(0);
	    var result = [];
	    result.push(0);
	    var i;
	    var j;
	    var u;
	    var v;
	    var c;
	    for (i = 0; i < a.length; i++) {
	        if (a[i] === -1) {
	            continue;
	        }
	        j = result[result.length - 1];
	        if (a[j] < a[i]) {
	            p[i] = j;
	            result.push(i);
	            continue;
	        }
	        u = 0;
	        v = result.length - 1;
	        while (u < v) {
	            c = ((u + v) / 2) | 0;
	            if (a[result[c]] < a[i]) {
	                u = c + 1;
	            }
	            else {
	                v = c;
	            }
	        }
	        if (a[i] < a[result[u]]) {
	            if (u > 0) {
	                p[i] = result[u - 1];
	            }
	            result[u] = i;
	        }
	    }
	    u = result.length;
	    v = result[u - 1];
	    while (u-- > 0) {
	        result[u] = v;
	        v = p[v];
	    }
	    return result;
	}
	function patchProp(prop, lastValue, nextValue, dom, isSVG, lifecycle) {
	    if (skipProps[prop]) {
	        return;
	    }
	    if (booleanProps[prop]) {
	        dom[prop] = nextValue ? true : false;
	    }
	    else if (strictProps[prop]) {
	        var value = isNullOrUndef(nextValue) ? '' : nextValue;
	        if (dom[prop] !== value) {
	            dom[prop] = value;
	        }
	    }
	    else if (lastValue !== nextValue) {
	        if (isAttrAnEvent(prop)) {
	            patchEvent(prop, lastValue, nextValue, dom, lifecycle);
	        }
	        else if (isNullOrUndef(nextValue)) {
	            dom.removeAttribute(prop);
	        }
	        else if (prop === 'className') {
	            if (isSVG) {
	                dom.setAttribute('class', nextValue);
	            }
	            else {
	                dom.className = nextValue;
	            }
	        }
	        else if (prop === 'style') {
	            patchStyle(lastValue, nextValue, dom);
	        }
	        else if (prop === 'dangerouslySetInnerHTML') {
	            var lastHtml = lastValue && lastValue.__html;
	            var nextHtml = nextValue && nextValue.__html;
	            if (lastHtml !== nextHtml) {
	                if (!isNullOrUndef(nextHtml)) {
	                    dom.innerHTML = nextHtml;
	                }
	            }
	        }
	        else if (prop !== 'childrenType' && prop !== 'ref' && prop !== 'key') {
	            var dehyphenProp;
	            if (dehyphenProps[prop]) {
	                dehyphenProp = dehyphenProps[prop];
	            }
	            else if (isSVG && prop.match(probablyKebabProps)) {
	                dehyphenProp = prop.replace(/([a-z])([A-Z]|1)/g, kebabize);
	                dehyphenProps[prop] = dehyphenProp;
	            }
	            else {
	                dehyphenProp = prop;
	            }
	            var ns = namespaces[prop];
	            if (ns) {
	                dom.setAttributeNS(ns, dehyphenProp, nextValue);
	            }
	            else {
	                dom.setAttribute(dehyphenProp, nextValue);
	            }
	        }
	    }
	}
	function patchEvents(lastEvents, nextEvents, dom, lifecycle) {
	    lastEvents = lastEvents || EMPTY_OBJ;
	    nextEvents = nextEvents || EMPTY_OBJ;
	    if (nextEvents !== EMPTY_OBJ) {
	        for (var name in nextEvents) {
	            // do not add a hasOwnProperty check here, it affects performance
	            patchEvent(name, lastEvents[name], nextEvents[name], dom, lifecycle);
	        }
	    }
	    if (lastEvents !== EMPTY_OBJ) {
	        for (var name$1 in lastEvents) {
	            // do not add a hasOwnProperty check here, it affects performance
	            if (isNullOrUndef(nextEvents[name$1])) {
	                patchEvent(name$1, lastEvents[name$1], null, dom, lifecycle);
	            }
	        }
	    }
	}
	function patchEvent(name, lastValue, nextValue, dom, lifecycle) {
	    if (lastValue !== nextValue) {
	        var nameLowerCase = name.toLowerCase();
	        var domEvent = dom[nameLowerCase];
	        // if the function is wrapped, that means it's been controlled by a wrapper
	        if (domEvent && domEvent.wrapped) {
	            return;
	        }
	        if (delegatedProps[name]) {
	            handleEvent(name, lastValue, nextValue, dom);
	        }
	        else {
	            if (lastValue !== nextValue) {
	                if (!isFunction(nextValue) && !isNullOrUndef(nextValue)) {
	                    var linkEvent = nextValue.event;
	                    if (linkEvent && isFunction(linkEvent)) {
	                        if (!dom._data) {
	                            dom[nameLowerCase] = function (e) {
	                                linkEvent(e.currentTarget._data, e);
	                            };
	                        }
	                        dom._data = nextValue.data;
	                    }
	                    else {
	                        if (false) {
	                            throwError(("an event on a VNode \"" + name + "\". was not a function or a valid linkEvent."));
	                        }
	                        throwError();
	                    }
	                }
	                else {
	                    dom[nameLowerCase] = nextValue;
	                }
	            }
	        }
	    }
	}
	function patchProps(lastProps, nextProps, dom, lifecycle, context, isSVG) {
	    lastProps = lastProps || EMPTY_OBJ;
	    nextProps = nextProps || EMPTY_OBJ;
	    if (nextProps !== EMPTY_OBJ) {
	        for (var prop in nextProps) {
	            // do not add a hasOwnProperty check here, it affects performance
	            var nextValue = nextProps[prop];
	            var lastValue = lastProps[prop];
	            if (isNullOrUndef(nextValue)) {
	                removeProp(prop, nextValue, dom);
	            }
	            else {
	                patchProp(prop, lastValue, nextValue, dom, isSVG, lifecycle);
	            }
	        }
	    }
	    if (lastProps !== EMPTY_OBJ) {
	        for (var prop$1 in lastProps) {
	            // do not add a hasOwnProperty check here, it affects performance
	            if (isNullOrUndef(nextProps[prop$1])) {
	                removeProp(prop$1, lastProps[prop$1], dom);
	            }
	        }
	    }
	}
	// We are assuming here that we come from patchProp routine
	// -nextAttrValue cannot be null or undefined
	function patchStyle(lastAttrValue, nextAttrValue, dom) {
	    if (isString(nextAttrValue)) {
	        dom.style.cssText = nextAttrValue;
	        return;
	    }
	    for (var style in nextAttrValue) {
	        // do not add a hasOwnProperty check here, it affects performance
	        var value = nextAttrValue[style];
	        if (isNumber(value) && !isUnitlessNumber[style]) {
	            dom.style[style] = value + 'px';
	        }
	        else {
	            dom.style[style] = value;
	        }
	    }
	    if (!isNullOrUndef(lastAttrValue)) {
	        for (var style$1 in lastAttrValue) {
	            if (isNullOrUndef(nextAttrValue[style$1])) {
	                dom.style[style$1] = '';
	            }
	        }
	    }
	}
	function removeProp(prop, lastValue, dom) {
	    if (prop === 'className') {
	        dom.removeAttribute('class');
	    }
	    else if (prop === 'value') {
	        dom.value = '';
	    }
	    else if (prop === 'style') {
	        dom.removeAttribute('style');
	    }
	    else if (isAttrAnEvent(prop)) {
	        handleEvent(name, lastValue, null, dom);
	    }
	    else {
	        dom.removeAttribute(prop);
	    }
	}
	
	var componentPools = new Map();
	var elementPools = new Map();
	function recycleElement(vNode, lifecycle, context, isSVG) {
	    var tag = vNode.type;
	    var key = vNode.key;
	    var pools = elementPools.get(tag);
	    if (!isUndefined(pools)) {
	        var pool = key === null ? pools.nonKeyed : pools.keyed.get(key);
	        if (!isUndefined(pool)) {
	            var recycledVNode = pool.pop();
	            if (!isUndefined(recycledVNode)) {
	                patchElement(recycledVNode, vNode, null, lifecycle, context, isSVG, true);
	                return vNode.dom;
	            }
	        }
	    }
	    return null;
	}
	function poolElement(vNode) {
	    var tag = vNode.type;
	    var key = vNode.key;
	    var pools = elementPools.get(tag);
	    if (isUndefined(pools)) {
	        pools = {
	            nonKeyed: [],
	            keyed: new Map()
	        };
	        elementPools.set(tag, pools);
	    }
	    if (isNull(key)) {
	        pools.nonKeyed.push(vNode);
	    }
	    else {
	        var pool = pools.keyed.get(key);
	        if (isUndefined(pool)) {
	            pool = [];
	            pools.keyed.set(key, pool);
	        }
	        pool.push(vNode);
	    }
	}
	function recycleComponent(vNode, lifecycle, context, isSVG) {
	    var type = vNode.type;
	    var key = vNode.key;
	    var pools = componentPools.get(type);
	    if (!isUndefined(pools)) {
	        var pool = key === null ? pools.nonKeyed : pools.keyed.get(key);
	        if (!isUndefined(pool)) {
	            var recycledVNode = pool.pop();
	            if (!isUndefined(recycledVNode)) {
	                var flags = vNode.flags;
	                var failed = patchComponent(recycledVNode, vNode, null, lifecycle, context, isSVG, flags & 4 /* ComponentClass */, true);
	                if (!failed) {
	                    return vNode.dom;
	                }
	            }
	        }
	    }
	    return null;
	}
	function poolComponent(vNode) {
	    var type = vNode.type;
	    var key = vNode.key;
	    var hooks = vNode.ref;
	    var nonRecycleHooks = hooks && (hooks.onComponentWillMount ||
	        hooks.onComponentWillUnmount ||
	        hooks.onComponentDidMount ||
	        hooks.onComponentWillUpdate ||
	        hooks.onComponentDidUpdate);
	    if (nonRecycleHooks) {
	        return;
	    }
	    var pools = componentPools.get(type);
	    if (isUndefined(pools)) {
	        pools = {
	            nonKeyed: [],
	            keyed: new Map()
	        };
	        componentPools.set(type, pools);
	    }
	    if (isNull(key)) {
	        pools.nonKeyed.push(vNode);
	    }
	    else {
	        var pool = pools.keyed.get(key);
	        if (isUndefined(pool)) {
	            pool = [];
	            pools.keyed.set(key, pool);
	        }
	        pool.push(vNode);
	    }
	}
	
	function mount(vNode, parentDom, lifecycle, context, isSVG) {
	    var flags = vNode.flags;
	    if (flags & 3970 /* Element */) {
	        return mountElement(vNode, parentDom, lifecycle, context, isSVG);
	    }
	    else if (flags & 28 /* Component */) {
	        return mountComponent(vNode, parentDom, lifecycle, context, isSVG, flags & 4 /* ComponentClass */);
	    }
	    else if (flags & 4096 /* Void */) {
	        return mountVoid(vNode, parentDom);
	    }
	    else if (flags & 1 /* Text */) {
	        return mountText(vNode, parentDom);
	    }
	    else {
	        if (false) {
	            if (typeof vNode === 'object') {
	                throwError(("mount() received an object that's not a valid VNode, you should stringify it first. Object: \"" + (JSON.stringify(vNode)) + "\"."));
	            }
	            else {
	                throwError(("mount() expects a valid VNode, instead it received an object with the type \"" + (typeof vNode) + "\"."));
	            }
	        }
	        throwError();
	    }
	}
	function mountText(vNode, parentDom) {
	    var dom = document.createTextNode(vNode.children);
	    vNode.dom = dom;
	    if (parentDom) {
	        appendChild(parentDom, dom);
	    }
	    return dom;
	}
	function mountVoid(vNode, parentDom) {
	    var dom = document.createTextNode('');
	    vNode.dom = dom;
	    if (parentDom) {
	        appendChild(parentDom, dom);
	    }
	    return dom;
	}
	function mountElement(vNode, parentDom, lifecycle, context, isSVG) {
	    if (options.recyclingEnabled) {
	        var dom$1 = recycleElement(vNode, lifecycle, context, isSVG);
	        if (!isNull(dom$1)) {
	            if (!isNull(parentDom)) {
	                appendChild(parentDom, dom$1);
	            }
	            return dom$1;
	        }
	    }
	    var tag = vNode.type;
	    var flags = vNode.flags;
	    if (isSVG || (flags & 128 /* SvgElement */)) {
	        isSVG = true;
	    }
	    var dom = documentCreateElement(tag, isSVG);
	    var children = vNode.children;
	    var props = vNode.props;
	    var events = vNode.events;
	    var ref = vNode.ref;
	    vNode.dom = dom;
	    if (!isNull(children)) {
	        if (isStringOrNumber(children)) {
	            setTextContent(dom, children);
	        }
	        else if (isArray(children)) {
	            mountArrayChildren(children, dom, lifecycle, context, isSVG);
	        }
	        else if (isVNode(children)) {
	            mount(children, dom, lifecycle, context, isSVG);
	        }
	    }
	    if (!(flags & 2 /* HtmlElement */)) {
	        processElement(flags, vNode, dom);
	    }
	    if (!isNull(props)) {
	        for (var prop in props) {
	            // do not add a hasOwnProperty check here, it affects performance
	            patchProp(prop, null, props[prop], dom, isSVG, lifecycle);
	        }
	    }
	    if (!isNull(events)) {
	        for (var name in events) {
	            // do not add a hasOwnProperty check here, it affects performance
	            patchEvent(name, null, events[name], dom, lifecycle);
	        }
	    }
	    if (!isNull(ref)) {
	        mountRef(dom, ref, lifecycle);
	    }
	    if (!isNull(parentDom)) {
	        appendChild(parentDom, dom);
	    }
	    return dom;
	}
	function mountArrayChildren(children, dom, lifecycle, context, isSVG) {
	    for (var i = 0; i < children.length; i++) {
	        var child = children[i];
	        if (!isInvalid(child)) {
	            if (child.dom) {
	                children[i] = child = cloneVNode(child);
	            }
	            mount(children[i], dom, lifecycle, context, isSVG);
	        }
	    }
	}
	function mountComponent(vNode, parentDom, lifecycle, context, isSVG, isClass) {
	    if (options.recyclingEnabled) {
	        var dom$1 = recycleComponent(vNode, lifecycle, context, isSVG);
	        if (!isNull(dom$1)) {
	            if (!isNull(parentDom)) {
	                appendChild(parentDom, dom$1);
	            }
	            return dom$1;
	        }
	    }
	    var type = vNode.type;
	    var props = vNode.props || EMPTY_OBJ;
	    var defaultProps = type.defaultProps;
	    var ref = vNode.ref;
	    var dom;
	    if (!isUndefined(defaultProps)) {
	        copyPropsTo(defaultProps, props);
	        vNode.props = props;
	    }
	    if (isClass) {
	        var instance = createClassComponentInstance(vNode, type, props, context, isSVG);
	        // If instance does not have componentWillUnmount specified we can enable fastUnmount
	        var input = instance._lastInput;
	        var prevFastUnmount = lifecycle.fastUnmount;
	        // we store the fastUnmount value, but we set it back to true on the lifecycle
	        // we do this so we can determine if the component render has a fastUnmount or not
	        lifecycle.fastUnmount = true;
	        instance._vNode = vNode;
	        vNode.dom = dom = mount(input, null, lifecycle, instance._childContext, isSVG);
	        // we now create a lifecycle for this component and store the fastUnmount value
	        var subLifecycle = instance._lifecycle = new Lifecycle();
	        // children lifecycle can fastUnmount if itself does need unmount callback and within its cycle there was none
	        subLifecycle.fastUnmount = isUndefined(instance.componentWillUnmount) && lifecycle.fastUnmount;
	        // higher lifecycle can fastUnmount only if previously it was able to and this children doesnt have any
	        lifecycle.fastUnmount = prevFastUnmount && subLifecycle.fastUnmount;
	        if (!isNull(parentDom)) {
	            appendChild(parentDom, dom);
	        }
	        mountClassComponentCallbacks(vNode, ref, instance, lifecycle);
	        options.findDOMNodeEnabled && componentToDOMNodeMap.set(instance, dom);
	        vNode.children = instance;
	    }
	    else {
	        var input$1 = createFunctionalComponentInput(vNode, type, props, context);
	        vNode.dom = dom = mount(input$1, null, lifecycle, context, isSVG);
	        vNode.children = input$1;
	        mountFunctionalComponentCallbacks(ref, dom, lifecycle);
	        if (!isNull(parentDom)) {
	            appendChild(parentDom, dom);
	        }
	    }
	    return dom;
	}
	function mountClassComponentCallbacks(vNode, ref, instance, lifecycle) {
	    if (ref) {
	        if (isFunction(ref)) {
	            ref(instance);
	        }
	        else {
	            if (false) {
	                if (isStringOrNumber(ref)) {
	                    throwError('string "refs" are not supported in Inferno 1.0. Use callback "refs" instead.');
	                }
	                else if (isObject(ref) && (vNode.flags & 4 /* ComponentClass */)) {
	                    throwError('functional component lifecycle events are not supported on ES2015 class components.');
	                }
	                else {
	                    throwError(("a bad value for \"ref\" was used on component: \"" + (JSON.stringify(ref)) + "\""));
	                }
	            }
	            throwError();
	        }
	    }
	    var cDM = instance.componentDidMount;
	    var afterMount = options.afterMount;
	    if (!isUndefined(cDM) || !isNull(afterMount)) {
	        lifecycle.addListener(function () {
	            afterMount && afterMount(vNode);
	            cDM && instance.componentDidMount();
	        });
	    }
	}
	function mountFunctionalComponentCallbacks(ref, dom, lifecycle) {
	    if (ref) {
	        if (!isNullOrUndef(ref.onComponentWillMount)) {
	            ref.onComponentWillMount();
	        }
	        if (!isNullOrUndef(ref.onComponentDidMount)) {
	            lifecycle.addListener(function () { return ref.onComponentDidMount(dom); });
	        }
	        if (!isNullOrUndef(ref.onComponentWillUnmount)) {
	            lifecycle.fastUnmount = false;
	        }
	    }
	}
	function mountRef(dom, value, lifecycle) {
	    if (isFunction(value)) {
	        lifecycle.fastUnmount = false;
	        lifecycle.addListener(function () { return value(dom); });
	    }
	    else {
	        if (isInvalid(value)) {
	            return;
	        }
	        if (false) {
	            throwError('string "refs" are not supported in Inferno 1.0. Use callback "refs" instead.');
	        }
	        throwError();
	    }
	}
	
	function createClassComponentInstance(vNode, Component, props, context, isSVG) {
	    if (isUndefined(context)) {
	        context = {};
	    }
	    var instance = new Component(props, context);
	    instance.context = context;
	    if (instance.props === EMPTY_OBJ) {
	        instance.props = props;
	    }
	    instance._patch = patch;
	    if (options.findDOMNodeEnabled) {
	        instance._componentToDOMNodeMap = componentToDOMNodeMap;
	    }
	    instance._unmounted = false;
	    instance._pendingSetState = true;
	    instance._isSVG = isSVG;
	    instance.componentWillMount();
	    var childContext = instance.getChildContext();
	    if (!isNullOrUndef(childContext)) {
	        instance._childContext = Object.assign({}, context, childContext);
	    }
	    else {
	        instance._childContext = context;
	    }
	    options.beforeRender && options.beforeRender(instance);
	    var input = instance.render(props, instance.state, context);
	    options.afterRender && options.afterRender(instance);
	    if (isArray(input)) {
	        if (false) {
	            throwError('a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.');
	        }
	        throwError();
	    }
	    else if (isInvalid(input)) {
	        input = createVoidVNode();
	    }
	    else if (isStringOrNumber(input)) {
	        input = createTextVNode(input);
	    }
	    else {
	        if (input.dom) {
	            input = cloneVNode(input);
	        }
	        if (input.flags & 28 /* Component */) {
	            // if we have an input that is also a component, we run into a tricky situation
	            // where the root vNode needs to always have the correct DOM entry
	            // so we break monomorphism on our input and supply it our vNode as parentVNode
	            // we can optimise this in the future, but this gets us out of a lot of issues
	            input.parentVNode = vNode;
	        }
	    }
	    instance._pendingSetState = false;
	    instance._lastInput = input;
	    return instance;
	}
	function replaceLastChildAndUnmount(lastInput, nextInput, parentDom, lifecycle, context, isSVG, isRecycling) {
	    replaceVNode(parentDom, mount(nextInput, null, lifecycle, context, isSVG), lastInput, lifecycle, isRecycling);
	}
	function replaceVNode(parentDom, dom, vNode, lifecycle, isRecycling) {
	    var shallowUnmount = false;
	    // we cannot cache nodeType here as vNode might be re-assigned below
	    if (vNode.flags & 28 /* Component */) {
	        // if we are accessing a stateful or stateless component, we want to access their last rendered input
	        // accessing their DOM node is not useful to us here
	        unmount(vNode, null, lifecycle, false, isRecycling);
	        vNode = vNode.children._lastInput || vNode.children;
	        shallowUnmount = true;
	    }
	    replaceChild(parentDom, dom, vNode.dom);
	    unmount(vNode, null, lifecycle, false, isRecycling);
	}
	function createFunctionalComponentInput(vNode, component, props, context) {
	    var input = component(props, context);
	    if (isArray(input)) {
	        if (false) {
	            throwError('a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.');
	        }
	        throwError();
	    }
	    else if (isInvalid(input)) {
	        input = createVoidVNode();
	    }
	    else if (isStringOrNumber(input)) {
	        input = createTextVNode(input);
	    }
	    else {
	        if (input.dom) {
	            input = cloneVNode(input);
	        }
	        if (input.flags & 28 /* Component */) {
	            // if we have an input that is also a component, we run into a tricky situation
	            // where the root vNode needs to always have the correct DOM entry
	            // so we break monomorphism on our input and supply it our vNode as parentVNode
	            // we can optimise this in the future, but this gets us out of a lot of issues
	            input.parentVNode = vNode;
	        }
	    }
	    return input;
	}
	function setTextContent(dom, text) {
	    if (text !== '') {
	        dom.textContent = text;
	    }
	    else {
	        dom.appendChild(document.createTextNode(''));
	    }
	}
	function updateTextContent(dom, text) {
	    dom.firstChild.nodeValue = text;
	}
	function appendChild(parentDom, dom) {
	    parentDom.appendChild(dom);
	}
	function insertOrAppend(parentDom, newNode, nextNode) {
	    if (isNullOrUndef(nextNode)) {
	        appendChild(parentDom, newNode);
	    }
	    else {
	        parentDom.insertBefore(newNode, nextNode);
	    }
	}
	function documentCreateElement(tag, isSVG) {
	    if (isSVG === true) {
	        return document.createElementNS(svgNS, tag);
	    }
	    else {
	        return document.createElement(tag);
	    }
	}
	function replaceWithNewNode(lastNode, nextNode, parentDom, lifecycle, context, isSVG, isRecycling) {
	    unmount(lastNode, null, lifecycle, false, isRecycling);
	    var dom = mount(nextNode, null, lifecycle, context, isSVG);
	    nextNode.dom = dom;
	    replaceChild(parentDom, dom, lastNode.dom);
	}
	function replaceChild(parentDom, nextDom, lastDom) {
	    if (!parentDom) {
	        parentDom = lastDom.parentNode;
	    }
	    parentDom.replaceChild(nextDom, lastDom);
	}
	function removeChild(parentDom, dom) {
	    parentDom.removeChild(dom);
	}
	function removeAllChildren(dom, children, lifecycle, isRecycling) {
	    dom.textContent = '';
	    if (!lifecycle.fastUnmount || (lifecycle.fastUnmount && options.recyclingEnabled && !isRecycling)) {
	        removeChildren(null, children, lifecycle, isRecycling);
	    }
	}
	function removeChildren(dom, children, lifecycle, isRecycling) {
	    for (var i = 0; i < children.length; i++) {
	        var child = children[i];
	        if (!isInvalid(child)) {
	            unmount(child, dom, lifecycle, true, isRecycling);
	        }
	    }
	}
	function isKeyed(lastChildren, nextChildren) {
	    return nextChildren.length && !isNullOrUndef(nextChildren[0]) && !isNullOrUndef(nextChildren[0].key)
	        && lastChildren.length && !isNullOrUndef(lastChildren[0]) && !isNullOrUndef(lastChildren[0].key);
	}
	
	function normalizeChildNodes(parentDom) {
	    var dom = parentDom.firstChild;
	    while (dom) {
	        if (dom.nodeType === 8) {
	            if (dom.data === '!') {
	                var placeholder = document.createTextNode('');
	                parentDom.replaceChild(placeholder, dom);
	                dom = dom.nextSibling;
	            }
	            else {
	                var lastDom = dom.previousSibling;
	                parentDom.removeChild(dom);
	                dom = lastDom || parentDom.firstChild;
	            }
	        }
	        else {
	            dom = dom.nextSibling;
	        }
	    }
	}
	function hydrateComponent(vNode, dom, lifecycle, context, isSVG, isClass) {
	    var type = vNode.type;
	    var props = vNode.props || EMPTY_OBJ;
	    var ref = vNode.ref;
	    vNode.dom = dom;
	    if (isClass) {
	        var _isSVG = dom.namespaceURI === svgNS;
	        var defaultProps = type.defaultProps;
	        if (!isUndefined(defaultProps)) {
	            copyPropsTo(defaultProps, props);
	            vNode.props = props;
	        }
	        var instance = createClassComponentInstance(vNode, type, props, context, _isSVG);
	        // If instance does not have componentWillUnmount specified we can enable fastUnmount
	        var prevFastUnmount = lifecycle.fastUnmount;
	        var input = instance._lastInput;
	        // we store the fastUnmount value, but we set it back to true on the lifecycle
	        // we do this so we can determine if the component render has a fastUnmount or not
	        lifecycle.fastUnmount = true;
	        instance._vComponent = vNode;
	        instance._vNode = vNode;
	        hydrate(input, dom, lifecycle, instance._childContext, _isSVG);
	        // we now create a lifecycle for this component and store the fastUnmount value
	        var subLifecycle = instance._lifecycle = new Lifecycle();
	        // children lifecycle can fastUnmount if itself does need unmount callback and within its cycle there was none
	        subLifecycle.fastUnmount = isUndefined(instance.componentWillUnmount) && lifecycle.fastUnmount;
	        // higher lifecycle can fastUnmount only if previously it was able to and this children doesnt have any
	        lifecycle.fastUnmount = prevFastUnmount && subLifecycle.fastUnmount;
	        mountClassComponentCallbacks(vNode, ref, instance, lifecycle);
	        options.findDOMNodeEnabled && componentToDOMNodeMap.set(instance, dom);
	        vNode.children = instance;
	    }
	    else {
	        var input$1 = createFunctionalComponentInput(vNode, type, props, context);
	        hydrate(input$1, dom, lifecycle, context, isSVG);
	        vNode.children = input$1;
	        vNode.dom = input$1.dom;
	        mountFunctionalComponentCallbacks(ref, dom, lifecycle);
	    }
	    return dom;
	}
	function hydrateElement(vNode, dom, lifecycle, context, isSVG) {
	    var tag = vNode.type;
	    var children = vNode.children;
	    var props = vNode.props;
	    var events = vNode.events;
	    var flags = vNode.flags;
	    var ref = vNode.ref;
	    if (isSVG || (flags & 128 /* SvgElement */)) {
	        isSVG = true;
	    }
	    if (dom.nodeType !== 1 || dom.tagName.toLowerCase() !== tag) {
	        var newDom = mountElement(vNode, null, lifecycle, context, isSVG);
	        vNode.dom = newDom;
	        replaceChild(dom.parentNode, newDom, dom);
	        return newDom;
	    }
	    vNode.dom = dom;
	    if (children) {
	        hydrateChildren(children, dom, lifecycle, context, isSVG);
	    }
	    if (!(flags & 2 /* HtmlElement */)) {
	        processElement(flags, vNode, dom);
	    }
	    if (props) {
	        for (var prop in props) {
	            patchProp(prop, null, props[prop], dom, isSVG, lifecycle);
	        }
	    }
	    if (events) {
	        for (var name in events) {
	            patchEvent(name, null, events[name], dom, lifecycle);
	        }
	    }
	    if (ref) {
	        mountRef(dom, ref, lifecycle);
	    }
	    return dom;
	}
	function hydrateChildren(children, parentDom, lifecycle, context, isSVG) {
	    normalizeChildNodes(parentDom);
	    var dom = parentDom.firstChild;
	    if (isArray(children)) {
	        for (var i = 0; i < children.length; i++) {
	            var child = children[i];
	            if (isObject(child) && !isNull(child)) {
	                if (dom) {
	                    dom = hydrate(child, dom, lifecycle, context, isSVG);
	                    dom = dom.nextSibling;
	                }
	                else {
	                    mount(child, parentDom, lifecycle, context, isSVG);
	                }
	            }
	        }
	    }
	    else if (isStringOrNumber(children)) {
	        if (dom && dom.nodeType === 3) {
	            if (dom.nodeValue !== children) {
	                dom.nodeValue = children;
	            }
	        }
	        else if (children) {
	            parentDom.textContent = children;
	        }
	        dom = dom.nextSibling;
	    }
	    else if (isObject(children)) {
	        hydrate(children, dom, lifecycle, context, isSVG);
	        dom = dom.nextSibling;
	    }
	    // clear any other DOM nodes, there should be only a single entry for the root
	    while (dom) {
	        parentDom.removeChild(dom);
	        dom = dom.nextSibling;
	    }
	}
	function hydrateText(vNode, dom) {
	    if (dom.nodeType !== 3) {
	        var newDom = mountText(vNode, null);
	        vNode.dom = newDom;
	        replaceChild(dom.parentNode, newDom, dom);
	        return newDom;
	    }
	    var text = vNode.children;
	    if (dom.nodeValue !== text) {
	        dom.nodeValue = text;
	    }
	    vNode.dom = dom;
	    return dom;
	}
	function hydrateVoid(vNode, dom) {
	    vNode.dom = dom;
	}
	function hydrate(vNode, dom, lifecycle, context, isSVG) {
	    if (false) {
	        if (isInvalid(dom)) {
	            throwError("failed to hydrate. The server-side render doesn't match client side.");
	        }
	    }
	    var flags = vNode.flags;
	    if (flags & 28 /* Component */) {
	        return hydrateComponent(vNode, dom, lifecycle, context, isSVG, flags & 4 /* ComponentClass */);
	    }
	    else if (flags & 3970 /* Element */) {
	        return hydrateElement(vNode, dom, lifecycle, context, isSVG);
	    }
	    else if (flags & 1 /* Text */) {
	        return hydrateText(vNode, dom);
	    }
	    else if (flags & 4096 /* Void */) {
	        return hydrateVoid(vNode, dom);
	    }
	    else {
	        if (false) {
	            throwError(("hydrate() expects a valid VNode, instead it received an object with the type \"" + (typeof vNode) + "\"."));
	        }
	        throwError();
	    }
	}
	function hydrateRoot(input, parentDom, lifecycle) {
	    var dom = parentDom && parentDom.firstChild;
	    if (dom) {
	        hydrate(input, dom, lifecycle, {}, false);
	        dom = parentDom.firstChild;
	        // clear any other DOM nodes, there should be only a single entry for the root
	        while (dom = dom.nextSibling) {
	            parentDom.removeChild(dom);
	        }
	        return true;
	    }
	    return false;
	}
	
	// rather than use a Map, like we did before, we can use an array here
	// given there shouldn't be THAT many roots on the page, the difference
	// in performance is huge: https://esbench.com/bench/5802a691330ab09900a1a2da
	var roots = [];
	var componentToDOMNodeMap = new Map();
	options.roots = roots;
	function findDOMNode(ref) {
	    if (!options.findDOMNodeEnabled) {
	        if (false) {
	            throwError('findDOMNode() has been disabled, use Inferno.options.findDOMNodeEnabled = true; enabled findDOMNode(). Warning this can significantly impact performance!');
	        }
	        throwError();
	    }
	    var dom = ref && ref.nodeType ? ref : null;
	    return componentToDOMNodeMap.get(ref) || dom;
	}
	function getRoot(dom) {
	    for (var i = 0; i < roots.length; i++) {
	        var root = roots[i];
	        if (root.dom === dom) {
	            return root;
	        }
	    }
	    return null;
	}
	
	function setRoot(dom, input, lifecycle) {
	    var root = {
	        dom: dom,
	        input: input,
	        lifecycle: lifecycle
	    };
	    roots.push(root);
	    return root;
	}
	function removeRoot(root) {
	    for (var i = 0; i < roots.length; i++) {
	        if (roots[i] === root) {
	            roots.splice(i, 1);
	            return;
	        }
	    }
	}
	var documentBody = isBrowser ? document.body : null;
	function render(input, parentDom) {
	    if (documentBody === parentDom) {
	        if (false) {
	            throwError('you cannot render() to the "document.body". Use an empty element as a container instead.');
	        }
	        throwError();
	    }
	    if (input === NO_OP) {
	        return;
	    }
	    var root = getRoot(parentDom);
	    if (isNull(root)) {
	        var lifecycle = new Lifecycle();
	        if (!isInvalid(input)) {
	            if (input.dom) {
	                input = cloneVNode(input);
	            }
	            if (!hydrateRoot(input, parentDom, lifecycle)) {
	                mount(input, parentDom, lifecycle, {}, false);
	            }
	            root = setRoot(parentDom, input, lifecycle);
	            lifecycle.trigger();
	        }
	    }
	    else {
	        var lifecycle$1 = root.lifecycle;
	        lifecycle$1.listeners = [];
	        if (isNullOrUndef(input)) {
	            unmount(root.input, parentDom, lifecycle$1, false, false);
	            removeRoot(root);
	        }
	        else {
	            if (input.dom) {
	                input = cloneVNode(input);
	            }
	            patch(root.input, input, parentDom, lifecycle$1, {}, false, false);
	        }
	        lifecycle$1.trigger();
	        root.input = input;
	    }
	    if (root) {
	        var rootInput = root.input;
	        if (rootInput && (rootInput.flags & 28 /* Component */)) {
	            return rootInput.children;
	        }
	    }
	}
	function createRenderer(_parentDom) {
	    var parentDom = _parentDom || null;
	    return function renderer(lastInput, nextInput) {
	        if (!parentDom) {
	            parentDom = lastInput;
	        }
	        render(nextInput, parentDom);
	    };
	}
	
	function linkEvent(data, event) {
	    return { data: data, event: event };
	}
	
	if (false) {
		Object.freeze(EMPTY_OBJ);
		var testFunc = function testFn() {};
		warning(
			(testFunc.name || testFunc.toString()).indexOf('testFn') !== -1,
			'It looks like you\'re using a minified copy of the development build ' +
			'of Inferno. When deploying Inferno apps to production, make sure to use ' +
			'the production build which skips development warnings and is faster. ' +
			'See http://infernojs.org for more details.'
		);
	}
	
	// we duplicate it so it plays nicely with different module loading systems
	var index = {
		linkEvent: linkEvent,
		// core shapes
		createVNode: createVNode,
	
		// cloning
		cloneVNode: cloneVNode,
	
		// used to shared common items between Inferno libs
		NO_OP: NO_OP,
		EMPTY_OBJ: EMPTY_OBJ,
	
		// DOM
		render: render,
		findDOMNode: findDOMNode,
		createRenderer: createRenderer,
		options: options
	};
	
	exports['default'] = index;
	exports.linkEvent = linkEvent;
	exports.createVNode = createVNode;
	exports.cloneVNode = cloneVNode;
	exports.NO_OP = NO_OP;
	exports.EMPTY_OBJ = EMPTY_OBJ;
	exports.render = render;
	exports.findDOMNode = findDOMNode;
	exports.createRenderer = createRenderer;
	exports.options = options;
	
	Object.defineProperty(exports, '__esModule', { value: true });
	
	})));


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(3),
	    getRawTag = __webpack_require__(21),
	    objectToString = __webpack_require__(22);
	
	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';
	
	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
	
	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}
	
	module.exports = baseGetTag;


/***/ },
/* 19 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	module.exports = freeGlobal;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(23);
	
	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);
	
	module.exports = getPrototype;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(3);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;
	
	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
	
	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];
	
	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}
	
	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}
	
	module.exports = getRawTag;


/***/ },
/* 22 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;
	
	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}
	
	module.exports = objectToString;


/***/ },
/* 23 */
/***/ function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}
	
	module.exports = overArg;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(19);
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	module.exports = root;


/***/ },
/* 25 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = applyMiddleware;
	
	var _compose = __webpack_require__(5);
	
	var _compose2 = _interopRequireDefault(_compose);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */
	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }
	
	  return function (createStore) {
	    return function (reducer, preloadedState, enhancer) {
	      var store = createStore(reducer, preloadedState, enhancer);
	      var _dispatch = store.dispatch;
	      var chain = [];
	
	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch(action) {
	          return _dispatch(action);
	        }
	      };
	      chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = _compose2['default'].apply(undefined, chain)(store.dispatch);
	
	      return _extends({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}

/***/ },
/* 27 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = bindActionCreators;
	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(undefined, arguments));
	  };
	}
	
	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */
	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }
	
	  if (typeof actionCreators !== 'object' || actionCreators === null) {
	    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	  }
	
	  var keys = Object.keys(actionCreators);
	  var boundActionCreators = {};
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    var actionCreator = actionCreators[key];
	    if (typeof actionCreator === 'function') {
	      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
	    }
	  }
	  return boundActionCreators;
	}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = combineReducers;
	
	var _createStore = __webpack_require__(6);
	
	var _isPlainObject = __webpack_require__(4);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _warning = __webpack_require__(8);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';
	
	  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state.';
	}
	
	function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
	  var reducerKeys = Object.keys(reducers);
	  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';
	
	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }
	
	  if (!(0, _isPlainObject2['default'])(inputState)) {
	    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
	  }
	
	  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
	    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
	  });
	
	  unexpectedKeys.forEach(function (key) {
	    unexpectedKeyCache[key] = true;
	  });
	
	  if (unexpectedKeys.length > 0) {
	    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
	  }
	}
	
	function assertReducerSanity(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });
	
	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
	    }
	
	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
	    }
	  });
	}
	
	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */
	function combineReducers(reducers) {
	  var reducerKeys = Object.keys(reducers);
	  var finalReducers = {};
	  for (var i = 0; i < reducerKeys.length; i++) {
	    var key = reducerKeys[i];
	
	    if (false) {
	      if (typeof reducers[key] === 'undefined') {
	        (0, _warning2['default'])('No reducer provided for key "' + key + '"');
	      }
	    }
	
	    if (typeof reducers[key] === 'function') {
	      finalReducers[key] = reducers[key];
	    }
	  }
	  var finalReducerKeys = Object.keys(finalReducers);
	
	  if (false) {
	    var unexpectedKeyCache = {};
	  }
	
	  var sanityError;
	  try {
	    assertReducerSanity(finalReducers);
	  } catch (e) {
	    sanityError = e;
	  }
	
	  return function combination() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var action = arguments[1];
	
	    if (sanityError) {
	      throw sanityError;
	    }
	
	    if (false) {
	      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
	      if (warningMessage) {
	        (0, _warning2['default'])(warningMessage);
	      }
	    }
	
	    var hasChanged = false;
	    var nextState = {};
	    for (var i = 0; i < finalReducerKeys.length; i++) {
	      var key = finalReducerKeys[i];
	      var reducer = finalReducers[key];
	      var previousStateForKey = state[key];
	      var nextStateForKey = reducer(previousStateForKey, action);
	      if (typeof nextStateForKey === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(key, action);
	        throw new Error(errorMessage);
	      }
	      nextState[key] = nextStateForKey;
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	    }
	    return hasChanged ? nextState : state;
	  };
	}

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(31);


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ponyfill = __webpack_require__(32);
	
	var _ponyfill2 = _interopRequireDefault(_ponyfill);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var root; /* global window */
	
	
	if (typeof self !== 'undefined') {
	  root = self;
	} else if (typeof window !== 'undefined') {
	  root = window;
	} else if (typeof global !== 'undefined') {
	  root = global;
	} else if (true) {
	  root = module;
	} else {
	  root = Function('return this')();
	}
	
	var result = (0, _ponyfill2['default'])(root);
	exports['default'] = result;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(33)(module)))

/***/ },
/* 32 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports['default'] = symbolObservablePonyfill;
	function symbolObservablePonyfill(root) {
		var result;
		var _Symbol = root.Symbol;
	
		if (typeof _Symbol === 'function') {
			if (_Symbol.observable) {
				result = _Symbol.observable;
			} else {
				result = _Symbol('observable');
				_Symbol.observable = result;
			}
		} else {
			result = '@@observable';
		}
	
		return result;
	};

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = extend
	
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	
	function extend() {
	    var target = {}
	
	    for (var i = 0; i < arguments.length; i++) {
	        var source = arguments[i]
	
	        for (var key in source) {
	            if (hasOwnProperty.call(source, key)) {
	                target[key] = source[key]
	            }
	        }
	    }
	
	    return target
	}


/***/ }
/******/ ]);
//# sourceMappingURL=cookie-converter.js.map