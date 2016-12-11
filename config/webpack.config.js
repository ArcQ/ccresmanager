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
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015', { "modules": false }] 
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modules: [
      path.resolve('./src'),
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
