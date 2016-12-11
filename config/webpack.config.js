var path = require('path');

var config = {
  entry: ['./src/Calculator.js'],
  output: {
    'filename': './generated/dist/calculator.js',
    'libraryTarget': 'commonjs2',
    'library': 'test'
  },
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
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve('./node_modules')
    ],
  }
};

if(process.env.NODE_ENV==='dev'){
  config.devtool = 'inline-source-map';
  config.output.filename = './generated/build/calculator.js';
}
else if(process.env.NODE_ENV==='dist'){
  config.output.filename = './generated/dist/calculator.js';
}

module.exports = config;
