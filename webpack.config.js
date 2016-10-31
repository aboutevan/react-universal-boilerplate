const webpack = require('webpack');
const path = require('path');
const vendors = require('./vendors.config.js');

const config = {
	devtool: 'eval-source-map',
	entry: {
		// 'webpack/hot/dev-server',
		// 'webpack-hot-middleware/client',
    app: ['webpack-hot-middleware/client', path.join(__dirname, 'src', 'app.jsx')],
    vendor: vendors
	},
	output: {
		path: path.join(__dirname, 'src', 'static', 'js'),
		filename: 'bundle.js',
		publicPath: '/static/js/'
	},
	resolve: {
    // modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    // alias: {
    //   layout: '/components/layout',
    //   page: path.resolve(__dirname, 'src', 'components', 'page'),
    //   presentation: '/components/presentation',
    //   data: '/data',
    //   core: '/core',
    //   routes: '/routes',
    //   static: '/static'
    // },
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
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js', Infinity),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
	],
	module: {
		preLoaders: [
			{
				test: /\.jsx?$/,
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
				test: /\.(scss|sass)$/,
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