'use strict'

import { createStore } from 'redux'
import xtend from 'xtend'
import Inferno, { linkEvent } from 'inferno'
import { Provider, connect } from 'inferno-redux'
import Component from 'inferno-component'

require("cookie-converter.css") //@todo separate file in own dist

// -- Redux Base --------------------------------------------------------------

function defaultState() {
	return {
		convert: {from:6, to:2},
		el: '#cookie-converter',
		locale: 'en',
		minRecipeRows: 5,
		recipe: "",
	}
}

function reducer(state, action) {
	let { type } = action
	console.log(JSON.stringify(action, 0, '  '))
	if (action && reducers[type]) {
		return reducers[type](state, action)
	} else {
		if (process.env.NODE_ENV !== 'production') {
			console.warn("Unknown action type '%s'.", type)
		}
		return state
	}
}

function makeStore(state) {
	let english = CookieConverter.i18n['en']
	// parse the original recipe
	let recipeBlocks = parseRecipe(state.recipe)
	let initialState = xtend({}, state, {
		// set the locale
		lc: xtend(english, CookieConverter.i18n[state.locale]),
		recipeBlocks,
	})
	console.log(initialState)
	let devtools = !!window.__REDUX_DEVTOOLS_EXTENSION__
		? window.__REDUX_DEVTOOLS_EXTENSION__()
		: void 0
	return createStore(reducer, initialState, devtools)
}

// -- View --------------------------------------------------------------------

const RecipeConverted = connect(
	state => state, // mapStateToProps,
	dispatch => ({
		// changeConvertFrom: val => dispatch(actions.changeConvertFrom(val)),
		// changeConvertTo: val => dispatch(actions.changeConvertTo(val)),
	}) // mapDispatchToProps,
)(
	class RecipeConverted_In extends Component {

		renderBlock(block) {
			let { from, to } = this.props.convert
			if (block.t === 'var') {
				let { n, convert } = block
				let number = cookingFormat(convert ? ratio(n, from, to) : n)
				return (
					<span
						className={'var ' + (convert ? 'on' : 'off')}
						onClick={() => console.log('clicked', this)}>
							{number}
						</span>
				)
			} else {
				let { txt } = block
				let txts = txt.split('\n')
				let last = txts.pop()
				return txts
					.map(txt => <span>{txt}<br/></span>)
					.concat([<span>{last}</span>])
			}
		}

		render() {
			let { recipeBlocks, convert } = this.props
			let renderBlock = ::this.renderBlock
			return (
				<div class="converted">
					{recipeBlocks.map(renderBlock)}
				</div>
			)
		}
	}
)

const View = connect(
	state => state, // mapStateToProps,
	dispatch => ({
		changeConvertFrom: val => dispatch(actions.changeConvertFrom(val)),
		changeConvertTo: val => dispatch(actions.changeConvertTo(val)),
	}) // mapDispatchToProps,
)(
	class Top extends Component {

		recipeRows(recipe) {
			return Math.max(
				this.props.minRecipeRows,
				recipe.split('\n').length
			)
		}

		formatNumberPicker(value, onChange){
			let { lc } = this.props
			if (value <= 10 && !this.state.customInputRatio) {
				return (
					<select onChange={onChange}>
						{[1,2,3,4,5,6,7,8,9,10].map(x =>
							<option value={x} selected={x == value}>
							{x}
							</option>
						)}
						<option value="11">{lc.ratio_more}</option>
					</select>
				)
			} else {
				return (<input type="text" value={value} onInput={onChange} />)
			}
		}

		copyPermalink({ lc, permalink }, _evt) {
			let prompt = lc.permalink_copy_prompt
			window.prompt(prompt, permalink)
		}

		maybeActivateCustomRatio(value, el) {
			let { customInputRatio } = this.state
			console.log('value', value)
			console.log('value > 10', value > 10)
			console.log('!customInputRatio', !customInputRatio)
			let parent = el.parentNode
			if (Number(value) > 10 && !customInputRatio){
				this.setState({customInputRatio: true}, () => {
					// when setState is done (and hopefully the rendering),
					// we select the input and focus it
					let input = parent.getElementsByTagName('input')[0]
					if (input) {
						input.focus()
						input.select()
					}
				})
			}
		}

		render() {
			let {
				changeConvertFrom,
				changeConvertTo,
				convert,
				lc,
				recipe,
				recipeRows,
			} = this.props
			console.log('this.state', this.state)
			let permalink = makePermalink(this.props)
			let permalinkEvt = linkEvent({permalink, lc}, this.copyPermalink)
			let self = this
			let changeConvertFromEvt = inputEvt(function(val) {
				let inputEl = this
				self.maybeActivateCustomRatio(val, inputEl)
				changeConvertFrom(val)
			})
			let changeConvertToEvt = inputEvt(function(val) {
				let inputEl = this
				self.maybeActivateCustomRatio(val, inputEl)
				changeConvertTo(val)
			})
			return (
			<div className="cookie-converter">
				<div className="cconv-block recipe-source">
					<label>
						{lc.ratio_from_before + ' '}
						{this.formatNumberPicker(convert.from, changeConvertFromEvt)}
						{' ' + lc.ratio_from_after} :
					</label>
					<textarea
						className="recipe"
						rows={this.recipeRows(recipe)}>{recipe}</textarea>
					<p>
						<a href={permalink}>{lc.permalink}</a>
						{' '}
						<small><button onClick={permalinkEvt}>
							{lc.copy_permalink}
						</button></small>
					</p>
				</div>
				<div className="cconv-block recipe-converted">
					<label>
						{lc.ratio_to_before + ' '}
						{this.formatNumberPicker(convert.to, changeConvertToEvt)}
						{' ' + lc.ratio_to_after} :
					</label>
					<RecipeConverted />
				</div>
			</div>
			)
		}
	}
)

// -- Logic -------------------------------------------------------------------

const actions = {
	changeConvertFrom: (x) => ({type: 'C_CHANGE_CONVERT_FROM', value: x}),
	changeConvertTo: (x) => ({type: 'C_CHANGE_CONVERT_TO', value: x}),
}

const reducers = {
	C_CHANGE_CONVERT_FROM: function(state, {value}) {
		let { convert } = state
		convert = {...convert, from: ensureNumber(value, defaultState().convert.from)}
		return {...state, convert}
	},
	C_CHANGE_CONVERT_TO: function(state, {value}) {
		let { convert } = state
		convert = {...convert, to: ensureNumber(value, defaultState().convert.to)}
		return {...state, convert}
	},
}

function makePermalink(state) {
	return (
		window.location.href.replace(/#.*/, '') // remove current hash
		+ '#'
		+ serializeState(state)
	)
}

function serializeState(state) {
	let { recipe, convert }	= state
	let data = { recipe, convert }
	return base64Encode(JSON.stringify(data))
}

var fracts = {
	'1/2': 0.5,
	'\u00BD': 0.5, // ½ unicode
	'1/3': 0.33,
	'2/3': 0.67,
	'1/4': 0.25,
	'1/8': 0.125,
	'1/5': 0.2,
	'1/6': 0.17
}

var deFracts = {
	'0.5': '1/2',
	'0.33': '1/3',
	'0.67': '2/3',
	'0.25': '1/4',
	'0.125': '1/8',
	'0.2': '1/5',
	'0.17': '1/6'
}

function cookingFormat(value) {
	return deFracts[value] || value
}

function parseRecipe(recipe) {
	// Cut the recipe in constant parts and variable parts. Variable parts
	// contain the base number and a .convert property (to disable converting)

	// Replace cooking format by actual numbers
	let cleaned = Object.keys(fracts).reduce(function(tpl, frac){
		return tpl.replace(new RegExp(frac, 'g'), fracts[frac])
	}, recipe)
		// replace french decimals
		.replace(/([0-9]),([0-9])/g, (_, int, dec) => int + '.' + dec)

	let variables = []
	let separator = '__x_X_CUT_HERE_X_x__'
	// now we look for numbers in the recipe, we store them in variables[] and
	// replace them with a separator.
	let template = (cleaned)
		.replace(/[0-9\.]+/g, val => {
			// if not a true number, like "1.5.4", treat as text
			let n = Number(val)
			if (n != val)
				return value
			variables.push({convert: true, n, t: 'var'})
			return separator
		})
	// now, we split the recipe with the separator, and create text blocks
		.split(separator)
		.map(txt => ({txt, t: 'txt'}))
	// we must now intersperse this array with the variables array
	template = [].concat(...template.map((txtBlock, i) => [txtBlock, variables[i]]))
	// the last element is always undefined because if the recipe ends with a
	// number, an empty string is created: "aa_".split('_') = ["aa", ""].
	// So the last variables[i] does not exist
	let undef = template.pop()
	if (undef !== void 0) { console.error("@todo You'd better check this out") }
	template.map(x => console.log(JSON.stringify(x, 0, ' ')))
	return template
}

function ratio(value, from, to) {
	var converted = value / from * to
	var decimals = 2 // changing decimals may broke fracts/deFracts
	var dec = Math.pow(10, decimals)
	return Math.round(converted * dec) / dec
}

let CookieConverter = window.CookieConverter = {
	i18n:{},
	base64Encode: base64Encode,
	base64Decode: base64Decode,
}

CookieConverter.create = function(_state) {
	let state = xtend(defaultState(), _state)
	let store = makeStore(state)
	let el = selectEl(state.el)
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
		console.log('this', this)
		console.log('evt', evt)
		console.log('evt.target.value', evt.target.value)
		// Select is ok but input onInput events does not pass the <input/>
		// as 'this' here @todo why?
		return fn.call(/* this */ evt.target, evt.target.value, ...more)
	}
}

function ensureNumber(n, def) {
	n = Number(n)
	return isNaN(n) ? def : n
}


