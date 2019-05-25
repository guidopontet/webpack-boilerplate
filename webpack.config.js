const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/js/app.js',
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },

  devServer: {
    port: 8080
  },

  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: { collapseWhitespace: true }
    }),
    new MiniCssExtractPlugin({
      filename: 'bundle.css'
    })
  ]
};
