import webpack from "webpack";
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
import HtmlWebpackPlugin from "html-webpack-plugin";

import paths from "./paths";
import rules from "./rules";

module.exports = {
  mode: "production",
  output: {
    filename: `${paths.jsFolder}/[name].[hash].js`,
    path: paths.outputPath,
    chunkFilename: "[name].[chunkhash].js"
  },
  module: {
    rules
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: paths.templatePath,
      minify: {
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true,
        preserveLineBreaks: true,
        minifyURLs: true,
        removeComments: true,
        removeAttributeQuotes: true
      }
    })
  ],
  devtool: "source-map"
};
