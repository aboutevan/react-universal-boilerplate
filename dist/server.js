'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _middleware = require('./middleware');

var _middleware2 = _interopRequireDefault(_middleware);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var env = process.env.NODE_ENV || 'development';
var port = process.env.PORT || 9000;

// initialize the server
var app = new _express2.default();

// set locals
app.locals.env = env;

// configure support for ejs
app.set('view engine', 'ejs');
app.set('views', _path2.default.join(__dirname));

if (env !== 'production') {
  var runHMR = require('../tools/webpack/hot-module');
  runHMR(app, env);
}
app.use((0, _compression2.default)());
app.use(_express2.default.static(_path2.default.join(__dirname, 'static')));

// universal routing and rendering

app.get('*', _middleware2.default);

// start the server

app.listen(port, function (err) {
  if (err) {
    return console.error(err);
  }
  console.info('Server running on http://localhost:' + port + ' [' + env + ']');
});

if (env !== 'production') {
  var browserSync = require('browser-sync');
  browserSync.init({
    proxy: 'localhost:' + port,
    port: 3000,
    ui: {
      port: 3001,
      weinre: { port: 3333 }
    },
    open: false
  });
}

exports.default = app;