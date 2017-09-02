const webpack = require('webpack');
const path = require('path');
const env = process.env.NODE_ENV || 'development';

const config = {
  entry: './client/src/index.jsx',
  output: {
    path: path.join(__dirname, 'public/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/,
        include: path.join(__dirname, 'client/src'),
        exclude: ['node_modules'],
        use: [
          { loader: 'babel-loader',
            options: {
              presets: ['react', 'es2015'],
              cacheDirectory: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
};

// if (env === 'production') {
//   push unglify to plugin to unglify code
// }

module.exports = config;