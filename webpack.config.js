const path = require('path');
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};

module.exports.plugins = [];
let params = {};
  params["host"] = "localhost";
  params["port"] = 3000;
  params["server"] = {baseDir: ['./']};
  module.exports.plugins.push(new BrowserSyncPlugin(params));