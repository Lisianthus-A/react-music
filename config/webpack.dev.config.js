const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.config');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    output: {
        filename: 'js/[name].bundle.[hash:8].js'  //输出js文件使用hash
    },
    devServer: {
        contentBase: path.resolve(__dirname, '../build'),
        // open: true,  //自动打开浏览器
        port: 4000,  //端口
        compress: true,  //gzip压缩
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',  //模板
            inject: 'body',  //在body最底部引入js文件
            hash: false
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [ 
              'style-loader',
              'css-loader',
              'postcss-loader'
            ]
          },
          {
            test: /\.(scss|sass)$/,
            use: [
              'style-loader',
              'css-loader',
              'postcss-loader',
              'sass-loader'
            ]
          },
        ]
      },
});