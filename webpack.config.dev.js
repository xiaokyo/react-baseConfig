const path = require("path");
const baseConfig = require("./webpack.config.base");
const { devServer } = require("./config/web.config");

const config = {
  ...baseConfig,
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true, // gzip压缩
    host: devServer.url, // 允许ip访问
    hot: true, // 热更新
    historyApiFallback: true, // 解决启动后刷新404
    port: devServer.port // 端口
    // proxy: {
    //   // 配置服务代理
    //   '/api': {
    //     target: 'http://xiaok.com',
    //     pathRewrite: {'^/api': ''}, //可转换
    //     changeOrigin: true, //跨域问题
    //   },
    // },
  }
};

module.exports = config;
