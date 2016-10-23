const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
	devtool: 'eval-source-map',
	entry: [
		// 'webpack/hot/dev-server',
		// 'webpack-hot-middleware/client',
		path.join(__dirname, 'src', 'app-client.js')
	],
	output: {
		path: path.join(__dirname, 'dist', 'static', 'js'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	resolve: {
		// allow filename imports without suffix
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
				from: path.join(__dirname, 'src', 'views'),
				to: path.join(__dirname, 'dist', 'views')
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
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style', 'css!'),
				include: path.join(__dirname, 'src')
			}
		]
	}
}

module.exports = config;