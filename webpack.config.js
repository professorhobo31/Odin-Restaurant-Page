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
      template: "./src/template.html", //HTML TEMPLATE FILE
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"], //IF ERROR CHECK ORDER (goes backwards)
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
};
