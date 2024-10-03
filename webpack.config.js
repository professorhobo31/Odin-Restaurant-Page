const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js", //ENTRY POINT
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      //adds our newly downloaded HTML plugin to webpack's execution
      template: "./src/template.html", //sets the path to our template file
    }),
  ],
};
