'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _middleware = require('./middleware');

var _middleware2 = _interopRequireDefault(_middleware);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _reactRouter = require('react-router');

var _routes = require('./routes/routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var env = process.env.NODE_ENV || 'development';
var port = process.env.PORT || 3000;

// initialize the server
var app = new _express2.default();

// set locals
app.locals.env = env;

// configure support for ejs
app.set('view engine', 'ejs');
app.set('views', _path2.default.join(__dirname));

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