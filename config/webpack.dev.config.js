const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.config');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    output: {
        filename: 'js/[name].bundle.[hash:8].js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, '../build'),
        open: true,  // 自动打开浏览器
        port: 4000,  // 端口
        compress: true,  // gzip压缩
        hot: false
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',  // html 模板
            inject: 'body',  // 在 body 最底部引入 js 文件
            hash: false
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
          {
            test: /(?<!module)\.css$/,  // .css
            use: [ 
              'style-loader',
              'css-loader',
              'postcss-loader'
            ]
          },
          {
            test: /(?<!module)\.scss$/,  // .scss
            use: [
              'style-loader',
              'css-loader',
              'postcss-loader',
              'sass-loader'
            ]
          },
          {
            test: /\.module\.css?$/,  // .module.css，启用 CSS 模块化
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: { modules: { localIdentName: '[local]_[hash:base64:5]' } }
              },
              'postcss-loader'
            ]
          },
          {
            test: /\.module\.(scss|sass)$/,  // .module.scss，启用 CSS 模块化
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: { modules: { localIdentName: '[local]_[hash:base64:5]' } }
              },
              'postcss-loader',
              'sass-loader'
            ]
          },
        ]
      },
});