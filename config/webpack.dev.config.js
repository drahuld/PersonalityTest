const webpack = require('webpack');
const path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var APP_DIR = path.resolve(__dirname, "../src/main/js", "index.jsx");
var BUILD_DIR = path.resolve(__dirname, 'public');
const config = {
    entry: {index: APP_DIR},
    output: {
        path: BUILD_DIR,
        filename: "bundle.js",
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            }, {
                test: /\.scss$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "sass-loader" }
                ]
            }, {
                test: /\.(woff|woff2|eot|ttf)$/,
                use: 'file-loader?name=[name]-[ext].[hash]'
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, '../src/main/static/')
                }
            ]
        })
    ],
};
module.exports = config;

