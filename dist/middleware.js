'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _reactRouter = require('react-router');

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

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
      var returnedComponent = renderProps.routes[1].component.name;
      markup = (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RouterContext, renderProps));
      if (returnedComponent === 'NotFoundPage') {
        res.status(404);
      }
    }
    // Never matches as there is always renderProps
    // else {
    //   markup = renderToString(<NotFoundPage />);
    //   res.status(404);
    // }

    // reset Helmet meta to avoid memory leaks
    var head = _reactHelmet2.default.rewind();
    head.htmlAttributes;
    head.title;
    head.base;
    head.meta;
    head.link;
    head.script;
    head.style;

    // render the index template with the embedded react markup
    return res.render('index', { markup: markup, head: head });
  });
};