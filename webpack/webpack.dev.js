const path = require('path');
const webpackMerge = require('webpack-merge');
const common = require('./webpack.common.js');


module.exports = webpackMerge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: '../dist',
    publicPath: '/',
    compress: true,
    host:'0.0.0.0',
    port: 9876,
    historyApiFallback: {
      index:"/"
    }
  },
});