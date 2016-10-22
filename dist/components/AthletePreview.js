'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AthletePreview = function (_React$Component) {
  _inherits(AthletePreview, _React$Component);

  function AthletePreview() {
    _classCallCheck(this, AthletePreview);

    return _possibleConstructorReturn(this, (AthletePreview.__proto__ || Object.getPrototypeOf(AthletePreview)).apply(this, arguments));
  }

  _createClass(AthletePreview, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactRouter.Link,
        { to: '/athlete/' + this.props.id },
        _react2.default.createElement(
          'div',
          { className: 'athlete-preview' },
          _react2.default.createElement('img', { src: 'img/' + this.props.image }),
          _react2.default.createElement(
            'h2',
            { className: 'name' },
            this.props.name
          ),
          _react2.default.createElement(
            'span',
            { className: 'medals-count' },
            _react2.default.createElement('img', { src: '/img/medal.png' }),
            ' ',
            this.props.medals.length
          )
        )
      );
    }
  }]);

  return AthletePreview;
}(_react2.default.Component);

var _default = AthletePreview;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(AthletePreview, 'AthletePreview', 'src/components/AthletePreview.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/AthletePreview.js');
}();

;