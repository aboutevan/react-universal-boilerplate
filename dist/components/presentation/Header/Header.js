'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Nav = require('../Nav/Nav');

var _Nav2 = _interopRequireDefault(_Nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header() {
  return _react2.default.createElement(
    'div',
    { className: 'header' },
    _react2.default.createElement(_Nav2.default, null),
    _react2.default.createElement(
      'h3',
      null,
      'This is the header'
    )
  );
};

exports.default = Header;