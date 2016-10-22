'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _reactRouter = require('react-router');

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _NotFoundPage = require('./components/NotFoundPage');

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

var _webpackDevServer = require('webpack-dev-server');

var _webpackDevServer2 = _interopRequireDefault(_webpackDevServer);

var _webpack3 = require('../webpack.config');

var _webpack4 = _interopRequireDefault(_webpack3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('babel-register')({
	presets: ['es2015', 'react']
});
// import { Server } from 'http';


// initialize the server
var app = new _express2.default();

// const server = new Server(app);

// configure support for ejs
app.set('view engine', 'ejs');
app.set('views', _path2.default.join(__dirname, 'views'));

// define folder used for static assets
app.use(_express2.default.static(_path2.default.join(__dirname, 'static')));

// universal routing and rendering
app.get('*', function (req, res) {
	(0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirectLocation, renderProps) {

		// if error display message
		if (err) {
			return res.status(500).send(err.message);
		}

		// in case of redirect propagate the redirect to browser
		if (redirectLocation) {
			return res.redirect(302, redirectLocation.pathName + redirectLocation.search);
		}

		var markup = void 0;
		if (renderProps) {
			// if the current route matched then renderProps
			markup = (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RouterContext, renderProps));
		} else {
			// otherwise render 404
			markup = (0, _server.renderToString)(_react2.default.createElement(_NotFoundPage2.default, null));
			res.status(404);
		}

		// render the index template with the embedded react markup
		return res.render('index', { markup: markup });
	});
});

// start the server
var port = process.env.PORT || 3000;
var env = process.env.NODE_ENV || 'production';
app.listen(port, function (err) {
	if (err) {
		return console.error(err);
	}
	console.info('Server running on http://localhost:' + port + ' [' + env + ']');
});

new _webpackDevServer2.default((0, _webpack2.default)(_webpack4.default), {
	// publicPath: config.output.publicPath,
	hot: true,
	historyApiFallback: true,
	proxy: {
		'*': 'http://localhost:3000'
	}
}).listen(3001, 'localhost', function (err, result) {
	if (err) {
		console.log(err);
	}
	console.log('listening at localhost:3001');
});
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(app, 'app', 'src/WDserver.js');

	__REACT_HOT_LOADER__.register(port, 'port', 'src/WDserver.js');

	__REACT_HOT_LOADER__.register(env, 'env', 'src/WDserver.js');
}();

;