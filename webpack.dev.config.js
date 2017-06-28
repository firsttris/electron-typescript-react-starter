const webpackConfig = require('./webpack.config');
const path = require('path');
const OUTPUT_DIR = path.resolve(__dirname, 'dist');
const main = webpackConfig[0];
const renderer = Object.assign(
    {
        devtool: 'inline-source-map',
        devServer: {
            contentBase: OUTPUT_DIR,
            stats: {
                colors: true,
                chunks: false,
                children: false
            }
        }
    },
    webpackConfig[1]);

module.exports = [main, renderer];