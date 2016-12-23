'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _reactRouter = require('react-router');

var _routes = require('./components/routes');

var _routes2 = _interopRequireDefault(_routes);

var _NotFoundPage = require('./components/page/NotFoundPage/NotFoundPage');

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, res) {
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
};