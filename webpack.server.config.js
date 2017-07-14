const fs = require('fs')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const isProduction = process.env.NODE_ENV === 'production'
const getAbsoluteDir = dir => path.resolve(__dirname, dir)

const extractLess = new ExtractTextPlugin({
  filename: isProduction ? '[name].[contenthash].css' : '[name].css',
  disable: !isProduction,
})
const extractCss = new ExtractTextPlugin({
  filename: isProduction ? '[name].[contenthash].css' : '[name].css',
  disable: !isProduction,
})

module.exports = {

  entry: path.resolve(__dirname, 'client/server.js'),

  output: {
    path: getAbsoluteDir('web/assets/client'),
    filename: 'server.bundle.js'
  },

  target: 'node',

  // keep node_module paths out of the bundle
  externals: fs.readdirSync(path.resolve(__dirname, 'node_modules')).concat([
    'react-dom/server', 'react/addons',
  ]).reduce(function (ext, mod) {
    ext[mod] = 'commonjs ' + mod
    return ext
  }, {}),

  node: {
    __filename: true,
    __dirname: true
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
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
    ]
  }

}