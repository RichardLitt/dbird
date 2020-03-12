const path = require('path')

module.exports = {
  mode: 'none',
  entry: './src/d3-towns.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'd3-towns.bundle.js',
    crossOriginLoading: 'anonymous'
  },
  devServer: {
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
  },
  module: {
    rules: [
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      }
    ]
  }
}
