const Webpack = require('webpack'),
      path = require('path');

module.exports = {
  context: __dirname,
  entry: "./app/App.jsx",
  output: {
    path: "../backend/static/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }, {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader',
          'autoprefixer-loader?browsers=last 3 versions',
          'sass-loader?outputStyle=expanded'
        ]
      }
    ]
  },
  stats: {
    colors: true,
    modules: true,
    reasons: true,
    errorDetails: true
  },
  devtool: 'source-maps',
  resolve: {
    extensions: [".js", ".jsx"]
  }
};
