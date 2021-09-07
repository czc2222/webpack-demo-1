

const base=require('./webpack.config.base')
module.exports = {
  ...base,
  mode: 'development',//development开发用的，production 用户看的
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};



