const path = require('path')
const createVueloaderOptions = require('./vue-loader.config')

const isDev = process.env.NODE_ENV === 'development'

const config = {
  target: 'web',
  entry: path.join(__dirname, '../client/client.entry.js'),
  output: {
    filename: 'bundle.[hash:8].js',
    path: path.join(__dirname, '../public'),
    publicPath: 'http://localhost:8000/public/'
  },
  module: {
    rules: [
      {
        test: /\.(vue|js|jsx)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        enforce: 'pre' // 预处理
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: createVueloaderOptions(isDev)
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(gif|jpg|jpeg|png|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
              name: 'resources/[path][name].[hash:6].[ext]'
            }
          }
        ]
      }
    ]
  }
}

module.exports = config
