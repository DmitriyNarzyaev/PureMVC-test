const path = require('path');
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

module.exports = {
  entry: './src/Main.ts',
  mode: 'development',          //fixme
  module : {
    rules:[
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new BrowserSyncPlugin({
      host: "localhost",
      port: 3000,
      server: {
        baseDir: ['./']
      }
    })
  ]
};