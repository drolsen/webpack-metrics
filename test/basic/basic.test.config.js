const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

const config = {
  entry: path.resolve(__dirname, '../dummy-entry.js'),
  output: {
    path: path.resolve(__dirname, '../../dist'), 
    filename: '[name].js'
  },
  optimization: {
    minimize: false
  }
};

module.exports = (env, argv) => {
  config.plugins = [
    new CleanWebpackPlugin({
      'cleanOnceBeforeBuildPatterns': [path.resolve('./dist/')]
    }),
  ];
  return config;
};
