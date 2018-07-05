import path from "path"
import webpack from "webpack"

export default {
  // devtools: "eval-source-map",
  mode: "development", // "production" | "development" | "none"
  entry: [
    "webpack-hot-middleware/client",
    path.join(__dirname, "/client/src/index.js")
  ],
  output: {
      path: path.join(__dirname, "/client/src/index.js"),
      filename: "bundle.js",
      publicPath: "/"
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      // test: /\.xxx$/, // may apply this only for some modules
      options: {
        devtools: "eval-source-map"
      }
    }),
    new webpack.NoEmitOnErrorsPlugin(), // don't reload if there is an error
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(js|css|svg)$/,
        exclude: /(node_modules)/,
        // This is a feature of `babel-loader` for webpack (not Babel itself).
        // It enables caching results in ./node_modules/.cache/babel-loader/
        // directory for faster rebuilds.
        // "react-hot-loader/webpack",
        loaders: ["babel-loader?presets[]=react"],
        include: path.join(__dirname, "/client/src")
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".json", ".jsx", ".css", ".svg"]
  }
}