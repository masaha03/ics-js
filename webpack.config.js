'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',

  output: {
    path: 'dist',
    filename: 'ics-js.js',
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
      }
    ],
  },

  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js'],
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      mangle: true,
      output: {
        comments: false
      },
    }),
  ],
};
