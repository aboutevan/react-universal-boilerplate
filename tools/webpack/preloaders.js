const webpack = require('webpack');
const path = require('path');
const vendors = require('../../vendors.config.js');

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

  }

  return preloaders
}

module.exports = getPreloaders