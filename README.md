# cookie-converter

A recipe ingredients quantities converter focused on ease of use

## Documentation

Please refer to the example for french docs.

### Install

[Download the repository](https://github.com/niahoo/cookie-converter/archive/master.zip) and include the scripts in your page :

```html
<script src="dist/cookie-converter.js" type="text/javascript" charset="utf-8"></script>
<script src="dist/cookie-converter-lc_en.js" type="text/javascript" charset="utf-8"></script>
```

Define a container :

```html
<div id="cookieconv"></div>
```

Some basic CSS is defined for you automatically, but you can target the converter elements with the "cookie-converter" class :

```html
<style type="text/css">
	.cookie-converter .qtty {
		font-family: monospace;
	}
</style>
```

Finally, call `CookieConverter.create()` with some options to launch the app.

```javascript
var cc = CookieConverter.create({
	el: '#cookieconv'
})
```

It is also possible to change the locale at runtime with the setLocale method.

```javascript
cc.setLocale('fr')
```

To create a new traduction, just define a new key into CookieConverter.i18n and
then call setLocale(key) with this key. There are only a few keys at the moment.
Feel free to submit your lang file in a pull-request.

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
