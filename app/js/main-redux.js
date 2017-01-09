'use strict'

import { createStore } from 'redux'
import xtend from 'xtend'

require("cookie-converter.css") //@todo separate file in own dist

// -- Redux Base --------------------------------------------------------------

function defaultState() {
	return {
		convert: {from:6, to:2},
		el: '#cookie-converter',
		locale: 'en',
		minRecipeRows:5,
		recipe: "",
	}
}

let handlers = {

}

function reducer(state, action) {
	let { type } = action
	if (action && handlers[type]) {
		return handlers[type](state, action)
	} else {
		if (process.env.NODE_ENV !== 'production') {
			console.warn("Unknown action type '%s'.", type)
		}
		return state
	}
}

function makeStore(opts) {
	let initialState = opts // Use all the opts as state
	let devtools = !!window.devToolsExtension
		? window.devToolsExtension()
		: void 0
	let store = createStore(reducer, initialState, devtools)
}

// -- View --------------------------------------------------------------------

// -- Logic -------------------------------------------------------------------

var CookieConverter = window.CookieConverter = {
	i18n:{},
	base64Encode: base64Encode,
	base64Decode: base64Decode,
}

CookieConverter.create = function(_opts) {
	let opts = xtend(defaultState(), _opts)
	let store = makeStore(opts)
	let el = selectEl(opts.el)
	console.warn('@todo rendering')
}

CookieConverter.getHashRecipe = function(defaultRecipe) {
	console.warn('@todo read full state from hash')
	return defaultRecipe
}

// -- Util --------------------------------------------------------------------

function selectEl(cssSelector) {
	if (cssSelector instanceof Element) {
		return cssSelector
	} else if (document.querySelector) {
		return document.querySelector(cssSelector)
	} else {
		let $ = window.jQuery || window.$
		if ($) {
			let selected = $(cssSelector)
			// other libs
			if (selected instanceof Element) {
				return selected
			// jQuery
			} else if (typeof selected.get === 'function') {
				return selected.get(0)
			}
		}
	}
	throw new Error("Unsupported browser")
}

function base64Encode(str) {
	return window.btoa(unescape(encodeURIComponent(str)));
}

function base64Decode(str) {
	return decodeURIComponent(escape(window.atob(str)));
}
