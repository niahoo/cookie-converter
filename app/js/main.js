'use strict'

var Ractive = require('ractive')
var extend = require('extend')
require("cookie-converter.css");

if ('production' === process.env.APP_ENV) {
	Ractive.DEBUG = false
}

function base64Encode(str) {
	return window.btoa(unescape(encodeURIComponent(str)));
}

function base64Decode(str) {
	return decodeURIComponent(escape(window.atob(str)));
}

var CookieConverter = {
	i18n:{},
	base64Encode: base64Encode,
	base64Decode: base64Decode,
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

function ratio(value, from, to) {
	var converted = value / from * to
	var decimals = 2 // changing decimals may broke fracts/deFracts
	var dec = Math.pow(10, decimals)
	return Math.round(converted * dec) / dec
}

function cookingFormat(value) {
	return deFracts[value] || value
}

function defaultOpts() {
	return {
		// initial conversion ratio
		convert: {from:6, to:2},
		recipe: "",
		minRecipeRows:5,
		locale: 'en'
	}
}

// Replace all the numbers by template keys
function makesourceConf(recipe) {
	var keyID = 0
	var sourceValues = {}
	// parse some cooking formatted numbers like 1/2 instead of 0.5
	var template = Object.keys(fracts).reduce(function(template,frac){
		return template.replace(new RegExp(frac, 'g'),fracts[frac])
	}, recipe)
	// nl2br
	.replace(/\n/g,'<br/>')
	// comma decimals (french, ...) to point decimals
	.replace(/([0-9]),([0-9])/g,function(_,left,right){
		return left + '.' + right
	})
	// set template placeholders
	.replace(/[0-9\.]+/g, function(value){
		if (Number(value) != value) return value
		var key = '_' + keyID
		sourceValues[key] = {
			value:value,
			convert:true
		}
		keyID += 1
		// the toggle is handled directly in the on-cick via a 'method' call
		// and not a proxied event
		return (
			'<span class="qtty {{ vals.__KEY__.convert ? \'on\' : \'off\' }}" \
				on-click="toggle(\'vals.__KEY__.convert\')">\
				{{converted.__KEY__}}\
			</span>'.replace(/__KEY__/g, key)
		)
	})
	return {
		template:template,
		vals:sourceValues
	}
}

function selectToInputObserver(ractive, key, customKey, selector) {
	ractive.observe(key, function(newValue, oldValue, keypath){
		if (newValue > 10 && ! ractive.get(customKey)) {
			ractive.set(customKey, true).then(function(){
				var input = ractive.find(selector)
				input.focus()
				input.select()
			})
		}
	})
}

/**
 * Replace the current url hash with text encoded with base 64
 */
function makePermalink(recipe) {
	if (process.env.APP_ENV !== 'production') console.log('make permalink for %s', recipe)
	var link = (
		window.location.href.replace(/#.*/, '') // remove any existing hash
		+ '#'
		+ base64Encode(recipe)
	)
	if (process.env.APP_ENV !== 'production') console.log(' = %s', link)
	return link
}

function escapeHtml(html) {
	return html
		.replace(/</g, '〈')
		.replace(/>/g, '〉')
}

CookieConverter.getHashRecipe = function(defaultRecipe) {
	if (window.location.hash.length) {
		try {
			var captures = /#(.+)/.exec(window.location.hash)
			if (captures !== null) {
				return CookieConverter.base64Decode(captures[1])
			}
		} catch (e) {
			console.error(e)
		}
	}
	return defaultRecipe
}



CookieConverter.create = function(_opts){

	var opts = extend(defaultOpts(),_opts)

	opts.recipeRows = opts.recipe.split('\n').length

	// get the localized strings (and maybe funs)
	var langStrs = CookieConverter.i18n[opts.locale]

	var recipe = opts.recipe
	console.log('recipe : \n%s', recipe)
	var recipe = escapeHtml(recipe)
	console.log('html entities encoded recipe : \n%s', recipe)

	var cconv = new Ractive({
		el: opts.el,
		template: require('tpl/app.html'),
		data: {
			recipe: recipe,
			recipeRows: opts.recipeRows,
			// vals contains objects containing the source values and a "convert" propery meaning if we should convert each value
			vals: {},
			// contains only the converted values, keys match .vals keys
			converted: {},
			convertFrom: opts.convert.from,
			convertTo: opts.convert.to,
			customConvertTo: false,
			customConvertFrom: false,
			recipeTemplate: '',
			getRecipePartial: function(){
				return String(this.get('partialKey'))
			},
			partialKey: 0,
			lc: langStrs
		},
		partials:{'0':''},
		setLocale: function(lc) {
			this.set('lc', CookieConverter.i18n[lc])
		},
		copyPermalink: function() {
			var lc = this.get('lc')
			var prompt = lc.permalink_copy_prompt
			var permalink = this.get('permalink')
			window.prompt(prompt, permalink)
		},
	})


	// When we change the values for the template
	cconv.observe('vals vals.* convertTo convertFrom', function(newValue, oldValue, keypath){
		var vals = keypath === 'vals' ? newValue : this.get('vals')
		// convert sourceValues objects to (meybe) converted numbers
		var from = this.get('convertFrom'), to = this.get('convertTo')
		this.set('converted',Object.keys(vals).reduce(function(converted,k){
			var inf = vals[k]
			converted[k] = inf.convert
				? cookingFormat(ratio(inf.value, from, to))
				: cookingFormat(inf.value)
			return converted
		},{}))
	})

	// Once we set "More" (== 11) as a value for a ration, we set this ratio as
	// "custom", an text <input/> is subtitued to the <select/>
	// Then the input is focused. We do this only once so we check if
	// customConvert(From|To) are not already set

	selectToInputObserver(cconv, 'convertFrom', 'customConvertFrom', '.recipe-source .ratio')
	selectToInputObserver(cconv, 'convertTo', 'customConvertTo', '.recipe-converted .ratio')

	// when the user input changes, we call makesourceConf to gather the new
	// values and compile a new partial
	cconv.observe('recipe', function(recipe){
		if (process.env.APP_ENV !== 'production') console.log('recipe changed : %s', recipe)
		var sourceConf = makesourceConf(recipe)
		// partials are cached so we need to increment the key to register a new
		// partial
		var pk = this.get('partialKey') + 1
		this.partials = {} // remove partials but we still need an incremented key.
		this.partials[String(pk)] = sourceConf.template
		var rows = recipe.split('\n').length
		this.set({
			partialKey: pk, // point the key used to find the partial to the new key
			vals: sourceConf.vals,
			recipeRows: Math.max(rows, opts.minRecipeRows),
			permalink: makePermalink(recipe)
		})
	})


	// we return the ractive instance, free for use !
	return cconv
}

window.CookieConverter = CookieConverter
