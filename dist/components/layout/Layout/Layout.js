'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('../../presentation/Header/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Footer = require('../../presentation/Footer/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _Nav = require('../../presentation/Nav/Nav');

var _Nav2 = _interopRequireDefault(_Nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (process.env.BROWSER) {
  require('./Layout.sass');
}

var Layout = function Layout(props) {
  return _react2.default.createElement(
    'div',
    { className: 'layout' },
    _react2.default.createElement(_Nav2.default, null),
    _react2.default.createElement(_Header2.default, null),
    _react2.default.createElement(
      'div',
      { className: 'layout__content' },
      props.children
    ),
    _react2.default.createElement(_Footer2.default, null)
  );
};

Layout.propTypes = {
  children: _react2.default.PropTypes.node.isRequired
};

exports.default = Layout;