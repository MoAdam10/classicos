
const path = require('path')
const webpack = require('webpack')


module.exports = {
   mode: 'development',
   entry: ['babel-polyfill', './app/main.jsx'],
   output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'bundle.js'
   },
   devtool: 'source-map',
   resolve: {
     extensions: ['.js', '.jsx']
   },
   module: {
     rules: [
       {
         test: /jsx?$/,
         include: path.resolve(__dirname, './app'),
         loader: 'babel-loader'
       },
       {
         test: /\.css$/,
         use: [
           'style-loader',
           'css-loader'
         ]
       }
     ]
   },
   plugins: [
      new webpack.ProvidePlugin({
        process: 'process/browser',
      }),
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(process.env)
      })
    ],
   
}