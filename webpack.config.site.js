var webpack = require("webpack");
var makeConfig = require("./makewebpackconfig.js");

module.exports = makeConfig({
  plugins: [
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify("production")
        }
      })
  ],
  output: {
    filename: "./bundle.js"
  }
});
