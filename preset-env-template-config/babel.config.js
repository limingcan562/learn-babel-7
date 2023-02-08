const presets = [
    [
        '@babel/preset-env',
        {
            modules: false,
            useBuiltIns: process.env.CONFIG,
            corejs: {
                version: '3.27.2',
                proposals: true
            }
        }
    ]
];
module.exports = {presets};