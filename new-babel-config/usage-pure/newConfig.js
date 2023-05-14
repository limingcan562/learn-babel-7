"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _group = _interopRequireDefault(require("core-js-pure/features/instance/group.js"));
var _index = _interopRequireDefault(require("core-js-pure/features/promise/index.js"));
var array = [1, 2, 3, 4, 5];

// 处于stage-3提案的方法
var arr = (0, _group.default)(array).call(array, function (num, index, array) {
  return num % 2 === 0 ? 'even' : 'odd';
});
var wait = function wait() {
  return new _index.default(function (resolve) {
    return setTimeout(function () {
      return resolve('get up Lee');
    }, 1000);
  });
};
wait().then(function (val) {
  return console.log(val);
});
console.log(arr);
