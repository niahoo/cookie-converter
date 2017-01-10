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
	
	var _redux = __webpack_require__(1);
	
	var _xtend = __webpack_require__(22);
	
	var _xtend2 = _interopRequireDefault(_xtend);
	
	var _inferno = __webpack_require__(23);
	
	var _inferno2 = _interopRequireDefault(_inferno);
	
	var _infernoRedux = __webpack_require__(25);
	
	var _infernoComponent = __webpack_require__(27);
	
	var _infernoComponent2 = _interopRequireDefault(_infernoComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	__webpack_require__(31); //@todo separate file in own dist
	
	// -- Redux Base --------------------------------------------------------------
	
	function defaultState() {
		return {
			convert: { from: 6, to: 2 },
			el: '#cookie-converter',
			locale: 'en',
			minRecipeRows: 5,
			recipe: ""
		};
	}
	
	function reducer(state, action) {
		var type = action.type;
	
		if (action && reducers[type]) {
			return reducers[type](state, action);
		} else {
			if (true) {
				console.warn("Unknown action type '%s'.", type);
			}
			return state;
		}
	}
	
	function makeStore(opts) {
		var initialState = opts; // Use all the opts as state
		initialState.lc = CookieConverter.i18n[initialState.locale];
		console.log(initialState);
		var devtools = !!window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : void 0;
		return (0, _redux.createStore)(reducer, initialState, devtools);
	}
	
	// -- View --------------------------------------------------------------------
	
	var View = (0, _infernoRedux.connect)(function (state) {
		return state;
	}, // mapStateToProps,
	function (dispatch) {
		return {
			changeConvertFrom: inputEvt(function (val) {
				return dispatch(actions.changeConvertFrom(val));
			})
		};
	} // mapDispatchToProps,
	)(function (_Component) {
		_inherits(Top, _Component);
	
		function Top(props) {
			_classCallCheck(this, Top);
	
			return _possibleConstructorReturn(this, (Top.__proto__ || Object.getPrototypeOf(Top)).call(this, props));
		}
	
		_createClass(Top, [{
			key: 'recipeRows',
			value: function recipeRows(recipe) {
				return Math.max(this.props.minRecipeRows, recipe.split('\n').length);
			}
		}, {
			key: 'formatNumberPicker',
			value: function formatNumberPicker(value) {
				var lc = this.props.lc;
	
				console.log('this.props', this.props);
				var change = this.props.changeConvertFrom;
				if (value <= 10) {
					return (0, _inferno.createVNode)(2048, 'select', null, [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function (x) {
						return (0, _inferno.createVNode)(2, 'option', {
							'value': x,
							'selected': x == value
						}, x);
					}), (0, _inferno.createVNode)(2, 'option', {
						'value': '11'
					}, lc.ratio_more)], {
						'onChange': change
					});
				} else {
					return (0, _inferno.createVNode)(512, 'input', {
						'type': 'number',
						'value': value
					});
				}
			}
		}, {
			key: 'render',
			value: function render() {
				var _props = this.props,
				    lc = _props.lc,
				    recipe = _props.recipe,
				    recipeRows = _props.recipeRows,
				    convert = _props.convert;
	
				return (0, _inferno.createVNode)(2, 'div', {
					'className': 'cookie-converter'
				}, (0, _inferno.createVNode)(2, 'div', {
					'className': 'cconv-block recipe-source'
				}, [(0, _inferno.createVNode)(2, 'label', null, [lc.ratio_from_before + ' ', this.formatNumberPicker(convert.from), ' ' + lc.ratio_from_after]), (0, _inferno.createVNode)(1024, 'textarea', {
					'className': 'recipe',
					'rows': this.recipeRows(recipe)
				}, recipe)]));
			}
		}]);
	
		return Top;
	}(_infernoComponent2.default));
	
	// -- Logic -------------------------------------------------------------------
	
	var actions = {
		changeConvertFrom: function changeConvertFrom(x) {
			return { type: 'C_CHANGE_CONVERT_FROM', value: x };
		}
	};
	
	var reducers = {
		C_CHANGE_CONVERT_FROM: function C_CHANGE_CONVERT_FROM(state, _ref) {
			var value = _ref.value;
			var convert = state.convert;
	
			convert = _extends({}, convert, { from: Number(value) });
			return _extends({}, state, { convert: convert });
		}
	};
	
	var CookieConverter = window.CookieConverter = {
		i18n: {},
		base64Encode: base64Encode,
		base64Decode: base64Decode
	};
	
	CookieConverter.create = function (_opts) {
		var opts = (0, _xtend2.default)(defaultState(), _opts);
		var store = makeStore(opts);
		var el = selectEl(opts.el);
		_inferno2.default.render((0, _inferno.createVNode)(16, _infernoRedux.Provider, {
			'store': store,
			children: (0, _inferno.createVNode)(16, View)
		}), el);
		console.warn('@todo return an action dispatcher to this store // return wrapActions(actions, store.dispatch)');
	};
	
	CookieConverter.getHashRecipe = function (defaultRecipe) {
		console.warn('@todo read full state from hash');
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
			console.log('handling event');
			console.log('evt.target.value', evt.target.value);
			console.log('evt', evt);
			return fn.apply(undefined, [evt.target.value].concat(more));
		};
	}

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;
	
	var _createStore = __webpack_require__(2);
	
	var _createStore2 = _interopRequireDefault(_createStore);
	
	var _combineReducers = __webpack_require__(17);
	
	var _combineReducers2 = _interopRequireDefault(_combineReducers);
	
	var _bindActionCreators = __webpack_require__(19);
	
	var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);
	
	var _applyMiddleware = __webpack_require__(20);
	
	var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);
	
	var _compose = __webpack_require__(21);
	
	var _compose2 = _interopRequireDefault(_compose);
	
	var _warning = __webpack_require__(18);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/*
	* This is a dummy function to check if the function name has been altered by minification.
	* If the function has been minified and NODE_ENV !== 'production', warn the user.
	*/
	function isCrushed() {}
	
	if ("development" !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
	  (0, _warning2['default'])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
	}
	
	exports.createStore = _createStore2['default'];
	exports.combineReducers = _combineReducers2['default'];
	exports.bindActionCreators = _bindActionCreators2['default'];
	exports.applyMiddleware = _applyMiddleware2['default'];
	exports.compose = _compose2['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.ActionTypes = undefined;
	exports['default'] = createStore;
	
	var _isPlainObject = __webpack_require__(3);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _symbolObservable = __webpack_require__(13);
	
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
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(4),
	    getPrototype = __webpack_require__(10),
	    isObjectLike = __webpack_require__(12);
	
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
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(5),
	    getRawTag = __webpack_require__(8),
	    objectToString = __webpack_require__(9);
	
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
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(6);
	
	/** Built-in value references. */
	var Symbol = root.Symbol;
	
	module.exports = Symbol;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(7);
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	module.exports = root;


/***/ },
/* 7 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	module.exports = freeGlobal;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(5);
	
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
/* 9 */
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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(11);
	
	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);
	
	module.exports = getPrototype;


/***/ },
/* 11 */
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
/* 12 */
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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(14);


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ponyfill = __webpack_require__(16);
	
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
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(15)(module)))

/***/ },
/* 15 */
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
/* 16 */
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
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = combineReducers;
	
	var _createStore = __webpack_require__(2);
	
	var _isPlainObject = __webpack_require__(3);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _warning = __webpack_require__(18);
	
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
	
	    if (true) {
	      if (typeof reducers[key] === 'undefined') {
	        (0, _warning2['default'])('No reducer provided for key "' + key + '"');
	      }
	    }
	
	    if (typeof reducers[key] === 'function') {
	      finalReducers[key] = reducers[key];
	    }
	  }
	  var finalReducerKeys = Object.keys(finalReducers);
	
	  if (true) {
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
	
	    if (true) {
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
/* 18 */
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
/* 19 */
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
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = applyMiddleware;
	
	var _compose = __webpack_require__(21);
	
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
/* 21 */
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
/* 22 */
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


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(24);
	module.exports.default = module.exports;

/***/ },
/* 24 */
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
	    if (true) {
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
	        if (true) {
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
	                    if (true) {
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
	                    if (true) {
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
	                        if (true) {
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
	        if (true) {
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
	            if (true) {
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
	        if (true) {
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
	        if (true) {
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
	        if (true) {
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
	    if (true) {
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
	        if (true) {
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
	        if (true) {
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
	        if (true) {
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
	
	if (true) {
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
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(26);
	module.exports.default = module.exports;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * inferno-redux v1.1.1
	 * (c) 2017 Dominic Gannaway
	 * Released under the MIT License.
	 */
	(function (global, factory) {
		 true ? module.exports = factory(__webpack_require__(27), __webpack_require__(1), __webpack_require__(29)) :
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
	
	if (true) {
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
	            if (true) {
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
	        if (true) {
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
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(28);
	module.exports.default = module.exports;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * inferno-component v1.1.1
	 * (c) 2017 Dominic Gannaway
	 * Released under the MIT License.
	 */
	(function (global, factory) {
	     true ? module.exports = factory(__webpack_require__(23)) :
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
	if (true) {
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
	            if (true) {
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
	        if (true) {
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
	        if (true) {
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
	        if (true) {
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
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(30);
	module.exports.default = module.exports;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * inferno-create-element v1.1.1
	 * (c) 2017 Dominic Gannaway
	 * Released under the MIT License.
	 */
	(function (global, factory) {
	     true ? module.exports = factory(__webpack_require__(23)) :
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
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(32);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(34)(content, {});
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
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(33)();
	// imports
	
	
	// module
	exports.push([module.id, ".cookie-converter textarea {\n\tmin-width:90%;\n}\n\n.cookie-converter .ratio {\n\tmax-width: 50px;\n}\n\n.cookie-converter .converted span {\n\tcursor:pointer;\n\tpadding:1px;\n\tbackground:#eee;\n\n\tborder-radius:3px;\n\tborder-top:0px solid transparent;\n\tborder-bottom:3px solid #ccc;\n\tborder-left: 1px solid #ccc;\n\tborder-right:1px solid #ccc;\n}\n\n.cookie-converter .converted span:active {\n\tposition:relative; top:1px;\n\tborder-bottom-width:2px;\n}\n\n.cookie-converter .converted .on {\n\tbackground:#D6ED90;\n\tborder-color:#BED56A;\n\tborder-top-color:transparent;\n}\n\n.cookie-converter .permalink {\n\tmargin:0;\n\tcolor:grey;\n}\n", ""]);
	
	// exports


/***/ },
/* 33 */
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
/* 34 */
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


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGMyYzI1MzM1NzY4YmU1ZDQwMjAiLCJ3ZWJwYWNrOi8vLy4vYXBwL2pzL21haW4tcmVkdXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC9saWIvY3JlYXRlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNQbGFpbk9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUdldFRhZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fU3ltYm9sLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19yb290LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19mcmVlR2xvYmFsLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRSYXdUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX29iamVjdFRvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRQcm90b3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX292ZXJBcmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzIiwid2VicGFjazovLy8uL34vc3ltYm9sLW9ic2VydmFibGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9zeW1ib2wtb2JzZXJ2YWJsZS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3N5bWJvbC1vYnNlcnZhYmxlL2xpYi9wb255ZmlsbC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4L2xpYi9jb21iaW5lUmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC9saWIvdXRpbHMvd2FybmluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4L2xpYi9iaW5kQWN0aW9uQ3JlYXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC9saWIvYXBwbHlNaWRkbGV3YXJlLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgvbGliL2NvbXBvc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi94dGVuZC9pbW11dGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pbmZlcm5vL2luZmVybm8uanMiLCJ3ZWJwYWNrOi8vLy4vfi9pbmZlcm5vL2Rpc3QvaW5mZXJuby5ub2RlLmpzIiwid2VicGFjazovLy8uL34vaW5mZXJuby1yZWR1eC9pbmZlcm5vLXJlZHV4LmpzIiwid2VicGFjazovLy8uL34vaW5mZXJuby9kaXN0L2luZmVybm8tcmVkdXgubm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2luZmVybm8tY29tcG9uZW50L2luZmVybm8tY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL34vaW5mZXJuby9kaXN0L2luZmVybm8tY29tcG9uZW50Lm5vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pbmZlcm5vLWNyZWF0ZS1lbGVtZW50L2luZmVybm8tY3JlYXRlLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pbmZlcm5vL2Rpc3QvaW5mZXJuby1jcmVhdGUtZWxlbWVudC5ub2RlLmpzIiwid2VicGFjazovLy8uL2FwcC9jc3MvY29va2llLWNvbnZlcnRlci5jc3M/MDFlNSIsIndlYnBhY2s6Ly8vLi9hcHAvY3NzL2Nvb2tpZS1jb252ZXJ0ZXIuY3NzIiwid2VicGFjazovLy8uL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDdENBOztBQUVBLG9EQUFtRCxnQkFBZ0Isc0JBQXNCLE9BQU8sMkJBQTJCLDBCQUEwQix5REFBeUQsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLGVBQWU7O0FBRTlQLGlDQUFnQywyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRSxFQUFFLHlEQUF5RCxxRUFBcUUsNkRBQTZELG9CQUFvQixHQUFHLEVBQUU7O0FBRWpqQjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Ysa0RBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdkosa0RBQWlELGFBQWEsdUZBQXVGLEVBQUUsdUZBQXVGOztBQUU5TywyQ0FBMEMsK0RBQStELHFHQUFxRyxFQUFFLHlFQUF5RSxlQUFlLHlFQUF5RSxFQUFFLEVBQUUsdUhBQXVIOztBQUU1ZSx5QkFBZ0M7O0FBRWhDOztBQUVBO0FBQ0E7QUFDQSxhQUFZLGlCQUFpQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSxFQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFNO0FBQ04sTUFBSztBQUNMO0FBQ0EsTUFBSztBQUNMO0FBQ0EsTUFBSztBQUNMLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQSxHQUFFOztBQUVGO0FBQ0EsRUFBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0EsV0FBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXVCLFlBQVksc0JBQXNCO0FBQ3pELHFCQUFvQixVQUFVLG1CQUFtQjtBQUNqRDtBQUNBOztBQUVBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9GQUFtRixhQUFhO0FBQ2hHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDN05BOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxrQkFBa0I7O0FBRS9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0M7Ozs7OztBQzdDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxrQkFBa0I7O0FBRS9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQSxZQUFXLElBQUk7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZSxJQUFJO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhLFNBQVM7QUFDdEIsZ0JBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLG9CQUFtQixzQkFBc0I7QUFDekM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYSxTQUFTO0FBQ3RCLGdCQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWMseUJBQXlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQSxnQkFBZSxXQUFXO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUIsT0FBTztBQUN4QjtBQUNBLG9CQUFtQixhQUFhO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFnQjtBQUNoQjtBQUNBLE1BQUs7QUFDTDtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFZLHlCQUF5Qjs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxFOzs7Ozs7QUNwUUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLEVBQUU7QUFDYixjQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDN0RBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsRUFBRTtBQUNiLGNBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUMzQkE7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7OztBQ0xBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7OztBQ1JBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDSEE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxFQUFFO0FBQ2IsY0FBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQzdDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsRUFBRTtBQUNiLGNBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ3JCQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLFNBQVM7QUFDcEIsWUFBVyxTQUFTO0FBQ3BCLGNBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxFQUFFO0FBQ2IsY0FBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQzVCQTs7Ozs7OztBQ0FBOztBQUVBO0FBQ0E7QUFDQSxFQUFDOztBQUVEOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsa0JBQWtCOztBQUUvRixVQUFTOzs7QUFHVDtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0EsRUFBQztBQUNEO0FBQ0EsRUFBQztBQUNEO0FBQ0EsRUFBQztBQUNEO0FBQ0E7O0FBRUE7QUFDQSw2Qjs7Ozs7OztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1RBOztBQUVBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0EsRzs7Ozs7O0FDdEJBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxrQkFBa0I7O0FBRS9GO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvRUFBbUU7QUFDbkU7O0FBRUE7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNENBQTJDLHNDQUFzQzs7QUFFakY7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW1DLGFBQWE7QUFDaEQ7QUFDQTtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUIsd0JBQXdCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSx5RUFBd0U7QUFDeEU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW1CLDZCQUE2QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7OztBQzdJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLEU7Ozs7OztBQ3hCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLGdCQUFnQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSxZQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBLGNBQWEsZ0JBQWdCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDbERBOztBQUVBOztBQUVBLG9EQUFtRCxnQkFBZ0Isc0JBQXNCLE9BQU8sMkJBQTJCLDBCQUEwQix5REFBeUQsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLGVBQWU7O0FBRTlQOztBQUVBOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsa0JBQWtCOztBQUUvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsWUFBWTtBQUN2QixjQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBLHlFQUF3RSxhQUFhO0FBQ3JGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQOztBQUVBLHlCQUF3QjtBQUN4QjtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsRTs7Ozs7O0FDekRBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxZQUFZO0FBQ3ZCLGNBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtRUFBa0UsYUFBYTtBQUMvRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSxFOzs7Ozs7QUNyQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxvQkFBbUIsc0JBQXNCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDbEJBO0FBQ0EseUM7Ozs7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBZ0Q7QUFDaEQsRUFBQyw0QkFBNEI7O0FBRTdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFVLHNCQUFzQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFtQixrQkFBa0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQXlELGtCQUFrQixFQUFFO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBdUIseUJBQXlCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEVBQTZFO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQXlDLDBCQUEwQjtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RUFBNkU7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFtQiwyQkFBMkI7QUFDOUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2Q0FBNEMsMEJBQTBCLEVBQUU7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTJCLHFCQUFxQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF1QixxQkFBcUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF1QixxQkFBcUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW1EO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVSxrQkFBa0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBOEIsd0JBQXdCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBOEIsd0JBQXdCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CLGFBQWE7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTRCLFdBQVc7QUFDdkM7QUFDQTtBQUNBLHFDQUFvQyxXQUFXO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNEIsV0FBVztBQUN2QztBQUNBO0FBQ0E7QUFDQSw2QkFBNEIsV0FBVztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBcUMsUUFBUTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFxQyxRQUFRO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWUsY0FBYztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CLHFCQUFxQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQStDLHFDQUFxQyxFQUFFO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUEyQyxtQkFBbUIsRUFBRTtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWlEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBbUIscUJBQXFCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXVCLHFCQUFxQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0dBQXVHO0FBQ3ZHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFtQixrQkFBa0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBcUQ7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBK0Q7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtDQUE4QyxjQUFjOztBQUU1RCxFQUFDOzs7Ozs7O0FDL2dGRDtBQUNBLHlDOzs7Ozs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXVDO0FBQ3ZDLEVBQUMsa0RBQWtEOztBQUVuRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQixjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBZ0MsMkRBQTJEO0FBQzNGOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFrQixZQUFZLEVBQUU7QUFDaEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLCtDQUE4QztBQUM5Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBdUIsaUJBQWlCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFtQjtBQUNuQixnREFBK0MsV0FBVyxFQUFFLEdBQUc7QUFDL0Qsc0RBQXFELFVBQVUscUJBQXFCLEVBQUU7QUFDdEYsNEVBQTJFLHdCQUF3QiwwQ0FBMEM7QUFDN0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNEI7QUFDNUIsbUNBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQThCO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQStCLHlCQUF5QjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRGQUEyRixxQkFBcUIsMkJBQTJCLDBDQUEwQyxFQUFFLEVBQUU7QUFDekw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLEVBQUM7Ozs7Ozs7QUM1ZkQ7QUFDQSx5Qzs7Ozs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEwQztBQUMxQyxFQUFDLDRCQUE0Qjs7QUFFN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBbUIsMkJBQTJCO0FBQzlDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQStCLGtCQUFrQjtBQUNqRDtBQUNBO0FBQ0EsY0FBYTtBQUNiLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUErQztBQUMvQztBQUNBO0FBQ0EsZ0RBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZSxPQUFPO0FBQ3RCO0FBQ0EsZ0JBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLEVBQUM7Ozs7Ozs7QUNuVEQ7QUFDQSx5Qzs7Ozs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEwQztBQUMxQyxFQUFDLDRCQUE0Qjs7QUFFN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLEVBQUM7Ozs7Ozs7QUN2SUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBbUY7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxpQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEU7Ozs7OztBQ3BCQTtBQUNBOzs7QUFHQTtBQUNBLHVEQUFzRCxrQkFBa0IsR0FBRyw4QkFBOEIsb0JBQW9CLEdBQUcsdUNBQXVDLG1CQUFtQixnQkFBZ0Isb0JBQW9CLHdCQUF3QixxQ0FBcUMsaUNBQWlDLGdDQUFnQyxnQ0FBZ0MsR0FBRyw4Q0FBOEMsc0JBQXNCLFNBQVMsNEJBQTRCLEdBQUcsc0NBQXNDLHVCQUF1Qix5QkFBeUIsaUNBQWlDLEdBQUcsa0NBQWtDLGFBQWEsZUFBZSxHQUFHOztBQUV0cUI7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQSx5Q0FBd0MsZ0JBQWdCO0FBQ3hELEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBWSxvQkFBb0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWdCLG1CQUFtQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0Isc0JBQXNCO0FBQ3RDO0FBQ0E7QUFDQSxtQkFBa0IsMkJBQTJCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFlLG1CQUFtQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQiwyQkFBMkI7QUFDNUM7QUFDQTtBQUNBLFNBQVEsdUJBQXVCO0FBQy9CO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSxrQkFBaUIsdUJBQXVCO0FBQ3hDO0FBQ0E7QUFDQSw0QkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFlLGlCQUFpQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBYztBQUNkO0FBQ0EsaUNBQWdDLHNCQUFzQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0RBQXVEO0FBQ3ZEOztBQUVBLDhCQUE2QixtQkFBbUI7O0FBRWhEOztBQUVBOztBQUVBO0FBQ0E7QUFDQSIsImZpbGUiOiJjb29raWUtY29udmVydGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMGMyYzI1MzM1NzY4YmU1ZDQwMjAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfcmVkdXggPSByZXF1aXJlKCdyZWR1eCcpO1xuXG52YXIgX3h0ZW5kID0gcmVxdWlyZSgneHRlbmQnKTtcblxudmFyIF94dGVuZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF94dGVuZCk7XG5cbnZhciBfaW5mZXJubyA9IHJlcXVpcmUoJ2luZmVybm8nKTtcblxudmFyIF9pbmZlcm5vMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luZmVybm8pO1xuXG52YXIgX2luZmVybm9SZWR1eCA9IHJlcXVpcmUoJ2luZmVybm8tcmVkdXgnKTtcblxudmFyIF9pbmZlcm5vQ29tcG9uZW50ID0gcmVxdWlyZSgnaW5mZXJuby1jb21wb25lbnQnKTtcblxudmFyIF9pbmZlcm5vQ29tcG9uZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luZmVybm9Db21wb25lbnQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnJlcXVpcmUoXCJjb29raWUtY29udmVydGVyLmNzc1wiKTsgLy9AdG9kbyBzZXBhcmF0ZSBmaWxlIGluIG93biBkaXN0XG5cbi8vIC0tIFJlZHV4IEJhc2UgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gZGVmYXVsdFN0YXRlKCkge1xuXHRyZXR1cm4ge1xuXHRcdGNvbnZlcnQ6IHsgZnJvbTogNiwgdG86IDIgfSxcblx0XHRlbDogJyNjb29raWUtY29udmVydGVyJyxcblx0XHRsb2NhbGU6ICdlbicsXG5cdFx0bWluUmVjaXBlUm93czogNSxcblx0XHRyZWNpcGU6IFwiXCJcblx0fTtcbn1cblxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKSB7XG5cdHZhciB0eXBlID0gYWN0aW9uLnR5cGU7XG5cblx0aWYgKGFjdGlvbiAmJiByZWR1Y2Vyc1t0eXBlXSkge1xuXHRcdHJldHVybiByZWR1Y2Vyc1t0eXBlXShzdGF0ZSwgYWN0aW9uKTtcblx0fSBlbHNlIHtcblx0XHRpZiAoXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicpIHtcblx0XHRcdGNvbnNvbGUud2FybihcIlVua25vd24gYWN0aW9uIHR5cGUgJyVzJy5cIiwgdHlwZSk7XG5cdFx0fVxuXHRcdHJldHVybiBzdGF0ZTtcblx0fVxufVxuXG5mdW5jdGlvbiBtYWtlU3RvcmUob3B0cykge1xuXHR2YXIgaW5pdGlhbFN0YXRlID0gb3B0czsgLy8gVXNlIGFsbCB0aGUgb3B0cyBhcyBzdGF0ZVxuXHRpbml0aWFsU3RhdGUubGMgPSBDb29raWVDb252ZXJ0ZXIuaTE4bltpbml0aWFsU3RhdGUubG9jYWxlXTtcblx0Y29uc29sZS5sb2coaW5pdGlhbFN0YXRlKTtcblx0dmFyIGRldnRvb2xzID0gISF3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXyA/IHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fKCkgOiB2b2lkIDA7XG5cdHJldHVybiAoMCwgX3JlZHV4LmNyZWF0ZVN0b3JlKShyZWR1Y2VyLCBpbml0aWFsU3RhdGUsIGRldnRvb2xzKTtcbn1cblxuLy8gLS0gVmlldyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG52YXIgVmlldyA9ICgwLCBfaW5mZXJub1JlZHV4LmNvbm5lY3QpKGZ1bmN0aW9uIChzdGF0ZSkge1xuXHRyZXR1cm4gc3RhdGU7XG59LCAvLyBtYXBTdGF0ZVRvUHJvcHMsXG5mdW5jdGlvbiAoZGlzcGF0Y2gpIHtcblx0cmV0dXJuIHtcblx0XHRjaGFuZ2VDb252ZXJ0RnJvbTogaW5wdXRFdnQoZnVuY3Rpb24gKHZhbCkge1xuXHRcdFx0cmV0dXJuIGRpc3BhdGNoKGFjdGlvbnMuY2hhbmdlQ29udmVydEZyb20odmFsKSk7XG5cdFx0fSlcblx0fTtcbn0gLy8gbWFwRGlzcGF0Y2hUb1Byb3BzLFxuKShmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuXHRfaW5oZXJpdHMoVG9wLCBfQ29tcG9uZW50KTtcblxuXHRmdW5jdGlvbiBUb3AocHJvcHMpIHtcblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgVG9wKTtcblxuXHRcdHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoVG9wLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoVG9wKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXHR9XG5cblx0X2NyZWF0ZUNsYXNzKFRvcCwgW3tcblx0XHRrZXk6ICdyZWNpcGVSb3dzJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmVjaXBlUm93cyhyZWNpcGUpIHtcblx0XHRcdHJldHVybiBNYXRoLm1heCh0aGlzLnByb3BzLm1pblJlY2lwZVJvd3MsIHJlY2lwZS5zcGxpdCgnXFxuJykubGVuZ3RoKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdmb3JtYXROdW1iZXJQaWNrZXInLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBmb3JtYXROdW1iZXJQaWNrZXIodmFsdWUpIHtcblx0XHRcdHZhciBsYyA9IHRoaXMucHJvcHMubGM7XG5cblx0XHRcdGNvbnNvbGUubG9nKCd0aGlzLnByb3BzJywgdGhpcy5wcm9wcyk7XG5cdFx0XHR2YXIgY2hhbmdlID0gdGhpcy5wcm9wcy5jaGFuZ2VDb252ZXJ0RnJvbTtcblx0XHRcdGlmICh2YWx1ZSA8PSAxMCkge1xuXHRcdFx0XHRyZXR1cm4gKDAsIF9pbmZlcm5vLmNyZWF0ZVZOb2RlKSgyMDQ4LCAnc2VsZWN0JywgbnVsbCwgW1sxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMF0ubWFwKGZ1bmN0aW9uICh4KSB7XG5cdFx0XHRcdFx0cmV0dXJuICgwLCBfaW5mZXJuby5jcmVhdGVWTm9kZSkoMiwgJ29wdGlvbicsIHtcblx0XHRcdFx0XHRcdCd2YWx1ZSc6IHgsXG5cdFx0XHRcdFx0XHQnc2VsZWN0ZWQnOiB4ID09IHZhbHVlXG5cdFx0XHRcdFx0fSwgeCk7XG5cdFx0XHRcdH0pLCAoMCwgX2luZmVybm8uY3JlYXRlVk5vZGUpKDIsICdvcHRpb24nLCB7XG5cdFx0XHRcdFx0J3ZhbHVlJzogJzExJ1xuXHRcdFx0XHR9LCBsYy5yYXRpb19tb3JlKV0sIHtcblx0XHRcdFx0XHQnb25DaGFuZ2UnOiBjaGFuZ2Vcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gKDAsIF9pbmZlcm5vLmNyZWF0ZVZOb2RlKSg1MTIsICdpbnB1dCcsIHtcblx0XHRcdFx0XHQndHlwZSc6ICdudW1iZXInLFxuXHRcdFx0XHRcdCd2YWx1ZSc6IHZhbHVlXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3JlbmRlcicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcblx0XHRcdHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuXHRcdFx0ICAgIGxjID0gX3Byb3BzLmxjLFxuXHRcdFx0ICAgIHJlY2lwZSA9IF9wcm9wcy5yZWNpcGUsXG5cdFx0XHQgICAgcmVjaXBlUm93cyA9IF9wcm9wcy5yZWNpcGVSb3dzLFxuXHRcdFx0ICAgIGNvbnZlcnQgPSBfcHJvcHMuY29udmVydDtcblxuXHRcdFx0cmV0dXJuICgwLCBfaW5mZXJuby5jcmVhdGVWTm9kZSkoMiwgJ2RpdicsIHtcblx0XHRcdFx0J2NsYXNzTmFtZSc6ICdjb29raWUtY29udmVydGVyJ1xuXHRcdFx0fSwgKDAsIF9pbmZlcm5vLmNyZWF0ZVZOb2RlKSgyLCAnZGl2Jywge1xuXHRcdFx0XHQnY2xhc3NOYW1lJzogJ2Njb252LWJsb2NrIHJlY2lwZS1zb3VyY2UnXG5cdFx0XHR9LCBbKDAsIF9pbmZlcm5vLmNyZWF0ZVZOb2RlKSgyLCAnbGFiZWwnLCBudWxsLCBbbGMucmF0aW9fZnJvbV9iZWZvcmUgKyAnICcsIHRoaXMuZm9ybWF0TnVtYmVyUGlja2VyKGNvbnZlcnQuZnJvbSksICcgJyArIGxjLnJhdGlvX2Zyb21fYWZ0ZXJdKSwgKDAsIF9pbmZlcm5vLmNyZWF0ZVZOb2RlKSgxMDI0LCAndGV4dGFyZWEnLCB7XG5cdFx0XHRcdCdjbGFzc05hbWUnOiAncmVjaXBlJyxcblx0XHRcdFx0J3Jvd3MnOiB0aGlzLnJlY2lwZVJvd3MocmVjaXBlKVxuXHRcdFx0fSwgcmVjaXBlKV0pKTtcblx0XHR9XG5cdH1dKTtcblxuXHRyZXR1cm4gVG9wO1xufShfaW5mZXJub0NvbXBvbmVudDIuZGVmYXVsdCkpO1xuXG4vLyAtLSBMb2dpYyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbnZhciBhY3Rpb25zID0ge1xuXHRjaGFuZ2VDb252ZXJ0RnJvbTogZnVuY3Rpb24gY2hhbmdlQ29udmVydEZyb20oeCkge1xuXHRcdHJldHVybiB7IHR5cGU6ICdDX0NIQU5HRV9DT05WRVJUX0ZST00nLCB2YWx1ZTogeCB9O1xuXHR9XG59O1xuXG52YXIgcmVkdWNlcnMgPSB7XG5cdENfQ0hBTkdFX0NPTlZFUlRfRlJPTTogZnVuY3Rpb24gQ19DSEFOR0VfQ09OVkVSVF9GUk9NKHN0YXRlLCBfcmVmKSB7XG5cdFx0dmFyIHZhbHVlID0gX3JlZi52YWx1ZTtcblx0XHR2YXIgY29udmVydCA9IHN0YXRlLmNvbnZlcnQ7XG5cblx0XHRjb252ZXJ0ID0gX2V4dGVuZHMoe30sIGNvbnZlcnQsIHsgZnJvbTogTnVtYmVyKHZhbHVlKSB9KTtcblx0XHRyZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7IGNvbnZlcnQ6IGNvbnZlcnQgfSk7XG5cdH1cbn07XG5cbnZhciBDb29raWVDb252ZXJ0ZXIgPSB3aW5kb3cuQ29va2llQ29udmVydGVyID0ge1xuXHRpMThuOiB7fSxcblx0YmFzZTY0RW5jb2RlOiBiYXNlNjRFbmNvZGUsXG5cdGJhc2U2NERlY29kZTogYmFzZTY0RGVjb2RlXG59O1xuXG5Db29raWVDb252ZXJ0ZXIuY3JlYXRlID0gZnVuY3Rpb24gKF9vcHRzKSB7XG5cdHZhciBvcHRzID0gKDAsIF94dGVuZDIuZGVmYXVsdCkoZGVmYXVsdFN0YXRlKCksIF9vcHRzKTtcblx0dmFyIHN0b3JlID0gbWFrZVN0b3JlKG9wdHMpO1xuXHR2YXIgZWwgPSBzZWxlY3RFbChvcHRzLmVsKTtcblx0X2luZmVybm8yLmRlZmF1bHQucmVuZGVyKCgwLCBfaW5mZXJuby5jcmVhdGVWTm9kZSkoMTYsIF9pbmZlcm5vUmVkdXguUHJvdmlkZXIsIHtcblx0XHQnc3RvcmUnOiBzdG9yZSxcblx0XHRjaGlsZHJlbjogKDAsIF9pbmZlcm5vLmNyZWF0ZVZOb2RlKSgxNiwgVmlldylcblx0fSksIGVsKTtcblx0Y29uc29sZS53YXJuKCdAdG9kbyByZXR1cm4gYW4gYWN0aW9uIGRpc3BhdGNoZXIgdG8gdGhpcyBzdG9yZSAvLyByZXR1cm4gd3JhcEFjdGlvbnMoYWN0aW9ucywgc3RvcmUuZGlzcGF0Y2gpJyk7XG59O1xuXG5Db29raWVDb252ZXJ0ZXIuZ2V0SGFzaFJlY2lwZSA9IGZ1bmN0aW9uIChkZWZhdWx0UmVjaXBlKSB7XG5cdGNvbnNvbGUud2FybignQHRvZG8gcmVhZCBmdWxsIHN0YXRlIGZyb20gaGFzaCcpO1xuXHRyZXR1cm4gZGVmYXVsdFJlY2lwZTtcbn07XG5cbi8vIC0tIFV0aWwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gc2VsZWN0RWwoY3NzU2VsZWN0b3IpIHtcblx0aWYgKGNzc1NlbGVjdG9yIGluc3RhbmNlb2YgRWxlbWVudCkge1xuXHRcdHJldHVybiBjc3NTZWxlY3Rvcjtcblx0fSBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKSB7XG5cdFx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY3NzU2VsZWN0b3IpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciAkID0gd2luZG93LmpRdWVyeSB8fCB3aW5kb3cuJDtcblx0XHRpZiAoJCkge1xuXHRcdFx0dmFyIHNlbGVjdGVkID0gJChjc3NTZWxlY3Rvcik7XG5cdFx0XHQvLyBvdGhlciBsaWJzXG5cdFx0XHRpZiAoc2VsZWN0ZWQgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG5cdFx0XHRcdHJldHVybiBzZWxlY3RlZDtcblx0XHRcdFx0Ly8galF1ZXJ5XG5cdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBzZWxlY3RlZC5nZXQgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0cmV0dXJuIHNlbGVjdGVkLmdldCgwKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0dGhyb3cgbmV3IEVycm9yKFwiVW5zdXBwb3J0ZWQgYnJvd3NlclwiKTtcbn1cblxuZnVuY3Rpb24gYmFzZTY0RW5jb2RlKHN0cikge1xuXHRyZXR1cm4gd2luZG93LmJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KHN0cikpKTtcbn1cblxuZnVuY3Rpb24gYmFzZTY0RGVjb2RlKHN0cikge1xuXHRyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGVzY2FwZSh3aW5kb3cuYXRvYihzdHIpKSk7XG59XG5cbmZ1bmN0aW9uIGlucHV0RXZ0KGZuKSB7XG5cdGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBtb3JlID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuXHRcdG1vcmVbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuXHR9XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChldnQpIHtcblx0XHRjb25zb2xlLmxvZygnaGFuZGxpbmcgZXZlbnQnKTtcblx0XHRjb25zb2xlLmxvZygnZXZ0LnRhcmdldC52YWx1ZScsIGV2dC50YXJnZXQudmFsdWUpO1xuXHRcdGNvbnNvbGUubG9nKCdldnQnLCBldnQpO1xuXHRcdHJldHVybiBmbi5hcHBseSh1bmRlZmluZWQsIFtldnQudGFyZ2V0LnZhbHVlXS5jb25jYXQobW9yZSkpO1xuXHR9O1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwL2pzL21haW4tcmVkdXguanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5jb21wb3NlID0gZXhwb3J0cy5hcHBseU1pZGRsZXdhcmUgPSBleHBvcnRzLmJpbmRBY3Rpb25DcmVhdG9ycyA9IGV4cG9ydHMuY29tYmluZVJlZHVjZXJzID0gZXhwb3J0cy5jcmVhdGVTdG9yZSA9IHVuZGVmaW5lZDtcblxudmFyIF9jcmVhdGVTdG9yZSA9IHJlcXVpcmUoJy4vY3JlYXRlU3RvcmUnKTtcblxudmFyIF9jcmVhdGVTdG9yZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVTdG9yZSk7XG5cbnZhciBfY29tYmluZVJlZHVjZXJzID0gcmVxdWlyZSgnLi9jb21iaW5lUmVkdWNlcnMnKTtcblxudmFyIF9jb21iaW5lUmVkdWNlcnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tYmluZVJlZHVjZXJzKTtcblxudmFyIF9iaW5kQWN0aW9uQ3JlYXRvcnMgPSByZXF1aXJlKCcuL2JpbmRBY3Rpb25DcmVhdG9ycycpO1xuXG52YXIgX2JpbmRBY3Rpb25DcmVhdG9yczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9iaW5kQWN0aW9uQ3JlYXRvcnMpO1xuXG52YXIgX2FwcGx5TWlkZGxld2FyZSA9IHJlcXVpcmUoJy4vYXBwbHlNaWRkbGV3YXJlJyk7XG5cbnZhciBfYXBwbHlNaWRkbGV3YXJlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FwcGx5TWlkZGxld2FyZSk7XG5cbnZhciBfY29tcG9zZSA9IHJlcXVpcmUoJy4vY29tcG9zZScpO1xuXG52YXIgX2NvbXBvc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcG9zZSk7XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJy4vdXRpbHMvd2FybmluZycpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuLypcbiogVGhpcyBpcyBhIGR1bW15IGZ1bmN0aW9uIHRvIGNoZWNrIGlmIHRoZSBmdW5jdGlvbiBuYW1lIGhhcyBiZWVuIGFsdGVyZWQgYnkgbWluaWZpY2F0aW9uLlxuKiBJZiB0aGUgZnVuY3Rpb24gaGFzIGJlZW4gbWluaWZpZWQgYW5kIE5PREVfRU5WICE9PSAncHJvZHVjdGlvbicsIHdhcm4gdGhlIHVzZXIuXG4qL1xuZnVuY3Rpb24gaXNDcnVzaGVkKCkge31cblxuaWYgKFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nICYmIHR5cGVvZiBpc0NydXNoZWQubmFtZSA9PT0gJ3N0cmluZycgJiYgaXNDcnVzaGVkLm5hbWUgIT09ICdpc0NydXNoZWQnKSB7XG4gICgwLCBfd2FybmluZzJbJ2RlZmF1bHQnXSkoJ1lvdSBhcmUgY3VycmVudGx5IHVzaW5nIG1pbmlmaWVkIGNvZGUgb3V0c2lkZSBvZiBOT0RFX0VOViA9PT0gXFwncHJvZHVjdGlvblxcJy4gJyArICdUaGlzIG1lYW5zIHRoYXQgeW91IGFyZSBydW5uaW5nIGEgc2xvd2VyIGRldmVsb3BtZW50IGJ1aWxkIG9mIFJlZHV4LiAnICsgJ1lvdSBjYW4gdXNlIGxvb3NlLWVudmlmeSAoaHR0cHM6Ly9naXRodWIuY29tL3plcnRvc2gvbG9vc2UtZW52aWZ5KSBmb3IgYnJvd3NlcmlmeSAnICsgJ29yIERlZmluZVBsdWdpbiBmb3Igd2VicGFjayAoaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zMDAzMDAzMSkgJyArICd0byBlbnN1cmUgeW91IGhhdmUgdGhlIGNvcnJlY3QgY29kZSBmb3IgeW91ciBwcm9kdWN0aW9uIGJ1aWxkLicpO1xufVxuXG5leHBvcnRzLmNyZWF0ZVN0b3JlID0gX2NyZWF0ZVN0b3JlMlsnZGVmYXVsdCddO1xuZXhwb3J0cy5jb21iaW5lUmVkdWNlcnMgPSBfY29tYmluZVJlZHVjZXJzMlsnZGVmYXVsdCddO1xuZXhwb3J0cy5iaW5kQWN0aW9uQ3JlYXRvcnMgPSBfYmluZEFjdGlvbkNyZWF0b3JzMlsnZGVmYXVsdCddO1xuZXhwb3J0cy5hcHBseU1pZGRsZXdhcmUgPSBfYXBwbHlNaWRkbGV3YXJlMlsnZGVmYXVsdCddO1xuZXhwb3J0cy5jb21wb3NlID0gX2NvbXBvc2UyWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlZHV4L2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLkFjdGlvblR5cGVzID0gdW5kZWZpbmVkO1xuZXhwb3J0c1snZGVmYXVsdCddID0gY3JlYXRlU3RvcmU7XG5cbnZhciBfaXNQbGFpbk9iamVjdCA9IHJlcXVpcmUoJ2xvZGFzaC9pc1BsYWluT2JqZWN0Jyk7XG5cbnZhciBfaXNQbGFpbk9iamVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc1BsYWluT2JqZWN0KTtcblxudmFyIF9zeW1ib2xPYnNlcnZhYmxlID0gcmVxdWlyZSgnc3ltYm9sLW9ic2VydmFibGUnKTtcblxudmFyIF9zeW1ib2xPYnNlcnZhYmxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N5bWJvbE9ic2VydmFibGUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbi8qKlxuICogVGhlc2UgYXJlIHByaXZhdGUgYWN0aW9uIHR5cGVzIHJlc2VydmVkIGJ5IFJlZHV4LlxuICogRm9yIGFueSB1bmtub3duIGFjdGlvbnMsIHlvdSBtdXN0IHJldHVybiB0aGUgY3VycmVudCBzdGF0ZS5cbiAqIElmIHRoZSBjdXJyZW50IHN0YXRlIGlzIHVuZGVmaW5lZCwgeW91IG11c3QgcmV0dXJuIHRoZSBpbml0aWFsIHN0YXRlLlxuICogRG8gbm90IHJlZmVyZW5jZSB0aGVzZSBhY3Rpb24gdHlwZXMgZGlyZWN0bHkgaW4geW91ciBjb2RlLlxuICovXG52YXIgQWN0aW9uVHlwZXMgPSBleHBvcnRzLkFjdGlvblR5cGVzID0ge1xuICBJTklUOiAnQEByZWR1eC9JTklUJ1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgUmVkdXggc3RvcmUgdGhhdCBob2xkcyB0aGUgc3RhdGUgdHJlZS5cbiAqIFRoZSBvbmx5IHdheSB0byBjaGFuZ2UgdGhlIGRhdGEgaW4gdGhlIHN0b3JlIGlzIHRvIGNhbGwgYGRpc3BhdGNoKClgIG9uIGl0LlxuICpcbiAqIFRoZXJlIHNob3VsZCBvbmx5IGJlIGEgc2luZ2xlIHN0b3JlIGluIHlvdXIgYXBwLiBUbyBzcGVjaWZ5IGhvdyBkaWZmZXJlbnRcbiAqIHBhcnRzIG9mIHRoZSBzdGF0ZSB0cmVlIHJlc3BvbmQgdG8gYWN0aW9ucywgeW91IG1heSBjb21iaW5lIHNldmVyYWwgcmVkdWNlcnNcbiAqIGludG8gYSBzaW5nbGUgcmVkdWNlciBmdW5jdGlvbiBieSB1c2luZyBgY29tYmluZVJlZHVjZXJzYC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWR1Y2VyIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBuZXh0IHN0YXRlIHRyZWUsIGdpdmVuXG4gKiB0aGUgY3VycmVudCBzdGF0ZSB0cmVlIGFuZCB0aGUgYWN0aW9uIHRvIGhhbmRsZS5cbiAqXG4gKiBAcGFyYW0ge2FueX0gW3ByZWxvYWRlZFN0YXRlXSBUaGUgaW5pdGlhbCBzdGF0ZS4gWW91IG1heSBvcHRpb25hbGx5IHNwZWNpZnkgaXRcbiAqIHRvIGh5ZHJhdGUgdGhlIHN0YXRlIGZyb20gdGhlIHNlcnZlciBpbiB1bml2ZXJzYWwgYXBwcywgb3IgdG8gcmVzdG9yZSBhXG4gKiBwcmV2aW91c2x5IHNlcmlhbGl6ZWQgdXNlciBzZXNzaW9uLlxuICogSWYgeW91IHVzZSBgY29tYmluZVJlZHVjZXJzYCB0byBwcm9kdWNlIHRoZSByb290IHJlZHVjZXIgZnVuY3Rpb24sIHRoaXMgbXVzdCBiZVxuICogYW4gb2JqZWN0IHdpdGggdGhlIHNhbWUgc2hhcGUgYXMgYGNvbWJpbmVSZWR1Y2Vyc2Aga2V5cy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlbmhhbmNlciBUaGUgc3RvcmUgZW5oYW5jZXIuIFlvdSBtYXkgb3B0aW9uYWxseSBzcGVjaWZ5IGl0XG4gKiB0byBlbmhhbmNlIHRoZSBzdG9yZSB3aXRoIHRoaXJkLXBhcnR5IGNhcGFiaWxpdGllcyBzdWNoIGFzIG1pZGRsZXdhcmUsXG4gKiB0aW1lIHRyYXZlbCwgcGVyc2lzdGVuY2UsIGV0Yy4gVGhlIG9ubHkgc3RvcmUgZW5oYW5jZXIgdGhhdCBzaGlwcyB3aXRoIFJlZHV4XG4gKiBpcyBgYXBwbHlNaWRkbGV3YXJlKClgLlxuICpcbiAqIEByZXR1cm5zIHtTdG9yZX0gQSBSZWR1eCBzdG9yZSB0aGF0IGxldHMgeW91IHJlYWQgdGhlIHN0YXRlLCBkaXNwYXRjaCBhY3Rpb25zXG4gKiBhbmQgc3Vic2NyaWJlIHRvIGNoYW5nZXMuXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVN0b3JlKHJlZHVjZXIsIHByZWxvYWRlZFN0YXRlLCBlbmhhbmNlcikge1xuICB2YXIgX3JlZjI7XG5cbiAgaWYgKHR5cGVvZiBwcmVsb2FkZWRTdGF0ZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZW5oYW5jZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZW5oYW5jZXIgPSBwcmVsb2FkZWRTdGF0ZTtcbiAgICBwcmVsb2FkZWRTdGF0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZW5oYW5jZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHR5cGVvZiBlbmhhbmNlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB0aGUgZW5oYW5jZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZW5oYW5jZXIoY3JlYXRlU3RvcmUpKHJlZHVjZXIsIHByZWxvYWRlZFN0YXRlKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgcmVkdWNlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgdGhlIHJlZHVjZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIHZhciBjdXJyZW50UmVkdWNlciA9IHJlZHVjZXI7XG4gIHZhciBjdXJyZW50U3RhdGUgPSBwcmVsb2FkZWRTdGF0ZTtcbiAgdmFyIGN1cnJlbnRMaXN0ZW5lcnMgPSBbXTtcbiAgdmFyIG5leHRMaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzO1xuICB2YXIgaXNEaXNwYXRjaGluZyA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGVuc3VyZUNhbk11dGF0ZU5leHRMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKG5leHRMaXN0ZW5lcnMgPT09IGN1cnJlbnRMaXN0ZW5lcnMpIHtcbiAgICAgIG5leHRMaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzLnNsaWNlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlYWRzIHRoZSBzdGF0ZSB0cmVlIG1hbmFnZWQgYnkgdGhlIHN0b3JlLlxuICAgKlxuICAgKiBAcmV0dXJucyB7YW55fSBUaGUgY3VycmVudCBzdGF0ZSB0cmVlIG9mIHlvdXIgYXBwbGljYXRpb24uXG4gICAqL1xuICBmdW5jdGlvbiBnZXRTdGF0ZSgpIHtcbiAgICByZXR1cm4gY3VycmVudFN0YXRlO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBjaGFuZ2UgbGlzdGVuZXIuIEl0IHdpbGwgYmUgY2FsbGVkIGFueSB0aW1lIGFuIGFjdGlvbiBpcyBkaXNwYXRjaGVkLFxuICAgKiBhbmQgc29tZSBwYXJ0IG9mIHRoZSBzdGF0ZSB0cmVlIG1heSBwb3RlbnRpYWxseSBoYXZlIGNoYW5nZWQuIFlvdSBtYXkgdGhlblxuICAgKiBjYWxsIGBnZXRTdGF0ZSgpYCB0byByZWFkIHRoZSBjdXJyZW50IHN0YXRlIHRyZWUgaW5zaWRlIHRoZSBjYWxsYmFjay5cbiAgICpcbiAgICogWW91IG1heSBjYWxsIGBkaXNwYXRjaCgpYCBmcm9tIGEgY2hhbmdlIGxpc3RlbmVyLCB3aXRoIHRoZSBmb2xsb3dpbmdcbiAgICogY2F2ZWF0czpcbiAgICpcbiAgICogMS4gVGhlIHN1YnNjcmlwdGlvbnMgYXJlIHNuYXBzaG90dGVkIGp1c3QgYmVmb3JlIGV2ZXJ5IGBkaXNwYXRjaCgpYCBjYWxsLlxuICAgKiBJZiB5b3Ugc3Vic2NyaWJlIG9yIHVuc3Vic2NyaWJlIHdoaWxlIHRoZSBsaXN0ZW5lcnMgYXJlIGJlaW5nIGludm9rZWQsIHRoaXNcbiAgICogd2lsbCBub3QgaGF2ZSBhbnkgZWZmZWN0IG9uIHRoZSBgZGlzcGF0Y2goKWAgdGhhdCBpcyBjdXJyZW50bHkgaW4gcHJvZ3Jlc3MuXG4gICAqIEhvd2V2ZXIsIHRoZSBuZXh0IGBkaXNwYXRjaCgpYCBjYWxsLCB3aGV0aGVyIG5lc3RlZCBvciBub3QsIHdpbGwgdXNlIGEgbW9yZVxuICAgKiByZWNlbnQgc25hcHNob3Qgb2YgdGhlIHN1YnNjcmlwdGlvbiBsaXN0LlxuICAgKlxuICAgKiAyLiBUaGUgbGlzdGVuZXIgc2hvdWxkIG5vdCBleHBlY3QgdG8gc2VlIGFsbCBzdGF0ZSBjaGFuZ2VzLCBhcyB0aGUgc3RhdGVcbiAgICogbWlnaHQgaGF2ZSBiZWVuIHVwZGF0ZWQgbXVsdGlwbGUgdGltZXMgZHVyaW5nIGEgbmVzdGVkIGBkaXNwYXRjaCgpYCBiZWZvcmVcbiAgICogdGhlIGxpc3RlbmVyIGlzIGNhbGxlZC4gSXQgaXMsIGhvd2V2ZXIsIGd1YXJhbnRlZWQgdGhhdCBhbGwgc3Vic2NyaWJlcnNcbiAgICogcmVnaXN0ZXJlZCBiZWZvcmUgdGhlIGBkaXNwYXRjaCgpYCBzdGFydGVkIHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlIGxhdGVzdFxuICAgKiBzdGF0ZSBieSB0aGUgdGltZSBpdCBleGl0cy5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgQSBjYWxsYmFjayB0byBiZSBpbnZva2VkIG9uIGV2ZXJ5IGRpc3BhdGNoLlxuICAgKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgZnVuY3Rpb24gdG8gcmVtb3ZlIHRoaXMgY2hhbmdlIGxpc3RlbmVyLlxuICAgKi9cbiAgZnVuY3Rpb24gc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBsaXN0ZW5lciB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIHZhciBpc1N1YnNjcmliZWQgPSB0cnVlO1xuXG4gICAgZW5zdXJlQ2FuTXV0YXRlTmV4dExpc3RlbmVycygpO1xuICAgIG5leHRMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gdW5zdWJzY3JpYmUoKSB7XG4gICAgICBpZiAoIWlzU3Vic2NyaWJlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlzU3Vic2NyaWJlZCA9IGZhbHNlO1xuXG4gICAgICBlbnN1cmVDYW5NdXRhdGVOZXh0TGlzdGVuZXJzKCk7XG4gICAgICB2YXIgaW5kZXggPSBuZXh0TGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpO1xuICAgICAgbmV4dExpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogRGlzcGF0Y2hlcyBhbiBhY3Rpb24uIEl0IGlzIHRoZSBvbmx5IHdheSB0byB0cmlnZ2VyIGEgc3RhdGUgY2hhbmdlLlxuICAgKlxuICAgKiBUaGUgYHJlZHVjZXJgIGZ1bmN0aW9uLCB1c2VkIHRvIGNyZWF0ZSB0aGUgc3RvcmUsIHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlXG4gICAqIGN1cnJlbnQgc3RhdGUgdHJlZSBhbmQgdGhlIGdpdmVuIGBhY3Rpb25gLiBJdHMgcmV0dXJuIHZhbHVlIHdpbGxcbiAgICogYmUgY29uc2lkZXJlZCB0aGUgKipuZXh0Kiogc3RhdGUgb2YgdGhlIHRyZWUsIGFuZCB0aGUgY2hhbmdlIGxpc3RlbmVyc1xuICAgKiB3aWxsIGJlIG5vdGlmaWVkLlxuICAgKlxuICAgKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvbmx5IHN1cHBvcnRzIHBsYWluIG9iamVjdCBhY3Rpb25zLiBJZiB5b3Ugd2FudCB0b1xuICAgKiBkaXNwYXRjaCBhIFByb21pc2UsIGFuIE9ic2VydmFibGUsIGEgdGh1bmssIG9yIHNvbWV0aGluZyBlbHNlLCB5b3UgbmVlZCB0b1xuICAgKiB3cmFwIHlvdXIgc3RvcmUgY3JlYXRpbmcgZnVuY3Rpb24gaW50byB0aGUgY29ycmVzcG9uZGluZyBtaWRkbGV3YXJlLiBGb3JcbiAgICogZXhhbXBsZSwgc2VlIHRoZSBkb2N1bWVudGF0aW9uIGZvciB0aGUgYHJlZHV4LXRodW5rYCBwYWNrYWdlLiBFdmVuIHRoZVxuICAgKiBtaWRkbGV3YXJlIHdpbGwgZXZlbnR1YWxseSBkaXNwYXRjaCBwbGFpbiBvYmplY3QgYWN0aW9ucyB1c2luZyB0aGlzIG1ldGhvZC5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbiBBIHBsYWluIG9iamVjdCByZXByZXNlbnRpbmcg4oCcd2hhdCBjaGFuZ2Vk4oCdLiBJdCBpc1xuICAgKiBhIGdvb2QgaWRlYSB0byBrZWVwIGFjdGlvbnMgc2VyaWFsaXphYmxlIHNvIHlvdSBjYW4gcmVjb3JkIGFuZCByZXBsYXkgdXNlclxuICAgKiBzZXNzaW9ucywgb3IgdXNlIHRoZSB0aW1lIHRyYXZlbGxpbmcgYHJlZHV4LWRldnRvb2xzYC4gQW4gYWN0aW9uIG11c3QgaGF2ZVxuICAgKiBhIGB0eXBlYCBwcm9wZXJ0eSB3aGljaCBtYXkgbm90IGJlIGB1bmRlZmluZWRgLiBJdCBpcyBhIGdvb2QgaWRlYSB0byB1c2VcbiAgICogc3RyaW5nIGNvbnN0YW50cyBmb3IgYWN0aW9uIHR5cGVzLlxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBGb3IgY29udmVuaWVuY2UsIHRoZSBzYW1lIGFjdGlvbiBvYmplY3QgeW91IGRpc3BhdGNoZWQuXG4gICAqXG4gICAqIE5vdGUgdGhhdCwgaWYgeW91IHVzZSBhIGN1c3RvbSBtaWRkbGV3YXJlLCBpdCBtYXkgd3JhcCBgZGlzcGF0Y2goKWAgdG9cbiAgICogcmV0dXJuIHNvbWV0aGluZyBlbHNlIChmb3IgZXhhbXBsZSwgYSBQcm9taXNlIHlvdSBjYW4gYXdhaXQpLlxuICAgKi9cbiAgZnVuY3Rpb24gZGlzcGF0Y2goYWN0aW9uKSB7XG4gICAgaWYgKCEoMCwgX2lzUGxhaW5PYmplY3QyWydkZWZhdWx0J10pKGFjdGlvbikpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQWN0aW9ucyBtdXN0IGJlIHBsYWluIG9iamVjdHMuICcgKyAnVXNlIGN1c3RvbSBtaWRkbGV3YXJlIGZvciBhc3luYyBhY3Rpb25zLicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgYWN0aW9uLnR5cGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FjdGlvbnMgbWF5IG5vdCBoYXZlIGFuIHVuZGVmaW5lZCBcInR5cGVcIiBwcm9wZXJ0eS4gJyArICdIYXZlIHlvdSBtaXNzcGVsbGVkIGEgY29uc3RhbnQ/Jyk7XG4gICAgfVxuXG4gICAgaWYgKGlzRGlzcGF0Y2hpbmcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUmVkdWNlcnMgbWF5IG5vdCBkaXNwYXRjaCBhY3Rpb25zLicpO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBpc0Rpc3BhdGNoaW5nID0gdHJ1ZTtcbiAgICAgIGN1cnJlbnRTdGF0ZSA9IGN1cnJlbnRSZWR1Y2VyKGN1cnJlbnRTdGF0ZSwgYWN0aW9uKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaXNEaXNwYXRjaGluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBsaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzID0gbmV4dExpc3RlbmVycztcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgbGlzdGVuZXJzW2ldKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXBsYWNlcyB0aGUgcmVkdWNlciBjdXJyZW50bHkgdXNlZCBieSB0aGUgc3RvcmUgdG8gY2FsY3VsYXRlIHRoZSBzdGF0ZS5cbiAgICpcbiAgICogWW91IG1pZ2h0IG5lZWQgdGhpcyBpZiB5b3VyIGFwcCBpbXBsZW1lbnRzIGNvZGUgc3BsaXR0aW5nIGFuZCB5b3Ugd2FudCB0b1xuICAgKiBsb2FkIHNvbWUgb2YgdGhlIHJlZHVjZXJzIGR5bmFtaWNhbGx5LiBZb3UgbWlnaHQgYWxzbyBuZWVkIHRoaXMgaWYgeW91XG4gICAqIGltcGxlbWVudCBhIGhvdCByZWxvYWRpbmcgbWVjaGFuaXNtIGZvciBSZWR1eC5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbmV4dFJlZHVjZXIgVGhlIHJlZHVjZXIgZm9yIHRoZSBzdG9yZSB0byB1c2UgaW5zdGVhZC5cbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuICBmdW5jdGlvbiByZXBsYWNlUmVkdWNlcihuZXh0UmVkdWNlcikge1xuICAgIGlmICh0eXBlb2YgbmV4dFJlZHVjZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgdGhlIG5leHRSZWR1Y2VyIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgfVxuXG4gICAgY3VycmVudFJlZHVjZXIgPSBuZXh0UmVkdWNlcjtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IEFjdGlvblR5cGVzLklOSVQgfSk7XG4gIH1cblxuICAvKipcbiAgICogSW50ZXJvcGVyYWJpbGl0eSBwb2ludCBmb3Igb2JzZXJ2YWJsZS9yZWFjdGl2ZSBsaWJyYXJpZXMuXG4gICAqIEByZXR1cm5zIHtvYnNlcnZhYmxlfSBBIG1pbmltYWwgb2JzZXJ2YWJsZSBvZiBzdGF0ZSBjaGFuZ2VzLlxuICAgKiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlIHRoZSBvYnNlcnZhYmxlIHByb3Bvc2FsOlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vemVucGFyc2luZy9lcy1vYnNlcnZhYmxlXG4gICAqL1xuICBmdW5jdGlvbiBvYnNlcnZhYmxlKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIG91dGVyU3Vic2NyaWJlID0gc3Vic2NyaWJlO1xuICAgIHJldHVybiBfcmVmID0ge1xuICAgICAgLyoqXG4gICAgICAgKiBUaGUgbWluaW1hbCBvYnNlcnZhYmxlIHN1YnNjcmlwdGlvbiBtZXRob2QuXG4gICAgICAgKiBAcGFyYW0ge09iamVjdH0gb2JzZXJ2ZXIgQW55IG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIGFzIGFuIG9ic2VydmVyLlxuICAgICAgICogVGhlIG9ic2VydmVyIG9iamVjdCBzaG91bGQgaGF2ZSBhIGBuZXh0YCBtZXRob2QuXG4gICAgICAgKiBAcmV0dXJucyB7c3Vic2NyaXB0aW9ufSBBbiBvYmplY3Qgd2l0aCBhbiBgdW5zdWJzY3JpYmVgIG1ldGhvZCB0aGF0IGNhblxuICAgICAgICogYmUgdXNlZCB0byB1bnN1YnNjcmliZSB0aGUgb2JzZXJ2YWJsZSBmcm9tIHRoZSBzdG9yZSwgYW5kIHByZXZlbnQgZnVydGhlclxuICAgICAgICogZW1pc3Npb24gb2YgdmFsdWVzIGZyb20gdGhlIG9ic2VydmFibGUuXG4gICAgICAgKi9cbiAgICAgIHN1YnNjcmliZTogZnVuY3Rpb24gc3Vic2NyaWJlKG9ic2VydmVyKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb2JzZXJ2ZXIgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgdGhlIG9ic2VydmVyIHRvIGJlIGFuIG9iamVjdC4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG9ic2VydmVTdGF0ZSgpIHtcbiAgICAgICAgICBpZiAob2JzZXJ2ZXIubmV4dCkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChnZXRTdGF0ZSgpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBvYnNlcnZlU3RhdGUoKTtcbiAgICAgICAgdmFyIHVuc3Vic2NyaWJlID0gb3V0ZXJTdWJzY3JpYmUob2JzZXJ2ZVN0YXRlKTtcbiAgICAgICAgcmV0dXJuIHsgdW5zdWJzY3JpYmU6IHVuc3Vic2NyaWJlIH07XG4gICAgICB9XG4gICAgfSwgX3JlZltfc3ltYm9sT2JzZXJ2YWJsZTJbJ2RlZmF1bHQnXV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LCBfcmVmO1xuICB9XG5cbiAgLy8gV2hlbiBhIHN0b3JlIGlzIGNyZWF0ZWQsIGFuIFwiSU5JVFwiIGFjdGlvbiBpcyBkaXNwYXRjaGVkIHNvIHRoYXQgZXZlcnlcbiAgLy8gcmVkdWNlciByZXR1cm5zIHRoZWlyIGluaXRpYWwgc3RhdGUuIFRoaXMgZWZmZWN0aXZlbHkgcG9wdWxhdGVzXG4gIC8vIHRoZSBpbml0aWFsIHN0YXRlIHRyZWUuXG4gIGRpc3BhdGNoKHsgdHlwZTogQWN0aW9uVHlwZXMuSU5JVCB9KTtcblxuICByZXR1cm4gX3JlZjIgPSB7XG4gICAgZGlzcGF0Y2g6IGRpc3BhdGNoLFxuICAgIHN1YnNjcmliZTogc3Vic2NyaWJlLFxuICAgIGdldFN0YXRlOiBnZXRTdGF0ZSxcbiAgICByZXBsYWNlUmVkdWNlcjogcmVwbGFjZVJlZHVjZXJcbiAgfSwgX3JlZjJbX3N5bWJvbE9ic2VydmFibGUyWydkZWZhdWx0J11dID0gb2JzZXJ2YWJsZSwgX3JlZjI7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlZHV4L2xpYi9jcmVhdGVTdG9yZS5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBnZXRQcm90b3R5cGUgPSByZXF1aXJlKCcuL19nZXRQcm90b3R5cGUnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XSc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogVXNlZCB0byBpbmZlciB0aGUgYE9iamVjdGAgY29uc3RydWN0b3IuICovXG52YXIgb2JqZWN0Q3RvclN0cmluZyA9IGZ1bmNUb1N0cmluZy5jYWxsKE9iamVjdCk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBwbGFpbiBvYmplY3QsIHRoYXQgaXMsIGFuIG9iamVjdCBjcmVhdGVkIGJ5IHRoZVxuICogYE9iamVjdGAgY29uc3RydWN0b3Igb3Igb25lIHdpdGggYSBgW1tQcm90b3R5cGVdXWAgb2YgYG51bGxgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC44LjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcGxhaW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqIH1cbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QobmV3IEZvbyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QoeyAneCc6IDAsICd5JzogMCB9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QoT2JqZWN0LmNyZWF0ZShudWxsKSk7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3QodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdExpa2UodmFsdWUpIHx8IGJhc2VHZXRUYWcodmFsdWUpICE9IG9iamVjdFRhZykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcHJvdG8gPSBnZXRQcm90b3R5cGUodmFsdWUpO1xuICBpZiAocHJvdG8gPT09IG51bGwpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICB2YXIgQ3RvciA9IGhhc093blByb3BlcnR5LmNhbGwocHJvdG8sICdjb25zdHJ1Y3RvcicpICYmIHByb3RvLmNvbnN0cnVjdG9yO1xuICByZXR1cm4gdHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yIGluc3RhbmNlb2YgQ3RvciAmJlxuICAgIGZ1bmNUb1N0cmluZy5jYWxsKEN0b3IpID09IG9iamVjdEN0b3JTdHJpbmc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNQbGFpbk9iamVjdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNQbGFpbk9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgZ2V0UmF3VGFnID0gcmVxdWlyZSgnLi9fZ2V0UmF3VGFnJyksXG4gICAgb2JqZWN0VG9TdHJpbmcgPSByZXF1aXJlKCcuL19vYmplY3RUb1N0cmluZycpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbnVsbFRhZyA9ICdbb2JqZWN0IE51bGxdJyxcbiAgICB1bmRlZmluZWRUYWcgPSAnW29iamVjdCBVbmRlZmluZWRdJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2Agd2l0aG91dCBmYWxsYmFja3MgZm9yIGJ1Z2d5IGVudmlyb25tZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWRUYWcgOiBudWxsVGFnO1xuICB9XG4gIHJldHVybiAoc3ltVG9TdHJpbmdUYWcgJiYgc3ltVG9TdHJpbmdUYWcgaW4gT2JqZWN0KHZhbHVlKSlcbiAgICA/IGdldFJhd1RhZyh2YWx1ZSlcbiAgICA6IG9iamVjdFRvU3RyaW5nKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0VGFnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUdldFRhZy5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cbm1vZHVsZS5leHBvcnRzID0gU3ltYm9sO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fU3ltYm9sLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBmcmVlR2xvYmFsID0gcmVxdWlyZSgnLi9fZnJlZUdsb2JhbCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gcm9vdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3Jvb3QuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxubW9kdWxlLmV4cG9ydHMgPSBmcmVlR2xvYmFsO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZnJlZUdsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VHZXRUYWdgIHdoaWNoIGlnbm9yZXMgYFN5bWJvbC50b1N0cmluZ1RhZ2AgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBnZXRSYXdUYWcodmFsdWUpIHtcbiAgdmFyIGlzT3duID0gaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgc3ltVG9TdHJpbmdUYWcpLFxuICAgICAgdGFnID0gdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuXG4gIHRyeSB7XG4gICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdW5kZWZpbmVkO1xuICAgIHZhciB1bm1hc2tlZCA9IHRydWU7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdmFyIHJlc3VsdCA9IG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICBpZiAodW5tYXNrZWQpIHtcbiAgICBpZiAoaXNPd24pIHtcbiAgICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHRhZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRSYXdUYWc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19nZXRSYXdUYWcuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0VG9TdHJpbmc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19vYmplY3RUb1N0cmluZy5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgb3ZlckFyZyA9IHJlcXVpcmUoJy4vX292ZXJBcmcnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgZ2V0UHJvdG90eXBlID0gb3ZlckFyZyhPYmplY3QuZ2V0UHJvdG90eXBlT2YsIE9iamVjdCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UHJvdG90eXBlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZ2V0UHJvdG90eXBlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENyZWF0ZXMgYSB1bmFyeSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggaXRzIGFyZ3VtZW50IHRyYW5zZm9ybWVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB3cmFwLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSBhcmd1bWVudCB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlckFyZyhmdW5jLCB0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBmdW5jKHRyYW5zZm9ybShhcmcpKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvdmVyQXJnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fb3ZlckFyZy5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc09iamVjdExpa2UuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvaW5kZXgnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zeW1ib2wtb2JzZXJ2YWJsZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3BvbnlmaWxsID0gcmVxdWlyZSgnLi9wb255ZmlsbCcpO1xuXG52YXIgX3BvbnlmaWxsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BvbnlmaWxsKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgcm9vdDsgLyogZ2xvYmFsIHdpbmRvdyAqL1xuXG5cbmlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgcm9vdCA9IHNlbGY7XG59IGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIHJvb3QgPSB3aW5kb3c7XG59IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gIHJvb3QgPSBnbG9iYWw7XG59IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSB7XG4gIHJvb3QgPSBtb2R1bGU7XG59IGVsc2Uge1xuICByb290ID0gRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbn1cblxudmFyIHJlc3VsdCA9ICgwLCBfcG9ueWZpbGwyWydkZWZhdWx0J10pKHJvb3QpO1xuZXhwb3J0c1snZGVmYXVsdCddID0gcmVzdWx0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zeW1ib2wtb2JzZXJ2YWJsZS9saWIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XHJcblx0aWYoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcclxuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xyXG5cdFx0bW9kdWxlLnBhdGhzID0gW107XHJcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcclxuXHRcdG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xyXG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XHJcblx0fVxyXG5cdHJldHVybiBtb2R1bGU7XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzWydkZWZhdWx0J10gPSBzeW1ib2xPYnNlcnZhYmxlUG9ueWZpbGw7XG5mdW5jdGlvbiBzeW1ib2xPYnNlcnZhYmxlUG9ueWZpbGwocm9vdCkge1xuXHR2YXIgcmVzdWx0O1xuXHR2YXIgX1N5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5cdGlmICh0eXBlb2YgX1N5bWJvbCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdGlmIChfU3ltYm9sLm9ic2VydmFibGUpIHtcblx0XHRcdHJlc3VsdCA9IF9TeW1ib2wub2JzZXJ2YWJsZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVzdWx0ID0gX1N5bWJvbCgnb2JzZXJ2YWJsZScpO1xuXHRcdFx0X1N5bWJvbC5vYnNlcnZhYmxlID0gcmVzdWx0O1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRyZXN1bHQgPSAnQEBvYnNlcnZhYmxlJztcblx0fVxuXG5cdHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zeW1ib2wtb2JzZXJ2YWJsZS9saWIvcG9ueWZpbGwuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGNvbWJpbmVSZWR1Y2VycztcblxudmFyIF9jcmVhdGVTdG9yZSA9IHJlcXVpcmUoJy4vY3JlYXRlU3RvcmUnKTtcblxudmFyIF9pc1BsYWluT2JqZWN0ID0gcmVxdWlyZSgnbG9kYXNoL2lzUGxhaW5PYmplY3QnKTtcblxudmFyIF9pc1BsYWluT2JqZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzUGxhaW5PYmplY3QpO1xuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCcuL3V0aWxzL3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGdldFVuZGVmaW5lZFN0YXRlRXJyb3JNZXNzYWdlKGtleSwgYWN0aW9uKSB7XG4gIHZhciBhY3Rpb25UeXBlID0gYWN0aW9uICYmIGFjdGlvbi50eXBlO1xuICB2YXIgYWN0aW9uTmFtZSA9IGFjdGlvblR5cGUgJiYgJ1wiJyArIGFjdGlvblR5cGUudG9TdHJpbmcoKSArICdcIicgfHwgJ2FuIGFjdGlvbic7XG5cbiAgcmV0dXJuICdHaXZlbiBhY3Rpb24gJyArIGFjdGlvbk5hbWUgKyAnLCByZWR1Y2VyIFwiJyArIGtleSArICdcIiByZXR1cm5lZCB1bmRlZmluZWQuICcgKyAnVG8gaWdub3JlIGFuIGFjdGlvbiwgeW91IG11c3QgZXhwbGljaXRseSByZXR1cm4gdGhlIHByZXZpb3VzIHN0YXRlLic7XG59XG5cbmZ1bmN0aW9uIGdldFVuZXhwZWN0ZWRTdGF0ZVNoYXBlV2FybmluZ01lc3NhZ2UoaW5wdXRTdGF0ZSwgcmVkdWNlcnMsIGFjdGlvbiwgdW5leHBlY3RlZEtleUNhY2hlKSB7XG4gIHZhciByZWR1Y2VyS2V5cyA9IE9iamVjdC5rZXlzKHJlZHVjZXJzKTtcbiAgdmFyIGFyZ3VtZW50TmFtZSA9IGFjdGlvbiAmJiBhY3Rpb24udHlwZSA9PT0gX2NyZWF0ZVN0b3JlLkFjdGlvblR5cGVzLklOSVQgPyAncHJlbG9hZGVkU3RhdGUgYXJndW1lbnQgcGFzc2VkIHRvIGNyZWF0ZVN0b3JlJyA6ICdwcmV2aW91cyBzdGF0ZSByZWNlaXZlZCBieSB0aGUgcmVkdWNlcic7XG5cbiAgaWYgKHJlZHVjZXJLZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAnU3RvcmUgZG9lcyBub3QgaGF2ZSBhIHZhbGlkIHJlZHVjZXIuIE1ha2Ugc3VyZSB0aGUgYXJndW1lbnQgcGFzc2VkICcgKyAndG8gY29tYmluZVJlZHVjZXJzIGlzIGFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgYXJlIHJlZHVjZXJzLic7XG4gIH1cblxuICBpZiAoISgwLCBfaXNQbGFpbk9iamVjdDJbJ2RlZmF1bHQnXSkoaW5wdXRTdGF0ZSkpIHtcbiAgICByZXR1cm4gJ1RoZSAnICsgYXJndW1lbnROYW1lICsgJyBoYXMgdW5leHBlY3RlZCB0eXBlIG9mIFwiJyArIHt9LnRvU3RyaW5nLmNhbGwoaW5wdXRTdGF0ZSkubWF0Y2goL1xccyhbYS16fEEtWl0rKS8pWzFdICsgJ1wiLiBFeHBlY3RlZCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3Qgd2l0aCB0aGUgZm9sbG93aW5nICcgKyAoJ2tleXM6IFwiJyArIHJlZHVjZXJLZXlzLmpvaW4oJ1wiLCBcIicpICsgJ1wiJyk7XG4gIH1cblxuICB2YXIgdW5leHBlY3RlZEtleXMgPSBPYmplY3Qua2V5cyhpbnB1dFN0YXRlKS5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiAhcmVkdWNlcnMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiAhdW5leHBlY3RlZEtleUNhY2hlW2tleV07XG4gIH0pO1xuXG4gIHVuZXhwZWN0ZWRLZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHVuZXhwZWN0ZWRLZXlDYWNoZVtrZXldID0gdHJ1ZTtcbiAgfSk7XG5cbiAgaWYgKHVuZXhwZWN0ZWRLZXlzLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gJ1VuZXhwZWN0ZWQgJyArICh1bmV4cGVjdGVkS2V5cy5sZW5ndGggPiAxID8gJ2tleXMnIDogJ2tleScpICsgJyAnICsgKCdcIicgKyB1bmV4cGVjdGVkS2V5cy5qb2luKCdcIiwgXCInKSArICdcIiBmb3VuZCBpbiAnICsgYXJndW1lbnROYW1lICsgJy4gJykgKyAnRXhwZWN0ZWQgdG8gZmluZCBvbmUgb2YgdGhlIGtub3duIHJlZHVjZXIga2V5cyBpbnN0ZWFkOiAnICsgKCdcIicgKyByZWR1Y2VyS2V5cy5qb2luKCdcIiwgXCInKSArICdcIi4gVW5leHBlY3RlZCBrZXlzIHdpbGwgYmUgaWdub3JlZC4nKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhc3NlcnRSZWR1Y2VyU2FuaXR5KHJlZHVjZXJzKSB7XG4gIE9iamVjdC5rZXlzKHJlZHVjZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgcmVkdWNlciA9IHJlZHVjZXJzW2tleV07XG4gICAgdmFyIGluaXRpYWxTdGF0ZSA9IHJlZHVjZXIodW5kZWZpbmVkLCB7IHR5cGU6IF9jcmVhdGVTdG9yZS5BY3Rpb25UeXBlcy5JTklUIH0pO1xuXG4gICAgaWYgKHR5cGVvZiBpbml0aWFsU3RhdGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlZHVjZXIgXCInICsga2V5ICsgJ1wiIHJldHVybmVkIHVuZGVmaW5lZCBkdXJpbmcgaW5pdGlhbGl6YXRpb24uICcgKyAnSWYgdGhlIHN0YXRlIHBhc3NlZCB0byB0aGUgcmVkdWNlciBpcyB1bmRlZmluZWQsIHlvdSBtdXN0ICcgKyAnZXhwbGljaXRseSByZXR1cm4gdGhlIGluaXRpYWwgc3RhdGUuIFRoZSBpbml0aWFsIHN0YXRlIG1heSAnICsgJ25vdCBiZSB1bmRlZmluZWQuJyk7XG4gICAgfVxuXG4gICAgdmFyIHR5cGUgPSAnQEByZWR1eC9QUk9CRV9VTktOT1dOX0FDVElPTl8nICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDcpLnNwbGl0KCcnKS5qb2luKCcuJyk7XG4gICAgaWYgKHR5cGVvZiByZWR1Y2VyKHVuZGVmaW5lZCwgeyB0eXBlOiB0eXBlIH0pID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWR1Y2VyIFwiJyArIGtleSArICdcIiByZXR1cm5lZCB1bmRlZmluZWQgd2hlbiBwcm9iZWQgd2l0aCBhIHJhbmRvbSB0eXBlLiAnICsgKCdEb25cXCd0IHRyeSB0byBoYW5kbGUgJyArIF9jcmVhdGVTdG9yZS5BY3Rpb25UeXBlcy5JTklUICsgJyBvciBvdGhlciBhY3Rpb25zIGluIFwicmVkdXgvKlwiICcpICsgJ25hbWVzcGFjZS4gVGhleSBhcmUgY29uc2lkZXJlZCBwcml2YXRlLiBJbnN0ZWFkLCB5b3UgbXVzdCByZXR1cm4gdGhlICcgKyAnY3VycmVudCBzdGF0ZSBmb3IgYW55IHVua25vd24gYWN0aW9ucywgdW5sZXNzIGl0IGlzIHVuZGVmaW5lZCwgJyArICdpbiB3aGljaCBjYXNlIHlvdSBtdXN0IHJldHVybiB0aGUgaW5pdGlhbCBzdGF0ZSwgcmVnYXJkbGVzcyBvZiB0aGUgJyArICdhY3Rpb24gdHlwZS4gVGhlIGluaXRpYWwgc3RhdGUgbWF5IG5vdCBiZSB1bmRlZmluZWQuJyk7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBUdXJucyBhbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSBkaWZmZXJlbnQgcmVkdWNlciBmdW5jdGlvbnMsIGludG8gYSBzaW5nbGVcbiAqIHJlZHVjZXIgZnVuY3Rpb24uIEl0IHdpbGwgY2FsbCBldmVyeSBjaGlsZCByZWR1Y2VyLCBhbmQgZ2F0aGVyIHRoZWlyIHJlc3VsdHNcbiAqIGludG8gYSBzaW5nbGUgc3RhdGUgb2JqZWN0LCB3aG9zZSBrZXlzIGNvcnJlc3BvbmQgdG8gdGhlIGtleXMgb2YgdGhlIHBhc3NlZFxuICogcmVkdWNlciBmdW5jdGlvbnMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHJlZHVjZXJzIEFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgY29ycmVzcG9uZCB0byBkaWZmZXJlbnRcbiAqIHJlZHVjZXIgZnVuY3Rpb25zIHRoYXQgbmVlZCB0byBiZSBjb21iaW5lZCBpbnRvIG9uZS4gT25lIGhhbmR5IHdheSB0byBvYnRhaW5cbiAqIGl0IGlzIHRvIHVzZSBFUzYgYGltcG9ydCAqIGFzIHJlZHVjZXJzYCBzeW50YXguIFRoZSByZWR1Y2VycyBtYXkgbmV2ZXIgcmV0dXJuXG4gKiB1bmRlZmluZWQgZm9yIGFueSBhY3Rpb24uIEluc3RlYWQsIHRoZXkgc2hvdWxkIHJldHVybiB0aGVpciBpbml0aWFsIHN0YXRlXG4gKiBpZiB0aGUgc3RhdGUgcGFzc2VkIHRvIHRoZW0gd2FzIHVuZGVmaW5lZCwgYW5kIHRoZSBjdXJyZW50IHN0YXRlIGZvciBhbnlcbiAqIHVucmVjb2duaXplZCBhY3Rpb24uXG4gKlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIHJlZHVjZXIgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGV2ZXJ5IHJlZHVjZXIgaW5zaWRlIHRoZVxuICogcGFzc2VkIG9iamVjdCwgYW5kIGJ1aWxkcyBhIHN0YXRlIG9iamVjdCB3aXRoIHRoZSBzYW1lIHNoYXBlLlxuICovXG5mdW5jdGlvbiBjb21iaW5lUmVkdWNlcnMocmVkdWNlcnMpIHtcbiAgdmFyIHJlZHVjZXJLZXlzID0gT2JqZWN0LmtleXMocmVkdWNlcnMpO1xuICB2YXIgZmluYWxSZWR1Y2VycyA9IHt9O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHJlZHVjZXJLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IHJlZHVjZXJLZXlzW2ldO1xuXG4gICAgaWYgKFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHJlZHVjZXJzW2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICgwLCBfd2FybmluZzJbJ2RlZmF1bHQnXSkoJ05vIHJlZHVjZXIgcHJvdmlkZWQgZm9yIGtleSBcIicgKyBrZXkgKyAnXCInKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHJlZHVjZXJzW2tleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGZpbmFsUmVkdWNlcnNba2V5XSA9IHJlZHVjZXJzW2tleV07XG4gICAgfVxuICB9XG4gIHZhciBmaW5hbFJlZHVjZXJLZXlzID0gT2JqZWN0LmtleXMoZmluYWxSZWR1Y2Vycyk7XG5cbiAgaWYgKFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgdmFyIHVuZXhwZWN0ZWRLZXlDYWNoZSA9IHt9O1xuICB9XG5cbiAgdmFyIHNhbml0eUVycm9yO1xuICB0cnkge1xuICAgIGFzc2VydFJlZHVjZXJTYW5pdHkoZmluYWxSZWR1Y2Vycyk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBzYW5pdHlFcnJvciA9IGU7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gY29tYmluYXRpb24oKSB7XG4gICAgdmFyIHN0YXRlID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMF07XG4gICAgdmFyIGFjdGlvbiA9IGFyZ3VtZW50c1sxXTtcblxuICAgIGlmIChzYW5pdHlFcnJvcikge1xuICAgICAgdGhyb3cgc2FuaXR5RXJyb3I7XG4gICAgfVxuXG4gICAgaWYgKFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgd2FybmluZ01lc3NhZ2UgPSBnZXRVbmV4cGVjdGVkU3RhdGVTaGFwZVdhcm5pbmdNZXNzYWdlKHN0YXRlLCBmaW5hbFJlZHVjZXJzLCBhY3Rpb24sIHVuZXhwZWN0ZWRLZXlDYWNoZSk7XG4gICAgICBpZiAod2FybmluZ01lc3NhZ2UpIHtcbiAgICAgICAgKDAsIF93YXJuaW5nMlsnZGVmYXVsdCddKSh3YXJuaW5nTWVzc2FnZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGhhc0NoYW5nZWQgPSBmYWxzZTtcbiAgICB2YXIgbmV4dFN0YXRlID0ge307XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmaW5hbFJlZHVjZXJLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0gZmluYWxSZWR1Y2VyS2V5c1tpXTtcbiAgICAgIHZhciByZWR1Y2VyID0gZmluYWxSZWR1Y2Vyc1trZXldO1xuICAgICAgdmFyIHByZXZpb3VzU3RhdGVGb3JLZXkgPSBzdGF0ZVtrZXldO1xuICAgICAgdmFyIG5leHRTdGF0ZUZvcktleSA9IHJlZHVjZXIocHJldmlvdXNTdGF0ZUZvcktleSwgYWN0aW9uKTtcbiAgICAgIGlmICh0eXBlb2YgbmV4dFN0YXRlRm9yS2V5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB2YXIgZXJyb3JNZXNzYWdlID0gZ2V0VW5kZWZpbmVkU3RhdGVFcnJvck1lc3NhZ2Uoa2V5LCBhY3Rpb24pO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JNZXNzYWdlKTtcbiAgICAgIH1cbiAgICAgIG5leHRTdGF0ZVtrZXldID0gbmV4dFN0YXRlRm9yS2V5O1xuICAgICAgaGFzQ2hhbmdlZCA9IGhhc0NoYW5nZWQgfHwgbmV4dFN0YXRlRm9yS2V5ICE9PSBwcmV2aW91c1N0YXRlRm9yS2V5O1xuICAgIH1cbiAgICByZXR1cm4gaGFzQ2hhbmdlZCA/IG5leHRTdGF0ZSA6IHN0YXRlO1xuICB9O1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWR1eC9saWIvY29tYmluZVJlZHVjZXJzLmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzWydkZWZhdWx0J10gPSB3YXJuaW5nO1xuLyoqXG4gKiBQcmludHMgYSB3YXJuaW5nIGluIHRoZSBjb25zb2xlIGlmIGl0IGV4aXN0cy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZSBUaGUgd2FybmluZyBtZXNzYWdlLlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIHdhcm5pbmcobWVzc2FnZSkge1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGNvbnNvbGUuZXJyb3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICB9XG4gIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuICB0cnkge1xuICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgaWYgeW91IGVuYWJsZVxuICAgIC8vIFwiYnJlYWsgb24gYWxsIGV4Y2VwdGlvbnNcIiBpbiB5b3VyIGNvbnNvbGUsXG4gICAgLy8gaXQgd291bGQgcGF1c2UgdGhlIGV4ZWN1dGlvbiBhdCB0aGlzIGxpbmUuXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWVtcHR5ICovXG4gIH0gY2F0Y2ggKGUpIHt9XG4gIC8qIGVzbGludC1lbmFibGUgbm8tZW1wdHkgKi9cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVkdXgvbGliL3V0aWxzL3dhcm5pbmcuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGJpbmRBY3Rpb25DcmVhdG9ycztcbmZ1bmN0aW9uIGJpbmRBY3Rpb25DcmVhdG9yKGFjdGlvbkNyZWF0b3IsIGRpc3BhdGNoKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGRpc3BhdGNoKGFjdGlvbkNyZWF0b3IuYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBUdXJucyBhbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSBhY3Rpb24gY3JlYXRvcnMsIGludG8gYW4gb2JqZWN0IHdpdGggdGhlXG4gKiBzYW1lIGtleXMsIGJ1dCB3aXRoIGV2ZXJ5IGZ1bmN0aW9uIHdyYXBwZWQgaW50byBhIGBkaXNwYXRjaGAgY2FsbCBzbyB0aGV5XG4gKiBtYXkgYmUgaW52b2tlZCBkaXJlY3RseS4gVGhpcyBpcyBqdXN0IGEgY29udmVuaWVuY2UgbWV0aG9kLCBhcyB5b3UgY2FuIGNhbGxcbiAqIGBzdG9yZS5kaXNwYXRjaChNeUFjdGlvbkNyZWF0b3JzLmRvU29tZXRoaW5nKCkpYCB5b3Vyc2VsZiBqdXN0IGZpbmUuXG4gKlxuICogRm9yIGNvbnZlbmllbmNlLCB5b3UgY2FuIGFsc28gcGFzcyBhIHNpbmdsZSBmdW5jdGlvbiBhcyB0aGUgZmlyc3QgYXJndW1lbnQsXG4gKiBhbmQgZ2V0IGEgZnVuY3Rpb24gaW4gcmV0dXJuLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb258T2JqZWN0fSBhY3Rpb25DcmVhdG9ycyBBbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSBhY3Rpb25cbiAqIGNyZWF0b3IgZnVuY3Rpb25zLiBPbmUgaGFuZHkgd2F5IHRvIG9idGFpbiBpdCBpcyB0byB1c2UgRVM2IGBpbXBvcnQgKiBhc2BcbiAqIHN5bnRheC4gWW91IG1heSBhbHNvIHBhc3MgYSBzaW5nbGUgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZGlzcGF0Y2ggVGhlIGBkaXNwYXRjaGAgZnVuY3Rpb24gYXZhaWxhYmxlIG9uIHlvdXIgUmVkdXhcbiAqIHN0b3JlLlxuICpcbiAqIEByZXR1cm5zIHtGdW5jdGlvbnxPYmplY3R9IFRoZSBvYmplY3QgbWltaWNraW5nIHRoZSBvcmlnaW5hbCBvYmplY3QsIGJ1dCB3aXRoXG4gKiBldmVyeSBhY3Rpb24gY3JlYXRvciB3cmFwcGVkIGludG8gdGhlIGBkaXNwYXRjaGAgY2FsbC4gSWYgeW91IHBhc3NlZCBhXG4gKiBmdW5jdGlvbiBhcyBgYWN0aW9uQ3JlYXRvcnNgLCB0aGUgcmV0dXJuIHZhbHVlIHdpbGwgYWxzbyBiZSBhIHNpbmdsZVxuICogZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpIHtcbiAgaWYgKHR5cGVvZiBhY3Rpb25DcmVhdG9ycyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcihhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBhY3Rpb25DcmVhdG9ycyAhPT0gJ29iamVjdCcgfHwgYWN0aW9uQ3JlYXRvcnMgPT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2JpbmRBY3Rpb25DcmVhdG9ycyBleHBlY3RlZCBhbiBvYmplY3Qgb3IgYSBmdW5jdGlvbiwgaW5zdGVhZCByZWNlaXZlZCAnICsgKGFjdGlvbkNyZWF0b3JzID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIGFjdGlvbkNyZWF0b3JzKSArICcuICcgKyAnRGlkIHlvdSB3cml0ZSBcImltcG9ydCBBY3Rpb25DcmVhdG9ycyBmcm9tXCIgaW5zdGVhZCBvZiBcImltcG9ydCAqIGFzIEFjdGlvbkNyZWF0b3JzIGZyb21cIj8nKTtcbiAgfVxuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoYWN0aW9uQ3JlYXRvcnMpO1xuICB2YXIgYm91bmRBY3Rpb25DcmVhdG9ycyA9IHt9O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICB2YXIgYWN0aW9uQ3JlYXRvciA9IGFjdGlvbkNyZWF0b3JzW2tleV07XG4gICAgaWYgKHR5cGVvZiBhY3Rpb25DcmVhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBib3VuZEFjdGlvbkNyZWF0b3JzW2tleV0gPSBiaW5kQWN0aW9uQ3JlYXRvcihhY3Rpb25DcmVhdG9yLCBkaXNwYXRjaCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBib3VuZEFjdGlvbkNyZWF0b3JzO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWR1eC9saWIvYmluZEFjdGlvbkNyZWF0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGFwcGx5TWlkZGxld2FyZTtcblxudmFyIF9jb21wb3NlID0gcmVxdWlyZSgnLi9jb21wb3NlJyk7XG5cbnZhciBfY29tcG9zZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21wb3NlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG4vKipcbiAqIENyZWF0ZXMgYSBzdG9yZSBlbmhhbmNlciB0aGF0IGFwcGxpZXMgbWlkZGxld2FyZSB0byB0aGUgZGlzcGF0Y2ggbWV0aG9kXG4gKiBvZiB0aGUgUmVkdXggc3RvcmUuIFRoaXMgaXMgaGFuZHkgZm9yIGEgdmFyaWV0eSBvZiB0YXNrcywgc3VjaCBhcyBleHByZXNzaW5nXG4gKiBhc3luY2hyb25vdXMgYWN0aW9ucyBpbiBhIGNvbmNpc2UgbWFubmVyLCBvciBsb2dnaW5nIGV2ZXJ5IGFjdGlvbiBwYXlsb2FkLlxuICpcbiAqIFNlZSBgcmVkdXgtdGh1bmtgIHBhY2thZ2UgYXMgYW4gZXhhbXBsZSBvZiB0aGUgUmVkdXggbWlkZGxld2FyZS5cbiAqXG4gKiBCZWNhdXNlIG1pZGRsZXdhcmUgaXMgcG90ZW50aWFsbHkgYXN5bmNocm9ub3VzLCB0aGlzIHNob3VsZCBiZSB0aGUgZmlyc3RcbiAqIHN0b3JlIGVuaGFuY2VyIGluIHRoZSBjb21wb3NpdGlvbiBjaGFpbi5cbiAqXG4gKiBOb3RlIHRoYXQgZWFjaCBtaWRkbGV3YXJlIHdpbGwgYmUgZ2l2ZW4gdGhlIGBkaXNwYXRjaGAgYW5kIGBnZXRTdGF0ZWAgZnVuY3Rpb25zXG4gKiBhcyBuYW1lZCBhcmd1bWVudHMuXG4gKlxuICogQHBhcmFtIHsuLi5GdW5jdGlvbn0gbWlkZGxld2FyZXMgVGhlIG1pZGRsZXdhcmUgY2hhaW4gdG8gYmUgYXBwbGllZC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBzdG9yZSBlbmhhbmNlciBhcHBseWluZyB0aGUgbWlkZGxld2FyZS5cbiAqL1xuZnVuY3Rpb24gYXBwbHlNaWRkbGV3YXJlKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgbWlkZGxld2FyZXMgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBtaWRkbGV3YXJlc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoY3JlYXRlU3RvcmUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHJlZHVjZXIsIHByZWxvYWRlZFN0YXRlLCBlbmhhbmNlcikge1xuICAgICAgdmFyIHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgcHJlbG9hZGVkU3RhdGUsIGVuaGFuY2VyKTtcbiAgICAgIHZhciBfZGlzcGF0Y2ggPSBzdG9yZS5kaXNwYXRjaDtcbiAgICAgIHZhciBjaGFpbiA9IFtdO1xuXG4gICAgICB2YXIgbWlkZGxld2FyZUFQSSA9IHtcbiAgICAgICAgZ2V0U3RhdGU6IHN0b3JlLmdldFN0YXRlLFxuICAgICAgICBkaXNwYXRjaDogZnVuY3Rpb24gZGlzcGF0Y2goYWN0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIF9kaXNwYXRjaChhY3Rpb24pO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgY2hhaW4gPSBtaWRkbGV3YXJlcy5tYXAoZnVuY3Rpb24gKG1pZGRsZXdhcmUpIHtcbiAgICAgICAgcmV0dXJuIG1pZGRsZXdhcmUobWlkZGxld2FyZUFQSSk7XG4gICAgICB9KTtcbiAgICAgIF9kaXNwYXRjaCA9IF9jb21wb3NlMlsnZGVmYXVsdCddLmFwcGx5KHVuZGVmaW5lZCwgY2hhaW4pKHN0b3JlLmRpc3BhdGNoKTtcblxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdG9yZSwge1xuICAgICAgICBkaXNwYXRjaDogX2Rpc3BhdGNoXG4gICAgICB9KTtcbiAgICB9O1xuICB9O1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWR1eC9saWIvYXBwbHlNaWRkbGV3YXJlLmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gY29tcG9zZTtcbi8qKlxuICogQ29tcG9zZXMgc2luZ2xlLWFyZ3VtZW50IGZ1bmN0aW9ucyBmcm9tIHJpZ2h0IHRvIGxlZnQuIFRoZSByaWdodG1vc3RcbiAqIGZ1bmN0aW9uIGNhbiB0YWtlIG11bHRpcGxlIGFyZ3VtZW50cyBhcyBpdCBwcm92aWRlcyB0aGUgc2lnbmF0dXJlIGZvclxuICogdGhlIHJlc3VsdGluZyBjb21wb3NpdGUgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHsuLi5GdW5jdGlvbn0gZnVuY3MgVGhlIGZ1bmN0aW9ucyB0byBjb21wb3NlLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIGZ1bmN0aW9uIG9idGFpbmVkIGJ5IGNvbXBvc2luZyB0aGUgYXJndW1lbnQgZnVuY3Rpb25zXG4gKiBmcm9tIHJpZ2h0IHRvIGxlZnQuIEZvciBleGFtcGxlLCBjb21wb3NlKGYsIGcsIGgpIGlzIGlkZW50aWNhbCB0byBkb2luZ1xuICogKC4uLmFyZ3MpID0+IGYoZyhoKC4uLmFyZ3MpKSkuXG4gKi9cblxuZnVuY3Rpb24gY29tcG9zZSgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGZ1bmNzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgZnVuY3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBpZiAoZnVuY3MubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgIHJldHVybiBhcmc7XG4gICAgfTtcbiAgfVxuXG4gIGlmIChmdW5jcy5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gZnVuY3NbMF07XG4gIH1cblxuICB2YXIgbGFzdCA9IGZ1bmNzW2Z1bmNzLmxlbmd0aCAtIDFdO1xuICB2YXIgcmVzdCA9IGZ1bmNzLnNsaWNlKDAsIC0xKTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gcmVzdC5yZWR1Y2VSaWdodChmdW5jdGlvbiAoY29tcG9zZWQsIGYpIHtcbiAgICAgIHJldHVybiBmKGNvbXBvc2VkKTtcbiAgICB9LCBsYXN0LmFwcGx5KHVuZGVmaW5lZCwgYXJndW1lbnRzKSk7XG4gIH07XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlZHV4L2xpYi9jb21wb3NlLmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGV4dGVuZFxuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG5mdW5jdGlvbiBleHRlbmQoKSB7XG4gICAgdmFyIHRhcmdldCA9IHt9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldXG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldFxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3h0ZW5kL2ltbXV0YWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvaW5mZXJuby5ub2RlJyk7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gbW9kdWxlLmV4cG9ydHM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2luZmVybm8vaW5mZXJuby5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyohXG4gKiBpbmZlcm5vIHYxLjEuMVxuICogKGMpIDIwMTcgRG9taW5pYyBHYW5uYXdheVxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuXHR0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBmYWN0b3J5KGV4cG9ydHMpIDpcblx0dHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnZXhwb3J0cyddLCBmYWN0b3J5KSA6XG5cdChmYWN0b3J5KChnbG9iYWwuSW5mZXJubyA9IGdsb2JhbC5JbmZlcm5vIHx8IHt9KSkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKGV4cG9ydHMpIHsgJ3VzZSBzdHJpY3QnO1xuXG52YXIgTk9fT1AgPSAnJE5PX09QJztcbnZhciBFUlJPUl9NU0cgPSAnYSBydW50aW1lIGVycm9yIG9jY3VyZWQhIFVzZSBJbmZlcm5vIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50IHRvIGZpbmQgdGhlIGVycm9yLic7XG52YXIgaXNCcm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50O1xuXG4vLyB0aGlzIGlzIE1VQ0ggZmFzdGVyIHRoYW4gLmNvbnN0cnVjdG9yID09PSBBcnJheSBhbmQgaW5zdGFuY2VvZiBBcnJheVxuLy8gaW4gTm9kZSA3IGFuZCB0aGUgbGF0ZXIgdmVyc2lvbnMgb2YgVjgsIHNsb3dlciBpbiBvbGRlciB2ZXJzaW9ucyB0aG91Z2hcbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcbmZ1bmN0aW9uIGlzU3RhdGVmdWxDb21wb25lbnQobykge1xuICAgIHJldHVybiAhaXNVbmRlZmluZWQoby5wcm90b3R5cGUpICYmICFpc1VuZGVmaW5lZChvLnByb3RvdHlwZS5yZW5kZXIpO1xufVxuZnVuY3Rpb24gaXNTdHJpbmdPck51bWJlcihvYmopIHtcbiAgICB2YXIgdHlwZSA9IHR5cGVvZiBvYmo7XG4gICAgcmV0dXJuIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGUgPT09ICdudW1iZXInO1xufVxuZnVuY3Rpb24gaXNOdWxsT3JVbmRlZihvYmopIHtcbiAgICByZXR1cm4gaXNVbmRlZmluZWQob2JqKSB8fCBpc051bGwob2JqKTtcbn1cbmZ1bmN0aW9uIGlzSW52YWxpZChvYmopIHtcbiAgICByZXR1cm4gaXNOdWxsKG9iaikgfHwgb2JqID09PSBmYWxzZSB8fCBpc1RydWUob2JqKSB8fCBpc1VuZGVmaW5lZChvYmopO1xufVxuZnVuY3Rpb24gaXNGdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJztcbn1cbmZ1bmN0aW9uIGlzQXR0ckFuRXZlbnQoYXR0cikge1xuICAgIHJldHVybiBhdHRyWzBdID09PSAnbycgJiYgYXR0clsxXSA9PT0gJ24nICYmIGF0dHIubGVuZ3RoID4gMztcbn1cbmZ1bmN0aW9uIGlzU3RyaW5nKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnc3RyaW5nJztcbn1cbmZ1bmN0aW9uIGlzTnVtYmVyKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnbnVtYmVyJztcbn1cbmZ1bmN0aW9uIGlzTnVsbChvYmopIHtcbiAgICByZXR1cm4gb2JqID09PSBudWxsO1xufVxuZnVuY3Rpb24gaXNUcnVlKG9iaikge1xuICAgIHJldHVybiBvYmogPT09IHRydWU7XG59XG5mdW5jdGlvbiBpc1VuZGVmaW5lZChvYmopIHtcbiAgICByZXR1cm4gb2JqID09PSB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBpc09iamVjdChvKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvID09PSAnb2JqZWN0Jztcbn1cbmZ1bmN0aW9uIHRocm93RXJyb3IobWVzc2FnZSkge1xuICAgIGlmICghbWVzc2FnZSkge1xuICAgICAgICBtZXNzYWdlID0gRVJST1JfTVNHO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoKFwiSW5mZXJubyBFcnJvcjogXCIgKyBtZXNzYWdlKSk7XG59XG5mdW5jdGlvbiB3YXJuaW5nKGNvbmRpdGlvbiwgbWVzc2FnZSkge1xuICAgIGlmICghY29uZGl0aW9uKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxufVxudmFyIEVNUFRZX09CSiA9IHt9O1xuXG5mdW5jdGlvbiBhcHBseUtleShrZXksIHZOb2RlKSB7XG4gICAgdk5vZGUua2V5ID0ga2V5O1xuICAgIHJldHVybiB2Tm9kZTtcbn1cbmZ1bmN0aW9uIGFwcGx5S2V5SWZNaXNzaW5nKGtleSwgdk5vZGUpIHtcbiAgICBpZiAoaXNOdW1iZXIoa2V5KSkge1xuICAgICAgICBrZXkgPSBcIi5cIiArIGtleTtcbiAgICB9XG4gICAgaWYgKGlzTnVsbCh2Tm9kZS5rZXkpIHx8IHZOb2RlLmtleVswXSA9PT0gJy4nKSB7XG4gICAgICAgIHJldHVybiBhcHBseUtleShrZXksIHZOb2RlKTtcbiAgICB9XG4gICAgcmV0dXJuIHZOb2RlO1xufVxuZnVuY3Rpb24gYXBwbHlLZXlQcmVmaXgoa2V5LCB2Tm9kZSkge1xuICAgIHZOb2RlLmtleSA9IGtleSArIHZOb2RlLmtleTtcbiAgICByZXR1cm4gdk5vZGU7XG59XG5mdW5jdGlvbiBfbm9ybWFsaXplVk5vZGVzKG5vZGVzLCByZXN1bHQsIGluZGV4LCBjdXJyZW50S2V5KSB7XG4gICAgZm9yICg7IGluZGV4IDwgbm9kZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIHZhciBuID0gbm9kZXNbaW5kZXhdO1xuICAgICAgICB2YXIga2V5ID0gY3VycmVudEtleSArIFwiLlwiICsgaW5kZXg7XG4gICAgICAgIGlmICghaXNJbnZhbGlkKG4pKSB7XG4gICAgICAgICAgICBpZiAoaXNBcnJheShuKSkge1xuICAgICAgICAgICAgICAgIF9ub3JtYWxpemVWTm9kZXMobiwgcmVzdWx0LCAwLCBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzU3RyaW5nT3JOdW1iZXIobikpIHtcbiAgICAgICAgICAgICAgICAgICAgbiA9IGNyZWF0ZVRleHRWTm9kZShuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaXNWTm9kZShuKSAmJiBuLmRvbSB8fCAobi5rZXkgJiYgbi5rZXlbMF0gPT09ICcuJykpIHtcbiAgICAgICAgICAgICAgICAgICAgbiA9IGNsb25lVk5vZGUobik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpc051bGwobi5rZXkpIHx8IG4ua2V5WzBdID09PSAnLicpIHtcbiAgICAgICAgICAgICAgICAgICAgbiA9IGFwcGx5S2V5KGtleSwgbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuID0gYXBwbHlLZXlQcmVmaXgoY3VycmVudEtleSwgbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKG4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gbm9ybWFsaXplVk5vZGVzKG5vZGVzKSB7XG4gICAgdmFyIG5ld05vZGVzO1xuICAgIC8vIHdlIGFzc2lnbiAkIHdoaWNoIGJhc2ljYWxseSBtZWFucyB3ZSd2ZSBmbGFnZ2VkIHRoaXMgYXJyYXkgZm9yIGZ1dHVyZSBub3RlXG4gICAgLy8gaWYgaXQgY29tZXMgYmFjayBhZ2Fpbiwgd2UgbmVlZCB0byBjbG9uZSBpdCwgYXMgcGVvcGxlIGFyZSB1c2luZyBpdFxuICAgIC8vIGluIGFuIGltbXV0YWJsZSB3YXlcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZVxuICAgIGlmIChub2Rlc1snJCddKSB7XG4gICAgICAgIG5vZGVzID0gbm9kZXMuc2xpY2UoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIG5vZGVzWyckJ10gPSB0cnVlO1xuICAgIH1cbiAgICAvLyB0c2xpbnQ6ZW5hYmxlXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgbiA9IG5vZGVzW2ldO1xuICAgICAgICBpZiAoaXNJbnZhbGlkKG4pIHx8IGlzQXJyYXkobikpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSAobmV3Tm9kZXMgfHwgbm9kZXMpLnNsaWNlKDAsIGkpO1xuICAgICAgICAgICAgX25vcm1hbGl6ZVZOb2Rlcyhub2RlcywgcmVzdWx0LCBpLCBcIlwiKTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNTdHJpbmdPck51bWJlcihuKSkge1xuICAgICAgICAgICAgaWYgKCFuZXdOb2Rlcykge1xuICAgICAgICAgICAgICAgIG5ld05vZGVzID0gbm9kZXMuc2xpY2UoMCwgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdOb2Rlcy5wdXNoKGFwcGx5S2V5SWZNaXNzaW5nKGksIGNyZWF0ZVRleHRWTm9kZShuKSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKChpc1ZOb2RlKG4pICYmIG4uZG9tKSB8fCAoaXNOdWxsKG4ua2V5KSAmJiAhKG4uZmxhZ3MgJiA2NCAvKiBIYXNOb25LZXllZENoaWxkcmVuICovKSkpIHtcbiAgICAgICAgICAgIGlmICghbmV3Tm9kZXMpIHtcbiAgICAgICAgICAgICAgICBuZXdOb2RlcyA9IG5vZGVzLnNsaWNlKDAsIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3Tm9kZXMucHVzaChhcHBseUtleUlmTWlzc2luZyhpLCBjbG9uZVZOb2RlKG4pKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobmV3Tm9kZXMpIHtcbiAgICAgICAgICAgIG5ld05vZGVzLnB1c2goYXBwbHlLZXlJZk1pc3NpbmcoaSwgY2xvbmVWTm9kZShuKSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXdOb2RlcyB8fCBub2Rlcztcbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZUNoaWxkcmVuKGNoaWxkcmVuKSB7XG4gICAgaWYgKGlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgIHJldHVybiBub3JtYWxpemVWTm9kZXMoY2hpbGRyZW4pO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc1ZOb2RlKGNoaWxkcmVuKSAmJiBjaGlsZHJlbi5kb20pIHtcbiAgICAgICAgcmV0dXJuIGNsb25lVk5vZGUoY2hpbGRyZW4pO1xuICAgIH1cbiAgICByZXR1cm4gY2hpbGRyZW47XG59XG5mdW5jdGlvbiBub3JtYWxpemVQcm9wcyh2Tm9kZSwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gICAgaWYgKCEodk5vZGUuZmxhZ3MgJiAyOCAvKiBDb21wb25lbnQgKi8pICYmIGlzTnVsbE9yVW5kZWYoY2hpbGRyZW4pICYmICFpc051bGxPclVuZGVmKHByb3BzLmNoaWxkcmVuKSkge1xuICAgICAgICB2Tm9kZS5jaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuO1xuICAgIH1cbiAgICBpZiAocHJvcHMucmVmKSB7XG4gICAgICAgIHZOb2RlLnJlZiA9IHByb3BzLnJlZjtcbiAgICAgICAgZGVsZXRlIHByb3BzLnJlZjtcbiAgICB9XG4gICAgaWYgKHByb3BzLmV2ZW50cykge1xuICAgICAgICB2Tm9kZS5ldmVudHMgPSBwcm9wcy5ldmVudHM7XG4gICAgfVxuICAgIGlmICghaXNOdWxsT3JVbmRlZihwcm9wcy5rZXkpKSB7XG4gICAgICAgIHZOb2RlLmtleSA9IHByb3BzLmtleTtcbiAgICAgICAgZGVsZXRlIHByb3BzLmtleTtcbiAgICB9XG59XG5mdW5jdGlvbiBjb3B5UHJvcHNUbyhjb3B5RnJvbSwgY29weVRvKSB7XG4gICAgZm9yICh2YXIgcHJvcCBpbiBjb3B5RnJvbSkge1xuICAgICAgICBpZiAoaXNVbmRlZmluZWQoY29weVRvW3Byb3BdKSkge1xuICAgICAgICAgICAgY29weVRvW3Byb3BdID0gY29weUZyb21bcHJvcF07XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBub3JtYWxpemVFbGVtZW50KHR5cGUsIHZOb2RlKSB7XG4gICAgaWYgKHR5cGUgPT09ICdzdmcnKSB7XG4gICAgICAgIHZOb2RlLmZsYWdzID0gMTI4IC8qIFN2Z0VsZW1lbnQgKi87XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdpbnB1dCcpIHtcbiAgICAgICAgdk5vZGUuZmxhZ3MgPSA1MTIgLyogSW5wdXRFbGVtZW50ICovO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnc2VsZWN0Jykge1xuICAgICAgICB2Tm9kZS5mbGFncyA9IDIwNDggLyogU2VsZWN0RWxlbWVudCAqLztcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3RleHRhcmVhJykge1xuICAgICAgICB2Tm9kZS5mbGFncyA9IDEwMjQgLyogVGV4dGFyZWFFbGVtZW50ICovO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnbWVkaWEnKSB7XG4gICAgICAgIHZOb2RlLmZsYWdzID0gMjU2IC8qIE1lZGlhRWxlbWVudCAqLztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZOb2RlLmZsYWdzID0gMiAvKiBIdG1sRWxlbWVudCAqLztcbiAgICB9XG59XG5mdW5jdGlvbiBub3JtYWxpemUodk5vZGUpIHtcbiAgICB2YXIgcHJvcHMgPSB2Tm9kZS5wcm9wcztcbiAgICB2YXIgaGFzUHJvcHMgPSAhaXNOdWxsKHByb3BzKTtcbiAgICB2YXIgdHlwZSA9IHZOb2RlLnR5cGU7XG4gICAgdmFyIGNoaWxkcmVuID0gdk5vZGUuY2hpbGRyZW47XG4gICAgLy8gY29udmVydCBhIHdyb25nbHkgY3JlYXRlZCB0eXBlIGJhY2sgdG8gZWxlbWVudFxuICAgIGlmIChpc1N0cmluZyh0eXBlKSAmJiAodk5vZGUuZmxhZ3MgJiAyOCAvKiBDb21wb25lbnQgKi8pKSB7XG4gICAgICAgIG5vcm1hbGl6ZUVsZW1lbnQodHlwZSwgdk5vZGUpO1xuICAgICAgICBpZiAoaGFzUHJvcHMgJiYgcHJvcHMuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIHZOb2RlLmNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47XG4gICAgICAgICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChoYXNQcm9wcykge1xuICAgICAgICBub3JtYWxpemVQcm9wcyh2Tm9kZSwgcHJvcHMsIGNoaWxkcmVuKTtcbiAgICB9XG4gICAgaWYgKCFpc0ludmFsaWQoY2hpbGRyZW4pKSB7XG4gICAgICAgIHZOb2RlLmNoaWxkcmVuID0gbm9ybWFsaXplQ2hpbGRyZW4oY2hpbGRyZW4pO1xuICAgIH1cbiAgICBpZiAoaGFzUHJvcHMgJiYgIWlzSW52YWxpZChwcm9wcy5jaGlsZHJlbikpIHtcbiAgICAgICAgcHJvcHMuY2hpbGRyZW4gPSBub3JtYWxpemVDaGlsZHJlbihwcm9wcy5jaGlsZHJlbik7XG4gICAgfVxuICAgIGlmIChcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAvLyBUaGlzIGNvZGUgd2lsbCBiZSBzdHJpcHBlZCBvdXQgZnJvbSBwcm9kdWN0aW9uIENPREVcbiAgICAgICAgLy8gSXQgd2lsbCBoZWxwIHVzZXJzIHRvIHRyYWNrIGVycm9ycyBpbiB0aGVpciBhcHBsaWNhdGlvbnMuXG4gICAgICAgIGZ1bmN0aW9uIHZlcmlmeUtleXModk5vZGVzKSB7XG4gICAgICAgICAgICB2YXIga2V5VmFsdWVzID0gdk5vZGVzLm1hcChmdW5jdGlvbiAodm5vZGUpIHsgcmV0dXJuIHZub2RlLmtleTsgfSk7XG4gICAgICAgICAgICBrZXlWYWx1ZXMuc29tZShmdW5jdGlvbiAoaXRlbSwgaWR4KSB7XG4gICAgICAgICAgICAgICAgdmFyIGhhc0R1cGxpY2F0ZSA9IGtleVZhbHVlcy5pbmRleE9mKGl0ZW0pICE9PSBpZHg7XG4gICAgICAgICAgICAgICAgd2FybmluZyghaGFzRHVwbGljYXRlLCAnSW5mcmVubyBub3JtYWxpc2F0aW9uKC4uLik6IEVuY291bnRlcmVkIHR3byBjaGlsZHJlbiB3aXRoIHNhbWUga2V5LCBhbGwga2V5cyBtdXN0IGJlIHVuaXF1ZSB3aXRoaW4gaXRzIHNpYmxpbmdzLiBEdXBsaWNhdGVkIGtleSBpczonICsgaXRlbSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGhhc0R1cGxpY2F0ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2Tm9kZS5jaGlsZHJlbiAmJiBBcnJheS5pc0FycmF5KHZOb2RlLmNoaWxkcmVuKSkge1xuICAgICAgICAgICAgdmVyaWZ5S2V5cyh2Tm9kZS5jaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbnZhciBvcHRpb25zID0ge1xuICAgIHJlY3ljbGluZ0VuYWJsZWQ6IHRydWUsXG4gICAgZmluZERPTU5vZGVFbmFibGVkOiBmYWxzZSxcbiAgICByb290czogbnVsbCxcbiAgICBjcmVhdGVWTm9kZTogbnVsbCxcbiAgICBiZWZvcmVSZW5kZXI6IG51bGwsXG4gICAgYWZ0ZXJSZW5kZXI6IG51bGwsXG4gICAgYWZ0ZXJNb3VudDogbnVsbCxcbiAgICBhZnRlclVwZGF0ZTogbnVsbCxcbiAgICBiZWZvcmVVbm1vdW50OiBudWxsXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVWTm9kZShmbGFncywgdHlwZSwgcHJvcHMsIGNoaWxkcmVuLCBldmVudHMsIGtleSwgcmVmLCBub05vcm1hbGlzZSkge1xuICAgIGlmIChmbGFncyAmIDE2IC8qIENvbXBvbmVudFVua25vd24gKi8pIHtcbiAgICAgICAgZmxhZ3MgPSBpc1N0YXRlZnVsQ29tcG9uZW50KHR5cGUpID8gNCAvKiBDb21wb25lbnRDbGFzcyAqLyA6IDggLyogQ29tcG9uZW50RnVuY3Rpb24gKi87XG4gICAgfVxuICAgIHZhciB2Tm9kZSA9IHtcbiAgICAgICAgY2hpbGRyZW46IGlzVW5kZWZpbmVkKGNoaWxkcmVuKSA/IG51bGwgOiBjaGlsZHJlbixcbiAgICAgICAgZG9tOiBudWxsLFxuICAgICAgICBldmVudHM6IGV2ZW50cyB8fCBudWxsLFxuICAgICAgICBmbGFnczogZmxhZ3MsXG4gICAgICAgIGtleTogaXNVbmRlZmluZWQoa2V5KSA/IG51bGwgOiBrZXksXG4gICAgICAgIHByb3BzOiBwcm9wcyB8fCBudWxsLFxuICAgICAgICByZWY6IHJlZiB8fCBudWxsLFxuICAgICAgICB0eXBlOiB0eXBlXG4gICAgfTtcbiAgICBpZiAoIW5vTm9ybWFsaXNlKSB7XG4gICAgICAgIG5vcm1hbGl6ZSh2Tm9kZSk7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmNyZWF0ZVZOb2RlKSB7XG4gICAgICAgIG9wdGlvbnMuY3JlYXRlVk5vZGUodk5vZGUpO1xuICAgIH1cbiAgICByZXR1cm4gdk5vZGU7XG59XG5mdW5jdGlvbiBjbG9uZVZOb2RlKHZOb2RlVG9DbG9uZSwgcHJvcHMpIHtcbiAgICB2YXIgX2NoaWxkcmVuID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGggLSAyO1xuICAgIHdoaWxlICggbGVuLS0gPiAwICkgX2NoaWxkcmVuWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuICsgMiBdO1xuXG4gICAgdmFyIGNoaWxkcmVuID0gX2NoaWxkcmVuO1xuICAgIGlmIChfY2hpbGRyZW4ubGVuZ3RoID4gMCAmJiAhaXNOdWxsKF9jaGlsZHJlblswXSkpIHtcbiAgICAgICAgaWYgKCFwcm9wcykge1xuICAgICAgICAgICAgcHJvcHMgPSB7fTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoX2NoaWxkcmVuLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgY2hpbGRyZW4gPSBfY2hpbGRyZW5bMF07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzVW5kZWZpbmVkKHByb3BzLmNoaWxkcmVuKSkge1xuICAgICAgICAgICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChpc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgICAgIGlmIChpc0FycmF5KHByb3BzLmNoaWxkcmVuKSkge1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5jaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLmNvbmNhdChjaGlsZHJlbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5jaGlsZHJlbiA9IFtwcm9wcy5jaGlsZHJlbl0uY29uY2F0KGNoaWxkcmVuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNBcnJheShwcm9wcy5jaGlsZHJlbikpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuY2hpbGRyZW4ucHVzaChjaGlsZHJlbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5jaGlsZHJlbiA9IFtwcm9wcy5jaGlsZHJlbl07XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmNoaWxkcmVuLnB1c2goY2hpbGRyZW4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGlsZHJlbiA9IG51bGw7XG4gICAgdmFyIG5ld1ZOb2RlO1xuICAgIGlmIChpc0FycmF5KHZOb2RlVG9DbG9uZSkpIHtcbiAgICAgICAgdmFyIHRtcEFycmF5ID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdk5vZGVUb0Nsb25lLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0bXBBcnJheS5wdXNoKGNsb25lVk5vZGUodk5vZGVUb0Nsb25lW2ldKSk7XG4gICAgICAgIH1cbiAgICAgICAgbmV3Vk5vZGUgPSB0bXBBcnJheTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBmbGFncyA9IHZOb2RlVG9DbG9uZS5mbGFncztcbiAgICAgICAgdmFyIGV2ZW50cyA9IHZOb2RlVG9DbG9uZS5ldmVudHMgfHwgKHByb3BzICYmIHByb3BzLmV2ZW50cykgfHwgbnVsbDtcbiAgICAgICAgdmFyIGtleSA9ICFpc051bGxPclVuZGVmKHZOb2RlVG9DbG9uZS5rZXkpID8gdk5vZGVUb0Nsb25lLmtleSA6IChwcm9wcyA/IHByb3BzLmtleSA6IG51bGwpO1xuICAgICAgICB2YXIgcmVmID0gdk5vZGVUb0Nsb25lLnJlZiB8fCAocHJvcHMgPyBwcm9wcy5yZWYgOiBudWxsKTtcbiAgICAgICAgaWYgKGZsYWdzICYgMjggLyogQ29tcG9uZW50ICovKSB7XG4gICAgICAgICAgICBuZXdWTm9kZSA9IGNyZWF0ZVZOb2RlKGZsYWdzLCB2Tm9kZVRvQ2xvbmUudHlwZSwgT2JqZWN0LmFzc2lnbih7fSwgdk5vZGVUb0Nsb25lLnByb3BzLCBwcm9wcyksIG51bGwsIGV2ZW50cywga2V5LCByZWYsIHRydWUpO1xuICAgICAgICAgICAgdmFyIG5ld1Byb3BzID0gbmV3Vk5vZGUucHJvcHM7XG4gICAgICAgICAgICBpZiAobmV3UHJvcHMpIHtcbiAgICAgICAgICAgICAgICB2YXIgbmV3Q2hpbGRyZW4gPSBuZXdQcm9wcy5jaGlsZHJlbjtcbiAgICAgICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIGFsc28gY2xvbmUgY29tcG9uZW50IGNoaWxkcmVuIHRoYXQgYXJlIGluIHByb3BzXG4gICAgICAgICAgICAgICAgLy8gYXMgdGhlIGNoaWxkcmVuIG1heSBhbHNvIGhhdmUgYmVlbiBob2lzdGVkXG4gICAgICAgICAgICAgICAgaWYgKG5ld0NoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0FycmF5KG5ld0NoaWxkcmVuKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSQxID0gMDsgaSQxIDwgbmV3Q2hpbGRyZW4ubGVuZ3RoOyBpJDErKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjaGlsZCA9IG5ld0NoaWxkcmVuW2kkMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc0ludmFsaWQoY2hpbGQpICYmIGlzVk5vZGUoY2hpbGQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Byb3BzLmNoaWxkcmVuW2kkMV0gPSBjbG9uZVZOb2RlKGNoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoaXNWTm9kZShuZXdDaGlsZHJlbikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Byb3BzLmNoaWxkcmVuID0gY2xvbmVWTm9kZShuZXdDaGlsZHJlbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdWTm9kZS5jaGlsZHJlbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZmxhZ3MgJiAzOTcwIC8qIEVsZW1lbnQgKi8pIHtcbiAgICAgICAgICAgIGNoaWxkcmVuID0gKHByb3BzICYmIHByb3BzLmNoaWxkcmVuKSB8fCB2Tm9kZVRvQ2xvbmUuY2hpbGRyZW47XG4gICAgICAgICAgICBuZXdWTm9kZSA9IGNyZWF0ZVZOb2RlKGZsYWdzLCB2Tm9kZVRvQ2xvbmUudHlwZSwgT2JqZWN0LmFzc2lnbih7fSwgdk5vZGVUb0Nsb25lLnByb3BzLCBwcm9wcyksIGNoaWxkcmVuLCBldmVudHMsIGtleSwgcmVmLCAhY2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGZsYWdzICYgMSAvKiBUZXh0ICovKSB7XG4gICAgICAgICAgICBuZXdWTm9kZSA9IGNyZWF0ZVRleHRWTm9kZSh2Tm9kZVRvQ2xvbmUuY2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXdWTm9kZTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVZvaWRWTm9kZSgpIHtcbiAgICByZXR1cm4gY3JlYXRlVk5vZGUoNDA5NiAvKiBWb2lkICovKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVRleHRWTm9kZSh0ZXh0KSB7XG4gICAgcmV0dXJuIGNyZWF0ZVZOb2RlKDEgLyogVGV4dCAqLywgbnVsbCwgbnVsbCwgdGV4dCwgbnVsbCwgbnVsbCwgbnVsbCwgdHJ1ZSk7XG59XG5mdW5jdGlvbiBpc1ZOb2RlKG8pIHtcbiAgICByZXR1cm4gISFvLmZsYWdzO1xufVxuXG52YXIgTGlmZWN5Y2xlID0gZnVuY3Rpb24gTGlmZWN5Y2xlKCkge1xuICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gICAgdGhpcy5mYXN0VW5tb3VudCA9IHRydWU7XG59O1xuTGlmZWN5Y2xlLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uIGFkZExpc3RlbmVyIChjYWxsYmFjaykge1xuICAgIHRoaXMubGlzdGVuZXJzLnB1c2goY2FsbGJhY2spO1xufTtcbkxpZmVjeWNsZS5wcm90b3R5cGUudHJpZ2dlciA9IGZ1bmN0aW9uIHRyaWdnZXIgKCkge1xuICAgICAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5saXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcyQxLmxpc3RlbmVyc1tpXSgpO1xuICAgIH1cbn07XG5cbmZ1bmN0aW9uIGNvbnN0cnVjdERlZmF1bHRzKHN0cmluZywgb2JqZWN0LCB2YWx1ZSkge1xuICAgIC8qIGVzbGludCBuby1yZXR1cm4tYXNzaWduOiAwICovXG4gICAgc3RyaW5nLnNwbGl0KCcsJykuZm9yRWFjaChmdW5jdGlvbiAoaSkgeyByZXR1cm4gb2JqZWN0W2ldID0gdmFsdWU7IH0pO1xufVxudmFyIHhsaW5rTlMgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc7XG52YXIgeG1sTlMgPSAnaHR0cDovL3d3dy53My5vcmcvWE1MLzE5OTgvbmFtZXNwYWNlJztcbnZhciBzdmdOUyA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc7XG52YXIgc3RyaWN0UHJvcHMgPSB7fTtcbnZhciBib29sZWFuUHJvcHMgPSB7fTtcbnZhciBuYW1lc3BhY2VzID0ge307XG52YXIgaXNVbml0bGVzc051bWJlciA9IHt9O1xudmFyIHNraXBQcm9wcyA9IHt9O1xudmFyIGRlaHlwaGVuUHJvcHMgPSB7XG4gICAgaHR0cEVxdWl2OiAnaHR0cC1lcXVpdicsXG4gICAgYWNjZXB0Q2hhcnNldDogJ2FjY2VwdC1jaGFyc2V0J1xufTtcbnZhciBwcm9iYWJseUtlYmFiUHJvcHMgPSAvXihhY2NlbnRIfGFyYWJpY0Z8Y2FwSHxmb250W0ZTVlddfGdseXBoW05PXXxob3JpeltBT118cGFub3NlMXxyZW5kZXJpbmdJfHN0cmlrZXRocm91Z2hbUFRdfHVuZGVybGluZVtQVF18dltBSElNXXx2ZXJ0W0FPXXx4SHxhbGlnbm1lbnRCfGJhc2VsaW5lU3xjbGlwW1BSXXxjb2xvcltJUFJdfGRvbWluYW50QnxlbmFibGVCfGZpbGxbT1JdfGZsb29kW0NPRl18aW1hZ2VSfGxldHRlclN8bGlnaHRpbmdDfG1hcmtlcltFTVNdfHBvaW50ZXJFfHNoYXBlUnxzdG9wW0NPXXxzdHJva2VbRExNT1ddfHRleHRbQURSXXx1bmljb2RlQnx3b3JkU3x3cml0aW5nTSkuKi87XG5mdW5jdGlvbiBrZWJhYml6ZShzdHIsIHNtYWxsTGV0dGVyLCBsYXJnZUxldHRlcikge1xuICAgIHJldHVybiAoc21hbGxMZXR0ZXIgKyBcIi1cIiArIChsYXJnZUxldHRlci50b0xvd2VyQ2FzZSgpKSk7XG59XG52YXIgZGVsZWdhdGVkUHJvcHMgPSB7fTtcbmNvbnN0cnVjdERlZmF1bHRzKCd4bGluazpocmVmLHhsaW5rOmFyY3JvbGUseGxpbms6YWN0dWF0ZSx4bGluazpyb2xlLHhsaW5rOnRpdGxlZix4bGluazp0eXBlJywgbmFtZXNwYWNlcywgeGxpbmtOUyk7XG5jb25zdHJ1Y3REZWZhdWx0cygneG1sOmJhc2UseG1sOmxhbmcseG1sOnNwYWNlJywgbmFtZXNwYWNlcywgeG1sTlMpO1xuY29uc3RydWN0RGVmYXVsdHMoJ3ZvbHVtZSxkZWZhdWx0VmFsdWUsZGVmYXVsdENoZWNrZWQnLCBzdHJpY3RQcm9wcywgdHJ1ZSk7XG5jb25zdHJ1Y3REZWZhdWx0cygnY2hpbGRyZW4scmVmLGtleSxzZWxlY3RlZCxjaGVja2VkLHZhbHVlLG11bHRpcGxlJywgc2tpcFByb3BzLCB0cnVlKTtcbmNvbnN0cnVjdERlZmF1bHRzKCdvbkNsaWNrLG9uTW91c2VEb3duLG9uTW91c2VVcCxvbk1vdXNlTW92ZSxvblN1Ym1pdCxvbkRibENsaWNrLG9uS2V5RG93bixvbktleVVwLG9uS2V5UHJlc3MnLCBkZWxlZ2F0ZWRQcm9wcywgdHJ1ZSk7XG5jb25zdHJ1Y3REZWZhdWx0cygnbXV0ZWQsc2NvcGVkLGxvb3Asb3BlbixjaGVja2VkLGRlZmF1bHQsY2FwdHVyZSxkaXNhYmxlZCxyZWFkT25seSxyZXF1aXJlZCxhdXRvcGxheSxjb250cm9scyxzZWFtbGVzcyxyZXZlcnNlZCxhbGxvd2Z1bGxzY3JlZW4sbm92YWxpZGF0ZScsIGJvb2xlYW5Qcm9wcywgdHJ1ZSk7XG5jb25zdHJ1Y3REZWZhdWx0cygnYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQsYm9yZGVySW1hZ2VPdXRzZXQsYm9yZGVySW1hZ2VTbGljZSxib3JkZXJJbWFnZVdpZHRoLGJveEZsZXgsYm94RmxleEdyb3VwLGJveE9yZGluYWxHcm91cCxjb2x1bW5Db3VudCxmbGV4LGZsZXhHcm93LGZsZXhQb3NpdGl2ZSxmbGV4U2hyaW5rLGZsZXhOZWdhdGl2ZSxmbGV4T3JkZXIsZ3JpZFJvdyxncmlkQ29sdW1uLGZvbnRXZWlnaHQsbGluZUNsYW1wLGxpbmVIZWlnaHQsb3BhY2l0eSxvcmRlcixvcnBoYW5zLHRhYlNpemUsd2lkb3dzLHpJbmRleCx6b29tLGZpbGxPcGFjaXR5LGZsb29kT3BhY2l0eSxzdG9wT3BhY2l0eSxzdHJva2VEYXNoYXJyYXksc3Ryb2tlRGFzaG9mZnNldCxzdHJva2VNaXRlcmxpbWl0LHN0cm9rZU9wYWNpdHksc3Ryb2tlV2lkdGgsJywgaXNVbml0bGVzc051bWJlciwgdHJ1ZSk7XG5cbnZhciBpc2lPUyA9IGlzQnJvd3NlciAmJiAhIW5hdmlnYXRvci5wbGF0Zm9ybSAmJiAvaVBhZHxpUGhvbmV8aVBvZC8udGVzdChuYXZpZ2F0b3IucGxhdGZvcm0pO1xudmFyIGRlbGVnYXRlZEV2ZW50cyA9IG5ldyBNYXAoKTtcbmZ1bmN0aW9uIGhhbmRsZUV2ZW50KG5hbWUsIGxhc3RFdmVudCwgbmV4dEV2ZW50LCBkb20pIHtcbiAgICB2YXIgZGVsZWdhdGVkUm9vdHMgPSBkZWxlZ2F0ZWRFdmVudHMuZ2V0KG5hbWUpO1xuICAgIGlmIChuZXh0RXZlbnQpIHtcbiAgICAgICAgaWYgKCFkZWxlZ2F0ZWRSb290cykge1xuICAgICAgICAgICAgZGVsZWdhdGVkUm9vdHMgPSB7IGl0ZW1zOiBuZXcgTWFwKCksIGNvdW50OiAwLCBkb2NFdmVudDogbnVsbCB9O1xuICAgICAgICAgICAgdmFyIGRvY0V2ZW50ID0gYXR0YWNoRXZlbnRUb0RvY3VtZW50KG5hbWUsIGRlbGVnYXRlZFJvb3RzKTtcbiAgICAgICAgICAgIGRlbGVnYXRlZFJvb3RzLmRvY0V2ZW50ID0gZG9jRXZlbnQ7XG4gICAgICAgICAgICBkZWxlZ2F0ZWRFdmVudHMuc2V0KG5hbWUsIGRlbGVnYXRlZFJvb3RzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWxhc3RFdmVudCkge1xuICAgICAgICAgICAgZGVsZWdhdGVkUm9vdHMuY291bnQrKztcbiAgICAgICAgICAgIGlmIChpc2lPUyAmJiBuYW1lID09PSAnb25DbGljaycpIHtcbiAgICAgICAgICAgICAgICB0cmFwQ2xpY2tPbk5vbkludGVyYWN0aXZlRWxlbWVudChkb20pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRlbGVnYXRlZFJvb3RzLml0ZW1zLnNldChkb20sIG5leHRFdmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGRlbGVnYXRlZFJvb3RzKSB7XG4gICAgICAgIGlmIChkZWxlZ2F0ZWRSb290cy5pdGVtcy5oYXMoZG9tKSkge1xuICAgICAgICAgICAgZGVsZWdhdGVkUm9vdHMuY291bnQtLTtcbiAgICAgICAgICAgIGRlbGVnYXRlZFJvb3RzLml0ZW1zLmRlbGV0ZShkb20pO1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlZFJvb3RzLmNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihub3JtYWxpemVFdmVudE5hbWUobmFtZSksIGRlbGVnYXRlZFJvb3RzLmRvY0V2ZW50KTtcbiAgICAgICAgICAgICAgICBkZWxlZ2F0ZWRFdmVudHMuZGVsZXRlKG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChldmVudCwgZG9tLCBpdGVtcywgY291bnQsIGV2ZW50RGF0YSkge1xuICAgIHZhciBldmVudHNUb1RyaWdnZXIgPSBpdGVtcy5nZXQoZG9tKTtcbiAgICBpZiAoZXZlbnRzVG9UcmlnZ2VyKSB7XG4gICAgICAgIGNvdW50LS07XG4gICAgICAgIC8vIGxpbmtFdmVudCBvYmplY3RcbiAgICAgICAgZXZlbnREYXRhLmRvbSA9IGRvbTtcbiAgICAgICAgaWYgKGV2ZW50c1RvVHJpZ2dlci5ldmVudCkge1xuICAgICAgICAgICAgZXZlbnRzVG9UcmlnZ2VyLmV2ZW50KGV2ZW50c1RvVHJpZ2dlci5kYXRhLCBldmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBldmVudHNUb1RyaWdnZXIoZXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudERhdGEuc3RvcFByb3BhZ2F0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIHBhcmVudERvbSA9IGRvbS5wYXJlbnROb2RlO1xuICAgIGlmIChjb3VudCA+IDAgJiYgKHBhcmVudERvbSB8fCBwYXJlbnREb20gPT09IGRvY3VtZW50LmJvZHkpKSB7XG4gICAgICAgIGRpc3BhdGNoRXZlbnQoZXZlbnQsIHBhcmVudERvbSwgaXRlbXMsIGNvdW50LCBldmVudERhdGEpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZUV2ZW50TmFtZShuYW1lKSB7XG4gICAgcmV0dXJuIG5hbWUuc3Vic3RyKDIpLnRvTG93ZXJDYXNlKCk7XG59XG5mdW5jdGlvbiBhdHRhY2hFdmVudFRvRG9jdW1lbnQobmFtZSwgZGVsZWdhdGVkUm9vdHMpIHtcbiAgICB2YXIgZG9jRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIGV2ZW50RGF0YSA9IHtcbiAgICAgICAgICAgIHN0b3BQcm9wYWdhdGlvbjogZmFsc2UsXG4gICAgICAgICAgICBkb206IGRvY3VtZW50XG4gICAgICAgIH07XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gZG8gdGhpcyBhcyBzb21lIGJyb3dzZXJzIHJlY3ljbGUgdGhlIHNhbWUgRXZlbnQgYmV0d2VlbiBjYWxsc1xuICAgICAgICAvLyBzbyB3ZSBuZWVkIHRvIG1ha2UgdGhlIHByb3BlcnR5IGNvbmZpZ3VyYWJsZVxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXZlbnQsICdjdXJyZW50VGFyZ2V0Jywge1xuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50RGF0YS5kb207XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBldmVudERhdGEuc3RvcFByb3BhZ2F0aW9uID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGNvdW50ID0gZGVsZWdhdGVkUm9vdHMuY291bnQ7XG4gICAgICAgIGlmIChjb3VudCA+IDApIHtcbiAgICAgICAgICAgIGRpc3BhdGNoRXZlbnQoZXZlbnQsIGV2ZW50LnRhcmdldCwgZGVsZWdhdGVkUm9vdHMuaXRlbXMsIGNvdW50LCBldmVudERhdGEpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG5vcm1hbGl6ZUV2ZW50TmFtZShuYW1lKSwgZG9jRXZlbnQpO1xuICAgIHJldHVybiBkb2NFdmVudDtcbn1cbmZ1bmN0aW9uIGVtcHR5Rm4oKSB7IH1cbmZ1bmN0aW9uIHRyYXBDbGlja09uTm9uSW50ZXJhY3RpdmVFbGVtZW50KGRvbSkge1xuICAgIC8vIE1vYmlsZSBTYWZhcmkgZG9lcyBub3QgZmlyZSBwcm9wZXJseSBidWJibGUgY2xpY2sgZXZlbnRzIG9uXG4gICAgLy8gbm9uLWludGVyYWN0aXZlIGVsZW1lbnRzLCB3aGljaCBtZWFucyBkZWxlZ2F0ZWQgY2xpY2sgbGlzdGVuZXJzIGRvIG5vdFxuICAgIC8vIGZpcmUuIFRoZSB3b3JrYXJvdW5kIGZvciB0aGlzIGJ1ZyBpbnZvbHZlcyBhdHRhY2hpbmcgYW4gZW1wdHkgY2xpY2tcbiAgICAvLyBsaXN0ZW5lciBvbiB0aGUgdGFyZ2V0IG5vZGUuXG4gICAgLy8gaHR0cDovL3d3dy5xdWlya3Ntb2RlLm9yZy9ibG9nL2FyY2hpdmVzLzIwMTAvMDkvY2xpY2tfZXZlbnRfZGVsLmh0bWxcbiAgICAvLyBKdXN0IHNldCBpdCB1c2luZyB0aGUgb25jbGljayBwcm9wZXJ0eSBzbyB0aGF0IHdlIGRvbid0IGhhdmUgdG8gbWFuYWdlIGFueVxuICAgIC8vIGJvb2trZWVwaW5nIGZvciBpdC4gTm90IHN1cmUgaWYgd2UgbmVlZCB0byBjbGVhciBpdCB3aGVuIHRoZSBsaXN0ZW5lciBpc1xuICAgIC8vIHJlbW92ZWQuXG4gICAgLy8gVE9ETzogT25seSBkbyB0aGlzIGZvciB0aGUgcmVsZXZhbnQgU2FmYXJpcyBtYXliZT9cbiAgICBkb20ub25jbGljayA9IGVtcHR5Rm47XG59XG5cbmZ1bmN0aW9uIGlzQ2hlY2tlZFR5cGUodHlwZSkge1xuICAgIHJldHVybiB0eXBlID09PSAnY2hlY2tib3gnIHx8IHR5cGUgPT09ICdyYWRpbyc7XG59XG5mdW5jdGlvbiBpc0NvbnRyb2xsZWQocHJvcHMpIHtcbiAgICB2YXIgdXNlc0NoZWNrZWQgPSBpc0NoZWNrZWRUeXBlKHByb3BzLnR5cGUpO1xuICAgIHJldHVybiB1c2VzQ2hlY2tlZCA/ICFpc051bGxPclVuZGVmKHByb3BzLmNoZWNrZWQpIDogIWlzTnVsbE9yVW5kZWYocHJvcHMudmFsdWUpO1xufVxuZnVuY3Rpb24gb25UZXh0SW5wdXRDaGFuZ2UoZSkge1xuICAgIHZhciB2Tm9kZSA9IHRoaXMudk5vZGU7XG4gICAgdmFyIGV2ZW50cyA9IHZOb2RlLmV2ZW50cyB8fCBFTVBUWV9PQko7XG4gICAgdmFyIGRvbSA9IHZOb2RlLmRvbTtcbiAgICBpZiAoZXZlbnRzLm9uSW5wdXQpIHtcbiAgICAgICAgdmFyIGV2ZW50ID0gZXZlbnRzLm9uSW5wdXQ7XG4gICAgICAgIGlmIChldmVudC5ldmVudCkge1xuICAgICAgICAgICAgZXZlbnQuZXZlbnQoZXZlbnQuZGF0YSwgZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBldmVudChlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChldmVudHMub25pbnB1dCkge1xuICAgICAgICBldmVudHMub25pbnB1dChlKTtcbiAgICB9XG4gICAgLy8gdGhlIHVzZXIgbWF5IGhhdmUgdXBkYXRlZCB0aGUgdk5vZGUgZnJvbSB0aGUgYWJvdmUgb25JbnB1dCBldmVudHNcbiAgICAvLyBzbyB3ZSBuZWVkIHRvIGdldCBpdCBmcm9tIHRoZSBjb250ZXh0IG9mIGB0aGlzYCBhZ2FpblxuICAgIGFwcGx5VmFsdWUodGhpcy52Tm9kZSwgZG9tKTtcbn1cbmZ1bmN0aW9uIHdyYXBwZWRPbkNoYW5nZShlKSB7XG4gICAgdmFyIHZOb2RlID0gdGhpcy52Tm9kZTtcbiAgICB2YXIgZXZlbnRzID0gdk5vZGUuZXZlbnRzIHx8IEVNUFRZX09CSjtcbiAgICB2YXIgZXZlbnQgPSBldmVudHMub25DaGFuZ2U7XG4gICAgaWYgKGV2ZW50LmV2ZW50KSB7XG4gICAgICAgIGV2ZW50LmV2ZW50KGV2ZW50LmRhdGEsIGUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZXZlbnQoZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gb25DaGVja2JveENoYW5nZShlKSB7XG4gICAgdmFyIHZOb2RlID0gdGhpcy52Tm9kZTtcbiAgICB2YXIgZXZlbnRzID0gdk5vZGUuZXZlbnRzIHx8IEVNUFRZX09CSjtcbiAgICB2YXIgZG9tID0gdk5vZGUuZG9tO1xuICAgIGlmIChldmVudHMub25DbGljaykge1xuICAgICAgICB2YXIgZXZlbnQgPSBldmVudHMub25DbGljaztcbiAgICAgICAgaWYgKGV2ZW50LmV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5ldmVudChldmVudC5kYXRhLCBlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGV2ZW50KGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50cy5vbmNsaWNrKSB7XG4gICAgICAgIGV2ZW50cy5vbmNsaWNrKGUpO1xuICAgIH1cbiAgICAvLyB0aGUgdXNlciBtYXkgaGF2ZSB1cGRhdGVkIHRoZSB2Tm9kZSBmcm9tIHRoZSBhYm92ZSBvbkNsaWNrIGV2ZW50c1xuICAgIC8vIHNvIHdlIG5lZWQgdG8gZ2V0IGl0IGZyb20gdGhlIGNvbnRleHQgb2YgYHRoaXNgIGFnYWluXG4gICAgYXBwbHlWYWx1ZSh0aGlzLnZOb2RlLCBkb20pO1xufVxuZnVuY3Rpb24gaGFuZGxlQXNzb2NpYXRlZFJhZGlvSW5wdXRzKG5hbWUpIHtcbiAgICB2YXIgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgoXCJpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdW25hbWU9XFxcIlwiICsgbmFtZSArIFwiXFxcIl1cIikpO1xuICAgIFtdLmZvckVhY2guY2FsbChpbnB1dHMsIGZ1bmN0aW9uIChkb20pIHtcbiAgICAgICAgdmFyIGlucHV0V3JhcHBlciA9IHdyYXBwZXJzLmdldChkb20pO1xuICAgICAgICBpZiAoaW5wdXRXcmFwcGVyKSB7XG4gICAgICAgICAgICB2YXIgcHJvcHMgPSBpbnB1dFdyYXBwZXIudk5vZGUucHJvcHM7XG4gICAgICAgICAgICBpZiAocHJvcHMpIHtcbiAgICAgICAgICAgICAgICBkb20uY2hlY2tlZCA9IGlucHV0V3JhcHBlci52Tm9kZS5wcm9wcy5jaGVja2VkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5mdW5jdGlvbiBwcm9jZXNzSW5wdXQodk5vZGUsIGRvbSkge1xuICAgIHZhciBwcm9wcyA9IHZOb2RlLnByb3BzIHx8IEVNUFRZX09CSjtcbiAgICBhcHBseVZhbHVlKHZOb2RlLCBkb20pO1xuICAgIGlmIChpc0NvbnRyb2xsZWQocHJvcHMpKSB7XG4gICAgICAgIHZhciBpbnB1dFdyYXBwZXIgPSB3cmFwcGVycy5nZXQoZG9tKTtcbiAgICAgICAgaWYgKCFpbnB1dFdyYXBwZXIpIHtcbiAgICAgICAgICAgIGlucHV0V3JhcHBlciA9IHtcbiAgICAgICAgICAgICAgICB2Tm9kZTogdk5vZGVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoaXNDaGVja2VkVHlwZShwcm9wcy50eXBlKSkge1xuICAgICAgICAgICAgICAgIGRvbS5vbmNsaWNrID0gb25DaGVja2JveENoYW5nZS5iaW5kKGlucHV0V3JhcHBlcik7XG4gICAgICAgICAgICAgICAgZG9tLm9uY2xpY2sud3JhcHBlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBkb20ub25pbnB1dCA9IG9uVGV4dElucHV0Q2hhbmdlLmJpbmQoaW5wdXRXcmFwcGVyKTtcbiAgICAgICAgICAgICAgICBkb20ub25pbnB1dC53cmFwcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9wcy5vbkNoYW5nZSkge1xuICAgICAgICAgICAgICAgIGRvbS5vbmNoYW5nZSA9IHdyYXBwZWRPbkNoYW5nZS5iaW5kKGlucHV0V3JhcHBlcik7XG4gICAgICAgICAgICAgICAgZG9tLm9uY2hhbmdlLndyYXBwZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd3JhcHBlcnMuc2V0KGRvbSwgaW5wdXRXcmFwcGVyKTtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dFdyYXBwZXIudk5vZGUgPSB2Tm9kZTtcbiAgICB9XG59XG5mdW5jdGlvbiBhcHBseVZhbHVlKHZOb2RlLCBkb20pIHtcbiAgICB2YXIgcHJvcHMgPSB2Tm9kZS5wcm9wcyB8fCBFTVBUWV9PQko7XG4gICAgdmFyIHR5cGUgPSBwcm9wcy50eXBlO1xuICAgIHZhciB2YWx1ZSA9IHByb3BzLnZhbHVlO1xuICAgIHZhciBjaGVja2VkID0gcHJvcHMuY2hlY2tlZDtcbiAgICB2YXIgbXVsdGlwbGUgPSBwcm9wcy5tdWx0aXBsZTtcbiAgICBpZiAodHlwZSAmJiB0eXBlICE9PSBkb20udHlwZSkge1xuICAgICAgICBkb20udHlwZSA9IHR5cGU7XG4gICAgfVxuICAgIGlmIChtdWx0aXBsZSAmJiBtdWx0aXBsZSAhPT0gZG9tLm11bHRpcGxlKSB7XG4gICAgICAgIGRvbS5tdWx0aXBsZSA9IG11bHRpcGxlO1xuICAgIH1cbiAgICBpZiAoaXNDaGVja2VkVHlwZSh0eXBlKSkge1xuICAgICAgICBpZiAoIWlzTnVsbE9yVW5kZWYodmFsdWUpKSB7XG4gICAgICAgICAgICBkb20udmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBkb20uY2hlY2tlZCA9IGNoZWNrZWQ7XG4gICAgICAgIGlmICh0eXBlID09PSAncmFkaW8nICYmIHByb3BzLm5hbWUpIHtcbiAgICAgICAgICAgIGhhbmRsZUFzc29jaWF0ZWRSYWRpb0lucHV0cyhwcm9wcy5uYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKCFpc051bGxPclVuZGVmKHZhbHVlKSAmJiBkb20udmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICBkb20udmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghaXNOdWxsT3JVbmRlZihjaGVja2VkKSkge1xuICAgICAgICAgICAgZG9tLmNoZWNrZWQgPSBjaGVja2VkO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpc0NvbnRyb2xsZWQkMShwcm9wcykge1xuICAgIHJldHVybiAhaXNOdWxsT3JVbmRlZihwcm9wcy52YWx1ZSk7XG59XG5mdW5jdGlvbiB1cGRhdGVDaGlsZE9wdGlvbkdyb3VwKHZOb2RlLCB2YWx1ZSkge1xuICAgIHZhciB0eXBlID0gdk5vZGUudHlwZTtcbiAgICBpZiAodHlwZSA9PT0gJ29wdGdyb3VwJykge1xuICAgICAgICB2YXIgY2hpbGRyZW4gPSB2Tm9kZS5jaGlsZHJlbjtcbiAgICAgICAgaWYgKGlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlQ2hpbGRPcHRpb24oY2hpbGRyZW5baV0sIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc1ZOb2RlKGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgdXBkYXRlQ2hpbGRPcHRpb24oY2hpbGRyZW4sIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdXBkYXRlQ2hpbGRPcHRpb24odk5vZGUsIHZhbHVlKTtcbiAgICB9XG59XG5mdW5jdGlvbiB1cGRhdGVDaGlsZE9wdGlvbih2Tm9kZSwgdmFsdWUpIHtcbiAgICB2YXIgcHJvcHMgPSB2Tm9kZS5wcm9wcyB8fCBFTVBUWV9PQko7XG4gICAgdmFyIGRvbSA9IHZOb2RlLmRvbTtcbiAgICAvLyB3ZSBkbyB0aGlzIGFzIG11bHRpcGxlIG1heSBoYXZlIGNoYW5nZWRcbiAgICBkb20udmFsdWUgPSBwcm9wcy52YWx1ZTtcbiAgICBpZiAoKGlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmluZGV4T2YocHJvcHMudmFsdWUpICE9PSAtMSkgfHwgcHJvcHMudmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICAgIGRvbS5zZWxlY3RlZCA9IHRydWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBkb20uc2VsZWN0ZWQgPSBwcm9wcy5zZWxlY3RlZCB8fCBmYWxzZTtcbiAgICB9XG59XG5mdW5jdGlvbiBvblNlbGVjdENoYW5nZShlKSB7XG4gICAgdmFyIHZOb2RlID0gdGhpcy52Tm9kZTtcbiAgICB2YXIgZXZlbnRzID0gdk5vZGUuZXZlbnRzIHx8IEVNUFRZX09CSjtcbiAgICB2YXIgZG9tID0gdk5vZGUuZG9tO1xuICAgIGlmIChldmVudHMub25DaGFuZ2UpIHtcbiAgICAgICAgdmFyIGV2ZW50ID0gZXZlbnRzLm9uQ2hhbmdlO1xuICAgICAgICBpZiAoZXZlbnQuZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LmV2ZW50KGV2ZW50LmRhdGEsIGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZXZlbnQoZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnRzLm9uY2hhbmdlKSB7XG4gICAgICAgIGV2ZW50cy5vbmNoYW5nZShlKTtcbiAgICB9XG4gICAgLy8gdGhlIHVzZXIgbWF5IGhhdmUgdXBkYXRlZCB0aGUgdk5vZGUgZnJvbSB0aGUgYWJvdmUgb25DaGFuZ2UgZXZlbnRzXG4gICAgLy8gc28gd2UgbmVlZCB0byBnZXQgaXQgZnJvbSB0aGUgY29udGV4dCBvZiBgdGhpc2AgYWdhaW5cbiAgICBhcHBseVZhbHVlJDEodGhpcy52Tm9kZSwgZG9tKTtcbn1cbmZ1bmN0aW9uIHByb2Nlc3NTZWxlY3Qodk5vZGUsIGRvbSkge1xuICAgIHZhciBwcm9wcyA9IHZOb2RlLnByb3BzIHx8IEVNUFRZX09CSjtcbiAgICBhcHBseVZhbHVlJDEodk5vZGUsIGRvbSk7XG4gICAgaWYgKGlzQ29udHJvbGxlZCQxKHByb3BzKSkge1xuICAgICAgICB2YXIgc2VsZWN0V3JhcHBlciA9IHdyYXBwZXJzLmdldChkb20pO1xuICAgICAgICBpZiAoIXNlbGVjdFdyYXBwZXIpIHtcbiAgICAgICAgICAgIHNlbGVjdFdyYXBwZXIgPSB7XG4gICAgICAgICAgICAgICAgdk5vZGU6IHZOb2RlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZG9tLm9uY2hhbmdlID0gb25TZWxlY3RDaGFuZ2UuYmluZChzZWxlY3RXcmFwcGVyKTtcbiAgICAgICAgICAgIGRvbS5vbmNoYW5nZS53cmFwcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHdyYXBwZXJzLnNldChkb20sIHNlbGVjdFdyYXBwZXIpO1xuICAgICAgICB9XG4gICAgICAgIHNlbGVjdFdyYXBwZXIudk5vZGUgPSB2Tm9kZTtcbiAgICB9XG59XG5mdW5jdGlvbiBhcHBseVZhbHVlJDEodk5vZGUsIGRvbSkge1xuICAgIHZhciBwcm9wcyA9IHZOb2RlLnByb3BzIHx8IEVNUFRZX09CSjtcbiAgICBpZiAocHJvcHMubXVsdGlwbGUgIT09IGRvbS5tdWx0aXBsZSkge1xuICAgICAgICBkb20ubXVsdGlwbGUgPSBwcm9wcy5tdWx0aXBsZTtcbiAgICB9XG4gICAgdmFyIGNoaWxkcmVuID0gdk5vZGUuY2hpbGRyZW47XG4gICAgdmFyIHZhbHVlID0gcHJvcHMudmFsdWU7XG4gICAgaWYgKGlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHVwZGF0ZUNoaWxkT3B0aW9uR3JvdXAoY2hpbGRyZW5baV0sIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChpc1ZOb2RlKGNoaWxkcmVuKSkge1xuICAgICAgICB1cGRhdGVDaGlsZE9wdGlvbkdyb3VwKGNoaWxkcmVuLCB2YWx1ZSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpc0NvbnRyb2xsZWQkMihwcm9wcykge1xuICAgIHJldHVybiAhaXNOdWxsT3JVbmRlZihwcm9wcy52YWx1ZSk7XG59XG5mdW5jdGlvbiB3cmFwcGVkT25DaGFuZ2UkMShlKSB7XG4gICAgdmFyIHZOb2RlID0gdGhpcy52Tm9kZTtcbiAgICB2YXIgZXZlbnRzID0gdk5vZGUuZXZlbnRzIHx8IEVNUFRZX09CSjtcbiAgICB2YXIgZXZlbnQgPSBldmVudHMub25DaGFuZ2U7XG4gICAgaWYgKGV2ZW50LmV2ZW50KSB7XG4gICAgICAgIGV2ZW50LmV2ZW50KGV2ZW50LmRhdGEsIGUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZXZlbnQoZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gb25UZXh0YXJlYUlucHV0Q2hhbmdlKGUpIHtcbiAgICB2YXIgdk5vZGUgPSB0aGlzLnZOb2RlO1xuICAgIHZhciBldmVudHMgPSB2Tm9kZS5ldmVudHMgfHwgRU1QVFlfT0JKO1xuICAgIHZhciBkb20gPSB2Tm9kZS5kb207XG4gICAgaWYgKGV2ZW50cy5vbklucHV0KSB7XG4gICAgICAgIHZhciBldmVudCA9IGV2ZW50cy5vbklucHV0O1xuICAgICAgICBpZiAoZXZlbnQuZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LmV2ZW50KGV2ZW50LmRhdGEsIGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZXZlbnQoZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnRzLm9uaW5wdXQpIHtcbiAgICAgICAgZXZlbnRzLm9uaW5wdXQoZSk7XG4gICAgfVxuICAgIC8vIHRoZSB1c2VyIG1heSBoYXZlIHVwZGF0ZWQgdGhlIHZOb2RlIGZyb20gdGhlIGFib3ZlIG9uSW5wdXQgZXZlbnRzXG4gICAgLy8gc28gd2UgbmVlZCB0byBnZXQgaXQgZnJvbSB0aGUgY29udGV4dCBvZiBgdGhpc2AgYWdhaW5cbiAgICBhcHBseVZhbHVlJDIodGhpcy52Tm9kZSwgZG9tKTtcbn1cbmZ1bmN0aW9uIHByb2Nlc3NUZXh0YXJlYSh2Tm9kZSwgZG9tKSB7XG4gICAgdmFyIHByb3BzID0gdk5vZGUucHJvcHMgfHwgRU1QVFlfT0JKO1xuICAgIGFwcGx5VmFsdWUkMih2Tm9kZSwgZG9tKTtcbiAgICB2YXIgdGV4dGFyZWFXcmFwcGVyID0gd3JhcHBlcnMuZ2V0KGRvbSk7XG4gICAgaWYgKGlzQ29udHJvbGxlZCQyKHByb3BzKSkge1xuICAgICAgICBpZiAoIXRleHRhcmVhV3JhcHBlcikge1xuICAgICAgICAgICAgdGV4dGFyZWFXcmFwcGVyID0ge1xuICAgICAgICAgICAgICAgIHZOb2RlOiB2Tm9kZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGRvbS5vbmlucHV0ID0gb25UZXh0YXJlYUlucHV0Q2hhbmdlLmJpbmQodGV4dGFyZWFXcmFwcGVyKTtcbiAgICAgICAgICAgIGRvbS5vbmlucHV0LndyYXBwZWQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgZG9tLm9uY2hhbmdlID0gd3JhcHBlZE9uQ2hhbmdlJDEuYmluZCh0ZXh0YXJlYVdyYXBwZXIpO1xuICAgICAgICAgICAgICAgIGRvbS5vbmNoYW5nZS53cmFwcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdyYXBwZXJzLnNldChkb20sIHRleHRhcmVhV3JhcHBlcik7XG4gICAgICAgIH1cbiAgICAgICAgdGV4dGFyZWFXcmFwcGVyLnZOb2RlID0gdk5vZGU7XG4gICAgfVxufVxuZnVuY3Rpb24gYXBwbHlWYWx1ZSQyKHZOb2RlLCBkb20pIHtcbiAgICB2YXIgcHJvcHMgPSB2Tm9kZS5wcm9wcyB8fCBFTVBUWV9PQko7XG4gICAgdmFyIHZhbHVlID0gcHJvcHMudmFsdWU7XG4gICAgaWYgKGRvbS52YWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgaWYgKCFpc051bGxPclVuZGVmKHZhbHVlKSkge1xuICAgICAgICAgICAgZG9tLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbnZhciB3cmFwcGVycyA9IG5ldyBNYXAoKTtcbmZ1bmN0aW9uIHByb2Nlc3NFbGVtZW50KGZsYWdzLCB2Tm9kZSwgZG9tKSB7XG4gICAgaWYgKGZsYWdzICYgNTEyIC8qIElucHV0RWxlbWVudCAqLykge1xuICAgICAgICBwcm9jZXNzSW5wdXQodk5vZGUsIGRvbSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGZsYWdzICYgMjA0OCAvKiBTZWxlY3RFbGVtZW50ICovKSB7XG4gICAgICAgIHByb2Nlc3NTZWxlY3Qodk5vZGUsIGRvbSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGZsYWdzICYgMTAyNCAvKiBUZXh0YXJlYUVsZW1lbnQgKi8pIHtcbiAgICAgICAgcHJvY2Vzc1RleHRhcmVhKHZOb2RlLCBkb20pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gdW5tb3VudCh2Tm9kZSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNhblJlY3ljbGUsIGlzUmVjeWNsaW5nKSB7XG4gICAgdmFyIGZsYWdzID0gdk5vZGUuZmxhZ3M7XG4gICAgaWYgKGZsYWdzICYgMjggLyogQ29tcG9uZW50ICovKSB7XG4gICAgICAgIHVubW91bnRDb21wb25lbnQodk5vZGUsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjYW5SZWN5Y2xlLCBpc1JlY3ljbGluZyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGZsYWdzICYgMzk3MCAvKiBFbGVtZW50ICovKSB7XG4gICAgICAgIHVubW91bnRFbGVtZW50KHZOb2RlLCBwYXJlbnREb20sIGxpZmVjeWNsZSwgY2FuUmVjeWNsZSwgaXNSZWN5Y2xpbmcpO1xuICAgIH1cbiAgICBlbHNlIGlmIChmbGFncyAmICgxIC8qIFRleHQgKi8gfCA0MDk2IC8qIFZvaWQgKi8pKSB7XG4gICAgICAgIHVubW91bnRWb2lkT3JUZXh0KHZOb2RlLCBwYXJlbnREb20pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHVubW91bnRWb2lkT3JUZXh0KHZOb2RlLCBwYXJlbnREb20pIHtcbiAgICBpZiAocGFyZW50RG9tKSB7XG4gICAgICAgIHJlbW92ZUNoaWxkKHBhcmVudERvbSwgdk5vZGUuZG9tKTtcbiAgICB9XG59XG52YXIgYWxyZWFkeVVubW91bnRlZCA9IG5ldyBXZWFrTWFwKCk7XG5mdW5jdGlvbiB1bm1vdW50Q29tcG9uZW50KHZOb2RlLCBwYXJlbnREb20sIGxpZmVjeWNsZSwgY2FuUmVjeWNsZSwgaXNSZWN5Y2xpbmcpIHtcbiAgICB2YXIgaW5zdGFuY2UgPSB2Tm9kZS5jaGlsZHJlbjtcbiAgICB2YXIgZmxhZ3MgPSB2Tm9kZS5mbGFncztcbiAgICB2YXIgaXNTdGF0ZWZ1bENvbXBvbmVudCQkMSA9IGZsYWdzICYgNDtcbiAgICB2YXIgcmVmID0gdk5vZGUucmVmO1xuICAgIHZhciBkb20gPSB2Tm9kZS5kb207XG4gICAgaWYgKGFscmVhZHlVbm1vdW50ZWQuaGFzKHZOb2RlKSAmJiAhaXNSZWN5Y2xpbmcgJiYgIXBhcmVudERvbSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGFscmVhZHlVbm1vdW50ZWQuc2V0KHZOb2RlKTtcbiAgICBpZiAoIWlzUmVjeWNsaW5nKSB7XG4gICAgICAgIGlmIChpc1N0YXRlZnVsQ29tcG9uZW50JCQxKSB7XG4gICAgICAgICAgICBpZiAoIWluc3RhbmNlLl91bm1vdW50ZWQpIHtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5faWdub3JlU2V0U3RhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuYmVmb3JlVW5tb3VudCAmJiBvcHRpb25zLmJlZm9yZVVubW91bnQodk5vZGUpO1xuICAgICAgICAgICAgICAgIGluc3RhbmNlLmNvbXBvbmVudFdpbGxVbm1vdW50ICYmIGluc3RhbmNlLmNvbXBvbmVudFdpbGxVbm1vdW50KCk7XG4gICAgICAgICAgICAgICAgaWYgKHJlZiAmJiAhaXNSZWN5Y2xpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVmKG51bGwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5fdW5tb3VudGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmZpbmRET01Ob2RlRW5hYmxlZCAmJiBjb21wb25lbnRUb0RPTU5vZGVNYXAuZGVsZXRlKGluc3RhbmNlKTtcbiAgICAgICAgICAgICAgICB2YXIgc3ViTGlmZWN5Y2xlID0gaW5zdGFuY2UuX2xpZmVjeWNsZTtcbiAgICAgICAgICAgICAgICBpZiAoIXN1YkxpZmVjeWNsZS5mYXN0VW5tb3VudCkge1xuICAgICAgICAgICAgICAgICAgICB1bm1vdW50KGluc3RhbmNlLl9sYXN0SW5wdXQsIG51bGwsIHN1YkxpZmVjeWNsZSwgZmFsc2UsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoIWlzTnVsbE9yVW5kZWYocmVmKSkge1xuICAgICAgICAgICAgICAgIGlmICghaXNOdWxsT3JVbmRlZihyZWYub25Db21wb25lbnRXaWxsVW5tb3VudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVmLm9uQ29tcG9uZW50V2lsbFVubW91bnQoZG9tKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWxpZmVjeWNsZS5mYXN0VW5tb3VudCkge1xuICAgICAgICAgICAgICAgIHVubW91bnQoaW5zdGFuY2UsIG51bGwsIGxpZmVjeWNsZSwgZmFsc2UsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAocGFyZW50RG9tKSB7XG4gICAgICAgIHZhciBsYXN0SW5wdXQgPSBpbnN0YW5jZS5fbGFzdElucHV0O1xuICAgICAgICBpZiAoaXNOdWxsT3JVbmRlZihsYXN0SW5wdXQpKSB7XG4gICAgICAgICAgICBsYXN0SW5wdXQgPSBpbnN0YW5jZTtcbiAgICAgICAgfVxuICAgICAgICByZW1vdmVDaGlsZChwYXJlbnREb20sIGRvbSk7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLnJlY3ljbGluZ0VuYWJsZWQgJiYgIWlzU3RhdGVmdWxDb21wb25lbnQkJDEgJiYgKHBhcmVudERvbSB8fCBjYW5SZWN5Y2xlKSkge1xuICAgICAgICBwb29sQ29tcG9uZW50KHZOb2RlKTtcbiAgICB9XG59XG5mdW5jdGlvbiB1bm1vdW50RWxlbWVudCh2Tm9kZSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNhblJlY3ljbGUsIGlzUmVjeWNsaW5nKSB7XG4gICAgdmFyIGRvbSA9IHZOb2RlLmRvbTtcbiAgICB2YXIgcmVmID0gdk5vZGUucmVmO1xuICAgIHZhciBldmVudHMgPSB2Tm9kZS5ldmVudHM7XG4gICAgaWYgKGFscmVhZHlVbm1vdW50ZWQuaGFzKHZOb2RlKSAmJiAhaXNSZWN5Y2xpbmcgJiYgIXBhcmVudERvbSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGFscmVhZHlVbm1vdW50ZWQuc2V0KHZOb2RlKTtcbiAgICBpZiAoIWxpZmVjeWNsZS5mYXN0VW5tb3VudCkge1xuICAgICAgICBpZiAocmVmICYmICFpc1JlY3ljbGluZykge1xuICAgICAgICAgICAgdW5tb3VudFJlZihyZWYpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjaGlsZHJlbiA9IHZOb2RlLmNoaWxkcmVuO1xuICAgICAgICBpZiAoIWlzTnVsbE9yVW5kZWYoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICB1bm1vdW50Q2hpbGRyZW4kMShjaGlsZHJlbiwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFpc051bGwoZXZlbnRzKSkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIGV2ZW50cykge1xuICAgICAgICAgICAgLy8gZG8gbm90IGFkZCBhIGhhc093blByb3BlcnR5IGNoZWNrIGhlcmUsIGl0IGFmZmVjdHMgcGVyZm9ybWFuY2VcbiAgICAgICAgICAgIHBhdGNoRXZlbnQobmFtZSwgZXZlbnRzW25hbWVdLCBudWxsLCBkb20sIGxpZmVjeWNsZSk7XG4gICAgICAgICAgICBldmVudHNbbmFtZV0gPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChwYXJlbnREb20pIHtcbiAgICAgICAgcmVtb3ZlQ2hpbGQocGFyZW50RG9tLCBkb20pO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5yZWN5Y2xpbmdFbmFibGVkICYmIChwYXJlbnREb20gfHwgY2FuUmVjeWNsZSkpIHtcbiAgICAgICAgcG9vbEVsZW1lbnQodk5vZGUpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHVubW91bnRDaGlsZHJlbiQxKGNoaWxkcmVuLCBsaWZlY3ljbGUsIGlzUmVjeWNsaW5nKSB7XG4gICAgaWYgKGlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgaWYgKCFpc0ludmFsaWQoY2hpbGQpICYmIGlzT2JqZWN0KGNoaWxkKSkge1xuICAgICAgICAgICAgICAgIHVubW91bnQoY2hpbGQsIG51bGwsIGxpZmVjeWNsZSwgZmFsc2UsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChpc09iamVjdChjaGlsZHJlbikpIHtcbiAgICAgICAgdW5tb3VudChjaGlsZHJlbiwgbnVsbCwgbGlmZWN5Y2xlLCBmYWxzZSwgaXNSZWN5Y2xpbmcpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHVubW91bnRSZWYocmVmKSB7XG4gICAgaWYgKGlzRnVuY3Rpb24ocmVmKSkge1xuICAgICAgICByZWYobnVsbCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAoaXNJbnZhbGlkKHJlZikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93RXJyb3IoJ3N0cmluZyBcInJlZnNcIiBhcmUgbm90IHN1cHBvcnRlZCBpbiBJbmZlcm5vIDEuMC4gVXNlIGNhbGxiYWNrIFwicmVmc1wiIGluc3RlYWQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3dFcnJvcigpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcGF0Y2gobGFzdFZOb2RlLCBuZXh0Vk5vZGUsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpIHtcbiAgICBpZiAobGFzdFZOb2RlICE9PSBuZXh0Vk5vZGUpIHtcbiAgICAgICAgdmFyIGxhc3RGbGFncyA9IGxhc3RWTm9kZS5mbGFncztcbiAgICAgICAgdmFyIG5leHRGbGFncyA9IG5leHRWTm9kZS5mbGFncztcbiAgICAgICAgaWYgKG5leHRGbGFncyAmIDI4IC8qIENvbXBvbmVudCAqLykge1xuICAgICAgICAgICAgaWYgKGxhc3RGbGFncyAmIDI4IC8qIENvbXBvbmVudCAqLykge1xuICAgICAgICAgICAgICAgIHBhdGNoQ29tcG9uZW50KGxhc3RWTm9kZSwgbmV4dFZOb2RlLCBwYXJlbnREb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIG5leHRGbGFncyAmIDQgLyogQ29tcG9uZW50Q2xhc3MgKi8sIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlcGxhY2VWTm9kZShwYXJlbnREb20sIG1vdW50Q29tcG9uZW50KG5leHRWTm9kZSwgbnVsbCwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgbmV4dEZsYWdzICYgNCAvKiBDb21wb25lbnRDbGFzcyAqLyksIGxhc3RWTm9kZSwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobmV4dEZsYWdzICYgMzk3MCAvKiBFbGVtZW50ICovKSB7XG4gICAgICAgICAgICBpZiAobGFzdEZsYWdzICYgMzk3MCAvKiBFbGVtZW50ICovKSB7XG4gICAgICAgICAgICAgICAgcGF0Y2hFbGVtZW50KGxhc3RWTm9kZSwgbmV4dFZOb2RlLCBwYXJlbnREb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlcGxhY2VWTm9kZShwYXJlbnREb20sIG1vdW50RWxlbWVudChuZXh0Vk5vZGUsIG51bGwsIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpLCBsYXN0Vk5vZGUsIGxpZmVjeWNsZSwgaXNSZWN5Y2xpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG5leHRGbGFncyAmIDEgLyogVGV4dCAqLykge1xuICAgICAgICAgICAgaWYgKGxhc3RGbGFncyAmIDEgLyogVGV4dCAqLykge1xuICAgICAgICAgICAgICAgIHBhdGNoVGV4dChsYXN0Vk5vZGUsIG5leHRWTm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXBsYWNlVk5vZGUocGFyZW50RG9tLCBtb3VudFRleHQobmV4dFZOb2RlLCBudWxsKSwgbGFzdFZOb2RlLCBsaWZlY3ljbGUsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChuZXh0RmxhZ3MgJiA0MDk2IC8qIFZvaWQgKi8pIHtcbiAgICAgICAgICAgIGlmIChsYXN0RmxhZ3MgJiA0MDk2IC8qIFZvaWQgKi8pIHtcbiAgICAgICAgICAgICAgICBwYXRjaFZvaWQobGFzdFZOb2RlLCBuZXh0Vk5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVwbGFjZVZOb2RlKHBhcmVudERvbSwgbW91bnRWb2lkKG5leHRWTm9kZSwgbnVsbCksIGxhc3RWTm9kZSwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBFcnJvciBjYXNlOiBtb3VudCBuZXcgb25lIHJlcGxhY2luZyBvbGQgb25lXG4gICAgICAgICAgICByZXBsYWNlTGFzdENoaWxkQW5kVW5tb3VudChsYXN0Vk5vZGUsIG5leHRWTm9kZSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiB1bm1vdW50Q2hpbGRyZW4oY2hpbGRyZW4sIGRvbSwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZykge1xuICAgIGlmIChpc1ZOb2RlKGNoaWxkcmVuKSkge1xuICAgICAgICB1bm1vdW50KGNoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgdHJ1ZSwgaXNSZWN5Y2xpbmcpO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICByZW1vdmVBbGxDaGlsZHJlbihkb20sIGNoaWxkcmVuLCBsaWZlY3ljbGUsIGlzUmVjeWNsaW5nKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGRvbS50ZXh0Q29udGVudCA9ICcnO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHBhdGNoRWxlbWVudChsYXN0Vk5vZGUsIG5leHRWTm9kZSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZykge1xuICAgIHZhciBuZXh0VGFnID0gbmV4dFZOb2RlLnR5cGU7XG4gICAgdmFyIGxhc3RUYWcgPSBsYXN0Vk5vZGUudHlwZTtcbiAgICBpZiAobGFzdFRhZyAhPT0gbmV4dFRhZykge1xuICAgICAgICByZXBsYWNlV2l0aE5ld05vZGUobGFzdFZOb2RlLCBuZXh0Vk5vZGUsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGRvbSA9IGxhc3RWTm9kZS5kb207XG4gICAgICAgIHZhciBsYXN0UHJvcHMgPSBsYXN0Vk5vZGUucHJvcHM7XG4gICAgICAgIHZhciBuZXh0UHJvcHMgPSBuZXh0Vk5vZGUucHJvcHM7XG4gICAgICAgIHZhciBsYXN0Q2hpbGRyZW4gPSBsYXN0Vk5vZGUuY2hpbGRyZW47XG4gICAgICAgIHZhciBuZXh0Q2hpbGRyZW4gPSBuZXh0Vk5vZGUuY2hpbGRyZW47XG4gICAgICAgIHZhciBsYXN0RmxhZ3MgPSBsYXN0Vk5vZGUuZmxhZ3M7XG4gICAgICAgIHZhciBuZXh0RmxhZ3MgPSBuZXh0Vk5vZGUuZmxhZ3M7XG4gICAgICAgIHZhciBsYXN0UmVmID0gbGFzdFZOb2RlLnJlZjtcbiAgICAgICAgdmFyIG5leHRSZWYgPSBuZXh0Vk5vZGUucmVmO1xuICAgICAgICB2YXIgbGFzdEV2ZW50cyA9IGxhc3RWTm9kZS5ldmVudHM7XG4gICAgICAgIHZhciBuZXh0RXZlbnRzID0gbmV4dFZOb2RlLmV2ZW50cztcbiAgICAgICAgbmV4dFZOb2RlLmRvbSA9IGRvbTtcbiAgICAgICAgaWYgKGlzU1ZHIHx8IChuZXh0RmxhZ3MgJiAxMjggLyogU3ZnRWxlbWVudCAqLykpIHtcbiAgICAgICAgICAgIGlzU1ZHID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGFzdENoaWxkcmVuICE9PSBuZXh0Q2hpbGRyZW4pIHtcbiAgICAgICAgICAgIHBhdGNoQ2hpbGRyZW4obGFzdEZsYWdzLCBuZXh0RmxhZ3MsIGxhc3RDaGlsZHJlbiwgbmV4dENoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIShuZXh0RmxhZ3MgJiAyIC8qIEh0bWxFbGVtZW50ICovKSkge1xuICAgICAgICAgICAgcHJvY2Vzc0VsZW1lbnQobmV4dEZsYWdzLCBuZXh0Vk5vZGUsIGRvbSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxhc3RQcm9wcyAhPT0gbmV4dFByb3BzKSB7XG4gICAgICAgICAgICBwYXRjaFByb3BzKGxhc3RQcm9wcywgbmV4dFByb3BzLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsYXN0RXZlbnRzICE9PSBuZXh0RXZlbnRzKSB7XG4gICAgICAgICAgICBwYXRjaEV2ZW50cyhsYXN0RXZlbnRzLCBuZXh0RXZlbnRzLCBkb20sIGxpZmVjeWNsZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5leHRSZWYpIHtcbiAgICAgICAgICAgIGlmIChsYXN0UmVmICE9PSBuZXh0UmVmIHx8IGlzUmVjeWNsaW5nKSB7XG4gICAgICAgICAgICAgICAgbW91bnRSZWYoZG9tLCBuZXh0UmVmLCBsaWZlY3ljbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gcGF0Y2hDaGlsZHJlbihsYXN0RmxhZ3MsIG5leHRGbGFncywgbGFzdENoaWxkcmVuLCBuZXh0Q2hpbGRyZW4sIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpIHtcbiAgICB2YXIgcGF0Y2hBcnJheSA9IGZhbHNlO1xuICAgIHZhciBwYXRjaEtleWVkID0gZmFsc2U7XG4gICAgaWYgKG5leHRGbGFncyAmIDY0IC8qIEhhc05vbktleWVkQ2hpbGRyZW4gKi8pIHtcbiAgICAgICAgcGF0Y2hBcnJheSA9IHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKChsYXN0RmxhZ3MgJiAzMiAvKiBIYXNLZXllZENoaWxkcmVuICovKSAmJiAobmV4dEZsYWdzICYgMzIgLyogSGFzS2V5ZWRDaGlsZHJlbiAqLykpIHtcbiAgICAgICAgcGF0Y2hLZXllZCA9IHRydWU7XG4gICAgICAgIHBhdGNoQXJyYXkgPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc0ludmFsaWQobmV4dENoaWxkcmVuKSkge1xuICAgICAgICB1bm1vdW50Q2hpbGRyZW4obGFzdENoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgaXNSZWN5Y2xpbmcpO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc0ludmFsaWQobGFzdENoaWxkcmVuKSkge1xuICAgICAgICBpZiAoaXNTdHJpbmdPck51bWJlcihuZXh0Q2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBzZXRUZXh0Q29udGVudChkb20sIG5leHRDaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoaXNBcnJheShuZXh0Q2hpbGRyZW4pKSB7XG4gICAgICAgICAgICAgICAgbW91bnRBcnJheUNoaWxkcmVuKG5leHRDaGlsZHJlbiwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG1vdW50KG5leHRDaGlsZHJlbiwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChpc1N0cmluZ09yTnVtYmVyKG5leHRDaGlsZHJlbikpIHtcbiAgICAgICAgaWYgKGlzU3RyaW5nT3JOdW1iZXIobGFzdENoaWxkcmVuKSkge1xuICAgICAgICAgICAgdXBkYXRlVGV4dENvbnRlbnQoZG9tLCBuZXh0Q2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdW5tb3VudENoaWxkcmVuKGxhc3RDaGlsZHJlbiwgZG9tLCBsaWZlY3ljbGUsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgIHNldFRleHRDb250ZW50KGRvbSwgbmV4dENoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChpc0FycmF5KG5leHRDaGlsZHJlbikpIHtcbiAgICAgICAgaWYgKGlzQXJyYXkobGFzdENoaWxkcmVuKSkge1xuICAgICAgICAgICAgcGF0Y2hBcnJheSA9IHRydWU7XG4gICAgICAgICAgICBpZiAoaXNLZXllZChsYXN0Q2hpbGRyZW4sIG5leHRDaGlsZHJlbikpIHtcbiAgICAgICAgICAgICAgICBwYXRjaEtleWVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHVubW91bnRDaGlsZHJlbihsYXN0Q2hpbGRyZW4sIGRvbSwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICBtb3VudEFycmF5Q2hpbGRyZW4obmV4dENoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzQXJyYXkobGFzdENoaWxkcmVuKSkge1xuICAgICAgICByZW1vdmVBbGxDaGlsZHJlbihkb20sIGxhc3RDaGlsZHJlbiwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZyk7XG4gICAgICAgIG1vdW50KG5leHRDaGlsZHJlbiwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNWTm9kZShuZXh0Q2hpbGRyZW4pKSB7XG4gICAgICAgIGlmIChpc1ZOb2RlKGxhc3RDaGlsZHJlbikpIHtcbiAgICAgICAgICAgIHBhdGNoKGxhc3RDaGlsZHJlbiwgbmV4dENoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHVubW91bnRDaGlsZHJlbihsYXN0Q2hpbGRyZW4sIGRvbSwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICBtb3VudChuZXh0Q2hpbGRyZW4sIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyk7XG4gICAgICAgIH1cbiAgICB9IC8qIGVsc2UgaWYgKGlzVk5vZGUobGFzdENoaWxkcmVuKSkge1xuICAgICAgICAvLyBUT0RPOiBPbmUgdGVzdCBoaXRzIHRoaXMgbGluZSB3aGVuIHBhc3NpbmcgaW52YWxpZCBjaGlsZHJlbiB3aGF0IHNob3VsZCBiZSBkb25lP1xuICAgICAgICAvLyBkZWJ1Z2dlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBkZWJ1Z2dlcjtcbiAgICB9Ki9cbiAgICBpZiAocGF0Y2hBcnJheSkge1xuICAgICAgICBpZiAocGF0Y2hLZXllZCkge1xuICAgICAgICAgICAgcGF0Y2hLZXllZENoaWxkcmVuKGxhc3RDaGlsZHJlbiwgbmV4dENoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHBhdGNoTm9uS2V5ZWRDaGlsZHJlbihsYXN0Q2hpbGRyZW4sIG5leHRDaGlsZHJlbiwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBwYXRjaENvbXBvbmVudChsYXN0Vk5vZGUsIG5leHRWTm9kZSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc0NsYXNzLCBpc1JlY3ljbGluZykge1xuICAgIHZhciBsYXN0VHlwZSA9IGxhc3RWTm9kZS50eXBlO1xuICAgIHZhciBuZXh0VHlwZSA9IG5leHRWTm9kZS50eXBlO1xuICAgIHZhciBuZXh0UHJvcHMgPSBuZXh0Vk5vZGUucHJvcHMgfHwgRU1QVFlfT0JKO1xuICAgIHZhciBsYXN0S2V5ID0gbGFzdFZOb2RlLmtleTtcbiAgICB2YXIgbmV4dEtleSA9IG5leHRWTm9kZS5rZXk7XG4gICAgdmFyIGRlZmF1bHRQcm9wcyA9IG5leHRUeXBlLmRlZmF1bHRQcm9wcztcbiAgICBpZiAoIWlzVW5kZWZpbmVkKGRlZmF1bHRQcm9wcykpIHtcbiAgICAgICAgY29weVByb3BzVG8oZGVmYXVsdFByb3BzLCBuZXh0UHJvcHMpO1xuICAgICAgICBuZXh0Vk5vZGUucHJvcHMgPSBuZXh0UHJvcHM7XG4gICAgfVxuICAgIGlmIChsYXN0VHlwZSAhPT0gbmV4dFR5cGUpIHtcbiAgICAgICAgaWYgKGlzQ2xhc3MpIHtcbiAgICAgICAgICAgIHJlcGxhY2VXaXRoTmV3Tm9kZShsYXN0Vk5vZGUsIG5leHRWTm9kZSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgbGFzdElucHV0ID0gbGFzdFZOb2RlLmNoaWxkcmVuLl9sYXN0SW5wdXQgfHwgbGFzdFZOb2RlLmNoaWxkcmVuO1xuICAgICAgICAgICAgdmFyIG5leHRJbnB1dCA9IGNyZWF0ZUZ1bmN0aW9uYWxDb21wb25lbnRJbnB1dChuZXh0Vk5vZGUsIG5leHRUeXBlLCBuZXh0UHJvcHMsIGNvbnRleHQpO1xuICAgICAgICAgICAgdW5tb3VudChsYXN0Vk5vZGUsIG51bGwsIGxpZmVjeWNsZSwgZmFsc2UsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgIHBhdGNoKGxhc3RJbnB1dCwgbmV4dElucHV0LCBwYXJlbnREb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgIHZhciBkb20gPSBuZXh0Vk5vZGUuZG9tID0gbmV4dElucHV0LmRvbTtcbiAgICAgICAgICAgIG5leHRWTm9kZS5jaGlsZHJlbiA9IG5leHRJbnB1dDtcbiAgICAgICAgICAgIG1vdW50RnVuY3Rpb25hbENvbXBvbmVudENhbGxiYWNrcyhuZXh0Vk5vZGUucmVmLCBkb20sIGxpZmVjeWNsZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChpc0NsYXNzKSB7XG4gICAgICAgICAgICBpZiAobGFzdEtleSAhPT0gbmV4dEtleSkge1xuICAgICAgICAgICAgICAgIHJlcGxhY2VXaXRoTmV3Tm9kZShsYXN0Vk5vZGUsIG5leHRWTm9kZSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGluc3RhbmNlID0gbGFzdFZOb2RlLmNoaWxkcmVuO1xuICAgICAgICAgICAgaWYgKGluc3RhbmNlLl91bm1vdW50ZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNOdWxsKHBhcmVudERvbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlcGxhY2VDaGlsZChwYXJlbnREb20sIG1vdW50Q29tcG9uZW50KG5leHRWTm9kZSwgbnVsbCwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgbmV4dFZOb2RlLmZsYWdzICYgNCAvKiBDb21wb25lbnRDbGFzcyAqLyksIGxhc3RWTm9kZS5kb20pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGxhc3RTdGF0ZSA9IGluc3RhbmNlLnN0YXRlO1xuICAgICAgICAgICAgICAgIHZhciBuZXh0U3RhdGUgPSBpbnN0YW5jZS5zdGF0ZTtcbiAgICAgICAgICAgICAgICB2YXIgbGFzdFByb3BzID0gaW5zdGFuY2UucHJvcHM7XG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkQ29udGV4dCA9IGluc3RhbmNlLmdldENoaWxkQ29udGV4dCgpO1xuICAgICAgICAgICAgICAgIG5leHRWTm9kZS5jaGlsZHJlbiA9IGluc3RhbmNlO1xuICAgICAgICAgICAgICAgIGluc3RhbmNlLl9pc1NWRyA9IGlzU1ZHO1xuICAgICAgICAgICAgICAgIGlmICghaXNOdWxsT3JVbmRlZihjaGlsZENvbnRleHQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkQ29udGV4dCA9IE9iamVjdC5hc3NpZ24oe30sIGNvbnRleHQsIGNoaWxkQ29udGV4dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZENvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgbGFzdElucHV0JDEgPSBpbnN0YW5jZS5fbGFzdElucHV0O1xuICAgICAgICAgICAgICAgIHZhciBuZXh0SW5wdXQkMSA9IGluc3RhbmNlLl91cGRhdGVDb21wb25lbnQobGFzdFN0YXRlLCBuZXh0U3RhdGUsIGxhc3RQcm9wcywgbmV4dFByb3BzLCBjb250ZXh0LCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHZhciBkaWRVcGRhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGluc3RhbmNlLl9jaGlsZENvbnRleHQgPSBjaGlsZENvbnRleHQ7XG4gICAgICAgICAgICAgICAgaWYgKGlzSW52YWxpZChuZXh0SW5wdXQkMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dElucHV0JDEgPSBjcmVhdGVWb2lkVk5vZGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobmV4dElucHV0JDEgPT09IE5PX09QKSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHRJbnB1dCQxID0gbGFzdElucHV0JDE7XG4gICAgICAgICAgICAgICAgICAgIGRpZFVwZGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpc1N0cmluZ09yTnVtYmVyKG5leHRJbnB1dCQxKSkge1xuICAgICAgICAgICAgICAgICAgICBuZXh0SW5wdXQkMSA9IGNyZWF0ZVRleHRWTm9kZShuZXh0SW5wdXQkMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlzQXJyYXkobmV4dElucHV0JDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3dFcnJvcignYSB2YWxpZCBJbmZlcm5vIFZOb2RlIChvciBudWxsKSBtdXN0IGJlIHJldHVybmVkIGZyb20gYSBjb21wb25lbnQgcmVuZGVyLiBZb3UgbWF5IGhhdmUgcmV0dXJuZWQgYW4gYXJyYXkgb3IgYW4gaW52YWxpZCBvYmplY3QuJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhyb3dFcnJvcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpc09iamVjdChuZXh0SW5wdXQkMSkgJiYgbmV4dElucHV0JDEuZG9tKSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHRJbnB1dCQxID0gY2xvbmVWTm9kZShuZXh0SW5wdXQkMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChuZXh0SW5wdXQkMS5mbGFncyAmIDI4IC8qIENvbXBvbmVudCAqLykge1xuICAgICAgICAgICAgICAgICAgICBuZXh0SW5wdXQkMS5wYXJlbnRWTm9kZSA9IG5leHRWTm9kZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobGFzdElucHV0JDEuZmxhZ3MgJiAyOCAvKiBDb21wb25lbnQgKi8pIHtcbiAgICAgICAgICAgICAgICAgICAgbGFzdElucHV0JDEucGFyZW50Vk5vZGUgPSBuZXh0Vk5vZGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGluc3RhbmNlLl9sYXN0SW5wdXQgPSBuZXh0SW5wdXQkMTtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5fdk5vZGUgPSBuZXh0Vk5vZGU7XG4gICAgICAgICAgICAgICAgaWYgKGRpZFVwZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZmFzdFVubW91bnQgPSBsaWZlY3ljbGUuZmFzdFVubW91bnQ7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdWJMaWZlY3ljbGUgPSBpbnN0YW5jZS5fbGlmZWN5Y2xlO1xuICAgICAgICAgICAgICAgICAgICBsaWZlY3ljbGUuZmFzdFVubW91bnQgPSBzdWJMaWZlY3ljbGUuZmFzdFVubW91bnQ7XG4gICAgICAgICAgICAgICAgICAgIHBhdGNoKGxhc3RJbnB1dCQxLCBuZXh0SW5wdXQkMSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNoaWxkQ29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgc3ViTGlmZWN5Y2xlLmZhc3RVbm1vdW50ID0gbGlmZWN5Y2xlLmZhc3RVbm1vdW50O1xuICAgICAgICAgICAgICAgICAgICBsaWZlY3ljbGUuZmFzdFVubW91bnQgPSBmYXN0VW5tb3VudDtcbiAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2UuY29tcG9uZW50RGlkVXBkYXRlKGxhc3RQcm9wcywgbGFzdFN0YXRlKTtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5hZnRlclVwZGF0ZSAmJiBvcHRpb25zLmFmdGVyVXBkYXRlKG5leHRWTm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuZmluZERPTU5vZGVFbmFibGVkICYmIGNvbXBvbmVudFRvRE9NTm9kZU1hcC5zZXQoaW5zdGFuY2UsIG5leHRJbnB1dCQxLmRvbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5leHRWTm9kZS5kb20gPSBuZXh0SW5wdXQkMS5kb207XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgc2hvdWxkVXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBsYXN0UHJvcHMkMSA9IGxhc3RWTm9kZS5wcm9wcztcbiAgICAgICAgICAgIHZhciBuZXh0SG9va3MgPSBuZXh0Vk5vZGUucmVmO1xuICAgICAgICAgICAgdmFyIG5leHRIb29rc0RlZmluZWQgPSAhaXNOdWxsT3JVbmRlZihuZXh0SG9va3MpO1xuICAgICAgICAgICAgdmFyIGxhc3RJbnB1dCQyID0gbGFzdFZOb2RlLmNoaWxkcmVuO1xuICAgICAgICAgICAgdmFyIG5leHRJbnB1dCQyID0gbGFzdElucHV0JDI7XG4gICAgICAgICAgICBuZXh0Vk5vZGUuZG9tID0gbGFzdFZOb2RlLmRvbTtcbiAgICAgICAgICAgIG5leHRWTm9kZS5jaGlsZHJlbiA9IGxhc3RJbnB1dCQyO1xuICAgICAgICAgICAgaWYgKGxhc3RLZXkgIT09IG5leHRLZXkpIHtcbiAgICAgICAgICAgICAgICBzaG91bGRVcGRhdGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKG5leHRIb29rc0RlZmluZWQgJiYgIWlzTnVsbE9yVW5kZWYobmV4dEhvb2tzLm9uQ29tcG9uZW50U2hvdWxkVXBkYXRlKSkge1xuICAgICAgICAgICAgICAgICAgICBzaG91bGRVcGRhdGUgPSBuZXh0SG9va3Mub25Db21wb25lbnRTaG91bGRVcGRhdGUobGFzdFByb3BzJDEsIG5leHRQcm9wcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNob3VsZFVwZGF0ZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBpZiAobmV4dEhvb2tzRGVmaW5lZCAmJiAhaXNOdWxsT3JVbmRlZihuZXh0SG9va3Mub25Db21wb25lbnRXaWxsVXBkYXRlKSkge1xuICAgICAgICAgICAgICAgICAgICBuZXh0SG9va3Mub25Db21wb25lbnRXaWxsVXBkYXRlKGxhc3RQcm9wcyQxLCBuZXh0UHJvcHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBuZXh0SW5wdXQkMiA9IG5leHRUeXBlKG5leHRQcm9wcywgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgaWYgKGlzSW52YWxpZChuZXh0SW5wdXQkMikpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dElucHV0JDIgPSBjcmVhdGVWb2lkVk5vZGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaXNTdHJpbmdPck51bWJlcihuZXh0SW5wdXQkMikgJiYgbmV4dElucHV0JDIgIT09IE5PX09QKSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHRJbnB1dCQyID0gY3JlYXRlVGV4dFZOb2RlKG5leHRJbnB1dCQyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaXNBcnJheShuZXh0SW5wdXQkMikpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvd0Vycm9yKCdhIHZhbGlkIEluZmVybm8gVk5vZGUgKG9yIG51bGwpIG11c3QgYmUgcmV0dXJuZWQgZnJvbSBhIGNvbXBvbmVudCByZW5kZXIuIFlvdSBtYXkgaGF2ZSByZXR1cm5lZCBhbiBhcnJheSBvciBhbiBpbnZhbGlkIG9iamVjdC4nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvd0Vycm9yKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlzT2JqZWN0KG5leHRJbnB1dCQyKSAmJiBuZXh0SW5wdXQkMi5kb20pIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dElucHV0JDIgPSBjbG9uZVZOb2RlKG5leHRJbnB1dCQyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG5leHRJbnB1dCQyICE9PSBOT19PUCkge1xuICAgICAgICAgICAgICAgICAgICBwYXRjaChsYXN0SW5wdXQkMiwgbmV4dElucHV0JDIsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpO1xuICAgICAgICAgICAgICAgICAgICBuZXh0Vk5vZGUuY2hpbGRyZW4gPSBuZXh0SW5wdXQkMjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRIb29rc0RlZmluZWQgJiYgIWlzTnVsbE9yVW5kZWYobmV4dEhvb2tzLm9uQ29tcG9uZW50RGlkVXBkYXRlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dEhvb2tzLm9uQ29tcG9uZW50RGlkVXBkYXRlKGxhc3RQcm9wcyQxLCBuZXh0UHJvcHMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG5leHRWTm9kZS5kb20gPSBuZXh0SW5wdXQkMi5kb207XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5leHRJbnB1dCQyLmZsYWdzICYgMjggLyogQ29tcG9uZW50ICovKSB7XG4gICAgICAgICAgICAgICAgbmV4dElucHV0JDIucGFyZW50Vk5vZGUgPSBuZXh0Vk5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChsYXN0SW5wdXQkMi5mbGFncyAmIDI4IC8qIENvbXBvbmVudCAqLykge1xuICAgICAgICAgICAgICAgIGxhc3RJbnB1dCQyLnBhcmVudFZOb2RlID0gbmV4dFZOb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIHBhdGNoVGV4dChsYXN0Vk5vZGUsIG5leHRWTm9kZSkge1xuICAgIHZhciBuZXh0VGV4dCA9IG5leHRWTm9kZS5jaGlsZHJlbjtcbiAgICB2YXIgZG9tID0gbGFzdFZOb2RlLmRvbTtcbiAgICBuZXh0Vk5vZGUuZG9tID0gZG9tO1xuICAgIGlmIChsYXN0Vk5vZGUuY2hpbGRyZW4gIT09IG5leHRUZXh0KSB7XG4gICAgICAgIGRvbS5ub2RlVmFsdWUgPSBuZXh0VGV4dDtcbiAgICB9XG59XG5mdW5jdGlvbiBwYXRjaFZvaWQobGFzdFZOb2RlLCBuZXh0Vk5vZGUpIHtcbiAgICBuZXh0Vk5vZGUuZG9tID0gbGFzdFZOb2RlLmRvbTtcbn1cbmZ1bmN0aW9uIHBhdGNoTm9uS2V5ZWRDaGlsZHJlbihsYXN0Q2hpbGRyZW4sIG5leHRDaGlsZHJlbiwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZykge1xuICAgIHZhciBsYXN0Q2hpbGRyZW5MZW5ndGggPSBsYXN0Q2hpbGRyZW4ubGVuZ3RoO1xuICAgIHZhciBuZXh0Q2hpbGRyZW5MZW5ndGggPSBuZXh0Q2hpbGRyZW4ubGVuZ3RoO1xuICAgIHZhciBjb21tb25MZW5ndGggPSBsYXN0Q2hpbGRyZW5MZW5ndGggPiBuZXh0Q2hpbGRyZW5MZW5ndGggPyBuZXh0Q2hpbGRyZW5MZW5ndGggOiBsYXN0Q2hpbGRyZW5MZW5ndGg7XG4gICAgdmFyIGkgPSAwO1xuICAgIGZvciAoOyBpIDwgY29tbW9uTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIG5leHRDaGlsZCA9IG5leHRDaGlsZHJlbltpXTtcbiAgICAgICAgaWYgKG5leHRDaGlsZC5kb20pIHtcbiAgICAgICAgICAgIG5leHRDaGlsZCA9IG5leHRDaGlsZHJlbltpXSA9IGNsb25lVk5vZGUobmV4dENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBwYXRjaChsYXN0Q2hpbGRyZW5baV0sIG5leHRDaGlsZCwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZyk7XG4gICAgfVxuICAgIGlmIChsYXN0Q2hpbGRyZW5MZW5ndGggPCBuZXh0Q2hpbGRyZW5MZW5ndGgpIHtcbiAgICAgICAgZm9yIChpID0gY29tbW9uTGVuZ3RoOyBpIDwgbmV4dENoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBuZXh0Q2hpbGQkMSA9IG5leHRDaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGlmIChuZXh0Q2hpbGQkMS5kb20pIHtcbiAgICAgICAgICAgICAgICBuZXh0Q2hpbGQkMSA9IG5leHRDaGlsZHJlbltpXSA9IGNsb25lVk5vZGUobmV4dENoaWxkJDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXBwZW5kQ2hpbGQoZG9tLCBtb3VudChuZXh0Q2hpbGQkMSwgbnVsbCwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRykpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKG5leHRDaGlsZHJlbkxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZW1vdmVBbGxDaGlsZHJlbihkb20sIGxhc3RDaGlsZHJlbiwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGxhc3RDaGlsZHJlbkxlbmd0aCA+IG5leHRDaGlsZHJlbkxlbmd0aCkge1xuICAgICAgICBmb3IgKGkgPSBjb21tb25MZW5ndGg7IGkgPCBsYXN0Q2hpbGRyZW5MZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdW5tb3VudChsYXN0Q2hpbGRyZW5baV0sIGRvbSwgbGlmZWN5Y2xlLCBmYWxzZSwgaXNSZWN5Y2xpbmcpO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gcGF0Y2hLZXllZENoaWxkcmVuKGEsIGIsIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpIHtcbiAgICB2YXIgYUxlbmd0aCA9IGEubGVuZ3RoO1xuICAgIHZhciBiTGVuZ3RoID0gYi5sZW5ndGg7XG4gICAgdmFyIGFFbmQgPSBhTGVuZ3RoIC0gMTtcbiAgICB2YXIgYkVuZCA9IGJMZW5ndGggLSAxO1xuICAgIHZhciBhU3RhcnQgPSAwO1xuICAgIHZhciBiU3RhcnQgPSAwO1xuICAgIHZhciBpO1xuICAgIHZhciBqO1xuICAgIHZhciBhTm9kZTtcbiAgICB2YXIgYk5vZGU7XG4gICAgdmFyIG5leHROb2RlO1xuICAgIHZhciBuZXh0UG9zO1xuICAgIHZhciBub2RlO1xuICAgIGlmIChhTGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGlmIChiTGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICBtb3VudEFycmF5Q2hpbGRyZW4oYiwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGVsc2UgaWYgKGJMZW5ndGggPT09IDApIHtcbiAgICAgICAgcmVtb3ZlQWxsQ2hpbGRyZW4oZG9tLCBhLCBsaWZlY3ljbGUsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgYVN0YXJ0Tm9kZSA9IGFbYVN0YXJ0XTtcbiAgICB2YXIgYlN0YXJ0Tm9kZSA9IGJbYlN0YXJ0XTtcbiAgICB2YXIgYUVuZE5vZGUgPSBhW2FFbmRdO1xuICAgIHZhciBiRW5kTm9kZSA9IGJbYkVuZF07XG4gICAgaWYgKGJTdGFydE5vZGUuZG9tKSB7XG4gICAgICAgIGJbYlN0YXJ0XSA9IGJTdGFydE5vZGUgPSBjbG9uZVZOb2RlKGJTdGFydE5vZGUpO1xuICAgIH1cbiAgICBpZiAoYkVuZE5vZGUuZG9tKSB7XG4gICAgICAgIGJbYkVuZF0gPSBiRW5kTm9kZSA9IGNsb25lVk5vZGUoYkVuZE5vZGUpO1xuICAgIH1cbiAgICAvLyBTdGVwIDFcbiAgICAvKiBlc2xpbnQgbm8tY29uc3RhbnQtY29uZGl0aW9uOiAwICovXG4gICAgb3V0ZXI6IHdoaWxlICh0cnVlKSB7XG4gICAgICAgIC8vIFN5bmMgbm9kZXMgd2l0aCB0aGUgc2FtZSBrZXkgYXQgdGhlIGJlZ2lubmluZy5cbiAgICAgICAgd2hpbGUgKGFTdGFydE5vZGUua2V5ID09PSBiU3RhcnROb2RlLmtleSkge1xuICAgICAgICAgICAgcGF0Y2goYVN0YXJ0Tm9kZSwgYlN0YXJ0Tm9kZSwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICBhU3RhcnQrKztcbiAgICAgICAgICAgIGJTdGFydCsrO1xuICAgICAgICAgICAgaWYgKGFTdGFydCA+IGFFbmQgfHwgYlN0YXJ0ID4gYkVuZCkge1xuICAgICAgICAgICAgICAgIGJyZWFrIG91dGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYVN0YXJ0Tm9kZSA9IGFbYVN0YXJ0XTtcbiAgICAgICAgICAgIGJTdGFydE5vZGUgPSBiW2JTdGFydF07XG4gICAgICAgICAgICBpZiAoYlN0YXJ0Tm9kZS5kb20pIHtcbiAgICAgICAgICAgICAgICBiW2JTdGFydF0gPSBiU3RhcnROb2RlID0gY2xvbmVWTm9kZShiU3RhcnROb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBTeW5jIG5vZGVzIHdpdGggdGhlIHNhbWUga2V5IGF0IHRoZSBlbmQuXG4gICAgICAgIHdoaWxlIChhRW5kTm9kZS5rZXkgPT09IGJFbmROb2RlLmtleSkge1xuICAgICAgICAgICAgcGF0Y2goYUVuZE5vZGUsIGJFbmROb2RlLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgIGFFbmQtLTtcbiAgICAgICAgICAgIGJFbmQtLTtcbiAgICAgICAgICAgIGlmIChhU3RhcnQgPiBhRW5kIHx8IGJTdGFydCA+IGJFbmQpIHtcbiAgICAgICAgICAgICAgICBicmVhayBvdXRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFFbmROb2RlID0gYVthRW5kXTtcbiAgICAgICAgICAgIGJFbmROb2RlID0gYltiRW5kXTtcbiAgICAgICAgICAgIGlmIChiRW5kTm9kZS5kb20pIHtcbiAgICAgICAgICAgICAgICBiW2JFbmRdID0gYkVuZE5vZGUgPSBjbG9uZVZOb2RlKGJFbmROb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBNb3ZlIGFuZCBzeW5jIG5vZGVzIGZyb20gcmlnaHQgdG8gbGVmdC5cbiAgICAgICAgaWYgKGFFbmROb2RlLmtleSA9PT0gYlN0YXJ0Tm9kZS5rZXkpIHtcbiAgICAgICAgICAgIHBhdGNoKGFFbmROb2RlLCBiU3RhcnROb2RlLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgIGluc2VydE9yQXBwZW5kKGRvbSwgYlN0YXJ0Tm9kZS5kb20sIGFTdGFydE5vZGUuZG9tKTtcbiAgICAgICAgICAgIGFFbmQtLTtcbiAgICAgICAgICAgIGJTdGFydCsrO1xuICAgICAgICAgICAgYUVuZE5vZGUgPSBhW2FFbmRdO1xuICAgICAgICAgICAgYlN0YXJ0Tm9kZSA9IGJbYlN0YXJ0XTtcbiAgICAgICAgICAgIGlmIChiU3RhcnROb2RlLmRvbSkge1xuICAgICAgICAgICAgICAgIGJbYlN0YXJ0XSA9IGJTdGFydE5vZGUgPSBjbG9uZVZOb2RlKGJTdGFydE5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTW92ZSBhbmQgc3luYyBub2RlcyBmcm9tIGxlZnQgdG8gcmlnaHQuXG4gICAgICAgIGlmIChhU3RhcnROb2RlLmtleSA9PT0gYkVuZE5vZGUua2V5KSB7XG4gICAgICAgICAgICBwYXRjaChhU3RhcnROb2RlLCBiRW5kTm9kZSwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICBuZXh0UG9zID0gYkVuZCArIDE7XG4gICAgICAgICAgICBuZXh0Tm9kZSA9IG5leHRQb3MgPCBiLmxlbmd0aCA/IGJbbmV4dFBvc10uZG9tIDogbnVsbDtcbiAgICAgICAgICAgIGluc2VydE9yQXBwZW5kKGRvbSwgYkVuZE5vZGUuZG9tLCBuZXh0Tm9kZSk7XG4gICAgICAgICAgICBhU3RhcnQrKztcbiAgICAgICAgICAgIGJFbmQtLTtcbiAgICAgICAgICAgIGFTdGFydE5vZGUgPSBhW2FTdGFydF07XG4gICAgICAgICAgICBiRW5kTm9kZSA9IGJbYkVuZF07XG4gICAgICAgICAgICBpZiAoYkVuZE5vZGUuZG9tKSB7XG4gICAgICAgICAgICAgICAgYltiRW5kXSA9IGJFbmROb2RlID0gY2xvbmVWTm9kZShiRW5kTm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKGFTdGFydCA+IGFFbmQpIHtcbiAgICAgICAgaWYgKGJTdGFydCA8PSBiRW5kKSB7XG4gICAgICAgICAgICBuZXh0UG9zID0gYkVuZCArIDE7XG4gICAgICAgICAgICBuZXh0Tm9kZSA9IG5leHRQb3MgPCBiLmxlbmd0aCA/IGJbbmV4dFBvc10uZG9tIDogbnVsbDtcbiAgICAgICAgICAgIHdoaWxlIChiU3RhcnQgPD0gYkVuZCkge1xuICAgICAgICAgICAgICAgIG5vZGUgPSBiW2JTdGFydF07XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUuZG9tKSB7XG4gICAgICAgICAgICAgICAgICAgIGJbYlN0YXJ0XSA9IG5vZGUgPSBjbG9uZVZOb2RlKG5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBiU3RhcnQrKztcbiAgICAgICAgICAgICAgICBpbnNlcnRPckFwcGVuZChkb20sIG1vdW50KG5vZGUsIG51bGwsIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpLCBuZXh0Tm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoYlN0YXJ0ID4gYkVuZCkge1xuICAgICAgICB3aGlsZSAoYVN0YXJ0IDw9IGFFbmQpIHtcbiAgICAgICAgICAgIHVubW91bnQoYVthU3RhcnQrK10sIGRvbSwgbGlmZWN5Y2xlLCBmYWxzZSwgaXNSZWN5Y2xpbmcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBhTGVuZ3RoID0gYUVuZCAtIGFTdGFydCArIDE7XG4gICAgICAgIGJMZW5ndGggPSBiRW5kIC0gYlN0YXJ0ICsgMTtcbiAgICAgICAgdmFyIGFOdWxsYWJsZSA9IGE7XG4gICAgICAgIHZhciBzb3VyY2VzID0gbmV3IEFycmF5KGJMZW5ndGgpO1xuICAgICAgICAvLyBNYXJrIGFsbCBub2RlcyBhcyBpbnNlcnRlZC5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGJMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgc291cmNlc1tpXSA9IC0xO1xuICAgICAgICB9XG4gICAgICAgIHZhciBtb3ZlZCA9IGZhbHNlO1xuICAgICAgICB2YXIgcG9zID0gMDtcbiAgICAgICAgdmFyIHBhdGNoZWQgPSAwO1xuICAgICAgICBpZiAoKGJMZW5ndGggPD0gNCkgfHwgKGFMZW5ndGggKiBiTGVuZ3RoIDw9IDE2KSkge1xuICAgICAgICAgICAgZm9yIChpID0gYVN0YXJ0OyBpIDw9IGFFbmQ7IGkrKykge1xuICAgICAgICAgICAgICAgIGFOb2RlID0gYVtpXTtcbiAgICAgICAgICAgICAgICBpZiAocGF0Y2hlZCA8IGJMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChqID0gYlN0YXJ0OyBqIDw9IGJFbmQ7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYk5vZGUgPSBiW2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFOb2RlLmtleSA9PT0gYk5vZGUua2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlc1tqIC0gYlN0YXJ0XSA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvcyA+IGopIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW92ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zID0gajtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJOb2RlLmRvbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiW2pdID0gYk5vZGUgPSBjbG9uZVZOb2RlKGJOb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0Y2goYU5vZGUsIGJOb2RlLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRjaGVkKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYU51bGxhYmxlW2ldID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBrZXlJbmRleCA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgIGZvciAoaSA9IGJTdGFydDsgaSA8PSBiRW5kOyBpKyspIHtcbiAgICAgICAgICAgICAgICBub2RlID0gYltpXTtcbiAgICAgICAgICAgICAgICBrZXlJbmRleC5zZXQobm9kZS5rZXksIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChpID0gYVN0YXJ0OyBpIDw9IGFFbmQ7IGkrKykge1xuICAgICAgICAgICAgICAgIGFOb2RlID0gYVtpXTtcbiAgICAgICAgICAgICAgICBpZiAocGF0Y2hlZCA8IGJMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgaiA9IGtleUluZGV4LmdldChhTm9kZS5rZXkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKGopKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiTm9kZSA9IGJbal07XG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VzW2ogLSBiU3RhcnRdID0gaTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb3MgPiBqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW92ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zID0gajtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiTm9kZS5kb20pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiW2pdID0gYk5vZGUgPSBjbG9uZVZOb2RlKGJOb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGNoKGFOb2RlLCBiTm9kZSwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRjaGVkKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBhTnVsbGFibGVbaV0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChhTGVuZ3RoID09PSBhLmxlbmd0aCAmJiBwYXRjaGVkID09PSAwKSB7XG4gICAgICAgICAgICByZW1vdmVBbGxDaGlsZHJlbihkb20sIGEsIGxpZmVjeWNsZSwgaXNSZWN5Y2xpbmcpO1xuICAgICAgICAgICAgd2hpbGUgKGJTdGFydCA8IGJMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBub2RlID0gYltiU3RhcnRdO1xuICAgICAgICAgICAgICAgIGlmIChub2RlLmRvbSkge1xuICAgICAgICAgICAgICAgICAgICBiW2JTdGFydF0gPSBub2RlID0gY2xvbmVWTm9kZShub2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYlN0YXJ0Kys7XG4gICAgICAgICAgICAgICAgaW5zZXJ0T3JBcHBlbmQoZG9tLCBtb3VudChub2RlLCBudWxsLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKSwgbnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpID0gYUxlbmd0aCAtIHBhdGNoZWQ7XG4gICAgICAgICAgICB3aGlsZSAoaSA+IDApIHtcbiAgICAgICAgICAgICAgICBhTm9kZSA9IGFOdWxsYWJsZVthU3RhcnQrK107XG4gICAgICAgICAgICAgICAgaWYgKCFpc051bGwoYU5vZGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHVubW91bnQoYU5vZGUsIGRvbSwgbGlmZWN5Y2xlLCB0cnVlLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobW92ZWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VxID0gbGlzX2FsZ29yaXRobShzb3VyY2VzKTtcbiAgICAgICAgICAgICAgICBqID0gc2VxLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gYkxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzb3VyY2VzW2ldID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zID0gaSArIGJTdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUgPSBiW3Bvc107XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5kb20pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiW3Bvc10gPSBub2RlID0gY2xvbmVWTm9kZShub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRQb3MgPSBwb3MgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dE5vZGUgPSBuZXh0UG9zIDwgYi5sZW5ndGggPyBiW25leHRQb3NdLmRvbSA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnRPckFwcGVuZChkb20sIG1vdW50KG5vZGUsIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyksIG5leHROb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqIDwgMCB8fCBpICE9PSBzZXFbal0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3MgPSBpICsgYlN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUgPSBiW3Bvc107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFBvcyA9IHBvcyArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dE5vZGUgPSBuZXh0UG9zIDwgYi5sZW5ndGggPyBiW25leHRQb3NdLmRvbSA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0T3JBcHBlbmQoZG9tLCBub2RlLmRvbSwgbmV4dE5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgai0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocGF0Y2hlZCAhPT0gYkxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IGJMZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc291cmNlc1tpXSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcyA9IGkgKyBiU3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlID0gYltwb3NdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUuZG9tKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYltwb3NdID0gbm9kZSA9IGNsb25lVk5vZGUobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0UG9zID0gcG9zICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHROb2RlID0gbmV4dFBvcyA8IGIubGVuZ3RoID8gYltuZXh0UG9zXS5kb20gOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0T3JBcHBlbmQoZG9tLCBtb3VudChub2RlLCBudWxsLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKSwgbmV4dE5vZGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuLy8gLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTG9uZ2VzdF9pbmNyZWFzaW5nX3N1YnNlcXVlbmNlXG5mdW5jdGlvbiBsaXNfYWxnb3JpdGhtKGEpIHtcbiAgICB2YXIgcCA9IGEuc2xpY2UoMCk7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHJlc3VsdC5wdXNoKDApO1xuICAgIHZhciBpO1xuICAgIHZhciBqO1xuICAgIHZhciB1O1xuICAgIHZhciB2O1xuICAgIHZhciBjO1xuICAgIGZvciAoaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChhW2ldID09PSAtMSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaiA9IHJlc3VsdFtyZXN1bHQubGVuZ3RoIC0gMV07XG4gICAgICAgIGlmIChhW2pdIDwgYVtpXSkge1xuICAgICAgICAgICAgcFtpXSA9IGo7XG4gICAgICAgICAgICByZXN1bHQucHVzaChpKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHUgPSAwO1xuICAgICAgICB2ID0gcmVzdWx0Lmxlbmd0aCAtIDE7XG4gICAgICAgIHdoaWxlICh1IDwgdikge1xuICAgICAgICAgICAgYyA9ICgodSArIHYpIC8gMikgfCAwO1xuICAgICAgICAgICAgaWYgKGFbcmVzdWx0W2NdXSA8IGFbaV0pIHtcbiAgICAgICAgICAgICAgICB1ID0gYyArIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2ID0gYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYVtpXSA8IGFbcmVzdWx0W3VdXSkge1xuICAgICAgICAgICAgaWYgKHUgPiAwKSB7XG4gICAgICAgICAgICAgICAgcFtpXSA9IHJlc3VsdFt1IC0gMV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHRbdV0gPSBpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHUgPSByZXN1bHQubGVuZ3RoO1xuICAgIHYgPSByZXN1bHRbdSAtIDFdO1xuICAgIHdoaWxlICh1LS0gPiAwKSB7XG4gICAgICAgIHJlc3VsdFt1XSA9IHY7XG4gICAgICAgIHYgPSBwW3ZdO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gcGF0Y2hQcm9wKHByb3AsIGxhc3RWYWx1ZSwgbmV4dFZhbHVlLCBkb20sIGlzU1ZHLCBsaWZlY3ljbGUpIHtcbiAgICBpZiAoc2tpcFByb3BzW3Byb3BdKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGJvb2xlYW5Qcm9wc1twcm9wXSkge1xuICAgICAgICBkb21bcHJvcF0gPSBuZXh0VmFsdWUgPyB0cnVlIDogZmFsc2U7XG4gICAgfVxuICAgIGVsc2UgaWYgKHN0cmljdFByb3BzW3Byb3BdKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IGlzTnVsbE9yVW5kZWYobmV4dFZhbHVlKSA/ICcnIDogbmV4dFZhbHVlO1xuICAgICAgICBpZiAoZG9tW3Byb3BdICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgZG9tW3Byb3BdID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAobGFzdFZhbHVlICE9PSBuZXh0VmFsdWUpIHtcbiAgICAgICAgaWYgKGlzQXR0ckFuRXZlbnQocHJvcCkpIHtcbiAgICAgICAgICAgIHBhdGNoRXZlbnQocHJvcCwgbGFzdFZhbHVlLCBuZXh0VmFsdWUsIGRvbSwgbGlmZWN5Y2xlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc051bGxPclVuZGVmKG5leHRWYWx1ZSkpIHtcbiAgICAgICAgICAgIGRvbS5yZW1vdmVBdHRyaWJ1dGUocHJvcCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocHJvcCA9PT0gJ2NsYXNzTmFtZScpIHtcbiAgICAgICAgICAgIGlmIChpc1NWRykge1xuICAgICAgICAgICAgICAgIGRvbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgbmV4dFZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvbS5jbGFzc05hbWUgPSBuZXh0VmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocHJvcCA9PT0gJ3N0eWxlJykge1xuICAgICAgICAgICAgcGF0Y2hTdHlsZShsYXN0VmFsdWUsIG5leHRWYWx1ZSwgZG9tKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwcm9wID09PSAnZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwnKSB7XG4gICAgICAgICAgICB2YXIgbGFzdEh0bWwgPSBsYXN0VmFsdWUgJiYgbGFzdFZhbHVlLl9faHRtbDtcbiAgICAgICAgICAgIHZhciBuZXh0SHRtbCA9IG5leHRWYWx1ZSAmJiBuZXh0VmFsdWUuX19odG1sO1xuICAgICAgICAgICAgaWYgKGxhc3RIdG1sICE9PSBuZXh0SHRtbCkge1xuICAgICAgICAgICAgICAgIGlmICghaXNOdWxsT3JVbmRlZihuZXh0SHRtbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9tLmlubmVySFRNTCA9IG5leHRIdG1sO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwcm9wICE9PSAnY2hpbGRyZW5UeXBlJyAmJiBwcm9wICE9PSAncmVmJyAmJiBwcm9wICE9PSAna2V5Jykge1xuICAgICAgICAgICAgdmFyIGRlaHlwaGVuUHJvcDtcbiAgICAgICAgICAgIGlmIChkZWh5cGhlblByb3BzW3Byb3BdKSB7XG4gICAgICAgICAgICAgICAgZGVoeXBoZW5Qcm9wID0gZGVoeXBoZW5Qcm9wc1twcm9wXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGlzU1ZHICYmIHByb3AubWF0Y2gocHJvYmFibHlLZWJhYlByb3BzKSkge1xuICAgICAgICAgICAgICAgIGRlaHlwaGVuUHJvcCA9IHByb3AucmVwbGFjZSgvKFthLXpdKShbQS1aXXwxKS9nLCBrZWJhYml6ZSk7XG4gICAgICAgICAgICAgICAgZGVoeXBoZW5Qcm9wc1twcm9wXSA9IGRlaHlwaGVuUHJvcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGRlaHlwaGVuUHJvcCA9IHByb3A7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbnMgPSBuYW1lc3BhY2VzW3Byb3BdO1xuICAgICAgICAgICAgaWYgKG5zKSB7XG4gICAgICAgICAgICAgICAgZG9tLnNldEF0dHJpYnV0ZU5TKG5zLCBkZWh5cGhlblByb3AsIG5leHRWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBkb20uc2V0QXR0cmlidXRlKGRlaHlwaGVuUHJvcCwgbmV4dFZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIHBhdGNoRXZlbnRzKGxhc3RFdmVudHMsIG5leHRFdmVudHMsIGRvbSwgbGlmZWN5Y2xlKSB7XG4gICAgbGFzdEV2ZW50cyA9IGxhc3RFdmVudHMgfHwgRU1QVFlfT0JKO1xuICAgIG5leHRFdmVudHMgPSBuZXh0RXZlbnRzIHx8IEVNUFRZX09CSjtcbiAgICBpZiAobmV4dEV2ZW50cyAhPT0gRU1QVFlfT0JKKSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gbmV4dEV2ZW50cykge1xuICAgICAgICAgICAgLy8gZG8gbm90IGFkZCBhIGhhc093blByb3BlcnR5IGNoZWNrIGhlcmUsIGl0IGFmZmVjdHMgcGVyZm9ybWFuY2VcbiAgICAgICAgICAgIHBhdGNoRXZlbnQobmFtZSwgbGFzdEV2ZW50c1tuYW1lXSwgbmV4dEV2ZW50c1tuYW1lXSwgZG9tLCBsaWZlY3ljbGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChsYXN0RXZlbnRzICE9PSBFTVBUWV9PQkopIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSQxIGluIGxhc3RFdmVudHMpIHtcbiAgICAgICAgICAgIC8vIGRvIG5vdCBhZGQgYSBoYXNPd25Qcm9wZXJ0eSBjaGVjayBoZXJlLCBpdCBhZmZlY3RzIHBlcmZvcm1hbmNlXG4gICAgICAgICAgICBpZiAoaXNOdWxsT3JVbmRlZihuZXh0RXZlbnRzW25hbWUkMV0pKSB7XG4gICAgICAgICAgICAgICAgcGF0Y2hFdmVudChuYW1lJDEsIGxhc3RFdmVudHNbbmFtZSQxXSwgbnVsbCwgZG9tLCBsaWZlY3ljbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gcGF0Y2hFdmVudChuYW1lLCBsYXN0VmFsdWUsIG5leHRWYWx1ZSwgZG9tLCBsaWZlY3ljbGUpIHtcbiAgICBpZiAobGFzdFZhbHVlICE9PSBuZXh0VmFsdWUpIHtcbiAgICAgICAgdmFyIG5hbWVMb3dlckNhc2UgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHZhciBkb21FdmVudCA9IGRvbVtuYW1lTG93ZXJDYXNlXTtcbiAgICAgICAgLy8gaWYgdGhlIGZ1bmN0aW9uIGlzIHdyYXBwZWQsIHRoYXQgbWVhbnMgaXQncyBiZWVuIGNvbnRyb2xsZWQgYnkgYSB3cmFwcGVyXG4gICAgICAgIGlmIChkb21FdmVudCAmJiBkb21FdmVudC53cmFwcGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlbGVnYXRlZFByb3BzW25hbWVdKSB7XG4gICAgICAgICAgICBoYW5kbGVFdmVudChuYW1lLCBsYXN0VmFsdWUsIG5leHRWYWx1ZSwgZG9tKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChsYXN0VmFsdWUgIT09IG5leHRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmICghaXNGdW5jdGlvbihuZXh0VmFsdWUpICYmICFpc051bGxPclVuZGVmKG5leHRWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxpbmtFdmVudCA9IG5leHRWYWx1ZS5ldmVudDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxpbmtFdmVudCAmJiBpc0Z1bmN0aW9uKGxpbmtFdmVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZG9tLl9kYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tW25hbWVMb3dlckNhc2VdID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlua0V2ZW50KGUuY3VycmVudFRhcmdldC5fZGF0YSwgZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbS5fZGF0YSA9IG5leHRWYWx1ZS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3dFcnJvcigoXCJhbiBldmVudCBvbiBhIFZOb2RlIFxcXCJcIiArIG5hbWUgKyBcIlxcXCIuIHdhcyBub3QgYSBmdW5jdGlvbiBvciBhIHZhbGlkIGxpbmtFdmVudC5cIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3dFcnJvcigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkb21bbmFtZUxvd2VyQ2FzZV0gPSBuZXh0VmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gcGF0Y2hQcm9wcyhsYXN0UHJvcHMsIG5leHRQcm9wcywgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKSB7XG4gICAgbGFzdFByb3BzID0gbGFzdFByb3BzIHx8IEVNUFRZX09CSjtcbiAgICBuZXh0UHJvcHMgPSBuZXh0UHJvcHMgfHwgRU1QVFlfT0JKO1xuICAgIGlmIChuZXh0UHJvcHMgIT09IEVNUFRZX09CSikge1xuICAgICAgICBmb3IgKHZhciBwcm9wIGluIG5leHRQcm9wcykge1xuICAgICAgICAgICAgLy8gZG8gbm90IGFkZCBhIGhhc093blByb3BlcnR5IGNoZWNrIGhlcmUsIGl0IGFmZmVjdHMgcGVyZm9ybWFuY2VcbiAgICAgICAgICAgIHZhciBuZXh0VmFsdWUgPSBuZXh0UHJvcHNbcHJvcF07XG4gICAgICAgICAgICB2YXIgbGFzdFZhbHVlID0gbGFzdFByb3BzW3Byb3BdO1xuICAgICAgICAgICAgaWYgKGlzTnVsbE9yVW5kZWYobmV4dFZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJlbW92ZVByb3AocHJvcCwgbmV4dFZhbHVlLCBkb20pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGF0Y2hQcm9wKHByb3AsIGxhc3RWYWx1ZSwgbmV4dFZhbHVlLCBkb20sIGlzU1ZHLCBsaWZlY3ljbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChsYXN0UHJvcHMgIT09IEVNUFRZX09CSikge1xuICAgICAgICBmb3IgKHZhciBwcm9wJDEgaW4gbGFzdFByb3BzKSB7XG4gICAgICAgICAgICAvLyBkbyBub3QgYWRkIGEgaGFzT3duUHJvcGVydHkgY2hlY2sgaGVyZSwgaXQgYWZmZWN0cyBwZXJmb3JtYW5jZVxuICAgICAgICAgICAgaWYgKGlzTnVsbE9yVW5kZWYobmV4dFByb3BzW3Byb3AkMV0pKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlUHJvcChwcm9wJDEsIGxhc3RQcm9wc1twcm9wJDFdLCBkb20pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuLy8gV2UgYXJlIGFzc3VtaW5nIGhlcmUgdGhhdCB3ZSBjb21lIGZyb20gcGF0Y2hQcm9wIHJvdXRpbmVcbi8vIC1uZXh0QXR0clZhbHVlIGNhbm5vdCBiZSBudWxsIG9yIHVuZGVmaW5lZFxuZnVuY3Rpb24gcGF0Y2hTdHlsZShsYXN0QXR0clZhbHVlLCBuZXh0QXR0clZhbHVlLCBkb20pIHtcbiAgICBpZiAoaXNTdHJpbmcobmV4dEF0dHJWYWx1ZSkpIHtcbiAgICAgICAgZG9tLnN0eWxlLmNzc1RleHQgPSBuZXh0QXR0clZhbHVlO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvciAodmFyIHN0eWxlIGluIG5leHRBdHRyVmFsdWUpIHtcbiAgICAgICAgLy8gZG8gbm90IGFkZCBhIGhhc093blByb3BlcnR5IGNoZWNrIGhlcmUsIGl0IGFmZmVjdHMgcGVyZm9ybWFuY2VcbiAgICAgICAgdmFyIHZhbHVlID0gbmV4dEF0dHJWYWx1ZVtzdHlsZV07XG4gICAgICAgIGlmIChpc051bWJlcih2YWx1ZSkgJiYgIWlzVW5pdGxlc3NOdW1iZXJbc3R5bGVdKSB7XG4gICAgICAgICAgICBkb20uc3R5bGVbc3R5bGVdID0gdmFsdWUgKyAncHgnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZG9tLnN0eWxlW3N0eWxlXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghaXNOdWxsT3JVbmRlZihsYXN0QXR0clZhbHVlKSkge1xuICAgICAgICBmb3IgKHZhciBzdHlsZSQxIGluIGxhc3RBdHRyVmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChpc051bGxPclVuZGVmKG5leHRBdHRyVmFsdWVbc3R5bGUkMV0pKSB7XG4gICAgICAgICAgICAgICAgZG9tLnN0eWxlW3N0eWxlJDFdID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiByZW1vdmVQcm9wKHByb3AsIGxhc3RWYWx1ZSwgZG9tKSB7XG4gICAgaWYgKHByb3AgPT09ICdjbGFzc05hbWUnKSB7XG4gICAgICAgIGRvbS5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHByb3AgPT09ICd2YWx1ZScpIHtcbiAgICAgICAgZG9tLnZhbHVlID0gJyc7XG4gICAgfVxuICAgIGVsc2UgaWYgKHByb3AgPT09ICdzdHlsZScpIHtcbiAgICAgICAgZG9tLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNBdHRyQW5FdmVudChwcm9wKSkge1xuICAgICAgICBoYW5kbGVFdmVudChuYW1lLCBsYXN0VmFsdWUsIG51bGwsIGRvbSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBkb20ucmVtb3ZlQXR0cmlidXRlKHByb3ApO1xuICAgIH1cbn1cblxudmFyIGNvbXBvbmVudFBvb2xzID0gbmV3IE1hcCgpO1xudmFyIGVsZW1lbnRQb29scyA9IG5ldyBNYXAoKTtcbmZ1bmN0aW9uIHJlY3ljbGVFbGVtZW50KHZOb2RlLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKSB7XG4gICAgdmFyIHRhZyA9IHZOb2RlLnR5cGU7XG4gICAgdmFyIGtleSA9IHZOb2RlLmtleTtcbiAgICB2YXIgcG9vbHMgPSBlbGVtZW50UG9vbHMuZ2V0KHRhZyk7XG4gICAgaWYgKCFpc1VuZGVmaW5lZChwb29scykpIHtcbiAgICAgICAgdmFyIHBvb2wgPSBrZXkgPT09IG51bGwgPyBwb29scy5ub25LZXllZCA6IHBvb2xzLmtleWVkLmdldChrZXkpO1xuICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKHBvb2wpKSB7XG4gICAgICAgICAgICB2YXIgcmVjeWNsZWRWTm9kZSA9IHBvb2wucG9wKCk7XG4gICAgICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKHJlY3ljbGVkVk5vZGUpKSB7XG4gICAgICAgICAgICAgICAgcGF0Y2hFbGVtZW50KHJlY3ljbGVkVk5vZGUsIHZOb2RlLCBudWxsLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCB0cnVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdk5vZGUuZG9tO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuZnVuY3Rpb24gcG9vbEVsZW1lbnQodk5vZGUpIHtcbiAgICB2YXIgdGFnID0gdk5vZGUudHlwZTtcbiAgICB2YXIga2V5ID0gdk5vZGUua2V5O1xuICAgIHZhciBwb29scyA9IGVsZW1lbnRQb29scy5nZXQodGFnKTtcbiAgICBpZiAoaXNVbmRlZmluZWQocG9vbHMpKSB7XG4gICAgICAgIHBvb2xzID0ge1xuICAgICAgICAgICAgbm9uS2V5ZWQ6IFtdLFxuICAgICAgICAgICAga2V5ZWQ6IG5ldyBNYXAoKVxuICAgICAgICB9O1xuICAgICAgICBlbGVtZW50UG9vbHMuc2V0KHRhZywgcG9vbHMpO1xuICAgIH1cbiAgICBpZiAoaXNOdWxsKGtleSkpIHtcbiAgICAgICAgcG9vbHMubm9uS2V5ZWQucHVzaCh2Tm9kZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgcG9vbCA9IHBvb2xzLmtleWVkLmdldChrZXkpO1xuICAgICAgICBpZiAoaXNVbmRlZmluZWQocG9vbCkpIHtcbiAgICAgICAgICAgIHBvb2wgPSBbXTtcbiAgICAgICAgICAgIHBvb2xzLmtleWVkLnNldChrZXksIHBvb2wpO1xuICAgICAgICB9XG4gICAgICAgIHBvb2wucHVzaCh2Tm9kZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gcmVjeWNsZUNvbXBvbmVudCh2Tm9kZSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRykge1xuICAgIHZhciB0eXBlID0gdk5vZGUudHlwZTtcbiAgICB2YXIga2V5ID0gdk5vZGUua2V5O1xuICAgIHZhciBwb29scyA9IGNvbXBvbmVudFBvb2xzLmdldCh0eXBlKTtcbiAgICBpZiAoIWlzVW5kZWZpbmVkKHBvb2xzKSkge1xuICAgICAgICB2YXIgcG9vbCA9IGtleSA9PT0gbnVsbCA/IHBvb2xzLm5vbktleWVkIDogcG9vbHMua2V5ZWQuZ2V0KGtleSk7XG4gICAgICAgIGlmICghaXNVbmRlZmluZWQocG9vbCkpIHtcbiAgICAgICAgICAgIHZhciByZWN5Y2xlZFZOb2RlID0gcG9vbC5wb3AoKTtcbiAgICAgICAgICAgIGlmICghaXNVbmRlZmluZWQocmVjeWNsZWRWTm9kZSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgZmxhZ3MgPSB2Tm9kZS5mbGFncztcbiAgICAgICAgICAgICAgICB2YXIgZmFpbGVkID0gcGF0Y2hDb21wb25lbnQocmVjeWNsZWRWTm9kZSwgdk5vZGUsIG51bGwsIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGZsYWdzICYgNCAvKiBDb21wb25lbnRDbGFzcyAqLywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKCFmYWlsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZOb2RlLmRvbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5mdW5jdGlvbiBwb29sQ29tcG9uZW50KHZOb2RlKSB7XG4gICAgdmFyIHR5cGUgPSB2Tm9kZS50eXBlO1xuICAgIHZhciBrZXkgPSB2Tm9kZS5rZXk7XG4gICAgdmFyIGhvb2tzID0gdk5vZGUucmVmO1xuICAgIHZhciBub25SZWN5Y2xlSG9va3MgPSBob29rcyAmJiAoaG9va3Mub25Db21wb25lbnRXaWxsTW91bnQgfHxcbiAgICAgICAgaG9va3Mub25Db21wb25lbnRXaWxsVW5tb3VudCB8fFxuICAgICAgICBob29rcy5vbkNvbXBvbmVudERpZE1vdW50IHx8XG4gICAgICAgIGhvb2tzLm9uQ29tcG9uZW50V2lsbFVwZGF0ZSB8fFxuICAgICAgICBob29rcy5vbkNvbXBvbmVudERpZFVwZGF0ZSk7XG4gICAgaWYgKG5vblJlY3ljbGVIb29rcykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBwb29scyA9IGNvbXBvbmVudFBvb2xzLmdldCh0eXBlKTtcbiAgICBpZiAoaXNVbmRlZmluZWQocG9vbHMpKSB7XG4gICAgICAgIHBvb2xzID0ge1xuICAgICAgICAgICAgbm9uS2V5ZWQ6IFtdLFxuICAgICAgICAgICAga2V5ZWQ6IG5ldyBNYXAoKVxuICAgICAgICB9O1xuICAgICAgICBjb21wb25lbnRQb29scy5zZXQodHlwZSwgcG9vbHMpO1xuICAgIH1cbiAgICBpZiAoaXNOdWxsKGtleSkpIHtcbiAgICAgICAgcG9vbHMubm9uS2V5ZWQucHVzaCh2Tm9kZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgcG9vbCA9IHBvb2xzLmtleWVkLmdldChrZXkpO1xuICAgICAgICBpZiAoaXNVbmRlZmluZWQocG9vbCkpIHtcbiAgICAgICAgICAgIHBvb2wgPSBbXTtcbiAgICAgICAgICAgIHBvb2xzLmtleWVkLnNldChrZXksIHBvb2wpO1xuICAgICAgICB9XG4gICAgICAgIHBvb2wucHVzaCh2Tm9kZSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBtb3VudCh2Tm9kZSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKSB7XG4gICAgdmFyIGZsYWdzID0gdk5vZGUuZmxhZ3M7XG4gICAgaWYgKGZsYWdzICYgMzk3MCAvKiBFbGVtZW50ICovKSB7XG4gICAgICAgIHJldHVybiBtb3VudEVsZW1lbnQodk5vZGUsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGZsYWdzICYgMjggLyogQ29tcG9uZW50ICovKSB7XG4gICAgICAgIHJldHVybiBtb3VudENvbXBvbmVudCh2Tm9kZSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBmbGFncyAmIDQgLyogQ29tcG9uZW50Q2xhc3MgKi8pO1xuICAgIH1cbiAgICBlbHNlIGlmIChmbGFncyAmIDQwOTYgLyogVm9pZCAqLykge1xuICAgICAgICByZXR1cm4gbW91bnRWb2lkKHZOb2RlLCBwYXJlbnREb20pO1xuICAgIH1cbiAgICBlbHNlIGlmIChmbGFncyAmIDEgLyogVGV4dCAqLykge1xuICAgICAgICByZXR1cm4gbW91bnRUZXh0KHZOb2RlLCBwYXJlbnREb20pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZOb2RlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIHRocm93RXJyb3IoKFwibW91bnQoKSByZWNlaXZlZCBhbiBvYmplY3QgdGhhdCdzIG5vdCBhIHZhbGlkIFZOb2RlLCB5b3Ugc2hvdWxkIHN0cmluZ2lmeSBpdCBmaXJzdC4gT2JqZWN0OiBcXFwiXCIgKyAoSlNPTi5zdHJpbmdpZnkodk5vZGUpKSArIFwiXFxcIi5cIikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3dFcnJvcigoXCJtb3VudCgpIGV4cGVjdHMgYSB2YWxpZCBWTm9kZSwgaW5zdGVhZCBpdCByZWNlaXZlZCBhbiBvYmplY3Qgd2l0aCB0aGUgdHlwZSBcXFwiXCIgKyAodHlwZW9mIHZOb2RlKSArIFwiXFxcIi5cIikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRocm93RXJyb3IoKTtcbiAgICB9XG59XG5mdW5jdGlvbiBtb3VudFRleHQodk5vZGUsIHBhcmVudERvbSkge1xuICAgIHZhciBkb20gPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2Tm9kZS5jaGlsZHJlbik7XG4gICAgdk5vZGUuZG9tID0gZG9tO1xuICAgIGlmIChwYXJlbnREb20pIHtcbiAgICAgICAgYXBwZW5kQ2hpbGQocGFyZW50RG9tLCBkb20pO1xuICAgIH1cbiAgICByZXR1cm4gZG9tO1xufVxuZnVuY3Rpb24gbW91bnRWb2lkKHZOb2RlLCBwYXJlbnREb20pIHtcbiAgICB2YXIgZG9tID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgIHZOb2RlLmRvbSA9IGRvbTtcbiAgICBpZiAocGFyZW50RG9tKSB7XG4gICAgICAgIGFwcGVuZENoaWxkKHBhcmVudERvbSwgZG9tKTtcbiAgICB9XG4gICAgcmV0dXJuIGRvbTtcbn1cbmZ1bmN0aW9uIG1vdW50RWxlbWVudCh2Tm9kZSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKSB7XG4gICAgaWYgKG9wdGlvbnMucmVjeWNsaW5nRW5hYmxlZCkge1xuICAgICAgICB2YXIgZG9tJDEgPSByZWN5Y2xlRWxlbWVudCh2Tm9kZSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyk7XG4gICAgICAgIGlmICghaXNOdWxsKGRvbSQxKSkge1xuICAgICAgICAgICAgaWYgKCFpc051bGwocGFyZW50RG9tKSkge1xuICAgICAgICAgICAgICAgIGFwcGVuZENoaWxkKHBhcmVudERvbSwgZG9tJDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRvbSQxO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciB0YWcgPSB2Tm9kZS50eXBlO1xuICAgIHZhciBmbGFncyA9IHZOb2RlLmZsYWdzO1xuICAgIGlmIChpc1NWRyB8fCAoZmxhZ3MgJiAxMjggLyogU3ZnRWxlbWVudCAqLykpIHtcbiAgICAgICAgaXNTVkcgPSB0cnVlO1xuICAgIH1cbiAgICB2YXIgZG9tID0gZG9jdW1lbnRDcmVhdGVFbGVtZW50KHRhZywgaXNTVkcpO1xuICAgIHZhciBjaGlsZHJlbiA9IHZOb2RlLmNoaWxkcmVuO1xuICAgIHZhciBwcm9wcyA9IHZOb2RlLnByb3BzO1xuICAgIHZhciBldmVudHMgPSB2Tm9kZS5ldmVudHM7XG4gICAgdmFyIHJlZiA9IHZOb2RlLnJlZjtcbiAgICB2Tm9kZS5kb20gPSBkb207XG4gICAgaWYgKCFpc051bGwoY2hpbGRyZW4pKSB7XG4gICAgICAgIGlmIChpc1N0cmluZ09yTnVtYmVyKGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgc2V0VGV4dENvbnRlbnQoZG9tLCBjaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgIG1vdW50QXJyYXlDaGlsZHJlbihjaGlsZHJlbiwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc1ZOb2RlKGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgbW91bnQoY2hpbGRyZW4sIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCEoZmxhZ3MgJiAyIC8qIEh0bWxFbGVtZW50ICovKSkge1xuICAgICAgICBwcm9jZXNzRWxlbWVudChmbGFncywgdk5vZGUsIGRvbSk7XG4gICAgfVxuICAgIGlmICghaXNOdWxsKHByb3BzKSkge1xuICAgICAgICBmb3IgKHZhciBwcm9wIGluIHByb3BzKSB7XG4gICAgICAgICAgICAvLyBkbyBub3QgYWRkIGEgaGFzT3duUHJvcGVydHkgY2hlY2sgaGVyZSwgaXQgYWZmZWN0cyBwZXJmb3JtYW5jZVxuICAgICAgICAgICAgcGF0Y2hQcm9wKHByb3AsIG51bGwsIHByb3BzW3Byb3BdLCBkb20sIGlzU1ZHLCBsaWZlY3ljbGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghaXNOdWxsKGV2ZW50cykpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiBldmVudHMpIHtcbiAgICAgICAgICAgIC8vIGRvIG5vdCBhZGQgYSBoYXNPd25Qcm9wZXJ0eSBjaGVjayBoZXJlLCBpdCBhZmZlY3RzIHBlcmZvcm1hbmNlXG4gICAgICAgICAgICBwYXRjaEV2ZW50KG5hbWUsIG51bGwsIGV2ZW50c1tuYW1lXSwgZG9tLCBsaWZlY3ljbGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghaXNOdWxsKHJlZikpIHtcbiAgICAgICAgbW91bnRSZWYoZG9tLCByZWYsIGxpZmVjeWNsZSk7XG4gICAgfVxuICAgIGlmICghaXNOdWxsKHBhcmVudERvbSkpIHtcbiAgICAgICAgYXBwZW5kQ2hpbGQocGFyZW50RG9tLCBkb20pO1xuICAgIH1cbiAgICByZXR1cm4gZG9tO1xufVxuZnVuY3Rpb24gbW91bnRBcnJheUNoaWxkcmVuKGNoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICBpZiAoIWlzSW52YWxpZChjaGlsZCkpIHtcbiAgICAgICAgICAgIGlmIChjaGlsZC5kb20pIHtcbiAgICAgICAgICAgICAgICBjaGlsZHJlbltpXSA9IGNoaWxkID0gY2xvbmVWTm9kZShjaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtb3VudChjaGlsZHJlbltpXSwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIG1vdW50Q29tcG9uZW50KHZOb2RlLCBwYXJlbnREb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzQ2xhc3MpIHtcbiAgICBpZiAob3B0aW9ucy5yZWN5Y2xpbmdFbmFibGVkKSB7XG4gICAgICAgIHZhciBkb20kMSA9IHJlY3ljbGVDb21wb25lbnQodk5vZGUsIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpO1xuICAgICAgICBpZiAoIWlzTnVsbChkb20kMSkpIHtcbiAgICAgICAgICAgIGlmICghaXNOdWxsKHBhcmVudERvbSkpIHtcbiAgICAgICAgICAgICAgICBhcHBlbmRDaGlsZChwYXJlbnREb20sIGRvbSQxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkb20kMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB2YXIgdHlwZSA9IHZOb2RlLnR5cGU7XG4gICAgdmFyIHByb3BzID0gdk5vZGUucHJvcHMgfHwgRU1QVFlfT0JKO1xuICAgIHZhciBkZWZhdWx0UHJvcHMgPSB0eXBlLmRlZmF1bHRQcm9wcztcbiAgICB2YXIgcmVmID0gdk5vZGUucmVmO1xuICAgIHZhciBkb207XG4gICAgaWYgKCFpc1VuZGVmaW5lZChkZWZhdWx0UHJvcHMpKSB7XG4gICAgICAgIGNvcHlQcm9wc1RvKGRlZmF1bHRQcm9wcywgcHJvcHMpO1xuICAgICAgICB2Tm9kZS5wcm9wcyA9IHByb3BzO1xuICAgIH1cbiAgICBpZiAoaXNDbGFzcykge1xuICAgICAgICB2YXIgaW5zdGFuY2UgPSBjcmVhdGVDbGFzc0NvbXBvbmVudEluc3RhbmNlKHZOb2RlLCB0eXBlLCBwcm9wcywgY29udGV4dCwgaXNTVkcpO1xuICAgICAgICAvLyBJZiBpbnN0YW5jZSBkb2VzIG5vdCBoYXZlIGNvbXBvbmVudFdpbGxVbm1vdW50IHNwZWNpZmllZCB3ZSBjYW4gZW5hYmxlIGZhc3RVbm1vdW50XG4gICAgICAgIHZhciBpbnB1dCA9IGluc3RhbmNlLl9sYXN0SW5wdXQ7XG4gICAgICAgIHZhciBwcmV2RmFzdFVubW91bnQgPSBsaWZlY3ljbGUuZmFzdFVubW91bnQ7XG4gICAgICAgIC8vIHdlIHN0b3JlIHRoZSBmYXN0VW5tb3VudCB2YWx1ZSwgYnV0IHdlIHNldCBpdCBiYWNrIHRvIHRydWUgb24gdGhlIGxpZmVjeWNsZVxuICAgICAgICAvLyB3ZSBkbyB0aGlzIHNvIHdlIGNhbiBkZXRlcm1pbmUgaWYgdGhlIGNvbXBvbmVudCByZW5kZXIgaGFzIGEgZmFzdFVubW91bnQgb3Igbm90XG4gICAgICAgIGxpZmVjeWNsZS5mYXN0VW5tb3VudCA9IHRydWU7XG4gICAgICAgIGluc3RhbmNlLl92Tm9kZSA9IHZOb2RlO1xuICAgICAgICB2Tm9kZS5kb20gPSBkb20gPSBtb3VudChpbnB1dCwgbnVsbCwgbGlmZWN5Y2xlLCBpbnN0YW5jZS5fY2hpbGRDb250ZXh0LCBpc1NWRyk7XG4gICAgICAgIC8vIHdlIG5vdyBjcmVhdGUgYSBsaWZlY3ljbGUgZm9yIHRoaXMgY29tcG9uZW50IGFuZCBzdG9yZSB0aGUgZmFzdFVubW91bnQgdmFsdWVcbiAgICAgICAgdmFyIHN1YkxpZmVjeWNsZSA9IGluc3RhbmNlLl9saWZlY3ljbGUgPSBuZXcgTGlmZWN5Y2xlKCk7XG4gICAgICAgIC8vIGNoaWxkcmVuIGxpZmVjeWNsZSBjYW4gZmFzdFVubW91bnQgaWYgaXRzZWxmIGRvZXMgbmVlZCB1bm1vdW50IGNhbGxiYWNrIGFuZCB3aXRoaW4gaXRzIGN5Y2xlIHRoZXJlIHdhcyBub25lXG4gICAgICAgIHN1YkxpZmVjeWNsZS5mYXN0VW5tb3VudCA9IGlzVW5kZWZpbmVkKGluc3RhbmNlLmNvbXBvbmVudFdpbGxVbm1vdW50KSAmJiBsaWZlY3ljbGUuZmFzdFVubW91bnQ7XG4gICAgICAgIC8vIGhpZ2hlciBsaWZlY3ljbGUgY2FuIGZhc3RVbm1vdW50IG9ubHkgaWYgcHJldmlvdXNseSBpdCB3YXMgYWJsZSB0byBhbmQgdGhpcyBjaGlsZHJlbiBkb2VzbnQgaGF2ZSBhbnlcbiAgICAgICAgbGlmZWN5Y2xlLmZhc3RVbm1vdW50ID0gcHJldkZhc3RVbm1vdW50ICYmIHN1YkxpZmVjeWNsZS5mYXN0VW5tb3VudDtcbiAgICAgICAgaWYgKCFpc051bGwocGFyZW50RG9tKSkge1xuICAgICAgICAgICAgYXBwZW5kQ2hpbGQocGFyZW50RG9tLCBkb20pO1xuICAgICAgICB9XG4gICAgICAgIG1vdW50Q2xhc3NDb21wb25lbnRDYWxsYmFja3Modk5vZGUsIHJlZiwgaW5zdGFuY2UsIGxpZmVjeWNsZSk7XG4gICAgICAgIG9wdGlvbnMuZmluZERPTU5vZGVFbmFibGVkICYmIGNvbXBvbmVudFRvRE9NTm9kZU1hcC5zZXQoaW5zdGFuY2UsIGRvbSk7XG4gICAgICAgIHZOb2RlLmNoaWxkcmVuID0gaW5zdGFuY2U7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgaW5wdXQkMSA9IGNyZWF0ZUZ1bmN0aW9uYWxDb21wb25lbnRJbnB1dCh2Tm9kZSwgdHlwZSwgcHJvcHMsIGNvbnRleHQpO1xuICAgICAgICB2Tm9kZS5kb20gPSBkb20gPSBtb3VudChpbnB1dCQxLCBudWxsLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICAgICAgdk5vZGUuY2hpbGRyZW4gPSBpbnB1dCQxO1xuICAgICAgICBtb3VudEZ1bmN0aW9uYWxDb21wb25lbnRDYWxsYmFja3MocmVmLCBkb20sIGxpZmVjeWNsZSk7XG4gICAgICAgIGlmICghaXNOdWxsKHBhcmVudERvbSkpIHtcbiAgICAgICAgICAgIGFwcGVuZENoaWxkKHBhcmVudERvbSwgZG9tKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZG9tO1xufVxuZnVuY3Rpb24gbW91bnRDbGFzc0NvbXBvbmVudENhbGxiYWNrcyh2Tm9kZSwgcmVmLCBpbnN0YW5jZSwgbGlmZWN5Y2xlKSB7XG4gICAgaWYgKHJlZikge1xuICAgICAgICBpZiAoaXNGdW5jdGlvbihyZWYpKSB7XG4gICAgICAgICAgICByZWYoaW5zdGFuY2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzU3RyaW5nT3JOdW1iZXIocmVmKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvd0Vycm9yKCdzdHJpbmcgXCJyZWZzXCIgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gSW5mZXJubyAxLjAuIFVzZSBjYWxsYmFjayBcInJlZnNcIiBpbnN0ZWFkLicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpc09iamVjdChyZWYpICYmICh2Tm9kZS5mbGFncyAmIDQgLyogQ29tcG9uZW50Q2xhc3MgKi8pKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93RXJyb3IoJ2Z1bmN0aW9uYWwgY29tcG9uZW50IGxpZmVjeWNsZSBldmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgb24gRVMyMDE1IGNsYXNzIGNvbXBvbmVudHMuJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvd0Vycm9yKChcImEgYmFkIHZhbHVlIGZvciBcXFwicmVmXFxcIiB3YXMgdXNlZCBvbiBjb21wb25lbnQ6IFxcXCJcIiArIChKU09OLnN0cmluZ2lmeShyZWYpKSArIFwiXFxcIlwiKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3dFcnJvcigpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciBjRE0gPSBpbnN0YW5jZS5jb21wb25lbnREaWRNb3VudDtcbiAgICB2YXIgYWZ0ZXJNb3VudCA9IG9wdGlvbnMuYWZ0ZXJNb3VudDtcbiAgICBpZiAoIWlzVW5kZWZpbmVkKGNETSkgfHwgIWlzTnVsbChhZnRlck1vdW50KSkge1xuICAgICAgICBsaWZlY3ljbGUuYWRkTGlzdGVuZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgYWZ0ZXJNb3VudCAmJiBhZnRlck1vdW50KHZOb2RlKTtcbiAgICAgICAgICAgIGNETSAmJiBpbnN0YW5jZS5jb21wb25lbnREaWRNb3VudCgpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5mdW5jdGlvbiBtb3VudEZ1bmN0aW9uYWxDb21wb25lbnRDYWxsYmFja3MocmVmLCBkb20sIGxpZmVjeWNsZSkge1xuICAgIGlmIChyZWYpIHtcbiAgICAgICAgaWYgKCFpc051bGxPclVuZGVmKHJlZi5vbkNvbXBvbmVudFdpbGxNb3VudCkpIHtcbiAgICAgICAgICAgIHJlZi5vbkNvbXBvbmVudFdpbGxNb3VudCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNOdWxsT3JVbmRlZihyZWYub25Db21wb25lbnREaWRNb3VudCkpIHtcbiAgICAgICAgICAgIGxpZmVjeWNsZS5hZGRMaXN0ZW5lcihmdW5jdGlvbiAoKSB7IHJldHVybiByZWYub25Db21wb25lbnREaWRNb3VudChkb20pOyB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzTnVsbE9yVW5kZWYocmVmLm9uQ29tcG9uZW50V2lsbFVubW91bnQpKSB7XG4gICAgICAgICAgICBsaWZlY3ljbGUuZmFzdFVubW91bnQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIG1vdW50UmVmKGRvbSwgdmFsdWUsIGxpZmVjeWNsZSkge1xuICAgIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgICAgICBsaWZlY3ljbGUuZmFzdFVubW91bnQgPSBmYWxzZTtcbiAgICAgICAgbGlmZWN5Y2xlLmFkZExpc3RlbmVyKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHZhbHVlKGRvbSk7IH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKGlzSW52YWxpZCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93RXJyb3IoJ3N0cmluZyBcInJlZnNcIiBhcmUgbm90IHN1cHBvcnRlZCBpbiBJbmZlcm5vIDEuMC4gVXNlIGNhbGxiYWNrIFwicmVmc1wiIGluc3RlYWQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3dFcnJvcigpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlQ2xhc3NDb21wb25lbnRJbnN0YW5jZSh2Tm9kZSwgQ29tcG9uZW50LCBwcm9wcywgY29udGV4dCwgaXNTVkcpIHtcbiAgICBpZiAoaXNVbmRlZmluZWQoY29udGV4dCkpIHtcbiAgICAgICAgY29udGV4dCA9IHt9O1xuICAgIH1cbiAgICB2YXIgaW5zdGFuY2UgPSBuZXcgQ29tcG9uZW50KHByb3BzLCBjb250ZXh0KTtcbiAgICBpbnN0YW5jZS5jb250ZXh0ID0gY29udGV4dDtcbiAgICBpZiAoaW5zdGFuY2UucHJvcHMgPT09IEVNUFRZX09CSikge1xuICAgICAgICBpbnN0YW5jZS5wcm9wcyA9IHByb3BzO1xuICAgIH1cbiAgICBpbnN0YW5jZS5fcGF0Y2ggPSBwYXRjaDtcbiAgICBpZiAob3B0aW9ucy5maW5kRE9NTm9kZUVuYWJsZWQpIHtcbiAgICAgICAgaW5zdGFuY2UuX2NvbXBvbmVudFRvRE9NTm9kZU1hcCA9IGNvbXBvbmVudFRvRE9NTm9kZU1hcDtcbiAgICB9XG4gICAgaW5zdGFuY2UuX3VubW91bnRlZCA9IGZhbHNlO1xuICAgIGluc3RhbmNlLl9wZW5kaW5nU2V0U3RhdGUgPSB0cnVlO1xuICAgIGluc3RhbmNlLl9pc1NWRyA9IGlzU1ZHO1xuICAgIGluc3RhbmNlLmNvbXBvbmVudFdpbGxNb3VudCgpO1xuICAgIHZhciBjaGlsZENvbnRleHQgPSBpbnN0YW5jZS5nZXRDaGlsZENvbnRleHQoKTtcbiAgICBpZiAoIWlzTnVsbE9yVW5kZWYoY2hpbGRDb250ZXh0KSkge1xuICAgICAgICBpbnN0YW5jZS5fY2hpbGRDb250ZXh0ID0gT2JqZWN0LmFzc2lnbih7fSwgY29udGV4dCwgY2hpbGRDb250ZXh0KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGluc3RhbmNlLl9jaGlsZENvbnRleHQgPSBjb250ZXh0O1xuICAgIH1cbiAgICBvcHRpb25zLmJlZm9yZVJlbmRlciAmJiBvcHRpb25zLmJlZm9yZVJlbmRlcihpbnN0YW5jZSk7XG4gICAgdmFyIGlucHV0ID0gaW5zdGFuY2UucmVuZGVyKHByb3BzLCBpbnN0YW5jZS5zdGF0ZSwgY29udGV4dCk7XG4gICAgb3B0aW9ucy5hZnRlclJlbmRlciAmJiBvcHRpb25zLmFmdGVyUmVuZGVyKGluc3RhbmNlKTtcbiAgICBpZiAoaXNBcnJheShpbnB1dCkpIHtcbiAgICAgICAgaWYgKFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvd0Vycm9yKCdhIHZhbGlkIEluZmVybm8gVk5vZGUgKG9yIG51bGwpIG11c3QgYmUgcmV0dXJuZWQgZnJvbSBhIGNvbXBvbmVudCByZW5kZXIuIFlvdSBtYXkgaGF2ZSByZXR1cm5lZCBhbiBhcnJheSBvciBhbiBpbnZhbGlkIG9iamVjdC4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvd0Vycm9yKCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzSW52YWxpZChpbnB1dCkpIHtcbiAgICAgICAgaW5wdXQgPSBjcmVhdGVWb2lkVk5vZGUoKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNTdHJpbmdPck51bWJlcihpbnB1dCkpIHtcbiAgICAgICAgaW5wdXQgPSBjcmVhdGVUZXh0Vk5vZGUoaW5wdXQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKGlucHV0LmRvbSkge1xuICAgICAgICAgICAgaW5wdXQgPSBjbG9uZVZOb2RlKGlucHV0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5wdXQuZmxhZ3MgJiAyOCAvKiBDb21wb25lbnQgKi8pIHtcbiAgICAgICAgICAgIC8vIGlmIHdlIGhhdmUgYW4gaW5wdXQgdGhhdCBpcyBhbHNvIGEgY29tcG9uZW50LCB3ZSBydW4gaW50byBhIHRyaWNreSBzaXR1YXRpb25cbiAgICAgICAgICAgIC8vIHdoZXJlIHRoZSByb290IHZOb2RlIG5lZWRzIHRvIGFsd2F5cyBoYXZlIHRoZSBjb3JyZWN0IERPTSBlbnRyeVxuICAgICAgICAgICAgLy8gc28gd2UgYnJlYWsgbW9ub21vcnBoaXNtIG9uIG91ciBpbnB1dCBhbmQgc3VwcGx5IGl0IG91ciB2Tm9kZSBhcyBwYXJlbnRWTm9kZVxuICAgICAgICAgICAgLy8gd2UgY2FuIG9wdGltaXNlIHRoaXMgaW4gdGhlIGZ1dHVyZSwgYnV0IHRoaXMgZ2V0cyB1cyBvdXQgb2YgYSBsb3Qgb2YgaXNzdWVzXG4gICAgICAgICAgICBpbnB1dC5wYXJlbnRWTm9kZSA9IHZOb2RlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGluc3RhbmNlLl9wZW5kaW5nU2V0U3RhdGUgPSBmYWxzZTtcbiAgICBpbnN0YW5jZS5fbGFzdElucHV0ID0gaW5wdXQ7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xufVxuZnVuY3Rpb24gcmVwbGFjZUxhc3RDaGlsZEFuZFVubW91bnQobGFzdElucHV0LCBuZXh0SW5wdXQsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpIHtcbiAgICByZXBsYWNlVk5vZGUocGFyZW50RG9tLCBtb3VudChuZXh0SW5wdXQsIG51bGwsIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpLCBsYXN0SW5wdXQsIGxpZmVjeWNsZSwgaXNSZWN5Y2xpbmcpO1xufVxuZnVuY3Rpb24gcmVwbGFjZVZOb2RlKHBhcmVudERvbSwgZG9tLCB2Tm9kZSwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZykge1xuICAgIHZhciBzaGFsbG93VW5tb3VudCA9IGZhbHNlO1xuICAgIC8vIHdlIGNhbm5vdCBjYWNoZSBub2RlVHlwZSBoZXJlIGFzIHZOb2RlIG1pZ2h0IGJlIHJlLWFzc2lnbmVkIGJlbG93XG4gICAgaWYgKHZOb2RlLmZsYWdzICYgMjggLyogQ29tcG9uZW50ICovKSB7XG4gICAgICAgIC8vIGlmIHdlIGFyZSBhY2Nlc3NpbmcgYSBzdGF0ZWZ1bCBvciBzdGF0ZWxlc3MgY29tcG9uZW50LCB3ZSB3YW50IHRvIGFjY2VzcyB0aGVpciBsYXN0IHJlbmRlcmVkIGlucHV0XG4gICAgICAgIC8vIGFjY2Vzc2luZyB0aGVpciBET00gbm9kZSBpcyBub3QgdXNlZnVsIHRvIHVzIGhlcmVcbiAgICAgICAgdW5tb3VudCh2Tm9kZSwgbnVsbCwgbGlmZWN5Y2xlLCBmYWxzZSwgaXNSZWN5Y2xpbmcpO1xuICAgICAgICB2Tm9kZSA9IHZOb2RlLmNoaWxkcmVuLl9sYXN0SW5wdXQgfHwgdk5vZGUuY2hpbGRyZW47XG4gICAgICAgIHNoYWxsb3dVbm1vdW50ID0gdHJ1ZTtcbiAgICB9XG4gICAgcmVwbGFjZUNoaWxkKHBhcmVudERvbSwgZG9tLCB2Tm9kZS5kb20pO1xuICAgIHVubW91bnQodk5vZGUsIG51bGwsIGxpZmVjeWNsZSwgZmFsc2UsIGlzUmVjeWNsaW5nKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUZ1bmN0aW9uYWxDb21wb25lbnRJbnB1dCh2Tm9kZSwgY29tcG9uZW50LCBwcm9wcywgY29udGV4dCkge1xuICAgIHZhciBpbnB1dCA9IGNvbXBvbmVudChwcm9wcywgY29udGV4dCk7XG4gICAgaWYgKGlzQXJyYXkoaW5wdXQpKSB7XG4gICAgICAgIGlmIChcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3dFcnJvcignYSB2YWxpZCBJbmZlcm5vIFZOb2RlIChvciBudWxsKSBtdXN0IGJlIHJldHVybmVkIGZyb20gYSBjb21wb25lbnQgcmVuZGVyLiBZb3UgbWF5IGhhdmUgcmV0dXJuZWQgYW4gYXJyYXkgb3IgYW4gaW52YWxpZCBvYmplY3QuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3dFcnJvcigpO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc0ludmFsaWQoaW5wdXQpKSB7XG4gICAgICAgIGlucHV0ID0gY3JlYXRlVm9pZFZOb2RlKCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzU3RyaW5nT3JOdW1iZXIoaW5wdXQpKSB7XG4gICAgICAgIGlucHV0ID0gY3JlYXRlVGV4dFZOb2RlKGlucHV0KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChpbnB1dC5kb20pIHtcbiAgICAgICAgICAgIGlucHV0ID0gY2xvbmVWTm9kZShpbnB1dCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlucHV0LmZsYWdzICYgMjggLyogQ29tcG9uZW50ICovKSB7XG4gICAgICAgICAgICAvLyBpZiB3ZSBoYXZlIGFuIGlucHV0IHRoYXQgaXMgYWxzbyBhIGNvbXBvbmVudCwgd2UgcnVuIGludG8gYSB0cmlja3kgc2l0dWF0aW9uXG4gICAgICAgICAgICAvLyB3aGVyZSB0aGUgcm9vdCB2Tm9kZSBuZWVkcyB0byBhbHdheXMgaGF2ZSB0aGUgY29ycmVjdCBET00gZW50cnlcbiAgICAgICAgICAgIC8vIHNvIHdlIGJyZWFrIG1vbm9tb3JwaGlzbSBvbiBvdXIgaW5wdXQgYW5kIHN1cHBseSBpdCBvdXIgdk5vZGUgYXMgcGFyZW50Vk5vZGVcbiAgICAgICAgICAgIC8vIHdlIGNhbiBvcHRpbWlzZSB0aGlzIGluIHRoZSBmdXR1cmUsIGJ1dCB0aGlzIGdldHMgdXMgb3V0IG9mIGEgbG90IG9mIGlzc3Vlc1xuICAgICAgICAgICAgaW5wdXQucGFyZW50Vk5vZGUgPSB2Tm9kZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaW5wdXQ7XG59XG5mdW5jdGlvbiBzZXRUZXh0Q29udGVudChkb20sIHRleHQpIHtcbiAgICBpZiAodGV4dCAhPT0gJycpIHtcbiAgICAgICAgZG9tLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGRvbS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJykpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHVwZGF0ZVRleHRDb250ZW50KGRvbSwgdGV4dCkge1xuICAgIGRvbS5maXJzdENoaWxkLm5vZGVWYWx1ZSA9IHRleHQ7XG59XG5mdW5jdGlvbiBhcHBlbmRDaGlsZChwYXJlbnREb20sIGRvbSkge1xuICAgIHBhcmVudERvbS5hcHBlbmRDaGlsZChkb20pO1xufVxuZnVuY3Rpb24gaW5zZXJ0T3JBcHBlbmQocGFyZW50RG9tLCBuZXdOb2RlLCBuZXh0Tm9kZSkge1xuICAgIGlmIChpc051bGxPclVuZGVmKG5leHROb2RlKSkge1xuICAgICAgICBhcHBlbmRDaGlsZChwYXJlbnREb20sIG5ld05vZGUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcGFyZW50RG9tLmluc2VydEJlZm9yZShuZXdOb2RlLCBuZXh0Tm9kZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gZG9jdW1lbnRDcmVhdGVFbGVtZW50KHRhZywgaXNTVkcpIHtcbiAgICBpZiAoaXNTVkcgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOUywgdGFnKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gICAgfVxufVxuZnVuY3Rpb24gcmVwbGFjZVdpdGhOZXdOb2RlKGxhc3ROb2RlLCBuZXh0Tm9kZSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZykge1xuICAgIHVubW91bnQobGFzdE5vZGUsIG51bGwsIGxpZmVjeWNsZSwgZmFsc2UsIGlzUmVjeWNsaW5nKTtcbiAgICB2YXIgZG9tID0gbW91bnQobmV4dE5vZGUsIG51bGwsIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpO1xuICAgIG5leHROb2RlLmRvbSA9IGRvbTtcbiAgICByZXBsYWNlQ2hpbGQocGFyZW50RG9tLCBkb20sIGxhc3ROb2RlLmRvbSk7XG59XG5mdW5jdGlvbiByZXBsYWNlQ2hpbGQocGFyZW50RG9tLCBuZXh0RG9tLCBsYXN0RG9tKSB7XG4gICAgaWYgKCFwYXJlbnREb20pIHtcbiAgICAgICAgcGFyZW50RG9tID0gbGFzdERvbS5wYXJlbnROb2RlO1xuICAgIH1cbiAgICBwYXJlbnREb20ucmVwbGFjZUNoaWxkKG5leHREb20sIGxhc3REb20pO1xufVxuZnVuY3Rpb24gcmVtb3ZlQ2hpbGQocGFyZW50RG9tLCBkb20pIHtcbiAgICBwYXJlbnREb20ucmVtb3ZlQ2hpbGQoZG9tKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZUFsbENoaWxkcmVuKGRvbSwgY2hpbGRyZW4sIGxpZmVjeWNsZSwgaXNSZWN5Y2xpbmcpIHtcbiAgICBkb20udGV4dENvbnRlbnQgPSAnJztcbiAgICBpZiAoIWxpZmVjeWNsZS5mYXN0VW5tb3VudCB8fCAobGlmZWN5Y2xlLmZhc3RVbm1vdW50ICYmIG9wdGlvbnMucmVjeWNsaW5nRW5hYmxlZCAmJiAhaXNSZWN5Y2xpbmcpKSB7XG4gICAgICAgIHJlbW92ZUNoaWxkcmVuKG51bGwsIGNoaWxkcmVuLCBsaWZlY3ljbGUsIGlzUmVjeWNsaW5nKTtcbiAgICB9XG59XG5mdW5jdGlvbiByZW1vdmVDaGlsZHJlbihkb20sIGNoaWxkcmVuLCBsaWZlY3ljbGUsIGlzUmVjeWNsaW5nKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgaWYgKCFpc0ludmFsaWQoY2hpbGQpKSB7XG4gICAgICAgICAgICB1bm1vdW50KGNoaWxkLCBkb20sIGxpZmVjeWNsZSwgdHJ1ZSwgaXNSZWN5Y2xpbmcpO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gaXNLZXllZChsYXN0Q2hpbGRyZW4sIG5leHRDaGlsZHJlbikge1xuICAgIHJldHVybiBuZXh0Q2hpbGRyZW4ubGVuZ3RoICYmICFpc051bGxPclVuZGVmKG5leHRDaGlsZHJlblswXSkgJiYgIWlzTnVsbE9yVW5kZWYobmV4dENoaWxkcmVuWzBdLmtleSlcbiAgICAgICAgJiYgbGFzdENoaWxkcmVuLmxlbmd0aCAmJiAhaXNOdWxsT3JVbmRlZihsYXN0Q2hpbGRyZW5bMF0pICYmICFpc051bGxPclVuZGVmKGxhc3RDaGlsZHJlblswXS5rZXkpO1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemVDaGlsZE5vZGVzKHBhcmVudERvbSkge1xuICAgIHZhciBkb20gPSBwYXJlbnREb20uZmlyc3RDaGlsZDtcbiAgICB3aGlsZSAoZG9tKSB7XG4gICAgICAgIGlmIChkb20ubm9kZVR5cGUgPT09IDgpIHtcbiAgICAgICAgICAgIGlmIChkb20uZGF0YSA9PT0gJyEnKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgICAgICAgICAgICAgIHBhcmVudERvbS5yZXBsYWNlQ2hpbGQocGxhY2Vob2xkZXIsIGRvbSk7XG4gICAgICAgICAgICAgICAgZG9tID0gZG9tLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGxhc3REb20gPSBkb20ucHJldmlvdXNTaWJsaW5nO1xuICAgICAgICAgICAgICAgIHBhcmVudERvbS5yZW1vdmVDaGlsZChkb20pO1xuICAgICAgICAgICAgICAgIGRvbSA9IGxhc3REb20gfHwgcGFyZW50RG9tLmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkb20gPSBkb20ubmV4dFNpYmxpbmc7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBoeWRyYXRlQ29tcG9uZW50KHZOb2RlLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzQ2xhc3MpIHtcbiAgICB2YXIgdHlwZSA9IHZOb2RlLnR5cGU7XG4gICAgdmFyIHByb3BzID0gdk5vZGUucHJvcHMgfHwgRU1QVFlfT0JKO1xuICAgIHZhciByZWYgPSB2Tm9kZS5yZWY7XG4gICAgdk5vZGUuZG9tID0gZG9tO1xuICAgIGlmIChpc0NsYXNzKSB7XG4gICAgICAgIHZhciBfaXNTVkcgPSBkb20ubmFtZXNwYWNlVVJJID09PSBzdmdOUztcbiAgICAgICAgdmFyIGRlZmF1bHRQcm9wcyA9IHR5cGUuZGVmYXVsdFByb3BzO1xuICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKGRlZmF1bHRQcm9wcykpIHtcbiAgICAgICAgICAgIGNvcHlQcm9wc1RvKGRlZmF1bHRQcm9wcywgcHJvcHMpO1xuICAgICAgICAgICAgdk5vZGUucHJvcHMgPSBwcm9wcztcbiAgICAgICAgfVxuICAgICAgICB2YXIgaW5zdGFuY2UgPSBjcmVhdGVDbGFzc0NvbXBvbmVudEluc3RhbmNlKHZOb2RlLCB0eXBlLCBwcm9wcywgY29udGV4dCwgX2lzU1ZHKTtcbiAgICAgICAgLy8gSWYgaW5zdGFuY2UgZG9lcyBub3QgaGF2ZSBjb21wb25lbnRXaWxsVW5tb3VudCBzcGVjaWZpZWQgd2UgY2FuIGVuYWJsZSBmYXN0VW5tb3VudFxuICAgICAgICB2YXIgcHJldkZhc3RVbm1vdW50ID0gbGlmZWN5Y2xlLmZhc3RVbm1vdW50O1xuICAgICAgICB2YXIgaW5wdXQgPSBpbnN0YW5jZS5fbGFzdElucHV0O1xuICAgICAgICAvLyB3ZSBzdG9yZSB0aGUgZmFzdFVubW91bnQgdmFsdWUsIGJ1dCB3ZSBzZXQgaXQgYmFjayB0byB0cnVlIG9uIHRoZSBsaWZlY3ljbGVcbiAgICAgICAgLy8gd2UgZG8gdGhpcyBzbyB3ZSBjYW4gZGV0ZXJtaW5lIGlmIHRoZSBjb21wb25lbnQgcmVuZGVyIGhhcyBhIGZhc3RVbm1vdW50IG9yIG5vdFxuICAgICAgICBsaWZlY3ljbGUuZmFzdFVubW91bnQgPSB0cnVlO1xuICAgICAgICBpbnN0YW5jZS5fdkNvbXBvbmVudCA9IHZOb2RlO1xuICAgICAgICBpbnN0YW5jZS5fdk5vZGUgPSB2Tm9kZTtcbiAgICAgICAgaHlkcmF0ZShpbnB1dCwgZG9tLCBsaWZlY3ljbGUsIGluc3RhbmNlLl9jaGlsZENvbnRleHQsIF9pc1NWRyk7XG4gICAgICAgIC8vIHdlIG5vdyBjcmVhdGUgYSBsaWZlY3ljbGUgZm9yIHRoaXMgY29tcG9uZW50IGFuZCBzdG9yZSB0aGUgZmFzdFVubW91bnQgdmFsdWVcbiAgICAgICAgdmFyIHN1YkxpZmVjeWNsZSA9IGluc3RhbmNlLl9saWZlY3ljbGUgPSBuZXcgTGlmZWN5Y2xlKCk7XG4gICAgICAgIC8vIGNoaWxkcmVuIGxpZmVjeWNsZSBjYW4gZmFzdFVubW91bnQgaWYgaXRzZWxmIGRvZXMgbmVlZCB1bm1vdW50IGNhbGxiYWNrIGFuZCB3aXRoaW4gaXRzIGN5Y2xlIHRoZXJlIHdhcyBub25lXG4gICAgICAgIHN1YkxpZmVjeWNsZS5mYXN0VW5tb3VudCA9IGlzVW5kZWZpbmVkKGluc3RhbmNlLmNvbXBvbmVudFdpbGxVbm1vdW50KSAmJiBsaWZlY3ljbGUuZmFzdFVubW91bnQ7XG4gICAgICAgIC8vIGhpZ2hlciBsaWZlY3ljbGUgY2FuIGZhc3RVbm1vdW50IG9ubHkgaWYgcHJldmlvdXNseSBpdCB3YXMgYWJsZSB0byBhbmQgdGhpcyBjaGlsZHJlbiBkb2VzbnQgaGF2ZSBhbnlcbiAgICAgICAgbGlmZWN5Y2xlLmZhc3RVbm1vdW50ID0gcHJldkZhc3RVbm1vdW50ICYmIHN1YkxpZmVjeWNsZS5mYXN0VW5tb3VudDtcbiAgICAgICAgbW91bnRDbGFzc0NvbXBvbmVudENhbGxiYWNrcyh2Tm9kZSwgcmVmLCBpbnN0YW5jZSwgbGlmZWN5Y2xlKTtcbiAgICAgICAgb3B0aW9ucy5maW5kRE9NTm9kZUVuYWJsZWQgJiYgY29tcG9uZW50VG9ET01Ob2RlTWFwLnNldChpbnN0YW5jZSwgZG9tKTtcbiAgICAgICAgdk5vZGUuY2hpbGRyZW4gPSBpbnN0YW5jZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBpbnB1dCQxID0gY3JlYXRlRnVuY3Rpb25hbENvbXBvbmVudElucHV0KHZOb2RlLCB0eXBlLCBwcm9wcywgY29udGV4dCk7XG4gICAgICAgIGh5ZHJhdGUoaW5wdXQkMSwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICAgICAgdk5vZGUuY2hpbGRyZW4gPSBpbnB1dCQxO1xuICAgICAgICB2Tm9kZS5kb20gPSBpbnB1dCQxLmRvbTtcbiAgICAgICAgbW91bnRGdW5jdGlvbmFsQ29tcG9uZW50Q2FsbGJhY2tzKHJlZiwgZG9tLCBsaWZlY3ljbGUpO1xuICAgIH1cbiAgICByZXR1cm4gZG9tO1xufVxuZnVuY3Rpb24gaHlkcmF0ZUVsZW1lbnQodk5vZGUsIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRykge1xuICAgIHZhciB0YWcgPSB2Tm9kZS50eXBlO1xuICAgIHZhciBjaGlsZHJlbiA9IHZOb2RlLmNoaWxkcmVuO1xuICAgIHZhciBwcm9wcyA9IHZOb2RlLnByb3BzO1xuICAgIHZhciBldmVudHMgPSB2Tm9kZS5ldmVudHM7XG4gICAgdmFyIGZsYWdzID0gdk5vZGUuZmxhZ3M7XG4gICAgdmFyIHJlZiA9IHZOb2RlLnJlZjtcbiAgICBpZiAoaXNTVkcgfHwgKGZsYWdzICYgMTI4IC8qIFN2Z0VsZW1lbnQgKi8pKSB7XG4gICAgICAgIGlzU1ZHID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGRvbS5ub2RlVHlwZSAhPT0gMSB8fCBkb20udGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PSB0YWcpIHtcbiAgICAgICAgdmFyIG5ld0RvbSA9IG1vdW50RWxlbWVudCh2Tm9kZSwgbnVsbCwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyk7XG4gICAgICAgIHZOb2RlLmRvbSA9IG5ld0RvbTtcbiAgICAgICAgcmVwbGFjZUNoaWxkKGRvbS5wYXJlbnROb2RlLCBuZXdEb20sIGRvbSk7XG4gICAgICAgIHJldHVybiBuZXdEb207XG4gICAgfVxuICAgIHZOb2RlLmRvbSA9IGRvbTtcbiAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgICAgaHlkcmF0ZUNoaWxkcmVuKGNoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpO1xuICAgIH1cbiAgICBpZiAoIShmbGFncyAmIDIgLyogSHRtbEVsZW1lbnQgKi8pKSB7XG4gICAgICAgIHByb2Nlc3NFbGVtZW50KGZsYWdzLCB2Tm9kZSwgZG9tKTtcbiAgICB9XG4gICAgaWYgKHByb3BzKSB7XG4gICAgICAgIGZvciAodmFyIHByb3AgaW4gcHJvcHMpIHtcbiAgICAgICAgICAgIHBhdGNoUHJvcChwcm9wLCBudWxsLCBwcm9wc1twcm9wXSwgZG9tLCBpc1NWRywgbGlmZWN5Y2xlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZXZlbnRzKSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gZXZlbnRzKSB7XG4gICAgICAgICAgICBwYXRjaEV2ZW50KG5hbWUsIG51bGwsIGV2ZW50c1tuYW1lXSwgZG9tLCBsaWZlY3ljbGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChyZWYpIHtcbiAgICAgICAgbW91bnRSZWYoZG9tLCByZWYsIGxpZmVjeWNsZSk7XG4gICAgfVxuICAgIHJldHVybiBkb207XG59XG5mdW5jdGlvbiBoeWRyYXRlQ2hpbGRyZW4oY2hpbGRyZW4sIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRykge1xuICAgIG5vcm1hbGl6ZUNoaWxkTm9kZXMocGFyZW50RG9tKTtcbiAgICB2YXIgZG9tID0gcGFyZW50RG9tLmZpcnN0Q2hpbGQ7XG4gICAgaWYgKGlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgaWYgKGlzT2JqZWN0KGNoaWxkKSAmJiAhaXNOdWxsKGNoaWxkKSkge1xuICAgICAgICAgICAgICAgIGlmIChkb20pIHtcbiAgICAgICAgICAgICAgICAgICAgZG9tID0gaHlkcmF0ZShjaGlsZCwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICAgICAgICAgICAgICAgICAgZG9tID0gZG9tLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbW91bnQoY2hpbGQsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzU3RyaW5nT3JOdW1iZXIoY2hpbGRyZW4pKSB7XG4gICAgICAgIGlmIChkb20gJiYgZG9tLm5vZGVUeXBlID09PSAzKSB7XG4gICAgICAgICAgICBpZiAoZG9tLm5vZGVWYWx1ZSAhPT0gY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICBkb20ubm9kZVZhbHVlID0gY2hpbGRyZW47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIHBhcmVudERvbS50ZXh0Q29udGVudCA9IGNoaWxkcmVuO1xuICAgICAgICB9XG4gICAgICAgIGRvbSA9IGRvbS5uZXh0U2libGluZztcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNPYmplY3QoY2hpbGRyZW4pKSB7XG4gICAgICAgIGh5ZHJhdGUoY2hpbGRyZW4sIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyk7XG4gICAgICAgIGRvbSA9IGRvbS5uZXh0U2libGluZztcbiAgICB9XG4gICAgLy8gY2xlYXIgYW55IG90aGVyIERPTSBub2RlcywgdGhlcmUgc2hvdWxkIGJlIG9ubHkgYSBzaW5nbGUgZW50cnkgZm9yIHRoZSByb290XG4gICAgd2hpbGUgKGRvbSkge1xuICAgICAgICBwYXJlbnREb20ucmVtb3ZlQ2hpbGQoZG9tKTtcbiAgICAgICAgZG9tID0gZG9tLm5leHRTaWJsaW5nO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGh5ZHJhdGVUZXh0KHZOb2RlLCBkb20pIHtcbiAgICBpZiAoZG9tLm5vZGVUeXBlICE9PSAzKSB7XG4gICAgICAgIHZhciBuZXdEb20gPSBtb3VudFRleHQodk5vZGUsIG51bGwpO1xuICAgICAgICB2Tm9kZS5kb20gPSBuZXdEb207XG4gICAgICAgIHJlcGxhY2VDaGlsZChkb20ucGFyZW50Tm9kZSwgbmV3RG9tLCBkb20pO1xuICAgICAgICByZXR1cm4gbmV3RG9tO1xuICAgIH1cbiAgICB2YXIgdGV4dCA9IHZOb2RlLmNoaWxkcmVuO1xuICAgIGlmIChkb20ubm9kZVZhbHVlICE9PSB0ZXh0KSB7XG4gICAgICAgIGRvbS5ub2RlVmFsdWUgPSB0ZXh0O1xuICAgIH1cbiAgICB2Tm9kZS5kb20gPSBkb207XG4gICAgcmV0dXJuIGRvbTtcbn1cbmZ1bmN0aW9uIGh5ZHJhdGVWb2lkKHZOb2RlLCBkb20pIHtcbiAgICB2Tm9kZS5kb20gPSBkb207XG59XG5mdW5jdGlvbiBoeWRyYXRlKHZOb2RlLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpIHtcbiAgICBpZiAoXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKGlzSW52YWxpZChkb20pKSB7XG4gICAgICAgICAgICB0aHJvd0Vycm9yKFwiZmFpbGVkIHRvIGh5ZHJhdGUuIFRoZSBzZXJ2ZXItc2lkZSByZW5kZXIgZG9lc24ndCBtYXRjaCBjbGllbnQgc2lkZS5cIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIGZsYWdzID0gdk5vZGUuZmxhZ3M7XG4gICAgaWYgKGZsYWdzICYgMjggLyogQ29tcG9uZW50ICovKSB7XG4gICAgICAgIHJldHVybiBoeWRyYXRlQ29tcG9uZW50KHZOb2RlLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGZsYWdzICYgNCAvKiBDb21wb25lbnRDbGFzcyAqLyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGZsYWdzICYgMzk3MCAvKiBFbGVtZW50ICovKSB7XG4gICAgICAgIHJldHVybiBoeWRyYXRlRWxlbWVudCh2Tm9kZSwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZmxhZ3MgJiAxIC8qIFRleHQgKi8pIHtcbiAgICAgICAgcmV0dXJuIGh5ZHJhdGVUZXh0KHZOb2RlLCBkb20pO1xuICAgIH1cbiAgICBlbHNlIGlmIChmbGFncyAmIDQwOTYgLyogVm9pZCAqLykge1xuICAgICAgICByZXR1cm4gaHlkcmF0ZVZvaWQodk5vZGUsIGRvbSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAoXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93RXJyb3IoKFwiaHlkcmF0ZSgpIGV4cGVjdHMgYSB2YWxpZCBWTm9kZSwgaW5zdGVhZCBpdCByZWNlaXZlZCBhbiBvYmplY3Qgd2l0aCB0aGUgdHlwZSBcXFwiXCIgKyAodHlwZW9mIHZOb2RlKSArIFwiXFxcIi5cIikpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93RXJyb3IoKTtcbiAgICB9XG59XG5mdW5jdGlvbiBoeWRyYXRlUm9vdChpbnB1dCwgcGFyZW50RG9tLCBsaWZlY3ljbGUpIHtcbiAgICB2YXIgZG9tID0gcGFyZW50RG9tICYmIHBhcmVudERvbS5maXJzdENoaWxkO1xuICAgIGlmIChkb20pIHtcbiAgICAgICAgaHlkcmF0ZShpbnB1dCwgZG9tLCBsaWZlY3ljbGUsIHt9LCBmYWxzZSk7XG4gICAgICAgIGRvbSA9IHBhcmVudERvbS5maXJzdENoaWxkO1xuICAgICAgICAvLyBjbGVhciBhbnkgb3RoZXIgRE9NIG5vZGVzLCB0aGVyZSBzaG91bGQgYmUgb25seSBhIHNpbmdsZSBlbnRyeSBmb3IgdGhlIHJvb3RcbiAgICAgICAgd2hpbGUgKGRvbSA9IGRvbS5uZXh0U2libGluZykge1xuICAgICAgICAgICAgcGFyZW50RG9tLnJlbW92ZUNoaWxkKGRvbSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuLy8gcmF0aGVyIHRoYW4gdXNlIGEgTWFwLCBsaWtlIHdlIGRpZCBiZWZvcmUsIHdlIGNhbiB1c2UgYW4gYXJyYXkgaGVyZVxuLy8gZ2l2ZW4gdGhlcmUgc2hvdWxkbid0IGJlIFRIQVQgbWFueSByb290cyBvbiB0aGUgcGFnZSwgdGhlIGRpZmZlcmVuY2Vcbi8vIGluIHBlcmZvcm1hbmNlIGlzIGh1Z2U6IGh0dHBzOi8vZXNiZW5jaC5jb20vYmVuY2gvNTgwMmE2OTEzMzBhYjA5OTAwYTFhMmRhXG52YXIgcm9vdHMgPSBbXTtcbnZhciBjb21wb25lbnRUb0RPTU5vZGVNYXAgPSBuZXcgTWFwKCk7XG5vcHRpb25zLnJvb3RzID0gcm9vdHM7XG5mdW5jdGlvbiBmaW5kRE9NTm9kZShyZWYpIHtcbiAgICBpZiAoIW9wdGlvbnMuZmluZERPTU5vZGVFbmFibGVkKSB7XG4gICAgICAgIGlmIChcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3dFcnJvcignZmluZERPTU5vZGUoKSBoYXMgYmVlbiBkaXNhYmxlZCwgdXNlIEluZmVybm8ub3B0aW9ucy5maW5kRE9NTm9kZUVuYWJsZWQgPSB0cnVlOyBlbmFibGVkIGZpbmRET01Ob2RlKCkuIFdhcm5pbmcgdGhpcyBjYW4gc2lnbmlmaWNhbnRseSBpbXBhY3QgcGVyZm9ybWFuY2UhJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3dFcnJvcigpO1xuICAgIH1cbiAgICB2YXIgZG9tID0gcmVmICYmIHJlZi5ub2RlVHlwZSA/IHJlZiA6IG51bGw7XG4gICAgcmV0dXJuIGNvbXBvbmVudFRvRE9NTm9kZU1hcC5nZXQocmVmKSB8fCBkb207XG59XG5mdW5jdGlvbiBnZXRSb290KGRvbSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcm9vdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHJvb3QgPSByb290c1tpXTtcbiAgICAgICAgaWYgKHJvb3QuZG9tID09PSBkb20pIHtcbiAgICAgICAgICAgIHJldHVybiByb290O1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBzZXRSb290KGRvbSwgaW5wdXQsIGxpZmVjeWNsZSkge1xuICAgIHZhciByb290ID0ge1xuICAgICAgICBkb206IGRvbSxcbiAgICAgICAgaW5wdXQ6IGlucHV0LFxuICAgICAgICBsaWZlY3ljbGU6IGxpZmVjeWNsZVxuICAgIH07XG4gICAgcm9vdHMucHVzaChyb290KTtcbiAgICByZXR1cm4gcm9vdDtcbn1cbmZ1bmN0aW9uIHJlbW92ZVJvb3Qocm9vdCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcm9vdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHJvb3RzW2ldID09PSByb290KSB7XG4gICAgICAgICAgICByb290cy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG59XG52YXIgZG9jdW1lbnRCb2R5ID0gaXNCcm93c2VyID8gZG9jdW1lbnQuYm9keSA6IG51bGw7XG5mdW5jdGlvbiByZW5kZXIoaW5wdXQsIHBhcmVudERvbSkge1xuICAgIGlmIChkb2N1bWVudEJvZHkgPT09IHBhcmVudERvbSkge1xuICAgICAgICBpZiAoXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93RXJyb3IoJ3lvdSBjYW5ub3QgcmVuZGVyKCkgdG8gdGhlIFwiZG9jdW1lbnQuYm9keVwiLiBVc2UgYW4gZW1wdHkgZWxlbWVudCBhcyBhIGNvbnRhaW5lciBpbnN0ZWFkLicpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93RXJyb3IoKTtcbiAgICB9XG4gICAgaWYgKGlucHV0ID09PSBOT19PUCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciByb290ID0gZ2V0Um9vdChwYXJlbnREb20pO1xuICAgIGlmIChpc051bGwocm9vdCkpIHtcbiAgICAgICAgdmFyIGxpZmVjeWNsZSA9IG5ldyBMaWZlY3ljbGUoKTtcbiAgICAgICAgaWYgKCFpc0ludmFsaWQoaW5wdXQpKSB7XG4gICAgICAgICAgICBpZiAoaW5wdXQuZG9tKSB7XG4gICAgICAgICAgICAgICAgaW5wdXQgPSBjbG9uZVZOb2RlKGlucHV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghaHlkcmF0ZVJvb3QoaW5wdXQsIHBhcmVudERvbSwgbGlmZWN5Y2xlKSkge1xuICAgICAgICAgICAgICAgIG1vdW50KGlucHV0LCBwYXJlbnREb20sIGxpZmVjeWNsZSwge30sIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJvb3QgPSBzZXRSb290KHBhcmVudERvbSwgaW5wdXQsIGxpZmVjeWNsZSk7XG4gICAgICAgICAgICBsaWZlY3ljbGUudHJpZ2dlcigpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgbGlmZWN5Y2xlJDEgPSByb290LmxpZmVjeWNsZTtcbiAgICAgICAgbGlmZWN5Y2xlJDEubGlzdGVuZXJzID0gW107XG4gICAgICAgIGlmIChpc051bGxPclVuZGVmKGlucHV0KSkge1xuICAgICAgICAgICAgdW5tb3VudChyb290LmlucHV0LCBwYXJlbnREb20sIGxpZmVjeWNsZSQxLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICAgICAgcmVtb3ZlUm9vdChyb290KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChpbnB1dC5kb20pIHtcbiAgICAgICAgICAgICAgICBpbnB1dCA9IGNsb25lVk5vZGUoaW5wdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGF0Y2gocm9vdC5pbnB1dCwgaW5wdXQsIHBhcmVudERvbSwgbGlmZWN5Y2xlJDEsIHt9LCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGxpZmVjeWNsZSQxLnRyaWdnZXIoKTtcbiAgICAgICAgcm9vdC5pbnB1dCA9IGlucHV0O1xuICAgIH1cbiAgICBpZiAocm9vdCkge1xuICAgICAgICB2YXIgcm9vdElucHV0ID0gcm9vdC5pbnB1dDtcbiAgICAgICAgaWYgKHJvb3RJbnB1dCAmJiAocm9vdElucHV0LmZsYWdzICYgMjggLyogQ29tcG9uZW50ICovKSkge1xuICAgICAgICAgICAgcmV0dXJuIHJvb3RJbnB1dC5jaGlsZHJlbjtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIGNyZWF0ZVJlbmRlcmVyKF9wYXJlbnREb20pIHtcbiAgICB2YXIgcGFyZW50RG9tID0gX3BhcmVudERvbSB8fCBudWxsO1xuICAgIHJldHVybiBmdW5jdGlvbiByZW5kZXJlcihsYXN0SW5wdXQsIG5leHRJbnB1dCkge1xuICAgICAgICBpZiAoIXBhcmVudERvbSkge1xuICAgICAgICAgICAgcGFyZW50RG9tID0gbGFzdElucHV0O1xuICAgICAgICB9XG4gICAgICAgIHJlbmRlcihuZXh0SW5wdXQsIHBhcmVudERvbSk7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gbGlua0V2ZW50KGRhdGEsIGV2ZW50KSB7XG4gICAgcmV0dXJuIHsgZGF0YTogZGF0YSwgZXZlbnQ6IGV2ZW50IH07XG59XG5cbmlmIChcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJykge1xuXHRPYmplY3QuZnJlZXplKEVNUFRZX09CSik7XG5cdHZhciB0ZXN0RnVuYyA9IGZ1bmN0aW9uIHRlc3RGbigpIHt9O1xuXHR3YXJuaW5nKFxuXHRcdCh0ZXN0RnVuYy5uYW1lIHx8IHRlc3RGdW5jLnRvU3RyaW5nKCkpLmluZGV4T2YoJ3Rlc3RGbicpICE9PSAtMSxcblx0XHQnSXQgbG9va3MgbGlrZSB5b3VcXCdyZSB1c2luZyBhIG1pbmlmaWVkIGNvcHkgb2YgdGhlIGRldmVsb3BtZW50IGJ1aWxkICcgK1xuXHRcdCdvZiBJbmZlcm5vLiBXaGVuIGRlcGxveWluZyBJbmZlcm5vIGFwcHMgdG8gcHJvZHVjdGlvbiwgbWFrZSBzdXJlIHRvIHVzZSAnICtcblx0XHQndGhlIHByb2R1Y3Rpb24gYnVpbGQgd2hpY2ggc2tpcHMgZGV2ZWxvcG1lbnQgd2FybmluZ3MgYW5kIGlzIGZhc3Rlci4gJyArXG5cdFx0J1NlZSBodHRwOi8vaW5mZXJub2pzLm9yZyBmb3IgbW9yZSBkZXRhaWxzLidcblx0KTtcbn1cblxuLy8gd2UgZHVwbGljYXRlIGl0IHNvIGl0IHBsYXlzIG5pY2VseSB3aXRoIGRpZmZlcmVudCBtb2R1bGUgbG9hZGluZyBzeXN0ZW1zXG52YXIgaW5kZXggPSB7XG5cdGxpbmtFdmVudDogbGlua0V2ZW50LFxuXHQvLyBjb3JlIHNoYXBlc1xuXHRjcmVhdGVWTm9kZTogY3JlYXRlVk5vZGUsXG5cblx0Ly8gY2xvbmluZ1xuXHRjbG9uZVZOb2RlOiBjbG9uZVZOb2RlLFxuXG5cdC8vIHVzZWQgdG8gc2hhcmVkIGNvbW1vbiBpdGVtcyBiZXR3ZWVuIEluZmVybm8gbGlic1xuXHROT19PUDogTk9fT1AsXG5cdEVNUFRZX09CSjogRU1QVFlfT0JKLFxuXG5cdC8vIERPTVxuXHRyZW5kZXI6IHJlbmRlcixcblx0ZmluZERPTU5vZGU6IGZpbmRET01Ob2RlLFxuXHRjcmVhdGVSZW5kZXJlcjogY3JlYXRlUmVuZGVyZXIsXG5cdG9wdGlvbnM6IG9wdGlvbnNcbn07XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGluZGV4O1xuZXhwb3J0cy5saW5rRXZlbnQgPSBsaW5rRXZlbnQ7XG5leHBvcnRzLmNyZWF0ZVZOb2RlID0gY3JlYXRlVk5vZGU7XG5leHBvcnRzLmNsb25lVk5vZGUgPSBjbG9uZVZOb2RlO1xuZXhwb3J0cy5OT19PUCA9IE5PX09QO1xuZXhwb3J0cy5FTVBUWV9PQkogPSBFTVBUWV9PQko7XG5leHBvcnRzLnJlbmRlciA9IHJlbmRlcjtcbmV4cG9ydHMuZmluZERPTU5vZGUgPSBmaW5kRE9NTm9kZTtcbmV4cG9ydHMuY3JlYXRlUmVuZGVyZXIgPSBjcmVhdGVSZW5kZXJlcjtcbmV4cG9ydHMub3B0aW9ucyA9IG9wdGlvbnM7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbn0pKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaW5mZXJuby9kaXN0L2luZmVybm8ubm9kZS5qc1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCdpbmZlcm5vL2Rpc3QvaW5mZXJuby1yZWR1eC5ub2RlJyk7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gbW9kdWxlLmV4cG9ydHM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2luZmVybm8tcmVkdXgvaW5mZXJuby1yZWR1eC5qc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyohXG4gKiBpbmZlcm5vLXJlZHV4IHYxLjEuMVxuICogKGMpIDIwMTcgRG9taW5pYyBHYW5uYXdheVxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuXHR0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZSgnaW5mZXJuby1jb21wb25lbnQnKSwgcmVxdWlyZSgncmVkdXgnKSwgcmVxdWlyZSgnaW5mZXJuby1jcmVhdGUtZWxlbWVudCcpKSA6XG5cdHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJ2luZmVybm8tY29tcG9uZW50JywgJ3JlZHV4JywgJ2luZmVybm8tY3JlYXRlLWVsZW1lbnQnXSwgZmFjdG9yeSkgOlxuXHQoZ2xvYmFsLkluZmVybm8gPSBnbG9iYWwuSW5mZXJubyB8fCB7fSwgZ2xvYmFsLkluZmVybm8uUmVkdXggPSBmYWN0b3J5KGdsb2JhbC5JbmZlcm5vLkNvbXBvbmVudCxnbG9iYWwuUmVkdXgsZ2xvYmFsLkluZmVybm8uY3JlYXRlRWxlbWVudCkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKENvbXBvbmVudCxyZWR1eCxjcmVhdGVFbGVtZW50KSB7ICd1c2Ugc3RyaWN0JztcblxuQ29tcG9uZW50ID0gJ2RlZmF1bHQnIGluIENvbXBvbmVudCA/IENvbXBvbmVudFsnZGVmYXVsdCddIDogQ29tcG9uZW50O1xuY3JlYXRlRWxlbWVudCA9ICdkZWZhdWx0JyBpbiBjcmVhdGVFbGVtZW50ID8gY3JlYXRlRWxlbWVudFsnZGVmYXVsdCddIDogY3JlYXRlRWxlbWVudDtcblxuLyoqXG4gKiBQcmludHMgYSB3YXJuaW5nIGluIHRoZSBjb25zb2xlIGlmIGl0IGV4aXN0cy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZSBUaGUgd2FybmluZyBtZXNzYWdlLlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIHdhcm5pbmcobWVzc2FnZSkge1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBjb25zb2xlLmVycm9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgaWYgeW91IGVuYWJsZVxuICAgICAgICAvLyBcImJyZWFrIG9uIGFsbCBleGNlcHRpb25zXCIgaW4geW91ciBjb25zb2xlLFxuICAgICAgICAvLyBpdCB3b3VsZCBwYXVzZSB0aGUgZXhlY3V0aW9uIGF0IHRoaXMgbGluZS5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICBjYXRjaCAoZSkgeyB9XG4gICAgLyogZXNsaW50LWVuYWJsZSBuby1lbXB0eSAqL1xufVxuZnVuY3Rpb24gc2hhbGxvd0VxdWFsKG9iakEsIG9iakIpIHtcbiAgICBpZiAob2JqQSA9PT0gb2JqQikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgdmFyIGtleXNBID0gT2JqZWN0LmtleXMob2JqQSk7XG4gICAgdmFyIGtleXNCID0gT2JqZWN0LmtleXMob2JqQik7XG4gICAgaWYgKGtleXNBLmxlbmd0aCAhPT0ga2V5c0IubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLy8gVGVzdCBmb3IgQSdzIGtleXMgZGlmZmVyZW50IGZyb20gQi5cbiAgICB2YXIgaGFzT3duID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXNBLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzQVtpXTtcbiAgICAgICAgaWYgKCFoYXNPd24uY2FsbChvYmpCLCBrZXkpIHx8XG4gICAgICAgICAgICBvYmpBW2tleV0gIT09IG9iakJba2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuZnVuY3Rpb24gd3JhcEFjdGlvbkNyZWF0b3JzKGFjdGlvbkNyZWF0b3JzKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkgeyByZXR1cm4gcmVkdXguYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaCk7IH07XG59XG5cbnZhciBFUlJPUl9NU0cgPSAnYSBydW50aW1lIGVycm9yIG9jY3VyZWQhIFVzZSBJbmZlcm5vIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50IHRvIGZpbmQgdGhlIGVycm9yLic7XG5cbmZ1bmN0aW9uIHRvQXJyYXkoY2hpbGRyZW4pIHtcbiAgICByZXR1cm4gaXNBcnJheShjaGlsZHJlbikgPyBjaGlsZHJlbiA6IChjaGlsZHJlbiA/IFtjaGlsZHJlbl0gOiBjaGlsZHJlbik7XG59XG4vLyB0aGlzIGlzIE1VQ0ggZmFzdGVyIHRoYW4gLmNvbnN0cnVjdG9yID09PSBBcnJheSBhbmQgaW5zdGFuY2VvZiBBcnJheVxuLy8gaW4gTm9kZSA3IGFuZCB0aGUgbGF0ZXIgdmVyc2lvbnMgb2YgVjgsIHNsb3dlciBpbiBvbGRlciB2ZXJzaW9ucyB0aG91Z2hcbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxuXG5mdW5jdGlvbiBpc051bGxPclVuZGVmKG9iaikge1xuICAgIHJldHVybiBpc1VuZGVmaW5lZChvYmopIHx8IGlzTnVsbChvYmopO1xufVxuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnZnVuY3Rpb24nO1xufVxuXG5cblxuZnVuY3Rpb24gaXNOdWxsKG9iaikge1xuICAgIHJldHVybiBvYmogPT09IG51bGw7XG59XG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKG9iaikge1xuICAgIHJldHVybiBvYmogPT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gdGhyb3dFcnJvcihtZXNzYWdlKSB7XG4gICAgaWYgKCFtZXNzYWdlKSB7XG4gICAgICAgIG1lc3NhZ2UgPSBFUlJPUl9NU0c7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcigoXCJJbmZlcm5vIEVycm9yOiBcIiArIG1lc3NhZ2UpKTtcbn1cblxudmFyIGRpZFdhcm5BYm91dFJlY2VpdmluZ1N0b3JlID0gZmFsc2U7XG5mdW5jdGlvbiB3YXJuQWJvdXRSZWNlaXZpbmdTdG9yZSgpIHtcbiAgICBpZiAoZGlkV2FybkFib3V0UmVjZWl2aW5nU3RvcmUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkaWRXYXJuQWJvdXRSZWNlaXZpbmdTdG9yZSA9IHRydWU7XG4gICAgd2FybmluZygnPFByb3ZpZGVyPiBkb2VzIG5vdCBzdXBwb3J0IGNoYW5naW5nIGBzdG9yZWAgb24gdGhlIGZseS4nKTtcbn1cbnZhciBQcm92aWRlciA9IChmdW5jdGlvbiAoQ29tcG9uZW50JCQxKSB7XG4gICAgZnVuY3Rpb24gUHJvdmlkZXIocHJvcHMsIGNvbnRleHQpIHtcbiAgICAgICAgQ29tcG9uZW50JCQxLmNhbGwodGhpcywgcHJvcHMsIGNvbnRleHQpO1xuICAgICAgICB0aGlzLnN0b3JlID0gcHJvcHMuc3RvcmU7XG4gICAgfVxuXG4gICAgaWYgKCBDb21wb25lbnQkJDEgKSBQcm92aWRlci5fX3Byb3RvX18gPSBDb21wb25lbnQkJDE7XG4gICAgUHJvdmlkZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQ29tcG9uZW50JCQxICYmIENvbXBvbmVudCQkMS5wcm90b3R5cGUgKTtcbiAgICBQcm92aWRlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBQcm92aWRlcjtcbiAgICBQcm92aWRlci5wcm90b3R5cGUuZ2V0Q2hpbGRDb250ZXh0ID0gZnVuY3Rpb24gZ2V0Q2hpbGRDb250ZXh0ICgpIHtcbiAgICAgICAgcmV0dXJuIHsgc3RvcmU6IHRoaXMuc3RvcmUgfTtcbiAgICB9O1xuICAgIFByb3ZpZGVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIgKCkge1xuICAgICAgICBpZiAoaXNOdWxsT3JVbmRlZih0aGlzLnByb3BzLmNoaWxkcmVuKSB8fCB0b0FycmF5KHRoaXMucHJvcHMuY2hpbGRyZW4pLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0luZmVybm8gRXJyb3I6IE9ubHkgb25lIGNoaWxkIGlzIGFsbG93ZWQgd2l0aGluIHRoZSBgUHJvdmlkZXJgIGNvbXBvbmVudCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICAgIH07XG5cbiAgICByZXR1cm4gUHJvdmlkZXI7XG59KENvbXBvbmVudCkpO1xuXG5pZiAoXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBQcm92aWRlci5wcm90b3R5cGUuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IGZ1bmN0aW9uIChuZXh0UHJvcHMpIHtcbiAgICAgICAgdmFyIHJlZiA9IHRoaXM7XG4gICAgICAgIHZhciBzdG9yZSA9IHJlZi5zdG9yZTtcbiAgICAgICAgdmFyIG5leHRTdG9yZSA9IG5leHRQcm9wcy5zdG9yZTtcbiAgICAgICAgaWYgKHN0b3JlICE9PSBuZXh0U3RvcmUpIHtcbiAgICAgICAgICAgIHdhcm5BYm91dFJlY2VpdmluZ1N0b3JlKCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb21tb25qc01vZHVsZShmbiwgbW9kdWxlKSB7XG5cdHJldHVybiBtb2R1bGUgPSB7IGV4cG9ydHM6IHt9IH0sIGZuKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMpLCBtb2R1bGUuZXhwb3J0cztcbn1cblxudmFyIGluZGV4JDEgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBJTkZFUk5PX1NUQVRJQ1MgPSB7XG4gICAgY2hpbGRDb250ZXh0VHlwZXM6IHRydWUsXG4gICAgY29udGV4dFR5cGVzOiB0cnVlLFxuICAgIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgICBnZXREZWZhdWx0UHJvcHM6IHRydWUsXG4gICAgcHJvcFR5cGVzOiB0cnVlLFxuICAgIHR5cGU6IHRydWVcbn07XG5cbnZhciBLTk9XTl9TVEFUSUNTID0ge1xuICAgIG5hbWU6IHRydWUsXG4gICAgbGVuZ3RoOiB0cnVlLFxuICAgIHByb3RvdHlwZTogdHJ1ZSxcbiAgICBjYWxsZXI6IHRydWUsXG4gICAgYXJndW1lbnRzOiB0cnVlLFxuICAgIGFyaXR5OiB0cnVlXG59O1xuXG52YXIgaXNHZXRPd25Qcm9wZXJ0eVN5bWJvbHNBdmFpbGFibGUgPSB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gJ2Z1bmN0aW9uJztcblxuZnVuY3Rpb24gaG9pc3ROb25SZWFjdFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50LCBzb3VyY2VDb21wb25lbnQsIGN1c3RvbVN0YXRpY3MpIHtcbiAgICBpZiAodHlwZW9mIHNvdXJjZUNvbXBvbmVudCAhPT0gJ3N0cmluZycpIHsgLy8gZG9uJ3QgaG9pc3Qgb3ZlciBzdHJpbmcgKGh0bWwpIGNvbXBvbmVudHNcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhzb3VyY2VDb21wb25lbnQpO1xuXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICAgIGlmIChpc0dldE93blByb3BlcnR5U3ltYm9sc0F2YWlsYWJsZSkge1xuICAgICAgICAgICAga2V5cyA9IGtleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlQ29tcG9uZW50KSk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGlmICghSU5GRVJOT19TVEFUSUNTW2tleXNbaV1dICYmICFLTk9XTl9TVEFUSUNTW2tleXNbaV1dICYmICghY3VzdG9tU3RhdGljcyB8fCAhY3VzdG9tU3RhdGljc1trZXlzW2ldXSkpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRDb21wb25lbnRba2V5c1tpXV0gPSBzb3VyY2VDb21wb25lbnRba2V5c1tpXV07XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRDb21wb25lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaG9pc3ROb25SZWFjdFN0YXRpY3M7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gbW9kdWxlLmV4cG9ydHM7XG59KTtcblxuLy8gRnJvbSBodHRwczovL2dpdGh1Yi5jb20vbG9kYXNoL2xvZGFzaC9ibG9iL2VzXG5mdW5jdGlvbiBvdmVyQXJnKGZ1bmMsIHRyYW5zZm9ybSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYXJnKSB7XG4gICAgICAgIHJldHVybiBmdW5jKHRyYW5zZm9ybShhcmcpKTtcbiAgICB9O1xufVxudmFyIGdldFByb3RvdHlwZSA9IG92ZXJBcmcoT2JqZWN0LmdldFByb3RvdHlwZU9mLCBPYmplY3QpO1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jztcbn1cbnZhciBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJztcbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xudmFyIG9iamVjdEN0b3JTdHJpbmcgPSBmdW5jVG9TdHJpbmcuY2FsbChPYmplY3QpO1xudmFyIG9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KHZhbHVlKSB7XG4gICAgaWYgKCFpc09iamVjdExpa2UodmFsdWUpIHx8IG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpICE9PSBvYmplY3RUYWcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgcHJvdG8gPSBnZXRQcm90b3R5cGUodmFsdWUpO1xuICAgIGlmIChwcm90byA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgdmFyIEN0b3IgPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3RvLCAnY29uc3RydWN0b3InKSAmJiBwcm90by5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gKHR5cGVvZiBDdG9yID09PSAnZnVuY3Rpb24nICYmXG4gICAgICAgIEN0b3IgaW5zdGFuY2VvZiBDdG9yICYmIGZ1bmNUb1N0cmluZy5jYWxsKEN0b3IpID09PSBvYmplY3RDdG9yU3RyaW5nKTtcbn1cblxudmFyIGVycm9yT2JqZWN0ID0geyB2YWx1ZTogbnVsbCB9O1xudmFyIGRlZmF1bHRNYXBTdGF0ZVRvUHJvcHMgPSBmdW5jdGlvbiAoc3RhdGUpIHsgcmV0dXJuICh7fSk7IH07IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbnZhciBkZWZhdWx0TWFwRGlzcGF0Y2hUb1Byb3BzID0gZnVuY3Rpb24gKGRpc3BhdGNoKSB7IHJldHVybiAoeyBkaXNwYXRjaDogZGlzcGF0Y2ggfSk7IH07XG52YXIgZGVmYXVsdE1lcmdlUHJvcHMgPSBmdW5jdGlvbiAoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgcGFyZW50UHJvcHMpIHsgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHBhcmVudFByb3BzLCBzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzKTsgfTtcbmZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBjdHgpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gZm4uYXBwbHkoY3R4KTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgZXJyb3JPYmplY3QudmFsdWUgPSBlO1xuICAgICAgICByZXR1cm4gZXJyb3JPYmplY3Q7XG4gICAgfVxufVxuZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWUoV3JhcHBlZENvbXBvbmVudCkge1xuICAgIHJldHVybiBXcmFwcGVkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IFdyYXBwZWRDb21wb25lbnQubmFtZSB8fCAnQ29tcG9uZW50Jztcbn1cbi8vIEhlbHBzIHRyYWNrIGhvdCByZWxvYWRpbmcuXG52YXIgbmV4dFZlcnNpb24gPSAwO1xuZnVuY3Rpb24gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcywgbWVyZ2VQcm9wcywgb3B0aW9ucykge1xuICAgIGlmICggb3B0aW9ucyA9PT0gdm9pZCAwICkgb3B0aW9ucyA9IHt9O1xuXG4gICAgdmFyIHNob3VsZFN1YnNjcmliZSA9IEJvb2xlYW4obWFwU3RhdGVUb1Byb3BzKTtcbiAgICB2YXIgbWFwU3RhdGUgPSBtYXBTdGF0ZVRvUHJvcHMgfHwgZGVmYXVsdE1hcFN0YXRlVG9Qcm9wcztcbiAgICB2YXIgbWFwRGlzcGF0Y2g7XG4gICAgaWYgKGlzRnVuY3Rpb24obWFwRGlzcGF0Y2hUb1Byb3BzKSkge1xuICAgICAgICBtYXBEaXNwYXRjaCA9IG1hcERpc3BhdGNoVG9Qcm9wcztcbiAgICB9XG4gICAgZWxzZSBpZiAoIW1hcERpc3BhdGNoVG9Qcm9wcykge1xuICAgICAgICBtYXBEaXNwYXRjaCA9IGRlZmF1bHRNYXBEaXNwYXRjaFRvUHJvcHM7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBtYXBEaXNwYXRjaCA9IHdyYXBBY3Rpb25DcmVhdG9ycyhtYXBEaXNwYXRjaFRvUHJvcHMpO1xuICAgIH1cbiAgICB2YXIgZmluYWxNZXJnZVByb3BzID0gbWVyZ2VQcm9wcyB8fCBkZWZhdWx0TWVyZ2VQcm9wcztcbiAgICB2YXIgcHVyZSA9IG9wdGlvbnMucHVyZTsgaWYgKCBwdXJlID09PSB2b2lkIDAgKSBwdXJlID0gdHJ1ZTtcbiAgICB2YXIgd2l0aFJlZiA9IG9wdGlvbnMud2l0aFJlZjsgaWYgKCB3aXRoUmVmID09PSB2b2lkIDAgKSB3aXRoUmVmID0gZmFsc2U7XG4gICAgdmFyIGNoZWNrTWVyZ2VkRXF1YWxzID0gcHVyZSAmJiBmaW5hbE1lcmdlUHJvcHMgIT09IGRlZmF1bHRNZXJnZVByb3BzO1xuICAgIC8vIEhlbHBzIHRyYWNrIGhvdCByZWxvYWRpbmcuXG4gICAgdmFyIHZlcnNpb24gPSBuZXh0VmVyc2lvbisrO1xuICAgIHJldHVybiBmdW5jdGlvbiB3cmFwV2l0aENvbm5lY3QoV3JhcHBlZENvbXBvbmVudCkge1xuICAgICAgICB2YXIgY29ubmVjdERpc3BsYXlOYW1lID0gXCJDb25uZWN0KFwiICsgKGdldERpc3BsYXlOYW1lKFdyYXBwZWRDb21wb25lbnQpKSArIFwiKVwiO1xuICAgICAgICBmdW5jdGlvbiBjaGVja1N0YXRlU2hhcGUocHJvcHMsIG1ldGhvZE5hbWUpIHtcbiAgICAgICAgICAgIGlmICghaXNQbGFpbk9iamVjdChwcm9wcykpIHtcbiAgICAgICAgICAgICAgICB3YXJuaW5nKG1ldGhvZE5hbWUgKyBcIigpIGluIFwiICsgY29ubmVjdERpc3BsYXlOYW1lICsgXCIgbXVzdCByZXR1cm4gYSBwbGFpbiBvYmplY3QuIFwiICtcbiAgICAgICAgICAgICAgICAgICAgXCJJbnN0ZWFkIHJlY2VpdmVkIFwiICsgcHJvcHMgKyBcIi5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gY29tcHV0ZU1lcmdlZFByb3BzKHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIHBhcmVudFByb3BzKSB7XG4gICAgICAgICAgICB2YXIgbWVyZ2VkUHJvcHMgPSBmaW5hbE1lcmdlUHJvcHMoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgcGFyZW50UHJvcHMpO1xuICAgICAgICAgICAgaWYgKFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY2hlY2tTdGF0ZVNoYXBlKG1lcmdlZFByb3BzLCAnbWVyZ2VQcm9wcycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG1lcmdlZFByb3BzO1xuICAgICAgICB9XG4gICAgICAgIHZhciBDb25uZWN0ID0gKGZ1bmN0aW9uIChDb21wb25lbnQkJDEpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIENvbm5lY3QocHJvcHMsIGNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgICAgICAgICAgICAgIENvbXBvbmVudCQkMS5jYWxsKHRoaXMsIHByb3BzLCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICB0aGlzLnZlcnNpb24gPSB2ZXJzaW9uO1xuICAgICAgICAgICAgICAgIHRoaXMud3JhcHBlZEluc3RhbmNlID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JlID0gKHByb3BzICYmIHByb3BzLnN0b3JlKSB8fCAoY29udGV4dCAmJiBjb250ZXh0LnN0b3JlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzJDEudHJ5U3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc3RvcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3dFcnJvcignQ291bGQgbm90IGZpbmQgXCJzdG9yZVwiIGluIGVpdGhlciB0aGUgY29udGV4dCBvciAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicHJvcHMgb2YgXFxcIlwiICsgY29ubmVjdERpc3BsYXlOYW1lICsgXCJcXFwiLiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAnRWl0aGVyIHdyYXAgdGhlIHJvb3QgY29tcG9uZW50IGluIGEgPFByb3ZpZGVyPiwgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm9yIGV4cGxpY2l0bHkgcGFzcyBcXFwic3RvcmVcXFwiIGFzIGEgcHJvcCB0byBcXFwiXCIgKyBjb25uZWN0RGlzcGxheU5hbWUgKyBcIlxcXCIuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgc3RvcmVTdGF0ZSA9IHRoaXMuc3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0geyBzdG9yZVN0YXRlOiBzdG9yZVN0YXRlIH07XG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhckNhY2hlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICggQ29tcG9uZW50JCQxICkgQ29ubmVjdC5fX3Byb3RvX18gPSBDb21wb25lbnQkJDE7XG4gICAgICAgICAgICBDb25uZWN0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIENvbXBvbmVudCQkMSAmJiBDb21wb25lbnQkJDEucHJvdG90eXBlICk7XG4gICAgICAgICAgICBDb25uZWN0LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IENvbm5lY3Q7XG4gICAgICAgICAgICBDb25uZWN0LnByb3RvdHlwZS5zaG91bGRDb21wb25lbnRVcGRhdGUgPSBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUgKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAhcHVyZSB8fCB0aGlzLmhhdmVPd25Qcm9wc0NoYW5nZWQgfHwgdGhpcy5oYXNTdG9yZVN0YXRlQ2hhbmdlZDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBDb25uZWN0LnByb3RvdHlwZS5jb21wdXRlU3RhdGVQcm9wcyA9IGZ1bmN0aW9uIGNvbXB1dGVTdGF0ZVByb3BzIChzdG9yZSwgcHJvcHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZmluYWxNYXBTdGF0ZVRvUHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlndXJlRmluYWxNYXBTdGF0ZShzdG9yZSwgcHJvcHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgICAgIHZhciBzdGF0ZVByb3BzID0gdGhpcy5kb1N0YXRlUHJvcHNEZXBlbmRPbk93blByb3BzID9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maW5hbE1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgcHJvcHMpIDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maW5hbE1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlUHJvcHM7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgQ29ubmVjdC5wcm90b3R5cGUuY29uZmlndXJlRmluYWxNYXBTdGF0ZSA9IGZ1bmN0aW9uIGNvbmZpZ3VyZUZpbmFsTWFwU3RhdGUgKHN0b3JlLCBwcm9wcykge1xuICAgICAgICAgICAgICAgIHZhciBtYXBwZWRTdGF0ZSA9IG1hcFN0YXRlKHN0b3JlLmdldFN0YXRlKCksIHByb3BzKTtcbiAgICAgICAgICAgICAgICB2YXIgaXNGYWN0b3J5ID0gaXNGdW5jdGlvbihtYXBwZWRTdGF0ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5maW5hbE1hcFN0YXRlVG9Qcm9wcyA9IGlzRmFjdG9yeSA/IG1hcHBlZFN0YXRlIDogbWFwU3RhdGU7XG4gICAgICAgICAgICAgICAgdGhpcy5kb1N0YXRlUHJvcHNEZXBlbmRPbk93blByb3BzID0gdGhpcy5maW5hbE1hcFN0YXRlVG9Qcm9wcy5sZW5ndGggIT09IDE7XG4gICAgICAgICAgICAgICAgaWYgKGlzRmFjdG9yeSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb21wdXRlU3RhdGVQcm9wcyhzdG9yZSwgcHJvcHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbWFwcGVkU3RhdGU7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgQ29ubmVjdC5wcm90b3R5cGUuY29tcHV0ZURpc3BhdGNoUHJvcHMgPSBmdW5jdGlvbiBjb21wdXRlRGlzcGF0Y2hQcm9wcyAoc3RvcmUsIHByb3BzKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmZpbmFsTWFwRGlzcGF0Y2hUb1Byb3BzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbmZpZ3VyZUZpbmFsTWFwRGlzcGF0Y2goc3RvcmUsIHByb3BzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGRpc3BhdGNoID0gc3RvcmUuZGlzcGF0Y2g7XG4gICAgICAgICAgICAgICAgdmFyIGRpc3BhdGNoUHJvcHMgPSB0aGlzLmRvRGlzcGF0Y2hQcm9wc0RlcGVuZE9uT3duUHJvcHMgP1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbmFsTWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoLCBwcm9wcykgOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbmFsTWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGlzcGF0Y2hQcm9wcztcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBDb25uZWN0LnByb3RvdHlwZS5jb25maWd1cmVGaW5hbE1hcERpc3BhdGNoID0gZnVuY3Rpb24gY29uZmlndXJlRmluYWxNYXBEaXNwYXRjaCAoc3RvcmUsIHByb3BzKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1hcHBlZERpc3BhdGNoID0gbWFwRGlzcGF0Y2goc3RvcmUuZGlzcGF0Y2gsIHByb3BzKTtcbiAgICAgICAgICAgICAgICB2YXIgaXNGYWN0b3J5ID0gaXNGdW5jdGlvbihtYXBwZWREaXNwYXRjaCk7XG4gICAgICAgICAgICAgICAgdGhpcy5maW5hbE1hcERpc3BhdGNoVG9Qcm9wcyA9IGlzRmFjdG9yeSA/IG1hcHBlZERpc3BhdGNoIDogbWFwRGlzcGF0Y2g7XG4gICAgICAgICAgICAgICAgdGhpcy5kb0Rpc3BhdGNoUHJvcHNEZXBlbmRPbk93blByb3BzID0gdGhpcy5maW5hbE1hcERpc3BhdGNoVG9Qcm9wcy5sZW5ndGggIT09IDE7XG4gICAgICAgICAgICAgICAgaWYgKGlzRmFjdG9yeSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb21wdXRlRGlzcGF0Y2hQcm9wcyhzdG9yZSwgcHJvcHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbWFwcGVkRGlzcGF0Y2g7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgQ29ubmVjdC5wcm90b3R5cGUudXBkYXRlU3RhdGVQcm9wc0lmTmVlZGVkID0gZnVuY3Rpb24gdXBkYXRlU3RhdGVQcm9wc0lmTmVlZGVkICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgbmV4dFN0YXRlUHJvcHMgPSB0aGlzLmNvbXB1dGVTdGF0ZVByb3BzKHRoaXMuc3RvcmUsIHRoaXMucHJvcHMpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlUHJvcHMgJiYgc2hhbGxvd0VxdWFsKG5leHRTdGF0ZVByb3BzLCB0aGlzLnN0YXRlUHJvcHMpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZVByb3BzID0gbmV4dFN0YXRlUHJvcHM7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgQ29ubmVjdC5wcm90b3R5cGUudXBkYXRlRGlzcGF0Y2hQcm9wc0lmTmVlZGVkID0gZnVuY3Rpb24gdXBkYXRlRGlzcGF0Y2hQcm9wc0lmTmVlZGVkICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgbmV4dERpc3BhdGNoUHJvcHMgPSB0aGlzLmNvbXB1dGVEaXNwYXRjaFByb3BzKHRoaXMuc3RvcmUsIHRoaXMucHJvcHMpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRpc3BhdGNoUHJvcHMgJiYgc2hhbGxvd0VxdWFsKG5leHREaXNwYXRjaFByb3BzLCB0aGlzLmRpc3BhdGNoUHJvcHMpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaFByb3BzID0gbmV4dERpc3BhdGNoUHJvcHM7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgQ29ubmVjdC5wcm90b3R5cGUudXBkYXRlTWVyZ2VkUHJvcHNJZk5lZWRlZCA9IGZ1bmN0aW9uIHVwZGF0ZU1lcmdlZFByb3BzSWZOZWVkZWQgKCkge1xuICAgICAgICAgICAgICAgIHZhciBuZXh0TWVyZ2VkUHJvcHMgPSBjb21wdXRlTWVyZ2VkUHJvcHModGhpcy5zdGF0ZVByb3BzLCB0aGlzLmRpc3BhdGNoUHJvcHMsIHRoaXMucHJvcHMpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1lcmdlZFByb3BzICYmIGNoZWNrTWVyZ2VkRXF1YWxzICYmIHNoYWxsb3dFcXVhbChuZXh0TWVyZ2VkUHJvcHMsIHRoaXMubWVyZ2VkUHJvcHMpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5tZXJnZWRQcm9wcyA9IG5leHRNZXJnZWRQcm9wcztcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBDb25uZWN0LnByb3RvdHlwZS5pc1N1YnNjcmliZWQgPSBmdW5jdGlvbiBpc1N1YnNjcmliZWQgKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpc0Z1bmN0aW9uKHRoaXMudW5zdWJzY3JpYmUpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIENvbm5lY3QucHJvdG90eXBlLnRyeVN1YnNjcmliZSA9IGZ1bmN0aW9uIHRyeVN1YnNjcmliZSAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNob3VsZFN1YnNjcmliZSAmJiAhdGhpcy51bnN1YnNjcmliZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlID0gdGhpcy5zdG9yZS5zdWJzY3JpYmUodGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIENvbm5lY3QucHJvdG90eXBlLnRyeVVuc3Vic2NyaWJlID0gZnVuY3Rpb24gdHJ5VW5zdWJzY3JpYmUgKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnVuc3Vic2NyaWJlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIENvbm5lY3QucHJvdG90eXBlLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIChuZXh0UHJvcHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXB1cmUgfHwgIXNoYWxsb3dFcXVhbChuZXh0UHJvcHMsIHRoaXMucHJvcHMpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGF2ZU93blByb3BzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIENvbm5lY3QucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQgKCkge1xuICAgICAgICAgICAgICAgIHRoaXMudHJ5VW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyQ2FjaGUoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBDb25uZWN0LnByb3RvdHlwZS5jbGVhckNhY2hlID0gZnVuY3Rpb24gY2xlYXJDYWNoZSAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaFByb3BzID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlUHJvcHMgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMubWVyZ2VkUHJvcHMgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuaGF2ZU93blByb3BzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5oYXNTdG9yZVN0YXRlQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5oYXZlU3RhdGVQcm9wc0JlZW5QcmVjYWxjdWxhdGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZVByb3BzUHJlY2FsY3VsYXRpb25FcnJvciA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlZEVsZW1lbnQgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuZmluYWxNYXBEaXNwYXRjaFRvUHJvcHMgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuZmluYWxNYXBTdGF0ZVRvUHJvcHMgPSBudWxsO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIENvbm5lY3QucHJvdG90eXBlLmhhbmRsZUNoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZUNoYW5nZSAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnVuc3Vic2NyaWJlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHN0b3JlU3RhdGUgPSB0aGlzLnN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgICAgICAgICAgdmFyIHByZXZTdG9yZVN0YXRlID0gdGhpcy5zdGF0ZS5zdG9yZVN0YXRlO1xuICAgICAgICAgICAgICAgIGlmIChwdXJlICYmIHByZXZTdG9yZVN0YXRlID09PSBzdG9yZVN0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHB1cmUgJiYgIXRoaXMuZG9TdGF0ZVByb3BzRGVwZW5kT25Pd25Qcm9wcykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaGF2ZVN0YXRlUHJvcHNDaGFuZ2VkID0gdHJ5Q2F0Y2godGhpcy51cGRhdGVTdGF0ZVByb3BzSWZOZWVkZWQsIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWhhdmVTdGF0ZVByb3BzQ2hhbmdlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChoYXZlU3RhdGVQcm9wc0NoYW5nZWQgPT09IGVycm9yT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlUHJvcHNQcmVjYWxjdWxhdGlvbkVycm9yID0gZXJyb3JPYmplY3QudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYXZlU3RhdGVQcm9wc0JlZW5QcmVjYWxjdWxhdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5oYXNTdG9yZVN0YXRlQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0b3JlU3RhdGU6IHN0b3JlU3RhdGUgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgQ29ubmVjdC5wcm90b3R5cGUuZ2V0V3JhcHBlZEluc3RhbmNlID0gZnVuY3Rpb24gZ2V0V3JhcHBlZEluc3RhbmNlICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy53cmFwcGVkSW5zdGFuY2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgQ29ubmVjdC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgICAgICAgICAgICAgIHZhciByZWYgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHZhciBoYXZlT3duUHJvcHNDaGFuZ2VkID0gcmVmLmhhdmVPd25Qcm9wc0NoYW5nZWQ7XG4gICAgICAgICAgICAgICAgdmFyIGhhc1N0b3JlU3RhdGVDaGFuZ2VkID0gcmVmLmhhc1N0b3JlU3RhdGVDaGFuZ2VkO1xuICAgICAgICAgICAgICAgIHZhciBoYXZlU3RhdGVQcm9wc0JlZW5QcmVjYWxjdWxhdGVkID0gcmVmLmhhdmVTdGF0ZVByb3BzQmVlblByZWNhbGN1bGF0ZWQ7XG4gICAgICAgICAgICAgICAgdmFyIHN0YXRlUHJvcHNQcmVjYWxjdWxhdGlvbkVycm9yID0gcmVmLnN0YXRlUHJvcHNQcmVjYWxjdWxhdGlvbkVycm9yO1xuICAgICAgICAgICAgICAgIHZhciByZW5kZXJlZEVsZW1lbnQgPSByZWYucmVuZGVyZWRFbGVtZW50O1xuICAgICAgICAgICAgICAgIHRoaXMuaGF2ZU93blByb3BzQ2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuaGFzU3RvcmVTdGF0ZUNoYW5nZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmhhdmVTdGF0ZVByb3BzQmVlblByZWNhbGN1bGF0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlUHJvcHNQcmVjYWxjdWxhdGlvbkVycm9yID0gbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGVQcm9wc1ByZWNhbGN1bGF0aW9uRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgc3RhdGVQcm9wc1ByZWNhbGN1bGF0aW9uRXJyb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBzaG91bGRVcGRhdGVTdGF0ZVByb3BzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB2YXIgc2hvdWxkVXBkYXRlRGlzcGF0Y2hQcm9wcyA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKHB1cmUgJiYgcmVuZGVyZWRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHNob3VsZFVwZGF0ZVN0YXRlUHJvcHMgPSBoYXNTdG9yZVN0YXRlQ2hhbmdlZCB8fCAoaGF2ZU93blByb3BzQ2hhbmdlZCAmJiB0aGlzLmRvU3RhdGVQcm9wc0RlcGVuZE9uT3duUHJvcHMpO1xuICAgICAgICAgICAgICAgICAgICBzaG91bGRVcGRhdGVEaXNwYXRjaFByb3BzID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhhdmVPd25Qcm9wc0NoYW5nZWQgJiYgdGhpcy5kb0Rpc3BhdGNoUHJvcHNEZXBlbmRPbk93blByb3BzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgaGF2ZVN0YXRlUHJvcHNDaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdmFyIGhhdmVEaXNwYXRjaFByb3BzQ2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmIChoYXZlU3RhdGVQcm9wc0JlZW5QcmVjYWxjdWxhdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhdmVTdGF0ZVByb3BzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNob3VsZFVwZGF0ZVN0YXRlUHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgaGF2ZVN0YXRlUHJvcHNDaGFuZ2VkID0gdGhpcy51cGRhdGVTdGF0ZVByb3BzSWZOZWVkZWQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHNob3VsZFVwZGF0ZURpc3BhdGNoUHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgaGF2ZURpc3BhdGNoUHJvcHNDaGFuZ2VkID0gdGhpcy51cGRhdGVEaXNwYXRjaFByb3BzSWZOZWVkZWQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGhhdmVNZXJnZWRQcm9wc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmIChoYXZlU3RhdGVQcm9wc0NoYW5nZWQgfHxcbiAgICAgICAgICAgICAgICAgICAgaGF2ZURpc3BhdGNoUHJvcHNDaGFuZ2VkIHx8XG4gICAgICAgICAgICAgICAgICAgIGhhdmVPd25Qcm9wc0NoYW5nZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaGF2ZU1lcmdlZFByb3BzQ2hhbmdlZCA9IHRoaXMudXBkYXRlTWVyZ2VkUHJvcHNJZk5lZWRlZCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaGF2ZU1lcmdlZFByb3BzQ2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWhhdmVNZXJnZWRQcm9wc0NoYW5nZWQgJiYgcmVuZGVyZWRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXJlZEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh3aXRoUmVmKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZWRFbGVtZW50ID0gY3JlYXRlRWxlbWVudChXcmFwcGVkQ29tcG9uZW50LCBPYmplY3QuYXNzaWduKHt9LCB0aGlzLm1lcmdlZFByb3BzLCB7IHJlZjogZnVuY3Rpb24gKGluc3RhbmNlKSB7IHJldHVybiB0aGlzJDEud3JhcHBlZEluc3RhbmNlID0gaW5zdGFuY2U7IH0gfSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlZEVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KFdyYXBwZWRDb21wb25lbnQsIHRoaXMubWVyZ2VkUHJvcHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJlZEVsZW1lbnQ7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICByZXR1cm4gQ29ubmVjdDtcbiAgICAgICAgfShDb21wb25lbnQpKTtcbiAgICAgICAgQ29ubmVjdC5kaXNwbGF5TmFtZSA9IGNvbm5lY3REaXNwbGF5TmFtZTtcbiAgICAgICAgQ29ubmVjdC5XcmFwcGVkQ29tcG9uZW50ID0gV3JhcHBlZENvbXBvbmVudDtcbiAgICAgICAgaWYgKFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBDb25uZWN0LnByb3RvdHlwZS5jb21wb25lbnRXaWxsVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVwZGF0ZSgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52ZXJzaW9uID09PSB2ZXJzaW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gV2UgYXJlIGhvdCByZWxvYWRpbmchXG4gICAgICAgICAgICAgICAgdGhpcy52ZXJzaW9uID0gdmVyc2lvbjtcbiAgICAgICAgICAgICAgICB0aGlzLnRyeVN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJDYWNoZSgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5kZXgkMShDb25uZWN0LCBXcmFwcGVkQ29tcG9uZW50KTtcbiAgICB9O1xufVxuXG52YXIgaW5kZXggPSB7XG5cdFByb3ZpZGVyOiBQcm92aWRlcixcblx0Y29ubmVjdDogY29ubmVjdFxufTtcblxucmV0dXJuIGluZGV4O1xuXG59KSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2luZmVybm8vZGlzdC9pbmZlcm5vLXJlZHV4Lm5vZGUuanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi8uLi9pbmZlcm5vL2Rpc3QvaW5mZXJuby1jb21wb25lbnQubm9kZScpO1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IG1vZHVsZS5leHBvcnRzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pbmZlcm5vLWNvbXBvbmVudC9pbmZlcm5vLWNvbXBvbmVudC5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyohXG4gKiBpbmZlcm5vLWNvbXBvbmVudCB2MS4xLjFcbiAqIChjKSAyMDE3IERvbWluaWMgR2FubmF3YXlcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZSgnaW5mZXJubycpKSA6XG4gICAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnaW5mZXJubyddLCBmYWN0b3J5KSA6XG4gICAgKGdsb2JhbC5JbmZlcm5vID0gZ2xvYmFsLkluZmVybm8gfHwge30sIGdsb2JhbC5JbmZlcm5vLkNvbXBvbmVudCA9IGZhY3RvcnkoZ2xvYmFsLkluZmVybm8pKTtcbn0odGhpcywgKGZ1bmN0aW9uIChpbmZlcm5vKSB7ICd1c2Ugc3RyaWN0JztcblxudmFyIEVSUk9SX01TRyA9ICdhIHJ1bnRpbWUgZXJyb3Igb2NjdXJlZCEgVXNlIEluZmVybm8gaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnQgdG8gZmluZCB0aGUgZXJyb3IuJztcbnZhciBpc0Jyb3dzZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQ7XG5cbi8vIHRoaXMgaXMgTVVDSCBmYXN0ZXIgdGhhbiAuY29uc3RydWN0b3IgPT09IEFycmF5IGFuZCBpbnN0YW5jZW9mIEFycmF5XG4vLyBpbiBOb2RlIDcgYW5kIHRoZSBsYXRlciB2ZXJzaW9ucyBvZiBWOCwgc2xvd2VyIGluIG9sZGVyIHZlcnNpb25zIHRob3VnaFxudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG5mdW5jdGlvbiBpc1N0cmluZ09yTnVtYmVyKG9iaikge1xuICAgIHZhciB0eXBlID0gdHlwZW9mIG9iajtcbiAgICByZXR1cm4gdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZSA9PT0gJ251bWJlcic7XG59XG5mdW5jdGlvbiBpc051bGxPclVuZGVmKG9iaikge1xuICAgIHJldHVybiBpc1VuZGVmaW5lZChvYmopIHx8IGlzTnVsbChvYmopO1xufVxuZnVuY3Rpb24gaXNJbnZhbGlkKG9iaikge1xuICAgIHJldHVybiBpc051bGwob2JqKSB8fCBvYmogPT09IGZhbHNlIHx8IGlzVHJ1ZShvYmopIHx8IGlzVW5kZWZpbmVkKG9iaik7XG59XG5mdW5jdGlvbiBpc0Z1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnZnVuY3Rpb24nO1xufVxuXG5cblxuZnVuY3Rpb24gaXNOdWxsKG9iaikge1xuICAgIHJldHVybiBvYmogPT09IG51bGw7XG59XG5mdW5jdGlvbiBpc1RydWUob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKG9iaikge1xuICAgIHJldHVybiBvYmogPT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gdGhyb3dFcnJvcihtZXNzYWdlKSB7XG4gICAgaWYgKCFtZXNzYWdlKSB7XG4gICAgICAgIG1lc3NhZ2UgPSBFUlJPUl9NU0c7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcigoXCJJbmZlcm5vIEVycm9yOiBcIiArIG1lc3NhZ2UpKTtcbn1cblxudmFyIExpZmVjeWNsZSA9IGZ1bmN0aW9uIExpZmVjeWNsZSgpIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xuICAgIHRoaXMuZmFzdFVubW91bnQgPSB0cnVlO1xufTtcbkxpZmVjeWNsZS5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbiBhZGRMaXN0ZW5lciAoY2FsbGJhY2spIHtcbiAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGNhbGxiYWNrKTtcbn07XG5MaWZlY3ljbGUucHJvdG90eXBlLnRyaWdnZXIgPSBmdW5jdGlvbiB0cmlnZ2VyICgpIHtcbiAgICAgICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMkMS5saXN0ZW5lcnNbaV0oKTtcbiAgICB9XG59O1xuXG52YXIgbm9PcCA9IEVSUk9SX01TRztcbmlmIChcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIG5vT3AgPSAnSW5mZXJubyBFcnJvcjogQ2FuIG9ubHkgdXBkYXRlIGEgbW91bnRlZCBvciBtb3VudGluZyBjb21wb25lbnQuIFRoaXMgdXN1YWxseSBtZWFucyB5b3UgY2FsbGVkIHNldFN0YXRlKCkgb3IgZm9yY2VVcGRhdGUoKSBvbiBhbiB1bm1vdW50ZWQgY29tcG9uZW50LiBUaGlzIGlzIGEgbm8tb3AuJztcbn1cbnZhciBjb21wb25lbnRDYWxsYmFja1F1ZXVlID0gbmV3IE1hcCgpO1xuLy8gd2hlbiBhIGNvbXBvbmVudHMgcm9vdCBWTm9kZSBpcyBhbHNvIGEgY29tcG9uZW50LCB3ZSBjYW4gcnVuIGludG8gaXNzdWVzXG4vLyB0aGlzIHdpbGwgcmVjdXJzaXZlbHkgbG9vayBmb3Igdk5vZGUucGFyZW50Tm9kZSBpZiB0aGUgVk5vZGUgaXMgYSBjb21wb25lbnRcbmZ1bmN0aW9uIHVwZGF0ZVBhcmVudENvbXBvbmVudFZOb2Rlcyh2Tm9kZSwgZG9tKSB7XG4gICAgaWYgKHZOb2RlLmZsYWdzICYgMjggLyogQ29tcG9uZW50ICovKSB7XG4gICAgICAgIHZhciBwYXJlbnRWTm9kZSA9IHZOb2RlLnBhcmVudFZOb2RlO1xuICAgICAgICBpZiAocGFyZW50Vk5vZGUpIHtcbiAgICAgICAgICAgIHBhcmVudFZOb2RlLmRvbSA9IGRvbTtcbiAgICAgICAgICAgIHVwZGF0ZVBhcmVudENvbXBvbmVudFZOb2RlcyhwYXJlbnRWTm9kZSwgZG9tKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8vIHRoaXMgaXMgaW4gc2hhcGVzIHRvbywgYnV0IHdlIGRvbid0IHdhbnQgdG8gaW1wb3J0IGZyb20gc2hhcGVzIGFzIGl0IHdpbGwgcHVsbCBpbiBhIGR1cGxpY2F0ZSBvZiBjcmVhdGVWTm9kZVxuZnVuY3Rpb24gY3JlYXRlVm9pZFZOb2RlKCkge1xuICAgIHJldHVybiBpbmZlcm5vLmNyZWF0ZVZOb2RlKDQwOTYgLyogVm9pZCAqLyk7XG59XG5mdW5jdGlvbiBjcmVhdGVUZXh0Vk5vZGUodGV4dCkge1xuICAgIHJldHVybiBpbmZlcm5vLmNyZWF0ZVZOb2RlKDEgLyogVGV4dCAqLywgbnVsbCwgbnVsbCwgdGV4dCk7XG59XG5mdW5jdGlvbiBhZGRUb1F1ZXVlKGNvbXBvbmVudCwgZm9yY2UsIGNhbGxiYWNrKSB7XG4gICAgLy8gVE9ETyB0aGlzIGZ1bmN0aW9uIG5lZWRzIHRvIGJlIHJldmlzZWQgYW5kIGltcHJvdmVkIG9uXG4gICAgdmFyIHF1ZXVlID0gY29tcG9uZW50Q2FsbGJhY2tRdWV1ZS5nZXQoY29tcG9uZW50KTtcbiAgICBpZiAoIXF1ZXVlKSB7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIGNvbXBvbmVudENhbGxiYWNrUXVldWUuc2V0KGNvbXBvbmVudCwgcXVldWUpO1xuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudENhbGxiYWNrUXVldWUuZGVsZXRlKGNvbXBvbmVudCk7XG4gICAgICAgICAgICBhcHBseVN0YXRlKGNvbXBvbmVudCwgZm9yY2UsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHF1ZXVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXVlW2ldKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgcXVldWUucHVzaChjYWxsYmFjayk7XG4gICAgfVxufVxuZnVuY3Rpb24gcXVldWVTdGF0ZUNoYW5nZXMoY29tcG9uZW50LCBuZXdTdGF0ZSwgY2FsbGJhY2ssIHN5bmMpIHtcbiAgICBpZiAoaXNGdW5jdGlvbihuZXdTdGF0ZSkpIHtcbiAgICAgICAgbmV3U3RhdGUgPSBuZXdTdGF0ZShjb21wb25lbnQuc3RhdGUpO1xuICAgIH1cbiAgICBmb3IgKHZhciBzdGF0ZUtleSBpbiBuZXdTdGF0ZSkge1xuICAgICAgICBjb21wb25lbnQuX3BlbmRpbmdTdGF0ZVtzdGF0ZUtleV0gPSBuZXdTdGF0ZVtzdGF0ZUtleV07XG4gICAgfVxuICAgIGlmICghY29tcG9uZW50Ll9wZW5kaW5nU2V0U3RhdGUgJiYgaXNCcm93c2VyKSB7XG4gICAgICAgIGlmIChzeW5jIHx8IGNvbXBvbmVudC5fYmxvY2tSZW5kZXIpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudC5fcGVuZGluZ1NldFN0YXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIGFwcGx5U3RhdGUoY29tcG9uZW50LCBmYWxzZSwgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYWRkVG9RdWV1ZShjb21wb25lbnQsIGZhbHNlLCBjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbXBvbmVudC5zdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIGNvbXBvbmVudC5zdGF0ZSwgY29tcG9uZW50Ll9wZW5kaW5nU3RhdGUpO1xuICAgICAgICBjb21wb25lbnQuX3BlbmRpbmdTdGF0ZSA9IHt9O1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFwcGx5U3RhdGUoY29tcG9uZW50LCBmb3JjZSwgY2FsbGJhY2spIHtcbiAgICBpZiAoKCFjb21wb25lbnQuX2RlZmVyU2V0U3RhdGUgfHwgZm9yY2UpICYmICFjb21wb25lbnQuX2Jsb2NrUmVuZGVyICYmICFjb21wb25lbnQuX3VubW91bnRlZCkge1xuICAgICAgICBjb21wb25lbnQuX3BlbmRpbmdTZXRTdGF0ZSA9IGZhbHNlO1xuICAgICAgICB2YXIgcGVuZGluZ1N0YXRlID0gY29tcG9uZW50Ll9wZW5kaW5nU3RhdGU7XG4gICAgICAgIHZhciBwcmV2U3RhdGUgPSBjb21wb25lbnQuc3RhdGU7XG4gICAgICAgIHZhciBuZXh0U3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCBwcmV2U3RhdGUsIHBlbmRpbmdTdGF0ZSk7XG4gICAgICAgIHZhciBwcm9wcyA9IGNvbXBvbmVudC5wcm9wcztcbiAgICAgICAgdmFyIGNvbnRleHQgPSBjb21wb25lbnQuY29udGV4dDtcbiAgICAgICAgY29tcG9uZW50Ll9wZW5kaW5nU3RhdGUgPSB7fTtcbiAgICAgICAgdmFyIG5leHRJbnB1dCA9IGNvbXBvbmVudC5fdXBkYXRlQ29tcG9uZW50KHByZXZTdGF0ZSwgbmV4dFN0YXRlLCBwcm9wcywgcHJvcHMsIGNvbnRleHQsIGZvcmNlLCB0cnVlKTtcbiAgICAgICAgdmFyIGRpZFVwZGF0ZSA9IHRydWU7XG4gICAgICAgIGlmIChpc0ludmFsaWQobmV4dElucHV0KSkge1xuICAgICAgICAgICAgbmV4dElucHV0ID0gY3JlYXRlVm9pZFZOb2RlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobmV4dElucHV0ID09PSBpbmZlcm5vLk5PX09QKSB7XG4gICAgICAgICAgICBuZXh0SW5wdXQgPSBjb21wb25lbnQuX2xhc3RJbnB1dDtcbiAgICAgICAgICAgIGRpZFVwZGF0ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzU3RyaW5nT3JOdW1iZXIobmV4dElucHV0KSkge1xuICAgICAgICAgICAgbmV4dElucHV0ID0gY3JlYXRlVGV4dFZOb2RlKG5leHRJbnB1dCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNBcnJheShuZXh0SW5wdXQpKSB7XG4gICAgICAgICAgICBpZiAoXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aHJvd0Vycm9yKCdhIHZhbGlkIEluZmVybm8gVk5vZGUgKG9yIG51bGwpIG11c3QgYmUgcmV0dXJuZWQgZnJvbSBhIGNvbXBvbmVudCByZW5kZXIuIFlvdSBtYXkgaGF2ZSByZXR1cm5lZCBhbiBhcnJheSBvciBhbiBpbnZhbGlkIG9iamVjdC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93RXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbGFzdElucHV0ID0gY29tcG9uZW50Ll9sYXN0SW5wdXQ7XG4gICAgICAgIHZhciB2Tm9kZSA9IGNvbXBvbmVudC5fdk5vZGU7XG4gICAgICAgIHZhciBwYXJlbnREb20gPSAobGFzdElucHV0LmRvbSAmJiBsYXN0SW5wdXQuZG9tLnBhcmVudE5vZGUpIHx8IChsYXN0SW5wdXQuZG9tID0gdk5vZGUuZG9tKTtcbiAgICAgICAgY29tcG9uZW50Ll9sYXN0SW5wdXQgPSBuZXh0SW5wdXQ7XG4gICAgICAgIGlmIChkaWRVcGRhdGUpIHtcbiAgICAgICAgICAgIHZhciBzdWJMaWZlY3ljbGUgPSBjb21wb25lbnQuX2xpZmVjeWNsZTtcbiAgICAgICAgICAgIGlmICghc3ViTGlmZWN5Y2xlKSB7XG4gICAgICAgICAgICAgICAgc3ViTGlmZWN5Y2xlID0gbmV3IExpZmVjeWNsZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc3ViTGlmZWN5Y2xlLmxpc3RlbmVycyA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29tcG9uZW50Ll9saWZlY3ljbGUgPSBzdWJMaWZlY3ljbGU7XG4gICAgICAgICAgICB2YXIgY2hpbGRDb250ZXh0ID0gY29tcG9uZW50LmdldENoaWxkQ29udGV4dCgpO1xuICAgICAgICAgICAgaWYgKCFpc051bGxPclVuZGVmKGNoaWxkQ29udGV4dCkpIHtcbiAgICAgICAgICAgICAgICBjaGlsZENvbnRleHQgPSBPYmplY3QuYXNzaWduKHt9LCBjb250ZXh0LCBjb21wb25lbnQuX2NoaWxkQ29udGV4dCwgY2hpbGRDb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNoaWxkQ29udGV4dCA9IE9iamVjdC5hc3NpZ24oe30sIGNvbnRleHQsIGNvbXBvbmVudC5fY2hpbGRDb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbXBvbmVudC5fcGF0Y2gobGFzdElucHV0LCBuZXh0SW5wdXQsIHBhcmVudERvbSwgc3ViTGlmZWN5Y2xlLCBjaGlsZENvbnRleHQsIGNvbXBvbmVudC5faXNTVkcsIGZhbHNlKTtcbiAgICAgICAgICAgIHN1YkxpZmVjeWNsZS50cmlnZ2VyKCk7XG4gICAgICAgICAgICBjb21wb25lbnQuY29tcG9uZW50RGlkVXBkYXRlKHByb3BzLCBwcmV2U3RhdGUpO1xuICAgICAgICAgICAgaW5mZXJuby5vcHRpb25zLmFmdGVyVXBkYXRlICYmIGluZmVybm8ub3B0aW9ucy5hZnRlclVwZGF0ZSh2Tm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRvbSA9IHZOb2RlLmRvbSA9IG5leHRJbnB1dC5kb207XG4gICAgICAgIHZhciBjb21wb25lbnRUb0RPTU5vZGVNYXAgPSBjb21wb25lbnQuX2NvbXBvbmVudFRvRE9NTm9kZU1hcDtcbiAgICAgICAgY29tcG9uZW50VG9ET01Ob2RlTWFwICYmIGNvbXBvbmVudFRvRE9NTm9kZU1hcC5zZXQoY29tcG9uZW50LCBuZXh0SW5wdXQuZG9tKTtcbiAgICAgICAgdXBkYXRlUGFyZW50Q29tcG9uZW50Vk5vZGVzKHZOb2RlLCBkb20pO1xuICAgICAgICBpZiAoIWlzTnVsbE9yVW5kZWYoY2FsbGJhY2spKSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgfVxufVxudmFyIENvbXBvbmVudCQxID0gZnVuY3Rpb24gQ29tcG9uZW50KHByb3BzLCBjb250ZXh0KSB7XG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xuICAgIHRoaXMucmVmcyA9IHt9O1xuICAgIHRoaXMuX2Jsb2NrUmVuZGVyID0gZmFsc2U7XG4gICAgdGhpcy5faWdub3JlU2V0U3RhdGUgPSBmYWxzZTtcbiAgICB0aGlzLl9ibG9ja1NldFN0YXRlID0gZmFsc2U7XG4gICAgdGhpcy5fZGVmZXJTZXRTdGF0ZSA9IGZhbHNlO1xuICAgIHRoaXMuX3BlbmRpbmdTZXRTdGF0ZSA9IGZhbHNlO1xuICAgIHRoaXMuX3BlbmRpbmdTdGF0ZSA9IHt9O1xuICAgIHRoaXMuX2xhc3RJbnB1dCA9IG51bGw7XG4gICAgdGhpcy5fdk5vZGUgPSBudWxsO1xuICAgIHRoaXMuX3VubW91bnRlZCA9IHRydWU7XG4gICAgdGhpcy5fbGlmZWN5Y2xlID0gbnVsbDtcbiAgICB0aGlzLl9jaGlsZENvbnRleHQgPSBudWxsO1xuICAgIHRoaXMuX3BhdGNoID0gbnVsbDtcbiAgICB0aGlzLl9pc1NWRyA9IGZhbHNlO1xuICAgIHRoaXMuX2NvbXBvbmVudFRvRE9NTm9kZU1hcCA9IG51bGw7XG4gICAgLyoqIEB0eXBlIHtvYmplY3R9ICovXG4gICAgdGhpcy5wcm9wcyA9IHByb3BzIHx8IGluZmVybm8uRU1QVFlfT0JKO1xuICAgIC8qKiBAdHlwZSB7b2JqZWN0fSAqL1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQgfHwge307XG59O1xuQ29tcG9uZW50JDEucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlciAobmV4dFByb3BzLCBuZXh0U3RhdGUsIG5leHRDb250ZXh0KSB7XG59O1xuQ29tcG9uZW50JDEucHJvdG90eXBlLmZvcmNlVXBkYXRlID0gZnVuY3Rpb24gZm9yY2VVcGRhdGUgKGNhbGxiYWNrKSB7XG4gICAgaWYgKHRoaXMuX3VubW91bnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlzQnJvd3NlciAmJiBhcHBseVN0YXRlKHRoaXMsIHRydWUsIGNhbGxiYWNrKTtcbn07XG5Db21wb25lbnQkMS5wcm90b3R5cGUuc2V0U3RhdGUgPSBmdW5jdGlvbiBzZXRTdGF0ZSAobmV3U3RhdGUsIGNhbGxiYWNrKSB7XG4gICAgaWYgKHRoaXMuX3VubW91bnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghdGhpcy5fYmxvY2tTZXRTdGF0ZSkge1xuICAgICAgICBpZiAoIXRoaXMuX2lnbm9yZVNldFN0YXRlKSB7XG4gICAgICAgICAgICBxdWV1ZVN0YXRlQ2hhbmdlcyh0aGlzLCBuZXdTdGF0ZSwgY2FsbGJhY2ssIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvd0Vycm9yKCdjYW5ub3QgdXBkYXRlIHN0YXRlIHZpYSBzZXRTdGF0ZSgpIGluIGNvbXBvbmVudFdpbGxVcGRhdGUoKS4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvd0Vycm9yKCk7XG4gICAgfVxufTtcbkNvbXBvbmVudCQxLnByb3RvdHlwZS5zZXRTdGF0ZVN5bmMgPSBmdW5jdGlvbiBzZXRTdGF0ZVN5bmMgKG5ld1N0YXRlKSB7XG4gICAgaWYgKHRoaXMuX3VubW91bnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghdGhpcy5fYmxvY2tTZXRTdGF0ZSkge1xuICAgICAgICBpZiAoIXRoaXMuX2lnbm9yZVNldFN0YXRlKSB7XG4gICAgICAgICAgICBxdWV1ZVN0YXRlQ2hhbmdlcyh0aGlzLCBuZXdTdGF0ZSwgbnVsbCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3dFcnJvcignY2Fubm90IHVwZGF0ZSBzdGF0ZSB2aWEgc2V0U3RhdGUoKSBpbiBjb21wb25lbnRXaWxsVXBkYXRlKCkuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3dFcnJvcigpO1xuICAgIH1cbn07XG5Db21wb25lbnQkMS5wcm90b3R5cGUuY29tcG9uZW50V2lsbE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50ICgpIHtcbn07XG5Db21wb25lbnQkMS5wcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlIChwcmV2UHJvcHMsIHByZXZTdGF0ZSwgcHJldkNvbnRleHQpIHtcbn07XG5Db21wb25lbnQkMS5wcm90b3R5cGUuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlIChuZXh0UHJvcHMsIG5leHRTdGF0ZSwgY29udGV4dCkge1xuICAgIHJldHVybiB0cnVlO1xufTtcbkNvbXBvbmVudCQxLnByb3RvdHlwZS5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAobmV4dFByb3BzLCBjb250ZXh0KSB7XG59O1xuQ29tcG9uZW50JDEucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVXBkYXRlIChuZXh0UHJvcHMsIG5leHRTdGF0ZSwgbmV4dENvbnRleHQpIHtcbn07XG5Db21wb25lbnQkMS5wcm90b3R5cGUuZ2V0Q2hpbGRDb250ZXh0ID0gZnVuY3Rpb24gZ2V0Q2hpbGRDb250ZXh0ICgpIHtcbn07XG5Db21wb25lbnQkMS5wcm90b3R5cGUuX3VwZGF0ZUNvbXBvbmVudCA9IGZ1bmN0aW9uIF91cGRhdGVDb21wb25lbnQgKHByZXZTdGF0ZSwgbmV4dFN0YXRlLCBwcmV2UHJvcHMsIG5leHRQcm9wcywgY29udGV4dCwgZm9yY2UsIGZyb21TZXRTdGF0ZSkge1xuICAgIGlmICh0aGlzLl91bm1vdW50ZWQgPT09IHRydWUpIHtcbiAgICAgICAgaWYgKFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvd0Vycm9yKG5vT3ApO1xuICAgICAgICB9XG4gICAgICAgIHRocm93RXJyb3IoKTtcbiAgICB9XG4gICAgaWYgKChwcmV2UHJvcHMgIT09IG5leHRQcm9wcyB8fCBuZXh0UHJvcHMgPT09IGluZmVybm8uRU1QVFlfT0JKKSB8fCBwcmV2U3RhdGUgIT09IG5leHRTdGF0ZSB8fCBmb3JjZSkge1xuICAgICAgICBpZiAocHJldlByb3BzICE9PSBuZXh0UHJvcHMgfHwgbmV4dFByb3BzID09PSBpbmZlcm5vLkVNUFRZX09CSikge1xuICAgICAgICAgICAgaWYgKCFmcm9tU2V0U3RhdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9ibG9ja1JlbmRlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcywgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fYmxvY2tSZW5kZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLl9wZW5kaW5nU2V0U3RhdGUpIHtcbiAgICAgICAgICAgICAgICBuZXh0U3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCBuZXh0U3RhdGUsIHRoaXMuX3BlbmRpbmdTdGF0ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcGVuZGluZ1NldFN0YXRlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5fcGVuZGluZ1N0YXRlID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHNob3VsZFVwZGF0ZSA9IHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHNob3VsZFVwZGF0ZSAhPT0gZmFsc2UgfHwgZm9yY2UpIHtcbiAgICAgICAgICAgIHRoaXMuX2Jsb2NrU2V0U3RhdGUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRXaWxsVXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlLCBjb250ZXh0KTtcbiAgICAgICAgICAgIHRoaXMuX2Jsb2NrU2V0U3RhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucHJvcHMgPSBuZXh0UHJvcHM7XG4gICAgICAgICAgICB2YXIgc3RhdGUgPSB0aGlzLnN0YXRlID0gbmV4dFN0YXRlO1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgICAgIGluZmVybm8ub3B0aW9ucy5iZWZvcmVSZW5kZXIgJiYgaW5mZXJuby5vcHRpb25zLmJlZm9yZVJlbmRlcih0aGlzKTtcbiAgICAgICAgICAgIHZhciByZW5kZXIgPSB0aGlzLnJlbmRlcihuZXh0UHJvcHMsIHN0YXRlLCBjb250ZXh0KTtcbiAgICAgICAgICAgIGluZmVybm8ub3B0aW9ucy5hZnRlclJlbmRlciAmJiBpbmZlcm5vLm9wdGlvbnMuYWZ0ZXJSZW5kZXIodGhpcyk7XG4gICAgICAgICAgICByZXR1cm4gcmVuZGVyO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpbmZlcm5vLk5PX09QO1xufTtcblxucmV0dXJuIENvbXBvbmVudCQxO1xuXG59KSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2luZmVybm8vZGlzdC9pbmZlcm5vLWNvbXBvbmVudC5ub2RlLmpzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJ2luZmVybm8vZGlzdC9pbmZlcm5vLWNyZWF0ZS1lbGVtZW50Lm5vZGUnKTtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBtb2R1bGUuZXhwb3J0cztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaW5mZXJuby1jcmVhdGUtZWxlbWVudC9pbmZlcm5vLWNyZWF0ZS1lbGVtZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiFcbiAqIGluZmVybm8tY3JlYXRlLWVsZW1lbnQgdjEuMS4xXG4gKiAoYykgMjAxNyBEb21pbmljIEdhbm5hd2F5XG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoJ2luZmVybm8nKSkgOlxuICAgIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJ2luZmVybm8nXSwgZmFjdG9yeSkgOlxuICAgIChnbG9iYWwuSW5mZXJubyA9IGdsb2JhbC5JbmZlcm5vIHx8IHt9LCBnbG9iYWwuSW5mZXJuby5jcmVhdGVFbGVtZW50ID0gZmFjdG9yeShnbG9iYWwuSW5mZXJubykpO1xufSh0aGlzLCAoZnVuY3Rpb24gKGluZmVybm8pIHsgJ3VzZSBzdHJpY3QnO1xuXG4vLyB0aGlzIGlzIE1VQ0ggZmFzdGVyIHRoYW4gLmNvbnN0cnVjdG9yID09PSBBcnJheSBhbmQgaW5zdGFuY2VvZiBBcnJheVxuLy8gaW4gTm9kZSA3IGFuZCB0aGUgbGF0ZXIgdmVyc2lvbnMgb2YgVjgsIHNsb3dlciBpbiBvbGRlciB2ZXJzaW9ucyB0aG91Z2hcblxuZnVuY3Rpb24gaXNTdGF0ZWZ1bENvbXBvbmVudChvKSB7XG4gICAgcmV0dXJuICFpc1VuZGVmaW5lZChvLnByb3RvdHlwZSkgJiYgIWlzVW5kZWZpbmVkKG8ucHJvdG90eXBlLnJlbmRlcik7XG59XG5cblxuZnVuY3Rpb24gaXNJbnZhbGlkKG9iaikge1xuICAgIHJldHVybiBpc051bGwob2JqKSB8fCBvYmogPT09IGZhbHNlIHx8IGlzVHJ1ZShvYmopIHx8IGlzVW5kZWZpbmVkKG9iaik7XG59XG5cbmZ1bmN0aW9uIGlzQXR0ckFuRXZlbnQoYXR0cikge1xuICAgIHJldHVybiBhdHRyWzBdID09PSAnbycgJiYgYXR0clsxXSA9PT0gJ24nICYmIGF0dHIubGVuZ3RoID4gMztcbn1cbmZ1bmN0aW9uIGlzU3RyaW5nKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnc3RyaW5nJztcbn1cblxuZnVuY3Rpb24gaXNOdWxsKG9iaikge1xuICAgIHJldHVybiBvYmogPT09IG51bGw7XG59XG5mdW5jdGlvbiBpc1RydWUob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKG9iaikge1xuICAgIHJldHVybiBvYmogPT09IHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGlzT2JqZWN0KG8pIHtcbiAgICByZXR1cm4gdHlwZW9mIG8gPT09ICdvYmplY3QnO1xufVxuXG52YXIgY29tcG9uZW50SG9va3MgPSB7XG4gICAgb25Db21wb25lbnRXaWxsTW91bnQ6IHRydWUsXG4gICAgb25Db21wb25lbnREaWRNb3VudDogdHJ1ZSxcbiAgICBvbkNvbXBvbmVudFdpbGxVbm1vdW50OiB0cnVlLFxuICAgIG9uQ29tcG9uZW50U2hvdWxkVXBkYXRlOiB0cnVlLFxuICAgIG9uQ29tcG9uZW50V2lsbFVwZGF0ZTogdHJ1ZSxcbiAgICBvbkNvbXBvbmVudERpZFVwZGF0ZTogdHJ1ZVxufTtcbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQkMShuYW1lLCBwcm9wcykge1xuICAgIHZhciBfY2hpbGRyZW4gPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aCAtIDI7XG4gICAgd2hpbGUgKCBsZW4tLSA+IDAgKSBfY2hpbGRyZW5bIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gKyAyIF07XG5cbiAgICBpZiAoaXNJbnZhbGlkKG5hbWUpIHx8IGlzT2JqZWN0KG5hbWUpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSW5mZXJubyBFcnJvcjogY3JlYXRlRWxlbWVudCgpIG5hbWUgcGFyYW1ldGVyIGNhbm5vdCBiZSB1bmRlZmluZWQsIG51bGwsIGZhbHNlIG9yIHRydWUsIEl0IG11c3QgYmUgYSBzdHJpbmcsIGNsYXNzIG9yIGZ1bmN0aW9uLicpO1xuICAgIH1cbiAgICB2YXIgY2hpbGRyZW4gPSBfY2hpbGRyZW47XG4gICAgdmFyIHJlZiA9IG51bGw7XG4gICAgdmFyIGtleSA9IG51bGw7XG4gICAgdmFyIGV2ZW50cyA9IG51bGw7XG4gICAgdmFyIGZsYWdzID0gMDtcbiAgICBpZiAoX2NoaWxkcmVuKSB7XG4gICAgICAgIGlmIChfY2hpbGRyZW4ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBjaGlsZHJlbiA9IF9jaGlsZHJlblswXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChfY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBjaGlsZHJlbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoaXNTdHJpbmcobmFtZSkpIHtcbiAgICAgICAgZmxhZ3MgPSAyIC8qIEh0bWxFbGVtZW50ICovO1xuICAgICAgICBzd2l0Y2ggKG5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3N2Zyc6XG4gICAgICAgICAgICAgICAgZmxhZ3MgPSAxMjggLyogU3ZnRWxlbWVudCAqLztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2lucHV0JzpcbiAgICAgICAgICAgICAgICBmbGFncyA9IDUxMiAvKiBJbnB1dEVsZW1lbnQgKi87XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd0ZXh0YXJlYSc6XG4gICAgICAgICAgICAgICAgZmxhZ3MgPSAxMDI0IC8qIFRleHRhcmVhRWxlbWVudCAqLztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3NlbGVjdCc6XG4gICAgICAgICAgICAgICAgZmxhZ3MgPSAyMDQ4IC8qIFNlbGVjdEVsZW1lbnQgKi87XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIHByb3AgaW4gcHJvcHMpIHtcbiAgICAgICAgICAgIGlmIChwcm9wID09PSAna2V5Jykge1xuICAgICAgICAgICAgICAgIGtleSA9IHByb3BzLmtleTtcbiAgICAgICAgICAgICAgICBkZWxldGUgcHJvcHMua2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocHJvcCA9PT0gJ2NoaWxkcmVuJyAmJiBpc1VuZGVmaW5lZChjaGlsZHJlbikpIHtcbiAgICAgICAgICAgICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuOyAvLyBhbHdheXMgZmF2b3VyIGNoaWxkcmVuIGFyZ3MsIGRlZmF1bHQgdG8gcHJvcHNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHByb3AgPT09ICdyZWYnKSB7XG4gICAgICAgICAgICAgICAgcmVmID0gcHJvcHMucmVmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaXNBdHRyQW5FdmVudChwcm9wKSkge1xuICAgICAgICAgICAgICAgIGlmICghZXZlbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50cyA9IHt9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBldmVudHNbcHJvcF0gPSBwcm9wc1twcm9wXTtcbiAgICAgICAgICAgICAgICBkZWxldGUgcHJvcHNbcHJvcF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGZsYWdzID0gaXNTdGF0ZWZ1bENvbXBvbmVudChuYW1lKSA/IDQgLyogQ29tcG9uZW50Q2xhc3MgKi8gOiA4IC8qIENvbXBvbmVudEZ1bmN0aW9uICovO1xuICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgaWYgKCFwcm9wcykge1xuICAgICAgICAgICAgICAgIHByb3BzID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICAgICAgICAgICAgY2hpbGRyZW4gPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIHByb3AkMSBpbiBwcm9wcykge1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudEhvb2tzW3Byb3AkMV0pIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlZikge1xuICAgICAgICAgICAgICAgICAgICByZWYgPSB7fTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVmW3Byb3AkMV0gPSBwcm9wc1twcm9wJDFdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocHJvcCQxID09PSAna2V5Jykge1xuICAgICAgICAgICAgICAgIGtleSA9IHByb3BzLmtleTtcbiAgICAgICAgICAgICAgICBkZWxldGUgcHJvcHMua2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpbmZlcm5vLmNyZWF0ZVZOb2RlKGZsYWdzLCBuYW1lLCBwcm9wcywgY2hpbGRyZW4sIGV2ZW50cywga2V5LCByZWYpO1xufVxuXG5yZXR1cm4gY3JlYXRlRWxlbWVudCQxO1xuXG59KSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2luZmVybm8vZGlzdC9pbmZlcm5vLWNyZWF0ZS1lbGVtZW50Lm5vZGUuanNcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vY29va2llLWNvbnZlcnRlci5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vY29va2llLWNvbnZlcnRlci5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9jb29raWUtY29udmVydGVyLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHAvY3NzL2Nvb2tpZS1jb252ZXJ0ZXIuY3NzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jb29raWUtY29udmVydGVyIHRleHRhcmVhIHtcXG5cXHRtaW4td2lkdGg6OTAlO1xcbn1cXG5cXG4uY29va2llLWNvbnZlcnRlciAucmF0aW8ge1xcblxcdG1heC13aWR0aDogNTBweDtcXG59XFxuXFxuLmNvb2tpZS1jb252ZXJ0ZXIgLmNvbnZlcnRlZCBzcGFuIHtcXG5cXHRjdXJzb3I6cG9pbnRlcjtcXG5cXHRwYWRkaW5nOjFweDtcXG5cXHRiYWNrZ3JvdW5kOiNlZWU7XFxuXFxuXFx0Ym9yZGVyLXJhZGl1czozcHg7XFxuXFx0Ym9yZGVyLXRvcDowcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuXFx0Ym9yZGVyLWJvdHRvbTozcHggc29saWQgI2NjYztcXG5cXHRib3JkZXItbGVmdDogMXB4IHNvbGlkICNjY2M7XFxuXFx0Ym9yZGVyLXJpZ2h0OjFweCBzb2xpZCAjY2NjO1xcbn1cXG5cXG4uY29va2llLWNvbnZlcnRlciAuY29udmVydGVkIHNwYW46YWN0aXZlIHtcXG5cXHRwb3NpdGlvbjpyZWxhdGl2ZTsgdG9wOjFweDtcXG5cXHRib3JkZXItYm90dG9tLXdpZHRoOjJweDtcXG59XFxuXFxuLmNvb2tpZS1jb252ZXJ0ZXIgLmNvbnZlcnRlZCAub24ge1xcblxcdGJhY2tncm91bmQ6I0Q2RUQ5MDtcXG5cXHRib3JkZXItY29sb3I6I0JFRDU2QTtcXG5cXHRib3JkZXItdG9wLWNvbG9yOnRyYW5zcGFyZW50O1xcbn1cXG5cXG4uY29va2llLWNvbnZlcnRlciAucGVybWFsaW5rIHtcXG5cXHRtYXJnaW46MDtcXG5cXHRjb2xvcjpncmV5O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL2FwcC9jc3MvY29va2llLWNvbnZlcnRlci5jc3Ncbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHJcblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0aWYoaXRlbVsyXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG5cdH07XHJcblxyXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xyXG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcclxuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xyXG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcclxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcclxuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cclxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcclxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcclxuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdHJldHVybiBsaXN0O1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbnZhciBzdHlsZXNJbkRvbSA9IHt9LFxyXG5cdG1lbW9pemUgPSBmdW5jdGlvbihmbikge1xyXG5cdFx0dmFyIG1lbW87XHJcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0XHRyZXR1cm4gbWVtbztcclxuXHRcdH07XHJcblx0fSxcclxuXHRpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAvbXNpZSBbNi05XVxcYi8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKTtcclxuXHR9KSxcclxuXHRnZXRIZWFkRWxlbWVudCA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xyXG5cdH0pLFxyXG5cdHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsLFxyXG5cdHNpbmdsZXRvbkNvdW50ZXIgPSAwLFxyXG5cdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wID0gW107XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcclxuXHRpZih0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcclxuXHRcdGlmKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xyXG5cdH1cclxuXHJcblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XHJcblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxyXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xyXG5cclxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgPGhlYWQ+LlxyXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XHJcblxyXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCk7XHJcblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XHJcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xyXG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XHJcblx0XHR9XHJcblx0XHRpZihuZXdMaXN0KSB7XHJcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCk7XHJcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XHJcblx0XHR9XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcclxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xyXG5cdFx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKylcclxuXHRcdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKCk7XHJcblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRpZihkb21TdHlsZSkge1xyXG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XHJcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzKGxpc3QpIHtcclxuXHR2YXIgc3R5bGVzID0gW107XHJcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XHJcblx0XHR2YXIgaWQgPSBpdGVtWzBdO1xyXG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XHJcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xyXG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XHJcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XHJcblx0XHRpZighbmV3U3R5bGVzW2lkXSlcclxuXHRcdFx0c3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcclxuXHRcdGVsc2VcclxuXHRcdFx0bmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xyXG5cdH1cclxuXHRyZXR1cm4gc3R5bGVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KSB7XHJcblx0dmFyIGhlYWQgPSBnZXRIZWFkRWxlbWVudCgpO1xyXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wW3N0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xyXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XHJcblx0XHRpZighbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcclxuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBoZWFkLmZpcnN0Q2hpbGQpO1xyXG5cdFx0fSBlbHNlIGlmKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XHJcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0fVxyXG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AucHVzaChzdHlsZUVsZW1lbnQpO1xyXG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xyXG5cdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0Jy4gTXVzdCBiZSAndG9wJyBvciAnYm90dG9tJy5cIik7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XHJcblx0c3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHR2YXIgaWR4ID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZUVsZW1lbnQpO1xyXG5cdGlmKGlkeCA+PSAwKSB7XHJcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSB7XHJcblx0dmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuXHRzdHlsZUVsZW1lbnQudHlwZSA9IFwidGV4dC9jc3NcIjtcclxuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KTtcclxuXHRyZXR1cm4gc3R5bGVFbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKSB7XHJcblx0dmFyIGxpbmtFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XHJcblx0bGlua0VsZW1lbnQucmVsID0gXCJzdHlsZXNoZWV0XCI7XHJcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmtFbGVtZW50KTtcclxuXHRyZXR1cm4gbGlua0VsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQsIHVwZGF0ZSwgcmVtb3ZlO1xyXG5cclxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcclxuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XHJcblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSk7XHJcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCB0cnVlKTtcclxuXHR9IGVsc2UgaWYob2JqLnNvdXJjZU1hcCAmJlxyXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcclxuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xyXG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0XHRpZihzdHlsZUVsZW1lbnQuaHJlZilcclxuXHRcdFx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlRWxlbWVudC5ocmVmKTtcclxuXHRcdH07XHJcblx0fSBlbHNlIHtcclxuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcclxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xyXG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZShvYmopO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XHJcblx0XHRpZihuZXdPYmopIHtcclxuXHRcdFx0aWYobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZW1vdmUoKTtcclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xyXG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcclxuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcclxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xyXG5cdH07XHJcbn0pKCk7XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xyXG5cclxuXHRpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xyXG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2RlcztcclxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcclxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGVFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XHJcblxyXG5cdGlmKG1lZGlhKSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXHJcblx0fVxyXG5cclxuXHRpZihzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcclxuXHR9IGVsc2Uge1xyXG5cdFx0d2hpbGUoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcclxuXHRcdH1cclxuXHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUxpbmsobGlua0VsZW1lbnQsIG9iaikge1xyXG5cdHZhciBjc3MgPSBvYmouY3NzO1xyXG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xyXG5cclxuXHRpZihzb3VyY2VNYXApIHtcclxuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XHJcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XHJcblx0fVxyXG5cclxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcclxuXHJcblx0dmFyIG9sZFNyYyA9IGxpbmtFbGVtZW50LmhyZWY7XHJcblxyXG5cdGxpbmtFbGVtZW50LmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG5cclxuXHRpZihvbGRTcmMpXHJcblx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=