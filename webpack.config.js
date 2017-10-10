'use strict';

module.exports = {
  entry: './src/index.ts',
  output: { filename: 'build/dist/index.js'},
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: [ '.ts', '.js'  ]
  }
};
