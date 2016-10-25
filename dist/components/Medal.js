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

var typeMap = {
	'G': 'Gold',
	'S': 'Silver',
	'B': 'Bronze'
};

var Medal = function (_React$Component) {
	_inherits(Medal, _React$Component);

	function Medal() {
		_classCallCheck(this, Medal);

		return _possibleConstructorReturn(this, (Medal.__proto__ || Object.getPrototypeOf(Medal)).apply(this, arguments));
	}

	_createClass(Medal, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'li',
				{ className: 'medal' },
				_react2.default.createElement(
					'span',
					{ className: 'symbol symbol-' + this.props.type, title: typeMap[this.props.type] },
					this.props.type
				),
				_react2.default.createElement(
					'span',
					{ className: 'year' },
					this.props.year
				),
				_react2.default.createElement(
					'span',
					{ className: 'city' },
					this.props.city
				),
				_react2.default.createElement(
					'span',
					{ className: 'event' },
					'(',
					this.props.event,
					')'
				),
				_react2.default.createElement(
					'span',
					{ className: 'category' },
					this.props.category
				)
			);
		}
	}]);

	return Medal;
}(_react2.default.Component);

exports.default = Medal;