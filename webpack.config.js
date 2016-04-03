// var path = require('path')
var autoprefixer = require('autoprefixer')
var precss = require('precss')
var url = require('postcss-url')

module.exports = {
  entry: './app.js',
  output: {
    path: require('path').resolve('build'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules&importLoaders=1!postcss-loader'
      }
    ]
  },
  postcss: function (webpack) {
    return [
      autoprefixer,
      precss,
      postcssImport({
        addDependencyTo: webpack
      }),
      require('postcss-cssnext')()
    ]
  },
  plugins: []
};
