const webpack = require('webpack');
const path = require('path');

const config = {
	devtool: 'eval-source-map',
	entry: [
		// 'webpack/hot/dev-server',
		'webpack-hot-middleware/client',
		path.join(__dirname, 'src', 'app.jsx')
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
		preLoaders: [
			{
				test: /\.js|jsx?$/,
	      loaders: ['eslint-loader'],
	      include: path.join(__dirname, 'src'),
	      exclude: path.join(__dirname, 'src', 'data')
			}
		],
		loaders: [
			{
				test: /\.jsx?$/,
				loaders: ['babel-loader'],
				include: path.join(__dirname, 'src')
			},
			{
				test: /\.sass$/,
				loader: 'style!css?sourceMap!sass?sourceMap!postcss',
				include: path.join(__dirname, 'src')
			}
		]
	},
	postcss: function () {
		return [
			require('autoprefixer')
		]
	},
	eslint: {
		configFile: './.eslintrc',
		emitWarning: true
	}
}

module.exports = config;