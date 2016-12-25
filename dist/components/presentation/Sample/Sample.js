"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sample = function Sample() {
  return _react2.default.createElement(
    "div",
    { className: "sample" },
    _react2.default.createElement(
      "h2",
      null,
      "Im a sample component included on index pppage"
    )
  );
};

exports.default = Sample;