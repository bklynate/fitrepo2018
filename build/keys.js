'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _prod = require('./prod');

var _prod2 = _interopRequireDefault(_prod);

var _dev = require('./dev');

var _dev2 = _interopRequireDefault(_dev);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Keys.js
var NODE_ENV = process.env.NODE_ENV;

// if the environment is production, load prod keys

if (NODE_ENV === "production") _prod2.default; // eslint-disable-line

exports.default = _dev2.default;
//# sourceMappingURL=keys.js.map