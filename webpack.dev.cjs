
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './.xui/output/temp/index.js',
    devServer: {
        port: 3000,
        static: path.join(__dirname, ".xui/output/temp/")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './.xui/index.html',
            inject: true
        })
    ]
}