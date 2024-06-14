const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 9000,
    hot: true
  },
  module:{
    rules: [
        {
            test: /\.js$/,
            use: ['babel-loader']
        }
    ]
  }
};
