'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _AppRoutes = require('./components/AppRoutes');

var _AppRoutes2 = _interopRequireDefault(_AppRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _pugFlattenInnerHelper(arr, val) {
  return arr.concat(Array.isArray(val) ? _pugFlatten(val) : val);
}

function _pugFlatten(arr) {
  return arr.reduce(_pugFlattenInnerHelper, []);
}

window.onload = function () {
  _reactDom2.default.render(_react2.default.createElement(_AppRoutes2.default, null), document.getElementById('main'));
  // document.getElementById('main').classList.remove('no-fouc');

  if (process.env === 'development') {
    module.hot.accept('./components/AppRoutes', function () {
      var NewApp = require('./components/AppRoutes').default;
      _reactDom2.default.render(_react2.default.createElement(NewApp, null), document.getElementById('main'));
    });
  }
};