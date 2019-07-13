const path = require ('path');

const {_csslocalIdentName, appInfo} = require ('./config/web.config');

const DEV = process.env.NODE_ENV == 'development' ? true : false;

module.exports = {
  mode: 'production',
  target: 'node',
  // 入口
  entry: {
    app: [path.join (__dirname, './src/ssrApp.js')],
    // vendor: ['react', 'react-router-dom', 'react-dom', 'redux', 'react-redux'],
  },
  // 输出
  output: {
    path: path.join (__dirname, 'dist/server'),
    filename: 'ssrApp.js',
    libraryTarget:'commonjs2',
    publicPath: '/',
  },
  resolve: {
    alias: {
      // 简略引用组件路径
      '@pages': path.join (__dirname, 'src/pages'),
      '@components': path.join (__dirname, 'src/components'), //component
      '@router': path.join (__dirname, 'src/router'), //router
      '@images': path.join (__dirname, 'src/images'), //images

      'react-dom': DEV ? '@hot-loader/react-dom' : 'react-dom',
      //   redux
      '@store': path.join (__dirname, 'src/store'),
      '@actions': path.join (__dirname, 'src/store/actions'),
      '@reducers': path.join (__dirname, 'src/store/reducers'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [],
};
