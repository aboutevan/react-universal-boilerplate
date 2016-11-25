'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var template = function template(_ref) {
  var id = _ref.id,
      name = _ref.name,
      image = _ref.image;
  return _react2.default.createElement(
    'div',
    { className: 'album-thumb' },
    _react2.default.createElement(
      _reactRouter.Link,
      { to: '/album/' + id },
      _react2.default.createElement(
        'div',
        { className: 'album-thumb__inner' },
        _react2.default.createElement('img', { src: 'img/' + image, alt: name }),
        _react2.default.createElement(
          'h2',
          null,
          name
        )
      )
    )
  );
};

template.propTypes = {
  id: _react2.default.PropTypes.string,
  name: _react2.default.PropTypes.string,
  image: _react2.default.PropTypes.string
};

exports.default = template;