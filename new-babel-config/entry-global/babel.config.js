const targets = 'ie 11';
// 可以修改version，看看输出的代码有没有什么区别
const version = require("core-js/package.json").version;

let 
presets,
plugins;

// 新配置方法
if (process.env.CONFIG === 'new') {
    presets = [
        '@babel/preset-env',
    ]
    plugins = [
        [
            'babel-plugin-polyfill-corejs3',
            {
                method: "entry-global", 
                version
            }
        ],
        '@babel/plugin-transform-runtime',
    ];
} 
// 旧的配置方法
else {
    presets = [
        [
            '@babel/preset-env',
            {
                useBuiltIns: 'entry',
                corejs: {
                    version
                }
            }
        ]
    ]
    plugins = [
        '@babel/plugin-transform-runtime',
    ];
}

module.exports = {targets, plugins, presets};