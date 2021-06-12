const path = require('path');
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const CircularDependencyPlugin = require("circular-dependency-plugin");

module.exports = {
  entry: './src/Main.ts',
  mode: 'development',          //fixme
  devtool: "inline-source-map", //fixme: use «(none)» for release version
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
    library: "home"
  },
  plugins: [
    new BrowserSyncPlugin({
      host: "localhost",
      port: 3000,
      server: {
        baseDir: ['./']
      }
    }),
    new CircularDependencyPlugin({
      entry: "src",
      exclude: /a\.js|node_modules/,
      cwd: process.cwd(),
    })
  ],
  resolve: {
    extensions: [".ts", ".js"],
  },
};