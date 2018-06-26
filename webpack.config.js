var path = require('path'); 
var HtmlWebpackPlugin = require('html-webpack-plugin');  
// creates an index html file inside dist folder incl index_bundle.js file 

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [  // loaders
      // babel-loader will be used on all files w/ ext .js
      { test: /\.(js)$/, use: 'babel-loader' }, 
      // these loaders will be used on files w/ ext .css
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]} 
     ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'app/index.html'
  })]
};
