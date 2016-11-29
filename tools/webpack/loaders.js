'use strict';
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

function getLoaders (env) {
  let loaders
  if(env === 'development') {
    loaders = [
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, '../../src')
      },
      {
        test: /\.(scss|sass)$/,
        loader: 'style!css?sourceMap!sass?sourceMap!postcss',
        include: path.join(__dirname, '../../src')
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  } else {
    loaders = [
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, '../../src')
      },
      {
        test: /\.(scss|sass)$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass!postcss'),
        include: path.join(__dirname, '../../src')
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  }

  return loaders
}

module.exports = getLoaders