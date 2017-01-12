var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CssFile= new ExtractTextPlugin('style.css');
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            scss:CssFile.extract({
              loader: 'css-loader!sass-loader',
              fallbackLoader: 'vue-style-loader' 
            }),
            sass:CssFile.extract({
              loader: 'css-loader!sass-loader?indentedSyntax',
              fallbackLoader: 'vue-style-loader' 
            }),
            css: CssFile.extract({
              loader: 'css-loader',
              fallbackLoader: 'vue-style-loader' 
            })
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|svg|gif|eot|woff|ttf)$/,
        loader: 'url-loader?limit=4086&name=[path][hash:8].[ext]'
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  plugins: [
    CssFile
  ],
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new webpack.optimize.DedupePlugin()
  ])
}
