const webpack = require('webpack'),
      path = require('path');


module.exports = {
  context: __dirname,
  entry: './app/App.jsx',
  output: {
    path: '../backend/static/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }, {
        test: /\.scss$/i,
        loaders: [
          'style',
          'css',
          'autoprefixer?browsers=last 3 versions',
          'sass?outputStyle=expanded'
        ]
      }, {
        test: /\.json$/i,
        loader: 'json'
      }
      , {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader?name=[name].[ext]&ouputPath=app/static/images/'
        // "file-loader?name=[name].[ext]&publicPath=assets/foo/&outputPath=app/images/"
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
    extensions: ['', '.js', '.jsx']
  }
};
