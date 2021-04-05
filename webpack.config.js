const path = require("path");

const config = {
  entry: "./frontend/mooboo.jsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/env", "@babel/react"],
        },
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  devtool: "source-map",
};
module.exports = config;
