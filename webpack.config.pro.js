const baseConfig = require ('./webpack.config.base');
const CleanWebpackPlugin = require ('clean-webpack-plugin');

const config = {
  ...baseConfig,
  mode: 'production',
  devtool: 'none',
  plugins: [
    ...baseConfig.plugins,
    new CleanWebpackPlugin (), // 每次打包前清空
  ],
};

module.exports = config;
