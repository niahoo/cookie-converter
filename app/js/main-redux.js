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
		lc: {},
		locale: 'en',
		minRecipeRows: 5,
		recipe: "",
		recipeBlocks: [],
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

function makeStore(state) {
	let devtools = !!window.__REDUX_DEVTOOLS_EXTENSION__
		? window.__REDUX_DEVTOOLS_EXTENSION__()
		: void 0
	return createStore(reducer, state, devtools)
}

// -- View --------------------------------------------------------------------

const RecipeConverted = connect(
	state => state, // mapStateToProps,
	dispatch => ({
		toggleNumberConvert: index => dispatch(actions.toggleNumberConvert(index)),
	}) // mapDispatchToProps,
)(
	class RecipeConverted_In extends Component {

		renderBlock(block, index) {
			let { convert, toggleNumberConvert } = this.props
			let { from, to } = convert
			if (block.t === 'var') {
				let { n, convert } = block
				let number = cookingFormat(convert ? ratio(n, from, to) : n)
				return (
					<span
						className={'var ' + (convert ? 'on' : 'off')}
						onClick={() => toggleNumberConvert(index)}>
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
		updateRecipe: val => dispatch(actions.updateRecipe(val)),
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
			let lc = getLc(this.props.locale)
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
				locale,
				recipe,
				recipeRows,
				updateRecipe,
			} = this.props
			let lc = getLc(locale)
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
			let updateRecipeEvt = inputEvt(updateRecipe)
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
						onInput={updateRecipeEvt}
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

function renderConverter(store) {
	let el = selectEl(store.getState().el)
	Inferno.render(
		<Provider store={store}>
			<View />
		</Provider>,
		el
	)
}

// -- Logic -------------------------------------------------------------------

const actions = {
	changeConvertFrom: (x) => ({type: 'C_CHANGE_CONVERT_FROM', value: x}),
	changeConvertTo: (x) => ({type: 'C_CHANGE_CONVERT_TO', value: x}),
	toggleNumberConvert: (x) => ({type: 'C_TOGGLE_NUMBER_CONVERT', index: x}),
	updateRecipe: (x) => ({type: 'C_UPDATE_RECIPE', recipe: x}),
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
	C_TOGGLE_NUMBER_CONVERT: function(state, {index}) {
		let { recipeBlocks } = state
		let block = recipeBlocks[index]
		if (block === void 0) {
			return state
		}
		if (block.t !== 'var') {
			throw new Error("Block is not a var : " + JSON.stringify(block))
		}
		let newBlock = { ...block, convert: !block.convert }
		let newBlocks = recipeBlocks
			.slice(0, index) // before
			.concat([newBlock])
			.concat(recipeBlocks.slice(index +1)) // after
		return { ...state, recipeBlocks: newBlocks }
	},
	C_UPDATE_RECIPE: function(state, {recipe}) {
		let recipeBlocks = parseRecipe(recipe)
		return { ...state, recipeBlocks, recipe}
	}
}

function makePermalink(state) {
	return (
		window.location.href.replace(/#.*/, '') // remove current hash
		+ '#'
		+ serialize(exportState(state))
	)
}

function exportState(state) {
	let { recipe, convert, recipeBlocks}	= state
	let disabledBlocksIndexes = recipeBlocks
		.reduce((acc, b, i) => {
			if (b.t === 'var' && !b.convert) {
				acc.push(i)
			}
			return acc
		}, [])
	let data = {
		recipe,
		convert,
		disable: disabledBlocksIndexes.length
			? disabledBlocksIndexes
			: void 0
	}
	return data
}

function serialize(data) {
	return base64Encode(JSON.stringify(data))
}

function unserialize(str) {
	try {
		return JSON.parse(base64Decode(str))
	}
	catch(e){
		return false
	}
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
	let hash = !!_state.hash
	let hashData = false
	if (hash) {
		let serialized = window.location.hash.slice(1)
		hashData = unserialize(serialized)
	}
	let state = xtend(defaultState(), _state)
	if (hashData) {
		// rebind if we has hash data
		state = xtend(state, {
			recipe: hashData.recipe || _state.recipe,
			convert: hashData.convert || _state.convert,
		})
	}
	state.recipeBlocks = parseRecipe(state.recipe)
	let store = makeStore(state)
	if (hashData.disable && hashData.disable.forEach) {
		hashData.disable.forEach(x => store.dispatch(actions.toggleNumberConvert(x)))
	}
	renderConverter(store)
	console.warn('@todo return an action dispatcher to this store // return wrapActions(actions, store.dispatch)')
}

CookieConverter.getHashRecipe = function(defaultRecipe) {
	console.warn('This function is deprecated')
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
		// Select is ok but input onInput events does not pass the <input/>
		// as 'this' here @todo why?
		return fn.call(/* this */evt.target, evt.target.value, ...more)
	}
}

function ensureNumber(n, def) {
	n = Number(n)
	return isNaN(n) ? def : n
}

function getLc(locale) {
	let english = CookieConverter.i18n['en']
	return xtend(english, CookieConverter.i18n[locale])
}
