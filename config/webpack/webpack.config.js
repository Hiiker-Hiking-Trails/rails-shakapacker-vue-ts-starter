const { webpackConfig, merge } = require("shakapacker");
const { VueLoaderPlugin } = require('vue-loader')
const ForkTSCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
let config = {}

config = merge({
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [new ForkTSCheckerWebpackPlugin(), new VueLoaderPlugin()],
  resolve: {
    extensions: ['.vue']
  }
}, webpackConfig)


module.exports = config