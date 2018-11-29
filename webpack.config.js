const webpack = require('webpack')
const ExtractCssChunksPlugin = require('extract-css-chunks-webpack-plugin')

const optimization = {
  runtimeChunk: {
    name: 'wpruntime',
  },
  splitChunks: {
    cacheGroups: {
      chunks: 'all',
      styles: {
        name: 'styles',
        test: module => {
          return module.nameForCondition
          && /\.s?css$/.test(module.nameForCondition())
          && !/^javascript/.test(module.type)
        },
        chunks: 'all',
      },
      default: false,
      vendors: false,
    },
  },
}

const resolve = {
  alias: {
    src: `${__dirname}/src`,
  },
}

module.exports = {
  mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
  entry: {
    'client': './src/client.js',
  },
  target: 'web',
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].js',
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /.*\.js$/,
        use: 'babel-loader'
      },
      {
        test: /.*\.scss/,
        use: [
          ExtractCssChunksPlugin.loader,
          {
            loader: 'css-loader',
            query: { modules: true },
          },
          'sass-loader',
        ]
      }
    ]
  },

  plugins: [
    new ExtractCssChunksPlugin({
      filename: 'styles.css',
      chunkFilename: 'styles.css',
    }),
    new webpack.EnvironmentPlugin({
      IS_BROWSER: true,
    })
  ],

  optimization,
  resolve,
}
