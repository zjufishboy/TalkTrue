const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(),
  ],
  watchOptions: {
    poll: 1000, // 轮询间隔时间
    aggregateTimeout: 500, // 防抖（在输入时间停止刷新计时）
    ignored: /node_modules/,
  },
});