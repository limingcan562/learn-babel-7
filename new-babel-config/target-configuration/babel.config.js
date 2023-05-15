const presets = [
    '@babel/preset-env',
]
const plugins = [
    [
        'babel-plugin-polyfill-corejs3',
        {
            method: "usage-pure", 
            version: require("core-js-pure/package.json").version,
            proposals: true,
            debug: true,
            // targets: 'chrome 100'
        }
    ],
    '@babel/plugin-transform-runtime',
];
module.exports = {plugins, presets};