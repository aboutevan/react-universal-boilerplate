'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _pugFlattenInnerHelper(arr, val) {
  return arr.concat(Array.isArray(val) ? _pugFlatten(val) : val);
}

function _pugFlatten(arr) {
  return arr.reduce(_pugFlattenInnerHelper, []);
} // src/components/Flag.js


var data = {
  'cu': {
    'name': 'Cuba',
    'icon': 'flag-cu.png'
  },
  'fr': {
    'name': 'France',
    'icon': 'flag-fr.png'
  },
  'jp': {
    'name': 'Japan',
    'icon': 'flag-jp.png'
  },
  'nl': {
    'name': 'Netherlands',
    'icon': 'flag-nl.png'
  },
  'uz': {
    'name': 'Uzbekistan',
    'icon': 'flag-uz.png'
  }
};

var Flag = function (_React$Component) {
  _inherits(Flag, _React$Component);

  function Flag() {
    _classCallCheck(this, Flag);

    return _possibleConstructorReturn(this, (Flag.__proto__ || Object.getPrototypeOf(Flag)).apply(this, arguments));
  }

  _createClass(Flag, [{
    key: 'render',
    value: function render() {
      var name = data[this.props.code].name;
      var icon = data[this.props.code].icon;
      return _react2.default.createElement(
        'span',
        { className: 'flag' },
        _react2.default.createElement('img', { src: '/img/' + icon, title: name, className: 'icon' }),
        this.props.showName && _react2.default.createElement(
          'span',
          { className: 'name' },
          name
        )
      );
    }
  }]);

  return Flag;
}(_react2.default.Component);

exports.default = Flag;