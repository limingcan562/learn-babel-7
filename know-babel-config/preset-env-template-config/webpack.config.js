const 
path = require('path'),
config = {
    'entry': './src/entry.js',
    'usage': './src/usage.js',
},
log = function(msg, { title='TITLE', color='white' } = {}) {
    const COLOR_CODE = ['black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white'].indexOf(color)
    if (COLOR_CODE >= 0) {
        const TITLE_STR = title ? `\x1b[4${COLOR_CODE};30m ${title} \x1b[0m ` : ''
        console.log(`${TITLE_STR}\x1b[3${COLOR_CODE}m${msg}\x1b[;0m`)
    }
    else {
        console.log(title ? `${title} ${msg}` : msg)
    }
}

log(`useBuiltIns: ${process.env.CONFIG}`, {title: '当前配置为:', color: 'green'});

module.exports = {
    mode: 'production',
    entry: config[process.env.CONFIG],
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
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },

    optimization: {
        minimize: true,
    },
}