const webpackConfig = require('./webpack.config');
const webpack = require('webpack');
const BabiliPlugin = require('babili-webpack-plugin');
const main = webpackConfig[0];
const renderer = webpackConfig[1];

renderer.entry.vendor = ['moment', 'react', 'react-dom', 'react-redux', 'react-router-dom', 'react-transition-group', 'reactstrap', 'redux', 'socket.io-client'];
renderer.plugins.push(
    new webpack.optimize.CommonsChunkPlugin({
        name: "vendor",
        minChunks: Infinity,
    }),
    new BabiliPlugin()
);

module.exports = [main, renderer];