module.exports = {
  context: __dirname,
  entry: './admin_dev.js',
  output: {
    path: '',
    filename: 'admin.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({  // <-- Key to reducing React's size
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.DedupePlugin(),            // Dedupe similar code 
    new webpack.optimize.UglifyJsPlugin(),          // Minify everything
    new webpack.optimize.AggressiveMergingPlugin()  // Merge chunks 
  ],
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
