var config = {
  entry: ['./src/Calculator.js'],
  output: {
    'filename': './generated/dist/calculator.js',
    'libraryTarget': 'commonjs2',
    'library': 'test'
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'] 
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: path.resolve(__dirname, root),
    modulesDirectories: [
      'node_modules',
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
