const webpack = require('webpack');
const path = require('path');
const ManifestPlugin = require('webpack-manifest-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const getAbsoluteDir = dir => path.resolve(__dirname, dir)
const isProduction = process.env.NODE_ENV === 'production'

const extractLess = new ExtractTextPlugin({
  filename: isProduction ? '[name].[contenthash].css' : '[name].css',
  disable: !isProduction,
})
const extractCss = new ExtractTextPlugin({
  filename: isProduction ? '[name].[contenthash].css' : '[name].css',
  disable: !isProduction,
})

let webpackPlugins = [
  new HtmlWebpackPlugin({
    template: 'client/index.html',
    filename: 'index.html',
    inject: 'body',
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: module => module.context && module.context.indexOf('node_modules') !== -1,
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'manifest',
    minChunks: Infinity,
  }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(isProduction ? 'production' : 'development'),
  }),
  extractLess,
  extractCss,
]

if (isProduction) {
  webpackPlugins = webpackPlugins.concat([
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
    }),
    new ManifestPlugin({
      fileName: 'mix-manifest.json',
    }),
  ])
}

let babelPresets = [['es2015', { modules: false }], 'react']
if (isProduction) {
  babelPresets = babelPresets.concat(['react-optimize'])
}

module.exports = {
  devServer: {
    contentBase: "./web/assets/client",
    port: 8081,
  },

  entry: {
    app: getAbsoluteDir('client/index.js'),
  },

  plugins: webpackPlugins,

  output: {
    path: getAbsoluteDir('web/assets/client'),
    publicPath: '/assets/client/',
    filename: isProduction ? '[name].[chunkhash].js' : '[name].js',
    chunkFilename: isProduction ? '[name].[chunkhash].js' : '[name].js',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      getAbsoluteDir('client/js'),
      getAbsoluteDir('node_modules'),
    ],
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: babelPresets,
            babelrc: false,
          },
        }],
      },
      {
        test: /\.less$/,
        use: extractLess.extract({
          use: ['css-loader', 'less-loader'],
          fallback: 'style-loader',
        }),
      },
      {
        test: /\.css/,
        use: extractCss.extract({
          use: ['css-loader'],
          fallback: 'style-loader',
        }),
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: isProduction ? 'file-loader?name=fonts/[name].[hash].[ext]' : 'file-loader?name=fonts/[name].[ext]',
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/,
        use: 'file-loader'
      },
    ],
  },

  watchOptions: {
    poll: true,
  },
}
