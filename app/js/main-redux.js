'use strict'

import { createStore } from 'redux'
import xtend from 'xtend'
import Inferno from 'inferno'
import { Provider, connect } from 'inferno-redux'
import Component from 'inferno-component'

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

function reducer(state, action) {
	let { type } = action
	if (action && reducers[type]) {
		return reducers[type](state, action)
	} else {
		if (process.env.NODE_ENV !== 'production') {
			console.warn("Unknown action type '%s'.", type)
		}
		return state
	}
}

function makeStore(opts) {
	let initialState = opts // Use all the opts as state
	initialState.lc = CookieConverter.i18n[initialState.locale]
	console.log(initialState)
	let devtools = !!window.__REDUX_DEVTOOLS_EXTENSION__
		? window.__REDUX_DEVTOOLS_EXTENSION__()
		: void 0
	return createStore(reducer, initialState, devtools)
}

// -- View --------------------------------------------------------------------

const View = connect(
	state => state, // mapStateToProps,
	dispatch => ({
		changeConvertFrom: inputEvt(val => dispatch(actions.changeConvertFrom(val)))
	}) // mapDispatchToProps,
)(
	class Top extends Component {
		constructor(props) {
			super(props)
		}

		recipeRows(recipe) {
			return Math.max(
				this.props.minRecipeRows,
				recipe.split('\n').length
			)
		}

		formatNumberPicker(value){
			let { lc } = this.props
			console.log('this.props', this.props)
			let change = this.props.changeConvertFrom
			if (value <= 10) {
				return (
					<select onChange={change}>
						{[1,2,3,4,5,6,7,8,9,10].map(x =>
							<option value={x} selected={x == value}>
							{x}
							</option>
						)}
						<option value="11">{lc.ratio_more}</option>
					</select>
				)
			} else {
				return (<input type="number" value={value} />)
			}
		}

		render() {
			let { lc, recipe, recipeRows, convert } = this.props
			return (
			<div className="cookie-converter">
				<div className="cconv-block recipe-source">
					<label>
						{lc.ratio_from_before + ' '}
						{this.formatNumberPicker(convert.from)}
						{' ' + lc.ratio_from_after}
					</label>
					<textarea
						className="recipe"
						rows={this.recipeRows(recipe)}>{recipe}</textarea>
				</div>
			</div>
			)
		}
	}
)

// -- Logic -------------------------------------------------------------------

const actions = {
	changeConvertFrom: (x) => ({type: 'C_CHANGE_CONVERT_FROM', value: x})
}

const reducers = {
	C_CHANGE_CONVERT_FROM: function(state, {value}) {
		let { convert } = state
		convert = {...convert, from: Number(value)}
		return {...state, convert}
	}
}


var CookieConverter = window.CookieConverter = {
	i18n:{},
	base64Encode: base64Encode,
	base64Decode: base64Decode,
}

CookieConverter.create = function(_opts) {
	let opts = xtend(defaultState(), _opts)
	let store = makeStore(opts)
	let el = selectEl(opts.el)
	Inferno.render(
		<Provider store={store}>
			<View />
		</Provider>,
		el
	)
	console.warn('@todo return an action dispatcher to this store // return wrapActions(actions, store.dispatch)')
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

function inputEvt(fn, ...more) {
	return function(evt) {
		console.log('handling event')
		console.log('evt.target.value', evt.target.value)
		console.log('evt', evt)
		return fn(evt.target.value, ...more)
	}
}
