const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.tsx',
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
            AppContainer: path.resolve(__dirname, '../src/containers'),
            Utils: path.resolve(__dirname, '../src/utils'),
        },
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    plugins: [
        // 静态目录
        new CopyWebpackPlugin({
            patterns: [{
                from: path.resolve(__dirname, '../static'),
                to: './'
            }]
        })
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/
            },
            // {
            //     test: /\.(jpg|png|gif)$/,  
            //     use: {
            //         loader: 'url-loader',
            //         options: {
            //             name: '[name].[ext]',   
            //             outputPath: 'images/',
            //             limit: 8192
            //         }
            //     }
            // },
            // {
            //     test: /\.(eot|ttf|svg|woff|woff2)$/,
            //     use: {
            //         loader: 'file-loader',
            //         options: {
            //             name: '[name].[hash].[ext]',
            //             outputPath: 'font/'
            //         }
            //     }
            // }
        ]
    }
};