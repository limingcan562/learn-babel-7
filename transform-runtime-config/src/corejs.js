// 设置@babel/plugin-transform-runtime corejs配置项
const arr = [1, 2, 3];

// 使用实例includes方法
console.log(arr.includes(2));

// 使用全局API Promise
Promise.resolve().then(() => console.log('get up'));

// 使用stage-1阶段API
console.log(Math.signbit(-0));  // => true