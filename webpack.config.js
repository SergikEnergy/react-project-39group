const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

const mode = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 3000;
const devMode = mode === 'development';
const target = devMode ? 'web' : 'browserslist';
const devtool = devMode && 'source-map';

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  devtool,
  target,
  output: {
    filename: devMode ? '[name].js' : '[name].[contenthash:8].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.sass'],
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
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
            envName: devMode ? 'development' : 'production',
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        exclude: /node_modules/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: devMode,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('postcss-preset-env')],
              },
            },
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: devMode },
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

  plugins: [
    new Dotenv({ path: path.resolve(__dirname, '.env'), systemvars: true }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      filename: 'index.html',
      favicon: './public/favIco.png',
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[contenthash:8].css',
      chunkFilename: devMode ? '[name].chunk.css' : '[name].[contenthash:8].chunk.css',
    }),
  ],
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, '/'),
    },
    watchFiles: path.join(__dirname, 'src'),
    port,
    open: true,
    hot: true,
  },
};