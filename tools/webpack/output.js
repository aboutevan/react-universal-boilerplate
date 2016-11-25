const path = require('path');
const vendors = require('../../vendors.config.js');

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