'use strict';
const path = require('path');

module.exports = function (env) {
  const entry = {
    app: [path.join(__dirname, '../../src', 'init.jsx')]
  };

  if(env === 'development') {
    entry.app.unshift('webpack-hot-middleware/client')
  } else {
    // any production settings
  }

  return entry;
}