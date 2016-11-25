'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('../../presentation/Header/Header');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var template = function template(props) {
  return _react2.default.createElement(
    'div',
    { className: 'layout' },
    _react2.default.createElement(_Header2.default, null),
    _react2.default.createElement(
      'h1',
      null,
      'HELLO YOU'
    ),
    _react2.default.createElement(
      'div',
      { className: 'layout__content' },
      props.children
    )
  );
};

template.propTypes = {
  children: _react2.default.PropTypes.node.isRequired
};

exports.default = template;