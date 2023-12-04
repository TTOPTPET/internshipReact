const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const postcssModulesValues = require('postcss-modules-values');

module.exports = {
  output: {
    path: path.join(__dirname, "/dist"), 
    filename: "bundle.js", 
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html", 
    }),
  ],
  devServer: {
    port: 3000, 
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/, 
        exclude: /node_modules/, 
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/, 
        use: [
          {
            loader: "style-loader",
          },
          {
              loader: 'css-loader',
              options: {
                  modules: {
                    auto: true, localIdentName: "[name]_[local]_[hash:base64:5]",
                  },
              }
          },
          {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  ident: 'postcss',
                  config: false,
                }
              }
          }
        ],
      },
      {
        test: /\.(png|jpg|svg)$/, 
        loader: "url-loader",
        options: { limit: false },
      },
    ],
  },
};