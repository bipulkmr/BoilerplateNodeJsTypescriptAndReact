const path = require('path');
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

module.exports = {
    
  entry: ['./client/index.tsx'],
  watch: true,
  target: 'node',
  externals: [
  ],
  module: {
    rules: [
      {
        test: /.(js|tsx)?$/,
         use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/react',
                '@babel/typescript',
                '@babel/env',
              ],
              plugins: [
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-proposal-object-rest-spread',
                [
                  'import',
                  {
                    libraryName: 'antd',
                    libraryDirectory: 'es',
                    style: true,
                  },
                ],
              ],
            },
          },
        exclude: /node_modules/,
      },
      {
        test: /\.(css|less)$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true,
            },
          },
        ],
      }
    ],
  },
  mode: 'development',
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
      plugins: [ new TsconfigPathsPlugin()
      ]
  },
  plugins: [],
  output: {
    path: path.join(__dirname, 'staticfile'),
    filename: 'server.js',
  },
};
devServer: {
    open: true
  }

console.log("loaded");

// resolve: {
//     // Add '.ts' and '.tsx' as resolvable extensions.
//     extensions: ['.ts', '.tsx', '.js', '.json'],
//     alias: {
//       '@ant-design/icons/lib/dist$': path.join(__dirname, './../icons'),
//     },
//     plugins: [
//       new TsconfigPathsPlugin(),
//     ],
//   }