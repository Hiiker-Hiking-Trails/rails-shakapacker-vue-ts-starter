const { webpackConfig, merge } = require("shakapacker");
const { VueLoaderPlugin } = require('vue-loader')
const ForkTSCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
let config = {}

config = merge({
  module: {
    rules: [
      {
        test: /\.ts$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        options: {},
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [new ForkTSCheckerWebpackPlugin(), new VueLoaderPlugin()],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  }
}, webpackConfig)


module.exports = config