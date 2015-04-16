var Ractive = require('ractive')
var extend = require('extend')
require("cookie-converter.css");

var CookieConverter = {}

CookieConverter.i18n = {}


var fracts = {
	'1/2': 0.5,
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

CookieConverter.create = function(_opts){
	console.log('creating')

	var opts = extend(defaultOpts(),_opts)

	opts.recipeRows = opts.recipe.split('\n').length

	console.log('opts',opts)

	// get the localized strings (and maybe funs)
	var langStrs = CookieConverter.i18n[opts.locale]

	var cconv = new Ractive({
		el: opts.el,
		template: require('tpl/app.html'),
		data: {
			recipe: opts.recipe,
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
			var langStrs = CookieConverter.i18n[lc]
			console.log('change lang', lc, langStrs)
			cconv.set('lc', langStrs)
		}
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
	cconv.observe('convertTo', function(newValue, oldValue, keypath){
		if (newValue > 10) this.set('customConvertTo', true)
	})
	cconv.observe('convertFrom', function(newValue, oldValue, keypath){
		if (newValue > 10) this.set('customConvertFrom', true)
	})

	// when the user input changes, we call makesourceConf to gather the new
	// values and compile a new partial
	cconv.observe('recipe',function(recipe){
		var sourceConf = makesourceConf(recipe)
		// partials are cached so we need to increment the key to get a new key
		var pk = this.get('partialKey') + 1
		this.partials[String(pk)] = sourceConf.template
		var rows = recipe.split('\n').length
		this.set({
			partialKey: pk,
			vals: sourceConf.vals,
			recipeRows: Math.max(rows, opts.minRecipeRows)
		})
	})

	cconv.on('changeRatio', function(event, which,val){
		// we set the ratio part defined by <which>
		var key = ({to:'convertTo',from:'convertFrom'})[which]
		this.set(key,val)
	})

	// Replace all the numbers by template keys
	function makesourceConf(recipe) {
		var keyID = 0
		var sourceValues = {}
		// parse some cooking formatted numbers like 1/2 instead of 0.5
		var template = Object.keys(fracts).reduce(function(template,frac){
			return template.replace(frac,fracts[frac])
		},
		recipe) // <-- send recipe here
		.replace(/\n/g,'<br/>')
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

	// we return the ractive instance, free for use !
	return cconv
}

window.CookieConverter = CookieConverter
