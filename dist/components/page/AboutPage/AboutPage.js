'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AboutPage = function AboutPage() {
  return _react2.default.createElement(
    'div',
    { className: 'about-page' },
    _react2.default.createElement(_reactHelmet2.default, {
      title: 'About',
      meta: [{ name: 'description', content: 'About page description' }]
    }),
    _react2.default.createElement(
      'h1',
      null,
      'the about page'
    )
  );
};

exports.default = AboutPage;