var path = require("path");

module.exports = {
  output: {
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "static"),
    compress: true
  }
};
