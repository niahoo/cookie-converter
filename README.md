# Cookie Converter

A recipe ingredients quantities converter focused on ease of use.

## Documentation

You may read the example section below for basic documentation in French language.

### Install

[Download the repository](https://github.com/niahoo/cookie-converter/archive/master.zip) and include the scripts from the `dist` directory in your page.

```html
<script src="cookie-converter.min.js" type="text/javascript" charset="utf-8"></script>
<script src="cookie-converter-lc_en.min.js" type="text/javascript" charset="utf-8"></script>
```

Then, define a container.

```html
<div id="cookieconv"></div>
```

### Run

Just call `CookieConverter.create()` with some options to launch the app. Check the available options further in this document.

```javascript
var cc = CookieConverter.create({
	el: '#cookieconv',
	locale: 'en' // tip : 'en' is in fact the defaut value, just skip it !
})
```

### Styling

The converter is wrapped into the container you provide, and then re-wrapped in a `div.cookie-converter`. The two parts of the application (source recipe and converted recipe, with their relative servings dropdowns) are wrapped in a `div.cconv-block`. Check the [main template](https://github.com/niahoo/cookie-converter/blob/master/app/js/tpl/app.html) for more informations about structure.

Some basic CSS is defined for you automatically to create buttons on quantities.

```html
<style type="text/css">

	/* Some font style on quantities buttons */
	.cookie-converter .qtty {
		font-family: monospace;
	}

	/* Show the thow recipe blocks side by side with a responsive min-width */
	@media screen and (min-width: 650px){
		.cconv-block {
			float:left;
			width:45%;
			box-sizing: border-box;
		}
		.cconv-block + .cconv-block {
			margin-left:5%;
		}
	}

</style>
```

### Config options

Key             | Required | Default          | Description
--------------- | -------- | ---------------- | ---------------------------------
`convert`       | No       | `{from:6, to:2}` | A javascript object specifying the initial values for quantity convertion at page load. You must provide both `from` and `to` properties.
`el`            | Yes      |                  | A CSS selector targetting the application container
`hash`          | No       | `true`           | Decide if the application will read the URL hash and priorize its content. Allows permalinks.
`locale`        | No       | `'en'`           | The application i18n locale
`minRecipeRows` | No       | `5`              | The minimum rows of the input recipe `textarea` element
`recipe`        | No       | `''`             | A `String` containing the recipe shown at page load

### i18n

To create a new traduction, just define a new key into the `CookieConverter.i18n` namespace and then call `.setLocale(key)` with this key or create a fresh converter. There are only a few defined entries at the moment. Feel free to submit your lang file in a pull-request.

```javascript
// Define a locale module on the fly
;(function(){

var lc = window.CookieConverter.i18n.dog = {}

lc.ratio_from_before = "Woo Woo"
lc.ratio_from_after = "Wooof"
lc.ratio_more = "Woof !"
lc.ratio_to_before = "Wooo Woo"
lc.ratio_to_after = "Wooof"

}())

// Into parent app scope
var cc = CookieConverter.create({
	el: '#cookieconv',
	locale: 'dog'
})
```

## Example (French only ATM)

[Download the repository](https://github.com/niahoo/cookie-converter/archive/master.zip) and open `dist/index.html` in your browser.

Check its source for basic French documentation.

### Build

The application is built with nodejs and [Webpack](http://webpack.github.io/docs/).

```bash
git clone https://github.com/niahoo/cookie-converter.git cconv
cd cconv
npm install -g webpack
npm install
npm run dev
```

## Todo

* Provide bootstrap support
* English example
* Use webpack merge
