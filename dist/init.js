'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = require('./components/App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_App2.default, null), document.getElementById('main'));

if (process.env.NODE_ENV === 'development') {
  module.hot.accept('./components/App', function () {
    var NewApp = require('./components/App').default;
    _reactDom2.default.render(_react2.default.createElement(NewApp, null), document.getElementById('main'));
  });
}