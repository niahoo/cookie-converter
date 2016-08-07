var webpack = require("webpack")
var dotenv = require('dotenv')

process.env.APP_ENV = 'dev'

function env(x) {
	return process.env[x]
}

function appfile (file) {
	return "./app/" + file
}

module.exports = {
	entry: {
		"cookie-converter": appfile("js/main.js"),
		"cookie-converter-lc_fr": appfile("js/lc/fr.js"),
		"cookie-converter-lc_en": appfile("js/lc/en.js")
	},
	output: {
		path: "dist/dev",
		filename: "[name].js"
	},
	module: {
		preLoaders: [
			{ test: /\.html$/, exclude: /node_modules/, loader: 'ractive', query: { type: 'none' } }
		],
		loaders: [
			{ test: /\.js$/, loader: "transform?envify" },
			{ test: /\.css$/, loader: "style-loader!css-loader" }
		]
	},
	amd: {phoenix: false},
	resolve: {
		modulesDirectories: ['app/js','app/css','node_modules']
	},
	devtool: '#eval-source-map',
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(true),
		// new webpack.optimize.UglifyJsPlugin({minimize: true}),
		new webpack.optimize.DedupePlugin()
	]
}
