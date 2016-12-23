'use strict';

const path = require('path');
const vendors = require('../../src/core/js/vendors.core.js');

function getEntry (env) {
  let entry
  if(env === 'development') {
    entry = {
      app: ['webpack-hot-middleware/client', path.join(__dirname, '../../src', 'init.jsx')],
      vendor: vendors
    }
  } else {
    entry = {
      app: path.join(__dirname, '../../src', 'init.jsx'),
      vendor: vendors
    }
  }

  return entry
}

module.exports = getEntry