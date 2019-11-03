var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [// #3 - Using Provide Plugin
    new webpack.ProvidePlugin({
      $: 'jquery'
    })
  ],
//   resolve: {// #2 - Using alias
//     alias: {
//     Vendor: path.resolve(__dirname, './app/vendor/')
//     }
//   }
};