var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractCss = new ExtractTextPlugin('./css/[name].css',{ allChunks : true});
var helpers = require('./helpers');


var plugins = [
    extractCss,
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),
    new webpack.optimize.DedupePlugin()
]

module.exports = {
  entry: {
    'app': [
        './angular/main.ts'
    ],
    'polyfills' : [ 
        "./angular/polyfills.ts"    
    ]
  },

  "output" : {
    path: 'public/assets/js',
    filename: '[name].bundle.js'
  },
   
  resolve: {
    moduleDirectories: ['node_modules'],
    extensions: ['', '.ts', '.js']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css', 'postcss-loader',{
          publicPath : "../"
        })
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass', {
          publicPath : "../"
        })
      }
    ]
  },
  plugins: plugins

};
