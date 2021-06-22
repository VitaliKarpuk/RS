const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, options) => {
  const isProduction = options.mode === 'production';
  const config = { mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? 'none' : 'source-map',
    watch: !isProduction,
    entry: ['./src/index.js', './src/sass/style.scss'],
    output: { path: path.join(__dirname, '/dist'),
      filename: 'script.js' },
    module: { rules: [
      { enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader' },
      { test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader' },
      { test: /\.html$/i,
        loader: 'html-loader',
        options: { attributes: false } },
      { test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader',
        ] },

      { test: /\.(png|jpeg|jpg|mp3|gif|svg|ico)$/,
        use: [
          { loader: 'file-loader',
            options: { outputPath: 'images',
              name: '[name].[ext]' } },
        ] },


    ] },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({ template: 'index.html' }),
      new MiniCssExtractPlugin({ filename: 'style.css' }),
    ],
    devServer: { open: true } };

  return config;
};