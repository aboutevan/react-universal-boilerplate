'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _pug = require('pug');

var _pug2 = _interopRequireDefault(_pug);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackDevMiddleware = require('webpack-dev-middleware');

var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

var _webpackHotMiddleware = require('webpack-hot-middleware');

var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _reactRouter = require('react-router');

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _NotFoundPage = require('./components/NotFoundPage');

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _pugFlattenInnerHelper(arr, val) {
	return arr.concat(Array.isArray(val) ? _pugFlatten(val) : val);
}

function _pugFlatten(arr) {
	return arr.reduce(_pugFlattenInnerHelper, []);
}

var fs = require('fs');

require('babel-register')({
	presets: ['es2015', 'react']
});
var config = require('../webpack.config.js');
var env = process.env.NODE_ENV || 'development';
var development = process.env.NODE_ENV !== 'production';
var port = process.env.PORT || 3000;

// const templatePath = require.resolve('./views/index.pug')
// const templateFn = require('pug').compileFile(templatePath)

// initialize the server
var app = new _express2.default();

// set locals
app.locals.env = env;

// configure support for ejs
app.set('view engine', 'ejs');
app.set('views', _path2.default.join(__dirname, 'views'));

if (development) {
	var compiler = (0, _webpack2.default)(config);
	var middleware = (0, _webpackDevMiddleware2.default)(compiler, {
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

	app.use(middleware);
	app.use((0, _webpackHotMiddleware2.default)(compiler));

	// define folder used for static assets
	app.use(_express2.default.static(_path2.default.join(__dirname, 'static')));
} else {
	// const html = pug.renderFile('views/index.pug')
	// console.log(html)
	app.use(_express2.default.static(_path2.default.join(__dirname, 'static')));
}

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

app.listen(port, function (err) {
	if (err) {
		return console.error(err);
	}
	console.info('Server running on http://localhost:' + port + ' [' + env + ']');
});