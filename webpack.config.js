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
	module: {
		loaders: [{
			test: path.join(__dirname, 'src'),
			loaders: ['babel-loader']
			// query: {
			// 	cacheDirectory: 'babel-cache',
			// 	presets: ['react', 'es2015']
			// }
		}]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
		}),
		// new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin()
    // new webpack.optimize.UglifyJsPlugin({
      // compress: { warnings: false },
      // mangle: true,
      // sourcemap: false,
      // beautify: false,
      // dead_code: true
    // })
	]
}

module.exports = config;