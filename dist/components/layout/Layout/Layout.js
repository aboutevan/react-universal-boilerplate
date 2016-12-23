'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('../../presentation/Header/Header');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (process.env.BROWSER) {
  require('./Layout.sass');
}

var Layout = function Layout(props) {
  return _react2.default.createElement(
    'div',
    { className: 'layout' },
    _react2.default.createElement(_Header2.default, null),
    _react2.default.createElement(
      'div',
      { className: 'layout__content' },
      props.children
    )
  );
};

Layout.propTypes = {
  children: _react2.default.PropTypes.node.isRequired
};

exports.default = Layout;