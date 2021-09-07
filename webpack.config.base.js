
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {

  entry: './src/index.js',
  output: {

    filename: '[name].[contenthash].bundle.js'
  },
  plugins:
    [new HtmlWebpackPlugin({
      title: 'test',
      template: 'src/assets/index.html'
    })],

};