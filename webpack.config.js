const webpack = require('webpack');
const path = require('path');

const config = {
	devtool: 'eval-source-map',
	entry: [
		// 'webpack/hot/dev-server',
		'webpack-hot-middleware/client',
		path.join(__dirname, 'src', 'app-client.js')
	],
	output: {
		path: path.join(__dirname, 'src', 'static', 'js'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	resolve: {
		// allow filename imports without suffix
		extensions: ['', '.js', '.jsx']
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('development'),
				BROWSER: JSON.stringify(true)
			}
		}),
    new webpack.optimize.OccurenceOrderPlugin()
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
				loader: 'style!css'
			}
		]
	}
}

module.exports = config;