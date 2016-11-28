const path = require('path');
const vendors = require('../vendors.config.js');

function getEntry (env) {
  let entry
  if(env === 'development') {
    entry = {
      app: ['webpack-hot-middleware/client', path.join(__dirname, '../../src', 'app.jsx')],
      vendor: vendors
    }
  } else {
    entry = {
      app: path.join(__dirname, '../../src', 'app.jsx'),
      vendor: vendors
    }
  }

  return entry
}

module.exports = getEntry