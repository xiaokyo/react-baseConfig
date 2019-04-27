const path = require ('path');
const HtmlWebpackPlugin = require ('html-webpack-plugin');
const MiniCssExtractPlugin = require ('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require ('optimize-css-assets-webpack-plugin');

module.exports = {
  // 入口
  //   entry: path.join (__dirname, './src/index.js'),
  entry: {
    app: ['@babel/polyfill', path.join (__dirname, './src/index.js')],
    vendor: ['react', 'react-router-dom', 'react-dom', 'redux', 'react-redux'],
  },

  // 输出
  output: {
    path: path.join (__dirname, 'dist'),
    filename: 'assets/[name].[hash].js',
    chunkFilename: 'chunks/[name].[chunkhash].js',
    publicPath: '/',
  },
  resolve: {
    alias: {
      // 简略引用组件路径
      '@pages': path.join (__dirname, 'src/pages'),
      '@components': path.join (__dirname, 'src/components'), //component
      '@router': path.join (__dirname, 'src/router'), //router
      '@images': path.join (__dirname, 'src/images'), //images

      //   redux
      '@store': path.join (__dirname, 'src/store'),
      '@actions': path.join (__dirname, 'src/store/actions'),
      '@reducers': path.join (__dirname, 'src/store/reducers'),
    },
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          {loader: MiniCssExtractPlugin.loader},
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]--[hash:base64:5]',
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new HtmlWebpackPlugin ({
      filename: 'index.html',
      template: path.join (__dirname, 'public/index.html'),
    }),
    new MiniCssExtractPlugin ({
      // 压缩css
      filename: 'css/[name].[contenthash].css',
      chunkFilename: 'css/chunks/[id].[contenthash].css',
    }),
    new OptimizeCssAssetsPlugin (),
  ],
};
