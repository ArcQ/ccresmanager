var config = {
  cache: true,
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(bower_components|node_modules|generated)/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015', { "modules": false }],
          cacheDirectory: false,
        },
      },
    ],
  },
};

module.exports = config;
