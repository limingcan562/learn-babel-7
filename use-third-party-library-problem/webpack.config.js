const path = require('path');

module.exports = {
    mode: 'production',
    entry: './index.js',
    output: {
        filename: 'dist.js',
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

                // include: [
                //     path.resolve(__dirname,'./node_modules/tars-utils'),
                //     path.resolve(__dirname,'./index'),
                // ],

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