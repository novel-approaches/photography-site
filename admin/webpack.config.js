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
