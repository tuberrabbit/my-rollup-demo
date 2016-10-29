'use strict';
const webpack = require('webpack');
const path = require('path');

module.exports = {
    context: path.join(__dirname, './src'),
    entry: {
        js: './main.js'
    },
    output: {
        path: path.join(__dirname, './dest'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: [
                    'babel-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js'],
        modules: [
            path.resolve('./src'),
            'node_modules'
        ]
    },
    plugins: [
        //new webpack.LoaderOptionsPlugin({
        //    minimize: true,
        //    debug: false
        //}),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            },
            sourceMap: false
        }),
        new webpack.DefinePlugin({
            'process.env': {NODE_ENV: JSON.stringify('development')}
        })
    ],
    devServer: {
        contentBase: './src'
    }
};