'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Layout = require('./Layout.template');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (process.env.BROWSER) {
  require('./Layout.sass');
}

var Layout = _Layout2.default;

exports.default = Layout;