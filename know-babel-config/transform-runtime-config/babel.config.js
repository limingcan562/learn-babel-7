let 
value = process.env.CONFIG === 'false' ? !!!process.env.CONFIG : process.env.CONFIG.split('-')[1],
config = {},
common = {
    helpers: true,
    regenerator: true,
};

// corejs: false
if (process.env.CONFIG === 'false') {
    config = {
        corejs: false
    }
}
// corejs: 2
else if (value === '2') {
    config = {
        corejs: {
            version: value
        }
    }
}
// corejs: {version: 3, proposals: true}
else {
    config = {
        corejs: {
            version: value,
            proposals: true
        }
    }
}

const plugins = [
    [
        "@babel/plugin-transform-runtime",
        {
            ...common,
            ...config
        }
    ]
]

const presets = [
    '@babel/preset-env'
];

// 顶层添加targets也可以
const targets = {chrome: 80}

module.exports = {/* targets, */ plugins, presets};