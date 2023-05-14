const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        new: './newConfig.js',
        old: './oldConfig.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist/'),
        environment: {
            arrowFunction: false,
        }
    },

    // 配置各种loader
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },

    optimization: {
        minimize: false,
    },
}