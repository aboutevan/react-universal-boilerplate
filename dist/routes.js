'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _Layout = require('./components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _IndexPage = require('./components/IndexPage');

var _IndexPage2 = _interopRequireDefault(_IndexPage);

var _AthletePage = require('./components/AthletePage');

var _AthletePage2 = _interopRequireDefault(_AthletePage);

var _NotFoundPage = require('./components/NotFoundPage');

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _pugFlattenInnerHelper(arr, val) {
  return arr.concat(Array.isArray(val) ? _pugFlatten(val) : val);
}

function _pugFlatten(arr) {
  return arr.reduce(_pugFlattenInnerHelper, []);
}

var routes = _react2.default.createElement(
  _reactRouter.Route,
  { path: '/', component: _Layout2.default },
  _react2.default.createElement(_reactRouter.IndexRoute, { component: _IndexPage2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: 'athlete/:id', component: _AthletePage2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '*', component: _NotFoundPage2.default })
);

exports.default = routes;