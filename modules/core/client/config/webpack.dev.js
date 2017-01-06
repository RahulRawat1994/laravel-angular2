var webpack = require('webpack');
var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractCss = new ExtractTextPlugin('./css/[name].css',{ allChunks : true});
var helpers = require('./helpers');

var plugins = [
    extractCss,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app','vendor','polyfills']
    }),
    new webpack.optimize.DedupePlugin()
]

module.exports = {
  devtool: 'source-map',
  entry: {
    'app': [
        'webpack-dev-server/client?http://localhost:8080/',
        'webpack/hot/dev-server',
        './modules/core/client/main.ts'
    ],
    'polyfills' : [ 
        "./modules/core/client/polyfills.ts"    
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
        
        loader: 'ts-loader',
        exclude:  ['vendor'],
       
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.md$/,
        loader: 'html!markdowns'
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
  plugins: plugins,
  devServer: {
    hot: true,
    proxy: {
      "*": "http://localhost/laravelAngular2/public/"
    }
  }

};
