const webpack = require('webpack');
const path = require('path');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'assets/[hash].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(svg|eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets/',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@pages': path.join(__dirname, '/src/Pages'),
      '@components': path.join(__dirname, '/src/Components'),
      '@assets': path.join(__dirname, '/src/Assets'),
      '@routers': path.join(__dirname, '/src/Routers'),
      '@reducers': path.join(__dirname, '/src/Reducers'),
      '@store': path.join(__dirname, '/src/Store'),
      '@constants': path.join(__dirname, '/src/Constants'),
      '@actions': path.join(__dirname, '/src/Actions'),
      '@services': path.join(__dirname, '/src/Services'),
      '@containers': path.join(__dirname, '/src/Containers'),
    },
  },
  plugins: [
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
    new LodashModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      title: 'My App',
    }),  
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\\/]node_modules[\\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    port:3000
  },
};

module.exports = config;
