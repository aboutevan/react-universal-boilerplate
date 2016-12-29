'use strict';
const path = require('path');

module.exports = function (env) {

  const output = {
    filename: 'bundle.js',
    publicPath: '/static/js/'
  };

  // check env
  if(env === 'development') {
    output.path = path.join(__dirname, '../../src', 'static', 'js');
  } else {
    output.path = path.join(__dirname, '../../dist', 'static', 'js');
  }

  return output;
}
