var webpack = require('webpack')
const ENV = process.env.NODE_ENV || 'development';

process.env.NODE_ENV = 'development'

function appfile (file) {
	return "./app/" + file
}

module.exports = {
	entry: {
		"cookie-converter": appfile("js/main-redux.js"),
		"cookie-converter-lc_fr": appfile("js/lc/fr.js"),
		"cookie-converter-lc_en": appfile("js/lc/en.js")
	},
	output: {
		path: "dist/dev",
		filename: "[name].js"
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{ test: /\.css$/, loader: "style-loader!css-loader" }
		],
		postLoaders: [
			{ test: /\.js$/, loader: "transform?envify" },
		],
	},
	resolve: {
		modulesDirectories: ['app/js','app/css','node_modules']
	},
	devtool: ENV === 'production' ? 'source-map' : 'inline-source-map',
	plugins: ([
	]).concat(ENV === 'production' ? [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(true)
	] : []),
}
