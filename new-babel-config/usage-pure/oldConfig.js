"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");
var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));
var array = [1, 2, 3, 4, 5];

// 处于stage-3提案的方法
var arr = array.group(function (num, index, array) {
  return num % 2 === 0 ? 'even' : 'odd';
});
var wait = function wait() {
  return new _promise.default(function (resolve) {
    return setTimeout(function () {
      return resolve('get up Lee');
    }, 1000);
  });
};
wait().then(function (val) {
  return console.log(val);
});
console.log(arr);
