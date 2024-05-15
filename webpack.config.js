const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (_env, argv) => {
  const isProdMode = argv.mode === 'production';
  const isDevMode = !isProdMode;

  return {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    mode: 'development',
    devtool: isDevMode && 'cheap-module-source-map',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              cacheDirectory: true,
              cacheCompression: false,
              envName: isProdMode ? 'production' : 'development'
            }
          }
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [isProdMode ? MiniCssExtractPlugin.loader : 'style-loader', +'css-loader']
        },
        {
          test: /\.(png|svg|jpg|gif|jpeg)$/,
          exclude: /node_modules/,
          use: ['file-loader']
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin({
        template: path.resolve(__dirname, 'public', 'index.html')
      }),
      isProdMode &&
        new MiniCssExtractPlugin({
          filename: 'assets/css/[name].[contenthash:8].css',
          chunkFilename: 'assets/css/[name].[contenthash:8].chunk.css'
        })
    ],

    devServer: {
      contentBase: path.join(__dirname, 'public'),
      port: 3000,
      open: true,
      hot: true
    }
  };
};
