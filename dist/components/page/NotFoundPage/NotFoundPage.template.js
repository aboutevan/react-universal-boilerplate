'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var template = function template() {
  return _react2.default.createElement(
    'div',
    { className: 'not-found-page' },
    _react2.default.createElement(
      'h1',
      null,
      '404'
    ),
    _react2.default.createElement(
      'h2',
      null,
      'Page not found!'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement(
        _reactRouter.Link,
        { to: '/' },
        'Go back to the main page'
      )
    )
  );
};

exports.default = template;