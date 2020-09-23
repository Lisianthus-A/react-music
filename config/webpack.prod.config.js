const { merge } = require('webpack-merge');
const common = require('./webpack.common.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'js/[name].bundle.[chunkhash:8].js'  //输出js文件使用hash
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html',  //模板
      inject: 'body',  //在body最底部引入js文件
      minify: {
        removeComments: true,  //去注释
        collapseWhitespace: true,  //去空格
        conservativeCollapse: true  //压缩成一行
      },
      hash: true //给文件添加hash值
    }),
    new CleanWebpackPlugin(),  //自动清理构建文件夹
    new MiniCssExtractPlugin({  //打包出css独立文件
      filename: 'css/[name].[hash].css',
      chunkFilename: 'css/[id].[hash].css',
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }

    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      cacheGroups: {  //被抽离的模块
        framework: {
          test: "framework",  //匹配入口模块名称
          name: "framework",  //抽离后生成的名称
          enforce: true
        },
        vendors: {
          priority: -10,
          test: /node_modules/,  //筛选从node_modules文件夹下引入的模块
          name: "vendor",
          enforce: true,
        },
      }
    },
    minimizer: [
      new UglifyJsPlugin(),  //压缩js文件
      new OptimizeCssAssetsPlugin({  //压缩样式文件
        assetNameRegExp: /\.css$/g,
        cssProcessor: require("cssnano"),  //压缩处理器
        cssProcessorPluginOptions: {  //传给处理器的option
          preset: ['default', { discardComments: { removeAll: true } }]  //去注释
        },
        canPrint: true  //插件能够在console中打印信息
      })
    ]
  }

});