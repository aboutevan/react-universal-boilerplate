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
    { className: 'header' },
    _react2.default.createElement(
      'div',
      { className: 'header__logo' },
      _react2.default.createElement(
        _reactRouter.Link,
        { to: '/' },
        _react2.default.createElement('img', { src: '/img/slayer_logo.png', role: 'presentation' })
      )
    )
  );
};

exports.default = template;