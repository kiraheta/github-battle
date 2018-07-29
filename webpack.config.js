var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
// creates an index html file inside dist folder incl index_bundle.js file
var webpack = require('webpack');

// NODE_ENV to production
// uglify


var config = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',

  },
  module: {
    rules: [  // loaders
      // babel-loader will be used on all files w/ ext .js
      { test: /\.(js)$/, use: 'babel-loader' },
      // these loaders will be used on files w/ ext .css
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]}
     ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    })
  ],
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development'
};

// if (process.env.NODE_ENV === 'production') {
//   // We're taking config object n accessing plugins
//   config.plugins.push(
//     new webpack.DefinePlugin({
//       'process.env' : {
//         'NODE_ENV' : JSON.stringify(process.env.NODE_ENV)
//       }
//     }),
//     // This will minify our code
//     new webpack.optimize.UglifyJsPlugin()
//   )
// }

module.exports = config;
