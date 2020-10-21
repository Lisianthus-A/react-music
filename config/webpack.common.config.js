const path = require('path');

module.exports = {
    entry: {
        index: './src/index.js',
        framework: ['react', 'react-dom']
    },
    output: {
        filename: 'js/bundle.js',
        path: path.resolve(__dirname, '../build')
    },
    resolve: {
        alias: {
          Components: path.resolve(__dirname, '../src/components'),
          Apis: path.resolve(__dirname, '../src/apis'),
          Utils: path.resolve(__dirname, '../src/utils'),
          Images: path.resolve(__dirname, '../assets/images'),
          TestData: path.resolve(__dirname, '../apiDataExample')
        }
      },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/  //不需要转译node_modules文件夹
            },
            {
                test: /\.(jpg|png|gif)$/,  //图片打包成Base64格式
                use: {
                    loader: 'url-loader',
                    options: {
                        name: '[name].[ext]',   //文件名.后缀
                        outputPath: 'images/',
                        limit: 8192  //大于8kb则不使用url-loader
                    }
                }
            },
            {
                test: /\.(eot|ttf|svg|woff|woff2)$/,  //字体文件
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash].[ext]',
                        outputPath: 'font/'
                    }
                }
            }
        ]
    }
};