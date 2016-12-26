'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Sample = require('../../presentation/Sample/Sample');

var _Sample2 = _interopRequireDefault(_Sample);

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IndexPage = function IndexPage() {
  return _react2.default.createElement(
    'div',
    { className: 'index-page' },
    _react2.default.createElement(_reactHelmet2.default, {
      title: 'My Title',
      meta: [{ name: 'description', content: 'Index Page description' }]
    }),
    _react2.default.createElement(_Sample2.default, null)
  );
};

exports.default = IndexPage;