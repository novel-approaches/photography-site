const webpack = require('webpack'),
      path = require('path');


module.exports = {
  context: __dirname,
  entry: './.app/App.jsx',
  output: {
    path: './static/',
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
          'style-loader',
          'css-loader',
          'autoprefixer-loader?browsers=last 3 versions',
          'sass-loader?outputStyle=expanded'
        ]
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      },
      sourceMap: false
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
};
