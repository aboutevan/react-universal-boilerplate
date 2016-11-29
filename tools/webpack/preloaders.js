'use strict';

const webpack = require('webpack');
const path = require('path');

function getPreloaders (env) {
  let preloaders
  if(env === 'development') {
    preloaders = [
      {
        test: /\.jsx?$/,
        loaders: ['eslint-loader'],
        include: path.join(__dirname, '../../src'),
        exclude: path.join(__dirname, '../../src', 'data')
      }
    ]
  } else {
    preloaders = [
      {
        test: /\.jsx?$/,
        loaders: ['eslint-loader'],
        include: path.join(__dirname, '../../dist'),
        exclude: path.join(__dirname, '../../dist', 'data')
      }
    ]
  }

  return preloaders
}

module.exports = getPreloaders