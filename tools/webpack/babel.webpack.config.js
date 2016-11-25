const webpack = require('webpack');
const path = require('path');
const getEntry = require('./entry.js')
const getOutput = require('./output.js')
const getPlugins = require('./plugins.js')
const getPreloaders = require('./preloaders.js')
const getLoaders = require('./loaders.js')


const env = process.env.NODE_ENV || 'development'

const config = {
	devtool: env !== 'development' ? '' : 'eval-source-map',

	entry: getEntry(env),

	output: getOutput(env),

	resolve: {
		extensions: ['', '.js', '.jsx']
	},

	plugins: getPlugins(env),

	module: {
		preLoaders: getPreloaders(env),
		loaders: getLoaders(env)
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