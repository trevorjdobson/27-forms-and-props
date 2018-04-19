const config = {
  mode: 'development',
  entry: "./src/app.js",
  module: {
    rules: [
      {test: /\.js$/, loader: 'babel-laoder'},
      {test: /\.css$/, loader: ['style-laoder', 'css-loader']}
    ]
  }
}