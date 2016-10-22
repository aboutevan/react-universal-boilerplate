'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _AppRoutes = require('./components/AppRoutes');

var _AppRoutes2 = _interopRequireDefault(_AppRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.onload = function () {
		_reactDom2.default.render(_react2.default.createElement(_AppRoutes2.default, null), document.getElementById('main'));

		module.hot.accept('./components/AppRoutes', function () {
				var NewApp = require('./components/AppRoutes').default;
				_reactDom2.default.render(_react2.default.createElement(NewApp, null), document.getElementById('main'));
		});
};
;

var _temp = function () {
		if (typeof __REACT_HOT_LOADER__ === 'undefined') {
				return;
		}
}();

;