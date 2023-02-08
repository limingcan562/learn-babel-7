let 
useBuiltIns = process.env.CONFIG === 'false' ? !!!process.env.CONFIG : process.env.CONFIG,
config = {};

// useBuiltIns: entry || useBuiltIns: usage
if (process.env.CONFIG !== 'false') {
    config = {
        useBuiltIns,
        corejs: {
            version: '3.27.2',

            // 如果要垫平提案API，设为true
            proposals: true
        }
    }
}
// useBuiltIns: false
else {
    config = {
        useBuiltIns
    }
}

const presets = [
    [
        '@babel/preset-env',
        {
            targets: 'ie 11',
            // targets: 'chrome 80',
            ...config
        }
    ]
];

module.exports = {presets};