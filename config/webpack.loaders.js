module.exports = {
  rules: [{
    test: /\.svg$/,
    loader: 'thread-loader!babel-loader!svg-react-loader'
  }, {
    test: /\.svg$/,
    loader: 'url-loader'
  }, {
    test: /\.(png|gif)$/,
    loader: 'url-loader?mimetype=image/png',
    exclude: /node_module/
  }, {
    test: /\.(woff|woff2|eot)$/,
    loader: 'url-loader?limit=100000'
  },{
    test: /\.ya?ml$/,
    loaders: ['thread-loader', 'json-loader', 'yaml-loader'],
    exclude: /node_module/
  }]
};
