var path = require('path');

var autoprefixer = require('autoprefixer');
var precss = require('precss');

module.exports = {
  entry: {
    app: ['./app.js']
  },
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
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  postcss: function (webpack) {
    return [
      autoprefixer,
      precss,
      postcssImport({
        addDependencyTo: webpack
      })
    ]
  },
  plugins: []
};
