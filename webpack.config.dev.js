import path from "path"

export default {
  mode: "development", // "production" | "development" | "none"
  entry: path.join(__dirname, "/client/src/index.js"),
  output: {
      path: path.join(__dirname, "/client/src/index.js"),
      filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$|\.css$|\.svg$/,
        exclude: /(node_modules|public)/,
        loaders: [ "babel-loader" ],
        include: path.join(__dirname, "/client/src")
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".json", ".jsx", ".css", ".svg"]
  }
}