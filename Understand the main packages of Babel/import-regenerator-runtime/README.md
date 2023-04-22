## 使用小于`Babel 7.18.0`的版本，感受手动引入`import-regenerator-runtime`
- `npm i`
- `npm run compile` 输出`Babel`编译后文件
- `npm run build` 输出最后包，可在浏览器运行
- `npm run build:all` 输出上面两个文件

## 注意
开启`babel.config.js`里的注释的代码，可以感受`regenerator`为`false时，为什么要引入`regenerator-runtime`这个包提供regeneratorRuntime全局对象