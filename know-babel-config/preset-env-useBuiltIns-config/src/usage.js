// useBuiltIns: usage
const arr_lastItem = ['first', 'second', 'last'];

// 使用提案API Array.prototype.lastItem
console.log(arr_lastItem.lastItem);

// 使用Promise API
Promise.resolve('promise').then(val => console.log(val));