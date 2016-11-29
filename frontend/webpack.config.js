const Webpack = require('webpack'),
      path = require('path');

module.exports = {
  context: __dirname,
  entry: "./app/App.jsx",
  output: {
    path: "./static/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
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
