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
                method: "entry-global", 
                version: require("core-js/package.json").version,
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
                    version: require("core-js/package.json").version,
                }
            }
        ]
    ]
    plugins = [
        '@babel/plugin-transform-runtime',
    ];
}

module.exports = {targets, plugins, presets};