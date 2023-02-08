"use strict";

require("core-js/modules/esnext.array.last-item.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.promise.js");
// useBuiltIns: usage
var arr_lastItem = ['first', 'second', 'last'];

// 使用提案API Array.prototype.lastItem
console.log(arr_lastItem.lastItem);

// 使用Promise API
Promise.resolve('promise').then(function (val) {
  return console.log(val);
});
