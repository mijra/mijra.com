// var path = require('path')
var autoprefixer = require('autoprefixer')
var precss = require('precss')
var cssimport = require('postcss-import')
var url = require('postcss-url')
var cssnext = require('postcss-cssnext')

module.exports = {
  entry: './app.js',
  template: './index.html',
  output: {
    path: __dirname + "/dist",
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.css$/,
      // loader: 'style-loader!css-loader?modules&importLoaders=1!postcss-loader'
      loader: 'style-loader!css-loader!postcss-loader'
    }]
  },
  postcss: function (webpack) {
    return [
      autoprefixer,
      precss,
      cssimport({
        addDependencyTo: webpack
      }),
      cssnext()
    ]
  },
  plugins: []
}
