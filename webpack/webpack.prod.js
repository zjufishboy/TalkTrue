const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin=require('mini-css-extract-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: false,
  plugins: [
    new CleanWebpackPlugin(),
    new BundleAnalyzerPlugin(),
    new MiniCssExtractPlugin({//提取css
      filename:'fishstar.css'
    }),
  ],
  optimization:{
    splitChunks:{
      chunks:"all"

    },
  }
});