const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = (_env, argv) => {
  const isProdMode = argv.mode === 'production';
  const isDevMode = !isProdMode;
  const dotenvFileName = isProdMode ? '.env.production' : '.env.development';

  return {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    devtool: isDevMode && 'cheap-module-source-map',
    output: {
      filename: isProdMode ? '[name].[contenthash].js' : 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              cacheCompression: false,
              envName: isProdMode ? 'production' : 'development',
            },
          },
        },
        {
          test: /\.(sa|sc|c)ss$/i,
          exclude: /node_modules/,
          use: [
            isProdMode ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
            },
            {
              loader: 'sass-loader',
            },
          ],
        },
        {
          test: /\.(png|svg|jpg|gif|jpeg)$/,
          exclude: /node_modules/,
          use: ['file-loader'],
        },
        {
          test: /\.(png|woff|woff2|eot|ttf|svg)$/,
          loader: 'url-loader',
          options: { limit: false },
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx', '.scss', '.sass'],
    },
    plugins: [
      new Dotenv({
        path: dotenvFileName,
      }),
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src', 'index.html'),
        favicon: './public/favIco.png',
      }),
      isProdMode &&
        new MiniCssExtractPlugin({
          filename: 'assets/css/[name].[contenthash:8].css',
          chunkFilename: 'assets/css/[name].[contenthash:8].chunk.css',
        }),
    ],

    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
      },
      watchFiles: path.join(__dirname, 'src'),
      port: 3000,
      open: true,
      hot: true,
    },
  };
};
