'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AlbumThumb = require('../../presentation/AlbumThumb/AlbumThumb');

var _AlbumThumb2 = _interopRequireDefault(_AlbumThumb);

var _albums = require('../../../data/albums');

var _albums2 = _interopRequireDefault(_albums);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var template = function template() {
  return _react2.default.createElement(
    'div',
    { className: 'index-page' },
    _react2.default.createElement(
      'div',
      { className: 'index-page__albums' },
      _albums2.default.map(function (albumData, i) {
        return _react2.default.createElement(
          'div',
          { className: 'album-thumb__layout-block', key: i },
          _react2.default.createElement(_AlbumThumb2.default, albumData)
        );
      })
    )
  );
};

exports.default = template;