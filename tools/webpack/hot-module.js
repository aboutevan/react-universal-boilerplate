'use strict';
const path = require('path');

module.exports = function (app) {

  const config = require('../webpack.config.js');
  const webpack = require('webpack');
  const webpackMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(config);

  const middleware = webpackMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
}

