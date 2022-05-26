const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

// process.env.NODE_ENV = 'development'

module.exports = {
  // 入口文件
  entry: './src/js/index.js',
  // 输出位置
  output: {
    filename: 'js/built.js',
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
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  // plugins配置
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/built.css'
    }),
    new CssMinimizerPlugin()
  ],
  // 模式 development 开发环境，production 生产环境
  mode: 'development'
}
