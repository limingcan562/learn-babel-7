const presets = [
    [
        '@babel/preset-env',
        {
            modules: false,
            useBuiltIns: 'usage',
            corejs: {
                version: '3.27.2',
                proposals: true
            }
        }
    ]
];

module.exports = {presets};