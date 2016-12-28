"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header() {
  return _react2.default.createElement(
    "div",
    { className: "header" },
    _react2.default.createElement("img", { className: "header__logo", src: "img/react-logo.png", role: "presentation" })
  );
};

exports.default = Header;