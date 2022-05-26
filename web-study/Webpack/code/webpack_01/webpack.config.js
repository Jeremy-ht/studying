const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // 入口文件
    entry: './src/index.js',
    // 输出位置
    output: {
        filename: 'built.js',
        // __dirname nodejs的变量，代表当前文件目录绝对路径
        path: resolve(__dirname, 'build')
    },
    // loader配置
    module: {
        rules: [
            {
                // 匹配哪些文件
                test: /\.css$/,
                // use 从右到左执行
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(jpg|png|gif|gpeg)$/,
                type: 'asset/resource'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                exclude: /\.(html|css|less|gif|png|jpg|jpeg)$/,
                loader: 'file-loader',
                options: {
                    name: '[hash:10].[ext]'
                }
            }
        ]
    },
    // plugins配置
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    // 模式 development 开发环境，production 生产环境
    mode: 'development',
    devServer: {
        static: resolve(__dirname, 'build'),
        // 启动gzip压缩
        compress: true,
        port: 3000,
        open: true,
        watchFiles: './src/index.html'
    }
}
