const path = require("path");

module.exports = {
  mode: "production",
  entry: ["babel-polyfill", path.resolve(__dirname, "src", "index.js")],
  output: {
    path: path.join(__dirname, "build", "content"),
    filename: "content.min.js"
  },
  node: {
    fs: "empty",
    child_process: "empty",
    net: "empty",
    tls: "empty"
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
};
