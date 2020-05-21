const path = require('path');

module.exports = {
  mode: 'development',
  entry: ['babel-polyfill', path.resolve(__dirname, 'content.js')],
  output: {
    path: path.join(__dirname, 'build', 'content'),
    filename: 'index.js'
  },
  //watch: true,
  node: {
    fs: 'empty',
    child_process: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
};
