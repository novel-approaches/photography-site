module.exports = {
  context: __dirname,
  entry: "./admin_dev.js",
  output: {
    path: "",
    filename: "admin.js"
  },
  module: {
    loaders: [
      {
        test: [/\.js?$/],
        exclude: /node_modules/,
        loader: 'babel',
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
    extensions: [".js"]
  }
};
