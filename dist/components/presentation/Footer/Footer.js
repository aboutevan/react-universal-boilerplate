"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer() {
  return _react2.default.createElement(
    "div",
    { className: "footer" },
    _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        "p",
        { className: "footer__colophon" },
        "Built by",
        _react2.default.createElement(
          "a",
          { href: "//aboutevan.com", target: "_blank", rel: "noopener noreferrer" },
          " Evan"
        ),
        ". Contribute on",
        _react2.default.createElement(
          "a",
          { href: "//aboutevan.com", target: "_blank", rel: "noopener noreferrer" },
          " Github"
        )
      )
    )
  );
};

exports.default = Footer;