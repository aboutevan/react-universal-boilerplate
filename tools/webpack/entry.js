'use strict';

const path = require('path');

function getEntry (env) {
  let entry
  if(env === 'development') {
    entry = {
      app: ['webpack-hot-middleware/client', path.join(__dirname, '../../src', 'init.jsx')]
    }
  } else {
    entry = {
      app: path.join(__dirname, '../../src', 'init.jsx')
    }
  }

  return entry
}

module.exports = getEntry