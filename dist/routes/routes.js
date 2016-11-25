'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _Layout = require('../components/layout/Layout/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _IndexPage = require('../components/page/IndexPage/IndexPage');

var _IndexPage2 = _interopRequireDefault(_IndexPage);

var _AlbumPage = require('../components/page/AlbumPage/AlbumPage');

var _AlbumPage2 = _interopRequireDefault(_AlbumPage);

var _NotFoundPage = require('../components/page/NotFoundPage/NotFoundPage');

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = _react2.default.createElement(
  _reactRouter.Route,
  { path: '/', component: _Layout2.default },
  _react2.default.createElement(_reactRouter.IndexRoute, { component: _IndexPage2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: 'album/:id', component: _AlbumPage2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '*', component: _NotFoundPage2.default })
);

exports.default = routes;