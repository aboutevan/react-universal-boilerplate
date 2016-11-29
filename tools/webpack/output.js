'use strict';

const path = require('path');

function getOutput (env) {
  let output
  if(env === 'development') {
    output = {
      path: path.join(__dirname, '../../src', 'static', 'js'),
      filename: 'bundle.js',
      publicPath: '/static/js/'
    }
  } else {
    output = {
      path: path.join(__dirname, '../../dist', 'static', 'js'),
      filename: 'bundle.js',
      publicPath: '/static/js/'
    }
  }

  return output
}

module.exports = getOutput