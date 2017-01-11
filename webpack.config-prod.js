var webpack = require('webpack')

function appfile (file) {
	return "./app/" + file
}


var ENV = process.env.NODE_ENV

module.exports = {
	entry: {
		"cookie-converter": appfile("js/app.js"),
		"cookie-converter-lc_fr": appfile("js/lc/fr.js"),
		"cookie-converter-lc_en": appfile("js/lc/en.js")
	},
	output: {
		path: "dist",
		filename: "[name].min.js"
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
			{ test: /\.js$/, loader: "transform?loose-envify" },
		],
	},
	resolve: {
		modulesDirectories: ['app/js','app/css','node_modules']
	},
	devtool: ENV === 'production' ? 'source-map' : 'inline-source-map',
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': 'production'
		}),
		new webpack.optimize.OccurenceOrderPlugin(true),
		new webpack.optimize.UglifyJsPlugin({minimize: true}),
		new webpack.optimize.DedupePlugin(),
	],
}
