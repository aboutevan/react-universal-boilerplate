'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _NotFoundPage = require('./NotFoundPage');

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

var _AthletesMenu = require('./AthletesMenu');

var _AthletesMenu2 = _interopRequireDefault(_AthletesMenu);

var _Medal = require('./Medal');

var _Medal2 = _interopRequireDefault(_Medal);

var _Flag = require('./Flag');

var _Flag2 = _interopRequireDefault(_Flag);

var _athletes = require('../data/athletes');

var _athletes2 = _interopRequireDefault(_athletes);

var _Sample = require('./Sample/Sample');

var _Sample2 = _interopRequireDefault(_Sample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AthletePage = function (_React$Component) {
  _inherits(AthletePage, _React$Component);

  function AthletePage() {
    _classCallCheck(this, AthletePage);

    return _possibleConstructorReturn(this, (AthletePage.__proto__ || Object.getPrototypeOf(AthletePage)).apply(this, arguments));
  }

  _createClass(AthletePage, [{
    key: 'render',
    value: function render() {
      var id = this.props.params.id;
      var athlete = _athletes2.default.filter(function (athlete) {
        return athlete.id === id;
      })[0];
      if (!athlete) {
        return _react2.default.createElement(_NotFoundPage2.default, null);
      }
      var headerStyle = { backgroundImage: 'url(/img/' + athlete.cover + ')' };
      return _react2.default.createElement(
        'div',
        { className: 'athlete-full' },
        _react2.default.createElement(_AthletesMenu2.default, null),
        _react2.default.createElement(
          'div',
          { className: 'athlete' },
          _react2.default.createElement('header', { style: headerStyle }),
          _react2.default.createElement(
            'div',
            { className: 'picture-container' },
            _react2.default.createElement('img', { src: '/img/' + athlete.image }),
            _react2.default.createElement(
              'h2',
              { className: 'name' },
              athlete.name
            )
          ),
          _react2.default.createElement(
            'section',
            { className: 'description' },
            _react2.default.createElement(_Sample2.default, null),
            'Olympic medalist from ',
            _react2.default.createElement(
              'strong',
              null,
              _react2.default.createElement(_Flag2.default, { code: athlete.country, showName: 'true' })
            ),
            ', born in ',
            athlete.birth,
            ' (Find out more on ',
            _react2.default.createElement(
              'a',
              { href: athlete.link, target: '_blank' },
              'Wikipedia'
            ),
            ').'
          ),
          _react2.default.createElement(
            'section',
            { className: 'medals' },
            _react2.default.createElement(
              'p',
              null,
              'Winner of ',
              _react2.default.createElement(
                'strong',
                null,
                athlete.medals.length
              ),
              ' medals:'
            ),
            _react2.default.createElement(
              'ul',
              null,
              athlete.medals.map(function (medal, i) {
                return _react2.default.createElement(_Medal2.default, _extends({ key: i }, medal));
              })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'navigateBack' },
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/' },
            '\xAB Back to the index'
          )
        )
      );
    }
  }]);

  return AthletePage;
}(_react2.default.Component);

var _default = AthletePage;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(AthletePage, 'AthletePage', 'src/components/AthletePage.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/AthletePage.js');
}();

;