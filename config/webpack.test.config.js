var path = require('path');

var config = {
  cache: true,
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(bower_components|node_modules|generated)/,
        use:[{
          loader: 'babel-loader',
          options: {
            presets: ['es2015'],
            cacheDirectory: false,
          }
        }]
      },
    ],
  },
};

module.exports = config;
