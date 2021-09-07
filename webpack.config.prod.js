const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const base=require('./webpack.config.base')

module.exports = {
  ...base,
  mode: 'production',//development开发用的，production 用户看的
  plugins:
    [...base.plugins,
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // all options are optional
        filename: "style.[contenthash].bundle.css",
        chunkFilename: "[id].[contenthash].bundle.css",
        ignoreOrder: false, // Enable to remove warnings about conflicting order
      })],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use:[MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
};


