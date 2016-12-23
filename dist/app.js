'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _AppRouter = require('./routes/AppRouter');

var _AppRouter2 = _interopRequireDefault(_AppRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// if using foundation uncomment this line
// $(document).foundation();

_reactDom2.default.render(_react2.default.createElement(_AppRouter2.default, null), document.getElementById('main'));

if (process.env.NODE_ENV === 'development') {
  module.hot.accept('./routes/AppRouter', function () {
    var NewApp = require('./routes/AppRouter').default;
    _reactDom2.default.render(_react2.default.createElement(NewApp, null), document.getElementById('main'));
  });
}