# Cookie Converter

A recipe ingredients quantities converter focused on ease of use.

## Documentation

You may read the example section below for the documentation in French language.

### Install

[Download the repository](https://github.com/niahoo/cookie-converter/archive/master.zip) and include the scripts from the `dist` directory in your page.

```html
<script src="cookie-converter.js" type="text/javascript" charset="utf-8"></script>
<script src="cookie-converter-lc_en.js" type="text/javascript" charset="utf-8"></script>
```

Then, define a container.

```html
<div id="cookieconv"></div>
```

Some basic CSS is defined for you automatically, but you can target the converter elements with the `.cookie-converter` CSS selector.

```html
<style type="text/css">
	.cookie-converter .qtty {
		font-family: monospace;
	}
</style>
```

### Run

Just call `CookieConverter.create()` with some options to launch the app. Check the available options further in this document.

```javascript
var cc = CookieConverter.create({
	el: '#cookieconv'
})
```

It is also possible to change the locale at runtime with the setLocale method.

```javascript
cc.setLocale('fr')
```

### Options

Key             | Required | Default          | Description
--------------- | -------- | ---------------- | ---------------------------------
`el`            | Yes      |                  | A CSS selector targetting the application container
`locale`        | No       | `'en'`           | The application i18n locale
`recipe`        | No       | `''`             | A `String` containing the recipe shown at page load
`minRecipeRows` | No       | `5`              | The minimum rows of the input recipe `textarea` element
`convert`       | No       | `{from:6, to:2}` | A javascript object specifying the initial values for quantity convertion at page load. You must provide both `from` and `to` propertyes.

### i18n

To create a new traduction, just define a new key into CookieConverter.i18n and then call setLocale(key) with this key. There are only a few keys at the moment. Feel free to submit your lang file in a pull-request.

```javascript
// Define a locale module
;(function(){

var lc = window.CookieConverter.i18n.dog = {}

lc.ratio_from_before = "Woo Woo"
lc.ratio_from_after = "Wooof"
lc.ratio_more = "Woof !"
lc.ratio_to_before = "Wooo Woo"
lc.ratio_to_after = "Wooof"

}())

// Into parent app scope
cc.setLocale('dog')

```

## Example (French only ATM)

[Download the repository](https://github.com/niahoo/cookie-converter/archive/master.zip) and open index-fr.html in your browser.

Check the [source](https://github.com/niahoo/cookie-converter/blob/master/example-fr.html) for basic french documentation.

### Build

The application is built with nodejs and [Webpack](http://webpack.github.io/docs/).

```bash
git clone https://github.com/niahoo/cookie-converter.git cconv
cd cconv
npm install -g webpack
npm install
webpack --watch
```

## Todo

* Provide bootstrap support
* English example
