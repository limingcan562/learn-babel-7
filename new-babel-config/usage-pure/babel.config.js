const targets = 'ie 11';

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
                method: "usage-pure", 
                version: require("core-js-pure/package.json").version,
                proposals: true
            }
        ],
        '@babel/plugin-transform-runtime',
    ];
} 
// 旧的配置方法
else {
    presets = [
        '@babel/preset-env',
    ]
    plugins = [
        [
            '@babel/plugin-transform-runtime',
            {
                corejs: 3,
                proposals: true
            }
        ]
    ];
}

module.exports = {targets, plugins, presets};