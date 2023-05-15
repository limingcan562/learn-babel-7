"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _index = _interopRequireDefault(require("core-js-pure/features/promise/index.js"));
var _includes = _interopRequireDefault(require("core-js-pure/features/instance/includes.js"));
const arr = [1, 2, 3];
_index.default.all();
(0, _includes.default)(arr).call(arr, 2);
