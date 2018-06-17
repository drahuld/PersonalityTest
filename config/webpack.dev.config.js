const webpack = require('webpack');
const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var extractPlugin = new ExtractTextPlugin({filename: 'main.css'});
var STATIC_PATH = path.resolve(__dirname, '../src/main/static/');
var APP_DIR = path.resolve(__dirname, '../src/main/js');
var BUILD_DIR = path.resolve(__dirname, 'public');
const config = {
    entry: APP_DIR + "/index.jsx",
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
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.scss$/,
                use: extractPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            }, {
                test: /\.(woff|woff2|eot|ttf)$/,
                loader: 'file-loader?name=[name]-[ext].[hash]'
            }, {
                test: /\.html$/,
                use: ['html-loader']
            }, {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    publicPath: STATIC_PATH + '/images/'
                }
            }
        ]
    },
    plugins: [
        extractPlugin,
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, '../src/main/static/')
            }
        ])
    ],

};
module.exports = config;

