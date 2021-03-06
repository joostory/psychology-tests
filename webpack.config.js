const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'psy-tests.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: "/node_modules",
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ["style-loader", 'css-loader']
      }
    ]
  }
}
