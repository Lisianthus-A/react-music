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
        filename: 'js/[name].bundle.[chunkhash:8].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'public/index.html',  // html 模板
            inject: 'body',  // 在 body 最底部引入 js 文件
            minify: {
                removeComments: true,  // 去注释
                collapseWhitespace: true,  // 去空格
                conservativeCollapse: true  // 压缩成一行
            },
            hash: true // 给文件添加hash值
        }),
        new CleanWebpackPlugin(),  // 自动清理构建文件夹
        new MiniCssExtractPlugin({  // 打包出 CSS 独立文件
            filename: 'css/[name].[hash].css',
            chunkFilename: 'css/[id].[hash].css',
        })
    ],
    module: {
        rules: [
            {
                test: /(?<!module)\.css$/,  // .css
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /(?<!module)\.scss$/,  // .scss
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.module\.css?$/,  // .module.css，启用 CSS 模块化
                use: [
                    MiniCssExtractPlugin.loader,
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
                    MiniCssExtractPlugin.loader,
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
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 30000,
            maxSize: 0,
            minChunks: 1,
            cacheGroups: {  // 被抽离的模块
                framework: {
                    test: "framework",  // 匹配入口模块名称
                    name: "framework",  // 抽离后生成的名称
                    enforce: true
                },
                vendors: {
                    priority: -10,
                    test: /node_modules/,  // 筛选从 node_modules 文件夹下引入的模块
                    name: "vendor",
                    enforce: true,
                },
            }
        },
        minimizer: [
            new UglifyJsPlugin(),  // 压缩 js 文件
            new OptimizeCssAssetsPlugin({  // 压缩样式文件
                assetNameRegExp: /\.css$/g,
                cssProcessor: require("cssnano"),  // 压缩处理器
                cssProcessorPluginOptions: {
                    preset: ['default', { discardComments: { removeAll: true } }]  // 去注释
                },
                canPrint: true  // 插件能够在 console 中打印信息
            })
        ]
    }
});