
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
//  entry: './src/index.js',
entry:'./src/dropdown-search.js',
  // output: {
  //   path: path.resolve(__dirname, 'dist'),
  //   filename: 'bundle.js'
  // },
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'dropdown-search-bundle.js'
    },
 // plugins: [new HtmlWebpackPlugin()],
  module: {
    rules: [
    //   {
    //     test: /\.css$/,
    //     use: [
    //         MiniCssExtractPlugin.loader,
    //         {
    //             loader: 'css-loader',
    //             options: {
    //                 importLoaders: 1,
    //                 modules: true
    //             }
    //         }
    //     ],
    //     exclude: /\.module\.css$/
    //   },
      {
        test: /\.html$/i,
        loader: "html-loader",       
      },
      {
        test: /\.css$/,
        use: [
            MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    importLoaders: 1,
                    modules: true
                }
            }
        ],
        include: /\.module\.css$/
      }
    ]
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //     template: path.resolve(__dirname, "index.html")
    // }),
    new HtmlWebpackPlugin(),
    new MiniCssExtractPlugin()
  ],
  optimization: {
    minimize: false,
    usedExports: false,
  }
};

module.exports = config;
