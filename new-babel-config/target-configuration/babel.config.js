const presets = [
    '@babel/preset-env',
]
const plugins = [
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
module.exports = {targets, plugins, presets};