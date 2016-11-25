'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var template = function template(props) {
  var albums = props.albums;
  return _react2.default.createElement(
    'nav',
    { className: 'album-menu' },
    albums.map(function (album) {
      return _react2.default.createElement(
        _reactRouter.Link,
        { className: 'album-menu__link', to: '/album/' + album.id, key: album.name },
        album.name
      );
    })
  );
};

template.propTypes = {
  albums: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.objectOf(_react2.default.PropTypes.any))
};

exports.default = template;