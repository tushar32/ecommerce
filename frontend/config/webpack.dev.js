const { merge } = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common');
const path = require('path');

const devConfig = {
  mode: 'development',
  devtool: 'source-map',
  target:  "web",
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: "/"
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    hot: false,
    liveReload: true,
    watchOptions: {poll: true}
  },
  
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    path.resolve(__dirname, './../src/index.js'),
],
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',  // responsible to load html code inside index.html from main.js
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    rules: [
      {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader',
            'postcss-loader'
        ],
      },
      {
          test: /\.scss$/,
          use: [
              'style-loader', // creates style nodes from JS strings
              'css-loader', // translates CSS into CommonJS
              'postcss-loader',
              'sass-loader' // compiles Sass to CSS, using Node Sass by default
          ]
      }
    ]
  }
};

module.exports = merge(commonConfig, devConfig);
