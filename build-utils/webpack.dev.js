const commonPaths = require("./common-paths");

const webpack = require("webpack");

const port = process.env.PORT || 3000;

const config = {
  mode: "development",
  entry: {
    app: `${commonPaths.appEntry}/index.js`,
  },
  output: {
    filename: "[name].[hash].js",
  },
  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom",
      "api": `${commonPaths.appEntry}/api/`,
      "theme": `${commonPaths.appEntry}/theme/`
    },
    extensions: [
      '.js',
      '.jsx'
    ],
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              // localsConvention: "camelCase",
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: false,
              // localIdentName: "[local]___[hash:base64:5]",
            }
          },
          {
            loader: "less-loader"
          }
        ]
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    host: "localhost",
    port: port,
    historyApiFallback: true,
    hot: true,
    open: true,
  },
};

module.exports = config;
