const path = require("path");

const config = {
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: "babel-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js"],
  },
  externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_',
    },
  },
}

const requireConfig = Object.assign( {}, config,
  {
    mode: "production",
    entry: "./src/index.js",
    output: {
      path: path.resolve("dist"),
      filename: "index-require.cjs",
      libraryTarget: "commonjs2"
    },  
  } 
);

module.exports = requireConfig;
