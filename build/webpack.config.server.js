const path = require('path')
// const HTMLPlugin = require('html-webpack-plugin')
const ExtractPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')
const merge = require('webpack-merge')
const VueServerPlugin = require('vue-server-renderer/server-plugin')
const baseConfig = require('./webpack.config.base')

let config

// const devServer = {
//   port: 8100,
//   host: '0.0.0.0',
//   overlay: {
//     errors: true
//   },
//   hot: true
// }

// const defaultPlugins = [
//   new webpack.DefinePlugin({
//     'process.env': {
//       NODE_ENV: '"development"'
//     }
//   })
//   new HTMLPlugin({
//     template: path.join(__dirname, '../template.html')
//   })
// ]

config = merge(baseConfig, {
  target: 'node',
  entry: path.join(__dirname, '../client/server.entry.js'),
  output: {
    libraryTarget: 'commonjs2',
    filename: 'server-entry.js',
    path: path.join(__dirname, '../server-build')
  },
  externals: Object.keys(require('../package.json').dependencies),
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.styl/,
        use: ExtractPlugin.extract({
          fallback: 'vue-style-loader',
          use: [
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true
              }
            },
            'stylus-loader'
          ]
        })
      }
    ]
  },
  // devServer,
  plugins: [
    new ExtractPlugin('styles.[contentHash:8].css'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"server"'
    }),
    new VueServerPlugin()
  ]
})

module.exports = config
