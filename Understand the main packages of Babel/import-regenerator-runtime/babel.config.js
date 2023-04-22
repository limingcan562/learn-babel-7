const presets = [
    '@babel/preset-env'
];

module.exports = {presets};

// 感受`regenerator`为false时，为什么要引入`regenerator-runtime`这个包提供regeneratorRuntime全局对象
// const plugins = [
//     [
//         '@babel/plugin-transform-runtime',
//         {
//             regenerator: false
//         }
//     ]
// ]
// const presets = [
//     '@babel/preset-env'
// ];
// module.exports = {plugins, presets};
