const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


function getPlugins (env) {
  let plugins
  if(env === 'development') {
    plugins = [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('development'),
          BROWSER: true
        }
      }),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js', Infinity),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ]
  } else {
    plugins = [
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
        beautify: false
      }),
      new CopyWebpackPlugin([
        {
          from: path.join(__dirname, '../../src', 'static', 'css'),
          to: path.join(__dirname, '../../dist', 'static', 'css')
        },
        {
          from: path.join(__dirname, '../../src', 'static', 'img'),
          to: path.join(__dirname, '../../dist', 'static', 'img')
        },
        {
          from: path.join(__dirname, '../../src', 'index.ejs'),
          to: path.join(__dirname, '../../dist', 'index.ejs')
        }
      ]),
      new ExtractTextPlugin('../css/bundle.css')
    ]
  }

  return plugins
}

module.exports = getPlugins