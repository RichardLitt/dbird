const path = require('path')

module.exports = {
  mode: 'none',
  entry: './src/d3-biophysical.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'd3-biophysical.bundle.js',
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
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}
