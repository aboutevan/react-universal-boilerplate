'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AlbumMenu = require('../../presentation/AlbumMenu/AlbumMenu');

var _AlbumMenu2 = _interopRequireDefault(_AlbumMenu);

var _albums = require('../../../data/albums');

var _albums2 = _interopRequireDefault(_albums);

var _NotFoundPage = require('../NotFoundPage/NotFoundPage');

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var template = function template(_ref) {
  var routeParams = _ref.routeParams;

  var album = _albums2.default.filter(function (data) {
    return data.id === routeParams.id;
  })[0];
  if (!album) {
    return _react2.default.createElement(_NotFoundPage2.default, null);
  }
  var renderStats = function renderStats() {
    if (album.stats) {
      return _react2.default.createElement(
        'div',
        { className: 'album-page__stats' },
        album.stats.certification ? _react2.default.createElement(
          'div',
          { className: 'album-page__stats-block' },
          _react2.default.createElement(
            'p',
            null,
            'Certifications: '
          ),
          _react2.default.createElement(
            'ul',
            null,
            album.stats.certification.map(function (certification) {
              return _react2.default.createElement(
                'li',
                { key: certification.country },
                certification.country,
                ' : ',
                certification.status
              );
            })
          )
        ) : null,
        album.stats.chart ? _react2.default.createElement(
          'div',
          { className: 'album-page__stats-block' },
          _react2.default.createElement(
            'p',
            null,
            'Charts: '
          ),
          _react2.default.createElement(
            'ul',
            null,
            album.stats.chart.map(function (chart) {
              return _react2.default.createElement(
                'li',
                { key: chart.country },
                chart.country,
                ' : ',
                chart.rank
              );
            })
          )
        ) : null,
        album.stats.sales ? _react2.default.createElement(
          'div',
          { className: 'album-page__stats-block' },
          _react2.default.createElement(
            'p',
            null,
            'Sales: '
          ),
          _react2.default.createElement(
            'ul',
            null,
            album.stats.sales.map(function (sales) {
              return _react2.default.createElement(
                'li',
                { key: sales.country },
                sales.country,
                ' : ',
                sales.total
              );
            })
          )
        ) : null
      );
    }
    return null;
  };
  return _react2.default.createElement(
    'div',
    { className: 'album-page' },
    _react2.default.createElement(
      'div',
      { className: 'album-page__menu' },
      _react2.default.createElement(_AlbumMenu2.default, { albums: _albums2.default })
    ),
    _react2.default.createElement(
      'div',
      { className: 'album-page__image' },
      _react2.default.createElement('img', { src: '/img/' + album.image, alt: album.name })
    ),
    _react2.default.createElement(
      'div',
      { className: 'album-page__info' },
      _react2.default.createElement(
        'h2',
        null,
        album.name
      ),
      _react2.default.createElement(
        'h5',
        null,
        album.release
      ),
      _react2.default.createElement(
        'h5',
        null,
        'Label: ',
        album.label
      ),
      _react2.default.createElement('div', {
        className: 'album-page__description',
        dangerouslySetInnerHTML: { __html: album.description }
      }),
      renderStats()
    )
  );
};

template.propTypes = {
  routeParams: _react2.default.PropTypes.objectOf(_react2.default.PropTypes.string)
};

exports.default = template;