const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const vendors = require('./vendors.config.js');

const config = {
	entry: {
		app: path.join(__dirname, 'src', 'app.jsx'),
    vendor: vendors
	},
	output: {
		path: path.join(__dirname, 'dist', 'static', 'js'),
		filename: 'bundle.js',
		publicPath: '/static/js/'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	plugins: [
		new webpack.NoErrorsPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production'),
				BROWSER: JSON.stringify(true)
			}
		}),
		new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js', Infinity),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      mangle: true,
      sourcemap: false,
      beautify: false,
      dead_code: true
    }),
    new CopyWebpackPlugin([
			{
				from: path.join(__dirname, 'src', 'static', 'css'),
				to: path.join(__dirname, 'dist', 'static', 'css')
			},
			{
				from: path.join(__dirname, 'src', 'static', 'img'),
				to: path.join(__dirname, 'dist', 'static', 'img')
			},
			{
				from: path.join(__dirname, 'src', 'index.ejs'),
				to: path.join(__dirname, 'dist', 'index.ejs')
			}
		]),
		new ExtractTextPlugin('../css/bundle.css')
	],
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loaders: ['babel-loader'],
				include: path.join(__dirname, 'src')
			},
			{
				test: /\.(scss|sass)$/,
				loader: ExtractTextPlugin.extract('style', 'css!sass!postcss'),
				include: path.join(__dirname, 'src')
			}
		]
	},
	postcss: function () {
		return [
			require('autoprefixer')
		]
	}
}

module.exports = config;