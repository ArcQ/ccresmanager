var config = {
  entry: ['./src/manager/manager.js'],
  output: {
    'filename': './generated/dist/ccresmanager.js',
    'libraryTarget': 'commonjs2',
    'library': 'ccresmanager'
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
    extensions: ['', '.js']
  },
};

if(process.env.NODE_ENV==='dev'){
  config.devtool = 'inline-source-map';
  config.output.filename = './generated/build/ccresmanager.js';
}
else if(process.env.NODE_ENV==='dist'){
  config.output.filename = './generated/dist/ccresmanager.js';
}

module.exports = config;
