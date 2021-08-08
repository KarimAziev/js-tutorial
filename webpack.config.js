const paths = require('./scripts/paths');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PrettierPlugin = require('prettier-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: [
    //    'eventsource-polyfill',
    'webpack-hot-middleware/client',
    './src/log.js',
    './src/index.js',
  ],
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env']],
            },
          },
        ],
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ESLintPlugin({
      files: ['.', 'src'],
      formatter: 'table',
      failOnError: false,
      emitError: false,
    }),
    new PrettierPlugin(),
  ],
};
