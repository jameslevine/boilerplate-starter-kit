import webpack from "webpack";
import CopyWebpackPlugin from "copy-webpack-plugin";

import paths from "./paths";
import rules from "./rules";

module.exports = {
  entry: paths.entryPath,
  module: {
    rules
  },
  resolve: {
    modules: ["src", "node_modules"],
    extensions: ["*", ".js", ".scss", ".css", ".html"]
  },
  plugins: [new webpack.ProgressPlugin()]
};
