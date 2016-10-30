'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackDevMiddleware = require('webpack-dev-middleware');

var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

var _webpackHotMiddleware = require('webpack-hot-middleware');

var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);

var _middleware2 = require('./middleware');

var _middleware3 = _interopRequireDefault(_middleware2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _reactRouter = require('react-router');

var _Routes = require('./routes/Routes');

var _Routes2 = _interopRequireDefault(_Routes);

var _NotFoundPage = require('./components/page/NotFoundPage/NotFoundPage');

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// require('babel-register')({
// 	presets: [ 'es2015', 'react' ]
// });

var config = require('../webpack.config.js');
var env = process.env.NODE_ENV || 'development';
var port = process.env.PORT || 3000;

// initialize the server
var app = new _express2.default();

// set locals
app.locals.env = env;

// configure support for ejs
app.set('view engine', 'ejs');
app.set('views', _path2.default.join(__dirname));

if (env !== 'production') {
  var compiler = (0, _webpack2.default)(config);
  var _middleware = (0, _webpackDevMiddleware2.default)(compiler, {
    publicPath: config.output.publicPath,
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });

  app.use(_middleware);
  app.use((0, _webpackHotMiddleware2.default)(compiler));

  // define folder used for static assets
  app.use(_express2.default.static(_path2.default.join(__dirname, 'static')));
} else {
  app.use(_express2.default.static(_path2.default.join(__dirname, 'static')));
}

// universal routing and rendering

app.get('*', _middleware3.default);

// start the server

app.listen(port, function (err) {
  if (err) {
    return console.error(err);
  }
  console.info('Server running on http://localhost:' + port + ' [' + env + ']');
});