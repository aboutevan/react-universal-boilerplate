'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Sample = require('../../presentation/Sample/Sample');

var _Sample2 = _interopRequireDefault(_Sample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IndexPage = function IndexPage() {
  return _react2.default.createElement(
    'div',
    { className: 'index-page' },
    _react2.default.createElement(_Sample2.default, null)
  );
};

exports.default = IndexPage;