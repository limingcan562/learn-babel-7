"use strict";

require("core-js/modules/esnext.array.group.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.promise.js");
var array = [1, 2, 3, 4, 5];

// 处于stage-3提案的方法
var arr = array.group(function (num, index, array) {
  return num % 2 === 0 ? 'even' : 'odd';
});
var wait = function wait() {
  return new Promise(function (resolve) {
    return setTimeout(function () {
      return resolve('get up Lee');
    }, 1000);
  });
};
wait().then(function (val) {
  return console.log(val);
});
